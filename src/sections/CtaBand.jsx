import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function CtaBand() {
  return (
    <section className="container-px py-24 border-t border-line-soft">
      <Reveal className="relative rounded-3xl border border-line bg-ink-soft overflow-hidden px-8 py-16 sm:px-16 text-center">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[300px] w-[600px] opacity-[0.14] blur-[100px]"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, #DB2777 60%, transparent 80%)" }}
        />
        <div className="relative">
          <h2 className="font-display text-[2rem] sm:text-[2.75rem] leading-[1.1] tracking-tight text-paper max-w-2xl mx-auto">
            Have a technology challenge? Let's build the solution.
          </h2>
          <p className="mt-4 text-mist max-w-md mx-auto">
            Tell us what you're working on — we'll respond with a straightforward
            read on how to approach it.
          </p>
          <div className="mt-9 flex justify-center">
            <Button to="/contact">Start a Conversation</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
