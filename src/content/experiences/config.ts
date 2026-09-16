import { defineCollection, z } from "astro:content";

export const experiencesCollection = defineCollection({
  type: "content",
  schema: z.object({
    /* Années structurées plutôt qu'une chaîne "2023 - 2024" : le tri devient
       dérivé des données au lieu d'un champ order maintenu à la main, qui
       affichait le parcours dans un ordre ni chronologique ni inverse. */
    start: z.number(),
    /* Absent = mission en cours. */
    end: z.number().optional(),
    /* Clé de regroupement : les entrées qui la partagent s'affichent sous un
       seul bloc employeur, pour montrer une progression plutôt que des cartes
       en double. Ne sert jamais à l'affichage. */
    organisation: z.string(),
    company: z.string(),
    /* Service ou projet au sein de l'organisation, quand il apporte quelque
       chose : "Plateforme SCREEN", "Techno-Trail". */
    team_fr: z.string().optional(),
    team_en: z.string().optional(),
    type_fr: z.string(),
    type_en: z.string(),
    role_fr: z.string(),
    role_en: z.string(),
    location_fr: z.string(),
    location_en: z.string(),
    /* Durée réelle, saisie et non calculée : "2023 - 2024" est une année
       scolaire, en déduire "1 an" serait faux. */
    duration_fr: z.string().optional(),
    duration_en: z.string().optional(),
    summary_fr: z.string(),
    summary_en: z.string(),
    highlights_fr: z.array(z.string()),
    highlights_en: z.array(z.string()),
  }),
});
