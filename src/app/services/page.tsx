"use client";

import { StudiovaServicesTabs, type ServiceItem } from "@/components/ui/studiova-interactive-services-tabs";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { companyInfo } from "@/data/companyInfo";

const families = [
  { title: "AI Automation Workflows", illustration: "/images/services/momo-automation.webp", tagline: "Give your team time back", description: "Connect tools, data and AI to streamline repetitive work, with human review where it matters.", deliverables: ["AI assistants & agent workflows", "Research and support automation", "App and API integrations", "Human review & monitoring"], offerings: [
    ["AI workflow automation", "Custom quote", "Scoped to your needs", "Map repetitive processes and connect AI assistants, business tools and APIs to support research, operations and customer service."],
    ["Knowledge & document workflows", "Custom quote", "Scoped to your needs", "Organise information and build retrieval-based workflows that help teams find answers and process documents, with appropriate review steps."],
  ] },
  { title: "UI/UX Design & Branding", illustration: "/images/services/momo-branding.webp", tagline: "Thoughtful identities and intuitive experiences", description: "From research and wireframes to complete visual identities, we design responsive experiences that help people understand and trust your brand.", deliverables: ["UX research & interactive prototypes", "Responsive UI & design systems", "Logo and visual identity", "Brand guidelines & collateral"], offerings: [
    ["UI/UX design", "₹25,000–₹4,00,000", "1–10 weeks", "Up to 10 screens, a 30-screen prototype, or a full product design system with research and developer handoff."],
    ["Branding & identity", "₹8,000–₹1,50,000", "1–6 weeks", "Logo concepts and a social kit through to brand strategy, complete identity and marketing collateral."],
  ] },
  { title: "Web & E-commerce", illustration: "/images/services/momo-web.webp", tagline: "Your digital storefront, built to grow", description: "Responsive websites, custom applications and online stores, built around your customers and the way your business works.", deliverables: ["WordPress & Drupal websites", "Custom web apps & APIs", "Shopify & Magento stores", "Payments, inventory & integrations"], offerings: [
    ["Business & custom websites", "₹12,000–₹8,00,000+", "2–16 weeks", "From a five-page brochure site to a CMS website or custom application with user roles, dashboards and integrations."],
    ["E-commerce platforms", "₹60,000–₹8,00,000+", "3 weeks–6 months", "Stores from up to 100 products to multi-vendor and B2B platforms, with payments, shipping and inventory connections."],
  ] },
  { title: "ERP Systems", illustration: "/images/services/momo-erp.webp", tagline: "Bring your operations together", description: "Web-based ERP systems that connect inventory, finance, people and production as your business grows.", deliverables: ["Inventory, sales & billing", "Accounting, HR & payroll", "Multi-branch operations", "Reporting & integrations"], offerings: [
    ["Small business ERP", "₹3,00,000–₹6,00,000", "10–16 weeks", "Three to four modules, up to 10 users, standard reports and role-based access."],
    ["Growing & large business ERP", "₹6,00,000–₹35,00,000", "4–12 months", "Six to 10+ modules, multi-branch operations, dashboards, workflows and integrations."],
    ["Enterprise ERP & add-ons", "₹35,00,000+", "Custom scope", "Legacy migration, SSO and phased rollout. Platform setup, migration, training and annual support are available separately."],
  ] },
  { title: "CRM Systems", illustration: "/images/services/momo-crm.webp", tagline: "Keep every customer relationship moving", description: "Give sales and service teams a clear view of leads, conversations, follow-ups and performance.", deliverables: ["Lead capture & sales pipelines", "Reminders & workflow automation", "Campaigns & customer insights", "ERP, website & API integrations"], offerings: [
    ["Starter CRM", "₹1,50,000–₹4,00,000", "6–12 weeks", "Contacts, leads, pipeline, tasks, reminders and standard sales reports for up to 10 users."],
    ["Business & advanced CRM", "₹4,00,000–₹20,00,000", "3–8 months", "Automation, campaigns, dashboards, team approvals, integrations and AI-driven lead scoring."],
    ["Enterprise CRM", "₹20,00,000+", "Custom scope", "Large-scale deployment with migration, single sign-on, advanced security and a dedicated team."],
  ] },
  { title: "Mobile & Custom Software", illustration: "/images/services/momo-mobile.webp", tagline: "From first idea to enterprise platform", description: "Native and cross-platform apps, internal tools and custom software designed around your workflows.", deliverables: ["iOS, Android, Flutter & React Native", "Mobile MVPs & admin panels", "Custom business software", "Legacy modernisation & APIs"], offerings: [
    ["Mobile app development", "₹1,50,000–₹30,00,000+", "6 weeks–12 months", "From a single-purpose cross-platform app to native apps with real-time features and scalable back-end systems."],
    ["Custom software", "₹1,50,000–₹12,00,000+", "4 weeks–12 months", "Workflow tools, departmental applications and enterprise modernisation, with integration and security matched to your needs."],
  ] },
  { title: "Data & AI", illustration: "/images/services/momo-data.webp", tagline: "Turn information into useful decisions", description: "Make sense of your data with dashboards, forecasting, research and clean, well-prepared datasets.", deliverables: ["BI dashboards & KPI tracking", "Forecasting & predictive analytics", "Market & competitor research", "Data processing & annotation"], offerings: [
    ["Interactive dashboards", "₹25,000–₹5,00,000+", "1 week–4 months", "KPI views, filters and exports through to real-time, role-based dashboards and data warehouse integration."],
    ["Predictive analytics", "₹60,000–₹4,00,000+", "3 weeks–6 months", "Sales or demand forecasting, risk analysis, custom models and automated insights."],
    ["Research & competitive analysis", "₹15,000–₹3,00,000", "1–6 weeks", "Competitor benchmarking and SWOT through to industry studies, recommendations and executive workshops."],
    ["Data processing", "₹8,000–₹80,000+", "3 days–ongoing", "Cleaning, validation, SQL transformations, NLP and recurring workflows; scope depends on data quality and volume."],
  ] },
  { title: "SEO, Video & Content", illustration: "/images/services/momo-content.webp", tagline: "Get found, watched and remembered", description: "Grow a consistent digital presence with search optimisation, video editing and content for web and social.", deliverables: ["Technical, local & e-commerce SEO", "Reels, YouTube & brand videos", "Website & blog content", "Social content & creative"], offerings: [
    ["SEO plans", "₹10,000–₹1,00,000 / month", "3-month minimum", "Technical audits, keyword research and on-page improvements, with local, content and e-commerce options. Rankings are not guaranteed."],
    ["Video editing", "₹500–₹1,00,000", "Per clip or project", "Short-form clips, YouTube edits, promotional and corporate videos; monthly packages are also available."],
    ["Content creation", "₹100–₹40,000", "Per item or month", "Product descriptions, articles, social posts and monthly content plans."],
  ] },
  { title: "Project Management & QA", illustration: "/images/services/momo-qa.webp", tagline: "A clear path from scope to launch", description: "Planning, coordinated delivery and thorough testing for our builds or your existing development team.", deliverables: ["Requirements & roadmaps", "Agile delivery & sprint demos", "Functional & usability testing", "Performance, security & regression QA"], offerings: [
    ["Project planning & agile delivery", "₹15,000–₹2,00,000", "1–2 weeks or monthly", "Requirements, roadmaps and risk planning, plus monthly agile or multi-team programme management."],
    ["Quality assurance & testing", "₹15,000–₹5,00,000", "1–8 weeks", "Test plans and functional testing through to performance, security, regression and release sign-off."],
  ] },
];

