import { Link } from "react-router-dom";
import Logo from "./Logo";

const socials = [
  { label: "LinkedIn", short: "in" },
  { label: "X (Twitter)", short: "X" },
  { label: "GitHub", short: "gh" },
];

const navCols = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Technologies", to: "/#technologies" },
      { label: "Projects", to: "/#projects" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Full Stack Development", to: "/services/full-stack-development" },
      { label: "Cyber Security", to: "/services/cyber-security" },
      { label: "Testing & QA", to: "/services/software-testing-qa" },
      { label: "DevOps", to: "/services/devops" },
      { label: "Cloud Solutions", to: "/services/cloud-solutions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-ink-soft">
      <div className="container-px py-16 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <Logo className="h-7 w-7" />
            <span className="font-display text-[1.05rem] text-paper">Jayanth Technologies</span>
          </Link>
          <p className="text-sm text-mist max-w-xs leading-relaxed">
            A technology partner for businesses building, securing and scaling digital
            products — based in Hyderabad, Telangana.
          </p>
        </div>

        {navCols.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm text-paper mb-4">{col.heading}</h3>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-mist hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm text-paper mb-4">Contact</h3>
          <p className="text-sm text-mist leading-relaxed">
            Hyderabad, Telangana, India
          </p>
          <div className="flex items-center gap-3 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                title={`${s.label} (link placeholder)`}
                className="flex items-center justify-center h-8 w-8 rounded-full border border-line text-xs font-mono text-mist hover:text-violet-soft hover:border-violet-soft transition-colors"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-px py-6 border-t border-line-soft flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-mist-dim">
          © {new Date().getFullYear()} Jayanth Technologies Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-xs text-mist-dim">Hyderabad, Telangana, India</p>
      </div>
    </footer>
  );
}
