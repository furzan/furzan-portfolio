// Central content file — edit this to update copy across the whole site.
// All facts below are pulled from Furzan Ahmed's CV and https://github.com/furzan.

export const profile = {
  name: "Furzan",
  fullName: "Furzan Ahmed",
  role: "AI Engineer & CS Graduate",
  location: "Karachi, Pakistan",
  phone: "0334-1220865",
  education: "FAST NUCES — BS Computer Science",
  gpa: "3.57 CGPA · Dean's List ×6",
  email: "furzanahmed07@gmail.com",
  github: "https://github.com/furzan",
  linkedin: "https://linkedin.com/in/furzan-ahmed-b596a1299",
  avatar: "https://avatars.githubusercontent.com/u/156594010?v=4",
  heroSubhead:
    "AI Engineer from FAST NUCES building agentic systems — voice AI agents, multimodal RAG pipelines, and multi-agent developer tools. CS graduate turning research-grade ML into production software.",
  bioParagraphs: [
    "I'm a Computer Science graduate from FAST NUCES Karachi (3.57 CGPA, Dean's List for 6 semesters) with hands-on experience in AI/ML engineering and full-stack development. Formal training in algorithms, systems, and software engineering gave me the foundation; building autonomous AI agents and intelligent workflows is what drives my work.",
    "I've interned at Unikrew Solutions, 10Pearls, and Planet01 — engineering autonomous CLI tools, full-stack REST services with JWT auth & SQL databases, and responsive frontends. I specialize in LLMs, RAG, LangGraph, LangChain, OpenAI Agents SDK with MCP, vector databases, and real-time voice streaming with WebRTC.",
  ],
};

export const stats = [
  { label: "Public Repos", value: "22+" },
  { label: "Dean's List", value: "×6" },
  { label: "Internships", value: "3" },
  { label: "CGPA", value: "3.57" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "Unikrew Solutions",
    role: "AI Intern",
    period: "Jun 2026 – Present",
    description:
      "Developing an autonomous AI Coding Agent & CLI tool using TypeScript, Node.js, and LLM APIs.",
    highlights: [
      "Implemented function calling and tool execution workflows for code synthesis",
      "Built context management & interactive terminal interfaces",
      "Integrated LLM APIs for autonomous agentic developer workflows",
    ],
    tags: ["TypeScript", "Node.js", "LLM APIs", "CLI", "Function Calling"],
  },
  {
    company: "10Pearls",
    role: "MERN Stack Intern",
    period: "Dec 2025 – Feb 2026",
    description:
      "Built a full-stack MERN app with JWT auth, REST APIs, and MySQL persistence adhering to strict code quality standards.",
    highlights: [
      "Integrated Pino logging, unit testing (Jest/Mocha), and SonarQube quality gates",
      "Designed structured Git workflows and clean RESTful API architecture",
      "Handled database modeling, security, and state management",
    ],
    tags: ["MERN", "TypeScript", "MySQL", "JWT", "Jest", "Pino", "SonarQube"],
  },
  {
    company: "Planet01",
    role: "Backend Intern",
    period: "July 2025 – Aug 2025",
    description:
      "Developed RESTful backend services with Node.js/Express and MySQL (Sequelize).",
    highlights: [
      "Integrated backend services with Vue.js frontend for end-to-end feature delivery",
      "Optimized query performance and database access layers",
    ],
    tags: ["Node.js", "Express", "MySQL", "Sequelize", "Vue.js", "REST APIs"],
  },
  {
    company: "Planet01",
    role: "Frontend Intern",
    period: "June 2024 – Aug 2024",
    description:
      "Built responsive user interfaces using Vue.js, JavaScript, HTML, and CSS.",
    highlights: [
      "Achieved iterative UI/UX improvements through team code reviews",
      "Created modular, accessible components for web applications",
    ],
    tags: ["Vue.js", "JavaScript", "HTML/CSS", "UI/UX", "Code Review"],
  },
];

export type Education = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpaOrGrade: string;
  honors?: string;
};

