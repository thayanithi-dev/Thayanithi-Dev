"use client"

import { motion } from "framer-motion"

const TECH_ITEMS = [
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "RAG Architectures",
  "LangChain",
  "Vector DBs (Chroma/Pinecone)",
  "OpenAI API",
  "AWS (EC2 / Lambda)",
  "GCP (GCS / BigQuery)",
  "Next.js",
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "Fastify",
  "Docker",
  "GitHub Actions CI/CD",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Cloudflare",
  "WebSockets",
  "WebRTC",
  "RESTful APIs",
  "reqtimeline (npm)"
]

export function TechTicker() {
  return (
    <div className="overflow-hidden border-y border-border py-3" aria-label="Technology stack ticker">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-xs text-muted-foreground"
          >
            {item}
            <span className="ml-8 text-border">{"///"}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
