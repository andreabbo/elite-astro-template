import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articoli = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articoli" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    author: z.string().default("Redazione"),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).default([]),
    hero: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    schema_extensions: z.record(z.string(), z.unknown()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { articoli, pages };
