"use client";

import { motion } from "framer-motion";
import { Award, Calendar, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Education as EducationType } from "@/lib/types";

export default function Education({ education }: { education: EducationType }) {
  return (
    <section id="education" className="section-container py-16 md:py-24">
      <SectionHeading icon={GraduationCap} title="Education" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-surface-border bg-surface-card p-6 md:p-8"
      >
        <h3 className="font-display font-bold text-lg text-ink">{education.institution}</h3>
        <p className="text-sm text-ink-soft mt-1">{education.degree}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {education.gpaValue && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-dark bg-accent-light rounded-full px-3 py-1">
              <Award size={13} />
              {education.gpaLabel}: {education.gpaValue}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft bg-surface-muted rounded-full px-3 py-1">
            <Calendar size={13} />
            {education.startYear} – {education.endYear}
          </span>
        </div>

        {education.coursework?.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-3">
              Relevant Coursework
            </h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {education.coursework.map((c) => (
                <p key={c} className="text-sm text-ink-soft">
                  · {c}
                </p>
              ))}
            </div>
          </div>
        )}

        {education.graduationProject && (
          <div className="mt-6 pt-6 border-t border-surface-border">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                Graduation Project
              </h4>
              {education.graduationProject.status && (
                <span className="text-xs font-medium text-ink-soft">
                  {education.graduationProject.status}
                </span>
              )}
            </div>
            <p className="mt-2 font-display font-semibold text-ink">
              {education.graduationProject.title}
            </p>
            <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
              {education.graduationProject.description}
            </p>
            {education.graduationProject.highlights?.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {education.graduationProject.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-ink-soft pl-3 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-ink-faint" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
            {education.graduationProject.note && (
              <p className="mt-4 text-sm text-ink-faint italic bg-surface-muted rounded-xl p-3">
                {education.graduationProject.note}
              </p>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}
