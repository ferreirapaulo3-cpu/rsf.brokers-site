import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro de Saúde e Planos de saúde",
  description:
    "Seguro e plano de saúde com rede de hospitais, clínicas e consultas. Cobertura em Portugal e no estrangeiro. Comparação entre várias seguradoras.",
  alternates: { canonical: "/seguros/saude" },
};

const covers = [
  "Consultas de clínica geral e de especialidades médicas, em rede própria ou convencionada.",
  "Exames auxiliares de diagnóstico: análises, radiografias, ecografias, TAC e RMN.",
  "Internamento hospitalar em quarto privado, com limite de dias por ano.",
  "Cirurgia programada e de urgência, incluindo honorários médicos e direitos de sala.",
  "Medicamentos prescritos em ambulatório e durante o internamento.",
  "Parto e cuidados materno-infantis, dentro do prazo de carência aplicável.",
  "Seguro de Assistência em viagem para tratamento fora de Portugal, dentro do limite contratado.",
  "Check-up preventivo anual, personalizado conforme idade e género do segurado.",
];

const notCovers = [
  "Tratamentos estéticos, cirurgia plástica não reparadora e medicina não convencional sem rede.",
  "Tratamentos de infertilidade não previstos no produto (ex.: procriação medicamente assistida).",
  "Doenças preexistentes não declaradas na declaração de saúde ou em período de carência.",
  "Tratamentos de dependências (álcool, drogas, jogo) salvo cláusula específica contratada.",
  "Próteses, órteses e material ortopédico acima dos limites contratados.",
  "Cirurgia laser para correção de miopia salvo cláusula específica contratada.",
];

const advantages = [
  "Comparação entre várias seguradoras — apresentamos redes, prémios, limite de comparticipação e carências lado a lado.",
  "Análise do perfil clínico do cliente antes de recomendar produto, em especial para casos com histórico relevante.",
  "Clareza sobre carências e prazos de espera — explicamos antes de fechar para não haver surpresas em sinistro.",
  "Apoio na interpretação das redes: indicamos hospitais, clínicas e especialistas perto de si.",
  "Acompanhamento de reembolsos e autorizações junto da seguradora.",
  "Possibilidade de nomear a RSF | Brokers como mediadora do contrato atual, mantendo coberturas e prémio.",
];

const faqs = [
  {
    q: "Qual a diferença entre seguro de saúde e plano de saúde?",
    a: "Os termos são frequentemente usados como sinónimos no mercado português. Em geral, o seguro de saúde cobre consultas, exames e internamento com comparticipação (sem rede própria). O plano de saúde costuma assentar numa rede própria ou convencionada, com acesso direto. Apresentamos as duas abordagens comparadas e ajudamos a escolher a solução adequada ao seu perfil e localização.",
  },
  {
    q: "Há carências no seguro de saúde?",
    a: "Sim, em regra existem carências para determinados atos (parto, cirurgia programada, determinados exames). As carências variam por produto e seguradora. Confirmamos as carências aplicáveis em cada proposta antes de fechar, para que saiba desde quando tem cada cobertura disponível.",
  },
  {
    q: "Doenças preexistentes são cobertas?",
    a: "Depende do produto e da declaração de saúde. Algumas seguradoras aplicam períodos de carência, exclusões temporárias ou sobreprémio. Recomendamos sempre declaração completa e transparente do histórico clínico para evitar recusa em caso de sinistro. Analisamos caso a caso e procuramos a solução mais adequada ao perfil do cliente.",
  },
  {
    q: "Posso incluir familiares no mesmo seguro?",
    a: "Sim, a maioria dos produtos permite incluir cônjuge e filhos como dependentes, com prémios mais reduzidos por pessoa. Alguns produtos oferecem descontos para agregados familiares a partir de determinado número de pessoas. Apresentamos as várias opções e simulamos o custo por membro do agregado.",
  },
  {
    q: "O seguro de saúde funciona em todo o país?",
    a: "Depende da rede da seguradora. Produtos com rede própria funcionam em qualquer ponto da rede; produtos com comparticipação funcionam em qualquer entidade credenciada ou por reembolso. Em todos os casos confirmamos a cobertura geográfica, em especial para quem reside fora das grandes cidades ou passa temporadas no estrangeiro.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro de Saúde e Planos de saúde",
    description:
      "Seguro e plano de saúde com rede de hospitais, clínicas, consultas, exames, internamento e cirurgia. Comparação entre várias seguradoras.",
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
    "Indique-nos o agregado a segurar (idades, histórico relevante, zona de residência).",
    "Confirmamos o tipo de solução pretendida: rede própria, comparticipada ou mista.",
    "Solicitamos simulações a várias seguradoras com quem trabalhamos.",
    "Apresentamos propostas comparadas: prémio, limites, carências e redes.",
    "Depois de escolher, tratamos da declaração de saúde, da proposta e da entrega à seguradora.",
  ];

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Seguros"
        title="Seguro de Saúde e Planos de saúde"
        description="Para quem quer acesso a consultas, exames e internamento em rede de hospitais e clínicas, sem limites de região."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Seguro de saúde" }]} />

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
              src="/images/paginas/seguro-saude.webp"
              alt="Médico em consulta com uma paciente"
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
