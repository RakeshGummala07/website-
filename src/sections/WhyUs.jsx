import { Cpu, TrendingUp, Lock, BadgeCheck, CloudCog, Target } from "lucide-react";
import { whyUs } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const icons = { Cpu, TrendingUp, Lock, BadgeCheck, CloudCog, Target };

export default function WhyUs() {
  return (
    <section className="container-px py-24 border-t border-line-soft bg-ink-soft">
      <SectionHeading
        kicker="Why Jayanth Technologies"
        title="Why teams work with us"
        description="Software that's easy to trust comes from disciplined engineering practice, applied consistently."
        align="center"
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyUs.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="rounded-2xl border border-line bg-surface-solid p-7"
            >
              <div className="h-11 w-11 rounded-xl bg-violet/10 flex items-center justify-center mb-5">
                <Icon size={20} className="text-violet-soft" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg text-paper">{item.title}</h3>
              <p className="mt-2.5 text-sm text-mist leading-relaxed">{item.detail}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
