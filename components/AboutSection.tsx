import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const stats = [
  { value: "4", label: "核心服务模块" },
  { value: "6", label: "标准交付流程" },
  { value: "多行业", label: "电商与成长型企业场景" }
];

export function AboutSection() {
  return (
    <section id="about" className="bg-mist py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
          <Image
            src="/images/photo-placeholder-team.svg"
            alt="企业财税顾问服务占位图"
            width={720}
            height={480}
            className="h-auto w-full rounded-md"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="关于我们"
            title="用顾问式服务，陪企业把账税和经营理顺"
            desc={`${site.name}聚焦跨境电商财税合规、电商财税合规、企业管理咨询、财务咨询、工商注册、代理记账与税务筹划等服务。我们更关注老板真正要解决的问题：风险能不能看清，利润能不能算明，流程能不能落地。`}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-3xl font-semibold text-navy">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
