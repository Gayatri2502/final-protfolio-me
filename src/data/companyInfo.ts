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
  tagline: "AI/ML Studio — AI Engineer & Researcher",
  description: "Welcome to my AI/ML studio — building intelligent systems that understand, reason, and create. Specializing in LLMs, RAG systems, and production ML infrastructure.",
  email: "alphacentauric.ai@gmail.com",
  social: {
    github: "https://github.com/alphacentauric",
    linkedin: "https://linkedin.com/in/alphacentauric",
    twitter: "https://twitter.com/alphacentauric",
    email: "mailto:alphacentauric.ai@gmail.com",
  },
  location: "Mumbai, India",
  availability: "selective",
};