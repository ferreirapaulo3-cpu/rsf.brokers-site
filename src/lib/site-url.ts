/**
 * Endereço base do site (canónico, Open Graph, sitemap, schema).
 * Ordem: variável SITE_URL → DEFAULT_SITE_URL.
 */
const DEFAULT_SITE_URL = "https://rsf-brokers.pt";

function resolve(): string {
  const fromEnv = process.env.SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return DEFAULT_SITE_URL;
}

export const SITE_URL = resolve();
