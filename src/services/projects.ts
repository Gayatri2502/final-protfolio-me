import { projects } from "@/data/projects";
import type { Project } from "@/types";

/**
 * Project lookup service.
 * Centralizes the `projects.find(...)` lookups currently inlined in
 * route components. Logic is identical — only the location changes.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(
  project: Pick<Project, "id" | "category">,
  count = 3,
): Project[] {
  return projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, count);
}

export function projectUrl(project: Pick<Project, "id">): string {
  return `/projects/${project.id}`;
}
