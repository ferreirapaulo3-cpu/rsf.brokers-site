import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { site } from "@/lib/site-data";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { cn } from "@/lib/utils";

const focusRing =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:text-accent";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container-rsf py-10 md:py-12 grid gap-8 md:gap-10 md:grid-cols-2">
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
            <Link href={site.facebook} target="_blank" rel="noopener" className={cn("inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors", focusRing)}>
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
              <a href={site.address.mapsUrl} target="_blank" rel="noopener" className={cn("flex items-start gap-2.5 hover:text-accent transition-colors", focusRing)}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phones.fixedHref}`} className={cn("flex items-center gap-2.5 hover:text-accent transition-colors", focusRing)}>
                <Phone className="w-4 h-4 flex-shrink-0" /> {site.phones.fixed}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phones.mobileHref}`} className={cn("flex items-center gap-2.5 hover:text-accent transition-colors", focusRing)}>
                <Phone className="w-4 h-4 flex-shrink-0" /> {site.phones.mobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={cn("flex items-center gap-2.5 hover:text-accent transition-colors", focusRing)}>
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
      </div>

      {/* Legal: copyright, ISP and link to the in-page legal section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-rsf py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} RSF | Brokers — Negócios Seguros. Mediador de seguros. Todos os
            direitos reservados. Registo ISP: 309 302 840.
          </p>
          <a href="#legal" className={cn("text-center md:text-right hover:text-accent transition-colors", focusRing)}>
            Informação legal
          </a>
        </div>
      </div>
    </footer>
  );
}
