import type { MetadataRoute } from "next";

import { SITE_URL as BASE } from "@/lib/site-url";

const routes = [
  { path: "/", priority: 1.0, freq: "monthly" },
  { path: "/sobre", priority: 0.8, freq: "yearly" },
  { path: "/seguros", priority: 0.9, freq: "monthly" },
  { path: "/seguro-vida-credito-habitacao", priority: 0.9, freq: "monthly" },
  { path: "/pedir-orcamento", priority: 0.9, freq: "monthly" },
  { path: "/contacto", priority: 0.8, freq: "yearly" },
  { path: "/faq", priority: 0.7, freq: "monthly" },
  { path: "/seguros/automovel", priority: 0.8, freq: "monthly" },
  { path: "/seguros/habitacao", priority: 0.8, freq: "monthly" },
  { path: "/seguros/saude", priority: 0.8, freq: "monthly" },
  { path: "/seguros/empresas", priority: 0.8, freq: "monthly" },
  { path: "/seguros/acidentes-trabalho", priority: 0.7, freq: "monthly" },
  { path: "/seguros/responsabilidade-civil", priority: 0.7, freq: "monthly" },
  { path: "/seguros/viagem", priority: 0.7, freq: "monthly" },
  { path: "/politica-privacidade", priority: 0.3, freq: "yearly" },
  { path: "/termos-condicoes", priority: 0.3, freq: "yearly" },
  { path: "/politica-cookies", priority: 0.3, freq: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq as any,
    priority: r.priority,
  }));
}
