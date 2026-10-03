import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getRelatedProjects } from "@/services/projects";
import { ArrowRight, Github, ExternalLink, Mail } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // TypeScript narrows the type after notFound() throws
  const typedProject = project as import("@/types").Project;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--primary) / 0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 20%, hsl(var(--accent) / 0.1) 0%, transparent 50%)",
        }} />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {typedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
              {typedProject.featured && (
                <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-display-lg font-medium tracking-tight text-balance mb-6">
{typedProject.title}
            </h1>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {typedProject.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span>Year:</span>
                <span className="text-foreground">{typedProject.year}</span>
              </span>
              {typedProject.client && (
                <span className="flex items-center gap-1.5">
                  <span>Client:</span>
                  <span className="text-foreground">{typedProject.client}</span>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <span>Role:</span>
                <span className="text-foreground">{typedProject.role}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="section bg-background/50">
        <div className="container-custom">
          <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden">
            <img
              src={typedProject.image}
              alt={typedProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              {typedProject.longDescription && (
                <div>
                  <h2 className="text-heading-xl font-medium tracking-tight mb-6">Overview</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-body-lg text-muted-foreground leading-relaxed">{typedProject.longDescription}</p>
                  </div>
                </div>
              )}

              {typedProject.highlights && typedProject.highlights.length > 0 && (
                <div>
                  <h2 className="text-heading-xl font-medium tracking-tight mb-6">Key Highlights</h2>
                  <ul className="space-y-4">
                    {typedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50">
                        <span className="flex-shrink-0 mt-1 size-2 rounded-full bg-primary" />
                        <span className="text-body text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {typedProject.metrics && typedProject.metrics.length > 0 && (
                <div>
                  <h2 className="text-heading-xl font-medium tracking-tight mb-6">Metrics & Impact</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {typedProject.metrics.map((metric, index) => (
                      <div key={index} className="card-hover p-6 text-center">
                        <div className="text-display-sm font-medium text-gradient mb-2">{metric.value}</div>
                        <div className="text-body text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-heading-xl font-medium tracking-tight mb-6">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {typedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-hover p-6 sticky top-24">
                <h3 className="text-heading-md font-semibold text-foreground mb-6">Links</h3>
                <div className="space-y-3">
                  {typedProject.githubUrl && (
                    <a
                      href={typedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5 group"
                    >
                      <svg className="size-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {typedProject.liveUrl && (
                    <a
                      href={typedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5 group"
                    >
                      <svg className="size-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                  {typedProject.demoUrl && (
                    <a
                      href={typedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5 group"
                    >
                      <svg className="size-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2"/>
                        <path d="M16 11.5a6 6 0 0 1 2 4 6 6 0 0 1-2 4"/>
                        <line x1="8" y1="14" x2="8.01" y2="14"/>
                      </svg>
                      <span>Interactive Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="card-hover p-6">
                <h3 className="text-heading-md font-semibold text-foreground mb-4">Share</h3>
                <div className="flex gap-3">
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary/10" aria-label="Share on Twitter">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary/10" aria-label="Share on LinkedIn">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:border-primary hover:bg-primary/10" aria-label="Copy link">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section bg-background/50">
        <div className="container-custom">
          <h2 className="text-heading-xl font-medium tracking-tight text-center mb-12">Related Projects</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {getRelatedProjects(typedProject, 3).map((related) => (
              <article key={related.id} className="card-hover overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-heading-md font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-4 line-clamp-2">{related.description}</p>
                  <a
                    href={`/projects/${related.id}`}
                    className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 group"
                  >
                    View Project
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}