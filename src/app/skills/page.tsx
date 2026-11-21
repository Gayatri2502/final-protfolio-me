import type { Metadata } from "next";

import { Award } from "lucide-react";

const featured = [
  ["Python", "python"], ["JavaScript", "javascript"], ["R", "r"], ["Java", "openjdk"], ["Dart", "dart"],
  ["PyTorch", "pytorch"], ["LangChain", "langchain"], ["OpenAI", "openai"], ["Claude", "anthropic"],
  ["FastAPI", "fastapi"], ["Flask", "flask"], ["Docker", "docker"], ["Firebase", "firebase"],
  ["Supabase", "supabase"], ["GitHub", "github"], ["Vercel", "vercel"], ["Flutter", "flutter"],
];

const certifications = [
  { name: "AWS Certified Generative AI Developer Professional", issuer: "AWS", logo: null },
  { name: "Google Professional Machine Learning Engineer", issuer: "Google", logo: "google" },
  { name: "Claude Certified Associate – Foundational", issuer: "Anthropic", logo: "anthropic" },
  { name: "Claude Certified Architect – Foundational", issuer: "Anthropic", logo: "anthropic" },
  { name: "Google Data Analysis with R Programming", issuer: "Google", logo: "google" },
  { name: "Flutter Android Development", issuer: "Flutter", logo: "flutter" },
  { name: "Python Programming", issuer: "Python", logo: "python" },
  { name: "Data Analytics & Visualisation Virtual Experience", issuer: "Virtual experience", logo: null },
];

function Logo({ name, logo }: { name: string; logo: string | null }) {
  return <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">{logo ? <img src={`/images/skills/${logo}.svg`} alt="" className="size-6 brightness-0 invert" /> : <span className="font-mono text-[10px] font-bold text-primary">{name === "AWS" ? "AWS" : <Award className="size-5" />}</span>}</span>;
}

export const metadata: Metadata = { title: "Skills & Certifications" };

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <section className="container-custom pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="font-mono text-xs tracking-[0.18em] uppercase text-primary">03 / Skills & certifications</div>
        <div className="mt-6 grid lg:grid-cols-12 gap-6 items-end"><div className="lg:col-span-8"><h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">THE SKILLS BEHIND <span className="text-primary">THE BUILD.</span></h1></div><p className="lg:col-span-4 max-w-md text-sm md:text-base leading-relaxed text-zinc-400">I’m Gayatri, an AI and ML engineer bringing together generative AI, software engineering and data to build useful, scalable systems.</p></div>
      </section>
      <section aria-label="Featured technologies" className="border-y border-white/10 py-6 bg-[#0d0e15]/60 overflow-hidden">
        <div className="container-custom mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Tools & technologies / scroll to explore</div>
        <div className="overflow-x-auto skills-scroll" tabIndex={0} aria-label="Scroll through featured technologies"><div className="skills-track flex w-max gap-3 px-6">{[...featured, ...featured].map(([name, logo], index) => <div key={`${name}-${index}`} aria-hidden={index >= featured.length ? true : undefined} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#12131d] px-4 py-3"><Logo name={name} logo={logo} /><span className="whitespace-nowrap text-sm font-medium">{name}</span></div>)}</div></div>
      </section>
      <section className="border-t border-white/10 bg-[#0d0e15]/60"><div className="container-custom py-16 md:py-24"><div className="font-mono text-xs tracking-widest uppercase text-primary">01 / Learning & credentials</div><h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">CERTIFICATIONS</h2><p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-zinc-400">A selection of certifications and learning experiences from my resume.</p><div className="mt-10 grid md:grid-cols-2 gap-3">{certifications.map(cert => <article key={cert.name} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#12131d] p-5"><Logo name={cert.issuer} logo={cert.logo} /><div><h3 className="font-semibold leading-snug">{cert.name}</h3><p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">{cert.issuer}</p></div></article>)}</div></div></section>
      <style>{`@keyframes skill-marquee { to { transform: translateX(-50%); } } .skills-track { animation: skill-marquee 42s linear infinite; } .skills-scroll:hover .skills-track, .skills-scroll:focus-within .skills-track, .skills-scroll:focus .skills-track { animation-play-state: paused; } @media (prefers-reduced-motion: reduce) { .skills-track { animation: none; } }`}</style>
    </main>
  );
}
