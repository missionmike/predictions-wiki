import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/predictions', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    daysPredicted: z.number().optional(),
    // Transform string to Date object
    datePublished: z.coerce.date(),
    dateExpired: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    youTubeUrl: z.string().optional(),
  }),
});

export const collections = { posts };
