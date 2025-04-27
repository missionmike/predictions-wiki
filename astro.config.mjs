// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://predictions.wiki',
  integrations: [mdx(), sitemap()],
  vite: {
    envPrefix: ['PUBLIC_'],
    logLevel: 'info',
  },
  output: 'static',
  build: {
    format: 'directory',
  },
});
