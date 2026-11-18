import Link from "next/link";
import { ArrowRight, Phone, Smartphone, Mail, MapPin, Facebook, Clock, Star, Car, Home as HomeIcon, HeartPulse, Briefcase, Plane } from "lucide-react";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnapRow } from "@/components/site/snap-row";
import { PartnersCarousel } from "@/components/site/partners-carousel";
import { HeroVideo } from "@/components/site/hero-video";
import { CountUp } from "@/components/site/count-up";
import { SectionTitle } from "@/components/site/layout";
import { QuoteForm } from "@/components/site/quote-form";
import { ContactForm } from "@/components/site/contact-form";
import { LazyMap } from "@/components/site/lazy-map";
import { LegalAccordion } from "@/components/site/legal-accordion";
import { site, partners, googleReviews, googleRating, googleReviewsUrl } from "@/lib/site-data";
import { cn, discreetLinkClass } from "@/lib/utils";

const heroStats = [
  { value: 27, label: "Anos de experiência" },
  { value: 13, label: "Seguradoras parceiras" },
  { value: 20, label: "Ramos disponíveis" },
];

const homeRamos = [
  { image: "/images/paginas/seguro-automovel.webp", icon: Car, name: "Automóvel", description: "Cobertura para o seu carro, ao melhor equilíbrio entre preço e proteção." },
  { image: "/images/paginas/seguro-habitacao.webp", icon: HomeIcon, name: "Habitação", description: "Paredes, recheio e responsabilidade do seu lar protegidos em único contrato." },
  { image: "/images/paginas/seguro-saude.webp", icon: HeartPulse, name: "Saúde e Vida", description: "Planos de saúde, vida risco e vida para crédito habitação." },
  { image: "/images/paginas/seguro-empresas.webp", icon: Briefcase, name: "Empresas", description: "RC, multirriscos, acidentes de trabalho e frotas, à medida do negócio." },
  { image: "/images/paginas/seguro-viagem.webp", icon: Plane, name: "Viagem e Lazer", description: "Seguro de viagem, embarcações de recreio e caça." },
  { image: "/images/paginas/seguro-vida-credito-habitacao.webp", icon: HomeIcon, name: "Seguro de vida do crédito habitação", description: "Reduza a mensalidade com seguro de vida individual." },
];

const contactCards = [
  { icon: Phone, label: "Telefone fixo", value: site.phones.fixed, href: `tel:${site.phones.fixedHref}`, note: "Chamada para rede fixa nacional" },
  { icon: Smartphone, label: "Telefone móvel", value: site.phones.mobile, href: `tel:${site.phones.mobileHref}`, note: "Chamada para rede móvel nacional" },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, note: "Resposta típica em 1 dia útil" },
  { icon: MapPin, label: "Morada", value: `${site.address.line1}, ${site.address.postalCode} ${site.address.city}`, href: site.address.mapsUrl, note: "Ver no Google Maps", external: true },
];

