"use client";

import JobSlider from "@/components/ui/job-slider";

// Re-export as ServicesSection with Gayatri's services
// The job-slider's default slides are job roles — we keep the design but map to services
// To keep the file as the Service section, we simply re-wrap JobSlider with a header

export function ServicesSection() {
  return (
    <section id="services" className="bg-background border-y border-border">
      <div className="container-custom pt-8">
        <div className="flex items-center gap-4 mono-label text-muted-foreground border-b border-border pb-6">
          <span className="text-primary">[03]</span>
          <span>Services</span>
          <span className="h-px flex-1 bg-border ml-2" />
          <span className="hidden sm:inline">What I do for teams</span>
        </div>
      </div>

      {/* JobSlider design — now as Services */}
      <div className="container-custom">
        <JobSlider />
      </div>

      <div className="container-custom pb-8">
        <p className="text-center mono-label text-muted-foreground">
          Services are productized as <span className="text-foreground">Build Sprint (2 weeks) • Advisory (monthly) • Full-time</span> — pick the mode that fits your stage.
        </p>
      </div>
    </section>
  );
}

export default ServicesSection;
