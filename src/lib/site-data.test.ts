import { test } from "node:test";
import assert from "node:assert/strict";
import { insurances, insuranceTypes } from "./site-data";

test("no insurance CTA points back at the /seguros listing (the original dead-end bug)", () => {
  for (const i of insurances) {
    assert.notEqual(i.href, "/seguros", `${i.slug} ainda aponta para "/seguros"`);
  }
});

test("every insurance without its own page links to the quote form with a type the Select actually offers", () => {
  for (const i of insurances) {
    if (i.hasDetailPage) continue;
    const match = /^\/pedir-orcamento\?tipo=(.+)$/.exec(i.href);
    assert.ok(match, `${i.slug}: href "${i.href}" não aponta para /pedir-orcamento?tipo=...`);
    const tipo = decodeURIComponent(match![1]);
    assert.ok(
      insuranceTypes.includes(tipo),
      `${i.slug}: tipo "${tipo}" não existe em insuranceTypes (o Select nunca o vai pré-selecionar)`
    );
  }
});

test("every insurance with its own page links to a real sub-route, not the quote form", () => {
  for (const i of insurances) {
    if (!i.hasDetailPage) continue;
    assert.ok(
      !i.href.startsWith("/pedir-orcamento"),
      `${i.slug}: tem hasDetailPage mas aponta para o formulário (${i.href})`
    );
  }
});