const relatedProjects: Record<string, [string, string][]> = {
  "AI Automation Workflows": [["Research Studio", "multi-agent-research-assistant-langgraph-autogen-langchain-ollama"], ["Textbook Assistant", "textbook-assistant-rag-langchain"]],
  "UI/UX Design & Branding": [["Maison Halden", "MAISON-HALDEN-STORE-WEB"], ["Moonlight Café", "MOONLIGHT-CAFE-RESERVATIONS"], ["Madhav Offset Printers", "Madhav"]],
  "Web & E-commerce": [["Maison Halden", "MAISON-HALDEN-STORE-WEB"], ["Moonlight Café", "MOONLIGHT-CAFE-RESERVATIONS"], ["Madhav Offset Printers", "Madhav"]],
  "ERP Systems": [["PhysioFlow Clinic ERP", "physioflow-clinic"], ["Drinkarto", "drinkarto-final"], ["Solar Sales Desk", "solar-sales-desk"]],
  "CRM Systems": [["Solar Sales Desk", "solar-sales-desk"], ["Freelancer Tracker", "freelancer-tracker"]],
  "Mobile & Custom Software": [["Freelancer Tracker", "freelancer-tracker"], ["Folio Finance", "AI-PRD"]],
  "Data & AI": [["Alphacentauric Business Intelligence", "alphacentauric-business-intelligence-time-series"], ["Telecom Churn Analytics", "telecom-churn-business-analytics-dashboard"], ["AI Image Studio", "ai-image-generator"]],
  "SEO, Video & Content": [["Maison Halden Runway Lookbook", "MAISON-HALDEN-STORE-WEB"]],
  "Project Management & QA": [["Freelancer Tracker", "freelancer-tracker"]],
};

const services: ServiceItem[] = families.map((family, i) => ({ ...family, projects: (relatedProjects[family.title] ?? []).map(([name, repo]) => ({ name, href: `https://github.com/Gayatri2502/${repo}` })), id: `service-${i}`, number: String(i + 1).padStart(2, "0"), gradient: "from-primary/20 via-primary/10 to-transparent" }));
const bundles = [
  { name: "Startup Launch", price: "₹60,000–₹1,50,000", time: "3–4 weeks", details: "A five-page website, logo and brand starter kit, basic SEO setup and one month of post-launch support." },
  { name: "Growth Suite", price: "₹3,50,000–₹8,00,000", time: "2–4 months", details: "Business website or store, starter CRM, UI/UX design, three months of SEO and a basic dashboard." },
  { name: "Enterprise Digital", price: "₹15,00,000+", time: "6–12 months", details: "ERP and CRM, mobile app, dashboards and predictive analytics, dedicated PM and QA, plus 12 months of support." },
];

