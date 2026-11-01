import { sendMailSmtp, SmtpError } from "./smtp/client";
import { buildMessage, sanitizeHeaderValue } from "./smtp/protocol";
import { site } from "./site-data";

export type LeadEmailResult = { ok: true } | { ok: false; reason: string };

/**
 * Sends a lead/contact notification by SMTP. Configuration comes exclusively from
 * environment variables (never hardcoded), so the same code runs unchanged whether
 * the final host is Cloudflare Workers (wrangler secrets) or a VPS/Coolify deployment
 * (.env / Coolify env vars):
 *
 *   SMTP_HOST      - e.g. smtp.your-provider.tld
 *   SMTP_PORT      - e.g. 587 (STARTTLS) or 465 (implicit TLS)
 *   SMTP_SECURE    - "starttls" | "tls" | "none"  (default: "starttls")
 *   SMTP_USER      - SMTP auth username
 *   SMTP_PASS      - SMTP auth password / app password
 *   SMTP_FROM      - envelope + header From address (falls back to SMTP_USER)
 *   LEAD_EMAIL_TO  - destination mailbox (falls back to rsf.brokers@gmail.com)
 *
 * No provider is assumed and no credentials are invented here — if the variables
 * are missing, sending fails loudly (never a fake "ok:true").
 */
export async function sendLeadEmail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<LeadEmailResult> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = (process.env.SMTP_SECURE ?? "starttls") as "starttls" | "tls" | "none";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.LEAD_EMAIL_TO ?? site.email;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass || !from) {
    console.error(
      "[send-lead-email] configuração SMTP incompleta — defina SMTP_HOST, SMTP_USER, SMTP_PASS e SMTP_FROM."
    );
    return { ok: false, reason: "smtp_not_configured" };
  }

  const message = buildMessage({
    from,
    to,
    subject: opts.subject,
    text: opts.text,
    replyTo: opts.replyTo ? sanitizeHeaderValue(opts.replyTo) : undefined,
  });

  try {
    await sendMailSmtp(
      { host, port, secure, user, pass, envelopeFrom: user, envelopeTo: to },
      message
    );
    return { ok: true };
  } catch (e) {
    const code = e instanceof SmtpError ? e.code : undefined;
    // Deliberately not logging `opts.subject`/`opts.text` here — they carry the lead's
    // personal data (nome, email, telefone, mensagem). Only protocol-level info is logged.
    console.error("[send-lead-email] falha no envio SMTP", {
      code,
      message: e instanceof Error ? e.message.slice(0, 200) : String(e),
    });
    return { ok: false, reason: "smtp_send_failed" };
  }
}
