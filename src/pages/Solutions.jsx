import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Industries from "../sections/Industries";
import CtaBand from "../sections/CtaBand";

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions — Jayanth Technologies"
        description="Industry-aware software solutions from Jayanth Technologies, covering FinTech, Healthcare, Education, E-commerce, SaaS, Logistics, Manufacturing and Enterprise."
      />

      <section className="container-px pt-40 pb-8 text-center">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">Solutions</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl mx-auto">
            Software solutions shaped by industry context.
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl mx-auto leading-relaxed">
            The right architecture, compliance posture and integration approach
            depend on the industry a business operates in. We adapt our
            engineering approach accordingly, rather than applying one
            template everywhere.
          </p>
        </Reveal>
      </section>

      <Industries />
      <CtaBand />
    </>
  );
}
