"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Experience as ExperienceType } from "@/lib/types";
import { useI18n, useLocalized } from "@/lib/i18n";

function formatRange(start?: string, end?: string, current?: boolean, present?: string, lang: "en" | "ar" = "en") {
    const fmt = (d?: string) =>
        d
            ? new Date(`${d}-01`).toLocaleDateString(lang === "ar" ? "ar-EG-u-ca-gregory" : "en-US", {
                month: "short",
                year: "numeric",
            })
            : "";
    if (current) return `${fmt(start)} — ${present ?? "Present"}`;
    if (start && end) return `${fmt(start)} — ${fmt(end)}`;
    return fmt(start) || fmt(end);
}

function RoleBlock({ role }: { role: ExperienceType["roles"][number] }) {
    const [open, setOpen] = useState(false);
    const { t, lang } = useI18n();
    const pick = useLocalized();

    return (
        <div className="mt-4 first:mt-0">
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <h4 className="text-base font-semibold text-ink">{pick(role.title, role.titleAr)}</h4>
                <span className="text-sm text-ink-faint">
                    {formatRange(role.startDate, role.endDate, false, t("present"), lang)}
                </span>
            </div>
            {role.bullets?.length > 0 && (
                <>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        className="mt-1 inline-flex items-center gap-1 text-sm text-accent font-medium hover:text-accent-dark transition-colors"
                    >
                        {open ? t("hideDetails") : t("viewDetails")}
                        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                        <ul className="mt-2 space-y-1.5">
                            {role.bullets.map((b, i) => (
                                <li key={i} className="text-sm text-ink-soft leading-relaxed ps-3 relative">
                                    <span className="absolute start-0 top-2 w-1.5 h-1.5 rounded-full bg-accent" />
                                    {pick(b, role.bulletsAr?.[i])}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
}

export default function Experience({ items }: { items: ExperienceType[] }) {
    const { t, lang } = useI18n();
    const pick = useLocalized();

    return (
        <section id="experience" className="section-container py-16 md:py-24">
            <SectionHeading icon={Briefcase} title={t("sectionExperience")} />

            <div className="relative ps-8">
                <div className="absolute start-[7px] top-2 bottom-2 w-px bg-surface-border" />

                {items.map((exp, i) => (
                    <motion.div
                        key={exp._id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="relative mb-10 last:mb-0"
                    >
                        <span
                            className={`absolute -start-8 top-1.5 w-4 h-4 rounded-full border-2 border-surface ${
                                exp.isCurrent ? "bg-accent" : "bg-ink-faint"
                            }`}
                        />

                        <div className="rounded-2xl border border-surface-border p-5">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div>
                                    <h3 className="font-bold text-lg text-ink">{pick(exp.company, exp.companyAr)}</h3>
                                    <p className="text-sm text-ink-faint mt-0.5">
                                        {formatRange(exp.startDate, exp.endDate, exp.isCurrent, t("present"), lang)}
                                        {exp.location ? ` · ${pick(exp.location, exp.locationAr)}` : ""}
                                    </p>
                                </div>
                                {exp.employmentType && (
                                    <span className="shrink-0 text-xs font-medium text-white bg-accent rounded-full px-3 py-1">
                                        {pick(exp.employmentType, exp.employmentTypeAr)}
                                    </span>
                                )}
                            </div>

                            <div className="mt-3 divide-y divide-surface-border">
                                {exp.roles.map((role, idx) => (
                                    <RoleBlock key={idx} role={role} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
