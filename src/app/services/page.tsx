"use client";

import { StudiovaServicesTabs } from "@/components/ui/studiova-interactive-services-tabs";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Interactive Services Tabs — headline WHAT CAN I DO */}
      <StudiovaServicesTabs
        tagNumber="02"
        tagLabel="Services"
        heading="WHAT CAN I DO"
        subheading="Five core AI/ML pillars — LLM apps & agents, RAG & retrieval, MLOps & infra, data pipelines, and AI strategy that de-risks delivery."
        brandLink="https://www.gayatrisamal.dev"
      />
    </div>
  );
}
