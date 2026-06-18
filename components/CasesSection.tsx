import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { cases } from "@/data/site";

export function CasesSection() {
  return (
    <section id="cases" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="成功案例"
          title="用真实经营问题，验证服务价值"
          desc="以下为可替换的匿名案例结构，后续可以根据你的真实客户经历改写成更有说服力的版本。"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft"
            >
              <Image
                src="/images/photo-placeholder-case.svg"
                alt={`${item.title}案例图片预留位`}
                width={720}
                height={460}
                className="h-auto w-full"
              />
              <div className="p-6">
              <span className="rounded-md bg-mist px-3 py-1 text-sm font-semibold text-ocean">
                {item.industry}
              </span>
              <h3 className="mt-5 text-xl font-semibold leading-8 text-ink">{item.title}</h3>
              <dl className="mt-5 space-y-4 text-sm leading-7">
                <div>
                  <dt className="font-semibold text-navy">客户背景</dt>
                  <dd className="mt-1 text-slate-600">{item.background}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">面临问题</dt>
                  <dd className="mt-1 text-slate-600">{item.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">解决方案</dt>
                  <dd className="mt-1 text-slate-600">{item.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">结果</dt>
                  <dd className="mt-1 text-slate-600">{item.result}</dd>
                </div>
              </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
