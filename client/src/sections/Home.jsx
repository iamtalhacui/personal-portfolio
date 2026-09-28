import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import CodeWindow from "../components/CodeWindow";

const ROLES = [
  "Full Stack Web Developer",
  "NestJS & Next.js Engineer",
  "SaaS Product Builder",
  "Node.js Backend Specialist",
];

const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          55
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else {
      setRoleIndex((i) => (i + 1) % ROLES.length);
      setTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-16 overflow-x-clip pt-28 pb-16 lg:pt-24"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.55] dark:opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--hero-grid)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--hero-grid)) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
        />
        <div className="hero-mesh absolute -top-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--primary))]/18 blur-[100px]" />
        <div
          className="hero-mesh absolute -bottom-32 right-0 h-[32rem] w-[32rem] rounded-full bg-[hsl(var(--accent))]/12 blur-[110px]"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]/8 blur-[80px]" />
      </div>

      {/* Copy */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:pl-16 xl:pl-24 gap-5 min-w-0 lg:max-w-[46%] xl:max-w-lg">
        <p
          className="anim-slide-r text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--primary))]"
          style={{ animationDelay: "0.08s" }}
        >
          Available for full-time roles
        </p>

        <h1
          className="anim-fade-up font-display text-[2.75rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold tracking-[-0.04em] text-[hsl(var(--foreground))] leading-[0.98]"
          style={{ animationDelay: "0.18s" }}
        >
          Muhammad
          <br />
          <span className="relative inline-block text-[hsl(var(--primary))]">
            Talha
            <svg
              className="absolute -bottom-1 left-0 w-full h-3 text-[hsl(var(--primary))]/35"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 8C40 2 80 2 100 6C140 12 170 4 198 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <div
          className="anim-fade-up flex flex-wrap items-baseline gap-x-2 min-h-[3.25rem] sm:min-h-[2rem] text-lg sm:text-xl font-semibold text-[hsl(var(--foreground))]/75"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-[hsl(var(--muted-foreground))] font-medium">
            I build as a
          </span>
          <span className="inline-flex items-center text-[hsl(var(--foreground))]">
            {displayed}
            <span className="cursor-blink ml-0.5 inline-block w-[2px] h-5 sm:h-6 bg-[hsl(var(--primary))]" />
          </span>
        </div>

        <p
          className="anim-fade-up text-[15px] sm:text-base text-[hsl(var(--muted-foreground))] max-w-md leading-relaxed"
          style={{ animationDelay: "0.42s" }}
        >
          Full Stack Web Developer shipping production features for an
          international Australian SaaS — from NestJS APIs and PostgreSQL to
          polished Next.js interfaces.
        </p>

        <div
          className="anim-fade-up flex flex-wrap gap-3 mt-1"
          style={{ animationDelay: "0.54s" }}
        >
          <a
            href="#contact"
            className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_14px_36px_-12px_hsl(var(--primary)/0.65)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_hsl(var(--primary)/0.75)] transition-all duration-200"
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full -skew-x-12 group-hover:translate-x-[120%] transition-transform duration-400" />
            <span className="relative">Let&apos;s Talk</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))]/50 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 hover:-translate-y-0.5 transition-all duration-200"
          >
            View Work
          </a>
        </div>

        <div
          className="anim-fade-up flex items-center gap-4 mt-2"
          style={{ animationDelay: "0.66s" }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]/70">
            Connect
          </span>
          <div className="h-px w-6 bg-[hsl(var(--border))]" />
          <div className="flex gap-2.5">
            {[
              {
                Icon: FaGithub,
                action: () => openLink("https://github.com/iamtalhacui"),
                label: "GitHub",
              },
              {
                Icon: FaLinkedin,
                action: () =>
                  openLink("https://www.linkedin.com/in/m-talha-mern/"),
                label: "LinkedIn",
              },
              {
                Icon: CiMail,
                action: () =>
                  (window.location.href =
                    "mailto:muhammadtalhaa123445@gmail.com"),
                label: "Email",
              },
            ].map(({ Icon, action, label }) => (
              <button
                key={label}
                onClick={action}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))]/45 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/8 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={17} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Visual */}
      <div
        className="anim-fade-in relative z-10 flex-1 flex justify-center lg:justify-end items-center px-6 md:px-12 lg:pr-16 xl:pr-24 w-full min-w-0"
        style={{ animationDelay: "0.45s" }}
      >
        <div className="relative w-full max-w-[22rem] sm:max-w-md float-y">
          <div className="absolute -inset-4 rounded-[1.75rem] border border-[hsl(var(--primary))]/10 pointer-events-none" />
          <div className="absolute -inset-2 rounded-[1.35rem] bg-gradient-to-br from-[hsl(var(--primary))]/8 via-transparent to-[hsl(var(--accent))]/8 pointer-events-none" />
          <CodeWindow title="talha.config.ts" />
        </div>
      </div>
    </section>
  );
};

export default Home;
