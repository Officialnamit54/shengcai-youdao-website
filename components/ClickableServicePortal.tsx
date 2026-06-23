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
            <div className="absolute -top-5 right-6 hidden rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-semibold text-brand shadow-lg backdrop-blur md:block">
              精细化财税顾问服务
            </div>
            <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white p-4 shadow-[0_28px_70px_rgba(128,30,36,0.16)]">
              <div className="absolute inset-x-6 top-0 h-24 rounded-b-[28px] bg-gradient-to-b from-brand/10 to-transparent" />
              <Image
                src="/images/custom/uploads/hero-upload-1-clean.jpg"
                alt="跨境电商股权激励适配图"
                width={1600}
                height={1040}
                className="h-auto w-full rounded-[26px] object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-4 hidden w-44 rounded-[26px] border border-white/80 bg-white p-3 shadow-[0_20px_40px_rgba(26,28,36,0.16)] md:block">
              <Image
                src="/images/amzcfo/case-1.png"
                alt="顾问案例头像"
                width={240}
                height={240}
                className="h-36 w-full rounded-[18px] object-cover"
              />
              <p className="mt-3 text-sm font-semibold text-ink">顾问案例展示</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">围绕企业阶段配置更贴合的财税与经营支持。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
