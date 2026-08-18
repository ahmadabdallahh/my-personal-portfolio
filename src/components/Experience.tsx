"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Experience as ExperienceType } from "@/lib/types";

function formatRange(start?: string, end?: string, current?: boolean) {
  const fmt = (d?: string) =>
    d ? new Date(`${d}-01`).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
  if (current) return `${fmt(start)} — Present`;
  if (start && end) return `${fmt(start)} — ${fmt(end)}`;
  return fmt(start) || fmt(end);
}

function RoleBlock({ role }: { role: ExperienceType["roles"][number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 first:mt-0">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">{role.title}</h4>
        <span className="text-xs text-ink-faint">
          {formatRange(role.startDate, role.endDate)}
        </span>
      </div>
      {role.bullets?.length > 0 && (
        <>
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-1 inline-flex items-center gap-1 text-xs text-accent-dark font-medium"
          >
            View details
            <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <ul className="mt-2 space-y-1.5">
              {role.bullets.map((b, i) => (
                <li key={i} className="text-sm text-ink-soft leading-relaxed pl-3 relative">
                  <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-ink-faint" />
                  {b}
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
  return (
    <section id="experience" className="section-container py-16 md:py-24">
      <SectionHeading icon={Briefcase} title="Experience" />

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-border" />

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
              className={`absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-surface ${
                exp.isCurrent ? "bg-accent" : "bg-ink-faint"
              }`}
            />

            <div className="rounded-2xl border border-surface-border bg-surface-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-ink">{exp.company}</h3>
                  <p className="text-xs text-ink-faint mt-0.5">
                    {formatRange(exp.startDate, exp.endDate, exp.isCurrent)}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                </div>
                {exp.employmentType && (
                  <span className="shrink-0 text-xs font-medium text-accent-dark bg-accent-light rounded-full px-2.5 py-1">
                    {exp.employmentType}
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
