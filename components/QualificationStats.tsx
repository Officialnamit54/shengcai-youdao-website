const stats = [
  { value: "10 年+", label: "企业财税与经营服务经验" },
  { value: "99%+", label: "服务过程满意度目标" },
  { value: "1000+", label: "企业咨询与辅导案例沉淀" },
  { value: "20 名+", label: "财税、工商、管理顾问团队" }
];

export function QualificationStats() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-lg border border-brand/10 bg-white shadow-soft md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-brand/10 px-6 py-8 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-4xl font-semibold text-brand md:text-5xl">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
