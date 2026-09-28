import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { CiWarning } from "react-icons/ci";
import axios from "axios";

const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "imtalha.dev@gmail.com",
    href: "mailto:imtalha.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 316 5772553",
    href: "tel:+923165772553",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abbottabad, Pakistan",
    href: null,
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    action: () => openLink("https://github.com/iamtalhacui"),
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    action: () => openLink("https://www.linkedin.com/in/m-talha-mern/"),
  },
  {
    icon: Instagram,
    label: "Instagram",
    action: () => openLink("https://www.instagram.com/mr_talha_here/"),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [empty, setEmpty] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setEmpty(true);
      setTimeout(() => setEmpty(false), 3000);
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("/api/send-msg", formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch {
      setEmpty(true);
      setTimeout(() => setEmpty(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full bg-transparent border-0 border-b border-[hsl(var(--border))] px-0 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/50 focus:outline-none focus:border-[hsl(var(--primary))] transition-colors duration-200";

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 left-0 h-72 w-72 rounded-full bg-[hsl(var(--primary))]/10 blur-[90px]" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/8 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
            Contact
          </p>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-snug">
            Let&apos;s talk
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            Have a project in mind or just want to say hello? I usually reply
            within a day.
          </p>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-start">
          {/* Details */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="space-y-5">
              {contactLinks.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--primary))]">
                      <Icon size={15} strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--muted-foreground))]">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-[hsl(var(--foreground))] truncate group-hover:text-[hsl(var(--primary))] transition-colors">
                        {value}
                      </span>
                    </span>
                    {href && (
                      <ArrowUpRight
                        size={14}
                        className="ml-auto shrink-0 text-[hsl(var(--muted-foreground))] opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all"
                      />
                    )}
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[hsl(var(--border))] pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--muted-foreground))] mb-3">
                Social
              </p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, label, action }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={action}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))]/40 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 transition-all duration-200"
                  >
                    <Icon size={15} strokeWidth={1.75} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 flex flex-col gap-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/40 p-6 sm:p-8"
          >
            {submitted && (
              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-500/8 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle size={16} />
                Message sent — I&apos;ll get back to you soon.
              </div>
            )}

            {empty && (
              <div className="flex items-center gap-2.5 rounded-xl border border-red-400/25 bg-red-400/8 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
                <CiWarning size={18} />
                Please fill in all fields before sending.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={fieldClass}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project or just say hello…"
                className={`${fieldClass} resize-none`}
              />
            </label>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_12px_28px_-12px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-[hsl(var(--primary-foreground))]/30 border-t-[hsl(var(--primary-foreground))] animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={14} strokeWidth={2.25} />
                    Send message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
