// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: process.env.BASE ?? '/',
  output: "static",
  vite: {
    optimizeDeps: {
      exclude: ["gsap", "gsap/ScrollTrigger"],
    },
  },
  integrations: [tailwind(), react()],
});
