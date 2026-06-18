import Image from "next/image";
import { ActionButton } from "@/components/ActionButton";
import { iconMap, quickEntries, site } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="overflow-hidden pt-32 md:pt-36">
      <div className="section-shell grid items-center gap-12 pb-14 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
        <div>
          <div className="eyebrow">跨境电商财税合规 · 企业经营顾问</div>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-normal text-ink md:text-6xl">
            让企业财税合规更清晰，经营决策更稳健
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            {site.shortName}面向跨境电商老板、电商老板、企业老板和初创公司，
            提供税务合规、股权架构、共享财务总监等一站式顾问服务。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionButton href="#contact" className="w-full sm:w-auto">
              免费咨询
            </ActionButton>
            <ActionButton href="#services" variant="ghost" className="w-full sm:w-auto">
              查看服务方案
            </ActionButton>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {["合规诊断", "财务管理", "长期陪跑"].map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3">
                <span className="font-semibold text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-mint/10" />
          <div className="relative rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            <Image
              src="/images/photo-placeholder-team.svg"
              alt="财税合规与经营分析占位图"
              width={960}
              height={720}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>
          <div className="absolute -bottom-5 left-5 max-w-[260px] rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-ink">顾问式服务</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">
              从风险识别到方案落地，帮助老板把复杂问题拆清楚。
            </p>
          </div>
        </div>
      </div>

      <div className="section-shell grid gap-4 pb-16 md:grid-cols-3">
        {quickEntries.map((entry) => {
          const Icon = iconMap[entry.icon];

          return (
            <a
              key={entry.title}
              href={entry.href}
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-ocean/30"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist text-ocean group-hover:bg-ocean group-hover:text-white">
                  <Icon size={21} />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{entry.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{entry.desc}</span>
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
