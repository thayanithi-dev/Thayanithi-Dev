"use client"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { motion } from "framer-motion"

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help         - Show this message",
    "  whoami       - Brief engineer bio",
    "  about        - Profile summary of Thayanithi S",
    "  education    - College, CGPA & academic details",
    "  stack        - Show core technology & AI/Cloud stack",
    "  experience   - List internship & engineering history",
    "  projects     - Show list of featured products & tools",
    "  achievements - Hackathon, LeetCode & competitive milestones",
    "  contact      - Email, phone, location & get in touch",
    "  social       - Social handles and web profiles",
    "  system       - Inspect terminal runtime specifications",
    "  clear        - Clear terminal",
  ],
  whoami: [
    "Thayanithi S",
    "--------------------------------------------------",
    "Full Stack & Cloud Engineer. Specializing in AI/RAG & Distributed Systems.",
    "Active domains: Fullstack, AI/LLMs, AWS/GCP Cloud Infra, High-Volume Data",
    "Status: OPERATIONAL [2B+ Records Streamed] | Location: Tamil Nadu, India",
  ],
  about: [
    "Thayanithi S - Full Stack & Cloud Engineer",
    "Proven experience designing resilient distributed architectures across frontend,",
    "backend, and cloud infrastructures. Adept in AI/LLM-enabled platforms (RAG,",
    "LangChain, vector retrieval) and deploying zero-downtime CI/CD on AWS & GCP.",
    "Processed 2+ billion records across BigQuery/GCS and improved throughput by 40%.",
  ],
  education: [
    "Bannari Amman Institute of Technology (Sep 2023 - Apr 2027)",
    "--------------------------------------------------",
    "Degree:      B.E. Computer Science and Engineering",
    "CGPA:        8.09 / 10.0",
    "HSC (12th):  92.38% (Malar Matriculation Higher Secondary School)",
  ],
  stack: [
    "Languages:   Java, Python, TypeScript, JavaScript, C, SQL",
    "AI & LLM:    RAG, LangChain, LlamaIndex, ChromaDB, Pinecone, OpenAI API",
    "Cloud/Infra: AWS (EC2, Lambda, S3, IAM, CloudWatch), GCP (Compute, GCS, BigQuery), Docker",
    "DevOps:      CI/CD (GitHub Actions), Nginx, Cloudflare, Linux, Postman",
    "Frontend:    React.js, Next.js, Vue.js, React Native, Tailwind CSS, Zustand, Redux",
    "Backend:     Node.js, Express.js, Fastify, REST APIs, WebSockets, JWT, Microservices",
    "Databases:   PostgreSQL, MongoDB, MySQL, Sequelize, Web Scraping, BDD Testing",
  ],
  experience: [
    "Eqrev (Sai Sakthi Enterprises) - Jun 2026 – Dec 2026 | SDE Intern - DevOps/Infra (2B+ Records, GCP)",
    "Eqrev (Sai Sakthi Enterprises) - Jan 2025 – Dec 2025 | Software Developer - Product & Platform",
    "ThinkUni                       - Oct 2025 – Jan 2026 | Frontend Engineer Remote (1,000+ Users)",
    "Crayon'd                       - Sep 2024 – Apr 2025 | Full Stack Engineer (Next.js & BDD)",
  ],
  projects: [
    "Aethera     - AI Assessment & Learning Ecosystem (AWS EC2/Lambda, RAG, WebRTC)",
    "CNC Vault   - Industrial Control Hub & G-Code Vault (70% Reliability Boost)",
    "Dev Rank    - AI-Powered Developer Ranking Platform (LLM Scoring Heuristics)",
    "Saha Yatri  - Tourist Safety & Smart Travel Mobile App (SIH 2025 Shortlist)",
    "EQ REV      - Quick Commerce Growth Platform (Google BigQuery & Cloudflare)",
    "reqtimeline - Express.js Lifecycle & Profiler (npm install reqtimeline)",
  ],
  achievements: [
    "• Smart India Hackathon (SIH 2025): Shortlisted on Waiting List",
    "• LeetCode Mastery: 300+ Problems Solved (Profile: thayanithi04)",
    "• GitHub Discipline: 1,500+ Commits & Open-Source Author",
    "• NPTEL Certification: 90% (Elite) in Programming in Java & Design",
    "• Sakthi Hackathon: Finalist among 1,000+ competitors",
  ],
  contact: [
    "Reach out directly:",
    "  Email:      thayanithi2006s@gmail.com",
    "  Phone:      +91-9025391287",
    "  Location:   Namakkal / Sathyamangalam, Tamil Nadu, India",
  ],
  social: [
    "Web Profiles & Registries:",
    "  Portfolio:  https://www.thayanithi.tech",
    "  GitHub:     https://github.com/thayanithi-dev",
    "  LinkedIn:   https://linkedin.com/in/thayanithi15",
    "  LeetCode:   https://leetcode.com/u/thayanithi04/",
    "  Twitter:    https://x.com/Thayanithi887",
  ],
  system: [
    "Host OS:     portfolio-kernel v2.4.0-x86_64",
    "Cloud Node:  AWS EC2 + GCP Cloud Engine (Hybrid)",
    "Telemetry:   2B+ Records Streamed (Operational)",
    "Memory:      1.24 GB / 8.00 GB (Active Allocation)",
    "API Latency: 32ms (Peak Performance)",
  ],
}

