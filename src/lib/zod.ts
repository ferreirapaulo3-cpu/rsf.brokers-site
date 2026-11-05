import { z } from "zod";

// Zod v4 testa suporte a eval com `new Function("")` (packages/core/src/util.ts,
// `allowsEval`) ao construir cada schema — mesmo sem o usar, só para decidir se
// pode compilar um parser otimizado (JIT). Em CSP sem 'unsafe-eval' (a nossa,
// ver src/proxy.ts), isso dispara uma violação `securitypolicyviolation` por
// cada schema construído no browser (confirmado: 7 campos em contact-form.tsx
// = 7 violações), mesmo com a exceção a ser apanhada internamente pelo zod.
//
// `jitless: true` é a flag oficial do próprio zod (`z.config`, documentada em
// https://github.com/colinhacks/zod/issues/4360) para saltar esse teste e usar
// sempre o parser interpretado — mesmo comportamento de validação, sem eval.
// Tem de ser aplicada antes de qualquer `z.object(...)` ser construído: como
// esta linha corre ao avaliar este módulo, e um import é sempre avaliado antes
// do corpo do módulo que o importa, basta importar `z` a partir daqui (em vez
// de "zod" diretamente) em qualquer ficheiro que defina schemas usados no
// browser (ver src/components/site/contact-form.tsx e quote-form.tsx).
z.config({ jitless: true });

export { z };