export default function ServicesPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    return () => { audio.pause(); };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) { audio.pause(); setPlaying(false); }
    else { try { await audio.play(); setPlaying(true); } catch { setPlaying(false); } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <audio ref={audioRef} src="/audio/alphacentauric-introduction.mp3" preload="metadata" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
      <div className="container-custom flex justify-end pt-2">
        <button type="button" onClick={toggleAudio} aria-label={playing ? "Pause studio introduction audio" : "Play studio introduction audio"} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#12131d] px-4 py-2 text-xs text-zinc-200 transition-colors hover:border-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          {playing ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
          {playing ? "Pause audio" : "Play audio"}
        </button>
      </div>
      <StudiovaServicesTabs tagNumber="02" tagLabel="Services" heading={<>WHAT WE DO IN <span className="font-extrabold text-primary">ALPHACENTAURIC STUDIO</span></>} subheading="Design, engineering, data and growth — specialist freelancers working together as one coordinated team, from first idea to launch and beyond." services={services} brandLink="/contact" />
      <section className="container-custom py-16 md:py-24 border-t border-white/10">
        <div className="grid lg:grid-cols-12 gap-6 mb-12"><div className="lg:col-span-4 font-mono text-xs tracking-widest uppercase text-primary">03 / Service catalog</div><div className="lg:col-span-8"><h2 className="text-3xl md:text-5xl font-bold tracking-tight">THE DETAILS</h2><p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">Explore what each service can include. Timelines are indicative and your final scope is tailored to your needs.</p></div></div>
        <div className="space-y-12">{families.map((family, index) => <div key={family.title} className="grid lg:grid-cols-12 gap-5 border-t border-white/10 pt-8"><div className="lg:col-span-4"><span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-2xl font-bold tracking-tight">{family.title}</h3><p className="mt-2 text-sm text-zinc-400 max-w-sm">{family.description}</p></div><div className="lg:col-span-8 grid gap-3">{family.offerings.map(([name, , time, detail]) => <div key={name} className="rounded-2xl border border-white/10 bg-[#0d0e15]/60 p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-2"><h4 className="font-semibold text-lg">{name}</h4><span className="text-primary font-mono text-sm">{time}</span></div><p className="mt-3 text-sm leading-relaxed text-zinc-400">{detail}</p></div>)}</div></div>)}</div>
        <p className="mt-10 text-sm text-zinc-500">Domains, hosting, cloud, licences, app-store fees and other third-party costs are quoted separately at actual cost. Timelines depend on scope, inputs and approvals.</p>
      </section>
      <section className="border-t border-white/10 bg-[#0d0e15]/60"><div className="container-custom py-16 md:py-24"><div className="font-mono text-xs tracking-widest uppercase text-primary">04 / Packages</div><h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">BUNDLES FOR EVERY STAGE</h2><p className="mt-4 text-zinc-400 max-w-2xl">Combine services under one project lead, or ask us to build a package around your goals.</p><div className="mt-10 grid md:grid-cols-3 gap-4">{bundles.map(bundle => <article key={bundle.name} className="rounded-2xl border border-white/10 bg-[#12131d] p-6"><p className="font-mono text-xs uppercase tracking-wider text-zinc-500">{bundle.time}</p><h3 className="mt-4 text-xl font-bold">{bundle.name}</h3><p className="mt-4 font-mono text-primary">{bundle.price}</p><p className="mt-4 text-sm leading-relaxed text-zinc-400">{bundle.details}</p></article>)}</div></div></section>
      <section className="container-custom py-16 md:py-24 border-t border-white/10"><div className="font-mono text-xs tracking-widest uppercase text-primary">05 / How we work</div><h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">FROM IDEA TO LAUNCH</h2><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">{[["Discover", "Share your goals and requirements."], ["Plan", "Agree on scope, roadmap, timeline and risks."], ["Design", "Explore wireframes, UI and prototypes."], ["Build & test", "Work in sprints with demos and quality checks."], ["Launch & grow", "Deploy, train and support your team."]].map(([title, desc], i) => <div key={title} className="border-t border-white/20 pt-5"><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p></div>)}</div><div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[#12131d] p-7 md:p-10"><div><h3 className="text-2xl font-bold">Let’s build something together.</h3><p className="mt-2 text-sm text-zinc-400">We would love to hear from you, whether it’s about potential collaboration, feedback, or just a chat about the latest in tech. Drop us a message.</p></div><a href={companyInfo.social.whatsapp} className="inline-flex items-center gap-2 rounded-full bg-[#F2F0EB] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#08080A]">Talk to the studio <ArrowUpRight className="size-4" /></a></div></section>
    </div>
  );
}
