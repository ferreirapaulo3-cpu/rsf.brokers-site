import { PageHeader, Breadcrumbs, SectionTitle } from "@/components/site/layout";
import { QuoteForm } from "@/components/site/quote-form";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, ShieldCheck, FileText, Users } from "lucide-react";
import { site, insuranceTypes } from "@/lib/site-data";

export const metadata = {
  title: "Pedir orçamento — simulação sem compromisso",
  description:
    "Peça um orçamento de seguro à RSF | Brokers. Recebemos os dados, comparamos propostas entre seguradoras e apresentamos uma recomendação por escrito. Sem compromisso.",
  alternates: { canonical: "/pedir-orcamento" },
};

const steps = [
  { icon: FileText, title: "Envia-nos os dados", description: "Preencha o formulário abaixo ou ligue. Indique o tipo de seguro e os dados essenciais do risco a segurar." },
  { icon: Users, title: "Recolhemos propostas", description: "Solicitamos simulações a várias seguradoras parceiras, em paralelo. Recolhemos não só o prémio como as coberturas, franquias e exclusões." },
  { icon: ShieldCheck, title: "Recomendamos", description: "Apresentamos uma recomendação equilibrada por escrito. O cliente decide com informação real — sem promessas, sem pressão." },
  { icon: Phone, title: "Acompanhamos", description: "Depois da contratação, tratamos de renovações, alterações, sinistros e contactos com a seguradora. Sempre pelo cliente." },
];

export default async function PedirOrcamentoPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo } = await searchParams;
  // Só aceita um "tipo" que exista mesmo nas opções do formulário — evita pré-selecionar
  // um valor inválido vindo de um link mal formado ou manipulado na URL.
  const initialInsuranceType = tipo && insuranceTypes.includes(tipo) ? tipo : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Pedir orçamento"
        title="Peça um orçamento. Sem compromisso."
        description="Análise gratuita. Recebemos os dados, comparamos propostas entre seguradoras e apresentamos uma recomendação por escrito. Decide com informação real."
      />
      <Breadcrumbs items={[{ label: "Pedir orçamento" }]} />

      {/* FORM + CONTACTS */}
      <section className="py-20">
        <div className="container-rsf grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          {/* Form */}
          <div>
            <SectionTitle eyebrow="Formulário" title="Pedir simulação sem compromisso" />
            <p className="text-muted-foreground mt-4 mb-8 leading-relaxed">
              Quanto mais detalhe nos der na mensagem, mais precisa é a simulação que recebe.
              Se preferir, pode telefonar directamente: {site.phones.fixed} ou {site.phones.mobile}.
            </p>
            <Card className="border-border/70">
              <CardContent className="p-6 md:p-8">
                <QuoteForm initialInsuranceType={initialInsuranceType} />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-4">Contacto direto</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href={`tel:${site.phones.fixedHref}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                      <Phone className="w-4 h-4 text-accent flex-shrink-0" /> {site.phones.fixed}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${site.phones.mobileHref}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                      <Phone className="w-4 h-4 text-accent flex-shrink-0" /> {site.phones.mobile}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                      <Mail className="w-4 h-4 text-accent flex-shrink-0" /> {site.email}
                    </a>
                  </li>
                  <li>
                    <a href={site.address.mapsUrl} target="_blank" rel="noopener" className="flex items-start gap-3 hover:text-accent transition-colors">
                      <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                      <span>{site.address.line1}, {site.address.postalCode} {site.address.city}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <span>Seg. a Sex. — 9h00 às 19h00</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-lg text-primary mb-3">Pode também</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>· Telefonar e pedir para ser recontactado</li>
                  <li>· Enviar documentação por email</li>
                  <li>· Visitar a loja na Damaia (com marcação)</li>
                  <li>· Pedir para alterar a nomeação do mediador dos seus seguros atuais</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 border-accent/20">
              <CardContent className="p-6">
                <ShieldCheck className="w-7 h-7 text-accent-ink mb-3" />
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Os seus dados são tratados confidencialmente e usados exclusivamente para resposta
                  a este pedido, conforme a <a href="/politica-privacidade" className="text-primary underline">Política de Privacidade</a>.
                  Não cedemos dados a terceiros para marketing.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-20 bg-secondary/60 border-y border-border">
        <div className="container-rsf">
          <SectionTitle align="center" eyebrow="Como funciona" title="Quatro passos do pedido à apólice" />
          <div className="grid mt-14 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Card key={i} className="bg-background relative">
                <CardContent className="p-6">
                  <div className="font-serif text-3xl text-accent-ink mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <div className="w-10 h-10 rounded-md bg-primary/10 text-primary grid place-items-center mb-4">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
