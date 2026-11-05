import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHeader, Breadcrumbs } from "@/components/site/layout";
import { CTASection } from "@/components/site/cta-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Links úteis",
  description:
    "Ligações diretas para entidades oficiais e públicas do setor segurador: ASF, Fundo de Garantia Automóvel e Sistema de Carta Verde.",
  alternates: { canonical: "/links-uteis" },
};

const usefulLinks = [
  {
    name: "ASF — Autoridade de Supervisão de Seguros e Fundos de Pensões",
    href: "https://www.asf.com.pt/",
    description: "Autoridade de supervisão do setor segurador e da mediação de seguros.",
  },
  {
    name: "Fundo de Garantia Automóvel",
    href: "https://www.fga.asf.com.pt/home",
    description:
      "Informação e apoio em situações abrangidas pelo Fundo de Garantia Automóvel, incluindo determinados acidentes com veículos sem seguro ou responsáveis desconhecidos.",
  },
  {
    name: "Carta Verde — circulação internacional",
    href: "https://gpcv.pt/conselho-de-gabinetes/",
    description:
      "Informação sobre o Sistema de Carta Verde, circulação no estrangeiro e proteção das vítimas de acidentes transfronteiriços.",
  },
];

export default function LinksUteisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos"
        title="Links úteis"
        description="Ligações diretas para entidades oficiais e públicas do setor segurador, úteis para consulta e esclarecimento."
      />
      <Breadcrumbs items={[{ label: "Links úteis" }]} />

      <section className="py-16">
        <div className="container-rsf max-w-4xl">
          <p className="text-foreground/80 leading-relaxed mb-10">
            As entidades abaixo são organismos públicos ou estruturas oficiais do setor segurador,
            independentes da RSF | Brokers — não são parceiras comerciais nem integram a rede de
            seguradoras com que trabalhamos. Disponibilizamos estas ligações a título meramente
            informativo, para consulta direta junto da fonte oficial. Para reclamações, resolução
            alternativa de litígios (RAL) e registo do mediador, consulte a página{" "}
            <Link href="/reclamacoes-arbitragem" className="text-primary underline">
              Reclamações e arbitragem
            </Link>
            .
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {usefulLinks.map((item) => (
              <Card key={item.href} className="h-full border-border bg-background">
                <CardContent className="flex h-full flex-col p-6">
                  <h2 className="font-serif text-xl text-primary mb-2">{item.name}</h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-foreground/80">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Visitar site oficial
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Tem dúvidas sobre o seu seguro?"
        description="Contacte a RSF | Brokers para esclarecer qualquer questão sobre os seus contratos ou pedidos de orçamento."
        primaryLabel="Contactar a RSF | Brokers"
        primaryHref="/contacto"
        variant="default"
      />
    </>
  );
}
