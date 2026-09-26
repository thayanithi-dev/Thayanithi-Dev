export interface TechSection {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  ascii: string
  specs: { label: string; value: string }[]
  commands: string[]
}

export const techSections: TechSection[] = [
  {
    id: "about-me",
    number: "01",
    title: "About Me",
    subtitle: "Biography & Focus",
    description:
      "Full Stack & Cloud Engineer with proven experience designing and delivering resilient, distributed architectures across front-end, back-end, and cloud infrastructures. Adept in architecting AI/LLM-enabled platforms (RAG architectures, LangChain, vector retrieval) and deploying automated, zero-downtime CI/CD pipelines on AWS (EC2, Lambda) and GCP. Track record of building production SaaS systems handling high-volume data streams of 2+ billion records, publishing developer tooling to npm, and optimizing application throughput to improve operational efficiency by 40%.",
    ascii: `
    ┌──────────────────────────────────────────┐
    │  THAYANITHI S - FULL STACK & CLOUD ENG   │
    │  ┌──────────────────┐ ┌────────────────┐ │
    │  │ FULLSTACK & AI   │ │ CLOUD & DEVOPS │ │
    │  │ Next.js/RAG/LLMs │ │ AWS/GCP CI/CD  │ │
    │  └────────┬─────────┘ └────────┬───────┘ │
    │           │                    │         │
    │  ┌────────┴────────────────────┴───────┐ │
    │  │ DISTRIBUTED BACKENDS & BIG DATA     │ │
    │  │ Node, Java, Python, BigQuery, Mongo │ │
    │  └─────────────────────────────────────┘ │
    └──────────────────────────────────────────┘`,
    specs: [
      { label: "Location", value: "Namakkal / Sathyamangalam, Tamil Nadu, India" },
      { label: "Email", value: "thayanithi2006s@gmail.com" },
      { label: "Phone", value: "+91-9025391287" },
      { label: "Education", value: "B.E. CSE @ Bannari Amman Institute of Technology (8.09 CGPA)" },
      { label: "Focus", value: "Full Stack, AI/LLMs, Cloud Infra, Distributed Systems" },
    ],
    commands: [
      "$ whoami",
      "Thayanithi S - Full Stack & Cloud Engineer",
      "$ locate --region",
      "Namakkal / Sathyamangalam, Tamil Nadu, India",
      "$ cat summary.txt",
      "Building resilient distributed systems, AI/RAG platforms & high-throughput cloud pipelines.",
    ],
  },
  {
    id: "tech-stack",
    number: "02",
    title: "Tech Stack",
    subtitle: "Skills & Ecosystem",
    description:
      "Comprehensive multi-tier technical expertise spanning modern programming languages, AI/LLM engineering, cloud infrastructures, automated DevOps pipelines, and robust database architectures.",
    ascii: `
    [Languages] ─────────────── [AI & LLM Stack]
         │                           │
         ├───────[Java / Python]─────┼─────── [RAG / LangChain / LlamaIndex]
         ├───────[TypeScript / JS]───┼─────── [ChromaDB / Pinecone / OpenAI]
         ├───────[C / SQL]───────────┼─────── [Semantic Search / Fine-Tuning]
         │                           │
    [Cloud & DevOps] ────────── [Fullstack & Data]
         │                           │
         ├───────[AWS: EC2/Lambda/S3]┼─────── [Next.js / React / React Native]
         ├───────[GCP: GCS/BigQuery]─┼─────── [Node.js / Express / Fastify]
         └───────[CI/CD / Docker]────└─────── [PostgreSQL / MongoDB / MySQL]`,
    specs: [
      { label: "Languages", value: "Java, Python, TypeScript, JavaScript, C, SQL" },
      { label: "AI & LLM Stack", value: "RAG, LangChain, LlamaIndex, ChromaDB, Pinecone, Hugging Face, OpenAI API, Semantic Search" },
      { label: "Cloud & DevOps", value: "AWS (EC2, Lambda, S3, IAM, CloudWatch), GCP (GCS, BigQuery, VMs), Docker, GitHub Actions, Nginx, Cloudflare" },
      { label: "Fullstack & DBs", value: "Next.js, React.js, Vue.js, React Native, Node.js, Express, Fastify, PostgreSQL, MongoDB, MySQL" },
    ],
    commands: [
      "$ tech-stack --scan",
      "Scanning active engineering modules...",
      "Java/Python [95%] TypeScript [100%] AI/RAG [90%] AWS/GCP [90%] Next.js [100%]",
      "$ git --version",
      "git version 2.43.0 with GitHub Actions automated CI/CD",
    ],
  },
  {
    id: "experience",
    number: "03",
    title: "Experience",
    subtitle: "Internship History",
    description:
      "Chronological ledger of professional software engineering and cloud infrastructure roles across production SaaS environments, high-volume data streams, and client applications.",
    ascii: `
     Eqrev (Jun-Dec 2026)      Eqrev (Jan-Dec 2025)
    ┌──────────────────────┐  ┌──────────────────────┐
    │ Role: SDE Intern     │─>│ Role: Software Dev   │
    │ DevOps, Infra & Data │  │ SaaS & Quick Commerce│
    │ 2B+ Records Pipeline │  │ Zepto/Blinkit/Swiggy │
    └──────────────────────┘  └──────────────────────┘
               │                         │
               ├─────────> ThinkUni ─────┤
               │           (Oct 25-Jan 26)│
               │           Frontend Eng  │
               │                         │
               └─────────> Crayon'd ─────┘
                           (Sep 24-Apr 25)
                           Full Stack Eng`,
    specs: [
      { label: "Eqrev (DevOps/Infra)", value: "Software Engineer Intern | Jun 2026 – Dec 2026 (2B+ Records on GCP)" },
      { label: "Eqrev (Product)", value: "Software Developer | Jan 2025 – Dec 2025 (40% Efficiency Boost)" },
      { label: "ThinkUni", value: "Frontend Engineer | Oct 2025 – Jan 2026 (1,000+ Active Users, RBAC)" },
      { label: "Crayon'd", value: "Full Stack Engineer | Sep 2024 – Apr 2025 (2+ Client Web Products, BDD)" },
    ],
    commands: [
      "$ experience query --details",
      "Eqrev (Infra): Scheduled extraction/transformation of 2B+ records on GCS & BigQuery, CI/CD pipelines.",
      "Eqrev (SaaS): Automated backend data pipelines reducing manual effort by 60% for Zepto/Blinkit/Instamart.",
      "ThinkUni: Built 30+ responsive UI components with strict RBAC for 1,000+ active users.",
      "Crayon'd: Built 2+ client Next.js apps with BDD testing enabling 20% faster feature delivery.",
    ],
  },
  {
    id: "education",
    number: "04",
    title: "Education",
    subtitle: "Academic Background",
    description:
      "Academic foundation at Bannari Amman Institute of Technology and Malar Matriculation Higher Secondary School, building rigorous competencies in computer science, software engineering, and systems architecture.",
    ascii: `
    Bannari Amman Institute of Technology
    (Sep 2023 - Apr 2027) ──> B.E. Computer Science & Engineering
                                 │
                          CGPA Compilation: 8.09 / 10.0
                                 │
                         ┌───────┴───────┐
                         │ Current CGPA  │
                         │ ┌──┬──┬──┐    │
                         │ │8.│0 │9 │    │
                         │ └──┴──┴──┘    │
                         └───────────────┘
    Malar Matric Higher Secondary (2021 - 2023) ──> HSC: 92.38%`,
    specs: [
      { label: "Undergraduate", value: "Bannari Amman Institute of Technology, Sathyamangalam (2023 - 2027)" },
      { label: "Degree & CGPA", value: "B.E. Computer Science and Engineering — 8.09 CGPA" },
      { label: "Higher Secondary", value: "Malar Matriculation Higher Secondary School, Namakkal (2021 - 2023)" },
      { label: "HSC Percentage", value: "Higher Secondary Certificate (HSC) — 92.38%" },
    ],
    commands: [
      "$ compile --degree",
      "Degree: Bachelor of Engineering in Computer Science and Engineering (8.09 CGPA)",
      "$ compile --school",
      "Higher Secondary Certificate (HSC): 92.38% - Malar Matriculation Higher Secondary School",
      "$ compile --core-courses",
      "Data Structures & Algorithms, Distributed Systems, Cloud Architecture, DBMS, Operating Systems",
    ],
  },
  {
    id: "certifications",
    number: "05",
    title: "Achievements",
    subtitle: "Credentials & Milestones",
    description:
      "Verified competitive milestones, open source contributions, elite technical certifications, and hackathon recognitions validating continuous algorithmic and architectural excellence.",
    ascii: `
    SIH 2025 Shortlisted ──> Smart India Hackathon
                                │
                         LeetCode: 300+ Solved (thayanithi04)
                                │
                         1,500+ GitHub Commits
                                │
                         NPTEL Java Elite: 90%
                                │
                         ┌──────┴──────┐
                         │ Credentials │
                         │ ┌──┬──┬──┐  │
                         │ │✓ │✓ │✓ │  │
                         │ └──┴──┴──┘  │
                         └─────────────┘`,
    specs: [
      { label: "Smart India Hackathon", value: "Shortlisted on Waiting List for SIH 2025" },
      { label: "LeetCode Mastery", value: "300+ Problems Solved (Profile: thayanithi04)" },
      { label: "GitHub Velocity", value: "1,500+ Commits & Active Open-Source Maintainer" },
      { label: "NPTEL Java Elite", value: "90% Elite Certification in System Design & Java" },
      { label: "Sakthi Hackathon", value: "Finalist from a competitive pool of 1,000+ engineers" },
    ],
    commands: [
      "$ query --achievements",
      "SIH 2025: Solution architecture shortlisted for national evaluation.",
      "LeetCode: 300+ algorithms optimized (thayanithi04).",
      "GitHub: 1,500+ commits across fullstack & cloud platforms.",
      "NPTEL: 90% (Elite) Object-Oriented Java & System Design.",
    ],
  },
  {
    id: "core-engineering",
    number: "06",
    title: "Developer Tools",
    subtitle: "Open-Source & Systems",
    description:
      "Designing developer tooling, open-source packages, and intelligent automation bots. High-performance runtime heuristics, execution profiling, and reliable scheduling engines.",
    ascii: `
        reqtimeline (npm) ──┐
                            ├──[PERF PROFILER]──┐
        P50/P99 Latency   ──┘                   │
                                                ├──[PRODUCTION TOOLS]──> npm / Bot API
        Telegram Bot      ──┐                   │
                            ├──[CRON/TIMEZONE]──┘
        MongoDB Polling   ──┘
 
    Profiling Metrics:
    sub-ms execution | slow step detection | visual call tree`,
    specs: [
      { label: "reqtimeline (npm)", value: "Zero-dependency Express profiler, sub-ms tracking, P50-P99 latency scoring" },
      { label: "Telegram Reminder Bot", value: "Persistent NLP time-query parser, MongoDB cron polling engine" },
      { label: "AI/LLM Pipelines", value: "LangChain, RAG vector retrieval (ChromaDB, Pinecone), OpenAI API" },
      { label: "Data Scale", value: "2+ Billion records processed across Google Cloud BigQuery & GCS" },
    ],
    commands: [
      "$ npx reqtimeline --status",
      "Express request lifecycle tracking active. Sub-millisecond step profiling: OK",
      "$ bot --status telegram-reminder",
      "Fault-tolerant node-cron polling operational with Luxon timezone resolution.",
    ],
  },
  {
    id: "system-architecture",
    number: "07",
    title: "System Architecture",
    subtitle: "Cloud & Concurrency",
    description:
      "Architecting resilient multi-cloud infrastructures on AWS and GCP with automated zero-downtime CI/CD pipelines, WebSocket peer streams, and non-blocking asynchronous runtimes.",
    ascii: `
    Next.js SSR/ISR ──┐         ┌── AWS EC2 / Lambda
                      │         │
    Node.js EventLoop ┼──[ENG]──┼── GCP VMs & BigQuery
                      │    │    │
    WebSockets/WebRTC ──┘    │    └── Zero-Downtime CI/CD
                           │
                     ┌─────┴─────┐
                     │ Parallel  │
                     │ Workloads │
                     │ [|||||||] │
                     └───────────┘`,
    specs: [
      { label: "Cloud Infra", value: "AWS (EC2, Lambda, S3, IAM, CloudWatch) & GCP (Compute Engine, GCS, BigQuery)" },
      { label: "CI/CD & DevOps", value: "GitHub Actions automated pipelines, Nginx reverse proxy, Cloudflare edge" },
      { label: "Real-Time & AI", value: "WebRTC peer engine, WebSockets, RAG vector embeddings, AI proctoring" },
      { label: "Data Throughput", value: "2B+ records ingested, 40% report speedup, sub-100ms API latency" },
    ],
    commands: [
      "$ infra --inspect --aws",
      "AWS EC2 instances & Lambda serverless triggers: HEALTHY",
      "$ cicd --verify github-actions",
      "Automated zero-downtime test & deployment pipeline: PASSING",
    ],
  },
  {
    id: "featured-projects",
    number: "08",
    title: "Featured Projects",
    subtitle: "Selected Works & Products",
    description:
      "Enterprise systems, intelligent AI/LLM ecosystems, industrial control portals, tourist safety applications, and quick commerce analytics platforms.",
    ascii: `
    ┌──────────────────────────────────────────┐
    │     THAYANITHI S - FEATURED PRODUCTS     │
    ├──────────────────────────────────────────┤
    │     AETHERA - AI LEARNING & RAG SYSTEM   │
    ├──────────────────────────────────────────┤
    │     CNC VAULT - INDUSTRIAL PARAMETER HUB │
    ├──────────────────────────────────────────┤
    │     DEV RANK - AI DEVELOPER BENCHMARK    │
    ├──────────────────────────────────────────┤
    │     SAHA YATRI - TOURIST SAFETY (SIH 25) │
    ├──────────────────────────────────────────┤
    │     EQ REV - QUICK COMMERCE ANALYTICS    │
    ├──────────────────────────────────────────┤
    │     REQTIMELINE - NPM EXPRESS PROFILER   │
    └──────────────────────────────────────────┘`,
    specs: [
      { label: "Aethera", value: "React, Node.js, AWS (EC2/Lambda), RAG, LangChain, WebRTC, AI Proctoring" },
      { label: "CNC Vault", value: "Next.js, TypeScript, Express, MongoDB, Google Cloud Storage (70% Reliability Up)" },
      { label: "Dev Rank", value: "Next.js, TypeScript, Express, MongoDB, GitHub/LeetCode Scrapers, LLM Scoring" },
      { label: "Saha Yatri", value: "React Native, Leaflet Maps, Gradle, REST APIs, i18n, SOS Telemetry (SIH 2025)" },
      { label: "Eq Rev", value: "React.js, Node.js, Express, Google BigQuery, Cloudflare, Zepto/Blinkit/Instamart" },
      { label: "reqtimeline", value: "Node.js, Express, CLI, Performance Heuristics (Published on npm)" },
    ],
    commands: [
      "$ product inspect aethera",
      "Aethera: Adaptive RAG Tutor, Web IDE, AI vision proctoring & WebRTC peer engine.",
      "$ product inspect cnc-vault",
      "CNC Vault: Centralized backup & parameter system lifting reliability by 70%.",
      "$ product inspect saha-yatri",
      "Saha Yatri: SIH 2025 tourist safety app with 1-touch SOS & Leaflet map tracking.",
      "$ product inspect reqtimeline",
      "reqtimeline: npm install reqtimeline - sub-ms request lifecycle profiler.",
    ],
  },
]

export const navLinks = techSections.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title,
}))
