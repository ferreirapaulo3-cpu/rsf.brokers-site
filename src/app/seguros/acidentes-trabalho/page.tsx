import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, ShieldCheck } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro Acidentes de trabalho",
  description:
    "Seguro de acidentes de trabalho obrigatório para empresas e trabalhadores independentes. Cobertura de morte, invalidez e despesas de tratamento.",
  alternates: { canonical: "/seguros/acidentes-trabalho" },
};

const covers = [
  "Cobertura obrigatória por morte do trabalhador em consequência de acidente de trabalho ou doença profissional.",
  "Pensão por invalidez permanente, parcial ou total, conforme grau avaliado pela seguradora.",
  "Reembolso de despesas de tratamento médico, medicamentoso e hospitalar decorrentes do acidente.",
  "Subsídio por incapacidade temporária para o trabalho durante o período de recovery.",
  "Indemnização por danos não patrimoniais (sofrimento) em caso de lesão grave.",
  "Cobertura de acidentes in itinere (no trajeto entre casa e local de trabalho).",
  "Pensão aos familiares / descendentes do trabalhador em caso de morte.",
  "Reabilitação profissional e adaptação do posto de trabalho em caso de invalidez parcial.",
];

const notCovers = [
  "Acidentes intencionais causados pelo próprio trabalhador ou dolosamente pelo empregador.",
  "Lesões decorrentes de rixa, crime ou ato ilícito do trabalhador.",
  "Doenças não incluídas no elenco legal de doenças profissionais.",
  "Acidentes sofridos em deslocações não relacionadas com o trabalho (ex.: lazer ao fim de semana).",
  "Danos patrimoniais da empresa (equipamento, mercadorias) — não cobertos por este seguro.",
  "Trabalhadores não declarados à seguradora (sem pagamento do prémio correspondente).",
];

const advantages = [
  "Comparação entre várias seguradoras — apresentamos prémios, capitais e rede de assistência comparados.",
  "Clareza sobre as obrigações legais: explicamos quem tem de contratar e quais as consequências de não o fazer.",
  "Apoio na avaliação correta da remuneração base para cálculo das taxas anuais.",
  "Acompanhamento de sinistros AT, com ligação a serviços médicos e reabilitação.",
  "Comunicação à Autoridade para as Condições do Trabalho (ACT) e à Segurança Social quando aplicável.",
  "Possibilidade de nomear a RSF | Brokers como mediadora do contrato atual, mantendo coberturas e prémio.",
];

const faqs = [
  {
    q: "Quem é obrigado a contratar seguro de acidentes de trabalho?",
    a: "Toda a entidade empregadora com trabalhadores por conta de outrem. Também os trabalhadores independentes que prestem serviços a uma empresa devem ter cobertura. Trabalhadores domésticos ao serviço de particulares também estão abrangidos. O não cumprimento pode dar origem a coimas e responsabilidade pessoal dos administradores.",
  },
  {
    q: "Como é calculado o prémio do seguro AT?",
    a: "O prémio é calculado multiplicando a remuneração anual declarada pela taxa aplicável à atividade. A taxa depende da atividade e do nível de risco. Em cada renovação, a remuneração é ajustada à realidade do ano anterior. Acompanhamos este processo e ajudamos a correta declaração das remunerações.",
  },
  {
    q: "O que são acidentes in itinere?",
    a: "São os acidentes sofridos pelo trabalhador no trajeto habitual entre a sua residência e o local de trabalho (e vice-versa). Estão cobertos pelo seguro AT desde que ocorram no percurso e no horário habitual. Algumas seguradoras ampliam esta cobertura; verificamos sempre as condições aplicáveis antes de fechar.",
  },
  {
    q: "E se a empresa tiver trabalhadores independentes?",
    a: "Os trabalhadores independentes que prestem serviços a uma empresa devem estar cobertos por seguro de acidentes de trabalho. A contratação pode ser feita pela própria pessoa ou pela empresa tomadora dos serviços. Analisamos cada situação e propomos a solução adequada conforme a forma de organização do trabalho.",
  },
  {
    q: "Como é feito o acompanhamento de sinistro AT?",
    a: "Em caso de acidente, o trabalhador deve comunicar à empresa e esta abrir processo na seguradora. Acompanhamos todo o processo: registo do acidente, declaração médica, reembolso de despesas, eventual atribuição de pensão por invalidez. Em casos mais complexos fazemos a intermediação entre trabalhador, empresa e seguradora.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro Acidentes de trabalho",
    description:
      "Seguro de acidentes de trabalho obrigatório para empresas e trabalhadores independentes. Cobertura de morte, invalidez, despesas de tratamento e reabilitação.",
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
    "Indique o tipo de atividade, número de trabalhadores e remuneração anual total.",
    "Confirmamos o enquadramento legal (TCO, independentes, trabalhador doméstico) e o nível de risco.",
    "Solicitamos simulações a várias seguradoras com apetite para a atividade da empresa.",
    "Apresentamos propostas comparadas: taxa, prémio anual, capitais e rede de assistência.",
    "Tratamos da contratação, das comunicações legais e do acompanhamento de renovações e sinistros.",
  ];

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Seguros"
        title="Seguro Acidentes de trabalho"
        description="Para empresas com trabalhadores por conta de outrem, independentes e empregadores domésticos. Cobertura obrigatória por lei."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Acidentes de trabalho" }]} />

      {/* AVISO OBRIGATORIEDADE */}
      <section className="py-10 border-b border-border">
        <div className="container-rsf">
          <div className="flex items-start gap-4 p-5 bg-accent/10 border border-accent/30 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-accent-ink flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-serif text-lg text-primary mb-1">Seguro obrigatório por lei</div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                O seguro de acidentes de trabalho é obrigatório para todas as entidades empregadoras com trabalhadores por conta de outrem.
                Trabalhadores independentes e trabalhadores domésticos também estão abrangidos. O incumprimento pode dar origem a coimas e responsabilidade pessoal dos administradores.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <div className="mt-4">
              <Badge variant="secondary" className="bg-secondary text-foreground border-border">
                Categorias: Empresas · Particulares · Trabalhador doméstico
              </Badge>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/10">
            <img
              src="/images/paginas/seguro-acidentes-trabalho.webp"
              alt="Trabalhador com colete refletor e colete de segurança a analisar um documento com um mediador"
              width={1200}
              height={675}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "100% 50%" }}
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