export default function HomePage() {
  return (
    <>
      {/* APRESENTAÇÃO */}
      <section id="inicio" className="relative bg-primary text-primary-foreground overflow-hidden scroll-mt-20">
        <HeroVideo />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/[0.80] via-primary/[0.68] to-primary/[0.38] max-md:bg-primary/[0.72] max-md:bg-none"
        />
        <div className="container-rsf relative z-10 py-16 md:py-20">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-5 bg-accent/20 text-accent border-accent/30">
              Mediador multimarca · Amadora · desde 2009
            </Badge>
            <h1 className="hero-text font-serif text-4xl md:text-5xl leading-tight mb-8 text-balance">
              Seguros para particulares e empresas, com comparação entre várias seguradoras.
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" variant="accent" className="text-base">
                <Link href="#orcamento">Pedir orçamento gratuito <ArrowRight className="cta-arrow w-4 h-4 ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline-dark" className="text-base">
                <a href={`tel:${site.phones.fixedHref}`}><Phone className="w-4 h-4" /> Ligar: {site.phones.fixed}</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 md:mt-9 pt-7 border-t border-primary-foreground/15">
              {heroStats.map((s) => (
                <div key={s.label} className="hero-text text-center">
                  <div className="font-serif text-[3.17rem] md:text-[3.82rem] leading-none text-accent"><CountUp end={s.value} suffix="+" /></div>
                  <div className="text-[0.8125rem] md:text-sm text-primary-foreground/80 mt-1.5 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS (RAMOS) */}
      <section id="servicos" className="py-12 md:py-28 scroll-mt-20">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Serviços"
            title="Seguros para todas as situações da vida"
            description="Encontre o seguro certo para a sua casa, carro, família, negócio ou viagem. Peça uma análise sem compromisso para o ramo que precisa."
          />
          <ul className="md:hidden mt-8 rounded-lg border border-border divide-y divide-border overflow-hidden">
            {homeRamos.map((r) => (
              <li key={r.name}>
                <a
                  href="#orcamento"
                  className="flex items-center gap-3 min-h-12 px-4 py-3 bg-card text-sm font-medium text-foreground/90 hover:bg-secondary/50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <r.icon className="w-5 h-5 text-accent-ink flex-shrink-0" aria-hidden="true" />
                  <span className="flex-1">{r.name}</span>
                  <ArrowRight className="cta-arrow w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block mt-8 md:mt-12">
            <SnapRow label="Ramos de seguros">
              {homeRamos.map((r) => (
                <a key={r.name} href="#orcamento" className="group block h-full rounded-lg overflow-hidden border border-border/70 bg-card hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary/10">
                    <img src={r.image.replace(".webp", "-640.webp")} srcSet={`${r.image.replace(".webp", "-640.webp")} 640w, ${r.image} 1200w`} sizes="(min-width: 1024px) 400px, 80vw" alt="" width={1200} height={675} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-primary mb-1.5">{r.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{r.description}</p>
                    <span className={cn(discreetLinkClass, "group-hover:gap-2 transition-all")}>
                      Pedir orçamento <ArrowRight className="cta-arrow w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </SnapRow>
          </div>
        </div>
      </section>

      {/* SEGURADORAS PARCEIRAS */}
      <section id="seguradoras" className="py-12 md:py-24 bg-primary text-primary-foreground scroll-mt-20">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Seguradoras parceiras"
            title="Comparação entre as principais seguradoras do mercado"
            description="Como mediador multimarca, solicitamos propostas a várias companhias e apresentamos as condições lado a lado. A disponibilidade atual de cada seguradora para cada ramo deve ser confirmada caso a caso."
            light
          />
          <div className="mt-12">
            <PartnersCarousel partners={partners} />
          </div>
        </div>
      </section>

      {/* TESTEMUNHOS (AVALIAÇÕES GOOGLE) */}
      <section id="testemunhos" className="py-12 md:py-28 bg-secondary/60 scroll-mt-20">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Testemunhos"
            title="O que dizem os nossos clientes"
            align="center"
          />
          <div className="flex flex-col items-center gap-2 mt-6">
            <div role="img" className="relative inline-flex" aria-label={`Classificação ${googleRating.value} de 5`}>
              <div className="flex gap-1 text-border" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5" />
                ))}
              </div>
              <div
                className="absolute inset-0 flex gap-1 overflow-hidden"
                style={{ width: `${(googleRating.value / 5) * 100}%` }}
                aria-hidden="true"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent flex-shrink-0" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {googleRating.value.toFixed(1).replace(".", ",")} de 5 · baseado em {googleRating.count} avaliações no Google
            </p>
            <Button asChild variant="outline" size="lg" className="mt-3">
              <a href={googleReviewsUrl} target="_blank" rel="noopener">
                Ver avaliações no Google<span className="sr-only"> (abre num novo separador)</span>
              </a>
            </Button>
          </div>
          <div className="mt-8 md:mt-12">
            <SnapRow label="Avaliações no Google" mobileOnly itemClassName="w-[84%] sm:w-[46%]" gridClassName="md:grid-cols-2 lg:grid-cols-3">
            {googleReviews.map((r) => (
              <Card key={r.author} className="h-full border-border/70 bg-background">
                <CardContent className="p-6 flex flex-col h-full">
                  <div role="img" className="flex gap-0.5 mb-4" aria-label={`${r.rating} de 5 estrelas`}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-5 flex-1">«{r.text}»</p>
                  <div className="text-sm font-semibold text-primary">{r.author}</div>
                </CardContent>
              </Card>
            ))}
            </SnapRow>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE ORÇAMENTO */}
      <section id="orcamento" className="py-12 md:py-28 scroll-mt-20">
        <div className="container-rsf max-w-3xl">
          <SectionTitle
            eyebrow="Orçamento"
            title="Peça um orçamento. Sem compromisso."
            description="Análise gratuita. Recebemos os dados, comparamos propostas entre seguradoras e apresentamos uma recomendação por escrito."
            align="center"
          />
          <Card className="mt-10 border-border/70">
            <CardContent className="p-6 md:p-8">
              <QuoteForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACTOS */}
      <section id="contactos" className="py-12 md:py-28 bg-secondary/60 border-y border-border scroll-mt-20">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Contactos"
            title="Fale com a RSF | Brokers"
            description="Atendimento direto, sem call center. Telefone, WhatsApp, email, mapa ou formulário — escolha o canal que lhe for mais cómodo."
          />

          <div className="grid lg:grid-cols-2 gap-10 items-start mt-10">
            {/* LEFT: cards + map */}
            <div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {contactCards.map((c) => {
                  const Icon = c.icon;
                  const external = "external" in c && c.external;
                  return (
                    <a key={c.label} href={c.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                      <Card className="h-full bg-background border-border hover:border-primary/30 transition-colors cursor-pointer">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent-ink grid place-items-center flex-shrink-0">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="text-[0.8125rem] uppercase tracking-widest font-semibold text-muted-foreground">
                              {c.label}
                            </div>
                          </div>
                          <div className="font-serif text-lg text-primary mb-1 break-words">{c.value}</div>
                          <div className="text-xs text-muted-foreground leading-relaxed">{c.note}</div>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${site.phones.fixedHref}`}><Phone className="w-4 h-4" /> Ligar: {site.phones.fixed}</a>
                </Button>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1ebe5a] text-white">
                  <a href="https://wa.me/351933100964" target="_blank" rel="noopener noreferrer">
                    WhatsApp: {site.phones.mobile}
                  </a>
                </Button>
              </div>

              <h3 className="font-serif text-xl text-primary mb-4">Onde estamos</h3>
              <LazyMap />
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                O mapa é fornecido pelo Google Maps e só é carregado após o clique em &ldquo;Ver mapa&rdquo;.
              </p>

              <div className="flex items-center gap-3 mt-6 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 flex-shrink-0" /> Seg. a Sex., 9h00 às 19h00
              </div>
              <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                <Facebook className="w-4 h-4 flex-shrink-0" />
                <Link href={site.facebook} target="_blank" rel="noopener" className="hover:text-primary transition-colors">
                  /rsf.brokers
                </Link>
              </div>
              <GoogleRatingBadge className="mt-4" linkLabel="Ver avaliações no Google" />
            </div>

            {/* RIGHT: contact form */}
            <Card className="bg-background border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-serif text-xl text-primary mb-4">Envie-nos a sua mensagem</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* INFORMAÇÃO LEGAL */}
      <section id="legal" className="py-12 md:py-20 border-t border-border scroll-mt-20">
        <div className="container-rsf">
          <SectionTitle eyebrow="Informação legal" title="Políticas e informação do mediador" align="center" />
          <div className="mt-10">
            <LegalAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
