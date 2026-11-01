import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro Habitação (Multirriscos)",
  description:
    "Seguro multirriscos habitação: cobertura de paredes, recheio, responsabilidade civil, fenómenos atmosféricos e assistência. Comparação entre várias seguradoras.",
  alternates: { canonical: "/seguros/habitacao" },
};

const covers = [
  "Cobertura de capitais de edifício (paredes, teto, pavimentos, instalações) para risco de incêndio, explosão e queda de raios.",
  "Recheio da habitação: mobiliário, eletrodomésticos, eletrónica e bens pessoais, dentro dos limites contratados.",
  "Responsabilidade civil familiar e extrafamiliar por danos causados a terceiros na sua habitação ou no prédio.",
  "Cobertura de fenómenos atmosféricos (ventos fortes, granizo, neve, chuvas intensas) e inundações.",
  "Cobertura de roubo, furto e vandalismo, dentro de casa e em dependências anexas.",
  "Cobertura de danos por água: rutura de canalização, infiltrações e regresso de águas.",
  "Assistência técnica e elétrica 24 horas, com rede de profissionais credenciados.",
  "Despesas de reinstalação e alojamento temporário em caso de inabitabilidade da habitação.",
];

const notCovers = [
  "Danos por desgaste, depreciação ou vício próprio do bem (manutenção normal).",
  "Falta ou deficiência de manutenção da habitação conhecida antes do sinistro.",
  "Objetos de arte, joalharia e coleções acima do limite contratado sem declaração específica.",
  "Danos causados por guerra, terrorismo, radioatividade ou movimentos sísmicos não contratados.",
  "Bens de uso profissional fora do âmbito declarado na apólice.",
  "Atos intencionais do segurado ou de pessoas que coabitem com ele.",
];

const advantages = [
  "Comparação entre várias seguradoras — cada uma tem pacotes e capitais padrão diferentes, colocamos as propostas lado a lado.",
  "Análise dos capitais adequados ao seu imóvel: área, ano de construção, localização e tipo de ocupação são tidos em conta.",
  "Declaração clara de capitais de edifício e recheio para evitar subseguro em caso de sinistro.",
  "Acompanhamento em caso de sinistro, com interlocutor direto e sem chamadas para call center impessoal.",
  "Averbamentos simples em caso de mudança de banco (crédito habitação) ou alteração de titularidade.",
  "Possibilidade de nomear a RSF | Brokers como mediadora do contrato atual, mantendo coberturas e prémio.",
];

const faqs = [
  {
    q: "Multirriscos habitação e seguro de crédito habitação são a mesma coisa?",
    a: "Não. O seguro multirriscos habitação cobre o imóvel e o seu recheio contra incêndio, água, roubo e outros riscos. O seguro de vida para crédito habitação cobre o falecimento ou invalidez do titular para garantir a liquidação do empréstimo. São contratos diferentes e podem ser contratados separadamente junto da entidade que entender.",
  },
  {
    q: "Posso contratar o multirriscos habitação fora do banco?",
    a: "Sim. O cliente pode escolher livremente a entidade onde contrata o seguro multirriscos habitação associado ao crédito. Apresentamos simulações de várias seguradoras e ajudamos a comparar coberturas e capitais. O banco apenas exige garantia equivalente; a escolha da seguradora é sua.",
  },
  {
    q: "Como são definidos os capitais de edifício e recheio?",
    a: "O capital de edifício corresponde ao custo de reconstrução (não ao valor de mercado). O capital de recheio cobre mobiliário, eletrodomésticos e bens pessoais. Em caso de subseguro — capitais abaixo do valor real — a indemnização pode ser reduzida. Ajudamos a calcular capitais adequados e evitamos situações de subseguro.",
  },
  {
    q: "Há franquia em caso de sinistro de habitação?",
    a: "Depende da cobertura e da seguradora. Em geral, coberturas como incêndio não têm franquia; coberturas como danos por água, fenómenos atmosféricos ou roubo costumam ter franquia. Confirmamos o valor da franquia em cada proposta antes de fechar, para que saiba o valor a suportar em caso de sinistro.",
  },
  {
    q: "O seguro cobre inquilinos ou só proprietários?",
    a: "Cobre ambos, com capitais e coberturas adaptadas. O proprietário arrendatário costuma segurar sobretudo o edifício; o inquilino costuma segurar o recheio e a responsabilidade civil perante o senhorio. Em cada situação ajustamos a proposta ao perfil de ocupação do imóvel.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro Habitação (Multirriscos)",
    description:
      "Seguro multirriscos habitação com cobertura de edifício, recheio, responsabilidade civil, fenómenos atmosféricos, danos por água e assistência.",
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
    "Indique o tipo de imóvel (arrendado, próprio, secundário), a área e o ano de construção.",
    "Recolhemos informação sobre capitais pretendidos para edifício e recheio.",
    "Solicitamos simulações a várias seguradoras com quem trabalhamos.",
    "Apresentamos as propostas comparadas: coberturas, capitais, franquias e prémio.",
    "Depois de escolher, tratamos da proposta e da comunicação ao banco se for caso de crédito habitação.",
  ];

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Seguros"
        title="Seguro Habitação (Multirriscos)"
        description="Para quem tem casa própria, arrendada ou secundária e quer cobrir paredes, recheio, responsabilidade civil e assistência."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Seguro habitação" }]} />

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
              src="/images/paginas/seguro-habitacao.webp"
              alt="Moradia com telhado de telha cerâmica e jardim"
              width={1200}
              height={675}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "50% 50%" }}
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
