import { IconCard } from "@/components/IconCard";
import { SectionHeading } from "@/components/SectionHeading";
import { painPoints } from "@/data/site";

export function PainPointsSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="常见痛点"
          title="老板最担心的，往往不是记账本身"
          desc="真正影响企业长期发展的，是利润看不清、风险说不准、流程落不下和关键决策缺少依据。"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, index) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              tone={index % 3 === 0 ? "mint" : index % 3 === 1 ? "navy" : "gold"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
