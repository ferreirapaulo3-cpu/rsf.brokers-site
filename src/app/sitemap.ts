import type { MetadataRoute } from "next";

import { SITE_URL as BASE } from "@/lib/site-url";

const routes = [
  { path: "/", priority: 1.0, freq: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq as any,
    priority: r.priority,
  }));
}
