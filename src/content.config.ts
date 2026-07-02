import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    author: z.string(),
    category: z.enum(['Networking', 'AI', 'Robotics']),
  }),
});

export const collections = { posts };
