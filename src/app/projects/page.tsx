"use client";

import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const galleryItems = projects.map((p, i) => ({
    id: p.id,
    title: p.title,
    summary: p.description,
    url: `/projects/${p.id}`,
    image: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    ][i % 5],
  }));

  // Additional items to fill carousel if projects less than 5
  const extraItems = [
    {
      id: "extra-1",
      title: "MLOps Pipeline",
      summary: "End-to-end ML pipeline with automated training, evaluation, and deployment.",
      url: "/projects/mlops-pipeline",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "extra-2",
      title: "Edge AI Inference",
      summary: "Optimized model serving at the edge with quantization and compilation.",
      url: "/projects/edge-ai",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const allItems = [...galleryItems, ...extraItems];

  return (
    <div className="min-h-screen bg-background">
      {/* Bold horizontal title hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="w-full overflow-hidden py-6 md:py-8">
          <h1 className="font-display font-black leading-none tracking-[-0.06em] whitespace-nowrap select-none text-center">
            <span className="inline-block text-[14vw] md:text-[11vw] lg:text-[9vw]">SELECTED</span>
            <span className="inline-block mx-[2vw] text-[4vw] md:text-[3vw] font-light italic tracking-normal align-middle text-muted-foreground">—</span>
            <span
              className="inline-block text-[14vw] md:text-[11vw] lg:text-[9vw] text-transparent"
              style={{ WebkitTextStroke: "1.5px hsl(var(--foreground))" }}
            >
              WORK
            </span>
          </h1>
        </div>

        <div className="container mx-auto px-6 max-w-7xl pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mono-label text-muted-foreground border-t border-border pt-6">
          <span>2020 — 2026 • {allItems.length} projects • Scroll to explore</span>
          <span className="hidden sm:inline">Hover card to reveal • Click to open project →</span>
        </div>
      </section>

      {/* Gallery Hover Carousel — replaces all previous sections */}
      <GalleryHoverCarousel
        heading="Featured Projects"
        demoUrl="/projects"
        items={allItems}
      />

      {/* Bottom meta */}
      <section className="py-10 border-t border-border bg-muted/20">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 mono-label text-muted-foreground">
          <span>Gayatri Samal • AI Engineer & Researcher • Available for selective work</span>
          <a
            href="mailto:hello@alphacentauric.dev"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold tracking-widest uppercase text-background hover:bg-foreground/90 transition-colors"
          >
            Start a project →
          </a>
        </div>
      </section>
    </div>
  );
}
