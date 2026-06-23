import Image from "next/image";

export function ClickableServicePortal() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(235,29,39,0.12),transparent_24rem),linear-gradient(180deg,#fff7f7_0%,#fffdfc_52%,#ffffff_100%)] pt-40 xl:pt-28"
    >
      <div className="section-shell relative grid min-h-[420px] items-center gap-10 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:py-16">
        <div className="absolute -left-12 top-12 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-[#d8a031]/10 blur-3xl" />

        <div className="relative z-10 max-w-xl pt-8 lg:pt-16">
          <span className="eyebrow">企业服务入口</span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
            选择适合企业阶段的财税合规服务
          </h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            通过顶部导航和财税合规下拉菜单，快速进入顾问、海外财税、境内财税等服务内容。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <span className="rounded-full border border-brand/15 bg-white px-4 py-2 shadow-sm">跨境电商财税合规</span>
            <span className="rounded-full border border-brand/15 bg-white px-4 py-2 shadow-sm">顾问式一对一诊断</span>
            <span className="rounded-full border border-brand/15 bg-white px-4 py-2 shadow-sm">企业经营数据梳理</span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_18px_45px_rgba(128,30,36,0.08)] backdrop-blur">
              <p className="text-sm font-semibold text-brand">顾问式陪跑</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                从账税风险到经营判断，给老板更清楚、可落地的处理路径。
              </p>
            </div>
            <div className="rounded-2xl border border-brand/10 bg-[#fff8f2] p-5 shadow-[0_18px_45px_rgba(216,160,49,0.12)]">
              <p className="text-sm font-semibold text-brand">重点场景</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">适配跨境卖家、成长企业、多主体团队与合伙经营场景。</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative mx-auto max-w-[640px]">
            <div className="overflow-hidden rounded-[34px] border border-white/80 bg-white shadow-[0_28px_70px_rgba(128,30,36,0.16)]">
              <Image
                src="/images/custom/generated/finance-scene-hero-1.png"
                alt="财务规划顾问场景图"
                width={1695}
                height={928}
                className="block h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
