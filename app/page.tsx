"use client";
import { useState } from "react";
import { translations } from "@/lib/translations";
import { projects } from "@/lib/projects";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  ArrowRight,
  Code,
  ExternalLink,
  Languages,
} from "lucide-react";

export default function WebCornerHome() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = translations[lang];

  return (
    <main
      dir={t.dir}
      className="bg-white text-slate-900 transition-all duration-300"
    >
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
              W
            </div>
            <span className="text-2xl font-black tracking-tighter">
              {t.hero.brand.split(" ")[0]}
              <span className="text-blue-600">
                {t.hero.brand.split(" ")[1] || ""}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-2 text-sm font-bold text-blue-600 border border-blue-100 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition"
            >
              <Languages size={18} />
              {lang === "ar" ? "English" : "العربية"}
            </button>
            <a
              href="#contact"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 text-sm font-bold mb-8">
            <MapPin size={16} className="text-blue-600" />
            {t.hero.location}
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight mb-8">
            {t.hero.title.split(" ").map((word, i) =>
              word === "Corner" || word === "الركن" ? (
                <span key={i} className="text-blue-600">
                  {" "}
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mb-12 leading-relaxed italic">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-2xl shadow-blue-200"
            >
              {t.hero.cta_primary}{" "}
              <ArrowRight
                className={lang === "ar" ? "rotate-180" : ""}
                size={20}
              />
            </a>
            <a
              href="#work"
              className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              {t.hero.cta_secondary}
            </a>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section
        id="work"
        className="bg-slate-50 py-32 px-6 border-y border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4">{t.portfolio.title}</h2>
            <p className="text-slate-500 text-lg">{t.portfolio.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-right">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Code size={28} />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-2 hover:bg-slate-50 rounded-full transition"
                    >
                      <ExternalLink className="text-slate-300 hover:text-blue-600" />
                    </a>
                  </div>
                  {/* هنا نختار العنوان حسب اللغة المختارة */}
                  <h3 className="text-2xl font-bold mb-3">
                    {lang === "ar" ? project.titleAr : project.title}
                  </h3>
                  {/* هنا نختار الوصف حسب اللغة المختارة */}
                  <p className="text-slate-500 leading-relaxed mb-8 h-20 overflow-hidden text-sm">
                    {lang === "ar"
                      ? project.descriptionAr
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black bg-slate-100 text-slate-400 px-3 py-1.5 rounded-lg uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">{t.contact.title}</h2>
          <p className="text-slate-500 mb-12 font-medium">{t.contact.desc}</p>
          {/* سنمرر اللغة لـ ContactForm لترجمة الحقول داخله */}
          <ContactForm lang={lang} t={t.contact} />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 text-center bg-slate-50">
        <div className="mb-6 font-black text-2xl tracking-tighter uppercase">
          Web<span className="text-blue-600">Corner</span>
        </div>
        <p className="text-slate-400 text-sm">
          {t.footer.rights} <br />
          {t.footer.built}{" "}
          <span className="text-slate-900 font-bold">شريف</span>
        </p>
      </footer>
    </main>
  );
}
