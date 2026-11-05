/* Hallmark · component: footer · genre: editorial · theme: project tokens (no deal, existing brand kept)
 * floor: 0 FAIL · reflex: 0 · redesign: full (component scope), 2nd pass — height/density reduction
 * dropped: the partners/insurer list and its lead-in/footnote text · the user asked to remove it entirely
 * merged: Navegação + Seguros into one inline-wrap column · copyright + ISP into one line (no mid-dot joins)
 * waive: 19 (the "RSF | Brokers — Negócios Seguros" em dash is the brand name/tagline, unchanged site-wide, not prose)
 * built: the project · v2.0.0 */
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Clock, ExternalLink as ExternalLinkIcon } from "lucide-react";
import { site, nav } from "@/lib/site-data";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { cn } from "@/lib/utils";

// Cada link do footer leva "rounded-sm outline-none focus-visible:ring-2
// focus-visible:ring-ring focus-visible:ring-offset-2
// focus-visible:ring-offset-primary active:text-accent" (inline, não numa
// variável partilhada, para o scanner estático do Hallmark o detetar) — anel
// de foco com contraste >=3:1 sobre o fundo escuro, reutilizando os tokens
// já existentes (--ring, --primary), sem introduzir cor nova.

const legalLinks = [
  { label: "Política de privacidade", href: "/politica-privacidade" },
  { label: "Política de cookies", href: "/politica-cookies" },
  { label: "Resolução de Litígios", href: "/reclamacoes-arbitragem" },
  { label: "Termos e condições", href: "/termos-condicoes" },
  { label: "Links úteis", href: "/links-uteis" },
  { label: "ASF — Supervisão de Seguros", href: "https://www.asf.com.pt/", external: true },
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
      <div className="container-rsf py-10 md:py-12 grid gap-8 md:gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="inline-flex max-w-full rounded-md bg-background p-2 mb-4">
            <img
              src="/rsf-brokers.svg"
              alt="RSF | Brokers — Negócios Seguros"
              width={1584}
              height={672}
              className="h-16 w-auto max-w-full object-contain"
            />
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
            Mediador de seguros multimarca em Amadora. Desde junho de 2009, ajudamos particulares
            e empresas a encontrar a proteção mais adequada ao seu perfil, preço e necessidades.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className={cn("inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}
            >
              <Facebook className="w-4 h-4" /> /rsf.brokers
            </Link>
            <GoogleRatingBadge tone="dark" />
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-serif text-lg mb-4 text-accent">Contactos</h3>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener" className={cn("flex items-start gap-2.5 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phones.fixedHref}`} className={cn("flex items-center gap-2.5 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}>
                <Phone className="w-4 h-4 flex-shrink-0" /> {site.phones.fixed}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phones.mobileHref}`} className={cn("flex items-center gap-2.5 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}>
                <Phone className="w-4 h-4 flex-shrink-0" /> {site.phones.mobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={cn("flex items-center gap-2.5 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}>
                <Mail className="w-4 h-4 flex-shrink-0" /> {site.email}
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Seg. a Sex., 9h00 às 19h00</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Navigation + Insurance, merged into one compact column of wrapped inline links */}
        <div>
          <h3 className="font-serif text-lg mb-3 text-accent">Navegação</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm mb-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("text-primary-foreground/80 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <h3 className="font-serif text-lg mb-3 text-accent">Seguros</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {insuranceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("text-primary-foreground/80 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/seguros" className={cn("text-accent font-semibold hover:underline", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}>
              Ver todos os seguros
            </Link>
          </div>
        </div>
      </div>

      {/* Legal: copyright, ISP and required links in one compact band */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-rsf py-5 flex flex-col md:flex-row md:items-start justify-between gap-4 text-xs text-primary-foreground/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} RSF | Brokers — Negócios Seguros. Mediador de seguros. Todos os
            direitos reservados. Registo ISP: 309 302 840.
          </p>
          <nav aria-labelledby="footer-legal-heading" className="md:text-right">
            <h2
              id="footer-legal-heading"
              className="text-[0.6875rem] font-semibold text-primary-foreground/50 mb-2 text-center md:text-right"
            >
              Informação legal
            </h2>
            <ul className="flex items-center gap-x-5 gap-y-2 flex-wrap justify-center md:justify-end">
              {legalLinks.map((l) =>
                l.external ? (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("inline-flex items-center gap-1 hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}
                    >
                      {l.label}
                      <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link href={l.href} className={cn("hover:text-accent transition-colors", "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent")}>
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
