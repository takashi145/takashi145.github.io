import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		tags: z.array(z.string()),
		github: z.string().url().optional(),
		demo: z.string().url().optional(),
		hasDetailPage: z.boolean().default(false),
		order: z.number(),
	}),
});

export const collections = {
	works: worksCollection,
};
