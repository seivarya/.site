// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import mermaid from 'astro-mermaid';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({

  site: "https://seivarya.in",
  integrations: [mdx(), // theme isn't req. for now ig
  mermaid(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: 'catppuccin-macchiato',
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },

  adapter: cloudflare(),
  prefetch: true,
  output: 'static',
});