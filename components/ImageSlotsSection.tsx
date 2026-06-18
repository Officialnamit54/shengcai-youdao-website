import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

const imageSlots = [
  {
    title: "团队形象照",
    desc: "适合放核心团队、顾问合照或办公场景。",
    src: "/images/photo-placeholder-team.svg"
  },
  {
    title: "客户沟通照",
    desc: "适合放咨询会议、方案沟通或客户陪访照片。",
    src: "/images/photo-placeholder-case.svg"
  },
  {
    title: "课程活动照",
    desc: "适合放线下沙龙、课程培训或资源中心封面。",
    src: "/images/photo-placeholder-resource.svg"
  }
];

export function ImageSlotsSection() {
  return (
    <section className="bg-mist py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="品牌图片位"
          title="预留真实照片位置，让官网更有可信感"
          desc="这些位置后续可以替换为团队、办公环境、客户沟通和课程活动照片，帮助访客更快建立信任。"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {imageSlots.map((slot) => (
            <article
              key={slot.title}
              className="overflow-hidden rounded-lg border border-brand/10 bg-white shadow-soft"
            >
              <Image
                src={slot.src}
                alt={`${slot.title}图片预留位`}
                width={960}
                height={640}
                className="h-auto w-full"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{slot.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{slot.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
