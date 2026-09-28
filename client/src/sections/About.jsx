import profile from "../assets/images/profile.jpeg";

const HIGHLIGHTS = [
  { value: "2+", label: "Years", detail: "Building production apps" },
  { value: "10+", label: "Projects", detail: "Web & mobile shipped" },
  { value: "SaaS", label: "Focus", detail: "Australian product team" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-[hsl(var(--primary))]/12 blur-[90px]" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[hsl(var(--accent))]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
          About
        </p>

        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto lg:mx-0 w-full max-w-[22rem]">
              <div className="absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-[hsl(var(--primary))]/50 via-[hsl(var(--primary))]/10 to-transparent opacity-80" />
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.35rem] border border-[hsl(var(--primary))]/20 -z-10" />

              <div className="relative overflow-hidden rounded-[1.25rem] aspect-[4/5] bg-[hsl(var(--muted))]">
                <img
                  src={profile}
                  alt="Muhammad Talha"
                  className="h-full w-full object-cover object-top scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="h-px w-10 bg-[hsl(var(--primary))] mb-3.5" />
                  <p className="font-display text-[1.35rem] sm:text-xl font-bold tracking-tight text-white leading-none">
                    Muhammad Talha
                  </p>
                  <p className="mt-2 text-[13px] text-white/75 font-medium tracking-wide">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 max-w-xl lg:max-w-none">
            <div className="space-y-4 max-w-[34rem]">
              <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[hsl(var(--muted-foreground))]">
                I&apos;m Muhammad Talha — a Software Engineering student and Full
                Stack Developer shipping features for an international Australian
                SaaS. Day to day I work across NestJS APIs, PostgreSQL, and
                Next.js frontends that stay fast and maintainable.
              </p>
              <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[hsl(var(--muted-foreground))]">
                I care about clean architecture, thoughtful UI, and code other
                engineers can extend without friction. Outside client work I
                build side projects with the MERN stack and Flutter to keep
                sharpening the craft.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-[34rem]">
              {HIGHLIGHTS.map(({ value, label, detail }) => (
                <div
                  key={label}
                  className="border-t border-[hsl(var(--border))] pt-3.5"
                >
                  <p className="font-display text-2xl font-extrabold tracking-tight text-[hsl(var(--primary))] leading-none">
                    {value}
                  </p>
                  <p className="mt-2 text-[13px] font-semibold text-[hsl(var(--foreground))] leading-snug">
                    {label}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-[hsl(var(--muted-foreground))]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[hsl(var(--border))] pt-6 max-w-[34rem]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">
                Education
              </p>
              <div className="mt-3.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-[hsl(var(--foreground))]">
                    BS Software Engineering
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[hsl(var(--primary))]">
                    COMSATS University Abbottabad
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                    CGPA 3.51
                  </p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                    2023 — Present
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_12px_28px_-12px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))]/45 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                See projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
