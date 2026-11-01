import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ShieldCheck, Heart, Briefcase, Building2 } from "lucide-react";
import { headers } from "next/headers";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Seguro de vida para crédito habitação",
  description:
    "Seguro de vida associado ao crédito habitação. Livre escolha de seguradora, sem exames médicos até 300 mil euros (conforme informação). Peça simulação sem compromisso.",
  alternates: { canonical: "/seguro-vida-credito-habitacao" },
};

const messages = [
  "Não é obrigatório contratar o seguro associado ao empréstimo com o banco.",
  "O cliente pode escolher livremente a melhor solução.",
  "A RSF | Brokers atua na defesa dos interesses do cliente.",
  "É possível nomear a RSF-Brokers como mediadora dos contratos de seguro.",
  "O prémio mantém-se igual ao alterar a nomeação do mediador.",
  "A alteração pode ser feita em qualquer altura.",
  "Processo simples e sem burocracias.",
];

const benefits = [
  "Sem exames médicos para capital em dívida inferior a 300.000€, conforme informação fornecida pela seguradora.",
  "Possibilidade de poupança entre 20% e 60% — apresentada como possibilidade sujeita a análise e condições, não como garantia universal.",
  "Manutenção das garantias exigidas pelo banco — apólice entregue ao credor com coberturas equivalentes.",
  "Simulação gratuita e sem compromisso, com propostas de várias seguradoras comparadas lado a lado.",
  "Apoio na comunicação com o banco e entrega da apólice como prova de garantia equivalente.",
  "Possibilidade de nomear a RSF | Brokers como mediadora do contrato atual, mantendo prémio e coberturas.",
  "Alteração possível em qualquer altura do contrato, sem penalizações nem burocracia adicional.",
];

const additionalCovers = [
  {
    icon: Heart,
    title: "Doenças Graves",
    description: "Capital em caso de diagnóstico de doenças graves (oncologia, cardiovascular, etc.) — capital pago antecipadamente ao falecimento, conforme condições do produto.",
  },
  {
    icon: Briefcase,
    title: "Incapacidade para o trabalho",
    description: "Cobertura em caso de incapacidade temporária ou permanente para o trabalho por doença ou acidente, com dispensa das prestações do crédito durante o período coberto.",
  },
  {
    icon: Building2,
    title: "Desemprego",
    description: "Cobertura de desemprego involuntário do tomador do crédito, com pagamento temporário das prestações junto do banco, conforme condições do produto contratado.",
  },
];

const faqs = [
  {
    q: "Sou obrigado a contratar o seguro de vida com o banco?",
    a: "Não. A lei portuguesa permite ao titular do empréstimo à habitação subscrever o seguro de vida junto da entidade que entender, desde que apresente ao banco garantia equivalente à exigida. A RSF | Brokers atua na defesa dos interesses do cliente neste processo: recolhemos a informação necessária, comparamos propostas de várias seguradoras e ajudamos a garantir que a apólice cumpre os requisitos do banco.",
  },
  {
    q: "Quanto posso poupar ao mudar de seguro de vida de crédito habitação?",
    a: "A poupança varia conforme o perfil do cliente (idade, profissão, histórico de saúde), o capital em dívida e a seguradora. É habitual encontrar diferenças de prémio relevantes entre a proposta do banco e propostas de outras seguradoras, mas cada caso é um caso — apresentamos as simulações comparadas e indicamos o valor concreto. A poupança é uma possibilidade, não uma garantia universal.",
  },
  {
    q: "Tenho de fazer exames médicos?",
    a: "Para capital em dívida inferior a 300.000€, habitualmente não há exigência de exames médicos, conforme informação fornecida pela seguradora. Em vez disso, é preenchido um questionário de saúde. Para capitais superiores, ou em casos com histórico clínico relevante, a seguradora pode solicitar informação clínica adicional. Cada caso é analisado individualmente pela companhia.",
  },
  {
    q: "Posso manter o mesmo contrato e mudar só de mediador?",
    a: "Sim. A nomeação do mediador pode ser alterada em qualquer altura, mantendo o mesmo contrato de seguro, as mesmas coberturas e o mesmo prémio. O processo é simples: assina um documento de nomeação e a nova mediadora trata da comunicação à seguradora. Não há penalizações nem alteração de condições. É um direito do segurado.",
  },
  {
    q: "Como funciona a comunicação com o banco?",
    a: "Após contratação, a seguradora emite a apólice e os comprovativos a apresentar ao banco para substituição da garantia anterior. Acompanhamos esta comunicação, incluindo a entrega da apólice e o preenchimento de eventuais formulários do credor. O cliente não fica sozinho no processo — mantemos interlocução direta com o banco quando necessário.",
  },
];

