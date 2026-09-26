"use server"

const portfolioContext = `
You are the AI Portfolio Assistant for Thayanithi S, a Full Stack & Cloud Engineer.
Use the following portfolio information to answer questions about him:

Name: Thayanithi S
Bio: Full Stack & Cloud Engineer with proven experience designing and delivering resilient, distributed architectures across frontend, backend, and cloud infrastructures. Adept in AI/LLM-enabled platforms (RAG architectures, LangChain, vector retrieval) and deploying automated, zero-downtime CI/CD pipelines on AWS (EC2, Lambda) and GCP.
Location: Namakkal / Sathyamangalam, Tamil Nadu, India
Email: thayanithi2006s@gmail.com
Phone: +91-9025391287
Education: 
- Bannari Amman Institute of Technology (Sep 2023 - Apr 2027): Bachelor of Engineering in Computer Science and Engineering (8.09 CGPA)
- Malar Matriculation Higher Secondary School (2021 - 2023): Higher Secondary Certificate (HSC) - 92.38%

Technical Skills:
- Languages: Java, Python, TypeScript, JavaScript, C, SQL
- AI & LLM Stack: Retrieval-Augmented Generation (RAG), LangChain, LlamaIndex, Vector Databases (ChromaDB, Pinecone), Hugging Face, OpenAI API, Fine-Tuning Basics, Prompt Engineering, Semantic Search, Function Calling
- Cloud & Infrastructure: AWS (EC2, Lambda, S3, IAM, CloudWatch), GCP (Compute Engine, GCS, BigQuery), VMs, Docker
- DevOps & Pipelines: CI/CD Pipelines (GitHub Actions), Nginx, Cloudflare, Postman, Git, Linux
- Frontend: React.js, Next.js, Vue.js, React Native, Tailwind CSS, Redux Toolkit, Zustand
- Backend: Node.js, Express.js, Fastify, RESTful APIs, WebSockets, JWT, Microservices Architecture
- Databases & Tools: PostgreSQL, MongoDB, MySQL, Sequelize, Web Scraping, BDD Testing, Figma

Open-Source & Developer Tools:
- reqtimeline: Express.js Request Lifecycle & Profiler published on npm with sub-millisecond tracking, slow step detection, nested timeline visualizer trees, and P50-P99 latency scoring.
- Telegram Reminder Bot: Fault-Tolerant Automation Bot parsing natural language time queries, MongoDB Atlas cron polling engine.

Internship Experience:
1. Eqrev - Sai Sakthi Enterprises (Jun 2026 – Dec 2026): Software Engineer Intern - Full Stack & DevOps / Infra. Handled CI/CD pipelines, extraction and ingestion of 2+ billion records across GCS & BigQuery, GCP VMs.
2. Eqrev - Sai Sakthi Enterprises (Jan 2025 – Dec 2025): Software Developer - Product & Platform Development. SaaS analytics platform for Zepto, Blinkit, and Swiggy Instamart (Mee Mee, Ramraj, Underneat), automated backend pipelines reducing manual effort by 60% and improving report efficiency by 40%.
3. ThinkUni (Oct 2025 – Jan 2026): Frontend Engineer Remote. Client-side features for multi-service social platform catering to 1,000+ active users, 30+ responsive UI components with strict RBAC.
4. Crayon’d (Sep 2024 – Apr 2025): Full Stack Engineer. Built 2+ client-facing web products with Next.js and REST integrations using BDD testing (20% faster delivery).

Featured Products:
1. Aethera: Intelligent Learning & AI Assessment Ecosystem (React, Node.js, AWS EC2/Lambda, RAG, WebRTC, LangChain, AI vision proctoring).
2. CNC Vault: Industrial Centralized Parameter System (Next.js, TypeScript, Express, MongoDB, GCS - 70% reliability increase).
3. Dev Rank: AI-Powered Developer Ranking Platform (Next.js, TypeScript, Express, MongoDB, GitHub & LeetCode scrapers, LLMs).
4. Saha Yatri: Tourist Safety & Smart Travel Mobile App (React Native, Leaflet Maps, Gradle, REST APIs, i18n, SOS telemetry - SIH 2025 shortlist).
5. Eq Rev: Quick Commerce Growth Platform (React.js, Node.js, Google BigQuery, Cloudflare).

Key Achievements:
- Shortlisted on the waiting list for Smart India Hackathon (SIH) 2025.
- Solved 300+ DSA problems on LeetCode (Profile: thayanithi04).
- Contributed 1,500+ GitHub commits (Profile: thayanithi-dev).
- Achieved 90% (Elite) in NPTEL Java Certification.
- Finalist at Sakthi Hackathon (1,000+ competitors).

Instructions:
- Answer questions professionally, concisely, and system-oriented, matching a high-end terminal theme.
- Keep responses short (1-3 sentences), informative, and extremely neat.
- If the question is unrelated to Thayanithi S, answer politely but steer back to his profile.
`

async function askGroq(prompt: string): Promise<string | null> {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return null

  const models = [
    "llama-3.3-70b-versatile",
    "llama3-8b-8192",
    "mixtral-8x7b-32768"
  ]

  for (const model of models) {
    try {
      console.log(`[Groq Assistant] Trying model: ${model}...`)
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: portfolioContext },
            { role: "user", content: prompt }
          ],
          temperature: 0.5,
          max_tokens: 256
        })
      })

      const data = await response.json()
      if (data.choices?.[0]?.message?.content) {
        console.log(`[Groq Assistant] Success with model: ${model}`)
        return data.choices[0].message.content.trim()
      } else if (data.error) {
        console.warn(`[Groq Assistant] Model ${model} returned error:`, data.error.message)
      }
    } catch (err) {
      console.error(`[Groq Assistant] Failed with model ${model}:`, err)
    }
  }

  return null
}

async function askGemini(prompt: string): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) return null

  const modelsToTry = [
    "gemini-2.0-flash",
    "gemini-1.5-flash",
    "gemini-2.0-flash-lite",
    "gemini-1.5-pro"
  ]

  const apiVersions = ["v1beta", "v1"]

  for (const apiVersion of apiVersions) {
    for (const model of modelsToTry) {
      try {
        console.log(`[Gemini Assistant] Trying fallback model: ${model} via ${apiVersion}...`)
        const response = await fetch(
          `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    { text: `${portfolioContext}\n\nUser Question: ${prompt}\nAnswer:` }
                  ]
                }
              ]
            })
          }
        )

        const data = await response.json()
        if (data.error) {
          console.warn(`[Gemini Assistant] Model ${model} returned error:`, data.error.message)
          continue
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
        if (reply) {
          console.log(`[Gemini Assistant] Success fallback with model: ${model}`)
          return reply.trim()
        }
      } catch (err) {
        console.error(`[Gemini Assistant] Failed fallback with model ${model}:`, err)
      }
    }
  }

  return null
}

export async function askAssistant(prompt: string): Promise<string | null> {
  // 1. Try Groq first
  let response = await askGroq(prompt)
  if (response) return response

  // 2. Fallback to Gemini
  console.log("[Assistant] Groq failed or key missing. Invoking Gemini fallback...")
  response = await askGemini(prompt)
  if (response) return response

  return null
}
