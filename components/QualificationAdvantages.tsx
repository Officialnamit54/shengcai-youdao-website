import { ClipboardCheck, Database, ShieldCheck, UsersRound } from "lucide-react";

const advantages = [
  {
    icon: UsersRound,
    title: "团队",
    desc: "以财税顾问、工商服务、企业管理咨询团队为基础，为企业提供更完整的业务判断。"
  },
  {
    icon: ShieldCheck,
    title: "质量",
    desc: "坚持以质量为本、以客户需求为导向，重视服务流程、资料交付和后续跟进。"
  },
  {
    icon: ClipboardCheck,
    title: "理解",
    desc: "长期关注跨境电商、电商企业和成长型企业经营场景，理解老板面对的真实问题。"
  },
  {
    icon: Database,
    title: "资源",
    desc: "沉淀企业注册、账税合规、股权架构、共享财务管理等多类型服务资料与案例。"
  }
];

export function QualificationAdvantages() {
  return (
    <section id="services" className="bg-mist py-20">
      <div className="section-shell">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-brand">我们的优势</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
              用专业团队和标准流程，支撑长期服务
            </h2>
          </div>
          <p className="text-base leading-8 text-slate-600">
            不只处理单个问题，而是从企业阶段、业务模式、账税资料和管理流程出发，帮助企业建立更稳定的合规基础。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-lg border border-brand/10 bg-white p-6 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand text-white">
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
