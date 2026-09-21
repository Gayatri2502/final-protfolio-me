"use client";

import { ScrollGlobe } from "@/components/ui/landing-page";

const experienceSections = [
  {
    id: "journey",
    badge: "Journey",
    title: "Professional",
    subtitle: "Journey",
    description: "5+ years building AI systems at scale — from research to production deployment. Scroll to explore my path across companies, freelance work, and milestones.",
    align: "left" as const,
    actions: [
      { label: "Explore Work", variant: "primary" as const, onClick: () => window.location.assign("/projects") },
      { label: "Learn More", variant: "secondary" as const, onClick: () => window.location.assign("/about") },
    ],
  },
  {
    id: "companies",
    badge: "Companies",
    title: "Teams That",
    subtitle: "Shaped Me",
    description: "From TechCorp AI to Neural Labs — building semantic search for 10M+ docs, LLM platforms for 7B–70B models, and RAG systems for 500+ engineers.",
    align: "center" as const,
  },
  {
    id: "freelance",
    badge: "Freelance",
    title: "Building",
    subtitle: "Beyond Borders",
    description: "Consulting for MedTech, FinanceFlow, ShopSmart — 65% faster clinical reviews, 99.2% fraud detection, +28% conversion. Real impact, shipped.",
    align: "left" as const,
    features: [
      { title: "Global Impact", description: "Deployed to 12 hospitals across 3 countries, 50K transactions/sec" },
      { title: "Proven Results", description: "94% accuracy on benchmarks, 40% infrastructure cost reduction" },
      { title: "Trusted Teams", description: "Testimonials from C-suite — exceptional depth and delivery speed" },
    ],
  },
  {
    id: "milestones",
    badge: "Milestones",
    title: "Milestones",
    subtitle: "That Matter",
    description: "NeurIPS, ICML awards, 10K★ open source, patent granted — each mark is a commitment to craft and sharing.",
    align: "center" as const,
    actions: [
      { label: "View Projects", variant: "primary" as const, onClick: () => window.location.assign("/projects") },
      { label: "Back to Home", variant: "secondary" as const, onClick: () => window.location.assign("/") },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <ScrollGlobe sections={experienceSections} />
    </div>
  );
}
