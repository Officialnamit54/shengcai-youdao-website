import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function FaqSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="咨询前，先把关键问题说清楚"
          desc="这些问题来自老板在首次沟通中最常关注的点，能帮助你判断是否需要进一步诊断。"
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
                {item.question}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-mist text-navy group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
