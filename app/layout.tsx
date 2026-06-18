import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.shortName}｜跨境电商财税合规与企业管理咨询`,
  description:
    "广东省生财有道企业服务集团有限公司，面向跨境电商老板、电商老板、企业老板和初创公司，提供企业税务合规、跨境电商财税合规、股权架构、共享财务总监等服务。",
  keywords: [
    "生财有道",
    "跨境电商财税合规",
    "企业税务合规",
    "股权架构",
    "共享财务总监",
    "代理记账",
    "税务筹划",
    "企业管理咨询"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
