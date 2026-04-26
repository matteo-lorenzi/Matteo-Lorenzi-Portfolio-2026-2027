// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://matteo-lorenzi.github.io',
  base: "/matteo-lorenzi-portfolio-2026-2027",
  output: "static",
  vite: {
    optimizeDeps: {
      exclude: ["gsap", "gsap/ScrollTrigger"],
    },
  },
  integrations: [tailwind(), react()],
});
