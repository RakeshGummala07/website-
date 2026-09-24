import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Process from "../sections/Process";
import CtaBand from "../sections/CtaBand";

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Our Process — Jayanth Technologies"
        description="How a project moves with Jayanth Technologies: Discover, Architect, Build, Test, Deploy, Scale."
      />

      <section className="container-px pt-40 pb-8 text-center">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">Our Process</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl mx-auto">
            A consistent process, from first call to production.
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl mx-auto leading-relaxed">
            Every engagement moves through the same six stages. It keeps
            projects predictable for our team, and keeps you informed at
            every step.
          </p>
        </Reveal>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
