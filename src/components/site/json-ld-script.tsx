"use client";

/**
 * <script type="application/ld+json"> com nonce CSP, sem o falso positivo de
 * hidratação "Extra attributes from the server: nonce".
 *
 * Causa: por especificação HTML (nonce attributes, HTML Standard §4.12),
 * todos os browsers limpam o atributo `nonce` de QUALQUER elemento <script>
 * para "" logo após o parsing do HTML — por segurança, para impedir a sua
 * leitura via getAttribute()/seletores CSS (o valor real só fica acessível
 * internamente, usado para validar a CSP, nunca refletido no atributo). Isto
 * acontece sempre, independentemente do `type` do script (confirmado aqui
 * também para `type="application/ld+json"`, que nunca é executado como JS).
 * Como o Server Component que gera este JSON-LD (`Breadcrumbs`) só corre no
 * servidor, o React compara o nonce real que o servidor emitiu (necessário
 * para a CSP aceitar o script) contra o atributo já limpo no DOM — mismatch
 * inofensivo mas sinalizado como aviso de hidratação.
 *
 * Correção (sem suppressHydrationWarning): tornar apenas este script num
 * Client Component mínimo, para que volte a correr no browser durante a
 * hidratação. No servidor (`window` inexistente) emite-se o nonce real,
 * exigido pela CSP. No cliente, após hidratar, declara-se nonce="" — o
 * mesmo valor que o próprio browser já colocou no DOM — eliminando o
 * mismatch com uma afirmação verdadeira, não uma supressão. O React não
 * reescreve o atributo (não há mismatch a corrigir), pelo que o HTML/CSP
 * enviados pelo servidor não mudam em nada.
 *
 * Técnica documentada em https://github.com/kentcdodds/nonce-hydration-issues
 */
export function JsonLdScript({ nonce, json }: { nonce: string | null; json: string }) {
  return (
    <script
      type="application/ld+json"
      nonce={typeof window === "undefined" ? (nonce ?? undefined) : ""}
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
