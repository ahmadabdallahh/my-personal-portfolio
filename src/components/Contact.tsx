"use client";

import { useState } from "react";
import { Check, Copy, Mail, MessageCircle, Phone } from "lucide-react";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import SectionHeading from "./SectionHeading";
import type { Profile } from "@/lib/types";

const ICONS: Record<string, React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle,
  phone: Phone,
};

function CopyRow({ platform, value, href }: { platform: string; value: string; href: string }) {
  const [copied, setCopied] = useState(false);
  const Icon = ICONS[platform] ?? Mail;

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
    <div className="flex items-center justify-between gap-4 py-3.5 border-b border-surface-border last:border-b-0">
      <div className="flex items-center gap-3 min-w-0">
        <span className="w-9 h-9 shrink-0 rounded-full bg-surface-muted flex items-center justify-center text-ink-soft">
          <Icon size={16} />
        </span>
        <div className="min-w-0">
          <p className="text-xs text-ink-faint capitalize">{platform}</p>
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-ink truncate block hover:text-accent-dark">
            {value}
          </a>
        </div>
      </div>
      <button
        onClick={copy}
        className="shrink-0 text-xs font-medium text-ink-soft hover:text-accent-dark inline-flex items-center gap-1"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function Contact({ profile }: { profile: Profile }) {
  const rows = profile.socials
    .filter((s) => ["email", "linkedin", "github", "whatsapp", "phone"].includes(s.platform))
    .map((s) => ({
      platform: s.platform,
      href: s.url,
      value: s.url.replace(/^mailto:|^tel:|^https?:\/\//, ""),
    }));

  return (
    <section id="contact" className="section-container py-16 md:py-24">
      <SectionHeading icon={Mail} title="Get in Touch" />
      <p className="text-ink-soft -mt-6 mb-8 max-w-xl">
        Reach out for details on any project, or to stay updated on what I&apos;m building next.
      </p>

      <div className="rounded-2xl border border-surface-border bg-surface-card px-6">
        {rows.map((r) => (
          <CopyRow key={r.platform} {...r} />
        ))}
      </div>
    </section>
  );
}
