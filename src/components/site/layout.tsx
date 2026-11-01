"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Breadcrumb" className="container-rsf py-4 text-sm">
      <ol className="flex items-center gap-1.5 text-muted-foreground flex-wrap">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">Início</Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 opacity-50" />
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 ${light ? "text-accent" : "text-accent-ink"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-balance ${light ? "text-background" : "text-primary"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? "text-background/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(700px 400px at 80% 20%, rgba(232,185,0,.2), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container-rsf relative z-10">
        {eyebrow && (
          <div className="text-[0.8125rem] uppercase tracking-widest font-semibold mb-3 text-accent">{eyebrow}</div>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-balance leading-tight">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
