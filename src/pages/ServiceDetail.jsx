import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { services } from "../data/services";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import CtaBand from "../sections/CtaBand";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <SEO
        title={`${service.title} — Jayanth Technologies`}
        description={service.short}
      />

      <section className="container-px pt-40 pb-16">
        <Reveal>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-mist hover:text-paper transition-colors mb-8"
          >
            <ArrowLeft size={15} /> All services
          </Link>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-tight text-paper max-w-2xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-mist max-w-xl leading-relaxed">{service.overview}</p>
        </Reveal>
      </section>

      <section className="container-px pb-16 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16">
        <div className="space-y-12">
          <Reveal>
            <h2 className="font-display text-xl text-paper mb-4">Business value</h2>
            <p className="text-mist leading-relaxed">{service.value}</p>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="font-display text-xl text-paper mb-5">What we provide</h2>
            <ul className="space-y-3.5">
              {service.provide.map((item) => (
                <li key={item} className="flex items-start gap-3 text-mist">
                  <Check size={17} className="text-violet-soft mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-xl text-paper mb-5">Our approach</h2>
            <ol className="space-y-4">
              {service.approach.map((item, i) => (
                <li key={item} className="flex gap-4 text-mist">
                  <span className="font-mono text-xs text-mist-dim mt-1">0{i + 1}</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={80} className="lg:sticky lg:top-28 h-fit">
          <div className="rounded-2xl border border-line bg-surface-solid p-8">
            <h3 className="font-display text-base text-paper mb-5">Technology we use</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-mist border border-line-soft rounded-full px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
            <Button to="/contact" className="w-full justify-center">
              Start a Project
            </Button>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
