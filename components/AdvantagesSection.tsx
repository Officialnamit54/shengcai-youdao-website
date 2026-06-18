import { IconCard } from "@/components/IconCard";
import { SectionHeading } from "@/components/SectionHeading";
import { advantages } from "@/data/site";

export function AdvantagesSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="品牌优势"
          title="服务不是给一份建议，而是陪你落到经营里"
          desc="我们用清晰流程、透明交付和持续跟进，帮助企业把财税合规从被动处理变成主动管理。"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              tone={index === 1 || index === 4 ? "gold" : index === 2 ? "mint" : "navy"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
