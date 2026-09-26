import { StaticImageData } from "next/image"
import bitlinks1Img from "@/assets/projects/BITLINKS/BITLINKS_1.png"
import bitlinks2Img from "@/assets/projects/BITLINKS/BITLINKS_2.png"

import cnc1Img from "@/assets/projects/CNC/CNC_1.png"
import cnc2Img from "@/assets/projects/CNC/CNC_2.png"
import cnc3Img from "@/assets/projects/CNC/CNC_3.png"
import cnc4Img from "@/assets/projects/CNC/CNC_4.png"
import cnc5Img from "@/assets/projects/CNC/CNC_5.png"
import cnc6Img from "@/assets/projects/CNC/CNC_6.png"

import devrank1Img from "@/assets/projects/DEVRANK/DEVRANK_1.png"
import devrank2Img from "@/assets/projects/DEVRANK/DEVRANK_2.png"
import devrank3Img from "@/assets/projects/DEVRANK/DEVRANK_3.png"
import devrank4Img from "@/assets/projects/DEVRANK/DEVRANK_4.png"
import devrank5Img from "@/assets/projects/DEVRANK/DEVRANK_5.png"
import devrank6Img from "@/assets/projects/DEVRANK/DEVRANK_6.png"

import eqrev1Img from "@/assets/projects/EQREV/EQREV_1.png"

import progressiq1Img from "@/assets/projects/PROGRESSIQ/PROGRESSIQ_1.png"
import progressiq2Img from "@/assets/projects/PROGRESSIQ/PROGRESSIQ_2.png"
import progressiq3Img from "@/assets/projects/PROGRESSIQ/PROGRESSIQ_3.png"
import progressiq4Img from "@/assets/projects/PROGRESSIQ/PROGRESSIQ_4.png"
import progressiq5Img from "@/assets/projects/PROGRESSIQ/PROGRESSIQ_5.png"
import progressiq6Img from "@/assets/projects/PROGRESSIQ/PROGRESSIQ_6.png"

export interface ProjectMetric {
  label: string
  value: string
  description: string
}

export interface TechCategory {
  category: string
  items: string[]
}

export interface ProjectFeature {
  title: string
  description: string
  codeSnippet?: string
}

export interface ProjectDetail {
  slug: string
  assetPrefix?: string
  level: string
  name: string
  tagline: string
  category: string
  timeline: string
  role: string
  status: string
  url: string
  githubUrl?: string
  shortDesc: string
  fullDescription: string
  problemStatement: string
  solutionOverview: string
  image: StaticImageData
  gallery?: StaticImageData[]
  metrics: ProjectMetric[]
  keyFeatures: ProjectFeature[]
  techStack: TechCategory[]
  architectureAscii: string
  terminalLogs: string[]
}

