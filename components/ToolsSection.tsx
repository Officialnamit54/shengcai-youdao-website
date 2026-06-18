import { Calculator, Download, FileSearch, Gauge } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { tools } from "@/data/site";

const icons = [Calculator, Gauge, FileSearch, Download];

export function ToolsSection() {
  return (
    <section id="tools" className="bg-mist py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="工具中心"
          title="先做一次轻量自查，再决定下一步"
          desc="工具入口暂以占位形式呈现，后续可以接入在线测算、表单问卷或资料下载。"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => {
            const Icon = icons[index] ?? Calculator;

            return (
              <a
                key={tool}
                href="#contact"
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-ocean/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{tool}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  提交需求后，顾问会根据企业现状提供对应清单或初步建议。
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
