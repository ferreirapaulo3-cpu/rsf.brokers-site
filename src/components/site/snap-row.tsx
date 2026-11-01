"use client";

import { Children, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Fila que desliza para o lado (scroll-snap). Por defeito desliza em todos os ecrãs, com setas
 * a partir de `md`. Com `mobileOnly`, só desliza no telemóvel e passa a grelha a partir de `md`.
 */
export function SnapRow({
  children,
  label,
  mobileOnly = false,
  itemClassName = "w-[82%] sm:w-[46%] lg:w-[31.5%]",
  gridClassName = "md:grid-cols-2 lg:grid-cols-4",
}: {
  children: React.ReactNode;
  label: string;
  mobileOnly?: boolean;
  itemClassName?: string;
  gridClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative" role="region" aria-label={label}>
      <div
        ref={ref}
        onScroll={update}
        tabIndex={0}
        className={cn(
          "flex gap-4 md:gap-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-5 px-5 scroll-px-5 md:-mx-8 md:px-8 md:scroll-px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          mobileOnly && `md:mx-0 md:px-0 md:scroll-px-0 md:grid ${gridClassName} md:overflow-visible md:pb-0`,
        )}
      >
        {Children.map(children, (child) => (
          <div className={cn("snap-start shrink-0", itemClassName, mobileOnly && "md:w-auto")}>{child}</div>
        ))}
      </div>
      {!mobileOnly && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={!canPrev}
            aria-label="Anterior"
            className="hidden md:grid absolute -left-2 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background text-primary shadow-lg border border-border transition disabled:opacity-0 disabled:pointer-events-none hover:bg-secondary"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={!canNext}
            aria-label="Seguinte"
            className="hidden md:grid absolute -right-2 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background text-primary shadow-lg border border-border transition disabled:opacity-0 disabled:pointer-events-none hover:bg-secondary"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
