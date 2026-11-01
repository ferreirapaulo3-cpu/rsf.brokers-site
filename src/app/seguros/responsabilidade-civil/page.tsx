import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro Responsabilidade civil",
  description:
    "Seguro responsabilidade civil familiar, profissional e empresa. Cobertura de danos causados a terceiros. Comparação entre várias seguradoras.",
  alternates: { canonical: "/seguros/responsabilidade-civil" },
};

const covers = [
  "Responsabilidade civil familiar por danos causados a terceiros no quotidiano (materiais e corporais).",
  "Responsabilidade civil extrafamiliar em atividades fora do âmbito profissional.",
  "RC do empregador doméstico por danos causados ao trabalhador doméstico ao seu serviço.",
  "RC por animais de companhia e animais domésticos (cães, gatos, cavalos).",
  "RC profissional para profissões específicas (médicos, advogados, engenheiros, técnicos).",
  "RC da empresa perante clientes, fornecedores e visitantes nas instalações.",
  "RC de produto — danos causados por produtos fabricados ou comercializados.",
  "Coberturas complementares: fiança judicial, despesas de defesa e indemnizações acessórias.",
];

const notCovers = [
  "Danos causados intencionalmente pelo segurado ou por familiares ao seu domicílio.",
  "Danos decorrentes de atividade profissional não declarada na apólice.",
  "Danos causados a bens próprios do segurado (não se aplica a terceiros).",
  "Riscos profissionais cobertos por seguro de acidentes de trabalho.",
  "Danos por guerra, terrorismo, radioatividade e movimentos sísmicos não contratados.",
  "Multas, coimas e sanções contraordenacionais aplicadas por autoridades.",
];

const advantages = [
  "Comparação entre várias seguradoras — apresentamos capitais, franquias e exclusões lado a lado.",
  "Análise do perfil e atividade antes de recomendar produto — RC familiar, profissional ou de empresa.",
  "Clareza sobre capitais adequados ao risco, sem subseguro nem excesso desnecessário.",
  "Acompanhamento de sinistros RC, com defesa dos interesses do segurado perante terceiros.",
  "Apoio em caso de discordância entre seguradora e lesado, com representação do cliente.",
  "Possibilidade de nomear a RSF | Brokers como mediadora do contrato atual, mantendo coberturas e prémio.",
];

const faqs = [
  {
    q: "O que é responsabilidade civil?",
    a: "Responsabilidade civil é a obrigação de reparar danos causados a terceiros. Pode ser material (um vidro partido, um carro arranhado) ou corporal (uma lesão). Em Portugal, a RC automóvel é obrigatória, mas existem outros tipos de RC — familiar, profissional, de empresa — que não são obrigatórios por lei mas são fortemente recomendados.",
  },
  {
    q: "A RC familiar cobre filhos e animais?",
    a: "Em regra sim. A RC familiar cobre danos causados pelos membros do agregado familiar, incluindo filhos menores. A maioria dos produtos cobre também danos causados por animais de companhia (cães, gatos). Animais de maior porte (cavalos) podem exigir cláusula específica ou produto dedicado. Confirmamos o âmbito em cada proposta.",
  },
  {
    q: "RC profissional é igual para todas as profissões?",
    a: "Não. Cada profissão tem riscos diferentes e as seguradoras oferecem produtos dedicados (RC médica, RC de advogados, RC de engenheiros, etc.). Os capitais recomendados variam e os prémios acompanham o nível de risco. Recomendamos sempre o produto adequado à atividade concreta do segurado.",
  },
  {
    q: "Que capital de RC devo contratar?",
    a: "Depende do tipo de dano potencial. Para RC familiar costumam ser suficientes capitais entre 100.000€ e 300.000€. Para RC profissional e de empresa, os capitais devem acompanhar a dimensão do negócio e o tipo de cliente. Ajudamos a definir capitais adequados sem excesso desnecessário nem subseguro em caso de sinistro.",
  },
  {
    q: "Como funciona o sinistro de responsabilidade civil?",
    a: "Em caso de sinistro, comunique-nos o acontecimento e os danos causados. Registamos a participação na seguradora e analisamos a garantia. Acompanhamos a contactação com o lesado (ou o seu seguro) e o pagamento da indemnização. Em caso de discordância entre seguradora e lesado, representamos o cliente e sustentamos a sua posição.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro Responsabilidade civil",
    description:
      "Seguro de responsabilidade civil familiar, profissional e de empresa. Cobertura de danos causados a terceiros, materiais e corporais.",
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
    "Indique o tipo de RC pretendido: familiar, profissional, de empresa ou de animais.",
    "Recolhemos informação sobre o perfil, a atividade e o nível de risco envolvido.",
    "Solicitamos simulações a várias seguradoras com produtos adequados ao tipo de RC.",
    "Apresentamos as propostas comparadas: capitais, franquias, exclusões e prémio.",
    "Tratamos da contratação, da entrega à seguradora e do acompanhamento contínuo.",
  ];

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Seguros"
        title="Seguro Responsabilidade civil"
        description="Para quem quer cobrir danos causados a terceiros no dia-a-dia, na atividade profissional ou como empresa. Familiar, profissional e de empresa."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Responsabilidade civil" }]} />

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
              src="/images/paginas/seguro-responsabilidade-civil.webp"
              alt="Mediador a analisar documentos de seguro com uma cliente"
              width={1200}
              height={675}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "90% 50%" }}
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
