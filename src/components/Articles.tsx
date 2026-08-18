"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Article } from "@/lib/types";

export default function Articles({ articles }: { articles: Article[] }) {
  return (
    <section id="articles" className="section-container py-16 md:py-24">
      <SectionHeading icon={Newspaper} title="Articles" />

      <div className="space-y-4">
        {articles.map((a, i) => (
          <motion.a
            key={a._id}
            href={a.externalUrl || `/articles/${a.slug}`}
            target={a.externalUrl ? "_blank" : undefined}
            rel={a.externalUrl ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="block rounded-2xl border border-surface-border bg-white p-6 hover:border-accent transition-colors group"
          >
            <div className="flex flex-wrap gap-1.5 mb-3">
              {a.tags?.map((t) => (
                <span key={t} className="text-[11px] font-semibold text-ink-soft border border-surface-border rounded-md px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-bold text-xl text-ink group-hover:text-accent transition-colors">
                {a.title}
              </h3>
              <ArrowUpRight size={18} className="shrink-0 text-ink-faint group-hover:text-accent transition-colors" />
            </div>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">{a.excerpt}</p>
            <p className="mt-3 text-sm text-accent font-medium group-hover:text-accent-dark transition-colors">
              Read article →
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
