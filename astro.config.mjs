// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://matteo-lorenzi.github.io",
  base: process.env.BASE_PATH ?? "/",
  output: "static",
  legacy: {
    collectionsBackwardsCompat: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["gsap", "gsap/ScrollTrigger"],
    },
  },
  integrations: [react()],
});
