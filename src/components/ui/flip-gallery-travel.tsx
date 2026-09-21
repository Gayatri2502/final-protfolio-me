"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Compass, Plane } from "lucide-react";

export interface FlipGalleryItem {
  src: string;
  alt?: string;
  title: string;
  location: string;
  description?: string;
}

export interface FlipGalleryProps {
  items: FlipGalleryItem[];
  className?: string;
}

function FlipCard({ item, index }: { item: FlipGalleryItem; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-[320px] sm:h-[360px] w-full cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-[#F2F0EB]/10 bg-[#141415]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={item.src} alt={item.alt || item.title} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-white border border-white/20">
              <MapPin className="size-3" />
              {item.location}
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-white drop-shadow">
              {item.title}
            </h3>
          </div>
          <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-black backdrop-blur">
            <Compass className="size-3.5" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-[#F2F0EB]/10 bg-[#F2F0EB] p-6 flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.14em] uppercase text-[#0A0A0A]/60">
            <Plane className="size-3" />
            {String(index + 1).padStart(2, "0")} — {item.location}
          </div>
          <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-[#0A0A0A]">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#0A0A0A]/60 line-clamp-4">
            {item.description || "Wandering with purpose — capturing light, stories, and the quiet between destinations."}
          </p>
          <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[#0A0A0A]/10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-3 py-1.5 text-xs font-semibold text-white">
              <MapPin className="size-3" /> {item.location}
            </span>
            <span className="ml-auto font-mono text-[10px] tracking-widest uppercase text-[#0A0A0A]/40">Hover to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function FlipGallery({ items, className }: FlipGalleryProps) {
  return (
    <div className={className}>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <FlipCard item={item} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FlipGallery;
