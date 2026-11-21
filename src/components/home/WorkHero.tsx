"use client";

import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";

const projectPhotos = [
  { id: "maison", image: "/images/projects/maison.jpg", alt: "Maison Halden runway lookbook" },
  { id: "moonlight", image: "/images/projects/moonlight.jpg", alt: "Moonlight Café interactive menu" },
  { id: "solarsat", image: "/images/projects/solarsat.jpg", alt: "SolarSat AI analytics dashboard" },
  { id: "freelancer", image: "/images/projects/freelancer.jpg", alt: "Freelancer Tracker dashboard" },
  { id: "image-studio", image: "/images/projects/image-studio.jpg", alt: "AI Image Studio generation workspace" },
];

export function WorkHero() {
  return (
    <section className="relative bg-[#08080A] text-[#F2F0EB] border-y border-[#F2F0EB]/10 overflow-hidden">
      {/* Bold horizontal title */}
      <div className="w-full overflow-hidden border-b border-[#F2F0EB]/10">
        <h2 className="font-display font-black leading-none tracking-[-0.05em] text-center whitespace-nowrap select-none"
            style={{ fontSize: "clamp(3rem, 14vw, 14rem)" }}>
          <span className="inline-block px-4">SELECTED</span>
          <span className="inline-block font-light italic text-[#F2F0EB]/40">—</span>
          <span className="inline-block px-4 text-transparent" style={{ WebkitTextStroke: "1.5px rgba(242,240,235,0.9)" }}>WORK</span>
        </h2>
      </div>

      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <div className="flex items-center justify-between mono-label text-[#F2F0EB]/50 pt-6">
              <span>{projectPhotos.length} project screenshots</span>
              <span className="hidden sm:inline">Click folder to open • Drag card down to close</span>
            </div>

            <InteractiveFolderGallery
              photos={projectPhotos}
              folderName="GAYATRI_AI_PORTFOLIO.gallery"
              dragHintText="Drag any project card down to close — hover folder to peek"
              className="py-8 lg:py-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkHero;
