import type { Profile } from "@/lib/types";

const NAV_ITEMS = ["About", "Skills", "Projects", "Contact"];

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-surface-border">
      <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav className="flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-ink-faint hover:text-ink transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
