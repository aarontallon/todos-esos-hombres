import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string(),
    date: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    footerCopy: z.string().optional(),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
        credit: z.string(),
      })
      .optional(),
    stats: z.array(
      z.object({
        number: z.string(),
        label: z.string(),
      })
    ),
    highlight: z
      .object({
        number1: z.string(),
        vs: z.string(),
        number2: z.string(),
        text: z.string(),
      })
      .optional(),
    sources: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { posts };
