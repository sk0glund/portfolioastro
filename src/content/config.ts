import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    category: z.string(),
    location: z.string().optional(),
    heroImage: z.string(),
    gallery: z.array(
      z.object({
        src: z.string(),
        caption: z.string().optional()
      })
    ).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};