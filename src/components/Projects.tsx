"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, LayoutGrid } from "lucide-react";
import { Github } from "./Github";
import SectionHeading from "./SectionHeading";
import { urlFor } from "@/sanity/image";
import type { Project } from "@/lib/types";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section-container py-16 md:py-24">
      <SectionHeading icon={LayoutGrid} title="Projects" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => {
          const isLocalCover = p.cover?.startsWith("/");
          const imgUrl = p.cover
            ? isLocalCover
              ? p.cover
              : urlFor(p.cover).url()
            : "";
          return (
            <motion.article
              key={p._id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="rounded-2xl border border-surface-border overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-surface-muted to-surface">
                {imgUrl ? (
                  <Image
                    src={imgUrl}
                    alt={p.title}
                    fill
                    className="object-cover"
                    unoptimized={isLocalCover}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-ink-faint font-bold text-lg">
                    {p.title}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed flex-1">
                  {p.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold text-ink-soft border border-surface-border rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 pt-3 border-t border-surface-border">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-accent transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent ml-auto hover:text-accent-dark transition-colors"
                    >
                      View details
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
