import { Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-mist py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-[30px] bg-[linear-gradient(160deg,#141a2f_0%,#1d2440_52%,#283252_100%)] p-8 text-white shadow-[0_26px_60px_rgba(20,26,47,0.24)]">
          <p className="text-sm font-semibold text-gold">联系我们</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            先聊清楚问题，再决定服务怎么做
          </h2>
          <p className="mt-5 text-base leading-8 text-white/75">
            留下企业基本情况和当前困惑，我们会从合规风险、财务管理和经营阶段三个角度给出初步判断。
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href={`tel:${site.phone}`}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-white/90 backdrop-blur transition hover:bg-white/12"
            >
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <PhoneCall size={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">电话咨询</span>
                <span className="mt-1 block text-base font-medium">{site.phone}</span>
              </span>
            </a>
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-white/90 backdrop-blur transition hover:bg-white/12"
              >
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Mail size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">邮箱联系</span>
                  <span className="mt-1 block break-all text-base font-medium">{site.email}</span>
                </span>
              </a>
            ) : null}
            <p className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-white/90 backdrop-blur">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">公司地址</span>
                <span className="mt-1 block text-base font-medium leading-7">{site.address}</span>
              </span>
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/10 px-5 py-4 text-sm leading-7 text-white/80">
            工作日优先响应，适合财税诊断、架构梳理、经营数据整理与顾问咨询预约。
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <h3 className="text-2xl font-semibold text-ink">免费咨询表单</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            当前为前端演示表单，已包含基础校验。正式上线时可接入后端、企业微信或 CRM。
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
