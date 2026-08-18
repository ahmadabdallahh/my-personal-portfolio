import type { MetadataRoute } from "next";
import { getArticles, getProjects } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahmad-abdallah.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [projects, articles] = await Promise.all([getProjects(), getArticles()]);

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
        url: `${siteUrl}/#project-${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const articleRoutes: MetadataRoute.Sitemap = articles
        .filter((a) => !a.externalUrl)
        .map((a) => ({
            url: `${siteUrl}/articles/${a.slug}`,
            lastModified: a.publishedAt ? new Date(a.publishedAt) : new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        }));

    return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
