import { useState } from "react";
import { Loader2, Mail } from "lucide-react";

// Set this in a .env file at the project root:
//   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const FALLBACK_EMAIL = "info@jayanthtechnologies.com"; // replace with your real inbox

const services = [
  "Full Stack Development",
  "Cyber Security",
  "Software Testing & QA",
  "DevOps",
  "Cloud Solutions",
  "Custom Software Development",
  "Staff Augmentation",
  "Not sure yet",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  description: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.service) errors.service = "Select a service.";
  if (!values.description.trim()) errors.description = "Tell us a little about the project.";
  return errors;
}

function buildMailtoFallback(values) {
  const subject = encodeURIComponent(`Project enquiry — ${values.service || "General"}`);
  const body = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || "-"}\nCompany: ${values.company || "-"}\nService required: ${values.service}\n\nProject description:\n${values.description}`
  );
  return `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
}

const fieldClasses =
  "w-full rounded-lg bg-ink-soft border border-line px-4 py-3 text-sm text-paper placeholder:text-mist-dim focus:border-violet-soft focus:outline-none transition-colors";

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!FORMSPREE_ENDPOINT) {
      // Not wired up yet — fail clearly instead of pretending it worked.
      console.error(
        "Contact form is not connected to an email service. Set VITE_FORMSPREE_ENDPOINT in your .env file — see README.md."
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company,
          service: values.service,
          description: values.description,
          _subject: `New project enquiry — ${values.service}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-surface-solid p-10 text-center">
        <h3 className="font-display text-xl text-paper">Enquiry sent</h3>
        <p className="mt-3 text-mist leading-relaxed">
          Thanks, {values.name.split(" ")[0]}. We'll get back to you at{" "}
          {values.email} shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-mist mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className={fieldClasses}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-magenta-soft">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-mist mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={fieldClasses}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-magenta-soft">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-mist mb-2">
            Phone <span className="text-mist-dim">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className={fieldClasses}
            placeholder="+91 00000 00000"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm text-mist mb-2">
            Company <span className="text-mist-dim">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            className={fieldClasses}
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm text-mist mb-2">
          Service required
        </label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
          className={fieldClasses}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1.5 text-xs text-magenta-soft">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm text-mist mb-2">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={handleChange}
          className={`${fieldClasses} resize-none`}
          placeholder="What are you building, and what problem are you trying to solve?"
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "description-error" : undefined}
        />
        {errors.description && (
          <p id="description-error" className="mt-1.5 text-xs text-magenta-soft">
            {errors.description}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-magenta/30 bg-magenta/5 px-4 py-3.5">
          <p className="text-sm text-magenta-soft">
            {FORMSPREE_ENDPOINT
              ? "Something went wrong sending your enquiry. Please try again, or email us directly."
              : "The contact form isn't connected to an inbox yet."}
          </p>
          <a
            href={buildMailtoFallback(values)}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-violet-soft hover:text-magenta-soft transition-colors"
          >
            <Mail size={14} /> Email us directly instead
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-magenta disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
