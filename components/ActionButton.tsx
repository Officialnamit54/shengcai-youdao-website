import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ActionButton({
  href,
  children,
  variant = "primary",
  className = ""
}: ActionButtonProps) {
  const variants = {
    primary:
      "bg-brand text-white shadow-lg shadow-brand/20 hover:bg-[#d91622] focus-visible:outline-brand",
    secondary:
      "bg-navy text-white shadow-lg shadow-navy/15 hover:bg-ink focus-visible:outline-navy",
    ghost:
      "border border-brand/25 bg-white text-brand hover:border-brand hover:bg-rose focus-visible:outline-brand"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
