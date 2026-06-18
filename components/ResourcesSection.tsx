import Image from "next/image";
import { ActionButton } from "@/components/ActionButton";
import { SectionHeading } from "@/components/SectionHeading";
import { iconMap, resources } from "@/data/site";

export function ResourcesSection() {
  return (
    <section id="resources" className="bg-white py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="课程 / 资源"
            title="把复杂财税问题，先讲清楚"
            desc="资源中心用于承接文章、课程和资料下载，帮助客户在咨询前先建立基本判断，也提升官网的长期 SEO 价值。"
          />
          <div className="grid gap-4">
            {resources.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-mist text-ocean">
                      <Icon size={21} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gold">{item.type}</span>
                      <h3 className="mt-1 text-lg font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-6">
            <ActionButton href="#contact" variant="ghost">
              获取资料清单
            </ActionButton>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-mist p-3 shadow-soft">
          <Image
            src="/images/photo-placeholder-resource.svg"
            alt="课程与资源中心占位图"
            width={720}
            height={480}
            className="h-auto w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
