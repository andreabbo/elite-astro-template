// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site is set here for sitemap; pipeline overwrites per-client
  site: "https://demo.example",
  integrations: [
    sitemap(),
    tailwind({
      // Prevent Tailwind integration from injecting its own base styles
      applyBaseStyles: false,
    }),
  ],
  output: "static",
});
