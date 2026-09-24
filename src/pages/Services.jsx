import { Link } from "react-router-dom";
import { ArrowRight, Code2, ShieldCheck, CheckCircle2, Workflow, Cloud, Settings2 } from "lucide-react";
import { services } from "../data/services";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import CtaBand from "../sections/CtaBand";

const icons = { Code2, ShieldCheck, CheckCircle2, Workflow, Cloud, Settings2 };

export default function Services() {
  return (
    <>
      <SEO
        title="Services — Jayanth Technologies"
        description="Full stack development, cyber security, software testing, DevOps, cloud solutions and custom software development, delivered from Hyderabad."
      />

      <section className="container-px pt-40 pb-16 text-center">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">Services</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl mx-auto">
            Six disciplines. One accountable team.
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl mx-auto leading-relaxed">
            We don't hand your project between disconnected vendors. Development,
            security, testing, infrastructure and architecture are handled by
            people who talk to each other.
          </p>
        </Reveal>
      </section>

      <section className="container-px pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.slug} delay={i * 50}>
                <article className="h-full rounded-2xl border border-line bg-surface-solid p-8 hover:border-violet/30 hover:shadow-[0_10px_28px_rgba(124,58,237,0.08)] transition-all flex flex-col">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet to-magenta flex items-center justify-center mb-6">
                    <Icon size={22} className="text-white" strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-lg text-paper">{s.title}</h2>
                  <p className="mt-2.5 text-sm text-mist leading-relaxed flex-1">{s.short}</p>
                  <div className="flex flex-wrap gap-2 mt-6 mb-2">
                    {s.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-mist-dim border border-line-soft rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-violet-soft hover:text-magenta-soft transition-colors"
                  >
                    Read More <ArrowRight size={15} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
