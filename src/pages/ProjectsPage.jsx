import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Projects from "../sections/Projects";
import CtaBand from "../sections/CtaBand";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects — Jayanth Technologies"
        description="A sample of the kind of software engineering, security, testing, DevOps and cloud work Jayanth Technologies takes on."
      />

      <section className="container-px pt-40 pb-8 text-center">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">Projects</p>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl mx-auto">
            Recent work.
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl mx-auto leading-relaxed">
            A sample of the kind of problems we work on. Case studies below
            are illustrative placeholders, clearly marked, pending real
            project sign-off.
          </p>
        </Reveal>
      </section>

      <Projects />
      <CtaBand />
    </>
  );
}
