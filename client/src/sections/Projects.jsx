import { ArrowUpRight, Github } from "lucide-react";
import estoreImg from "../assets/images/e-store.png";
import gymImg from "../assets/images/gym-site.png";
import foodAppImg from "../assets/images/food-app.png";
import tidytango from "../assets/images/tidytango.png";
import flutterFoodAppImg from "../assets/images/food-del-app-card.jpg";
import tourAppImg from "../assets/images/tour-website.png";

const projects = [
  {
    title: "Food Ordering Platform",
    description:
      "Full-stack delivery app with Stripe payments, admin dashboard, and chatbot support.",
    stack: ["React", "Node", "MongoDB", "Stripe"],
    image: foodAppImg,
    liveUrl: "https://food-app-jade-ten.vercel.app",
    githubUrl: "https://github.com/iamtalhacui/food-app",
    year: "2025",
  },
  {
    title: "Tidy Tango",
    description:
      "Marketing site for a UAE cleaning company — fast, responsive, conversion-focused.",
    stack: ["React", "Tailwind", "JS"],
    image: tidytango,
    liveUrl: "https://tidytango.online",
    githubUrl: "https://github.com/iamtalhacui/tidytango",
    year: "2025",
  },
  {
    title: "AI Food Delivery",
    description:
      "Flutter app with customer, owner, and admin portals plus AI chatbot support.",
    stack: ["Flutter", "Node", "MongoDB"],
    image: flutterFoodAppImg,
    githubUrl: "https://github.com/iamtalhacui/flutter-food-app",
    year: "2025",
  },
  {
    title: "Tour Booking UI",
    description:
      "Travel frontend with search filtering and a polished responsive layout.",
    stack: ["React", "Tailwind", "Vite"],
    image: tourAppImg,
    liveUrl: "https://tour-website-1vjx.vercel.app",
    githubUrl: "https://github.com/iamtalhacui/tour-website/",
    year: "2024",
  },
  {
    title: "E-Store",
    description:
      "Clean e-commerce UI with modern browsing and a smooth shopping flow.",
    stack: ["React", "Tailwind"],
    image: estoreImg,
    liveUrl: "https://e-store-plum-chi.vercel.app",
    githubUrl: "https://github.com/iamtalhacui/e-store",
    year: "2024",
  },
  {
    title: "Code & Gym",
    description:
      "Gym landing page with a sharp layout and subtle motion details.",
    stack: ["React", "Tailwind"],
    image: gymImg,
    liveUrl: "https://gym-site-phi.vercel.app/",
    githubUrl: "https://github.com/iamtalhacui/gym-site",
    year: "2024",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 right-0 h-64 w-64 rounded-full bg-[hsl(var(--primary))]/8 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">
            Work
          </p>
          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-snug">
            Projects
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            Selected work across full-stack, product UI, and mobile.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/50 overflow-hidden transition-all duration-300 hover:border-[hsl(var(--primary))]/30 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[hsl(var(--muted))]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-2.5 right-2.5 font-mono text-[10px] font-semibold tracking-wide text-white/95 bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2.5 p-4">
                <h3 className="font-display text-[15px] font-bold tracking-tight text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-[12.5px] leading-relaxed text-[hsl(var(--muted-foreground))] line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-[hsl(var(--muted-foreground))] px-2 py-0.5 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-3 border-t border-[hsl(var(--border))]/80">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-[hsl(var(--primary))] hover:gap-1.5 transition-all"
                    >
                      Live
                      <ArrowUpRight size={13} strokeWidth={2.25} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                    >
                      <Github size={12} strokeWidth={2} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
