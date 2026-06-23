import Image from "next/image";

const partnerLogos = [
  "/images/amzcfo/cooperator-01.png",
  "/images/amzcfo/cooperator-02.png",
  "/images/amzcfo/cooperator-03.png",
  "/images/amzcfo/cooperator-04.png",
  "/images/amzcfo/cooperator-05.png",
  "/images/amzcfo/cooperator-06.png"
];

export function QualificationPartners() {
  return (
    <section id="resources" className="bg-[linear-gradient(180deg,#ffffff_0%,#fff9f8_100%)] py-16">
      <div className="section-shell">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">合作企业单位</span>
            <h2 className="mt-3 text-3xl font-semibold text-ink">合作客户与伙伴展示</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              以长期服务与深度沟通为基础，逐步沉淀更贴合企业阶段的财税、经营与管理协同经验。
            </p>
          </div>
          <a href="#contact" className="hidden text-sm font-semibold text-brand md:inline-flex">
            查看更多 &gt;&gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partnerLogos.map((logo) => (
            <div
              key={logo}
              className="group flex min-h-28 items-center justify-center rounded-[22px] border border-brand/10 bg-white px-4 py-5 shadow-[0_18px_45px_rgba(128,30,36,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(128,30,36,0.12)]"
            >
              <Image
                src={logo}
                alt="合作企业单位标识"
                width={220}
                height={80}
                className="h-auto w-full object-contain transition group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
