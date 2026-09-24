import { Cpu, TrendingUp, Lock, BadgeCheck, CloudCog, Target } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../sections/CtaBand";
import { whyUs } from "../data/content";

const icons = { Cpu, TrendingUp, Lock, BadgeCheck, CloudCog, Target };

const values = [
  {
    title: "Correctness over speed of shipping",
    detail: "We'd rather take the time to build something that works than ship something fast and fragile.",
  },
  {
    title: "Clear communication",
    detail: "You should always know what stage your project is at and what decisions are being made, and why.",
  },
  {
    title: "Ownership",
    detail: "Our engineers treat client systems with the same care they'd bring to their own.",
  },
  {
    title: "Continuous learning",
    detail: "Technology moves quickly. We stay current so our recommendations stay relevant.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About — Jayanth Technologies"
        description="Jayanth Technologies is a Hyderabad-based technology company focused on engineering-first software delivery."
      />

      <section className="container-px pt-40 pb-20">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">About</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl">
            A technology partner built around engineering discipline.
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl leading-relaxed">
            Jayanth Technologies Pvt. Ltd. is an IT services company based in
            Hyderabad, Telangana. We work with businesses that need software
            built, modernized, secured, tested, deployed and scaled by a team
            that treats each of those as part of the same job — not separate
            hand-offs.
          </p>
        </Reveal>
      </section>

      <section className="container-px py-20 border-t border-line-soft grid grid-cols-1 md:grid-cols-2 gap-12">
        <Reveal>
          <h2 className="font-display text-xl text-paper mb-4">Mission</h2>
          <p className="text-mist leading-relaxed">
            To help businesses build, secure and scale digital products through
            sound engineering — so the software they run on is dependable,
            not just functional at launch.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-xl text-paper mb-4">Vision</h2>
          <p className="text-mist leading-relaxed">
            To be the technology partner businesses turn to when they need a
            system built correctly the first time — across development,
            security, testing and infrastructure.
          </p>
        </Reveal>
      </section>

      <section className="container-px py-20 border-t border-line-soft">
        <SectionHeading
          title="Engineering philosophy"
          description="We think of software delivery as a single discipline, not a chain of separate specialties handed off between teams."
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

      <section className="container-px py-20 border-t border-line-soft bg-ink-soft">
        <SectionHeading title="What we value" align="left" />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60} className="border-l border-line pl-6">
              <h3 className="font-display text-base text-paper">{v.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">{v.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
