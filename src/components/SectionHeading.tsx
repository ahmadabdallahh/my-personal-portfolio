import type { LucideIcon } from "lucide-react";

export default function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="w-9 h-9 rounded-full bg-accent-light text-accent-dark flex items-center justify-center">
        <Icon size={18} />
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}
