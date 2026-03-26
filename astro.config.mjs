// @ts-check
import { defineConfig } from 'astro/config';
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

  adapter: cloudflare(),
});