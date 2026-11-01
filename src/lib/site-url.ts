/**
 * Endereço base do site (canónico, Open Graph, sitemap, schema).
 * Ordem: variável SITE_URL (definir na Vercel) → endereço do deploy (VERCEL_URL) → domínio final.
 * Ao ligar o domínio: definir SITE_URL=https://rsfbrokers.pt na Vercel, ou mudar DEFAULT_SITE_URL.
 */
const DEFAULT_SITE_URL = "https://rsfbrokers.pt";

function resolve(): string {
  const fromEnv = process.env.SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return DEFAULT_SITE_URL;
}

export const SITE_URL = resolve();
