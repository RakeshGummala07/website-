import {
  Landmark, HeartPulse, GraduationCap, ShoppingCart, Layers, Truck, Factory, Building2,
} from "lucide-react";
import { industries } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const icons = { Landmark, HeartPulse, GraduationCap, ShoppingCart, Layers, Truck, Factory, Building2 };

export default function Industries() {
  return (
    <section id="industries" className="container-px py-24 border-t border-line-soft">
      <SectionHeading
        kicker="Industries"
        title="Industries we work across"
        description="Domain context changes what 'good software' means. We adapt our approach to the industry's constraints."
        align="center"
      />

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {industries.map((ind, i) => {
          const Icon = icons[ind.icon];
          return (
            <Reveal key={ind.name} delay={i * 40}>
              <div className="rounded-2xl border border-line bg-surface-solid p-6 text-center hover:border-violet/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-violet/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={18} className="text-violet-soft" strokeWidth={1.75} />
                </div>
                <p className="text-sm text-paper">{ind.name}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
