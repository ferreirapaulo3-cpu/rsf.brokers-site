import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro empresas — multirriscos, frota e RC",
  description:
    "Seguro para empresas: multirriscos empresarial, automóvel de frota, responsabilidade civil e acidentes de trabalho. Comparação entre várias seguradoras.",
  alternates: { canonical: "/seguros/empresas" },
};

const covers = [
  "Multirriscos empresarial: edifício, equipamento, mobiliário, stocks e perdas de exploração em único contrato.",
  "Automóvel de empresa: frotas e veículos comerciais com condições adaptadas à utilização.",
  "Responsabilidade civil da atividade perante terceiros (clientes, fornecedores, visitantes).",
  "Acidentes de trabalho obrigatório para trabalhadores por conta de outrem.",
  "RC profissional e de produto, conforme a atividade e o nível de risco.",
  "Equipamento eletrónico, ciber-risco e perda de dados, mediante análise.",
  "Cobertura de mercadorias em transporte, nacional e internacional.",
  "Perdas de exploração por interrupção de atividade decorrente de sinistro coberto.",
];

const notCovers = [
  "Danos por desgaste natural, depreciação ou defeito de fabrico não relacionado com sinistro.",
  "Multas, coimas e sanções contraordenacionais decorrentes de infracção legal.",
  "Riscos não declarados na proposta de seguro (atividades, produtos, localizações).",
  "Danos por guerra, terrorismo, radioatividade e movimentos sísmicos não contratados.",
  "Atos intencionais, dolo ou culpa grave da empresa segurada ou dos seus administradores.",
  "Perdas decorrentes de operações especulativas ou financeiras não abrangidas pelo produto.",
];

const advantages = [
  "Comparação entre várias seguradoras — cada companhia tem apetite por ramos e setores diferentes; colocamos as propostas lado a lado.",
  "Análise da atividade, dimensão e risco específico antes de recomendar produto ou cobertura.",
  "Apoio na construção da proposta de seguro: reunião de dados, declarações e avaliações.",
  "Renovações anuais acompanhadas — antecipamos alterações de capital, atividade ou frota.",
  "Gestão de sinistros por canal único, sem chamadas para múltiplos departamentos.",
  "Possibilidade de nomear a RSF | Brokers como mediadora dos contratos atuais, mantendo coberturas e prémio.",
];

const faqs = [
  {
    q: "Que ramos estão disponíveis para empresas?",
    a: "Multirriscos empresarial, automóvel de empresa, acidentes de trabalho, responsabilidade civil, e outros ramos mediante análise (saúde grupo, RC profissional, ciber-risco, transporte de mercadorias). Apresentamos propostas de várias seguradoras adaptadas à atividade, dimensão e risco específico da empresa.",
  },
  {
    q: "O seguro de acidentes de trabalho é obrigatório?",
    a: "Sim, o seguro de acidentes de trabalho é obrigatório para trabalhadores por conta de outrem e para trabalhadores independentes que prestem serviços a uma empresa. A omissão pode dar origem a coimas e responsabilidade pessoal dos administradores. Tratamos da contratação e da comunicação à seguradora e às autoridades competentes.",
  },
  {
    q: "Avaliam os capitais de stocks e equipamento?",
    a: "Sim. Para definir capitais adequados usamos os dados do último inventário, faturas de aquisição e, em alguns casos, avaliações externas. Em caso de subseguro a indemnização pode ser reduzida, pelo que ajudamos a calcular capitais justos e a evitar lacunas de cobertura em caso de sinistro.",
  },
  {
    q: "Como funciona a renovação anual?",
    a: "Antes da renovação, confirmamos os capitais, a atividade e a frota. Comparamos proposta de renovação com propostas alternativas de outras seguradoras. Quando há diferenças relevantes (prémio ou cobertura) damos a opção ao cliente. Em todas as renovações mantemos o acompanhamento de sinistros abertos.",
  },
  {
    q: "Possuem soluções para pequenas e médias empresas?",
    a: "Sim. Trabalhamos com produtos padronizados para PME e com soluções mais complexas para grandes empresas. A análise do risco é sempre feita caso a caso, com atenção à atividade, ao número de colaboradores, à localização e à dimensão dos capitais em causa.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro empresas",
    description:
      "Seguro para empresas: multirriscos empresarial, automóvel de frota, responsabilidade civil, acidentes de trabalho e ramos adicionais mediante análise.",
    provider: {
      "@type": "InsuranceAgency",
      name: "RSF | Brokers",
      telephone: `+351 ${site.phones.fixed.replace(/\s/g, "")}`,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        postalCode: site.address.postalCode,
        addressLocality: "Damaia, Amadora",
        addressCountry: "PT",
      },
    },
    areaServed: { "@type": "Country", name: "Portugal" },
  };

  const steps = [
    "Indique a atividade, dimensão e principais riscos da empresa (capitais, frota, n.º de colaboradores).",
    "Reunimos informação necessária para a seguradora: inventário, mapas e histórico de sinistralidade.",
    "Solicitamos simulações a várias seguradoras com apetite para o setor da empresa.",
    "Apresentamos as propostas comparadas: coberturas, capitais, franquias e prémio.",
    "Tratamos da contratação, das comunicações legais (ex.: acidentes de trabalho) e do acompanhamento contínuo.",
  ];

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Seguros"
        title="Seguro empresas"
        description="Para PME e grandes empresas que precisam de multirriscos, frota, responsabilidade civil e acidentes de trabalho, com comparação entre seguradoras."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Seguro empresas" }]} />

      {/* O QUE COBRE */}
      <section className="py-20">
        <div className="container-rsf grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle eyebrow="Coberturas" title="O que normalmente cobre" />
            <ul className="mt-6 space-y-3">
              {covers.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-ink flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Exclusões" title="O que normalmente não cobre" />
            <ul className="mt-6 space-y-3">
              {notCovers.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-6">
              Lista indicativa. As condições exatas variam por seguradora e produto — confirmamos sempre na apólice antes de fechar.
            </p>
          </div>
        </div>
      </section>

      {/* VANTAGENS RSF */}
      <section className="py-20 bg-secondary/60 border-y border-border">
        <div className="container-rsf">
          <SectionTitle align="center" eyebrow="Vantagens" title="Vantagens de contratar com a RSF | Brokers" />
          <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="font-serif text-2xl text-accent-ink mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-foreground/90 leading-relaxed">{a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="py-20">
        <div className="container-rsf grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div>
            <SectionTitle eyebrow="Como funciona" title="Como pedir orçamento" />
            <ol className="mt-6 space-y-5">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-serif text-2xl text-accent-ink flex-shrink-0 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90 leading-relaxed pt-1">{s}</span>
                </li>
              ))}
            </ol>
            <GoogleRatingBadge className="mt-4" />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/10">
            <img
              src="/images/paginas/seguro-empresas.webp"
              alt="Empresários numa oficina a analisar um projeto num tablet"
              width={1200}
              height={675}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "70% 50%" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/60 border-t border-border">
        <div className="container-rsf max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </>
  );
}
