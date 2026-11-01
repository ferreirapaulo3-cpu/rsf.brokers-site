import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer, type Server } from "node:net";
import { sendMailSmtp, SmtpError } from "./client";
import { buildMessage } from "./protocol";

/**
 * Minimal fake SMTP server (plain, no STARTTLS) to integration-test client.ts end to end
 * without any real network/provider. STARTTLS is reviewed but NOT covered by this test
 * (would require a TLS certificate fixture) — verify that path against a real provider
 * before relying on it in production.
 */
function startFakeSmtpServer(expected: { user: string; pass: string }) {
  let received: { mailFrom?: string; rcptTo?: string; data?: string } = {};
  let inData = false;
  let dataLines: string[] = [];

  const server: Server = createServer((socket) => {
    socket.setEncoding("utf8");
    socket.write("220 fake.smtp ready\r\n");

    let buffer = "";
    socket.on("data", (chunk: string) => {
      buffer += chunk;
      let nl: number;
      while ((nl = buffer.indexOf("\n")) !== -1) {
        const line = buffer.slice(0, nl).replace(/\r$/, "");
        buffer = buffer.slice(nl + 1);

        if (inData) {
          if (line === ".") {
            inData = false;
            received.data = dataLines.join("\r\n");
            socket.write("250 Queued\r\n");
          } else {
            dataLines.push(line);
          }
          continue;
        }

        if (/^EHLO/i.test(line)) {
          socket.write("250-fake.smtp greets you\r\n250 AUTH PLAIN\r\n");
        } else if (/^AUTH PLAIN /i.test(line)) {
          const b64 = line.split(" ")[2];
          const decoded = Buffer.from(b64, "base64").toString("utf8");
          const [, user, pass] = decoded.split("\0");
          if (user === expected.user && pass === expected.pass) {
            socket.write("235 Authenticated\r\n");
          } else {
            socket.write("535 Authentication failed\r\n");
          }
        } else if (/^MAIL FROM:/i.test(line)) {
          received.mailFrom = line;
          socket.write("250 OK\r\n");
        } else if (/^RCPT TO:/i.test(line)) {
          received.rcptTo = line;
          socket.write("250 OK\r\n");
        } else if (/^DATA/i.test(line)) {
          inData = true;
          dataLines = [];
          socket.write("354 Go ahead\r\n");
        } else if (/^QUIT/i.test(line)) {
          socket.write("221 Bye\r\n");
          socket.end();
        } else {
          socket.write("500 unrecognized\r\n");
        }
      }
    });
  });

  return {
    server,
    getReceived: () => received,
    listen: () =>
      new Promise<number>((resolve) => {
        server.listen(0, "127.0.0.1", () => {
          const addr = server.address();
          resolve(typeof addr === "object" && addr ? addr.port : 0);
        });
      }),
    close: () => new Promise<void>((resolve) => server.close(() => resolve())),
  };
}

test("sendMailSmtp completes a full plaintext conversation against a fake server", async () => {
  const fake = startFakeSmtpServer({ user: "leads@rsf-brokers.pt", pass: "s3cret" });
  const port = await fake.listen();

  try {
    const message = buildMessage({
      from: "leads@rsf-brokers.pt",
      to: "rsf.brokers@gmail.com",
      subject: "Teste",
      text: "Corpo do email de teste",
    });

    await sendMailSmtp(
      {
        host: "127.0.0.1",
        port,
        secure: "none",
        user: "leads@rsf-brokers.pt",
        pass: "s3cret",
        envelopeFrom: "leads@rsf-brokers.pt",
        envelopeTo: "rsf.brokers@gmail.com",
        timeoutMs: 3000,
      },
      message
    );

    const received = fake.getReceived();
    assert.equal(received.mailFrom, "MAIL FROM:<leads@rsf-brokers.pt>");
    assert.equal(received.rcptTo, "RCPT TO:<rsf.brokers@gmail.com>");
    assert.ok(received.data?.includes("Content-Transfer-Encoding: base64"));
    const [, b64Body] = received.data!.split("\r\n\r\n");
    assert.equal(Buffer.from(b64Body.replace(/\r\n/g, ""), "base64").toString("utf8"), "Corpo do email de teste");
  } finally {
    await fake.close();
  }
});

test("sendMailSmtp throws SmtpError on wrong credentials instead of failing silently", async () => {
  const fake = startFakeSmtpServer({ user: "leads@rsf-brokers.pt", pass: "s3cret" });
  const port = await fake.listen();

  try {
    const message = buildMessage({ from: "a@a.pt", to: "b@b.pt", subject: "x", text: "y" });
    await assert.rejects(
      () =>
        sendMailSmtp(
          {
            host: "127.0.0.1",
            port,
            secure: "none",
            user: "leads@rsf-brokers.pt",
            pass: "WRONG",
            envelopeFrom: "a@a.pt",
            envelopeTo: "b@b.pt",
            timeoutMs: 3000,
          },
          message
        ),
      (err: unknown) => err instanceof SmtpError && err.code === 535
    );
  } finally {
    await fake.close();
  }
});
