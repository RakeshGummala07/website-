import { Link } from "react-router-dom";
import { Compass, Cpu, Workflow, FolderKanban, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const links = [
  {
    title: "Solutions",
    detail: "Industries we build for, from FinTech to Manufacturing.",
    to: "/solutions",
    icon: Compass,
  },
  {
    title: "Technologies",
    detail: "The production-proven stack behind everything we ship.",
    to: "/technologies",
    icon: Cpu,
  },
  {
    title: "Our Process",
    detail: "How a project moves from first call to production.",
    to: "/process",
    icon: Workflow,
  },
  {
    title: "Projects",
    detail: "A look at the kind of work we take on.",
    to: "/projects",
    icon: FolderKanban,
  },
];

export default function ExploreMore() {
  return (
    <section className="container-px py-24 border-t border-line-soft">
      <SectionHeading kicker="Explore" title="More about how we work" align="center" />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {links.map((item, i) => (
          <Reveal key={item.title} delay={i * 50}>
            <Link
              to={item.to}
              className="group h-full flex flex-col rounded-2xl border border-line bg-surface-solid p-7 hover:border-violet/30 hover:shadow-[0_10px_28px_rgba(124,58,237,0.08)] transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-violet/10 flex items-center justify-center mb-5">
                <item.icon size={20} className="text-violet-soft" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-base text-paper">{item.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed flex-1">{item.detail}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-soft group-hover:text-magenta-soft transition-colors">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
