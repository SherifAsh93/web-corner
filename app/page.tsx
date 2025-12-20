import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects";
import {
  ExternalLink,
  Code,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function WebCornerHome() {
  return (
    <main className="bg-white text-slate-900">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
              W
            </div>
            <span className="text-2xl font-black tracking-tighter">
              Web<span className="text-blue-600">Corner</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#work"
              className="font-bold text-slate-500 hover:text-blue-600 transition"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
            >
              Start Project
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Location Badge */}
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 text-sm font-bold mb-8">
            <MapPin size={16} className="text-blue-600" />
            Based in Damietta, Egypt
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            The Digital <span className="text-blue-600">Corner</span> <br />
            for Your Business.
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mb-12 leading-relaxed">
            I’m <span className="text-slate-900 font-bold">Sherif</span>. At{" "}
            <strong>Web Corner</strong>, I build custom web applications and
            high-speed websites that help businesses in Domiat and beyond scale
            globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-2xl shadow-blue-200"
            >
              Get a Free Quote <ArrowRight size={20} />
            </a>
            <a
              href="#work"
              className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              See My Work
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
            <h2 className="text-4xl font-black mb-4">
              The Web Corner Portfolio
            </h2>
            <p className="text-slate-500 text-lg">
              Specialized solutions for clinics and modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
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
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 h-20 overflow-hidden">
                    {project.description}
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

      {/* --- TRUST SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={40} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-xl mb-2">Modern Tech Stack</h4>
            <p className="text-slate-500">
              I use Next.js, Neon, and Tailwind for maximum speed and security.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-600 font-black text-4xl mb-4">100%</div>
            <h4 className="font-bold text-xl mb-2">Custom Code</h4>
            <p className="text-slate-500">
              No slow templates. Everything is built from scratch for your
              needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-600 font-black text-4xl mb-4">24h</div>
            <h4 className="font-bold text-xl mb-2">Response Time</h4>
            <p className="text-slate-500">
              I am your direct partner. No waiting for agency middlemen.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">Ready to Launch?</h2>
            <p className="text-slate-500 font-medium">
              Send a request to <strong>Web Corner</strong> and let&apos;s get
              started.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <div className="mb-6 font-black text-2xl tracking-tighter uppercase">
          Web<span className="text-blue-600">Corner</span>
        </div>
        <p className="text-slate-400 text-sm">
          © 2025 Web Corner Studio. Damietta, Egypt. <br />
          Built by{" "}
          <span className="text-slate-900 font-bold underline">Sherif</span>.
        </p>
      </footer>
    </main>
  );
}
