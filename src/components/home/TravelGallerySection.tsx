"use client";

import { FlipGallery, type FlipGalleryItem } from "@/components/ui/flip-gallery-travel";
import { Plane, MapPin, Compass } from "lucide-react";

const travelItems: FlipGalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80",
    title: "Alpine Horizons",
    location: "Swiss Alps, CH",
    description: "Dawn hikes above the clouds — learning to be still while the world keeps moving. Shot on a solo trek last autumn.",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    title: "Island Light",
    location: "Bali, ID",
    description: "Three weeks of monsoon light, temple mornings, and notebook fills. Where I learned to prototype slower.",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
    title: "Desert Road",
    location: "Rajasthan, IN",
    description: "500km on a single road — dust, chai stalls, and the best user interviews happen outside labs.",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
    title: "Lake Stillness",
    location: "Kyoto, JP",
    description: "Early mornings by the lake — where I sketch systems before code. Quiet is a feature.",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
    title: "Above the Clouds",
    location: "Iceland, IS",
    description: "Chasing northern light taught me latency is not just technical — it’s emotional. Wait matters.",
  },
  {
    src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=80",
    title: "Venetian Drift",
    location: "Venice, IT",
    description: "Getting lost on purpose — the best way to test navigation. No maps, just curiosity.",
  },
];

export function TravelGallerySection() {
  return (
    <section className="relative bg-[#F2F0EB] text-[#0A0A0A] border-y border-[#0A0A0A]/10">
      <div className="container-custom py-10 lg:py-14">
        <div className="flex items-center gap-4 mono-label text-[#0A0A0A]/60 border-b border-[#0A0A0A]/10 pb-6">
          <span className="text-[#0A0A0A]">[04]</span>
          <span>Travelling</span>
          <span className="h-px flex-1 bg-[#0A0A0A]/10 ml-2" />
          <span className="hidden sm:inline">Flip to explore — hobbies beyond code</span>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-8 items-start">
          {/* LEFT — sticky copy */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-4 lg:sticky lg:top-8 self-start">
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-[-0.04em] leading-[0.9]">
              Wander
              <br />
              <span className="font-light italic tracking-[-0.03em] text-[#0A0A0A]/60">to wonder.</span>
            </h2>
            <p className="mt-4 max-w-[360px] text-sm leading-6 text-[#0A0A0A]/60">
              Travelling is my debugging ritual — new streets, new constraints. These are field notes, not postcards.
              <span className="text-[#0A0A0A] font-medium"> Hover / tap to flip.</span>
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0A0A0A]/10 bg-white px-3 py-2 font-mono text-[11px] tracking-widest uppercase">
              <Plane className="size-3.5" /> 6 places • 18k km • always economy
            </div>
            <div className="mt-3 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#0A0A0A]/40">
              <MapPin className="size-3" /> flip gallery — minhxthanh style
              <Compass className="size-3" />
            </div>

            <div className="mt-8 hidden lg:block rounded-2xl border border-[#0A0A0A]/10 bg-white p-5">
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-60">Why this gallery at right?</div>
              <p className="mt-2 text-sm leading-6 text-[#0A0A0A]/70">
                Keeps copy scannable while the right side stays playful — 3D flip on hover, tap on mobile. Same `flip-gallery` from 21st.dev.
              </p>
              <div className="mt-4 h-px bg-[#0A0A0A]/10" />
              <div className="mono-label mt-3 flex items-center gap-2 opacity-60">
                <span className="size-1.5 rounded-full bg-emerald-500" /> npx shadcn add https://21st.dev/r/minhxthanh/flip-gallery
              </div>
            </div>
          </div>

          {/* RIGHT — gallery */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-8">
            <FlipGallery items={travelItems} />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#0A0A0A]/10 pt-6 mono-label text-[#0A0A0A]/50">
          <span>Next trip: Patagonia — Dec 2026 • open to co-travel builds</span>
          <a href="mailto:hello@alphacentauric.dev" className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white hover:bg-black transition-colors">
            Invite to collaborate →
          </a>
        </div>
      </div>
    </section>
  );
}

export default TravelGallerySection;
