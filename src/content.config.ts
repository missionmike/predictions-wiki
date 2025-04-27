import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/predictions', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    predictedDays: z.number().optional(),
    expiryDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    youTubeUrl: z.string().optional(),
  }),
});

export const collections = { posts };
