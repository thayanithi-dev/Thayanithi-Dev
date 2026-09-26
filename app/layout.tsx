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
    default: "Thayanithi S | SDE & Infra Engineer Portfolio",
    template: "%s | Thayanithi S",
  },
  description:
    "Explore the technical engineering portfolio of Thayanithi S (SDE & Infra Engineer). Specializing in Fullstack web development (Next.js, React), scalable backend architecture (Node.js, Go, MongoDB, PostgreSQL), cross-platform mobile apps, and distributed cloud infrastructure.",
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
    "Thayanithi portfolio",
    "Thayanithi developer",
    "Thayanithi engineer",
    // Roles & Titles
    "Software Development Engineer",
    "SDE",
    "Infra Engineer",
    "Fullstack Engineer",
    "Full Stack Developer",
    "Backend Architect",
    "Frontend Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Systems Engineer",
    "Mobile App Developer",
    // Core Tech Stack
    "Next.js developer",
    "React.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Go",
    "Golang",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "Cloud Architecture",
    "Distributed Systems",
    "REST APIs",
    "GraphQL",
    // Specializations & Themes
    "ASCII portfolio",
    "Monochrome developer portfolio",
    "Terminal portfolio",
    "High performance web apps",
    "Technical portfolio",
    "Software Engineer Namakkal",
    "Software Engineer Tamil Nadu",
    "Software Engineer India",
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
    title: "Thayanithi S | SDE & Infra Engineer Portfolio",
    description:
      "Architecting raw logic into refined, high-performance systems. Fullstack web applications, scalable backend infrastructure, and cross-platform mobile apps by Thayanithi S.",
    images: [
      {
        url: "/T_Light.png",
        width: 1200,
        height: 630,
        alt: "Thayanithi S - SDE & Infra Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Thayanithi887",
    creator: "@Thayanithi887",
    title: "Thayanithi S | SDE & Infra Engineer",
    description:
      "Fullstack, Mobile, and Backend Architect. Explore technical projects, system specs, and performance benchmarks.",
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
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/T_Light.png",
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
      alternateName: ["Thayanithi", "Thayanithi Dev", "thayanithi15", "thayanithi-dev"],
      url: siteUrl,
      image: `${siteUrl}/T_Light.png`,
      jobTitle: "Software Development Engineer & Infra Architect",
      worksFor: {
        "@type": "Organization",
        name: "Freelance / Independent Engineer",
      },
      sameAs: [
        "https://github.com/thayanithi-dev",
        "https://www.linkedin.com/in/thayanithi15",
        "https://x.com/Thayanithi887",
        "https://www.instagram.com/thayanithi_15",
      ],
      knowsAbout: [
        "Fullstack Development",
        "Software Engineering",
        "Next.js",
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Go / Golang",
        "MongoDB",
        "PostgreSQL",
        "Cloud Infrastructure",
        "DevOps",
        "Distributed Systems",
        "Backend Architecture",
      ],
      description:
        "SDE & Infra Engineer specializing in Fullstack web platforms, cross-platform mobile apps, and scalable backend architectures.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Thayanithi S | Portfolio",
      description:
        "Personal engineering showcase of Thayanithi S featuring high-performance web systems, distributed backends, and terminal ASCII aesthetics.",
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
