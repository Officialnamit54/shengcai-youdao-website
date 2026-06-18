const stages = [
  {
    stage: "创业期",
    items: ["工商注册", "代理记账", "财税基础", "合规资料清单"]
  },
  {
    stage: "成长期",
    items: ["财税外包", "利润核算", "财务制度体系", "费用与库存流程"]
  },
  {
    stage: "发展期",
    items: ["财务顾问", "税务筹划", "股权架构", "融资规划"]
  },
  {
    stage: "成熟期",
    items: ["共享财务总监", "组织内控", "经营报表", "定期复盘"]
  }
];

export function QualificationStages() {
  return (
    <section id="solutions" className="bg-mist py-20">
      <div className="section-shell">
        <span id="tools" className="block scroll-mt-28" />
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold text-brand">专注企业财税合规管理</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            按企业阶段配置服务内容
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            从创业搭建到成熟管理，围绕工商、财税、股权、财务管理与经营分析，为企业提供阶段化服务。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <article
              key={stage.stage}
              className="rounded-lg border border-brand/10 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-ink">{stage.stage}</h3>
              </div>
              <div className="mt-6 grid gap-3">
                {stage.items.map((item) => (
                  <div key={item} className="rounded-md bg-rose px-4 py-3 text-sm font-semibold text-brand">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
