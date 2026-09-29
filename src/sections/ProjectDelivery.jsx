import { projectDelivery } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function ProjectDelivery() {
  return (
    <section id="project-delivery" className="container-px py-24 border-t border-line-soft bg-ink-soft">
      <SectionHeading
        kicker="Project Delivery"
        title="End-to-end project delivery"
        description="We provide end-to-end support for software and technology projects based on client requirements."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectDelivery.map((item, i) => (
          <Reveal
            key={item.step}
            delay={i * 50}
            className="rounded-2xl border border-line bg-surface-solid p-7"
          >
            <span className="font-mono text-xs text-mist-dim">{item.step}</span>
            <h3 className="font-display text-base text-paper mt-2">{item.title}</h3>
            <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={400} className="mt-10 text-center">
        <p className="text-mist">
          Our project delivery approach focuses on{" "}
          <span className="text-paper">quality, communication, collaboration, and timely execution</span>.
        </p>
      </Reveal>
    </section>
  );
}
