// Central content file — edit this to update copy across the whole site.
// All facts below are pulled from https://github.com/furzan (profile README + pinned repos).

export const profile = {
  name: "Furzan",
  fullName: "Furzan Ahmed",
  role: "AI Engineer & CS Graduate",
  location: "Karachi, Pakistan",
  education: "FAST NUCES — BS Computer Science",
  gpa: "3.57 CGPA · Dean's List ×6",
  email: "furzanahmed07@gmail.com",
  github: "https://github.com/furzan",
  linkedin: "https://linkedin.com/in/furzan-ahmed-b596a1299",
  // Swap this for a local file in /public (e.g. "/headshot.jpg") if you'd rather
  // not use your live GitHub avatar.
  avatar: "https://avatars.githubusercontent.com/u/156594010?v=4",
  heroSubhead:
    "AI Engineer from Karachi building agentic systems — voice agents, multi-agent pipelines, and RAG that hold up outside a demo. CS grad turning research-grade ML into shipped, production software.",
  bioParagraphs: [
    "I'm a Computer Science graduate from FAST NUCES Karachi, where I closed out with a 3.57 CGPA and landed on the Dean's List six times. Formal training in algorithms, systems, and data structures gave me the foundation; building things I actually wanted to exist is what pulled me toward AI.",
    "My focus lately is agentic AI — voice agents, multi-agent pipelines, and retrieval-augmented systems that are genuinely useful, not just demos. I've interned at 10Pearls and Planet01, shipping real features across backend and frontend, and I care about clean architecture as much as the model in the loop.",
  ],
};

export const stats = [
  { label: "Public Repos", value: "22+" },
  { label: "Dean's List", value: "×6" },
  { label: "Internships", value: "2" },
  { label: "Focus", value: "Agentic AI" },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / ML",
    blurb: "Where most of my time goes right now",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LangGraph",
      "OpenAI SDK",
      "Pinecone",
      "Groq",
      "Streamlit",
    ],
  },
  {
    title: "Full-Stack",
    blurb: "For shipping the product around the model",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Vue",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & Auth",
    blurb: "Where the state actually lives",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Sequelize", "JWT"],
  },
  {
    title: "DevOps & Tools",
    blurb: "Keeping it reliable from laptop to prod",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Linux",
      "Postman",
      "Figma",
      "VS Code",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  area: string; // grid-area name, matched in Projects.tsx
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Food Ordering Voice Agent",
    description:
      "A real-time voice AI that lets customers browse a menu, place an order, and pay entirely through natural conversation — no screen required.",
    tags: ["Python", "Pipecat", "WebRTC", "FastAPI", "PostgreSQL"],
    href: "https://github.com/furzan/Food-Ordering-Voice-Agent",
    area: "a",
    featured: true,
  },
  {
    title: "Agentic PR Reviewer",
    description:
      "A multi-agent system that reviews GitHub pull requests on its own — flagging bugs, security gaps, and performance issues before a human has to.",
    tags: ["LangGraph", "LangChain", "Groq", "FastAPI"],
    href: "https://github.com/furzan/Agentic-PR-Reviewer",
    area: "b",
    featured: true,
  },
  {
    title: "RAG Medical ChatBot",
    description:
      "Retrieval-augmented Q&A over medical PDFs, pairing Gemini embeddings with a Pinecone vector store and Llama 3.3 for grounded, citation-backed answers.",
    tags: ["RAG", "Pinecone", "LangChain", "Llama 3.3"],
    href: "https://github.com/furzan/RAG-Medical-ChatBot",
    area: "c",
  },
  {
    title: "Weather & AQI Predictor",
    description:
      "ML forecasting for Karachi's weather and air quality three days out, with a fully automated CI/CD pipeline that retrains on fresh data.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "GH Actions"],
    href: "https://github.com/furzan/Weather_AQI_Predictor",
    area: "d",
  },
  {
    title: "Notes Manager — MERN",
    description:
      "A secure, full-stack notes app with JWT authentication, rich-text editing, and automated password recovery on a React + Sequelize/MySQL stack.",
    tags: ["TypeScript", "React", "Node.js", "MySQL"],
    href: "https://github.com/furzan/Furzan-mern-10pshine",
    area: "e",
  },
  {
    title: "Smart Lunch Backend",
    description:
      "A team lunch-ordering API — voting, restaurants, a shared balance pool, and role-based access, built on Express and Sequelize.",
    tags: ["JavaScript", "Express", "Sequelize", "JWT"],
    href: "https://github.com/furzan/smart-lunch-backend",
    area: "f",
  },
];

export type FocusArea = {
  title: string;
  description: string;
};

export const focusAreas: FocusArea[] = [
  {
    title: "Agentic AI",
    description:
      "Multi-agent pipelines that plan, call tools, and hand off work — LangGraph, LangChain, Groq.",
  },
  {
    title: "Retrieval & RAG",
    description:
      "Grounded, citation-backed answers over real documents — embeddings, vector stores, reranking.",
  },
  {
    title: "Full-Stack Systems",
    description:
      "The product around the model — APIs, auth, and databases that hold up in production.",
  },
];

export const pullQuote =
  "I treat a model the same way I treat a database — powerful, but only as good as the system built around it.";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