export default async function Page() {
  const nonce = (await headers()).get("x-nonce");
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: "Seguro de vida para crédito habitação",
    description:
      "Seguro de vida individual associado ao empréstimo à habitação. Livre escolha de seguradora, sem exames médicos para capital até 300 mil euros (conforme informação) e acompanhamento na comunicação com o banco.",
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

  return (
    <>
      <script type="application/ld+json" nonce={nonce ?? undefined} dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHeader
        eyebrow="Destaque"
        title="Tem crédito habitação? Reduza a sua mensalidade."
        description="Peça uma simulação de seguro de vida associado ao crédito habitação, sem compromisso."
      />
      <Breadcrumbs items={[{ label: "Seguros", href: "/seguros" }, { label: "Seguro de vida — crédito habitação" }]} />

      {/* MENSAGENS PRINCIPAIS */}
      <section className="py-20">
        <div className="container-rsf grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <div>
            <SectionTitle
              eyebrow="O que deve saber"
              title="Seguro de vida do crédito habitação: o seu direito de escolha"
              description="A lei portuguesa protege o seu direito a escolher livremente a entidade onde contrata o seguro de vida associado ao crédito habitação. Confirme abaixo os pontos essenciais."
            />
            <ul className="mt-8 space-y-4">
              {messages.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/15 text-accent-ink flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-foreground/90 leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
            <GoogleRatingBadge className="mt-4" />
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/10">
              <img
                src="/images/paginas/seguro-vida-credito-habitacao.webp"
                alt="Casal a olhar pela janela da futura casa"
                width={1200}
                height={675}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "100% 50%" }}
              />
            </div>
            <Card className="border-accent/30 bg-secondary/40">
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent-ink grid place-items-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-primary">Como a RSF | Brokers o apoia</h3>
                </div>
                <div className="space-y-3 text-sm text-foreground/90 leading-relaxed">
                  <p>
                    Recolhemos os dados essenciais (idade, capital em dívida, profissão, histórico de saúde relevante) e solicitamos simulações
                    a várias seguradoras. Para capital em dívida inferior a 300.000€, é habitual dispensar exames médicos,
                    conforme informação fornecida pela seguradora.
                  </p>
                  <p>
                    Apresentamos as opções comparadas, com prémio, coberturas e condições, lado a lado. O cliente decide.
                    Acompanhamos a entrega da apólice ao banco e mantemos interlocução direta com o credor sempre que necessário.
                  </p>
                  <p>
                    Atuamos na defesa dos interesses do cliente durante todo o processo — da análise à contratação,
                    renovação e eventual sinistro.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-secondary/60 border-y border-border">
        <div className="container-rsf">
          <SectionTitle
            align="center"
            eyebrow="Benefícios"
            title="Porquê simular o seguro de vida de crédito habitação connosco"
            description="Condições apresentadas como possibilidades sujeitas a análise e condições, não como garantias universais. Cada caso é avaliado individualmente pela seguradora."
          />
          <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <Card key={i} className="bg-background">
                <CardContent className="p-6">
                  <div className="font-serif text-2xl text-accent-ink mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-foreground/90 leading-relaxed">{b}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-8 max-w-3xl mx-auto text-center">
            As condições apresentadas (dispensa de exames médicos, possibilidade de poupança) são possibilidades sujeitas à análise individual do caso pela seguradora e às condições do produto. Não constituem garantia universal.
          </p>
        </div>
      </section>

      {/* COBERTURAS ADICIONAIS */}
      <section className="py-20">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Coberturas adicionais"
            title="Coberturas que pode juntar ao seguro de vida"
            description="Para além da garantia base de morte e invalidez exigida pelo banco, é possível contratar coberturas adicionais adaptadas ao seu perfil. Cada cobertura é analisada caso a caso."
          />
          <div className="grid mt-12 md:grid-cols-3 gap-6">
            {additionalCovers.map((c) => (
              <Card key={c.title}>
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-lg bg-accent/15 text-accent-ink grid place-items-center mb-5">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Badge variant="secondary" className="bg-accent/15 text-accent-ink border-accent/30">
              Coberturas adicionais sujeitas a análise e aceitação pela seguradora
            </Badge>
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

      <CTASection
        title="Peça a sua simulação sem compromisso."
        description="Recolhemos os dados essenciais, comparamos propostas de várias seguradoras e apresentamos as condições lado a lado. A decisão é sempre sua."
        primaryLabel="Pedir simulação sem compromisso"
        primaryHref="/pedir-orcamento"
        secondaryLabel={`Ligar: ${site.phones.mobile}`}
        secondaryHref={`tel:${site.phones.mobileHref}`}
        variant="primary"
      />
    </>
  );
}
