import { useEffect, useState } from "react";

const CodeWindow = ({ title = "talha.config.ts", className = "" }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const c = isDark
    ? {
        win: "bg-[#0c1118] border border-white/10",
        header: "bg-[#121821] border-b border-white/8",
        title: "text-slate-400",
        comment: "text-[#7d8590]",
        keyword: "text-[#ff7b72]",
        prop: "text-[#79c0ff]",
        string: "text-[#a5d6ff]",
        punct: "text-[#e6edf3]",
        bracket: "text-[#ffa657]",
        lineNum: "text-[#3d444d]",
        bool: "text-[#ff7b72]",
      }
    : {
        win: "bg-[#fbfcfd] border border-slate-200/90",
        header: "bg-slate-100/90 border-b border-slate-200",
        title: "text-slate-500",
        comment: "text-[#6a737d]",
        keyword: "text-[#cf222e]",
        prop: "text-[#0550ae]",
        string: "text-[#0a3069]",
        punct: "text-[#24292f]",
        bracket: "text-[#953800]",
        lineNum: "text-slate-300",
        bool: "text-[#cf222e]",
      };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-18px_rgba(0,0,0,0.4)] ${c.win} ${className}`}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[hsl(var(--primary))]/20 blur-3xl pointer-events-none" />

      <div className={`${c.header} px-4 py-3 flex items-center justify-between`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className={`${c.title} text-xs font-medium tracking-wide font-[family-name:var(--font-mono)]`}>
          {title}
        </span>
        <div className="w-14" />
      </div>

      <div className="p-5 font-[family-name:var(--font-mono)] text-[12.5px] sm:text-[13px] leading-6">
        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>1</span>
          <span className={c.comment}>{"// Full Stack Web Developer"}</span>
        </div>

        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>2</span>
          <span>
            <span className={c.keyword}>const </span>
            <span className={c.prop}>talha</span>
            <span className={c.punct}> = </span>
            <span className={c.bracket}>{"{"}</span>
          </span>
        </div>

        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>3</span>
          <span className="ml-4">
            <span className={c.prop}>role</span>
            <span className={c.punct}>: </span>
            <span className={c.string}>'Full Stack Engineer'</span>
            <span className={c.punct}>,</span>
          </span>
        </div>

        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>4</span>
          <span className="ml-4">
            <span className={c.prop}>stack</span>
            <span className={c.punct}>: [</span>
            <span className={c.string}>'Next.js'</span>
            <span className={c.punct}>, </span>
            <span className={c.string}>'NestJS'</span>
            <span className={c.punct}>,</span>
          </span>
        </div>

        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>5</span>
          <span className="ml-8">
            <span className={c.string}>'Express'</span>
            <span className={c.punct}>, </span>
            <span className={c.string}>'PostgreSQL'</span>
            <span className={c.punct}>],</span>
          </span>
        </div>

        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>6</span>
          <span className="ml-4">
            <span className={c.prop}>experience</span>
            <span className={c.punct}>: </span>
            <span className={c.string}>'Australian SaaS'</span>
            <span className={c.punct}>,</span>
          </span>
        </div>

        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>7</span>
          <span className="ml-4">
            <span className={c.prop}>openToWork</span>
            <span className={c.punct}>: </span>
            <span className={c.bool}>true</span>
          </span>
        </div>

        <div className="flex">
          <span className={`${c.lineNum} select-none w-5 text-right mr-4 text-xs`}>8</span>
          <span>
            <span className={c.bracket}>{"}"}</span>
            <span className={c.punct}> as const;</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;
