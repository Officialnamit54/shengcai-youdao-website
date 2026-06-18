type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  desc: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-10 max-w-3xl text-center"
          : "mb-10 max-w-3xl text-left"
      }
    >
      {eyebrow ? <div className="eyebrow mb-4">{eyebrow}</div> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-ink md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{desc}</p>
    </div>
  );
}
