import { Link } from "react-router-dom";
import { ArrowRight, Code2, ShieldCheck, CheckCircle2, Workflow, Cloud, Settings2 } from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const icons = { Code2, ShieldCheck, CheckCircle2, Workflow, Cloud, Settings2 };

export default function ServicesPreview() {
  return (
    <section id="services" className="container-px py-24 border-t border-line-soft">
      <SectionHeading
        kicker="What we do"
        title="Services built around your business"
        description="Six disciplines, one accountable team — architected together instead of handed off between vendors."
        align="center"
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.slug} delay={i * 50}>
              <article className="h-full rounded-2xl border border-line bg-surface-solid p-8 hover:border-violet/30 hover:shadow-[0_10px_28px_rgba(124,58,237,0.08)] transition-all flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet to-magenta flex items-center justify-center mb-6">
                  <Icon size={22} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg text-paper">{s.title}</h3>
                <p className="mt-2.5 text-sm text-mist leading-relaxed flex-1">{s.short}</p>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-soft hover:text-magenta-soft transition-colors"
                >
                  Read More <ArrowRight size={15} />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
