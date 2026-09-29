import { MapPin, Mail, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

const OFFICE_LAT = 17.376827;
const OFFICE_LNG = 78.557051;
const DIRECTIONS_URL = "https://maps.app.goo.gl/b2y87uQjNpKduHM76?g_st=ac";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — Jayanth Technologies"
        description="Get in touch with Jayanth Technologies, Hyderabad, to discuss a software development, security, testing, DevOps, cloud or staff augmentation requirement."
      />

      <section className="container-px pt-40 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
        <Reveal>
          <p className="text-sm text-violet-soft mb-4">Contact</p>
          <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] leading-[1.1] tracking-tight text-paper">
            Tell us about your project.
          </h1>
          <p className="mt-5 text-mist leading-relaxed max-w-sm">
            Share a few details and we'll respond with next steps — usually
            within one business day.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-violet-soft mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-paper">Jayanth Technologies Pvt. Ltd.</p>
                <p className="text-sm text-mist">Hyderabad, Telangana, India</p>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-violet-soft hover:text-magenta-soft transition-colors mt-1.5"
                >
                  Get directions <ExternalLink size={13} />
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-violet-soft mt-0.5 shrink-0" />
              <p className="text-sm text-mist">Enquiries via the form are routed to our project team.</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-line overflow-hidden aspect-[4/3] relative bg-surface-solid">
            <iframe
              title="Jayanth Technologies office location"
              src={`https://www.google.com/maps?q=${OFFICE_LAT},${OFFICE_LNG}&z=16&output=embed`}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-2xl border border-line bg-surface-solid p-8 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
