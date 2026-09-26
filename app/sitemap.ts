import type { MetadataRoute } from "next"
import { projectsData } from "@/lib/projects-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thayanithi.tech"
  const currentDate = new Date()

  const projectRoutes: MetadataRoute.Sitemap = Object.keys(projectsData).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stats`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.6,
    },
    ...projectRoutes,
  ]
}
