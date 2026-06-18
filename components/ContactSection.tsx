import { Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-mist py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-lg bg-navy p-8 text-white shadow-soft">
          <p className="text-sm font-semibold text-gold">联系我们</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            先聊清楚问题，再决定服务怎么做
          </h2>
          <p className="mt-5 text-base leading-8 text-white/75">
            留下企业基本情况和当前困惑，我们会从合规风险、财务管理和经营阶段三个角度给出初步判断。
          </p>
          <div className="mt-8 grid gap-4 text-sm">
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 text-white/85">
              <PhoneCall size={18} className="text-gold" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/85">
              <Mail size={18} className="text-gold" />
              {site.email}
            </a>
            <p className="flex items-center gap-3 text-white/85">
              <MapPin size={18} className="text-gold" />
              {site.address}
            </p>
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
