"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { SkillCategory } from "@/lib/types";

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="section-container py-16 md:py-24">
      <SectionHeading icon={Sparkles} title="Skills" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat._id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            className="rounded-2xl border border-surface-border bg-surface-card p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {cat.title}
              </h3>
              <span className="text-xs font-medium text-accent-dark bg-accent-light rounded-full w-5 h-5 flex items-center justify-center">
                {cat.items.length}
              </span>
            </div>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
