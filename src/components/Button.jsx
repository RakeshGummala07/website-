import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon = true,
  type = "button",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-paper text-ink hover:bg-violet-soft hover:text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
    outline:
      "border border-line text-paper hover:border-violet-soft hover:text-violet-soft",
    ghost: "text-paper hover:text-violet-soft",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`group ${classes}`}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`group ${classes}`}>
      {content}
    </button>
  );
}
