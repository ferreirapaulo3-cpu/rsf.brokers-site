"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Variant = "default" | "accent" | "primary";

export function CTASection({
  title = "Pronto para comparar o seu seguro?",
  description = "Peça uma análise sem compromisso. Recebemos os dados, comparamos propostas entre as seguradoras e apresentamos uma recomendação clara por escrito.",
  primaryLabel = "Pedir orçamento gratuito",
  primaryHref = "/pedir-orcamento",
  secondaryLabel = `Ligar: ${site.phones.fixed}`,
  secondaryHref = `tel:${site.phones.fixedHref}`,
  variant = "primary",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: Variant;
}) {
  return (
    <section
      className={cn(
        "py-20 relative overflow-hidden",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "accent" && "bg-accent text-accent-foreground",
        variant === "default" && "bg-secondary text-secondary-foreground"
      )}
    >
      {variant === "primary" && (
        <>
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(800px 400px at 90% 50%, rgba(232,185,0,.2), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </>
      )}
      <div className="container-rsf relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-balance">{title}</h2>
          <p className={cn("text-base md:text-lg leading-relaxed", variant === "primary" ? "text-primary-foreground/80" : "opacity-80")}>
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Button
            asChild
            size="lg"
            className={variant === "primary" ? "bg-accent hover:bg-accent/90 text-accent-foreground" : undefined}
          >
            <Link href={primaryHref}>
              {primaryLabel} <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={secondaryHref}>
              <Phone className="w-4 h-4" /> {secondaryLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
