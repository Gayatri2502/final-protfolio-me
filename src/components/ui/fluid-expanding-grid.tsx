"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FluidGridItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  status: string;
  featured?: boolean;
  link?: string;
}

export interface FluidExpandingGridProps {
  items: FluidGridItem[];
  className?: string;
}

export function FluidExpandingGrid({ items, className }: FluidExpandingGridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className={cn("w-full", className)}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[320px]">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveId(isActive ? null : item.id)}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-2xl border border-[#0A0A0A]/10 bg-white",
                isActive ? "md:col-span-2 md:row-span-1 lg:col-span-2" : "col-span-1",
                "hover:shadow-lg transition-shadow"
              )}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div layout className="relative h-full w-full">
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase border">
                    {item.tag}
                  </span>
                  {item.featured && (
                    <span className="rounded-full bg-[#0A0A0A] px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-white">
                      Featured
                    </span>
                  )}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight text-white drop-shadow">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-white/80 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-widest uppercase text-white/90 group-hover:gap-2 transition-all">
                    {isActive ? "Close" : "Expand"} <ArrowRight className="size-3" />
                  </div>
                </div>

                {/* Expanded overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-white p-6 flex flex-col"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveId(null);
                        }}
                        className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition-colors"
                      >
                        <X className="size-4" />
                      </button>
                      <div className="inline-flex self-start rounded-full bg-[#F2F0EB] border border-black/10 px-2.5 py-1 text-xs font-medium">
                        {item.tag} • {item.status}
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.02em]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-black/60 flex-1">{item.description}</p>
                      <div className="mt-4 flex gap-2">
                        <a
                          href={item.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white hover:bg-black/90"
                        >
                          View project <ArrowRight className="size-3" />
                        </a>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(null);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-black/5"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default FluidExpandingGrid;
