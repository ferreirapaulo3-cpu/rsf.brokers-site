import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Users, Briefcase, Star } from "lucide-react";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SnapRow } from "@/components/site/snap-row";
import { PartnersCarousel } from "@/components/site/partners-carousel";
import { HeroVideo } from "@/components/site/hero-video";
import { CountUp } from "@/components/site/count-up";
import { SectionTitle } from "@/components/site/layout";
import { site, insurances, valueProps, partners, googleReviews, googleRating, googleReviewsUrl } from "@/lib/site-data";

const heroStats = [
  { value: 27, label: "Anos de experiência" },
  { value: 13, label: "Seguradoras parceiras" },
  { value: 20, label: "Ramos disponíveis" },
];

const homeRamos = [
  { image: "/images/paginas/seguro-automovel.webp", name: "Automóvel", description: "Cobertura para o seu carro, ao melhor equilíbrio entre preço e proteção.", href: "/seguros/automovel" },
  { image: "/images/paginas/seguro-habitacao.webp", name: "Habitação", description: "Paredes, recheio e responsabilidade do seu lar protegidos em único contrato.", href: "/seguros/habitacao" },
  { image: "/images/paginas/seguro-saude.webp", name: "Saúde e Vida", description: "Planos de saúde, vida risco e vida para crédito habitação.", href: "/seguros/saude" },
  { image: "/images/paginas/seguro-empresas.webp", name: "Empresas", description: "RC, multirriscos, acidentes de trabalho e frotas, à medida do negócio.", href: "/seguros/empresas" },
  { image: "/images/paginas/seguro-viagem.webp", name: "Viagem e Lazer", description: "Seguro de viagem, embarcações de recreio e caça.", href: "/seguros/viagem" },
  { image: "/images/paginas/seguro-vida-credito-habitacao.webp", name: "Crédito habitação", description: "Reduza a mensalidade com seguro de vida individual.", href: "/seguro-vida-credito-habitacao" },
];