export const projectsData: Record<string, ProjectDetail> = {
  "aethera": {
    slug: "aethera",
    assetPrefix: "AETHERA",
    level: "PROJ_05",
    name: "AETHERA",
    tagline: "INTELLIGENT LEARNING & AI ASSESSMENT ECOSYSTEM",
    category: "AI Systems / Educational Cloud Ecosystem",
    timeline: "May 2024 – Present",
    role: "Lead Fullstack & AI Cloud Architect",
    status: "ACTIVE_DEVELOPMENT",
    url: "https://github.com/thayanithi-dev",
    githubUrl: "https://github.com/thayanithi-dev",
    shortDesc: "Scalable AI learning ecosystem featuring adaptive RAG tutoring, integrated web IDE, AI vision proctoring, Skill Radar analytics, and low-latency WebRTC peer messaging.",
    fullDescription: "Aethera is a comprehensive cloud-native learning and AI assessment ecosystem. Deployed on AWS EC2 virtual machines backed by serverless AWS Lambda triggers and automated GitHub Actions CI/CD pipelines, Aethera combines an adaptive RAG Tutor (LangChain + vector embeddings), a real-time web IDE, computer vision malpractice detection in Java and Python, and low-latency encrypted WebRTC peer communication.",
    problemStatement: "Traditional learning management systems lack contextual, personalized AI guidance, secure automated code assessment with malpractice prevention, and integrated real-time peer collaboration.",
    solutionOverview: "Architected a distributed fullstack platform uniting LangChain RAG vector retrieval, computer vision proctoring models, automated CI/CD deployment on AWS, and WebSockets/WebRTC for interactive code execution and peer study sessions.",
    image: progressiq1Img,
    gallery: [progressiq1Img, progressiq2Img, progressiq3Img],
    metrics: [
      { label: "Deployment Uptime", value: "99.9%", description: "Zero-downtime CI/CD releases on AWS EC2 & Lambda" },
      { label: "RAG Retrieval Speed", value: "< 250ms", description: "Sub-second contextual response with vector embeddings" },
      { label: "Proctoring Vision", value: "Java & Python", description: "Real-time automated code evaluation & malpractice detection" },
      { label: "WebRTC Latency", value: "< 45ms", description: "Low-latency encrypted peer audio/video and messaging" }
    ],
    keyFeatures: [
      {
        title: "Adaptive RAG Tutor & Web IDE",
        description: "Contextual vector retrieval engine using LangChain and embeddings for personalized quiz generation and interactive documentation Q&A."
      },
      {
        title: "AI Proctoring Vision Pipeline",
        description: "Automated vision evaluation pipeline detecting malpractice signals and evaluating code execution in Java and Python."
      },
      {
        title: "Skill Radar Analytics Dashboard",
        description: "Multi-dimensional performance visualization mapping learner velocity, conceptual mastery, and code proficiency."
      },
      {
        title: "WebRTC Encrypted Peer Engine",
        description: "Low-latency WebSocket & WebRTC peer mesh enabling real-time multi-user study rooms, media sharing, and video sessions."
      }
    ],
    techStack: [
      { category: "Frontend & Realtime", items: ["React.js", "Next.js", "WebRTC", "Socket.io", "Tailwind CSS", "Framer Motion"] },
      { category: "AI & LLM Pipeline", items: ["LangChain", "Vector Databases", "OpenAI API", "Semantic Search", "Prompt Engineering"] },
      { category: "Backend Architecture", items: ["Node.js", "Express.js", "Python FastAPIs", "JWT Auth", "REST APIs"] },
      { category: "Cloud & DevOps", items: ["AWS (EC2, Lambda, S3)", "GitHub Actions CI/CD", "Docker", "CloudWatch"] }
    ],
    architectureAscii: `
 ┌────────────────────────────────────────────────────────────────────────┐
 │                          AETHERA ARCHITECTURE                          │
 ├────────────────────────────────────────────────────────────────────────┤
 │  Learning Portal & Web IDE (React.js + WebRTC + Skill Radar Canvas)    │
 │  ├── Adaptive RAG Tutor Query Interface                                │
 │  └── Realtime Code Execution Console                                   │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │ (WSS / WebRTC / REST)
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  AWS Cloud Compute Tier & AI Microservices                             │
 │  ├── AWS EC2 (Node.js API Gateway & WebRTC Signaling Engine)          │
 │  ├── Serverless AWS Lambda (Async Proctoring & AI Evaluation)          │
 │  └── LangChain Vector Retrieval Pipeline (ChromaDB / Embeddings)       │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Data & Storage Layer                                                  │
 │  ├── MongoDB Atlas (User Profiles, Learning Paths, Assessments)        │
 │  └── AWS S3 (Session Recordings, Proctoring Logs & Artifacts)          │
 └────────────────────────────────────────────────────────────────────────┘`,
    terminalLogs: [
      "$ aethera-engine status --aws-cluster",
      "[SYS_HEALTH] AWS EC2 Instances: 2 Active | Lambda Handlers: HEALTHY",
      "$ aethera-engine rag query --topic 'Distributed Consensus in Go'",
      "[RAG_PIPELINE] Vector embedding matched in 185ms (Similarity: 0.94)",
      "$ aethera-engine proctor --eval-session live",
      "[VISION_PROCTOR] Signal scan completed: 0 Malpractice indicators",
      "[SUCCESS] Aethera intelligent learning ecosystem running."
    ]
  },
  "cnc-vault": {
    slug: "cnc-vault",
    assetPrefix: "CNC",
    level: "PROJ_04",
    name: "CNC VAULT",
    tagline: "INDUSTRIAL CNC MACHINERY CONTROL HUB & SECURE PROGRAM VAULT",
    category: "Industrial IoT / Machine Control Hub",
    timeline: "2024 – 2025",
    role: "Full Stack & Cloud Developer",
    status: "PRODUCTION_ONLINE",
    url: "https://cnc-machines.vercel.app/",
    githubUrl: "https://github.com/thayanithi-dev",
    shortDesc: "Enterprise CNC/PLC backup system with automated version control, role-based machine assignment, and conflict-handling workflows on Google Cloud Storage (GCS). Lifted reliability by 70%.",
    fullDescription: "CNC Vault is an industrial-grade cloud management platform built to centralize, version-control, and secure G-code machine programs and PLC logic parameters across manufacturing plants. Designed for precision engineering facilities, CNC Vault replaces error-prone USB transfers with encrypted, audited cloud distribution on Google Cloud Storage.",
    problemStatement: "Manufacturing facilities suffer from machine program version mismatches, unauthorized G-code modifications, machine downtime during transfers, and lack of revision history.",
    solutionOverview: "Engineered a web application with Next.js, Express, MongoDB, and GCS that maintains cryptographic hashes of machine code, enforces strict machine-operator permission matrices, and streamlines program deployments.",
    image: cnc1Img,
    gallery: [cnc1Img, cnc2Img, cnc3Img, cnc4Img, cnc5Img, cnc6Img],
    metrics: [
      { label: "Operational Reliability", value: "+70%", description: "Increase in manufacturing uptime & program integrity" },
      { label: "Machine Downtime", value: "-45%", description: "Eliminated program mismatch machine crashes" },
      { label: "Machine Compatibility", value: "Universal", description: "Supports Fanuc, Siemens, Haas & Heidenhain G-code" },
      { label: "Cloud Security", value: "AES-256 / GCS", description: "Encrypted GCS storage & SHA-256 audit trails" }
    ],
    keyFeatures: [
      {
        title: "G-Code Version Control & Conflict Handling",
        description: "Complete revision tracking for NC and PLC programs with side-by-side diff viewers, conflict resolution, and instant rollbacks."
      },
      {
        title: "Role-Based Machine Assignment",
        description: "Granular authorization matrix ensuring operators can only execute verified, engineer-approved program hashes."
      },
      {
        title: "Real-time Diagnostics & Failure Alerts",
        description: "Live dashboard tracking machine availability, active program assignments, and scheduled maintenance windows."
      },
      {
        title: "Cryptographic Code Verification",
        description: "SHA-256 hash checks verifying that file contents delivered to machine terminals have not been corrupted."
      }
    ],
    techStack: [
      { category: "Web Stack", items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide Icons"] },
      { category: "Backend Systems", items: ["Node.js", "Express.js", "GCP Compute Engine", "REST API Layer"] },
      { category: "Database & Storage", items: ["MongoDB Atlas", "Google Cloud Storage (GCS)", "AES-256 File Encryption"] },
      { category: "DevOps & Cloud", items: ["Google Cloud Platform", "Vercel", "GitHub Actions CI/CD"] }
    ],
    architectureAscii: `
 ┌────────────────────────────────────────────────────────────────────────┐
 │                        CNC VAULT ARCHITECTURE                          │
 ├────────────────────────────────────────────────────────────────────────┤
 │  Industrial Control Web UI (Next.js + TypeScript + shadcn/ui)         │
 │  ├── G-Code Viewer & Code Diff Engine                                 │
 │  └── Machine Allocation Dashboard                                     │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │ (HTTPS REST + Hash Verification)
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Express Backend Service & Secure Hash Verification Vault              │
 │  ├── Encryption Engine: AES-256 G-Code File Cipher                    │
 │  ├── Audit Log Engine: Operator Action & Hash Tracker                 │
 │  └── Access Controller: Role & Machine ID RBAC                       │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Industrial Storage & Cloud Infrastructure                            │
 │  ├── MongoDB Atlas (Machine Profiles, Operator Logs, Schemas)         │
 │  └── GCP Cloud Storage (Encrypted G-Code & PLC Logic Backups)          │
 └────────────────────────────────────────────────────────────────────────┘`,
    terminalLogs: [
      "$ cnc-vault status --machines",
      "[SYS_HEALTH] All 12 CNC Milling & Turning Centers Online.",
      "$ cnc-vault program verify --id NC_PART_8892 --hash sha256",
      "[HASH_CHECK] Computed: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "[HASH_CHECK] Match Status: VERIFIED (100% Integrity)",
      "$ cnc-vault audit --latest",
      "[AUDIT_LOG] Operator #402 loaded NC_PART_8892 to Haas VF-2 SS",
      "[SUCCESS] CNC Machine Vault operational (70% reliability boost)."
    ]
  },
  "dev-rank": {
    slug: "dev-rank",
    assetPrefix: "DEVRANK",
    level: "PROJ_03",
    name: "DEV RANK",
    tagline: "AI-POWERED DEVELOPER RANKING & BENCHMARKING PLATFORM",
    category: "Developer Tools / AI Benchmarking",
    timeline: "2024 – 2025",
    role: "Lead Fullstack Developer",
    status: "PRODUCTION_ONLINE",
    url: "http://dev-rank.vercel.app/",
    githubUrl: "https://github.com/thayanithi-dev",
    shortDesc: "Developer benchmarking engine collecting GitHub and LeetCode activity using secure OTP-verified scrapers and LLM scoring heuristics for candidate-recruiter discovery.",
    fullDescription: "Dev Rank is an AI-powered developer profile aggregation and ranking platform. By integrating external APIs and web scraping routines, Dev Rank synthesizes developer activity across GitHub and LeetCode into unified engineering rank scores using LLM scoring heuristics, powering automated talent discovery.",
    problemStatement: "Recruiters and community leads lack a single objective metric to compare a developer's real-world code contributions alongside algorithmic problem-solving skills.",
    solutionOverview: "Constructed a profile parser and ranking engine with Next.js, Express, MongoDB, and LLMs that computes normalized rank metrics based on commit history, repository stars, codebase structure, and LeetCode problem difficulty.",
    image: devrank1Img,
    gallery: [devrank1Img, devrank2Img, devrank3Img, devrank4Img, devrank5Img, devrank6Img],
    metrics: [
      { label: "Profile Sources", value: "GitHub & LeetCode", description: "Aggregated coding & algorithmic metrics" },
      { label: "LLM Heuristics", value: "Codebase Analysis", description: "Evaluates architectural structure & algorithmic quality" },
      { label: "Scraping Latency", value: "< 1.2s", description: "Secure, OTP-verified web scrapers" },
      { label: "Recruiter Discovery", value: "Automated", description: "Connecting top verified engineering talent" }
    ],
    keyFeatures: [
      {
        title: "Multi-Platform Profile Fetcher",
        description: "Secure web scraping engine gathering public metrics from GitHub repositories and LeetCode profile APIs."
      },
      {
        title: "LLM Scoring Heuristics",
        description: "AI-powered scoring formula evaluating codebase design patterns, documentation quality, and problem-solving mastery."
      },
      {
        title: "Recruiter Discovery Hub",
        description: "Filterable community leaderboards enabling instant searching by stack, ranking tier, or institution."
      },
      {
        title: "Visual Badge Generator",
        description: "Embeddable SVG cards displaying rank metrics for developer README profiles."
      }
    ],
    techStack: [
      { category: "Frontend Stack", items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Recharts"] },
      { category: "AI & Scraping", items: ["LLM Scoring Models", "Custom Web Scraper", "Rapid API", "REST APIs"] },
      { category: "Backend & Storage", items: ["Node.js", "Express.js", "MongoDB Atlas", "JWT Auth"] },
      { category: "Deployment", items: ["Vercel Edge Engine", "GitHub Actions"] }
    ],
    architectureAscii: `
 ┌────────────────────────────────────────────────────────────────────────┐
 │                         DEV RANK ARCHITECTURE                          │
 ├────────────────────────────────────────────────────────────────────────┤
 │  Developer Ranking Portal (Next.js + TypeScript + Tailwind)            │
 │  ├── Leaderboard Table & Search Filtering Matrix                      │
 │  └── Realtime Profile Card Viewers                                     │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │ (API Calls)
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Data Collector & LLM Scoring Engine                                   │
 │  ├── GitHub API Collector (Commits, Stars, PRs, Repos)                │
 │  ├── LeetCode API Scraper (Easy, Medium, Hard Solved Counts)          │
 │  └── LLM Evaluator: Code Structure & Algorithmic Heuristics           │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Storage & Cache                                                       │
 │  └── MongoDB Atlas (Rankings Cache & Historical Score Logs)            │
 └────────────────────────────────────────────────────────────────────────┘`,
    terminalLogs: [
      "$ dev-rank fetch --user thayanithi-dev",
      "[FETCH] GitHub Repos: 45 | Total Stars: 28 | Commits: 1,500+",
      "$ dev-rank fetch --leetcode thayanithi04",
      "[FETCH] Problems Solved: 300+ (Easy: 120, Med: 155, Hard: 25)",
      "$ dev-rank evaluate-llm --user thayanithi-dev",
      "[LLM_EVAL] Codebase Quality Score: 95.8% | Algorithmic Rank: TIER_1",
      "[SUCCESS] Dev Rank talent engine online."
    ]
  },
  "saha-yatri": {
    slug: "saha-yatri",
    assetPrefix: "SAHAYATRI",
    level: "PROJ_02",
    name: "SAHA YATRI",
    tagline: "TOURIST SAFETY & SMART TRAVEL MOBILE APP (SIH 2025)",
    category: "Mobile Systems / Tourist Safety & Emergency Telemetry",
    timeline: "2024 – 2025",
    role: "Mobile Systems Engineer",
    status: "PROTOTYPE_COMPLETE",
    url: "https://github.com/thayanithi-dev",
    githubUrl: "https://github.com/thayanithi-dev",
    shortDesc: "Cross-platform travel safety mobile application designed for SIH 2025, integrating interactive Leaflet maps, 1-touch SOS emergency dispatch, and multi-language localization.",
    fullDescription: "Saha Yatri is a cross-platform mobile application developed for the Smart India Hackathon (SIH 2025). Designed to protect tourists in unfamiliar terrains, Saha Yatri features real-time GPS telemetry on interactive Leaflet maps, instant 1-touch SOS rescue alerts transmitted to authorities, on-demand transport, local food ordering, and dynamic multi-language (i18n) localization.",
    problemStatement: "Tourists traveling in remote or unfamiliar destinations struggle with emergency responsiveness, language barriers, and lack of unified transportation and safety routing.",
    solutionOverview: "Built a responsive mobile application with React Native, Leaflet Maps, and RESTful APIs incorporating instantaneous SOS location broadcasting, emergency contact syncing, and offline-capable travel utilities.",
    image: bitlinks1Img,
    gallery: [bitlinks1Img, bitlinks2Img],
    metrics: [
      { label: "Hackathon Tier", value: "SIH 2025", description: "Shortlisted on Waiting List for National Evaluation" },
      { label: "SOS Response Trigger", value: "< 100ms", description: "Instant location dispatch to rescue teams & emergency contacts" },
      { label: "Map Rendering", value: "60 FPS", description: "Interactive Leaflet maps with offline layer caching" },
      { label: "Localization", value: "Multi-Lang (i18n)", description: "Dynamic language translation across UI modules" }
    ],
    keyFeatures: [
      {
        title: "Instant One-Touch SOS Emergency Dispatch",
        description: "High-priority rescue broadcast transmitting live GPS coordinates, battery level, and user identity to local emergency services."
      },
      {
        title: "Interactive Leaflet Maps & Location Telemetry",
        description: "Smooth map rendering with route calculation, safety zone overlays, and real-time tourist location tracking."
      },
      {
        title: "Auxiliary Travel Utilities",
        description: "Integrated on-demand car rental booking, authentic local food ordering, and verified regional guide directories."
      },
      {
        title: "Dynamic Multi-Language Localization (i18n)",
        description: "Seamless on-the-fly UI language switching to eliminate communication hurdles for domestic and international travelers."
      }
    ],
    techStack: [
      { category: "Mobile Framework", items: ["React Native", "Expo / Gradle", "JavaScript / TypeScript", "Tailwind CSS"] },
      { category: "Geospatial & Mapping", items: ["Leaflet Maps", "OpenStreetMap Telemetry", "GPS Geolocation APIs"] },
      { category: "Backend & Emergency APIs", items: ["Node.js", "Express.js", "MongoDB", "Twilio / SMS Gateway", "i18n"] },
      { category: "Tooling", items: ["Android Studio", "Postman", "Git / GitHub Actions"] }
    ],
    architectureAscii: `
 ┌────────────────────────────────────────────────────────────────────────┐
 │                        SAHA YATRI ARCHITECTURE                         │
 ├────────────────────────────────────────────────────────────────────────┤
 │  React Native Mobile App (Leaflet Maps + SOS Dispatch + i18n Engine)   │
 │  ├── Real-time GPS Geolocation Tracker                                 │
 │  └── One-Touch Emergency Dispatch Trigger                              │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │ (Encrypted REST APIs)
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Emergency Telemetry & Services Gateway (Node.js / Express)            │
 │  ├── SOS Router: SMS & Authority Rescue Dispatch                       │
 │  ├── Mapping Controller: Leaflet Routing & Safe Zone Polygon Engine    │
 │  └── Travel Utilities: Car Rental & Food Ordering APIs                 │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Database & Telemetry Storage                                          │
 │  └── MongoDB Atlas (Tourist Profiles, SOS Event Logs, Geo-Fencing Data)│
 └────────────────────────────────────────────────────────────────────────┘`,
    terminalLogs: [
      "$ sahayatri-gps ping --device tourist-node-91",
      "[GPS_LOCK] Lat: 11.5034, Long: 77.2444 | Accuracy: ±3m",
      "$ sahayatri-sos trigger --mode emergency",
      "[EMERGENCY_DISPATCH] SOS telemetry broadcasted to 3 verified contacts in 82ms.",
      "[SUCCESS] Saha Yatri safety engine operational."
    ]
  },
  "eq-rev": {
    slug: "eq-rev",
    assetPrefix: "EQREV",
    level: "PROJ_01",
    name: "EQ REV",
    tagline: "QUICK COMMERCE GROWTH PLATFORM FOR D2C BRANDS",
    category: "SaaS Platform / E-Commerce Intelligence",
    timeline: "Jan 2025 – Dec 2025",
    role: "Software Developer (Product & Platform)",
    status: "PRODUCTION_ONLINE",
    url: "https://app.eqrev.com/",
    githubUrl: "https://github.com/thayanithi-dev",
    shortDesc: "Quick Commerce analytics platform delivering pin-code metrics across 1,000+ stores on Zepto, Blinkit, and Swiggy Instamart for leading D2C brands (Mee Mee, Ramraj, Underneat).",
    fullDescription: "EQ REV is an enterprise SaaS analytics platform engineered specifically for D2C brands scaling on instant quick-commerce platforms like Zepto, Blinkit, and Swiggy Instamart. The system ingests and processes massive location data streams across Google BigQuery and GCS, reducing manual effort by 60% and improving report generation efficiency by 40%.",
    problemStatement: "Brands selling on Quick Commerce platforms face complete dark spots regarding hyper-local demand, pin-code inventory stockouts, and regional channel analytics.",
    solutionOverview: "Architected the complete production full-stack web application across 3 core modules using React.js and Node.js/Express REST APIs, integrating Google BigQuery for real-time aggregation queries and Cloudflare for edge security.",
    image: eqrev1Img,
    gallery: [eqrev1Img],
    metrics: [
      { label: "Stores Analyzed", value: "1,000+", description: "Hyper-local store pin codes tracked in real-time" },
      { label: "Data Scale", value: "2B+ Records", description: "Ingestion and extraction across GCS & BigQuery" },
      { label: "Efficiency Gain", value: "+40%", description: "Report generation velocity acceleration" },
      { label: "Manual Effort Reduction", value: "-60%", description: "Automated backend data pipelines" }
    ],
    keyFeatures: [
      {
        title: "Hyper-Local Pin Code Insights",
        description: "Interactive heatmaps and data grids mapping store performance and demand patterns to exact regional postal codes."
      },
      {
        title: "Multi-Platform Aggregation",
        description: "Unified analytics dashboard comparing revenue velocity, SKU performance, and stockouts across Zepto, Blinkit, and Instamart."
      },
      {
        title: "Automated Backend Data Pipelines",
        description: "Automated ETL extraction and transformation scheduling reducing manual processing overhead by 60%."
      },
      {
        title: "Edge Security & Role-Based Authentication",
        description: "Cloudflare edge security acceleration paired with secure OTP login and multi-tier access control."
      }
    ],
    techStack: [
      { category: "Frontend Stack", items: ["React.js", "Chart.js", "Recharts", "Tailwind CSS", "Hero UI", "Zustand"] },
      { category: "Backend Architecture", items: ["Node.js", "Express.js", "REST APIs", "Cloudflare Workers"] },
      { category: "Database & Warehouse", items: ["Google BigQuery", "MongoDB Atlas", "PostgreSQL", "Google Cloud Storage (GCS)"] },
      { category: "Cloud & Security", items: ["Google Cloud Platform (GCP)", "Cloudflare Edge", "JWT / OTP Auth"] }
    ],
    architectureAscii: `
 ┌────────────────────────────────────────────────────────────────────────┐
 │                         EQ REV SAAS ARCHITECTURE                       │
 ├────────────────────────────────────────────────────────────────────────┤
 │  Brand Analytics Portal (React.js + Hero UI + Chart.js / Recharts)     │
 │  ├── Pin Code Data Grid & Filter Controls                             │
 │  └── Zustand Hydrated State Store                                      │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │ (Secure REST / JWT APIs)
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Express / Node.js Microservices Layer                                 │
 │  ├── Auth Engine: OTP Verification & Session Guard                      │
 │  ├── Data Pipeline: Cloudflare Router + Rate Limiter                   │
 │  └── Aggregator: BigQuery SQL Pipeline Worker                          │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Data Analytics Engine                                                 │
 │  ├── Google BigQuery (Multi-Million Sales Row Storage & Pin Code SQL) │
 │  └── MongoDB Atlas (User Profiles, Brand Configs, Alert Rules)        │
 └────────────────────────────────────────────────────────────────────────┘`,
    terminalLogs: [
      "$ eqrev-cli query --brand meemee --region south-zone",
      "[DATA_INGEST] Ingesting pin-code data streams for 1,250 dark stores...",
      "$ eqrev-cli analytics --platform blinkit --skus all",
      "[AGGREGATION] BigQuery executed query across 8.4M records in 180ms.",
      "$ eqrev-cli stockout-check --threshold 10%",
      "[WARN] 4 pin codes in Bengaluru showing stockout risk within 2 hours.",
      "[SUCCESS] Brand analytics portal initialized & active."
    ]
  },
  "reqtimeline": {
    slug: "reqtimeline",
    assetPrefix: "REQTIMELINE",
    level: "PROJ_00",
    name: "REQTIMELINE (NPM)",
    tagline: "EXPRESS.JS REQUEST LIFECYCLE & EXECUTION PROFILER",
    category: "Open-Source Developer Tooling / Performance Heuristics",
    timeline: "2025",
    role: "Creator & Open-Source Author",
    status: "PUBLISHED_NPM",
    url: "https://www.npmjs.com/package/reqtimeline",
    githubUrl: "https://github.com/thayanithi-dev",
    shortDesc: "Published zero-dependency npm profiler offering sub-millisecond execution tracking, slow step detection, nested timeline visualizer trees, and P50-P99 latency aggregation.",
    fullDescription: "reqtimeline is a lightweight, zero-dependency performance profiling middleware and CLI published to npm. Designed for high-throughput Express.js applications, reqtimeline tracks the entire lifecycle of an incoming HTTP request with sub-millisecond precision, identifying slow middleware steps, database queries, and bottlenecks with nested visual execution trees.",
    problemStatement: "Node.js developers struggle with invisible latency bottlenecks across complex Express middleware chains and database queries without heavy, proprietary APM overhead.",
    solutionOverview: "Engineered a zero-dependency profiler utilizing high-resolution timers (`process.hrtime.bigint()`), automated critical-path bottleneck detection, slow request fingerprinting, and global P50/P75/P95/P99 latency aggregation with real-time scoring.",
    image: devrank1Img,
    gallery: [devrank1Img, devrank2Img],
    metrics: [
      { label: "Package Overhead", value: "0 Dependencies", description: "Pure lightweight Node.js runtime execution" },
      { label: "Timer Resolution", value: "Sub-Millisecond", description: "Nanosecond-level process.hrtime tracking" },
      { label: "Latency Aggregation", value: "P50 to P99", description: "Statistical latency percentiles & bottleneck heuristics" },
      { label: "Ecosystem", value: "npm registry", description: "Easily installable via npm i reqtimeline" }
    ],
    keyFeatures: [
      {
        title: "Sub-Millisecond Execution Tracking",
        description: "Nanosecond-precise timer probes measuring exact duration spent across each middleware, route handler, and asynchronous function."
      },
      {
        title: "Nested Timeline Visualizer Trees",
        description: "Generates clear hierarchical CLI and JSON timeline trees detailing sequential and concurrent step durations."
      },
      {
        title: "Automated Bottleneck Detection",
        description: "Intelligent heuristic engine highlighting slowest execution steps and flagging critical path delays."
      },
      {
        title: "Global P50/P75/P95/P99 Latency Scoring",
        description: "Aggregated statistical performance scoring assisting developers in optimizing API response throughput."
      }
    ],
    techStack: [
      { category: "Core Runtime", items: ["Node.js", "Express.js", "TypeScript", "JavaScript"] },
      { category: "Performance Engine", items: ["process.hrtime", "Performance Heuristics", "Statistical Percentiles"] },
      { category: "Distribution", items: ["npm Package Registry", "CLI Tooling", "GitHub Open Source"] }
    ],
    architectureAscii: `
 ┌────────────────────────────────────────────────────────────────────────┐
 │                        REQTIMELINE ARCHITECTURE                        │
 ├────────────────────────────────────────────────────────────────────────┤
 │  Incoming Express.js HTTP Request                                      │
 │  ├── [Middleware 1: Auth] ──> (Timestamp Probe: +0.42ms)               │
 │  ├── [Middleware 2: Validation] ──> (Timestamp Probe: +0.18ms)         │
 │  └── [Route Handler: DB Query] ──> (Timestamp Probe: +14.2ms) [SLOW]   │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │ (High-Resolution Timer Stream)
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  reqtimeline Heuristic Engine                                          │
 │  ├── Critical Path Analyzer & Fingerprinter                            │
 │  ├── Nested Visualizer Tree Builder                                    │
 │  └── Percentile Aggregator (P50, P75, P95, P99)                        │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
 ┌───────────────────────────────────▼────────────────────────────────────┐
 │  Output Destination                                                    │
 │  └── Terminal CLI Output / HTTP Header Telemetry / JSON Log Vault      │
 └────────────────────────────────────────────────────────────────────────┘`,
    terminalLogs: [
      "$ npm install reqtimeline",
      "[NPM] Package reqtimeline installed successfully.",
      "$ node server.js --profile",
      "[REQTIMELINE] GET /api/v1/analytics [200 OK] - Total: 15.8ms",
      " ├─ authMiddleware: 0.42ms",
      " ├─ validateParams: 0.18ms",
      " └─ queryBigQuery: 14.82ms [BOTTLENECK IDENTIFIED]",
      "[SUCCESS] reqtimeline profiler active."
    ]
  }
}
