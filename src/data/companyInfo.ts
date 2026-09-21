export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  location: string;
  availability: "open" | "busy" | "selective";
}

export const companyInfo: CompanyInfo = {
  name: "Gayatri Samal",
  tagline: "AI Engineer & Researcher",
  description: "Building intelligent systems that understand, reason, and create. Specializing in LLMs, RAG systems, and production ML infrastructure.",
  email: "hello@alphacentauric.dev",
  social: {
    github: "https://github.com/alphacentauric",
    linkedin: "https://linkedin.com/in/alphacentauric",
    twitter: "https://twitter.com/alphacentauric",
    email: "mailto:hello@alphacentauric.dev",
  },
  location: "San Francisco, CA",
  availability: "selective",
};