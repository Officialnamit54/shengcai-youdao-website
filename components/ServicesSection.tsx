import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { iconMap, services } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="核心服务"
          title="把财税合规做成企业经营的底层能力"
          desc="每项服务都围绕老板的真实经营问题展开，既关注风险，也关注利润、现金流和组织效率。"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-ocean/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                    <Icon size={22} />
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy transition hover:border-ocean hover:bg-ocean hover:text-white"
                    aria-label={`咨询${service.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-md bg-mist p-4">
                    <p className="text-sm font-semibold text-navy">适合对象</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{service.forWhom}</p>
                  </div>
                  <div className="rounded-md bg-mist p-4">
                    <p className="text-sm font-semibold text-navy">解决问题</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{service.solves}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
