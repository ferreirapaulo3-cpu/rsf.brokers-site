import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/send-lead-email";
import { guardLead } from "@/lib/lead-guard";

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json();

    // Honeypot
    if (raw.company) {
      return NextResponse.json({ ok: true });
    }

    const guarded = guardLead(req, raw, ["name", "phone", "email", "insuranceType"]);
    if ("error" in guarded) return guarded.error;
    const data = guarded.data as Record<string, string | boolean | undefined>;

    const lines = [
      `NOVO PEDIDO DE ORCAMENTO - RSF | Brokers`,
      ``,
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      `Email: ${data.email}`,
      `Tipo de seguro: ${data.insuranceType}`,
      ``,
      `Mensagem:`,
      `${data.message || "(sem mensagem)"}`,
      ``,
      `Ja tem seguro atual: ${data.hasCurrentInsurance ? "Sim" : "Nao"}`,
      `Pretende alterar o mediador: ${data.wantsChangeBroker ? "Sim" : "Nao"}`,
      ``,
      `Recebido em: ${new Date().toLocaleString("pt-PT", { timeZone: "Europe/Lisbon" })}`,
      `Origem: ${req.headers.get("x-forwarded-for") || "desconhecido"}`,
    ];

    const subject = `[RSF] Pedido de orcamento - ${data.insuranceType} - ${data.name}`;
    const body = lines.join("\n");

    const result = await sendLeadEmail({ subject, text: body, replyTo: String(data.email) });
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: "Não foi possível enviar o pedido. Tente novamente ou telefone-nos." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    // Não logar `e` em bruto: pode conter o corpo do pedido (dados pessoais).
    console.error("Quote API error:", e instanceof Error ? e.message : "erro desconhecido");
    return NextResponse.json({ ok: false, error: "Erro interno" }, { status: 500 });
  }
}
