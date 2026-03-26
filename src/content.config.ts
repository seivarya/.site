import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const writings = defineCollection({
	loader: glob({ base: './src/content/writings', pattern: '**/*.mdx' }),
	schema: z.object({
		title: z.string().optional(),
		date: z.coerce.date().transform((d) => d.toISOString().split('T')[0]).optional(),
	}),
});

const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.mdx' }),
	schema: z.object({
		title: z.string().optional(),
		date: z.coerce.date().transform((d) => d.toISOString().split('T')[0]).optional(),
	}),
});


export const collections = {
	writings,
	notes,
};
