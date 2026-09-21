export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  category: "ai" | "web" | "mobile" | "research" | "open-source";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  year: number;
  client?: string;
  role: string;
  technologies: string[];
  highlights?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "contract" | "freelance" | "internship";
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  color?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "ai-ml" | "frontend" | "backend" | "devops" | "data" | "tools";
  proficiency: number;
  icon?: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  logo?: string;
}