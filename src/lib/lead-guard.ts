import { NextRequest, NextResponse } from "next/server";

type Json = Record<string, unknown>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

/** Limite simples por IP (memória da instância; trava rajadas, não substitui um WAF). */
function rateLimited(req: NextRequest): boolean {
  const ip = (req.headers.get("x-forwarded-for") ?? "desconhecido").split(",")[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_HITS;
}

const clean = (v: unknown, max: number) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

/** Valida o corpo; devolve a resposta de erro ou os dados já limpos. */
export function guardLead(
  req: NextRequest,
  data: Json,
  required: string[],
): { error: NextResponse } | { data: Json } {
  if (rateLimited(req)) {
    return { error: NextResponse.json({ ok: false, error: "Demasiados pedidos. Tente mais tarde ou telefone-nos." }, { status: 429 }) };
  }
  for (const f of required) {
    if (!clean(data[f], 5000)) {
      return { error: NextResponse.json({ ok: false, error: `Campo obrigatório em falta: ${f}` }, { status: 400 }) };
    }
  }
  if (data.consent !== true) {
    return { error: NextResponse.json({ ok: false, error: "Consentimento RGPD obrigatório" }, { status: 400 }) };
  }
  const email = clean(data.email, 254);
  if (!EMAIL_RE.test(email)) {
    return { error: NextResponse.json({ ok: false, error: "Email inválido" }, { status: 400 }) };
  }
  return {
    data: {
      ...data,
      name: clean(data.name, 120),
      phone: clean(data.phone, 30),
      email,
      insuranceType: clean(data.insuranceType, 80),
      subject: clean(data.subject, 120),
      message: String(data.message ?? "").trim().slice(0, 5000),
    },
  };
}
