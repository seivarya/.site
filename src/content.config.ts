import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
	title: z.string().optional(),
	date: z.coerce.date().optional(),
});

const notes = defineCollection({
	type: "content",
});

const writings = defineCollection({
	type: "content",
	schema: baseSchema
});

const arts = defineCollection({
	type: "content",
	schema: baseSchema
});

const consumes = defineCollection({
	type: "content",
	schema: baseSchema
});

export const collections = {
	writings,
	notes,
	arts,
	consumes,
};
