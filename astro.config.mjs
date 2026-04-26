// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const env = /** @type {Record<string, string | undefined>} */ (
  /** @type {any} */ (globalThis).process?.env ?? {}
);

export default defineConfig({
  site: env.SITE ?? "http://localhost:4321",
  base: env.BASE ?? "/",
  output: "static",
  vite: {
    optimizeDeps: {
      exclude: ["gsap", "gsap/ScrollTrigger"],
    },
  },
  integrations: [tailwind(), react()],
});
