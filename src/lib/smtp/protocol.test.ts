import { test } from "node:test";
import assert from "node:assert/strict";
import {
  sanitizeHeaderValue,
  encodeHeaderValue,
  foldBase64,
  buildMessage,
  SmtpResponseReader,
} from "./protocol";

test("sanitizeHeaderValue strips CR/LF (header injection)", () => {
  assert.equal(sanitizeHeaderValue("ok\r\nBcc: attacker@evil.tld"), "ok Bcc: attacker@evil.tld");
  assert.equal(sanitizeHeaderValue("  trim me  "), "trim me");
});

test("encodeHeaderValue leaves plain ASCII untouched", () => {
  assert.equal(encodeHeaderValue("[RSF] Contacto - Joao"), "[RSF] Contacto - Joao");
});

test("encodeHeaderValue RFC2047-encodes non-ASCII", () => {
  const encoded = encodeHeaderValue("[RSF] Pedido de orçamento - João");
  assert.match(encoded, /^=\?UTF-8\?B\?[A-Za-z0-9+/=]+\?=$/);
  const b64 = encoded.slice("=?UTF-8?B?".length, -"?=".length);
  assert.equal(Buffer.from(b64, "base64").toString("utf8"), "[RSF] Pedido de orçamento - João");
});

test("foldBase64 wraps at 76 chars", () => {
  const long = "A".repeat(200);
  const folded = foldBase64(long, 76);
  const lines = folded.split("\r\n");
  assert.equal(lines.length, Math.ceil(200 / 76));
  for (const l of lines.slice(0, -1)) assert.equal(l.length, 76);
});

test("buildMessage produces decodable base64 body and encoded subject", () => {
  const msg = buildMessage({
    from: "no-reply@rsf-brokers.pt",
    to: "rsf.brokers@gmail.com",
    subject: "Pedido de orçamento - Automóvel",
    text: "Nome: João\nMensagem: preciso de um seguro",
    replyTo: "joao@example.com",
  });
  assert.match(msg, /^From: no-reply@rsf-brokers\.pt\r\n/);
  assert.match(msg, /Reply-To: joao@example\.com\r\n/);
  assert.match(msg, /Content-Transfer-Encoding: base64\r\n/);
  const [, bodyB64] = msg.split("\r\n\r\n");
  const decoded = Buffer.from(bodyB64.replace(/\r\n/g, ""), "base64").toString("utf8");
  assert.equal(decoded, "Nome: João\nMensagem: preciso de um seguro");
});

test("buildMessage strips CRLF injected via a form field", () => {
  const msg = buildMessage({
    from: "no-reply@rsf-brokers.pt",
    to: "rsf.brokers@gmail.com",
    subject: "x",
    text: "corpo",
    replyTo: "evil@x.tld\r\nBcc: victim@x.tld",
  });
  // The injected text survives as inert content on the Reply-To line, but must never
  // start a genuine new header line of its own.
  assert.doesNotMatch(msg, /\r\nBcc:/);
  assert.ok(msg.includes("Reply-To: evil@x.tld Bcc: victim@x.tld\r\n"));
});

test("SmtpResponseReader parses a single-line response", () => {
  const reader = new SmtpResponseReader();
  const res = reader.push("250 OK\r\n");
  assert.equal(res.length, 1);
  assert.equal(res[0].code, 250);
  assert.deepEqual(res[0].lines, ["OK"]);
});

test("SmtpResponseReader parses a multi-line response", () => {
  const reader = new SmtpResponseReader();
  const res = reader.push("250-PIPELINING\r\n250-8BITMIME\r\n250 AUTH PLAIN\r\n");
  assert.equal(res.length, 1);
  assert.equal(res[0].code, 250);
  assert.deepEqual(res[0].lines, ["PIPELINING", "8BITMIME", "AUTH PLAIN"]);
});

test("SmtpResponseReader handles TCP fragmentation across chunks", () => {
  const reader = new SmtpResponseReader();
  assert.equal(reader.push("25").length, 0);
  assert.equal(reader.push("0-STAR").length, 0);
  assert.equal(reader.push("TTLS\r\n250 AU").length, 0);
  const res = reader.push("TH PLAIN\r\n");
  assert.equal(res.length, 1);
  assert.equal(res[0].code, 250);
  assert.deepEqual(res[0].lines, ["STARTTLS", "AUTH PLAIN"]);
});

test("SmtpResponseReader parses two separate responses delivered back to back", () => {
  const reader = new SmtpResponseReader();
  const res = reader.push("220 greeting\r\n250 EHLO ok\r\n");
  assert.equal(res.length, 2);
  assert.equal(res[0].code, 220);
  assert.equal(res[1].code, 250);
});
