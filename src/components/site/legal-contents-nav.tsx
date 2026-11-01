import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type LegalContentsItem = {
  id: string;
  label: string;
};

export function LegalContentsNav({ items }: { items: LegalContentsItem[] }) {
  return (
    <>
      <details className="group mb-8 rounded-lg border border-border bg-background shadow-sm lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
          <span>Navegar nesta página</span>
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <nav aria-label="Secções do documento">
          <ol className="grid grid-cols-2 gap-1 border-t border-border p-3 sm:grid-cols-3">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="block rounded-md px-2 py-2 text-sm leading-snug text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </details>

      <nav
        aria-label="Índice do documento"
        className="sticky top-32 hidden self-start lg:block"
      >
        <div className="rounded-lg border border-border bg-secondary/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-ink">
            Nesta página
          </p>
          <ol className="mt-3 space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="block rounded-md px-2 py-1.5 text-sm leading-snug text-muted-foreground transition-colors hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
