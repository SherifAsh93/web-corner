"use client";
import { useState } from "react";
import { submitLead } from "@/app/actions";

export default function ContactForm({ lang, t }: any) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleAction(formData: FormData) {
    setLoading(true);
    const result = await submitLead(formData);
    setLoading(false);
    if (result.success) setSuccess(true);
  }

  if (success)
    return <p className="text-blue-600 font-bold text-xl">{t.success}</p>;

  return (
    <form action={handleAction} className="flex flex-col gap-4 text-right">
      <input
        name="name"
        placeholder={t.name}
        required
        className="border-2 border-slate-100 p-4 rounded-2xl outline-blue-600"
      />
      <input
        name="email"
        type="email"
        placeholder={t.email}
        required
        className="border-2 border-slate-100 p-4 rounded-2xl outline-blue-600"
      />
      <select
        name="projectType"
        className="border-2 border-slate-100 p-4 rounded-2xl outline-blue-600 bg-white"
      >
        <option value="Website">موقع إلكتروني</option>
        <option value="Web App">تطبيق ويب</option>
      </select>
      <textarea
        name="message"
        placeholder={t.message}
        required
        className="border-2 border-slate-100 p-4 rounded-2xl outline-blue-600"
        rows={4}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-700 disabled:bg-blue-300 shadow-xl shadow-blue-100 transition-all"
      >
        {loading ? "..." : t.submit}
      </button>
    </form>
  );
}
