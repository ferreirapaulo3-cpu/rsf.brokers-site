"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, Mail, MapPin, Facebook } from "lucide-react";
import { site, nav } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container-rsf flex items-center justify-between h-9 text-[0.8125rem]">
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phones.fixedHref}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" /> {site.phones.fixed}
            </a>
            <span className="opacity-40">|</span>
            <a href={`tel:${site.phones.mobileHref}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" /> {site.phones.mobile}
            </a>
            <span className="opacity-40">|</span>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-3 h-3" /> {site.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <GoogleRatingBadge size="compact" tone="dark" className="hidden xl:inline-flex" />
            <span className="opacity-40 hidden xl:inline">|</span>
            <Link href={site.facebook} target="_blank" rel="noopener" className="hover:text-accent transition-colors flex items-center gap-1.5">
              <Facebook className="w-3 h-3" /> Facebook
            </Link>
            <span className="opacity-40">|</span>
            <Link href={site.address.mapsUrl} target="_blank" rel="noopener" className="hover:text-accent transition-colors flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> {site.address.city}
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={cn("bg-background/95 backdrop-blur border-b transition-all", scrolled ? "border-border shadow-sm" : "border-transparent")}>
        <div className="container-rsf flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 xl:mr-6" aria-label="RSF Brokers — Início">
            <picture>
              <source media="(min-width: 1280px)" srcSet="/rsf-brokers-web.webp" width={1500} height={485} />
              <img src="/rsf-brokers.webp" alt="RSF | Brokers — Negócios Seguros" width={720} height={342} className="h-[4.25rem] w-auto max-w-[10.5rem] object-contain object-left xl:max-w-none" />
            </picture>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium whitespace-nowrap text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex lg:hidden 2xl:inline-flex">
              <a href={`tel:${site.phones.fixedHref}`}>
                <Phone className="w-4 h-4" /> {site.phones.fixed}
              </a>
            </Button>
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/pedir-orcamento">Pedir orçamento</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button aria-label="Abrir menu" className="lg:hidden p-2 rounded-md hover:bg-secondary">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 max-w-[80%] p-0">
                <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                <SheetHeader className="flex-row items-center justify-between p-4 border-b space-y-0">
                  <img src="/rsf-brokers.webp" alt="RSF | Brokers — Negócios Seguros" width={720} height={342} className="h-12 w-auto max-w-[10rem] object-contain object-left" />
                </SheetHeader>
                <nav className="flex-1 flex flex-col gap-1 p-4">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t flex flex-col gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={`tel:${site.phones.fixedHref}`}><Phone className="w-4 h-4" /> {site.phones.fixed}</a>
                  </Button>
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setOpen(false)}>
                    <Link href="/pedir-orcamento">Pedir orçamento</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
