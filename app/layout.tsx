import type { Metadata, Viewport } from "next"
import { Geist_Mono, Silkscreen } from "next/font/google"
import { GeistPixelLine } from "geist/font/pixel"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
})

const geistPixelLine = GeistPixelLine

const siteUrl = "https://www.thayanithi.tech"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thayanithi S | Full Stack & Cloud Engineer Portfolio",
    template: "%s | Thayanithi S",
  },
  description:
    "Explore the technical engineering portfolio of Thayanithi S (Full Stack & Cloud Engineer). Specializing in AI/LLM platforms (RAG, LangChain), fullstack web applications (Next.js, React), scalable backend architecture (Node.js, Express, Fastify, PostgreSQL, MongoDB), and zero-downtime cloud pipelines on AWS & GCP.",
  applicationName: "Thayanithi S Portfolio",
  authors: [
    {
      name: "Thayanithi S",
      url: siteUrl,
    },
  ],
  generator: "Next.js",
  creator: "Thayanithi S",
  publisher: "Thayanithi S",
  keywords: [
    // Primary Name Keywords
    "Thayanithi S",
    "Thayanithi",
    "Thayanithi Dev",
    "thayanithi15",
    "thayanithi-dev",
    "thayanithi04",
    "Thayanithi portfolio",
    "Thayanithi developer",
    "Thayanithi engineer",
    // Roles & Titles
    "Full Stack & Cloud Engineer",
    "Full Stack Developer",
    "Software Development Engineer",
    "SDE",
    "Cloud Engineer",
    "DevOps Engineer",
    "Backend Architect",
    "AI Systems Engineer",
    "Frontend Developer",
    "Mobile App Developer",
    // AI & Cloud Tech Stack
    "Retrieval-Augmented Generation",
    "RAG",
    "LangChain",
    "LlamaIndex",
    "Vector Databases",
    "ChromaDB",
    "Pinecone",
    "OpenAI API",
    "AWS",
    "AWS EC2",
    "AWS Lambda",
    "Google Cloud Platform",
    "GCP",
    "BigQuery",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    // Core Engineering
    "Next.js",
    "React.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "C",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "reqtimeline",
    // Specializations & Themes
    "ASCII portfolio",
    "Monochrome developer portfolio",
    "Terminal portfolio",
    "High performance web apps",
    "Distributed Systems",
    "Software Engineer India",
    "Software Engineer Tamil Nadu",
    "Bannari Amman Institute of Technology",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Thayanithi S Portfolio",
    title: "Thayanithi S | Full Stack & Cloud Engineer Portfolio",
    description:
      "Designing resilient distributed architectures, AI/LLM platforms, and automated cloud pipelines on AWS & GCP by Thayanithi S.",
    images: [
      {
        url: "/T_Light.png",
        width: 1200,
        height: 630,
        alt: "Thayanithi S - Full Stack & Cloud Engineer Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Thayanithi887",
    creator: "@Thayanithi887",
    title: "Thayanithi S | Full Stack & Cloud Engineer",
    description:
      "Full Stack & Cloud Engineer. Explore technical projects, AI systems, system specs, and performance benchmarks.",
    images: ["/T_Light.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/T_Light.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: "/T_Dark.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/T_Light.png",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/T_Light.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/T_Light.png",
  },
  category: "technology",
  classification: "Portfolio / Software Engineering",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Thayanithi S",
      alternateName: ["Thayanithi", "Thayanithi Dev", "thayanithi15", "thayanithi-dev", "thayanithi04"],
      url: siteUrl,
      image: `${siteUrl}/T_Light.png`,
      jobTitle: "Full Stack & Cloud Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance / Independent Engineer",
      },
      sameAs: [
        "https://github.com/thayanithi-dev",
        "https://www.linkedin.com/in/thayanithi15",
        "https://leetcode.com/u/thayanithi04/",
        "https://x.com/Thayanithi887",
        "https://www.instagram.com/thayanithi._",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Cloud Infrastructure",
        "AWS (EC2, Lambda, S3)",
        "Google Cloud Platform & BigQuery",
        "AI & LLMs",
        "Retrieval-Augmented Generation (RAG)",
        "LangChain",
        "Vector Databases",
        "Next.js",
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Java",
        "Python",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "CI/CD Pipelines",
        "Docker",
        "Distributed Systems",
      ],
      description:
        "Full Stack & Cloud Engineer specializing in AI/LLM systems, distributed architectures, zero-downtime CI/CD pipelines, and high-volume data streams.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Thayanithi S | Portfolio",
      description:
        "Personal engineering showcase of Thayanithi S featuring high-performance cloud systems, AI/RAG architectures, and terminal ASCII aesthetics.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistPixelLine.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/T_Light.png" media="(prefers-color-scheme: dark)" type="image/png" />
        <link rel="icon" href="/T_Dark.png" media="(prefers-color-scheme: light)" type="image/png" />
        <link rel="apple-touch-icon" href="/T_Light.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistMono.variable} ${silkscreen.variable} font-mono antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
