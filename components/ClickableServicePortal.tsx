import Image from "next/image";

export function ClickableServicePortal() {
  return (
    <section id="home" className="bg-[#f2f3f5] pt-44 xl:pt-28">
      <div className="section-shell relative min-h-[380px] py-10">
        <div className="absolute right-[18%] top-24 hidden h-16 w-16 overflow-hidden rounded-full bg-white p-1 shadow-soft md:block">
          <Image
            src="/images/qr-placeholder.svg"
            alt="顾问头像占位"
            width={240}
            height={240}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="max-w-xl pt-24">
          <p className="text-sm font-semibold text-brand">企业服务入口</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
            选择适合企业阶段的财税合规服务
          </h1>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            通过顶部导航和财税合规下拉菜单，快速进入顾问、海外财税、境内财税等服务内容。
          </p>
        </div>
      </div>
    </section>
  );
}
