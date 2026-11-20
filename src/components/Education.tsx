"use client";

import { motion } from "framer-motion";
import { Award, Calendar, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Education as EducationType } from "@/lib/types";
import { useI18n, useLocalized } from "@/lib/i18n";

function EducationCard({ education, index }: { education: EducationType; index: number }) {
  const pick = useLocalized();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-surface-border p-6 md:p-8"
    >
      <h3 className="font-bold text-lg text-ink">{pick(education.institution, education.institutionAr)}</h3>
      <p className="text-sm text-ink-soft mt-1">{pick(education.degree, education.degreeAr)}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {education.gpaValue && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-accent rounded-full px-3 py-1">
            <Award size={13} />
            {education.gpaLabel}: {education.gpaValue}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft border border-surface-border rounded-full px-3 py-1">
          <Calendar size={13} />
          {pick(education.startYear, education.startYearAr)} – {pick(education.endYear, education.endYearAr)}
        </span>
      </div>

      {education.coursework?.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-ink mb-3">
            {pick("Relevant Coursework", "المواد الدراسية ذات الصلة")}
          </h4>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {education.coursework.map((c, i) => (
              <p key={c} className="text-sm text-ink-soft flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {pick(c, education.courseworkAr?.[i])}
              </p>
            ))}
          </div>
        </div>
      )}

      {education.graduationProject && (
        <div className="mt-6 pt-6 border-t border-surface-border">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-accent">
              {pick("Graduation Project", "مشروع التخرج")}
            </h4>
            {education.graduationProject.status && (
              <span className="text-xs font-medium text-ink-soft">
                {pick(education.graduationProject.status, education.graduationProject.statusAr)}
              </span>
            )}
          </div>
          <p className="mt-2 font-semibold text-ink">
            {pick(education.graduationProject.title, education.graduationProject.titleAr)}
          </p>
          <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
            {pick(education.graduationProject.description, education.graduationProject.descriptionAr)}
          </p>
          {education.graduationProject.highlights?.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {education.graduationProject.highlights.map((h, i) => (
                <li key={i} className="text-sm text-ink-soft ps-3 relative">
                  <span className="absolute start-0 top-2 w-1.5 h-1.5 rounded-full bg-accent" />
                  {pick(h, education.graduationProject?.highlightsAr?.[i])}
                </li>
              ))}
            </ul>
          )}
          {education.graduationProject.note && (
            <p className="mt-4 text-sm text-ink-faint italic border-s-2 border-accent ps-3">
              {pick(education.graduationProject.note, education.graduationProject.noteAr)}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Education({ education }: { education: EducationType[] }) {
  const { t } = useI18n();

  return (
    <section id="education" className="section-container py-16 md:py-24">
      <SectionHeading icon={GraduationCap} title={t("sectionEducation")} />

      <div className="space-y-4">
        {education.map((entry, i) => (
          <EducationCard key={entry.institution} education={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
