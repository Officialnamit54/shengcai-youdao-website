import Image from "next/image";
import { site } from "@/data/site";

export function QualificationIntro() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <span className="eyebrow">生财有道企业服务集团</span>
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
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-brand/10 bg-[#fff7f7] px-5 py-4 shadow-sm">
              <p className="text-2xl font-semibold text-brand">10 年+</p>
              <p className="mt-1 text-sm text-slate-600">企业服务经验沉淀</p>
            </div>
            <div className="rounded-2xl border border-brand/10 bg-white px-5 py-4 shadow-sm">
              <p className="text-2xl font-semibold text-brand">1000+</p>
              <p className="mt-1 text-sm text-slate-600">咨询与辅导案例</p>
            </div>
            <div className="rounded-2xl border border-brand/10 bg-white px-5 py-4 shadow-sm">
              <p className="text-2xl font-semibold text-brand">1 对 1</p>
              <p className="mt-1 text-sm text-slate-600">顾问式支持服务</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[36px] bg-gradient-to-br from-brand/10 to-[#d8a031]/10 blur-sm" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white p-4 shadow-[0_28px_70px_rgba(26,28,36,0.12)]">
            <Image
              src="/images/amzcfo/banner-1.png"
              alt="跨境财税服务展示图"
              width={1920}
              height={420}
              className="h-auto w-full rounded-[26px] object-cover"
            />
            <div className="absolute bottom-8 left-8 max-w-xs rounded-2xl bg-white/92 p-5 shadow-[0_18px_35px_rgba(26,28,36,0.16)] backdrop-blur">
              <p className="text-sm font-semibold text-brand">更清楚的经营判断</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                让账、税、利润与组织安排形成一套可持续运转的经营支持系统。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
