import { headers } from "next/headers";
import { HelpCircle } from "lucide-react";
import { PageHeader, Breadcrumbs } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/lib/site-data";

export const metadata = {
  title: "Perguntas frequentes",
  description:
    "Respostas curtas às questões mais comuns sobre como funciona a mediação de seguros com a RSF | Brokers: orçamentos, seguradoras, mudança de mediador, sinistros e documentos.",
  alternates: { canonical: "/faq" },
};

export default async function FaqPage() {
  const nonce = (await headers()).get("x-nonce");
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce ?? undefined}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Respostas curtas às questões mais comuns sobre como funciona a mediação de seguros com a RSF | Brokers."
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      {/* INTRO */}
      <section className="py-16">
        <div className="container-rsf grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div>
            <div className="max-w-3xl">
              <div className="text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 text-accent-ink">
                Antes de perguntar
              </div>
              <h2 className="font-serif text-3xl text-primary mb-4 leading-tight">
                As questões que ouvimos com mais frequência
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Reunimos neste espaço as perguntas que mais nos chegam dos clientes, em especial
                nas primeiras conversas sobre um novo seguro ou sobre uma mudança de mediador.
                As respostas são curtas e práticas, e procuram ir direto ao que interessa decidir.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Algumas respostas refletem o nosso modo de trabalho específico — a forma como a
                RSF | Brokers organiza o atendimento, a análise e o acompanhamento dos processos.
                Outras respostas aplicam-se ao funcionamento geral do mercado segurador português,
                em particular ao papel do mediador multimarca face às seguradoras.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Sempre que uma resposta não abranja o seu caso concreto, prefira um contacto direto.
                Cada seguro tem especificidades — o ramo, a seguradora, a sua situação pessoal —
                e a recomendação ajustada só é possível com a conversa.
              </p>
            </div>
          </div>

          <Card className="bg-secondary/40 border-primary/15">
            <CardContent className="p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent-ink grid place-items-center mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">
                Não encontrou a sua pergunta?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Se não encontrar a sua resposta, contacte-nos por email ou telefone. Respondemos
                normalmente em 1 dia útil e, quando se justificar, adicionamos a pergunta a esta página.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="pb-16">
        <div className="container-rsf max-w-4xl">
          <div className="rounded-xl border border-border bg-background p-2 md:p-4 shadow-sm">
            <Accordion type="single" collapsible className="px-2 md:px-4">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base md:text-lg font-serif text-primary text-left hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection
        title="A sua pergunta não está aqui?"
        description="Contacte-nos para esclarecer o seu caso concreto. Respondemos normalmente em 1 dia útil."
        primaryLabel="Contactar a RSF | Brokers"
        primaryHref="/contacto"
        secondaryLabel="Pedir orçamento"
        secondaryHref="/pedir-orcamento"
        variant="default"
      />
    </>
  );
}
