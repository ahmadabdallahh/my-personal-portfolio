import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/Github";
import { getProjectBySlug, getProjectSlugs } from "@/lib/data";
import { getDirection, isLang, translate } from "@/lib/i18n-dictionaries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahmad-abdallah.vercel.app";

type PageParams = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};

  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = lang === "ar" ? project.titleAr || project.title : project.title;
  const description = lang === "ar" ? project.summaryAr || project.summary : project.summary;
  const canonical = `${siteUrl}/${lang}/projects/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en/projects/${slug}`,
        ar: `${siteUrl}/ar/projects/${slug}`,
        "x-default": `${siteUrl}/en/projects/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      locale: lang === "ar" ? "ar_EG" : "en_US",
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
  };
}

export default async function ProjectCaseStudy({ params }: PageParams) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const pick = (en?: string, ar?: string) =>
    lang === "ar" ? ar || en || "" : en || ar || "";
  const title = pick(project.title, project.titleAr);
  const t = (key: Parameters<typeof translate>[1]) => translate(lang, key);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: pick(project.summary, project.summaryAr),
    url: `${siteUrl}/${lang}/projects/${slug}`,
  };

  return (
    <main dir={getDirection(lang)} className="section-container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href={`/${lang}/#projects`}
        className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors"
      >
        <ArrowLeft size={16} />
        {t("backToProjects")}
      </Link>

      <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent">
        {t("caseStudy")}
      </p>
      <h1 className="mt-2 text-3xl md:text-5xl font-bold text-ink">{title}</h1>
      <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
        {pick(project.summary, project.summaryAr)}
      </p>

      {project.cover && (
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-surface-border bg-surface-muted">
          <Image
            src={project.cover}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          { heading: t("problem"), body: pick(project.problem, project.problemAr) },
          { heading: t("solution"), body: pick(project.solution, project.solutionAr) },
          {
            heading: t("technicalDecision"),
            body: pick(project.technicalDecision, project.technicalDecisionAr),
          },
        ].map((block) => (
          <section
            key={block.heading}
            className="rounded-2xl border border-surface-border p-6"
          >
            <h2 className="text-sm font-bold uppercase tracking-wide text-accent">
              {block.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{block.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-ink-soft">
          {t("techStack")}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-ink-soft border border-surface-border rounded-md px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 text-sm font-medium text-ink hover:border-ink transition-colors"
          >
            <Github size={16} />
            {t("exploreCode")}
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-dark transition-colors"
          >
            {t("exploreLiveDemo")}
            <ExternalLink size={14} />
          </a>
        )}
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 text-sm font-medium text-ink-soft hover:border-ink transition-colors"
        >
          {t("allProjects")}
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </main>
  );
}
