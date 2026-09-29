import { Cpu, Settings2, Users, Layers, LifeBuoy, BadgeCheck, MessageCircle, Handshake } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../sections/CtaBand";
import { whyUs } from "../data/content";

const icons = { Cpu, Settings2, Users, Layers, LifeBuoy, BadgeCheck, MessageCircle, Handshake };

const missionPoints = [
  "To deliver reliable, scalable, and customized software solutions based on client requirements.",
  "To provide skilled professionals who support organizations in achieving their project and business objectives.",
  "To deliver projects with a focus on quality, timely execution, and professional communication.",
  "To continuously improve our technology expertise, processes, and service capabilities.",
  "To build lasting client relationships through transparency, commitment, and consistent service.",
];

const visionPoints = [
  "To become a trusted software and technology solutions partner for businesses across industries.",
  "To build long-term partnerships through quality software solutions, skilled professionals, and reliable project delivery.",
  "To continuously expand our technology capabilities and deliver solutions that create meaningful value for our clients.",
];

export default function About() {
  return (
    <>
      <SEO
        title="About — Jayanth Technologies"
        description="Jayanth Technologies Pvt Ltd, founded in 2025, is a software company providing software development, IT solutions, project delivery, and staff augmentation services."
      />

      <section className="container-px pt-40 pb-16">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">About Us</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl">
            Jayanth Technologies Pvt Ltd
          </h1>
          <p className="mt-6 text-lg text-mist max-w-2xl leading-relaxed">
            Founded in 2025, Jayanth Technologies Pvt Ltd is a software company
            providing software development, IT solutions, project delivery, and
            staff augmentation services. We help businesses transform their
            technology requirements into practical, reliable, and scalable
            solutions.
          </p>
          <p className="mt-4 text-lg text-mist max-w-2xl leading-relaxed">
            Our services combine software expertise, skilled professionals, and
            flexible engagement models to support businesses across their
            technology needs. We are committed to delivering quality solutions
            and building long-term relationships with our clients.
          </p>
        </Reveal>
      </section>

      <section className="container-px py-20 border-t border-line-soft">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-xl text-paper mb-4">Who We Are</h2>
          <p className="text-mist leading-relaxed">
            Jayanth Technologies Pvt Ltd is a growing software and technology
            services company focused on delivering solutions aligned with
            business requirements. We provide customized software development
            and technology services for organizations looking to build,
            improve, or maintain their technology solutions.
          </p>
          <p className="mt-4 text-mist leading-relaxed">
            We also provide skilled IT and non-IT professionals through
            flexible staff augmentation services. Our team works closely with
            clients to understand their requirements and provide suitable
            technology solutions and resources.
          </p>
        </Reveal>
      </section>

      <section className="container-px py-20 border-t border-line-soft grid grid-cols-1 md:grid-cols-2 gap-12">
        <Reveal>
          <h2 className="font-display text-xl text-paper mb-5">Our Mission</h2>
          <ul className="space-y-3.5">
            {missionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-mist">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-soft mt-2 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-xl text-paper mb-5">Our Vision</h2>
          <ul className="space-y-3.5">
            {visionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-mist">
                <span className="h-1.5 w-1.5 rounded-full bg-magenta-soft mt-2 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="container-px py-20 border-t border-line-soft bg-ink-soft">
        <SectionHeading
          kicker="Why Jayanth Technologies"
          title="Why choose Jayanth Technologies?"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <CtaBand />
    </>
  );
}