export default function HomePage() {
  const featuredInsurances = insurances.filter(i => i.hasDetailPage).slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <HeroVideo />
        {/* Camada escura em degradé (#2b3e4c): garante contraste AA do texto sobre as cenas claras. */}
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
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                <Link href="/pedir-orcamento">Pedir orçamento gratuito <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              {/* hover:bg-accent/15 (herdado de variant="outline") é transparente, por isso
                  sobre o fundo escuro desta secção dá um cinza baço em vez do dourado claro
                  que mostra no botão de referência do cabeçalho (que está sobre fundo branco).
                  #FCF5D9 é a cor sólida medida por pixel desse hover no cabeçalho — não uma
                  aproximação — reproduz o mesmo resultado aqui independentemente do fundo. */}
              <Button asChild size="lg" variant="outline" className="text-base hover:bg-[#fcf5d9]">
                <a href={`tel:${site.phones.fixedHref}`}><Phone className="w-4 h-4" /> Ligar: {site.phones.fixed}</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 md:mt-9 pt-7 border-t border-primary-foreground/15">
              {heroStats.map((s) => (
                <div key={s.label} className="hero-text text-center">
                  <div className="font-serif text-[2.64rem] md:text-[3.18rem] leading-none text-accent"><CountUp end={s.value} suffix="+" /></div>
                  <div className="text-[0.8125rem] md:text-sm text-primary-foreground/80 mt-1.5 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RAMOS DESTAQUE */}
      <section className="py-12 md:py-28">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Ramos principais"
            title="Seguros para todas as situações da vida"
            description="Encontre o seguro certo para a sua casa, carro, família, negócio ou viagem. Cada categoria liga a uma página dedicada com coberturas, vantagens e como pedir orçamento."
          />
          <div className="mt-8 md:mt-12">
            <SnapRow label="Ramos de seguros">
              {homeRamos.map((r) => (
                <Link key={r.name} href={r.href} className="group block h-full rounded-lg overflow-hidden border border-border/70 bg-card hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary/10">
                    <img src={r.image.replace(".webp", "-640.webp")} srcSet={`${r.image.replace(".webp", "-640.webp")} 640w, ${r.image} 1200w`} sizes="(min-width: 1024px) 400px, 80vw" alt="" width={1200} height={675} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-primary mb-1.5">{r.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{r.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-ink group-hover:gap-2 transition-all">
                      Saber mais <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </SnapRow>
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/seguros">Ver todos os ramos disponíveis <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PORQUÊ RSF */}
      <section className="py-12 md:py-28 bg-secondary/60">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Porquê a RSF | Brokers"
            title="Não vendemos um seguro. Recomendamos a solução certa."
            description="Como mediadores multimarca, não representamos nenhuma seguradora em particular. O nosso papel é analisar, comparar e recomendar — e acompanhar em cada passo do contrato."
            align="center"
          />
          <div className="mt-8 md:mt-14">
            <SnapRow label="Porquê a RSF | Brokers" mobileOnly itemClassName="w-[78%] sm:w-[44%]">
            {valueProps.map((v, i) => (
              <div key={v.title} className="h-full bg-background p-6 rounded-lg border border-border/60 hover:shadow-md transition-all">
                <div className="font-serif text-3xl text-accent-ink mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-serif text-lg text-primary mb-2 leading-snug">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
            </SnapRow>
          </div>
          <div className="mt-8 md:mt-10 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/sobre">Conhecer a RSF | Brokers <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEGURO DE VIDA / CRÉDITO HABITAÇÃO DESTAQUE */}
      <section className="py-12 md:py-28">
        <div className="container-rsf grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/10 order-2 lg:order-1">
            <img
              src="/images/credito-habitacao.webp"
              srcSet="/images/credito-habitacao-640.webp 640w, /images/credito-habitacao.webp 1024w"
              sizes="(min-width: 1024px) 560px, 100vw"
              alt="Moradia unifamiliar com telhado de telha cerâmica e jardim"
              width={1024}
              height={572}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-4 bg-accent/15 text-accent-ink border-accent/30">Destaque</Badge>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-5 leading-tight">
              Tem crédito habitação? Reduza a sua mensalidade.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Peça uma simulação de seguro de vida associado ao crédito habitação, sem compromisso.
              Não é obrigatório contratar o seguro com o banco — pode escolher livremente a melhor solução.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Seguro de vida individual associado ao empréstimo",
                "Possibilidade de reduzir a prestação mensal",
                "Sem exames médicos para capital em dívida inferior a 300.000€",
                "Coberturas adicionais: doenças graves, incapacidade, desemprego",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-accent-ink mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/seguro-vida-credito-habitacao">Pedir simulação sem compromisso</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${site.phones.mobileHref}`}><Phone className="w-4 h-4" /> {site.phones.mobile}</a>
              </Button>
            </div>
            <GoogleRatingBadge className="mt-4" />
          </div>
        </div>
      </section>

      {/* SEGURADORAS PARCEIRAS */}
      <section className="py-12 md:py-24 bg-primary text-primary-foreground">
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

      {/* O QUE DIZEM OS NOSSOS CLIENTES */}
      <section className="py-12 md:py-28 bg-secondary/60">
        <div className="container-rsf">
          <SectionTitle
            eyebrow="Avaliações"
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
            <SnapRow label="Avaliações no Google" mobileOnly itemClassName="w-[84%] sm:w-[46%]">
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

      {/* CONTACTO RÁPIDO */}
      <section className="py-12 md:py-24 bg-secondary/60 border-y border-border">
        <div className="container-rsf grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="Contacto rápido"
              title="Prefere falar com a RSF | Brokers?"
              description="Atendimento direto, sem call center nem menus intermináveis. Telefone, email, WhatsApp ou visite a loja na Damaia."
            />
            <div className="grid gap-3 mt-8 sm:grid-cols-3">
              <Button asChild variant="outline" size="lg"><a href={`tel:${site.phones.fixedHref}`}><Phone className="w-4 h-4" /> {site.phones.fixed}</a></Button>
              <Button asChild variant="outline" size="lg"><a href={`tel:${site.phones.mobileHref}`}><Phone className="w-4 h-4" /> {site.phones.mobile}</a></Button>
              <Button asChild variant="outline" size="lg"><Link href="/contacto">Ver morada e mapa</Link></Button>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            <Card><CardContent className="p-6"><Users className="w-7 h-7 text-accent-ink mb-3" /><div className="font-serif text-2xl text-primary">Particulares</div><p className="text-sm text-muted-foreground mt-1">Soluções para si, para a sua casa, carro e família.</p></CardContent></Card>
            <Card><CardContent className="p-6"><Briefcase className="w-7 h-7 text-accent-ink mb-3" /><div className="font-serif text-2xl text-primary">Empresas</div><p className="text-sm text-muted-foreground mt-1">Coberturas adaptadas a cada atividade e dimensão.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </>
  );
}
