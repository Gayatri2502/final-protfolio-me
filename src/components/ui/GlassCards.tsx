"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardData, type CardData } from "@/data/cards";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  data: CardData;
  index: number;
  totalCards: number;
  className?: string;
}

const Card = ({
  data,
  index,
  totalCards,
  className,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    gsap.set(card, {
      scale: 1,
      transformOrigin: "center top",
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);
        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: "center top",
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      className="flex h-[100vh] w-full items-center justify-center"
      style={{ position: "sticky", top: 0 }}
    >
      <div
        ref={cardRef}
        className={cn(
          "relative w-[70%] h-[450px] rounded-2xl isolate",
          "max-md:w-[90%] max-md:h-[380px]",
          className
        )}
        style={{
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: "top",
        }}
      >
        {/* Electric Border Effect */}
        <div
          className="absolute -inset-1.5 rounded-[27px] z-[-1]"
          style={{
            padding: "3px",
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${data.color} 60deg,
              ${data.color.replace("0.8", "0.6")} 120deg,
              transparent 180deg,
              ${data.color.replace("0.8", "0.4")} 240deg,
              transparent 360deg
            )`,
          }}
        />

        {/* Main Card Content */}
        <div
          className="relative w-full h-full flex flex-col justify-center rounded-2xl overflow-hidden"
          style={{
            background: `
              linear-gradient(145deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05)
              )
            `,
            backdropFilter: "blur(25px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.3),
              0 2px 8px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Enhanced Glass reflection overlay */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "60%",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
              borderRadius: "24px 24px 0 0",
            }}
          />

          {/* Glass shine effect */}
          <div
            className="absolute left-[10px] right-[10px] pointer-events-none"
            style={{
              top: "10px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)",
              borderRadius: "1px",
            }}
          />

          {/* Side glass reflection */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: "2px",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
              borderRadius: "24px 0 0 24px",
            }}
          />

          {/* Frosted glass texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 1px, transparent 2px),
                radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 1px, transparent 2px)
              `,
              backgroundSize: "30px 30px, 25px 25px, 35px 35px",
              borderRadius: "24px",
            }}
          />

          {/* Card Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-white tracking-tight">
              {data.title}
            </h3>

            <p className="mb-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              {data.description}
            </p>

            {data.link && (
              <a
                href={data.link}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:gap-3 backdrop-blur-sm border border-white/10"
              >
                View Project
                <svg
                  className="size-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface GlassCardsProps {
  items?: CardData[];
  className?: string;
}

export const GlassCards = ({
  items = cardData,
  className,
}: GlassCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn("relative w-full bg-background", className)}
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Hero Section */}
      <div
        className="relative flex h-[70vh] w-full items-center justify-center"
        style={{ position: "relative" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(79, 79, 79, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(79, 79, 79, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: "54px 54px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          }}
        />

        <div className="relative z-10 px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Featured Projects
          </span>
          <h1 className="text-display-lg font-medium text-foreground tracking-tight text-balance">
            Selected Work
            <br />
            <span className="text-gradient">AI & ML Systems</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-body-lg text-muted-foreground">
            Production-grade AI systems spanning search, language models, multimodal
            retrieval, and MLOps infrastructure.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full">
        {items.map((card, index) => (
          <Card
            key={card.id}
            data={card}
            index={index}
            totalCards={items.length}
          />
        ))}
      </div>
    </section>
  );
};

export default GlassCards;