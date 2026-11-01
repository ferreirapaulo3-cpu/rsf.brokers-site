import Link from "next/link";
import {
  Phone,
  Smartphone,
  Mail,
  MapPin,
  Facebook,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import { PageHeader, Breadcrumbs } from "@/components/site/layout";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Contacto — fale diretamente com o mediador",
  description:
    "Contacte a RSF | Brokers por telefone, email ou na loja da Damaia, Amadora. Atendimento direto pelo mediador, sem call center. Formulário de contacto disponível.",
  alternates: { canonical: "/contacto" },
};

const contactCards = [
  {
    icon: Phone,
    label: "Telefone fixo",
    value: site.phones.fixed,
    href: `tel:${site.phones.fixedHref}`,
    note: "Chamada para rede fixa nacional",
  },
  {
    icon: Smartphone,
    label: "Telefone móvel",
    value: site.phones.mobile,
    href: `tel:${site.phones.mobileHref}`,
    note: "Chamada para rede móvel nacional",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Resposta típica em 1 dia útil",
  },
  {
    icon: MapPin,
    label: "Morada",
    value: `${site.address.line1}, ${site.address.postalCode} ${site.address.city}`,
    href: site.address.mapsUrl,
    note: "Ver no Google Maps",
    external: true,
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Página oficial da RSF | Brokers",
    href: site.facebook,
    note: "Abrir perfil no Facebook",
    external: true,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg. a Sex. — 9h00 às 19h00",
    note: "Atendimento presencial com marcação preferencial",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Fale com a RSF | Brokers"
        description="Telefone, email, morada e formulário. Atendimento direto, sem call center."
      />
      <Breadcrumbs items={[{ label: "Contacto" }]} />

      {/* INTRO */}
      <section className="py-16">
        <div className="container-rsf max-w-3xl">
          <div className="text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 text-accent-ink">
            Atendimento direto
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 leading-tight">
            Sem intermediários, sem call center, sem áudio de espera.
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A RSF | Brokers é um gabinete de mediação de pequena dimensão. Isso significa que
            quem atende o telefone, lê o email e recebe o cliente na loja é, em regra, o
            mediador responsável. Não há passagem de chamada entre departamentos nem espera em
            fila para ouvir uma gravação.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Escolha o canal que lhe for mais cómodo. Para assuntos urgentes — em particular
            sinistros — recomendamos sempre o contacto telefónico. Para pedidos de orçamento
            com documentação associada, o email é o mais eficaz. Para tudo o resto, o
            formulário abaixo é suficiente.
          </p>
        </div>
      </section>

      {/* CONTACT GRID + MAP */}
      <section className="pb-16">
        <div className="container-rsf grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: cards */}
          <div>
            <h3 className="font-serif text-2xl text-primary mb-6">Dados de contacto</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const Wrapper = c.href ? (c.external ? "a" : Link) : "div";
                const wrapperProps = c.href
                  ? c.external
                    ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: c.href }
                  : {};
                return (
                  <Wrapper key={c.label} {...(wrapperProps as any)}>
                    <Card
                      className={`h-full bg-background border-border hover:border-primary/30 transition-colors ${
                        c.href ? "cursor-pointer" : ""
                      }`}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent-ink grid place-items-center flex-shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="text-[0.8125rem] uppercase tracking-widest font-semibold text-muted-foreground">
                            {c.label}
                          </div>
                        </div>
                        <div className="font-serif text-lg text-primary mb-1 break-words">
                          {c.value}
                        </div>
                        {c.note && (
                          <div className="text-xs text-muted-foreground leading-relaxed">
                            {c.note}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Wrapper>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={`tel:${site.phones.fixedHref}`}>
                  <Phone className="w-4 h-4" /> Ligar agora
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pedir-orcamento">
                  Pedir orçamento <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <GoogleRatingBadge className="mt-4" linkLabel="Ver avaliações no Google" />
          </div>

          {/* RIGHT: Google Maps */}
          <div>
            <h3 className="font-serif text-2xl text-primary mb-6">Onde estamos</h3>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm bg-secondary">
              <iframe
                src={site.mapsEmbed}
                title="Mapa interativo com a localização da RSF | Brokers na Rua Garcia de Orta, Damaia, Amadora"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              O mapa é fornecido pelo Google Maps. Ao clicar nele, sai do website da RSF | Brokers
              e passa a estar sujeito à{" "}
              <Link href="/politica-cookies" className="text-primary underline">
                Política de cookies
              </Link>{" "}
              e à política de privacidade da Google.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-secondary/60 border-y border-border">
        <div className="container-rsf grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <div className="text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 text-accent-ink">
              Formulário
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 leading-tight">
              Envie-nos a sua mensagem
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              O formulário abaixo envia diretamente a sua mensagem para o email do mediador. Use
              este canal para questões gerais, pedidos de esclarecimento, marcação de atendimento
              presencial ou situações em que ainda não tem a certeza de qual o seguro adequado.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para pedir uma simulação concreta com comparação entre seguradoras, prefira a
              página{" "}
              <Link href="/pedir-orcamento" className="text-primary underline">
                Pedir orçamento
              </Link>
              , que recolhe de forma estruturada a informação necessária à análise do risco.
            </p>
            <div className="flex items-start gap-3 mt-6 text-sm text-muted-foreground">
              <Send className="w-4 h-4 mt-0.5 text-accent-ink flex-shrink-0" />
              <span className="leading-relaxed">
                Os dados que enviar são tratados exclusivamente para resposta à sua mensagem,
                em conformidade com o RGPD e a nossa Política de Privacidade.
              </span>
            </div>
          </div>

          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
