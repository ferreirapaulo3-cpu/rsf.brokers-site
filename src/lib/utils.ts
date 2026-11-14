import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Estilo único de "link discreto" (CTA terciário: Saber mais, Ver detalhes, Ver todos...).
// Claro = sobre fundo claro (text-accent-ink, ~5.7:1 sobre branco).
// Escuro = sobre fundo primary/dark (text-accent, ~6:1 sobre a cor primary).
export const discreetLinkClass =
  "inline-flex items-center gap-1 text-sm font-semibold text-accent-ink rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
export const discreetLinkOnDarkClass =
  "inline-flex items-center gap-1 text-sm font-semibold text-accent rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
