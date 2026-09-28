import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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
  {
    icon: Mail,
    label: "Email",
    action: () => openLink("mailto:imtalha.dev@gmail.com"),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[hsl(var(--border))] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]/8 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* CTA band */}
        <div className="py-14 md:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[hsl(var(--border))]">
          <div className="max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
              Next step
            </p>
            <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-snug">
              Ready to build something?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Open to full-time roles and select freelance work.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_12px_28px_-12px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Main footer */}
        <div className="py-10 md:py-12 flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-xs">
              <a
                href="#home"
                className="inline-flex items-center gap-2.5 group"
                aria-label="Muhammad Talha — Home"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-[family-name:var(--font-mono)] text-[11px] font-medium tracking-[0.08em]">
                  MT
                </span>
                <span className="font-display text-sm font-bold tracking-tight text-[hsl(var(--foreground))]">
                  Muhammad Talha
                </span>
              </a>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                Full Stack Developer shipping NestJS, Next.js, and polished
                product UI.
              </p>
            </div>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {navLinks.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

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

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-[hsl(var(--border))]">
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              © {year} Muhammad Talha · Built with React & Tailwind
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Back to top
              <ArrowUp
                size={12}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
