import { iconMap } from "@/data/site";
import type { IconName } from "@/data/site";

type IconCardProps = {
  icon: IconName;
  title: string;
  desc: string;
  tone?: "navy" | "mint" | "gold";
};

const toneClass = {
  navy: "bg-brand text-white",
  mint: "bg-mint text-white",
  gold: "bg-gold text-white"
};

export function IconCard({ icon, title, desc, tone = "navy" }: IconCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-ocean/30">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${toneClass[tone]}`}
      >
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}
