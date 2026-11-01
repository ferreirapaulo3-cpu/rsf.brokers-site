import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Headers de segurança (incluindo CSP com nonce por pedido) movidos para
// `src/proxy.ts` — ver comentário nesse ficheiro. `headers()` aqui não serve
// porque é estático (sem acesso ao pedido), incompatível com nonce por pedido.
// Strict-Transport-Security propositadamente ainda não definido: só deve ser
// ativado depois de confirmar que o domínio final serve sempre HTTPS (ver
// secção de configuração da VPS no relatório de deploy).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  // Sem isto, o Next deteta o root errado quando existe outro lockfile num
  // diretório acima deste projeto (ex.: C:\Users\<user>\package-lock.json) —
  // nesse caso o build "standalone" aninha server.js num subcaminho que
  // espelha a diferença entre os dois roots, em vez de o colocar em
  // .next/standalone/server.js como a doc do Next assume. Confirmado neste
  // projeto: sem outputFileTracingRoot, o build gerava
  // .next/standalone/Documents/.../server.js.
  outputFileTracingRoot: projectRoot,
  reactStrictMode: false,
};

export default nextConfig;
