import { defineCollection, z } from "astro:content";

export const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    category: z.enum(["Branding", "UI/UX", "Motion", "Print", "Illustration"]),
    tags: z.array(z.string()),
    cover: z.string(),
    images: z.array(z.string()).optional(),
    description_fr: z.string(),
    description_en: z.string(),
    quote_fr: z.string().optional(),
    quote_en: z.string().optional(),
    role_fr: z.string().optional(),
    role_en: z.string().optional(),
    tools: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});
