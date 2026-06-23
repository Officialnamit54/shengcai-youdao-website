import Image from "next/image";
import { site } from "@/data/site";

export function QualificationIntro() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="text-sm font-semibold text-brand">生财有道企业服务集团</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-ink md:text-5xl">
            老板身边的财税合规与企业经营顾问
          </h1>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            <p>
              {site.name}聚焦跨境电商财税合规、电商财税合规、企业管理咨询、财务咨询、工商注册、代理记账、税务筹划等服务。
            </p>
            <p>
              我们以顾问式服务帮助企业梳理账税、架构、流程与经营数据，让老板在关键节点看得清风险、算得明利润、做得出决策。
            </p>
            <p>
              面向跨境电商老板、电商老板、企业老板和初创公司，提供从基础合规到财务管理升级的一站式解决方案。
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-brand/10 bg-rose p-3 shadow-soft">
          <Image
            src="/images/amzcfo/banner-1.png"
            alt="跨境财税服务展示图"
            width={1920}
            height={420}
            className="h-auto w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
