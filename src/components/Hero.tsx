"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, MapPin, MessageCircle } from "lucide-react";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import type { Profile } from "@/lib/types";

const ICONS: Record<string, React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle,
  cv: FileText,
};

export default function Hero({ profile }: { profile: Profile }) {
  const cv = profile.socials.find((s) => s.platform === "cv");

  return (
    <section id="about" className="section-container pt-20 pb-16 md:pt-28 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        {profile.status && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium px-3 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {profile.status}
          </span>
        )}

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.1]">
          {profile.name}
        </h1>

        <p className="mt-2 text-2xl md:text-3xl font-medium text-ink-soft">
          {profile.title}
        </p>

        {profile.location && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-faint">
            <MapPin size={14} />
            {profile.location}
          </p>
        )}

        <p className="mt-6 text-lg text-ink-soft leading-relaxed">{profile.bio}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-6 py-3 transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          {cv && (
            <a
              href={cv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border hover:border-ink text-ink text-sm font-semibold px-6 py-3 transition-colors"
            >
              Preview CV
              <FileText size={16} />
            </a>
          )}
        </div>

        <div className="mt-7 flex items-center gap-4">
          {profile.socials
            .filter((s) => s.platform !== "cv")
            .map((s) => {
              const Icon = ICONS[s.platform] ?? Mail;
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-surface-border text-ink-faint hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}
