import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../i18n";

/* Les projets vivent dans src/content/projects/<locale>/<slug>.md, donc l'id
   d'une entrée porte le préfixe de dossier : "fr/terraforma.md". Le slug est
   partagé entre les locales, seul le dossier change. */
export function projectSlug(project: CollectionEntry<"projects">) {
  return project.id.replace(/^(fr|en)\//, "").replace(/\.md$/, "");
}

/** Projets d'une locale, triés par ordre d'affichage. */
export async function getLocalizedProjects(locale: Locale) {
  const projects = await getCollection("projects", ({ id }) =>
    id.startsWith(`${locale}/`),
  );
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** getStaticPaths partagé par les deux routes [slug] localisées. */
export function getProjectStaticPaths(locale: Locale) {
  return async () => {
    const projects = await getLocalizedProjects(locale);
    return projects.map((project) => ({
      params: { slug: projectSlug(project) },
      props: { project },
    }));
  };
}
