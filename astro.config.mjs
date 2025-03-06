// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register"

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.VITE_PUBLIC_VERCEL_URL,
	integrations: [mdx(), sitemap(), react(), tinaDirective()],
	redirects: { 
		'/admin': '/admin/index.html'
	  }
});
