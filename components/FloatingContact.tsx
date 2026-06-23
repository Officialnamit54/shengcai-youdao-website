"use client";

import Image from "next/image";
import { PhoneCall, QrCode } from "lucide-react";
import { site } from "@/data/site";

export function FloatingContact() {
  return (
    <>
      <aside
        aria-label="悬浮联系方式"
        className="fixed right-4 top-1/2 z-[60] hidden -translate-y-1/2 overflow-visible rounded-lg border border-brand/15 bg-white shadow-soft lg:block"
      >
        <div className="group relative">
          <button
            type="button"
            aria-label="查看二维码"
            className="flex h-24 w-24 items-center justify-center border-b border-brand/10 text-brand transition hover:bg-rose"
          >
            <QrCode size={30} strokeWidth={1.8} />
          </button>
          <div className="pointer-events-none absolute right-[108px] top-0 w-52 translate-x-2 rounded-[22px] border border-brand/15 bg-white p-4 text-center opacity-0 shadow-[0_18px_40px_rgba(26,28,36,0.18)] transition group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-x-0 group-focus-within:opacity-100">
            <Image
              src={site.qrImage}
              alt="企业微信客服二维码"
              width={240}
              height={240}
              className="h-auto w-full rounded-2xl"
            />
            <p className="mt-3 text-xs font-semibold text-ink">扫码添加微信，获取一对一咨询支持</p>
          </div>
        </div>
        <a
          href={`tel:${site.phone}`}
          aria-label={`电话咨询 ${site.phone}`}
          className="flex h-24 w-24 items-center justify-center text-brand transition hover:bg-rose"
        >
          <PhoneCall size={30} strokeWidth={1.8} />
        </a>
      </aside>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-brand/10 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(128,30,36,0.12)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={`tel:${site.phone}`}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-brand px-4 text-sm font-semibold text-white"
          >
            <PhoneCall size={18} />
            电话咨询
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-brand/25 bg-white px-4 text-sm font-semibold text-brand"
          >
            在线留言
          </a>
        </div>
      </div>
    </>
  );
}
