"use client";

const LEARNED = [
  { icon: "⬡", label: "HTML & CSS", desc: "Estructura y estilos desde cero" },
  { icon: "◈", label: "JavaScript", desc: "Lógica, DOM y APIs" },
  { icon: "▶", label: "React & Next.js", desc: "Componentes, rutas y App Router" },
  { icon: "✦", label: "Node.js", desc: "Backend y servidores con Express" },
  { icon: "⬡", label: "Deployment", desc: "Nginx, Vercel y hosting real" },
];

const INTERESTS = [
  { label: "Frontend & UI/UX", color: "#f73797", icon: "🎨" },
  { label: "Linux & Sistemas", color: "#0d97b6", icon: "🐧" },
  { label: "Mobile Dev",       color: "#568c40", icon: "📱" },
  { label: "Bases de Datos",   color: "#9d1b1a", icon: "🗄️" },
  { label: "Open Source",      color: "#0d97b6", icon: "⚙️" },
  { label: "Pixel Art & Diseño", color: "#f73797", icon: "🎮" },
];

const LEARNING = [
  "Three.js & animaciones 3D",
  "Kotlin avanzado / Jetpack Compose",
  "DevOps & CI/CD pipelines",
  "Diseño de sistemas distribuidos",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#120e2a" }}
    >
      {/* Fondo grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Blob decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: "#f7379710" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px]" style={{ backgroundColor: "#0d97b610" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-[10px]" style={{ color: "#f73797" }}>02</span>
          <div className="h-px flex-1" style={{ backgroundColor: "#f7379740" }} />
          <h2 className="font-display text-lg sm:text-xl text-white text-stroke">
            SOBRE MÍ
          </h2>
          <div className="h-px flex-1" style={{ backgroundColor: "#f7379740" }} />
          <span className="text-xl animate-star-twinkle" style={{ color: "#d1f9f6" }}>✦</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: quien soy */}
          <div>
            {/* Card principal */}
            <div
              className="rounded-2xl border-4 border-black p-6 mb-6 shadow-[6px_6px_0px_black]"
              style={{ backgroundColor: "#1a1035" }}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 border-2" style={{ backgroundColor: "#f7379720", borderColor: "#f73797" }}>
                <span className="font-display text-[8px]" style={{ color: "#f73797" }}>PLAYER INFO</span>
              </div>

              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#d1f9f6cc" }}>
                Soy <span className="font-bold" style={{ color: "#f73797" }}>Fatima Navarro</span>, estudiante de 
                Ciencias de la Computación y Tecnologías de la Información en la{" "}
                <span className="font-bold" style={{ color: "#0d97b6" }}>Universidad del Valle de Guatemala</span>.
              </p>

              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#d1f9f6cc" }}>
                Me apasiona construir interfaces que combinen buen diseño con código limpio. 
                Cuando no estoy programando, estoy personalizando mi setup de{" "}
                <span className="font-bold" style={{ color: "#568c40" }}>Fedora + Hyprland</span>, 
                jugando en mi Switch OLED.
              </p>

              <p className="font-body text-base leading-relaxed" style={{ color: "#d1f9f6cc" }}>
                También desarrollo en <span className="font-bold" style={{ color: "#f73797" }}>Android con Kotlin</span>, 
                trabajo con <span className="font-bold" style={{ color: "#0d97b6" }}>PostgreSQL</span> y 
                disfruto el proceso completo desde el diseño en Figma hasta el deploy.
              </p>
            </div>

            {/* Lo que quiero aprender */}
            <div
              className="rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0px_black]"
              style={{ backgroundColor: "#231848" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: "#0d97b6" }}>▶</span>
                <h3 className="font-display text-[10px] text-white">NEXT LEVEL</h3>
              </div>
              <p className="font-body text-sm mb-3" style={{ color: "#d1f9f680" }}>Áreas que quiero seguir aprendiendo:</p>
              <ul className="space-y-2">
                {LEARNING.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-sm" style={{ color: "#d1f9f6cc" }}>
                    <span className="text-xs" style={{ color: "#f73797" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: stats y skills */}
          <div className="space-y-6">

            {/* Lo que aprendí en el curso */}
            <div
              className="rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0px_black]"
              style={{ backgroundColor: "#1a1035" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: "#f73797" }}>✦</span>
                <h3 className="font-display text-[10px] text-white">EN ESTE CURSO APRENDÍ</h3>
              </div>
              <div className="space-y-3">
                {LEARNED.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 group">
                   <div className="w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform">
  <img src="/images/estrella.png" alt="star" className="w-full h-full object-contain" />
</div>
                    <div>
                      <p className="font-body font-bold text-sm text-white">{item.label}</p>
                      <p className="font-body text-xs" style={{ color: "#d1f9f670" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Intereses */}
            <div
              className="rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0px_black]"
              style={{ backgroundColor: "#231848" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: "#0d97b6" }}>◈</span>
                <h3 className="font-display text-[10px] text-white">INTERESES</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((item) => (
                  <span
                    key={item.label}
                    className="font-body font-bold text-xs px-3 py-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_black] hover:scale-105 hover:-rotate-1 transition-all duration-200 cursor-default flex items-center gap-1"
                    style={{ backgroundColor: item.color, color: "white" }}
                  >
                    {item.icon} {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: "2+", label: "años\ncodeando" },
                { num: "10+", label: "proyectos\ncompletados" },
                { num: "∞", label: "commits\nen git" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border-4 border-black p-4 text-center shadow-[3px_3px_0px_black] hover:shadow-[5px_5px_0px_black] hover:-translate-y-1 transition-all"
                  style={{ backgroundColor: "#1a1035" }}
                >
                  <p className="font-display text-lg mb-1" style={{ color: "#f73797", textShadow: "0 0 10px #f73797" }}>
                    {stat.num}
                  </p>
                  <p className="font-body text-[10px] whitespace-pre-line" style={{ color: "#d1f9f670" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
