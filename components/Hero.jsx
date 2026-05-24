"use client";

const TECHS = [
  { label: "Python",      color: "bg-[#f73797] text-white" },
  { label: "JavaScript",  color: "bg-[#568c40] text-white" },
  { label: "TypeScript",  color: "bg-[#0d97b6] text-white" },
  { label: "React",       color: "bg-[#0d97b6] text-white" },
  { label: "Next.js",     color: "bg-[#d1f9f6] text-black" },
  { label: "PostgreSQL",  color: "bg-[#9d1b1a] text-white" },
  { label: "Java",        color: "bg-[#f73797] text-white" },
  { label: "Kotlin",      color: "bg-[#9d1b1a] text-white" },
  { label: "Linux",       color: "bg-transparent text-[#0d97b6] border-2 border-[#0d97b6]" },
  { label: "Git",         color: "bg-[#568c40] text-white" },
  { label: "Figma",       color: "bg-[#f73797] text-white" },
  { label: "Firebase",    color: "bg-[#568c40] text-white" },
];

const STARS = [
  "top-20 left-1/4", "top-36 right-1/3",
  "bottom-40 left-1/5", "bottom-28 right-1/4",
  "top-1/2 left-16",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20"
    >
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: "#f7379720" }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: "#0d97b620", animationDelay: "1s" }} />

      {STARS.map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} text-xl animate-star-twinkle pointer-events-none select-none`}
          style={{ color: "#d1f9f6", animationDelay: `${i * 0.4}s` }}
        >
          ✦
        </span>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT: texto — siempre primero en mobile */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 mb-6 border-2" style={{ backgroundColor: "#f7379720", borderColor: "#f73797" }}>
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: "#f73797" }} />
            <span className="font-display text-[9px] tracking-widest" style={{ color: "#f73797" }}>PLAYER 1 READY</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl text-white text-stroke leading-tight mb-1 animate-glitch">
            FATIMA
          </h1>
          <h1 className="font-display text-3xl sm:text-4xl text-stroke leading-tight mb-6" style={{ color: "#f73797", textShadow: "0 0 10px #f73797, 0 0 30px #f73797" }}>
            NAVARRO
          </h1>

          <div className="flex items-center gap-2 justify-center lg:justify-start mb-5">
            <span className="font-display text-[10px]" style={{ color: "#0d97b6" }}>▶</span>
            <p className="font-accent text-xl" style={{ color: "#d1f9f6" }}>CS &amp; IT Student @ UVG</p>
          </div>

          <p className="font-body text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed" style={{ color: "#d1f9f6bb" }}>
            Desarrolladora apasionada por interfaces, sistemas Linux y experiencia de usuario.
            Construyo cosas que se ven bien{" "}
            <em className="not-italic font-bold" style={{ color: "#f73797" }}>y</em> funcionan mejor.
          </p>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-9">
            {TECHS.map((tech) => (
              <span
                key={tech.label}
                className={`${tech.color} font-body font-bold text-xs px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_black] hover:scale-110 hover:-rotate-2 transition-all duration-200 cursor-default`}
              >
                {tech.label}
              </span>
            ))}
          </div>

          <div className="flex gap-4 justify-center lg:justify-start flex-wrap mb-8">            <a
              href="https://github.com/fatupopzz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[10px] text-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200"
              style={{ backgroundColor: "#f73797" }}
            >
              ⬡ GITHUB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[10px] text-white px-6 py-3 border-4 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200"
              style={{ backgroundColor: "#0d97b6" }}
            >
              ◈ LINKEDIN
            </a>
          </div>
        </div>

        {/* RIGHT: avatar — va abajo en mobile */}
        <div className="relative flex-shrink-0 order-1 lg:order-2">
          <div className="absolute rounded-full border-4 border-dashed animate-spin-slow" style={{ inset: "-20px", borderColor: "#f7379740" }} />
          <div className="absolute rounded-full border-2 border-dashed animate-spin-slow" style={{ inset: "-36px", borderColor: "#0d97b630", animationDirection: "reverse" }} />

          <div
           className="relative w-36 h-36 sm:w-64 sm:h-64 rounded-2xl border-4 border-black overflow-hidden animate-float"
            style={{ backgroundColor: "#1a1035", boxShadow: "0 0 10px #f73797, 0 0 30px #f73797" }}
          >
            <img src="/images/avatar.png" alt="Fatima Navarro" className="w-full h-full object-cover" />
            <span className="absolute top-2 left-2 text-xs select-none" style={{ color: "#d1f9f6" }}>✦</span>
            <span className="absolute top-2 right-2 text-xs select-none" style={{ color: "#0d97b6" }}>✦</span>
            <span className="absolute bottom-2 left-2 text-xs select-none" style={{ color: "#f73797" }}>✦</span>
            <span className="absolute bottom-2 right-2 text-xs select-none" style={{ color: "#d1f9f6" }}>✦</span>
          </div>

          <div className="absolute -top-4 -right-4 font-display text-[8px] text-black px-2 py-1 border-2 border-black shadow-[2px_2px_0px_black] rotate-6 animate-bounce-slow" style={{ backgroundColor: "#d1f9f6" }}>
            UVG 24044
          </div>
          <div className="absolute -bottom-4 -left-4 font-display text-[8px] text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_black] -rotate-3 animate-float-slow" style={{ backgroundColor: "#568c40" }}>
            CS + IT
          </div>
        </div>
      </div>

     <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 animate-bounce">
        <span className="font-display text-[8px] tracking-widest" style={{ color: "#d1f9f640" }}>SCROLL</span>
        <span className="text-xl" style={{ color: "#f73797" }}>↓</span>
      </div>
    </section>
  );
}
