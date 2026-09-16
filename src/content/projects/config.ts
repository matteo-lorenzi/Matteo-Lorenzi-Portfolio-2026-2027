import { defineCollection, z } from "astro:content";

/* Les projets vivent dans src/content/projects/<locale>/<slug>.md : le dossier
   porte la langue, le nom de fichier porte le slug, partagé entre les locales.
   C'est ce qui permet d'écrire une étude de cas longue dans chaque langue au
   lieu d'entasser des suffixes _fr/_en dans le frontmatter. */
export const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    category: z.enum(["Branding", "UI/UX", "Motion", "Print", "Illustration"]),
    /* Optionnel : la plupart des projets n'ont pas de visuel et n'en auront
       peut-être jamais. Le titre à l'échelle display porte la page à sa place. */
    cover: z.string().optional(),
    video_url: z.string().url().optional(),
    images: z.array(z.string()).optional(),
    description: z.string(),
    /* Cadre du projet : scolaire ou professionnel, année d'études, taille
       d'équipe, durée. C'est ce qu'un recruteur cherche en premier. */
    context: z.string().optional(),
    problem: z.string().optional(),
    outcome: z.string().optional(),
    role: z.string().optional(),
    tools: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});
