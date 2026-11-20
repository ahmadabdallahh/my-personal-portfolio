"use client";

import { useState } from "react";
import { Check, Copy, Mail, MessageCircle, Phone } from "lucide-react";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import SectionHeading from "./SectionHeading";
import type { Profile } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

const ICONS: Record<string, React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle,
  phone: Phone,
};

const PLATFORM_LABELS: Record<string, { en: string; ar: string }> = {
  email: { en: "Email", ar: "البريد الإلكتروني" },
  linkedin: { en: "LinkedIn", ar: "لينكدإن" },
  github: { en: "GitHub", ar: "جيت هاب" },
  whatsapp: { en: "WhatsApp", ar: "واتساب" },
  phone: { en: "Phone", ar: "الهاتف" },
};

function CopyRow({ platform, value, href }: { platform: string; value: string; href: string }) {
  const [copied, setCopied] = useState(false);
  const { lang, t } = useI18n();
  const Icon = ICONS[platform] ?? Mail;
  const label = PLATFORM_LABELS[platform]?.[lang] ?? platform;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-surface-border last:border-b-0">
      <div className="flex items-center gap-4 min-w-0">
        <span className="w-10 h-10 shrink-0 rounded-full border border-surface-border flex items-center justify-center text-accent">
          <Icon size={18} />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-ink uppercase tracking-wide">{label}</p>
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-soft truncate block hover:text-accent transition-colors">
            {value}
          </a>
        </div>
      </div>
      <button
        onClick={copy}
        className="shrink-0 text-xs font-medium text-ink-faint hover:text-accent inline-flex items-center gap-1 transition-colors"
      >
        {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
        {copied ? t("copied") : t("copy")}
      </button>
    </div>
  );
}

export default function Contact({ profile }: { profile: Profile }) {
  const { t } = useI18n();
  const rows = profile.socials
    .filter((s) => ["email", "linkedin", "github", "whatsapp", "phone"].includes(s.platform))
    .map((s) => ({
      platform: s.platform,
      href: s.url,
      value: s.url.replace(/^mailto:|^tel:|^https?:\/\//, ""),
    }));

  return (
    <section id="contact" className="section-container py-16 md:py-24">
      <SectionHeading icon={Mail} title={t("sectionContact")} />
      <p className="text-ink-soft -mt-6 mb-8 max-w-xl">{t("contactLead")}</p>

      <div className="rounded-2xl border border-surface-border bg-surface-card px-6">
        {rows.map((r) => (
          <CopyRow key={r.platform} {...r} />
        ))}
      </div>
    </section>
  );
}
