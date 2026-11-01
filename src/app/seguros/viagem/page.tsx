import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro viagem — assistência e cancelamento",
  description:
    "Seguro de viagem para férias, trabalho ou estudo. Assistência em viagem, despesas médicas, atrasos e cancelamento. Comparação entre seguradoras.",
  alternates: { canonical: "/seguros/viagem" },
};

const covers = [
  "Assistência em viagem 24 horas por telefone, com coordenação de socorro e transporte.",
  "Despesas médicas e hospitalares no estrangeiro, dentro do limite contratado.",
  "Repatriação do segurado em caso de doença ou acidente, incluindo transporte sanitário.",
  "Despesas de um familiar acompanhante, com estadia e transporte pagos.",
  "Cancelamento e interrupção de viagem por motivo coberto (doença, falecimento familiar, urgência profissional).",
  "Atraso de voo, perda de ligação e atraso de bagagem — indemnização por tempo de espera.",
  "Perda, roubo e dano de bagagem, dentro dos limites por artigo e total contratado.",
  "Responsabilidade civil privada em viagem — danos causados a terceiros no destino.",
];

const notCovers = [
  "Doenças preexistentes não declaradas à seguradora no ato da contratação.",
  "Prática de desportos de risco não cobertos (ex.: alpinismo, desportos motorizados) sem cláusula específica.",
  "Viagens a regiões com aviso oficial de não viagem (guerra, epidemia declarada).",
  "Atos intencionais, suicídio, automutilação e consumo de álcool ou drogas.",
  "Danos em objetos de alto valor (joias, eletrónica profissional) sem declaração específica.",
  "Despesas de turismo convencional (passeios, restaurantes) não decorrentes de sinistro coberto.",
];

const advantages = [
  "Comparação entre várias seguradoras — apresentamos capitais, prémio e rede de assistência comparados.",
  "Análise do tipo de viagem (turismo, trabalho, estudo) e do destino antes de recomendar produto.",
  "Clareza sobre os motivos cobertos de cancelamento — explicamos antes de fechar.",
  "Cobertura para Schengen e destinos com exigência de seguro obrigatório — emitimos certificado em formato aceites.",
  "Acompanhamento em caso de sinistro no estrangeiro, com contacto direto para interlocutor nacional.",
  "Possibilidade de seguro individual, anual multi-viagem ou seguro familiar — adaptamos ao perfil.",
];

const faqs = [
  {
    q: "Quando devo contratar o seguro de viagem?",
    a: "O ideal é contratar logo após reservar a viagem (voos, alojamento). Assim a cobertura de cancelamento está ativa desde o início. Se contratar depois, o cancelamento por motivo anterior à data de contratação não está coberto. Em viagens para Schengen com visto, o seguro pode ser obrigatório — antecipamos a emissão do certificado aceite pelas autoridades.",
  },
  {
    q: "O seguro cobre desportos radicais?",
    a: "Em regra os desportos considerados de risco (mergulho, alpinismo, asa-delta, desportos motorizados) não estão cobertos no produto padrão. Algumas seguradoras permitem contratar cláusula específica ou produto dedicado. Indique sempre as atividades previstas para que possamos encontrar a cobertura adequada.",
  },
  {
    q: "Qual a diferença entre seguro de viagem e seguro de saúde?",
    a: "O seguro de viagem cobre sinistros relacionados com a viagem (assistência, despesas médicas no estrangeiro, repatriação, bagagem, cancelamento). O seguro de saúde cobre consultas, exames e internamento em rede própria no país de residência. Para viagens longas ou frequentes, pode fazer sentido ter os dois. Ajudamos a analisar caso a caso.",
  },
  {
    q: "Há seguro anual para múltiplas viagens?",
    a: "Sim. A maioria das seguradoras oferece produto anual multi-viagem, normalmente com limite de duração por viagem (ex.: 60 ou 90 dias). Para quem viaja frequentemente a trabalho ou lazer, costuma ser mais económico do que contratar seguro por viagem. Simulamos as duas opções e comparamos os custos.",
  },
  {
    q: "O que fazer em caso de sinistro no estrangeiro?",
    a: "Contacte imediatamente a central de assistência da seguradora pelo número indicado na apólice. Guarde todos os recibos e documentos clínicos. Em caso de atraso de voo ou problema com bagagem, peça declaração escrita à companhia aérea. Comunique-nos o acontecimento para acompanharmos o processo e garantirmos que a participação está bem feita.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro viagem",
    description:
      "Seguro de viagem com assistência 24 horas, despesas médicas no estrangeiro, repatriação, cancelamento, atrasos e bagagem. Comparação entre várias seguradoras.",
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
    "Indique o destino, as datas e o tipo de viagem (turismo, trabalho, estudo, Schengen).",
    "Recolhemos informação sobre atividades previstas e eventuais doenças preexistentes.",
    "Solicitamos simulações a várias seguradoras, incluindo produto individual ou anual.",
    "Apresentamos as propostas comparadas: capitais, prémio, rede de assistência e exclusões.",
    "Tratamos da emissão da apólice e do certificado, com envio por email antes da partida.",
  ];

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Seguros"
        title="Seguro viagem"
        description="Para quem viaja por turismo, trabalho ou estudo e quer assistência, despesas médicas, proteção de bagagem e cobertura de cancelamento."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Seguro viagem" }]} />

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
              src="/images/paginas/seguro-viagem.webp"
              alt="Viajante num aeroporto a olhar para o avião pela janela"
              width={1200}
              height={675}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "85% 50%" }}
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
