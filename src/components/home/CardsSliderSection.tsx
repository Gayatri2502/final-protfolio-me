"use client";

import CardsRotateSlider from "@/components/ui/cards-rotate-slider";

const sliderImages = [
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80", text: "Neural Search Engine", alt: "Neural Search" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80", text: "LLM Fine-tuning Platform", alt: "LLM Platform" },
  { src: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&auto=format&fit=crop&q=80", text: "Multimodal RAG System", alt: "RAG System" },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80", text: "AI Code Assistant", alt: "Code Assistant" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80", text: "MLOps Pipeline", alt: "MLOps" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop&q=80", text: "Edge AI Inference", alt: "Edge AI" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80", text: "Vector Database", alt: "Vector DB" },
  { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format&fit=crop&q=80", text: "Real-time Analytics", alt: "Analytics" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c429?w=1200&auto=format&fit=crop&q=80", text: "Distributed Systems", alt: "Distributed" },
  { src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=80", text: "Model Quantization", alt: "Quantization" },
  { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80", text: "Conversational AI", alt: "Chatbot" },
  { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=80", text: "Cloud Infrastructure", alt: "Cloud" },
  { src: "https://images.unsplash.com/photo-1501504905252-473cdee68f94?w=1200&auto=format&fit=crop&q=80", text: "Research Publication", alt: "Research" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80", text: "Data Pipeline", alt: "Pipeline" },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80", text: "Business Intelligence", alt: "BI" },
  { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80", text: "Open Source Library", alt: "Open Source" },
];

export function CardsSliderSection() {
  return (
    <section className="relative bg-[#08080A] border-y border-[#F2F0EB]/10">
      <div className="container-custom py-8">
        <div className="flex items-center gap-4 mono-label text-[#F2F0EB]/60 border-b border-[#F2F0EB]/10 pb-6">
          <span className="text-[#D4FF32]">[03]</span>
          <span>Selected Work</span>
          <span className="h-px flex-1 bg-[#F2F0EB]/10 ml-2" />
          <span className="hidden sm:inline">Scroll to rotate — GSAP + ScrollTrigger</span>
        </div>
        <div className="pt-4 flex items-end justify-between gap-6">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-[-0.03em] leading-none text-[#F2F0EB]">
            Work that <span className="italic font-light text-[#F2F0EB]/60">moves</span>
          </h2>
          <p className="hidden lg:block max-w-[360px] text-xs leading-5 text-[#F2F0EB]/50 font-mono">
            Horizontal pinned scroll — cards rotate in 3D as you scroll. Hover-free, reduced-motion aware.
          </p>
        </div>
      </div>

      <CardsRotateSlider
        images={sliderImages}
        rotationAmount={1}
        verticalDrift={1}
        scrollSmoothing={1}
        perspective={1200}
        showCaptions={true}
        textColor="#F2F0EB"
        className="bg-[#08080A]"
      />

      <div className="container-custom pb-8">
        <div className="flex justify-center">
          <a href="/projects" className="inline-flex items-center gap-2 rounded-full bg-[#F2F0EB] px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-[#08080A] hover:bg-white transition-colors">
            View all projects
            <span className="flex size-5 items-center justify-center rounded-full bg-[#08080A] text-white text-[10px]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CardsSliderSection;
