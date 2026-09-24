import { Code2, Cloud, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";
import { capabilities } from "../data/content";
import Reveal from "../components/Reveal";

const icons = { Code2, Cloud, ShieldCheck, CheckCircle2, Building2 };

export default function Capabilities() {
  return (
    <section className="container-px py-20 border-t border-line-soft">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {capabilities.map((cap, i) => {
          const Icon = icons[cap.icon];
          return (
            <Reveal
              key={cap.title}
              delay={i * 60}
              className="rounded-2xl border border-line bg-surface-solid p-7 hover:border-violet/30 hover:shadow-[0_8px_24px_rgba(124,58,237,0.08)] transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-violet/10 flex items-center justify-center mb-5">
                <Icon size={20} className="text-violet-soft" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-base text-paper leading-snug">{cap.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{cap.detail}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
