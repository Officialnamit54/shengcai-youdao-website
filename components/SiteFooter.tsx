import Image from "next/image";
import Link from "next/link";
import { navItems, services, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.8fr_0.7fr]">
        <div>
          <div className="inline-flex rounded-lg bg-white p-3">
            <Image
              src="/brand/shengcai-logo-horizontal.svg"
              alt={`${site.shortName}企业服务集团 Logo`}
              width={720}
              height={190}
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-4 text-xs text-white/50">{site.name}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">{site.description}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">服务链接</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            {services.map((service) => (
              <Link key={service.title} href="#services" className="hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">网站导航</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">二维码</h3>
          <div className="mt-4 rounded-lg bg-white p-3">
            <Image
              src="/images/qr-placeholder.svg"
              alt="企业微信二维码占位图"
              width={240}
              height={240}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-xs text-white/50">替换为企业微信或公众号二维码</p>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        © 2026 {site.name}. All rights reserved. 备案号占位
      </div>
    </footer>
  );
}
