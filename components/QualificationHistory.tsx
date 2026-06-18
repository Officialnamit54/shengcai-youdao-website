const history = [
  { year: "2026", desc: "升级企业服务集团官网，强化跨境电商财税合规与老板顾问服务。" },
  { year: "2025", desc: "完善共享财务总监、股权架构、企业财税合规等服务模块。" },
  { year: "2024", desc: "持续服务电商企业、跨境电商企业和初创公司，沉淀行业服务流程。" },
  { year: "2023", desc: "拓展工商注册、代理记账、税务筹划、财务咨询等一站式企业服务。" },
  { year: "未来", desc: "以专业、可信、顾问式服务陪伴企业长期健康经营。" }
];

export function QualificationHistory() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-shell">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-brand">我们的发展历程</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            围绕企业经营需求持续升级
          </h2>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-brand/20 md:left-1/2" />
          <div className="grid gap-8">
            {history.map((item, index) => (
              <article
                key={item.year}
                className={`relative grid gap-4 md:grid-cols-2 ${index % 2 ? "" : "md:text-right"}`}
              >
                <div className={index % 2 ? "md:col-start-2" : ""}>
                  <div className="rounded-lg border border-brand/10 bg-mist p-6 shadow-soft">
                    <p className="text-3xl font-semibold text-brand">{item.year}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                </div>
                <span className="absolute left-2 top-7 h-5 w-5 rounded-full border-4 border-white bg-brand shadow md:left-1/2 md:-translate-x-1/2" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
