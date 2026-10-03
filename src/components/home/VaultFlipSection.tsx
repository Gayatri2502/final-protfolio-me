"use client";

import GsapFlipCard from "@/components/ui/gsap-card-flip";

export function VaultFlipSection() {
  return (
    <section className="relative bg-[#08080A] border-y border-[#F2F0EB]/10">
      <div className="container-custom py-6">
        <div className="flex items-center gap-4 mono-label text-[#F2F0EB]/60 border-b border-[#F2F0EB]/10 pb-6">
          <span className="text-[#F2F0EB]">[04]</span>
          <span>AI Work Gallery</span>
          <span className="h-px flex-1 bg-[#F2F0EB]/10 ml-2" />
          <span className="hidden sm:inline">AI/ML Portfolio • LLM • RAG • MLOps</span>
        </div>
      </div>

      <GsapFlipCard
        title="Gayatri — AI/ML Portfolio"
        meta="LLM Platforms / RAG Systems / MLOps — 2024—2026"
        description="A flip-through of this AI/ML portfolio — tap the stack to open an AI build, tap the rail to trade. Every card is a shipped ML system."
        backgroundColor="#08080A"
        textColor="#F2F0EB"
        mutedColor="#8a8a86"
        rounded={20}
        stackRotation={2}
      />
    </section>
  );
}

export default VaultFlipSection;