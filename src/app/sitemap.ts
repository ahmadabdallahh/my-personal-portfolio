import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahmad-abdallah.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = (path: string, priority: number): MetadataRoute.Sitemap =>
    ["en", "ar"].map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority,
    }));

  return [
    ...pages("", 1),
    ...getProjects().flatMap((project) =>
      pages(`/projects/${project.slug}`, 0.7),
    ),
  ];
}
