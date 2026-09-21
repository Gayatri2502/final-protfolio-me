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
        subheading="Five core pillars — AI automation to data pipelines, websites that convert, business consultancy that de-risks, and video/graphic that stops scrolls."
        brandLink="https://www.gayatrisamal.dev"
      />
    </div>
  );
}
