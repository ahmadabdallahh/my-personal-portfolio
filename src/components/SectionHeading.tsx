import type { LucideIcon } from "lucide-react";

export default function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center">
        <Icon size={20} />
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}
