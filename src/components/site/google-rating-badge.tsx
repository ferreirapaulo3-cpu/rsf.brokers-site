import { Star } from "lucide-react";
import { googleRating, googleReviewsUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Props = {
  /** "light" para fundos claros, "dark" para fundos azuis (rodapé, barra superior). */
  tone?: "light" | "dark";
  /** "compact" mostra só "4,8 ★ no Google · 26 avaliações" (a ligação é o próprio texto). */
  size?: "full" | "compact";
  linkLabel?: string;
  className?: string;
};

export function GoogleRatingBadge({ tone = "light", size = "full", linkLabel = "Ver avaliações", className }: Props) {
  const rating = googleRating.value.toFixed(1).replace(".", ",");
  const dark = tone === "dark";
  const summary = (
    <>
      <span className="inline-flex items-center gap-1 font-semibold">
        {rating}
        <Star className="w-3.5 h-3.5 fill-accent text-accent" aria-hidden="true" /> no Google
      </span>
      <span aria-hidden="true">·</span>
      <span>{googleRating.count} avaliações</span>
    </>
  );

  if (size === "compact") {
    return (
      <a
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener"
        className={cn("inline-flex items-center gap-1.5 hover:text-accent transition-colors", className)}
      >
        {summary}
        <span className="sr-only"> (abre num novo separador)</span>
      </a>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm",
        dark ? "text-primary-foreground/80" : "text-foreground/80",
        className,
      )}
    >
      {summary}
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span aria-hidden="true">·</span>
      <a
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener"
        className={cn(
          "font-semibold underline underline-offset-2 transition-colors",
          dark ? "text-accent hover:text-primary-foreground" : "text-primary hover:text-accent-ink",
        )}
      >
        {linkLabel}
        <span className="sr-only"> (abre num novo separador)</span>
      </a>
      </span>
    </div>
  );
}
