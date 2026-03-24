import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const writings = defineCollection({
	loader: glob({ base: './src/content/writings', pattern: '**/*.mdx' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		// date: z.date().optional(),
	}),
});

const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.mdx' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		// date: z.date().optional(),
	}),
});

const arts = defineCollection({
	loader: glob({ base: './src/content/arts', pattern: '**/*.mdx' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		// date: z.date().optional(),
	}),
});

const consumes = defineCollection({
	loader: glob({ base: './src/content/consumes', pattern: '**/*.mdx' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		// date: z.date().optional(),
	}),
});


export const collections = {
	writings,
	notes,
	arts,
	consumes,
};
