import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
	title: z.string().optional(),
	date: z.coerce.date().optional(),
});

const writings = defineCollection({ schema: baseSchema });
const notes = defineCollection({ schema: baseSchema });
const arts = defineCollection({ schema: baseSchema });
const consumes = defineCollection({ schema: baseSchema });

export const collections = {
	writings,
	notes,
	arts,
	consumes,
};
