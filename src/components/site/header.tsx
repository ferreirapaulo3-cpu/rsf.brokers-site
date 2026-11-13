"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, Mail, MapPin, Facebook } from "lucide-react";
import { site, nav, insurances } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";

const navLinkClass =
  "px-3 py-2 text-sm font-medium whitespace-nowrap text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-md transition-colors outline-none focus-visible:outline-none focus-visible:rounded-full focus-visible:bg-secondary/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const segurosGroups = [
  { label: "Particulares", items: insurances.filter((i) => i.category === "Particulares") },
  { label: "Empresas", items: insurances.filter((i) => i.category === "Empresas") },
];

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
        <div className="container-rsf flex items-center justify-between h-20 xl:h-24">
          <Link href="/" className="flex items-center gap-3 xl:mr-6" aria-label="RSF Brokers — Início">
            <img src="/rsf-brokers.svg" alt="RSF | Brokers — Negócios Seguros" width={1584} height={672} className="h-[4.25rem] xl:h-[5.25rem] w-auto object-contain object-left" />
          </Link>

          <NavigationMenu viewport={false} className="hidden lg:flex max-w-none flex-1 justify-start">
            <NavigationMenuList className="gap-1">
              {nav.map((item) =>
                item.href === "/seguros" ? (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger className={cn(navLinkClass, "bg-transparent data-[state=open]:bg-secondary/50")}>
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-6 p-4 md:w-[42rem] md:grid-cols-3">
                        {segurosGroups.map((group) => (
                          <div key={group.label}>
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">{group.label}</p>
                            <ul className="flex flex-col gap-0.5">
                              {group.items.map((ins) => (
                                <li key={ins.slug}>
                                  <NavigationMenuLink asChild>
                                    <Link href={ins.href} className="block rounded-md px-2 py-1.5 text-sm text-foreground/80 hover:bg-secondary/50 hover:text-primary">
                                      {ins.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Outros serviços</p>
                          <NavigationMenuLink asChild>
                            <Link href="/seguros#outros-servicos" className="block rounded-md px-2 py-1.5 text-sm text-foreground/80 hover:bg-secondary/50 hover:text-primary">
                              Ver outros serviços
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild className={cn(navLinkClass, "bg-transparent")}>
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

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
                  <img src="/rsf-brokers.svg" alt="RSF | Brokers — Negócios Seguros" width={1584} height={672} className="h-12 w-auto max-w-[10rem] object-contain object-left" />
                </SheetHeader>
                <nav className="flex-1 flex flex-col gap-1 p-4">
                  {nav.map((item) =>
                    item.href === "/seguros" ? (
                      <Accordion key={item.href} type="single" collapsible>
                        <AccordionItem value="seguros" className="border-b-0">
                          <AccordionTrigger className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary/50 hover:no-underline rounded-md [&[data-state=open]]:bg-secondary/50">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-1 pl-3">
                            <Accordion type="multiple" className="w-full">
                              {segurosGroups.map((group) => (
                                <AccordionItem key={group.label} value={group.label} className="border-b-0">
                                  <AccordionTrigger className="py-2 text-sm font-medium text-foreground/80 hover:no-underline">
                                    {group.label}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <ul className="flex flex-col gap-0.5">
                                      {group.items.map((ins) => (
                                        <li key={ins.slug}>
                                          <Link
                                            href={ins.href}
                                            onClick={() => setOpen(false)}
                                            className="block py-1.5 text-sm text-foreground/80 hover:text-primary"
                                          >
                                            {ins.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                            <Link
                              href="/seguros#outros-servicos"
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                            >
                              Outros serviços
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-md"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
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
