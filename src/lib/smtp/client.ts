import { connect as netConnect, type Socket } from "node:net";
import { connect as tlsConnect } from "node:tls";
import { SmtpResponseReader, type SmtpResponse } from "./protocol";

/**
 * Minimal SMTP client (EHLO/STARTTLS/AUTH PLAIN/MAIL/RCPT/DATA) built on node:net + node:tls.
 *
 * Portability: these are Node.js core modules, not a third-party dependency — they work
 * natively on a plain Node.js VPS (the current deploy target; see _cloudflare-legacy/ for the
 * Cloudflare Workers config this project previously targeted, no longer wired up).
 *
 * Note on types: `tls.TLSSocket` extends `net.Socket`, so a single `Socket` type covers both —
 * no union/cast needed between the plain and upgraded connection.
 */

export class SmtpError extends Error {
  constructor(public code: number | undefined, message: string) {
    super(message);
    this.name = "SmtpError";
  }
}

export interface SmtpConfig {
  host: string;
  port: number;
  secure: "starttls" | "tls" | "none";
  user: string;
  pass: string;
  envelopeFrom: string;
  envelopeTo: string;
  timeoutMs?: number;
}

function expect(res: SmtpResponse, okCodes: number[], step: string) {
  if (!okCodes.includes(res.code)) {
    throw new SmtpError(res.code, `SMTP ${step} rejeitado: ${res.code} ${res.lines.join(" ")}`);
  }
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, message: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), timeoutMs);
    promise.then(
      (value) => { clearTimeout(timer); resolve(value); },
      (err) => { clearTimeout(timer); reject(err); }
    );
  });
}

// `onCreate` runs synchronously right after the socket exists (before the
// connect/handshake callback fires), so the caller can wire up its "data"
// listener before any byte can arrive — matters most for the STARTTLS
// upgrade, where the server's post-handshake EHLO reply can arrive within
// the same tick as "secureConnect".
function connectPlain(host: string, port: number, onCreate: (sock: Socket) => void): Promise<Socket> {
  return new Promise<Socket>((resolve, reject) => {
    const sock = netConnect({ host, port }, () => resolve(sock));
    sock.once("error", reject);
    onCreate(sock);
  });
}

function connectTls(host: string, port: number, onCreate: (sock: Socket) => void): Promise<Socket> {
  return new Promise<Socket>((resolve, reject) => {
    const sock = tlsConnect({ host, port, servername: host }, () => resolve(sock));
    sock.once("error", reject);
    onCreate(sock);
  });
}

function upgradeToTls(plainSocket: Socket, servername: string, onCreate: (sock: Socket) => void): Promise<Socket> {
  return new Promise<Socket>((resolve, reject) => {
    const tlsSocket = tlsConnect({ socket: plainSocket, servername }, () => resolve(tlsSocket));
    tlsSocket.once("error", reject);
    onCreate(tlsSocket);
  });
}

export async function sendMailSmtp(cfg: SmtpConfig, message: string): Promise<void> {
  const timeoutMs = cfg.timeoutMs ?? 10_000;
  let reader = new SmtpResponseReader();
  let pendingResolvers: ((res: SmtpResponse) => void)[] = [];
  let pendingQueue: SmtpResponse[] = [];
  let fatalError: Error | null = null;

  const attach = (sock: Socket) => {
    sock.setEncoding("utf8");
    sock.on("data", (chunk: string) => {
      const responses = reader.push(chunk);
      for (const res of responses) {
        const resolve = pendingResolvers.shift();
        if (resolve) resolve(res);
        else pendingQueue.push(res);
      }
    });
    sock.on("error", (err: Error) => {
      fatalError = err;
      pendingResolvers.forEach((r) => r({ code: -1, lines: [err.message] }));
      pendingResolvers = [];
    });
  };

  const readResponse = (): Promise<SmtpResponse> => {
    if (pendingQueue.length) return Promise.resolve(pendingQueue.shift()!);
    if (fatalError) return Promise.reject(fatalError);
    return new Promise((resolve) => pendingResolvers.push(resolve));
  };

  const writeLine = (sock: Socket, line: string): Promise<void> =>
    new Promise((resolve, reject) => {
      sock.write(line + "\r\n", (err) => (err ? reject(err) : resolve()));
    });

  const command = async (sock: Socket, line: string | null, okCodes: number[], step: string): Promise<SmtpResponse> => {
    if (line !== null) await writeLine(sock, line);
    const res = await readResponse();
    expect(res, okCodes, step);
    return res;
  };

  let socket: Socket =
    cfg.secure === "tls"
      ? await withTimeout(connectTls(cfg.host, cfg.port, attach), timeoutMs, "Timeout a ligar ao servidor SMTP")
      : await withTimeout(connectPlain(cfg.host, cfg.port, attach), timeoutMs, "Timeout a ligar ao servidor SMTP");

  try {
    socket.setTimeout(timeoutMs, () => {
      fatalError = new Error("Timeout de inatividade na ligação SMTP");
      socket.destroy();
    });

    await command(socket, null, [220], "greeting");
    await command(socket, `EHLO ${cfg.host}`, [250], "EHLO");

    if (cfg.secure === "starttls") {
      await command(socket, "STARTTLS", [220], "STARTTLS");
      // Hand the raw socket over to the TLS layer exclusively — it must read the
      // handshake bytes itself; a leftover "data" listener here would steal them.
      socket.removeAllListeners("data");
      socket.removeAllListeners("error");
      reader = new SmtpResponseReader(); // fresh reader for the upgraded stream
      pendingQueue = [];
      socket = await withTimeout(upgradeToTls(socket, cfg.host, attach), timeoutMs, "Timeout no handshake TLS");
      await command(socket, `EHLO ${cfg.host}`, [250], "EHLO (pós-STARTTLS)");
    }

    const authPlain = Buffer.from(`\0${cfg.user}\0${cfg.pass}`, "utf8").toString("base64");
    await command(socket, `AUTH PLAIN ${authPlain}`, [235], "AUTH PLAIN");

    await command(socket, `MAIL FROM:<${cfg.envelopeFrom}>`, [250], "MAIL FROM");
    await command(socket, `RCPT TO:<${cfg.envelopeTo}>`, [250, 251], "RCPT TO");
    await command(socket, "DATA", [354], "DATA");
    await command(socket, `${message}.`, [250], "DATA body");
    await command(socket, "QUIT", [221], "QUIT").catch(() => {}); // best-effort
  } finally {
    socket.destroy();
  }
}
