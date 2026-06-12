import { getCollection } from "astro:content";

// Shared getStaticPaths logic for both localized [slug] project routes.
export async function getProjectStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.id.replace(/\.md$/, "") },
    props: { project },
  }));
}
