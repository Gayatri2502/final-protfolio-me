"use client";

import FlipGallery from "@/components/ui/flip-gallery";

export function FlipBookSection() {
  return (
    <section className="relative bg-[#08080A] text-[#F2F0EB] border-y border-[#F2F0EB]/10">
      <div className="container-custom py-10 lg:py-14">
        <div className="flex items-center gap-4 mono-label text-[#F2F0EB]/60 border-b border-[#F2F0EB]/10 pb-6">
          <span className="text-[#D4FF32]">[05]</span>
          <span>AI Journey</span>
          <span className="h-px flex-1 bg-[#F2F0EB]/10 ml-2" />
          <span className="hidden sm:inline">AI/ML Portfolio • Models • Research • Builds</span>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-[-0.04em] leading-[0.9] text-[#F2F0EB]">
              Models
              <br />
              <span className="font-light italic tracking-[-0.03em] text-[#F2F0EB]/60">that ship.</span>
            </h2>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-[#F2F0EB]/60">
              A flip-through of this AI/ML portfolio — five milestones from first model to production MLOps.
              Each frame is a shipped AI system, not a demo.
            </p>
            <video
              className="mt-6 aspect-video w-full max-w-[480px] rounded-xl bg-black"
              src="/videos/momo-introduction.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="Momo introduces Alphacentauric"
            />
          </div>

          <div className="col-span-12 lg:col-span-7 flex justify-center">
            <FlipGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlipBookSection;
