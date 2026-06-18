import { clientLogos } from "@/data/site";

export function QualificationPartners() {
  return (
    <section id="resources" className="bg-white py-16">
      <div className="section-shell">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-brand">合作企业单位</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">预留客户与合作伙伴展示位</h2>
          </div>
          <a href="#contact" className="hidden text-sm font-semibold text-brand md:inline-flex">
            查看更多 &gt;&gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {clientLogos.concat(clientLogos).slice(0, 12).map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex min-h-24 items-center justify-center rounded-lg border border-brand/10 bg-mist px-4 text-center text-sm font-semibold text-slate-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
