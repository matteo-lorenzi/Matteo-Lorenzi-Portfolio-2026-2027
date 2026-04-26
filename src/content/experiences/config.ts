import { defineCollection, z } from "astro:content";

export const experiencesCollection = defineCollection({
  type: "content",
  schema: z.object({
    period: z.string(),
    type_fr: z.string(),
    type_en: z.string(),
    role_fr: z.string(),
    role_en: z.string(),
    company: z.string(),
    location_fr: z.string(),
    location_en: z.string(),
    summary_fr: z.string(),
    summary_en: z.string(),
    highlights_fr: z.array(z.string()),
    highlights_en: z.array(z.string()),
    order: z.number(),
  }),
});
