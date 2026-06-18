import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-gold">
            服务流程
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-4xl">
            每一步都有边界，也有交付
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
            从首次沟通到定期复盘，先诊断再设计方案，减少信息不对称，让合作过程更可预期。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="relative rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-sm font-semibold text-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {index === 0
                  ? "了解企业现状与关键诉求"
                  : index === 1
                    ? "梳理资料与风险重点"
                    : index === 2
                      ? "明确服务范围和路径"
                      : index === 3
                        ? "确认节点、责任与交付"
                        : index === 4
                          ? "推动方案执行与反馈"
                          : "按阶段优化管理动作"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
