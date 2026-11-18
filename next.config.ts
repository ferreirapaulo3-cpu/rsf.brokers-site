import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Headers de segurança (incluindo CSP com nonce por pedido e HSTS) movidos para
// `src/proxy.ts` — ver comentário nesse ficheiro. `headers()` aqui não serve
// porque é estático (sem acesso ao pedido), incompatível com nonce por pedido.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Rotas antigas (páginas removidas na transição para landing page única) — 301 para "/".
const oldRoutes = [
  "/sobre",
  "/seguros",
  "/seguros/automovel",
  "/seguros/habitacao",
  "/seguros/saude",
  "/seguros/empresas",
  "/seguros/viagem",
  "/seguros/acidentes-trabalho",
  "/seguros/responsabilidade-civil",
  "/seguro-vida-credito-habitacao",
  "/pedir-orcamento",
  "/contacto",
  "/faq",
  "/politica-privacidade",
  "/politica-cookies",
  "/termos-condicoes",
  "/reclamacoes-arbitragem",
  "/links-uteis",
];

const nextConfig: NextConfig = {
  // Sem isto, o Next deteta o root errado quando existe outro lockfile num
  // diretório acima deste projeto (ex.: C:\Users\<user>\package-lock.json) —
  // nesse caso o build "standalone" aninha server.js num subcaminho que
  // espelha a diferença entre os dois roots, em vez de o colocar em
  // .next/standalone/server.js como a doc do Next assume. Confirmado neste
  // projeto: sem outputFileTracingRoot, o build gerava
  // .next/standalone/Documents/.../server.js.
  outputFileTracingRoot: projectRoot,
  reactStrictMode: false,
  async redirects() {
    return oldRoutes.map((source) => ({ source, destination: "/", permanent: true }));
  },
};

export default nextConfig;
