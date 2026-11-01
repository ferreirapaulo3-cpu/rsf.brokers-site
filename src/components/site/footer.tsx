import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { site, nav, partners } from "@/lib/site-data";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";

const legalLinks = [
  { label: "Política de privacidade", href: "/politica-privacidade" },
  { label: "Termos e condições", href: "/termos-condicoes" },
  { label: "Política de cookies", href: "/politica-cookies" },
];

const insuranceLinks = [
  { label: "Seguro automóvel", href: "/seguros/automovel" },
  { label: "Seguro habitação", href: "/seguros/habitacao" },
  { label: "Seguro de vida — crédito habitação", href: "/seguro-vida-credito-habitacao" },
  { label: "Seguro de saúde", href: "/seguros/saude" },
  { label: "Seguro empresas", href: "/seguros/empresas" },
  { label: "Acidentes de trabalho", href: "/seguros/acidentes-trabalho" },
  { label: "Responsabilidade civil", href: "/seguros/responsabilidade-civil" },
  { label: "Seguro viagem", href: "/seguros/viagem" },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container-rsf py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="inline-flex max-w-full rounded-md bg-background p-2 mb-5">
            <img
              src="/rsf-brokers-web.webp"
              alt="RSF | Brokers — Negócios Seguros"
              width={1500}
              height={485}
              className="h-14 w-auto max-w-full object-contain"
            />
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5">
            Mediador de seguros multimarca em Amadora. Desde junho de 2009, ajudamos particulares
            e empresas a encontrar a proteção mais adequada ao seu perfil, preço e necessidades.
          </p>
          <Link
            href={site.facebook}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
          >
            <Facebook className="w-4 h-4" /> /rsf.brokers
          </Link>
          <GoogleRatingBadge tone="dark" className="mt-4" />
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-serif text-lg mb-5 text-accent">Contactos</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener" className="flex items-start gap-2.5 hover:text-accent transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phones.fixedHref}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> {site.phones.fixed}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phones.mobileHref}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> {site.phones.mobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" /> {site.email}
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Seg. a Sex. — 9h00 às 19h00</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-serif text-lg mb-5 text-accent">Navegação</h3>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Insurance links */}
        <div>
          <h3 className="font-serif text-lg mb-5 text-accent">Seguros</h3>
          <ul className="space-y-2.5 text-sm">
            {insuranceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/seguros" className="text-accent font-semibold hover:underline">Ver todos →</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Partners strip */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-rsf py-8">
          <p className="text-[0.8125rem] uppercase tracking-widest text-primary-foreground/70 mb-4">
            Seguradoras com que a RSF | Brokers trabalha ou já trabalhou
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/70">
            {partners.map((p) => (
              <span key={p} className="font-medium">{p}</span>
            ))}
          </div>
          <p className="text-[0.8125rem] text-primary-foreground/65 mt-3">
            Lista não exaustiva. Disponibilidade atual sujeita a confirmação antes da publicação de cada proposta.
          </p>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-rsf py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>
            © {new Date().getFullYear()} RSF | Brokers — Negócios Seguros. Mediador de seguros. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
