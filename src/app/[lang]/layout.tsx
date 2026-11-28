import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { getProfile } from "@/lib/data";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { getDirection, isLang } from "@/lib/i18n-dictionaries";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahmad-abdallah.vercel.app";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};

  const profile = getProfile();
  const title = `${profile.name} — ${lang === "ar" ? profile.titleAr || profile.title : profile.title}`;
  const description = lang === "ar" && profile.bioAr ? profile.bioAr : profile.metaDescription;
  const canonical = `${siteUrl}/${lang}`;

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
    authors: [{ name: profile.name, url: canonical }],
    creator: profile.name,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        "x-default": `${siteUrl}/en`,
      },
    },
    verification: {
      google: "google53a3c5c8bc866386",
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: profile.name,
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_EG",
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
  };
}

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={getDirection(lang)}
      className={`${inter.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <I18nProvider lang={lang}>{children}</I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
