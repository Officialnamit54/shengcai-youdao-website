import { clientLogos } from "@/data/site";

export function PartnersSection() {
  return (
    <section className="bg-mist py-16">
      <div className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-ocean">合作伙伴 / 客户</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink md:text-3xl">
              持续服务不同阶段的成长型企业
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            当前为 Logo 墙占位，后续可替换为真实客户或合作伙伴标识。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="flex min-h-24 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-slate-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
