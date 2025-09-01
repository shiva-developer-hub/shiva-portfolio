export const SITE = {
  name: "Kalluri Shiva Kumar | Full Stack & AI Developer",
  title: "Hi, I'm Shiva 👋",
  subtitle: "Building with Java, Spring Boot, React, and Cloud-native DevOps",
  tagline: "From microservices to LLM/RAG—production-ready, performant, and secure.",
  email: "shivakumar601630@gmail.com",
  phone: "+91 70932 20229",
  linkedin: "https://linkedin.com/in/shiva-kumar-kalluri-093b11299",
  github: "https://github.com/shiva-developer-hub",
  location: "Hyderabad, India",
  resume: "/resume/shiva-resume.pdf", // place your PDF at public/resume/
};

// Kept the original keys to avoid breaking components, expanded with accurate skills
export const SKILLS = {
  frontend: [
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ],
  backend: [
    "Java",
    "Spring Boot",
    "Python",
    "OpenFeign",
    "REST APIs",
  ],
  database: ["MongoDB", "MySQL", "Elasticsearch","ClickHouse"],
  cloud: [
    "GCP",
    "Azure",
    "AWS",
    "Docker",
    "Kubernetes",
    "GitHub Actions (CI/CD)",
  ],
  ai: [
    "LLMs",
    "OpenAI",
    "RAG",
    "LangGraph",
    "Vector Databases",
  ],
  messaging: ["Kafka", "Azure Event Hubs"],
  tools: ["Git", "GitHub", "Postman", "IntelliJ", "Cursor.ai"],
};

export const PROJECTS = [
  {
    title: "Every-Hour Deliverability Report (Automated)",
    role: "Backend & Automation",
    description:
      "Hourly pipeline: Python tool → ClickHouse → AI summary → Zapier → Slack. Pulls deliverability metrics, generates concise OpenAI summaries of trends/spikes/anomalies, builds rich Slack Block Kit messages, and posts to Slack via Zapier for real-time monitoring—reducing manual reporting.",
    tech: [
      "Python",
      "ClickHouse (HTTP API/driver)",
      "OpenAI (text summary)",
      "Slack Block Kit",
      "Zapier Webhooks",
      "CRON",
      "Docker",
    ],
    github: "",
    demo: "",
  },
  {
    title: "EngageBay AI Copilot",
    role: "Full Stack Developer",
    description:
      "AI-powered CRM assistant that summarizes contact profiles, retrieves call & email history, and automates tasks using RAG, vector memory, and tool calling.",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "OpenAI LLMs",
      "React",
      "Tailwind CSS",
    ],
    github: "",
    demo: "",
  }
//   {
//     title: "DevOps CI/CD Pipeline Demo",
//     description:
//       "Automated containerized deployments using Docker, Kubernetes, and GitHub Actions across cloud environments.",
//     tech: ["Docker", "Kubernetes", "GitHub Actions", "GCP/Azure/AWS"],
//     github: "",
//     demo: "",
//   },
//   {
//     title: "CRM System Modules",
//     description:
//       "Scalable microservices for CRM features with Spring Boot, Kafka, and MongoDB.",
//     tech: ["Spring Boot", "Kafka", "MongoDB", "React"],
//     github: "",
//     demo: "",
//   },
] as const;

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "EngageBay Inc",
    location: "Hyderabad, India",
    period: "Feb 2024 - Present",
    bullets: [
      "Built and maintained scalable microservices using Java and Spring Boot.",
      "Used Kafka and OpenFeign for inter-service communication, improving scalability.",
      "Reduced message latency by ~30% through Kafka optimization and Azure Event Hub migration.",
      "Created reusable React components and hooks, improving UI consistency and development speed.",
      "Designed CI/CD workflows using GitHub Actions, Docker, and Kubernetes.",
      "Implemented multi-channel support (Email, SMS, WhatsApp, etc.), enhancing customer accessibility.",
      "Expanded into AI with LLM-based agents, RAG pipelines, and LangGraph workflows.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "B.Sc (MECs)",
    school: "Government City College, Hyderabad",
    year: "2022",
  },
  {
    title: "Intermediate (EET)",
    school: "Govt Jr College [B], Gajwel",
    year: "2019",
  },
  {
    title: "SSC",
    school: "ZPHS Shivampet",
    year: "2017",
  },
];

