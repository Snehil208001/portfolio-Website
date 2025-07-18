// src/types.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string | undefined; // It's okay to have undefined here if you handle it in your components
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: "Languages" | "Frontend" | "Backend" | "Tools" | "Other";
}

export interface ContactLink {
  id: string;
  name: string;
  url: string;
  // If you plan to use icons, you might add:
  // icon?: React.ReactNode;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}