// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		mermaid(), // theme isn't req. for now ig
	],
	markdown: {
		shikiConfig: {
			theme: 'catppuccin-macchiato',
		},
	},
});
