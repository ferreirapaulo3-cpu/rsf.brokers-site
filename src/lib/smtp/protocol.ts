// Pure SMTP/MIME helpers — no I/O, so they can be unit-tested without a network stack.

/** Strips CR/LF from a value before it is placed in a header, preventing header/SMTP injection. */
export function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

const isAsciiPrintable = (s: string) => /^[\x20-\x7e]*$/.test(s);

/** RFC 2047-encodes a header value when it contains non-ASCII characters (e.g. "João", "orçamento"). */
export function encodeHeaderValue(value: string): string {
  const clean = sanitizeHeaderValue(value);
  if (isAsciiPrintable(clean)) return clean;
  const b64 = Buffer.from(clean, "utf8").toString("base64");
  return `=?UTF-8?B?${b64}?=`;
}

/** Folds a base64 string into CRLF-separated lines of at most `lineLength` chars (RFC 2045). */
export function foldBase64(b64: string, lineLength = 76): string {
  const lines: string[] = [];
  for (let i = 0; i < b64.length; i += lineLength) {
    lines.push(b64.slice(i, i + lineLength));
  }
  return lines.join("\r\n");
}

export interface MessageInput {
  from: string;
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}

/**
 * Builds a complete MIME message (headers + body) for the SMTP DATA command.
 * Body is sent as base64 so dot-stuffing and 8-bit transport concerns never apply.
 */
export function buildMessage({ from, to, subject, text, replyTo }: MessageInput): string {
  const headers = [
    `From: ${sanitizeHeaderValue(from)}`,
    `To: ${sanitizeHeaderValue(to)}`,
    replyTo ? `Reply-To: ${sanitizeHeaderValue(replyTo)}` : null,
    `Subject: ${encodeHeaderValue(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
  ].filter((h): h is string => h !== null);

  const body = foldBase64(Buffer.from(text, "utf8").toString("base64"));

  return `${headers.join("\r\n")}\r\n\r\n${body}\r\n`;
}

export interface SmtpResponse {
  code: number;
  lines: string[];
}

/**
 * Incremental parser for SMTP server responses. Feed it raw bytes as they arrive;
 * it returns any complete responses found so far (a response may span multiple lines,
 * e.g. "250-PIPELINING" ... "250 OK" — only the last line has a space after the code).
 */
export class SmtpResponseReader {
  private buffer = "";

  push(chunk: string): SmtpResponse[] {
    this.buffer += chunk;
    const responses: SmtpResponse[] = [];

    for (;;) {
      const newlineIndex = this.buffer.indexOf("\n");
      if (newlineIndex === -1) break;

      // Accumulate lines until we see one whose 4th character is a space (final line).
      let searchStart = 0;
      let consumedUpTo = -1;
      const pendingLines: string[] = [];
      let code = NaN;

      while (true) {
        const nl = this.buffer.indexOf("\n", searchStart);
        if (nl === -1) { pendingLines.length = 0; break; }
        const rawLine = this.buffer.slice(searchStart, nl).replace(/\r$/, "");
        const match = /^(\d{3})([ -])(.*)$/.exec(rawLine);
        if (!match) { pendingLines.length = 0; consumedUpTo = -1; break; }
        code = Number(match[1]);
        pendingLines.push(match[3]);
        searchStart = nl + 1;
        if (match[2] === " ") { consumedUpTo = searchStart; break; }
      }

      if (consumedUpTo === -1) break; // response not complete yet, wait for more data
      responses.push({ code, lines: pendingLines });
      this.buffer = this.buffer.slice(consumedUpTo);
    }

    return responses;
  }
}
