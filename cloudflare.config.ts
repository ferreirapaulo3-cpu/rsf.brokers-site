import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "a4d072cffa20ce27d6bfa7ec331f6524",
  worker: defineWorker({
    name: "rsf-brokers",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-03",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      SITE_URL: bindings.text("https://rsf-brokers.pt"),
    },
  }),
});
