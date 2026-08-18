import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getProfile, getSiteSettings } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function generateMetadata(): Promise<Metadata> {
  const [profile, settings] = await Promise.all([getProfile(), getSiteSettings()]);

  const title = settings?.siteTitle || `${profile.name} — ${profile.title}`;
  const description =
    settings?.siteDescription ||
    profile.bio.slice(0, 155);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s — ${profile.name}`,
    },
    description,
    keywords: [
      profile.title,
      "Frontend Developer",
      "Next.js",
      "React",
      "Portfolio",
      profile.name,
    ],
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    openGraph: {
      type: "website",
      url: siteUrl,
      title,
      description,
      siteName: profile.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: { canonical: siteUrl },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
