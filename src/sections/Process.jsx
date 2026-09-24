import { process } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Process() {
  return (
    <section className="container-px py-24 border-t border-line-soft">
      <SectionHeading
        title="How a project moves"
        description="A consistent six-stage process from first conversation to a system running in production."
      />

      <div className="mt-16 relative">
        <div className="hidden lg:block absolute top-[13px] left-0 right-0 h-px bg-line" />
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-6">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 60} className="relative">
              <div className="hidden lg:block h-[7px] w-[7px] rounded-full bg-violet-soft mb-5 relative z-10" />
              <span className="font-mono text-xs text-mist-dim">{item.step}</span>
              <h3 className="font-display text-base text-paper mt-2">{item.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
