export type Lang = "en" | "es";

interface EducationItem {
  name: string;
  note?: string;
}

interface TechStackItem {
  label: string;
  value: string;
}

interface LanguageItem {
  name: string;
  note: string;
}

interface Translation {
  role: string;
  description: string;
  url: string;
  ogLocale: string;
  titles: {
    contact: string;
    skills: string;
    techStack: string;
    languages: string;
    education: string;
  };
  skills: string[];
  techStack: TechStackItem[];
  languages: LanguageItem[];
  education: EducationItem[];
}

export const ui: Record<Lang, Translation> = {
  en: {
    role: "Full-Stack Developer | AI Automation & Agent Workflows",
    description:
      "CV for Santiago Aliprandi, full-stack developer: JavaScript, TypeScript, React, Node.js, PostgreSQL, and AI-powered workflow automation.",
    url: "https://saliprandi.github.io/",
    ogLocale: "en_US",
    titles: {
      contact: "Contact",
      skills: "Skills",
      techStack: "Tech Stack",
      languages: "Languages",
      education: "Education",
    },
    skills: [
      "AI Automation",
      "Agent Workflows",
      "LLM Integration",
      "Prompt Engineering",
      "Workflow Automation",
      "Web Development",
    ],
    techStack: [
      {
        label: "AI & Automation:",
        value:
          "OpenAI API, Anthropic API, MCP, Claude Code, Cursor, Agent Workflows.",
      },
      { label: "Languages:", value: "JavaScript, TypeScript." },
      { label: "Web:", value: "React, Next.js, Node.js, Express, Astro." },
      { label: "DB & Cloud:", value: "PostgreSQL, MongoDB, Vercel, Neon." },
      {
        label: "Tools:",
        value: "Git, GitHub, VS Code, Debian Linux, Playwright.",
      },
    ],
    languages: [
      { name: "Spanish", note: "Native" },
      { name: "English", note: "Intermediate B1-B2" },
    ],
    education: [
      { name: "Colegio Santa María" },
      { name: "High School Diploma", note: "6th year, in progress" },
    ],
  },
  es: {
    role: "Desarrollador Full-Stack | Automatización con IA y Agentes",
    description:
      "CV de Santiago Aliprandi, desarrollador full-stack: JavaScript, TypeScript, React, Node.js, PostgreSQL y automatización de flujos de trabajo con IA.",
    url: "https://saliprandi.github.io/es/",
    ogLocale: "es_AR",
    titles: {
      contact: "Contacto",
      skills: "Habilidades",
      techStack: "Stack Tecnológico",
      languages: "Idiomas",
      education: "Educación",
    },
    skills: [
      "Automatización con IA",
      "Flujos de Trabajo con Agentes",
      "Integración de LLMs",
      "Prompt Engineering",
      "Automatización de Workflows",
      "Desarrollo Web",
    ],
    techStack: [
      {
        label: "IA y Automatización:",
        value:
          "OpenAI API, Anthropic API, MCP, Claude Code, Cursor, Agent Workflows.",
      },
      { label: "Lenguajes:", value: "JavaScript, TypeScript." },
      { label: "Web:", value: "React, Next.js, Node.js, Express, Astro." },
      { label: "BD y Nube:", value: "PostgreSQL, MongoDB, Vercel, Neon." },
      {
        label: "Herramientas:",
        value: "Git, GitHub, VS Code, Debian Linux, Playwright.",
      },
    ],
    languages: [
      { name: "Español", note: "Nativo" },
      { name: "Inglés", note: "Intermedio B1-B2" },
    ],
    education: [
      { name: "Colegio Santa María" },
      { name: "Bachillerato", note: "6to año, en curso" },
    ],
  },
};
