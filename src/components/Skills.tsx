"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BidiText from "./BidiText";
import type { SkillCategory } from "@/lib/types";
import { useI18n, useLocalized } from "@/lib/i18n";

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  const { t } = useI18n();
  const pick = useLocalized();

  return (
    <section id="skills" className="section-container py-16 md:py-24">
      <SectionHeading icon={Sparkles} title={t("sectionSkills")} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat._id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            className="rounded-2xl border border-surface-border p-5 bg-[linear-gradient(180deg,var(--c-card-gradient-from)_0%,var(--c-card-gradient-to)_100%)]"
          >
            <div className="flex items-center justify-between mb-3 gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">
                {pick(cat.title, cat.titleAr)}
              </h3>
              <span className="text-xs font-medium text-white bg-accent rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                {cat.items.length}
              </span>
            </div>
            <ul className="space-y-1.5">
              {cat.items.map((item, idx) => (
                <li key={`${cat._id}-${item}`} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <BidiText text={pick(item, cat.itemsAr?.[idx])} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