interface TerminalLine {
  type: "input" | "output" | "v0"
  content: string
}

export function PseudoTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: 'Welcome to Monochrome Hub Terminal v1.0.0' },
    { type: "output", content: 'Type "help" for available commands.' },
    { type: "output", content: "" },
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const baseLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: `$ ${cmd}` },
    ]

    if (trimmed === "clear") {
      setLines([])
      setInput("")
      return
    }

    if (trimmed === "v0") {
      setLines([...baseLines, { type: "output", content: "" }])
      setInput("")
      const v0Lines = COMMANDS["v0"]
      if (v0Lines) {
        v0Lines.forEach((line, i) => {
          setTimeout(() => {
            setLines((prev) => [...prev, { type: "v0", content: line }])
          }, i * 80)
        })
      } else {
        setLines((prev) => [...prev, { type: "output", content: "v0 command offline." }])
      }
      return
    }

    const newLines: TerminalLine[] = [...baseLines]
    const response = COMMANDS[trimmed]
    if (response) {
      response.forEach((line) => {
        newLines.push({ type: "output", content: line })
      })
    } else if (trimmed === "") {
      // do nothing
    } else {
      newLines.push({ type: "output", content: `command not found: ${trimmed}` })
      newLines.push({ type: "output", content: 'Type "help" for available commands.' })
    }

    newLines.push({ type: "output", content: "" })
    setLines(newLines)
    setInput("")
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">{">"}</span>
          <div className="h-[1px] w-12 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Interactive
          </span>
        </div>
        <h2 className="font-pixel-line text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Terminal
        </h2>
        <p className="max-w-prose font-mono text-sm leading-relaxed text-muted-foreground">
          Explore the system. Type commands to interact with the ASCII Hub.
        </p>
      </div>

      <div
        className="border border-border"
        onClick={() => inputRef.current?.focus()}
        role="application"
        aria-label="Interactive pseudo-terminal"
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <div className="h-2.5 w-2.5 bg-foreground" />
          <div className="h-2.5 w-2.5 bg-muted-foreground/50" />
          <div className="h-2.5 w-2.5 bg-muted-foreground/30" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            monochrome-hub ~ interactive
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="h-80 overflow-y-auto bg-secondary/20 p-4"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`font-mono text-xs leading-relaxed break-all whitespace-pre-wrap max-w-full overflow-hidden ${
                line.type === "input"
                  ? "text-foreground"
                  : line.type === "v0"
                  ? "text-foreground brightness-125"
                  : "text-muted-foreground"
              }`}
            >
              {line.content || "\u00A0"}
            </div>
          ))}

          {/* Input line */}
          <div className="relative flex items-center font-mono text-xs text-foreground">
            <span className="mr-1">{"$"}</span>
            <span>{input}</span>
            <span className="animate-blink">{"█"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute inset-0 h-full w-full cursor-default border-none bg-transparent opacity-0 outline-none"
              aria-label="Terminal input"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
