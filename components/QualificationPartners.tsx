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
    <section id="resources" className="bg-white py-16">
      <div className="section-shell">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-brand">合作企业单位</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">合作客户与伙伴展示</h2>
          </div>
          <a href="#contact" className="hidden text-sm font-semibold text-brand md:inline-flex">
            查看更多 &gt;&gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partnerLogos.map((logo) => (
            <div
              key={logo}
              className="flex min-h-24 items-center justify-center rounded-lg border border-brand/10 bg-mist px-4 py-4 shadow-soft"
            >
              <Image
                src={logo}
                alt="合作企业单位标识"
                width={220}
                height={80}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
