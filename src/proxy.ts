import { NextRequest, NextResponse } from "next/server";

// CSP com nonce por pedido (Next.js 16, convenção `proxy.ts` — ver
// https://nextjs.org/docs/app/guides/content-security-policy).
//
// Porque nonce e não 'unsafe-inline': o Next.js injeta scripts inline próprios
// (bootstrap RSC/hidratação) cujo conteúdo — e por isso o hash SHA-256 — varia
// por página e por build, tornando CSP por hash inviável. Nonce por pedido é
// o único mecanismo documentado que bloqueia script-src inline arbitrário sem
// abrir mão de 'unsafe-inline'. Custo aceite: todas as páginas passam a
// renderizar dinamicamente (ver `export const dynamic` em app/layout.tsx) —
// aceitável num VPS Node sempre ligado, ao contrário de Cloudflare Workers
// (billing por invocação + perda de cache de edge), que já não é o alvo deste
// deploy.
//
// style-src mantém-se 'unsafe-inline' deliberadamente: os gradientes do
// hero/CTA usam style={{...}} inline (atributo, não elemento <style>) — nonce
// não se aplica a atributos style, só a elementos <script>/<style>. Trocar
// isto exigiria reescrever esses componentes para classes CSS, fora do
// âmbito desta correção (preservar design).
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self';
    font-src 'self';
    frame-src https://www.google.com;
    connect-src 'self';
    form-action 'self';
    base-uri 'self';
    object-src 'none';
    frame-ancestors 'self';
    upgrade-insecure-requests;
  `;
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
