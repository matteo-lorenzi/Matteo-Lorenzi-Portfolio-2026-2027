// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://example.github.io",
  base: process.env.BASE_PATH ?? "/",
  output: "static",
  vite: {
    optimizeDeps: {
      exclude: ["gsap", "gsap/ScrollTrigger"],
    },
  },
  integrations: [tailwind(), react()],
});
