import { CheckCircle2 } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { SectionHeading } from "@/components/SectionHeading";
import { solutions } from "@/data/site";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-mist py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="整体解决方案"
          title="按企业阶段，配置合适的财税与管理方案"
          desc="不急着推服务，先看企业处在哪个阶段，再判断需要解决的是基础合规、数据管理，还是架构升级。"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.stage}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
            >
              <span className="inline-flex rounded-md bg-navy px-3 py-1 text-sm font-semibold text-white">
                {solution.stage}
              </span>
              <h3 className="mt-5 text-xl font-semibold leading-8 text-ink">{solution.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{solution.desc}</p>
              <ul className="mt-5 space-y-3">
                {solution.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-mint" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ActionButton href="#contact" variant="secondary">
            获取阶段诊断
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
