"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  company: string;
  city: string;
  need: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  company: "",
  city: "",
  need: ""
};

export function ContactForm() {
  const [form, setForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = React.useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) nextErrors.name = "请填写姓名";
    if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) nextErrors.phone = "请填写有效手机号";
    if (!form.company.trim()) nextErrors.company = "请填写公司名称";
    if (!form.city.trim()) nextErrors.city = "请填写所在城市";
    if (!form.need.trim()) nextErrors.need = "请简要说明咨询需求";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="姓名"
          value={form.name}
          error={errors.name}
          onChange={(value) => updateField("name", value)}
          placeholder="请输入姓名"
        />
        <Field
          label="手机号"
          value={form.phone}
          error={errors.phone}
          onChange={(value) => updateField("phone", value)}
          placeholder="请输入手机号"
          inputMode="tel"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="公司名称"
          value={form.company}
          error={errors.company}
          onChange={(value) => updateField("company", value)}
          placeholder="请输入公司名称"
        />
        <Field
          label="所在城市"
          value={form.city}
          error={errors.city}
          onChange={(value) => updateField("city", value)}
          placeholder="例如：广州"
        />
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-ink">咨询需求</span>
        <textarea
          value={form.need}
          onChange={(event) => updateField("need", event.target.value)}
          placeholder="请简单描述企业阶段、当前痛点或希望咨询的服务"
          rows={5}
          className="min-h-32 resize-y rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-ocean focus:ring-4 focus:ring-ocean/10"
        />
        {errors.need ? <span className="text-sm text-red-600">{errors.need}</span> : null}
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition hover:bg-[#d5aa4c] sm:w-auto"
      >
        提交咨询
      </button>
      {submitted ? (
        <div className="flex items-start gap-3 rounded-md bg-mint/10 p-4 text-sm leading-7 text-mint">
          <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
          <span>信息已在前端校验通过。接入后端后，可在这里对接 CRM、企业微信或邮件通知。</span>
        </div>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  onChange: (value: string) => void;
};

function Field({ label, value, error, placeholder, inputMode, onChange }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <input
        value={value}
        inputMode={inputMode}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-md border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-ocean focus:ring-4 focus:ring-ocean/10"
      />
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