export const educationList: Education[] = [
  {
    institution: "FAST NUCES",
    degree: "Bachelor of Science in Computer Science",
    location: "Karachi, Pakistan",
    period: "Aug 2022 – May 2026",
    gpaOrGrade: "CGPA: 3.57",
    honors: "Dean's List (6 Semesters)",
  },
  {
    institution: "Nixor College",
    degree: "A Levels",
    location: "Karachi, Pakistan",
    period: "Aug 2020 – May 2022",
    gpaOrGrade: "2A*, 2A",
  },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / ML & Agents",
    blurb: "LLM agents, RAG engines, and real-time voice AI",
    skills: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI Agents SDK",
      "MCP Protocol",
      "Pinecone",
      "Groq (Llama 3.3)",
      "FastAPI",
      "Pipecat / WebRTC",
      "Deepgram / Cartesia",
      "Tesseract OCR / Poppler",
      "Streamlit",
    ],
  },
  {
    title: "Full-Stack & CLI",
    blurb: "Production APIs, autonomous CLI tools & responsive UIs",
    skills: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Vue.js",
      "REST APIs",
      "HTML / CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & State",
    blurb: "Vector stores, SQL/NoSQL & auth mechanisms",
    skills: [
      "PostgreSQL (SQLModel)",
      "MySQL (Sequelize)",
      "Redis (Semantic Cache)",
      "Pinecone Vector DB",
      "SQLite",
      "JWT Auth",
    ],
  },
  {
    title: "DevOps & Engineering",
    blurb: "Testing, logging, CI/CD & code quality tools",
    skills: [
      "Git & GitHub API",
      "Docker",
      "Linux",
      "Jest / Mocha",
      "Pino Logger",
      "SonarQube",
      "Postman",
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
    title: "AI-Powered Food Ordering Voice Agent",
    description:
      "A real-time voice AI agent that lets users browse a menu, manage their cart, and place orders through natural conversation. Built with Pipecat pipeline (Deepgram STT, Cartesia TTS, Silero VAD), Gemini for intent handling, OpenAI Agents SDK with MCP, FastAPI, PostgreSQL (SQLModel), WebRTC audio, and JWT auth.",
    tags: ["Pipecat", "WebRTC", "FastAPI", "PostgreSQL", "OpenAI SDK", "MCP"],
    href: "https://github.com/furzan/Food-Ordering-Voice-Agent",
    area: "a",
    featured: true,
  },
  {
    title: "Multimodal RAG System",
    description:
      "Multimodal RAG engine extracting text, tables, and images from PDFs using Tesseract OCR, Poppler, Unstructured, and Gemini vision summaries indexed in Pinecone. Features FastAPI backend with Redis semantic caching, LangChain + Groq (Llama 3.3), and a Streamlit UI.",
    tags: ["RAG", "FastAPI", "Pinecone", "Redis", "LangChain", "Groq"],
    href: "https://github.com/furzan/Multimodal-RAG-System",
    area: "b",
    featured: true,
  },
  {
    title: "Agentic PR Reviewer",
    description:
      "Multi-agent AI system that reviews GitHub PRs for security vulnerabilities, performance issues, and bugs using a parallel LangGraph pipeline with a critique gate for quality control, posting structured feedback directly as PR comments.",
    tags: ["LangGraph", "LangChain", "Groq", "FastAPI", "GitHub API"],
    href: "https://github.com/furzan/Agentic-PR-Reviewer",
    area: "c",
  },
  {
    title: "Weather & AQI Predictor",
    description:
      "ML forecasting for Karachi's weather and air quality three days out, with a fully automated CI/CD pipeline that retrains models on fresh data.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "GH Actions"],
    href: "https://github.com/furzan/Weather_AQI_Predictor",
    area: "d",
  },
  {
    title: "Smart Lunch Backend",
    description:
      "A team lunch-ordering REST API featuring voting, restaurant management, shared balance pool, and role-based access control built on Express and Sequelize MySQL.",
    tags: ["JavaScript", "Express", "Sequelize", "MySQL", "JWT"],
    href: "https://github.com/furzan/smart-lunch-backend",
    area: "e",
  },
];

export type FocusArea = {
  title: string;
  description: string;
};

export const focusAreas: FocusArea[] = [
  {
    title: "Agentic AI & Voice Pipelines",
    description:
      "Autonomous tools & multi-agent systems that plan, execute functions, and stream real-time audio via WebRTC.",
  },
  {
    title: "Multimodal RAG Systems",
    description:
      "Extracting text, tables & vision summaries from documents with vector search and Redis semantic caching.",
  },
  {
    title: "Full-Stack AI Architecture",
    description:
      "Production-grade APIs, JWT auth, database persistence, and clean software standards around LLM models.",
  },
];

export const pullQuote =
  "I treat an AI model the same way I treat a database — powerful, but only as good as the software architecture built around it.";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
