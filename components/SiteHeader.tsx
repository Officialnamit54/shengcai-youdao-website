"use client";

import { Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems, site } from "@/data/site";

const taxDropdown = [
  { label: "财税合规顾问", href: "#solutions" },
  { label: "香港及海外财税", href: "#services" },
  { label: "境内财税", href: "#contact" }
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [taxOpen, setTaxOpen] = React.useState(true);
  const [activeHref, setActiveHref] = React.useState("#about");
  const otherNavItems = navItems.slice(1);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="section-shell flex min-h-28 flex-wrap items-center justify-between gap-4 py-3 xl:flex-nowrap xl:py-0">
        <Link href="#home" className="flex min-w-0 items-center gap-4" aria-label="返回首页">
          <Image
            src="/brand/shengcai-logo-horizontal.svg"
            alt={`${site.shortName}企业服务集团 Logo`}
            width={720}
            height={190}
            priority
            className="h-12 w-auto max-w-[150px] xl:h-14 xl:max-w-[190px]"
          />
          <span className="hidden h-14 w-px bg-brand sm:block" />
          <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-md bg-brand text-center text-lg font-semibold leading-tight text-white shadow-sm sm:flex">
            生财
            <br />
            有道
          </span>
        </Link>

        <nav
          className="order-3 flex min-w-0 basis-full items-center justify-start gap-6 overflow-visible whitespace-nowrap xl:order-none xl:basis-auto xl:justify-center xl:gap-14"
          aria-label="主导航"
        >
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setTaxOpen((value) => !value)}
              className="py-2 text-xl font-medium tracking-normal text-brand transition hover:text-brand xl:text-2xl"
              aria-expanded={taxOpen}
              aria-haspopup="menu"
            >
              财税合规
            </button>
            {taxOpen ? (
              <div className="absolute left-1/2 top-full z-50 mt-7 w-56 -translate-x-1/2 rounded-md bg-white py-4 text-center shadow-soft ring-1 ring-brand/10">
                {taxDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setTaxOpen(false);
                    }}
                    className="block px-5 py-4 text-lg font-medium text-ink transition hover:bg-rose hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {otherNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 py-2 text-xl font-medium tracking-normal transition hover:text-brand xl:text-2xl ${
                activeHref === item.href ? "text-brand" : "text-ink"
              }`}
              onClick={() => {
                setActiveHref(item.href);
                setTaxOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 text-xl font-medium text-slate-400 xl:block">
          <a href="#contact" className="transition hover:text-brand">
            登录
          </a>
          <span className="px-2">/</span>
          <a href="#contact" className="transition hover:text-brand">
            注册
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "关闭导航" : "打开导航"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="hidden h-11 w-11 items-center justify-center rounded-md border border-brand/15 bg-white text-brand"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand/10 bg-white lg:hidden">
          <nav className="section-shell grid gap-1 py-4" aria-label="移动端导航">
            <button
              type="button"
              onClick={() => setTaxOpen((value) => !value)}
              className="rounded-md px-3 py-3 text-left text-base font-medium text-brand hover:bg-rose"
            >
              财税合规
            </button>
            {taxOpen
              ? taxDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setOpen(false);
                      setTaxOpen(false);
                    }}
                    className="rounded-md px-6 py-3 text-base font-medium text-slate-700 hover:bg-rose hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))
              : null}
            {otherNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveHref(item.href);
                  setOpen(false);
                }}
                className={`rounded-md px-3 py-3 text-base font-medium hover:bg-rose hover:text-brand ${
                  activeHref === item.href ? "text-brand" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 text-sm font-semibold text-white"
            >
              <PhoneCall size={17} />
              电话咨询
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
