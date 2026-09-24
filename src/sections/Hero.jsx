import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[760px] flex items-center overflow-hidden">
      {/*
        Full-width hero photograph. This is a placeholder image (Lorem Picsum,
        seeded for stability) — replace the src below with real photography of
        your team, office or workspace. Recommended: landscape, at least
        1920px wide, well-lit, minimal clutter near the center-left so
        headline text stays legible over the overlay.
      */}
      <img
        src="https://picsum.photos/seed/jayanth-technologies-wide/1920/1080"
        alt="Jayanth Technologies team at work"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(14,10,28,0.90) 0%, rgba(14,10,28,0.72) 40%, rgba(88,28,135,0.45) 75%, rgba(219,39,119,0.30) 100%)",
        }}
      />

      <div className="container-px relative w-full pt-28 pb-16 lg:pt-16 lg:pb-16">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm text-white/70 mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-soft animate-pulse-line" />
              Hyderabad, Telangana — IT Services & Technology
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] leading-[1.08] tracking-tight text-white">
              Engineering software that businesses can actually rely on.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-lg text-white/80 max-w-lg leading-relaxed">
              Jayanth Technologies builds, secures, tests and scales digital
              products for businesses that need software to work correctly the
              first time — and keep working as they grow.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.95rem] font-medium text-black transition-colors duration-200 hover:bg-violet-soft hover:text-white"
              >
                Start a Project
                <ArrowUpRight size={16} strokeWidth={2.25} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-[0.95rem] font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                Explore Our Services
                <ArrowUpRight size={16} strokeWidth={2.25} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}