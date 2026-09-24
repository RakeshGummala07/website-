import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import TechStack from "../sections/TechStack";
import CtaBand from "../sections/CtaBand";

export default function Technologies() {
  return (
    <>
      <SEO
        title="Technologies — Jayanth Technologies"
        description="The technology stack Jayanth Technologies builds with — React, Java, Spring Boot, Node.js, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Kafka and more."
      />

      <section className="container-px pt-40 pb-8 text-center">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">Technologies</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl mx-auto">
            A production-proven technology stack.
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl mx-auto leading-relaxed">
            We choose technology for the problem at hand, drawing from a
            consistent set of tools our team has deep, hands-on experience
            running in production — not whatever is trending.
          </p>
        </Reveal>
      </section>

      <TechStack />
      <CtaBand />
    </>
  );
}
