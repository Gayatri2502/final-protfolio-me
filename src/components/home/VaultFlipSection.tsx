"use client";

import { galleryProjects } from "@/data/gallery-projects";
import GsapFlipCard from "@/components/ui/gsap-card-flip";

export function VaultFlipSection() {
  return (
    <section className="relative bg-[#08080A] border-y border-[#F2F0EB]/10">
      <div className="container-custom py-6">
        <div className="flex items-center gap-4 mono-label text-[#F2F0EB]/60 border-b border-[#F2F0EB]/10 pb-6">
          <span className="text-[#F2F0EB]">[04]</span>
          <span>Project Showcase</span>
          <span className="h-px flex-1 bg-[#F2F0EB]/10 ml-2" />
          <span className="hidden sm:inline">Alphacentauric Studio</span>
        </div>
      </div>

      <GsapFlipCard
        items={galleryProjects.filter((project) => project.featured).map((project) => ({ ...project, caption: project.alt }))}
        title="Featured projects"
        meta="Alphacentauric Studio"
        description="Select a thumbnail to explore a project."
        backgroundColor="#08080A"
        textColor="#F2F0EB"
        mutedColor="#8a8a86"
        heroWidth={640}
        heroHeight={360}
        thumbWidth={112}
        thumbHeight={63}
        rounded={20}
        stackRotation={2}
      />
    </section>
  );
}

export default VaultFlipSection;