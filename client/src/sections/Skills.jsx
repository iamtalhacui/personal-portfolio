import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJsSquare,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiTypescript,
  SiFlutter,
} from "react-icons/si";

const TECH_ROW_A = [
  { icon: SiNextdotjs, label: "Next.js", color: "currentColor" },
  { icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { icon: FaReact, label: "React", color: "#61DAFB" },
  { icon: FaNodeJs, label: "Node.js", color: "#68A063" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: FaJsSquare, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiExpress, label: "Express", color: "currentColor" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
];

const TECH_ROW_B = [
  { icon: SiFlutter, label: "Flutter", color: "#02569B" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiMysql, label: "MySQL", color: "#00758F" },
  { icon: FaPython, label: "Python", color: "#3776AB" },
  { icon: FaHtml5, label: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, label: "CSS3", color: "#1572B6" },
  { icon: FaGitAlt, label: "Git", color: "#F05032" },
  { icon: FaDocker, label: "Docker", color: "#2496ED" },
  { icon: FaReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "currentColor" },
];

const MarqueeTrack = ({ items, reverse = false, duration = 40 }) => {
  const loop = [...items, ...items];

  return (
    <div className="marquee-row">
      <div
        className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {loop.map(({ icon: Icon, label, color }, i) => (
          <div
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/70 shadow-[0_1px_0_hsl(var(--border)/0.4)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--muted))]/80">
              <Icon
                size={16}
                style={color === "currentColor" ? undefined : { color }}
                className={
                  color === "currentColor"
                    ? "text-[hsl(var(--foreground))]"
                    : ""
                }
                aria-hidden
              />
            </span>
            <span className="text-[13px] font-semibold tracking-tight text-[hsl(var(--foreground))] whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-8 left-1/2 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]/7 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-md">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
            Stack
          </p>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-snug">
            Tools &amp; technologies
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] max-w-sm">
            Languages, frameworks, and platforms I use to design, build, and ship
            production software.
          </p>
        </div>

        <div className="mt-10 md:mt-12 space-y-4">
          <div className="marquee-fade">
            <MarqueeTrack items={TECH_ROW_A} duration={36} />
          </div>
          <div className="marquee-fade">
            <MarqueeTrack items={TECH_ROW_B} reverse duration={42} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
