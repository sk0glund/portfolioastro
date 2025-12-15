import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        year: z.string(),
        category: z.string();
        location: z.string().optional(),
        groupProject: z.boolean().optional(),
        heroImage: z.string(),
        gallery: z.array(
            z.object({
                src: z.string(),
                imgDesc: z.string().optional(),
            })
        ).optional()

    }),
});

export const collections = {
    'projects': projectsCollection,
}