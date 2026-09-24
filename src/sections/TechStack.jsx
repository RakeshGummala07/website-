import { techStack } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function TechStack() {
  return (
    <section id="technologies" className="container-px py-24 border-t border-line-soft">
      <SectionHeading
        title="Built on tools that scale"
        description="We choose technology for the problem at hand, drawing from a consistent, production-proven stack."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {techStack.map((group, i) => (
          <Reveal key={group.category} delay={i * 60} className="border-l border-line pl-6">
            <h3 className="font-display text-base text-paper mb-4">{group.category}</h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-mist flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-mist-dim" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
