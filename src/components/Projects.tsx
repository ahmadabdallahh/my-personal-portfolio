"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, LayoutGrid } from "lucide-react";
import { Github } from "./Github";
import SectionHeading from "./SectionHeading";
import type { Project } from "@/lib/types";
import { useI18n, useLocalized } from "@/lib/i18n";

export default function Projects({ projects }: { projects: Project[] }) {
  const { t, lang } = useI18n();
  const pick = useLocalized();

  return (
    <section id="projects" className="section-container py-16 md:py-24">
      <SectionHeading icon={LayoutGrid} title={t("sectionProjects")} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
            <motion.article
              key={p._id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="rounded-2xl border border-surface-border overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-surface-muted to-surface">
                {p.cover ? (
                  <Image
                    src={p.cover}
                    alt={pick(p.title, p.titleAr)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-ink-faint font-bold text-lg text-center px-4">
                    {pick(p.title, p.titleAr)}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-ink">{pick(p.title, p.titleAr)}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                  {pick(p.summary, p.summaryAr)}
                </p>
                <p className="mt-2 text-xs text-ink-faint leading-relaxed">
                  <span className="font-semibold">{t("problem")}:</span>{" "}
                  {pick(p.problem, p.problemAr)}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-ink-soft border border-surface-border rounded-md px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-surface-border">
                  <Link
                    href={`/${lang}/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
                  >
                    {t("viewCaseStudy")}
                    <ArrowUpRight size={14} />
                  </Link>
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-accent transition-colors"
                    >
                      <Github size={16} />
                      {t("code")}
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent ms-auto hover:text-accent-dark transition-colors"
                    >
                      {t("liveDemo")}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
        ))}
      </div>
    </section>
  );
}
