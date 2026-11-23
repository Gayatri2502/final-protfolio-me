"use client";

import { ScrollGlobe } from "@/components/ui/landing-page";

const goalSections = [
  {
    id: "goal",
    badge: "Our Goal",
    title: "Make AI",
    subtitle: "Useful",
    description: "We’re building Alphacentauric to help people understand where AI can help, choose models that fit their needs, and turn ideas into tools people can use with confidence.",
    align: "left" as const,
    actions: [
      { label: "Explore our projects", variant: "primary" as const, onClick: () => window.location.assign("/projects") },
    ],
  },
  {
    id: "community",
    badge: "Our Community",
    title: "Learn and",
    subtitle: "Build Together",
    description: "We’re building a community for curious beginners, students, developers, founders, and small business teams. We want people to share prototypes, ask questions, and compare what worked in their own experiments.",
    align: "center" as const,
  },
  {
    id: "models",
    badge: "Models & Methods",
    title: "Understand",
    subtitle: "the Models",
    description: "We’ll explore how language and multimodal models work, what they can handle, and how to choose between open-weight and hosted models for a real task.",
    align: "left" as const,
    features: [
      { title: "Model selection", description: "Compare accuracy, latency, cost, and privacy on the same task." },
      { title: "Retrieval & fine-tuning", description: "Use embeddings and retrieval to ground answers in source documents, and explore when fine-tuning helps." },
      { title: "AI agents", description: "Connect models to tools and design workflows with clear human review points." },
    ],
  },
  {
    id: "practice",
    badge: "Responsible AI",
    title: "Test Before",
    subtitle: "You Ship",
    description: "We’ll share practical ways to evaluate model outputs, protect sensitive data, and measure reliability after launch. Bring a question, a prototype, or a problem you’d like to solve together.",
    align: "center" as const,
    actions: [
      { label: "Talk to the studio", variant: "primary" as const, onClick: () => window.location.assign("/contact") },
    ],
  },
];

function MomoTurn({ progress }: { progress: number }) {
  const turn = Math.sin(progress * Math.PI * 2);
  const angle = Math.abs(turn);
  const profileOpacity = angle * angle * (3 - 2 * angle);
  const poseClass = "absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none";

  return (
    <div aria-hidden="true" className="relative aspect-square w-[clamp(220px,38vw,490px)] [perspective:900px]">
      <div
        className="absolute inset-0 isolate origin-[center_94%] transition-transform duration-200 ease-out motion-reduce:![transform:none] motion-reduce:transition-none"
        style={{ transform: `rotateY(${turn * 16}deg) rotateZ(${turn * 2}deg)` }}
      >
        <img
          src="/images/team/Momo.png"
          alt=""
          className={`${poseClass} motion-reduce:!opacity-100 motion-reduce:![transform:none]`}
          style={{ opacity: 1 - profileOpacity, transform: `scaleX(${1 - angle * 0.18})` }}
        />
        {[1, -1].map((direction) => (
          <img
            key={direction}
            src="/images/team/momo-profile-transparent.png"
            alt=""
            className={`${poseClass} mix-blend-plus-lighter motion-reduce:hidden`}
            style={{
              opacity: turn * direction > 0 ? profileOpacity : 0,
              transform: `scaleX(${direction})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function OurGoalPage() {
  return (
    <div className="min-h-screen">
      <ScrollGlobe
        sections={goalSections}
        scrollVisual={(progress) => <MomoTurn progress={progress} />}
      />
    </div>
  );
}
