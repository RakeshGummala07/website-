import { projects } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="container-px py-24 border-t border-line-soft">
      <SectionHeading
        title="Recent work"
        description="A sample of the kind of problems we work on. Case studies below are illustrative placeholders pending real project sign-off."
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="h-full rounded-2xl border border-line bg-surface-solid p-7 flex flex-col">
              {p.isPlaceholder && (
                <span className="inline-block w-fit text-[0.7rem] tracking-wide text-magenta-soft border border-magenta/30 rounded-full px-2.5 py-1 mb-5">
                  Placeholder — pending client sign-off
                </span>
              )}
              <h3 className="font-display text-lg text-paper leading-snug">{p.name}</h3>
              <p className="mt-3 text-sm text-mist leading-relaxed">
                <span className="text-paper/80">Problem — </span>
                {p.problem}
              </p>
              <p className="mt-3 text-sm text-mist leading-relaxed">
                <span className="text-paper/80">Solution — </span>
                {p.solution}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-line-soft mt-auto">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono text-mist-dim">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
