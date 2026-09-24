import Reveal from "./Reveal";

export default function SectionHeading({ kicker, title, description, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}>
      {kicker && <p className="text-sm text-violet-soft mb-3">{kicker}</p>}
      <h2 className="font-display text-[2rem] sm:text-[2.5rem] leading-[1.1] tracking-tight text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[1.0625rem] text-mist leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
