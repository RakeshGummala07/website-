import useReveal from "../hooks/useReveal";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
      }}
    >
      {children}
    </Tag>
  );
}
