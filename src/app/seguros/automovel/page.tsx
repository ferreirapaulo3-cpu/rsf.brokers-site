import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro Automóvel — RC, danos e assistência",
  description:
    "Seguro automóvel com comparação entre várias seguradoras. Responsabilidade civil, danos próprios, vidros, assistência em viagem e proteção ao condutor.",
  alternates: { canonical: "/seguros/automovel" },
};

const covers = [
  "Responsabilidade civil obrigatória perante terceiros, incluindo danos materiais e corporais.",
  "Danos próprios do veículo em caso de colisão, capotamento ou saída de via.",
  "Cobertura de vidros, retrovisores e faróis, com reparação ou substituição.",
  "Assistência em viagem: reboque, transporte de ocupantes e veículo substituto.",
  "Proteção ao condutor e ocupantes em caso de acidente corporal.",
  "Cobertura de bagagens e objetos pessoais dentro do veículo.",
  "Veículo substituto durante o tempo de reparação, dentro do limite contratado.",
  "Cobertura de atos maliciosos, roubo e furto do veículo ou dos seus componentes.",
];

const notCovers = [
  "Desgaste natural do veículo por uso, manutenção ou avaria mecânica não decorrente de acidente.",
  "Danos em objetos transportados em desacordo com o contrato (ex.: mercadorias comerciais).",
  "Condução sem carta legal ou sob efeito de álcool ou substâncias proibidas.",
  "Participação em provas desportivas, competições ou treinos em circuito.",
  "Danos causados por guerra, terrorismo ou radioatividade.",
  "Uso do veículo para fins ilícitos ou em desacordo com a categoria declarada.",
];

const advantages = [
  "Comparação entre várias seguradoras — apresentamos as condições lado a lado, sem preferência comercial por nenhuma companhia.",
  "Análise real do seu perfil: idade, tipo de veículo, utilização e histórico de sinistralidade são tidos em conta na proposta.",
  "Apoio na contratação e entrega de documentos à seguradora, sem que tenha de tratar da papelada sozinho.",
  "Acompanhamento em caso de sinistro, do registo à liquidação, com interlocutor direto na RSF | Brokers.",
  "Renovações, averbamentos e alterações tratadas por nós junto da seguradora.",
  "Possibilidade de nomear a RSF | Brokers como mediadora do contrato atual, mantendo coberturas e prémio.",
];

const faqs = [
  {
    q: "O seguro automóvel cobre danos próprios só com a obrigatória?",
    a: "Não. A responsabilidade civil obrigatória cobre apenas danos causados a terceiros. Para cobrir danos no seu próprio veículo é necessário contratar a cobertura de danos próprios, danos por colisão e/ou capotamento. A cobertura exata depende do produto e seguradora; explicamos as diferenças antes de fechar.",
  },
  {
    q: "Como é calculado o prémio do seguro automóvel?",
    a: "O prémio depende do veículo (marca, modelo, ano e valor), do perfil do condutor (idade, tempo de carta, profissão), do histórico de sinistralidade e das coberturas escolhidas. Recolhemos estes dados, solicitamos simulações a várias seguradoras e apresentamos as propostas comparadas para o cliente decidir.",
  },
  {
    q: "Posso mudar de mediador mantendo o seguro automóvel atual?",
    a: "Sim. A nomeação do mediador pode ser alterada em qualquer altura, mantendo o mesmo contrato de seguro, as mesmas coberturas e o mesmo prémio. O processo resume-se a assinar um documento de nomeação; tratamos da comunicação à seguradora. Não há penalizações nem alteração de condições.",
  },
  {
    q: "O que fazer em caso de acidente?",
    a: "Registe o local, fotografe os veículos e os danos, preencha o boletim de constatação amigável com o outro interveniente e contacte-nos o mais rapidamente possível. Acompanhamos o registo do sinistro na seguradora, indicamos a documentação necessária e seguimos o processo até à liquidação.",
  },
  {
    q: "Trabalham com todas as seguradoras?",
    a: "Somos mediadores multimarca e trabalhamos com várias companhias em Portugal (Allianz Portugal, Generali Tranquilidade, Caravela Seguros, Lusitânia Seguros, Ageas Seguros, entre outras). A disponibilidade atual para o ramo automóvel é confirmada caso a caso antes da entrega de qualquer proposta concreta.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro Automóvel",
    description:
      "Seguro automóvel para particulares e empresas com responsabilidade civil, danos próprios, vidros, assistência e proteção ao condutor.",
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
    "Indique-nos o veículo (matrícula ou marca/modelo/ano) e o perfil do condutor principal.",
    "Solicitamos simulações a várias seguradoras com quem trabalhamos.",
    "Apresentamos as propostas comparadas: prémio, coberturas, franquias e exclusões.",
    "Depois de escolher, tratamos do preenchimento da proposta e da entrega à seguradora.",
    "Receba a apólice e os certificados; fica com interlocutor direto na RSF | Brokers para sinistros e renovações.",
  ];

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Seguros"
        title="Seguro Automóvel"
        description="Para quem tem carro próprio e quer garantir responsabilidade civil, danos e assistência, comparando propostas de várias seguradoras."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Seguro automóvel" }]} />

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
              src="/images/paginas/seguro-automovel.webp"
              alt="Condutor a verificar o motor de um automóvel com o capô aberto"
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
