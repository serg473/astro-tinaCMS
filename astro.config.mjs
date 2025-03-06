// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tinaDirective from "./astro-tina-directive/register";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tina-cknkvry51-sergios-projects-663b3eb6.vercel.app",
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  redirects: {
    "/admin": "/admin/index.html",
  },
});
