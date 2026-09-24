import { useState } from "react";

const services = [
  "Full Stack Development",
  "Cyber Security",
  "Software Testing & QA",
  "DevOps",
  "Cloud Solutions",
  "Custom Software Development",
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

const fieldClasses =
  "w-full rounded-lg bg-ink-soft border border-line px-4 py-3 text-sm text-paper placeholder:text-mist-dim focus:border-violet-soft focus:outline-none transition-colors";

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
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

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-violet px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-magenta"
      >
        Send Enquiry
      </button>
    </form>
  );
}
