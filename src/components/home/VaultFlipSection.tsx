"use client";

import GsapFlipCard from "@/components/ui/gsap-card-flip";

export function VaultFlipSection() {
  return (
    <section className="relative bg-[#F2F0EB] border-y border-[#0A0A0A]/10">
      <div className="container-custom py-6">
        <div className="flex items-center gap-4 mono-label text-[#0A0A0A]/60 border-b border-[#0A0A0A]/10 pb-6">
          <span className="text-[#0A0A0A]">[04]</span>
          <span>Vault Flip</span>
          <span className="h-px flex-1 bg-[#0A0A0A]/10 ml-2" />
          <span className="hidden sm:inline">Hyperiux Vault • GSAP Flip + SplitText</span>
        </div>
      </div>

      <GsapFlipCard
        title="Gayatri — Field Notes"
        meta="Travelling / Study / Build — 2024—2026"
        description="Same nodes, measured and tweened via GSAP Flip — stack to hero, rail to hero, never re-mounted. Tap stack to open, tap rail to trade."
        backgroundColor="#F2F0EB"
        textColor="#0A0A0A"
        mutedColor="#8a8a86"
        rounded={20}
        stackRotation={2}
      />
    </section>
  );
}

export default VaultFlipSection;
