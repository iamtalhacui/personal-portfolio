import { MdMenu, MdClose, MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = links.map((link) =>
        document.getElementById(link.toLowerCase())
      );
      const offset = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section && section.offsetTop <= offset) {
          setActive(links[i]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-400 nav-enter ${
          scrolled ? "py-2.5 px-4 md:px-6" : "py-4 px-4 md:px-6"
        }`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-5xl rounded-2xl border border-[hsl(var(--nav-border))] px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-[hsl(var(--surface-glass))] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
              : "bg-[hsl(var(--surface-glass))]/60 backdrop-blur-md shadow-none"
          }`}
        >
          <a
            href="#home"
            className="group flex items-center gap-3.5"
            aria-label="Muhammad Talha — Home"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-[family-name:var(--font-mono)] text-[11px] font-medium tracking-[0.12em]"
              aria-hidden
            >
              MT
            </span>
            <span className="hidden sm:block font-display text-[15px] font-bold tracking-tight text-[hsl(var(--foreground))] leading-none">
              Muhammad Talha
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActive(link)}
                  className={`relative px-3.5 py-1.5 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                    active === link
                      ? "text-[hsl(var(--primary))]"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  {link}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-[hsl(var(--primary))] transition-all duration-300 ${
                      active === link
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-50"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--foreground))]/70 hover:border-[hsl(var(--primary))]/40 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/8 transition-all duration-200"
            >
              {isDark ? <MdLightMode size={17} /> : <MdDarkMode size={17} />}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex relative overflow-hidden items-center px-4 py-2 rounded-xl text-[13px] font-bold tracking-wide bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_10px_28px_-10px_hsl(var(--primary)/0.65)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_hsl(var(--primary)/0.75)] active:translate-y-0 transition-all duration-200 group"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full -skew-x-12 group-hover:translate-x-[120%] transition-transform duration-400" />
              <span className="relative">Hire Me</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))]/40 hover:text-[hsl(var(--primary))] transition-all duration-200"
            >
              <MdMenu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[hsl(var(--background))]/97 backdrop-blur-2xl menu-enter">
          <div className="flex items-center justify-between px-5 py-5">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-[family-name:var(--font-mono)] text-[11px] font-medium tracking-[0.12em]">
                MT
              </span>
              <span className="font-display text-base font-bold text-[hsl(var(--foreground))] leading-none">
                Muhammad Talha
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:rotate-90 transition-all duration-200"
            >
              <MdClose size={20} />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-1 px-8 pb-16">
            {links.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActive(link);
                  setIsMenuOpen(false);
                }}
                style={{ animationDelay: `${i * 55 + 50}ms` }}
                className={`menu-link-enter font-display text-4xl sm:text-5xl font-extrabold tracking-tight transition-colors duration-200 ${
                  active === link
                    ? "text-[hsl(var(--primary))]"
                    : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                }`}
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: "340ms" }}
              className="menu-link-enter mt-8 inline-flex w-fit items-center px-7 py-3 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold text-sm shadow-lg shadow-[hsl(var(--primary))]/25"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
