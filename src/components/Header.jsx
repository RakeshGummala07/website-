import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/#industries" },
  { label: "Technologies", to: "/#technologies" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-line-soft shadow-[0_1px_0_rgba(25,19,48,0.04)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-px flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Jayanth Technologies home">
          <Logo className="h-7 w-7" />
          <span className="font-display text-[1.15rem] tracking-tight text-paper">
            Jayanth Technologies
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-lg transition-colors duration-150 ${
                  isActive && !item.to.includes("#")
                    ? "text-paper"
                    : "text-mist hover:text-paper"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-violet px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-magenta"
          >
            Let's Talk
          </Link>
        </div>

        <button
          className="lg:hidden text-paper p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-line-soft">
          <nav className="container-px flex flex-col py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="py-3 text-base text-mist hover:text-paper border-b border-line-soft last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex justify-center items-center rounded-full bg-violet px-5 py-3 text-sm font-medium text-white"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
