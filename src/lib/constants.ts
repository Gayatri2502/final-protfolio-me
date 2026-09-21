export const NAV_ITEMS = [
  { label: "About", href: "/about-new" },
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Service", href: "/services" },
  { label: "Experiments", href: "/experiments" },
  { label: "Contact", href: "/contact" },
] as const;

export const SKILL_CATEGORIES = [
  { id: "ai-ml", label: "AI/ML", icon: "brain" },
  { id: "frontend", label: "Frontend", icon: "code" },
  { id: "backend", label: "Backend", icon: "server" },
  { id: "devops", label: "DevOps", icon: "cpu" },
  { id: "data", label: "Data", icon: "database" },
  { id: "tools", label: "Tools", icon: "wrench" },
] as const;

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI/ML" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "research", label: "Research" },
  { id: "open-source", label: "Open Source" },
] as const;

export const ANIMATION_DELAYS = {
  stagger: 100,
  staggerSlow: 200,
  entrance: 300,
  exit: 200,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;