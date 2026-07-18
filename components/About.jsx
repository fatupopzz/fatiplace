"use client";

const LEARNED = [
  { label: "HTML & CSS", desc: "Estructura y estilos desde cero", pct: 90 },
  { label: "JavaScript", desc: "Lógica, DOM y APIs", pct: 85 },
  { label: "React & Next.js", desc: "Componentes, rutas y App Router", pct: 80 },
  { label: "Node.js", desc: "Backend y servidores con Express", pct: 75 },
  { label: "Deployment", desc: "Nginx, Vercel y hosting real", pct: 70 },
];

const INTERESTS = [
  "Frontend & UI/UX", "Linux & Sistemas", "Mobile Dev",
  "Bases de Datos", "Open Source", "Pixel Art & Diseño",
];

const LEARNING = [
  "Three.js & animaciones 3D",
  "Kotlin avanzado / Jetpack Compose",
  "DevOps & CI/CD pipelines",
  "Diseño de sistemas distribuidos",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "24px 0 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
        <div className="term-window">
          <div className="term-header">
            <div className="term-dots">
              <div className="term-dot term-dot--red" />
              <div className="term-dot term-dot--yellow" />
              <div className="term-dot term-dot--green" />
            </div>
            <span className="term-title">about.sh - fati@archlinux</span>
          </div>

          <div className="term-body">
            {/* whoami */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "8px" }}>
                <span style={{ color: "#00cccc" }}>fati@archlinux</span>
                <span style={{ color: "#555" }}>:</span>
                <span style={{ color: "#3399ff" }}>~</span>
                <span style={{ color: "#555" }}> $ </span>
                <span className="glow">./about.sh --verbose</span>
              </div>

              <div style={{
                color: "#cccccc", lineHeight: "1.8",
                borderLeft: "2px solid #1a3a1a", paddingLeft: "16px",
              }}>
                <p>
                  Soy <span style={{ color: "#33ff33", fontWeight: "bold" }}>Fátima Navarro</span>,
                  estudiante de Ciencias de la Computación en la{" "}
                  <span style={{ color: "#cccc00" }}>Universidad del Valle de Guatemala</span>.
                </p>
                <p style={{ marginTop: "6px" }}>
                  Me apasiona construir interfaces que combinen buen diseño con código limpio.
                  Cuando no estoy programando, estoy customizando mi setup de{" "}
                  <span style={{ color: "#cc66cc" }}>Fedora + Hyprland</span>{" "}
                  o jugando en mi Switch OLED.
                </p>
                <p style={{ marginTop: "6px" }}>
                  También desarrollo en Android con <span style={{ color: "#ff9933" }}>Kotlin</span>,
                  trabajo con <span style={{ color: "#3399ff" }}>PostgreSQL</span>{" "}
                  y disfruto el proceso completo desde Figma hasta el deploy.
                </p>
              </div>
            </div>

            <hr className="term-divider" />

            {/* Skills with progress bars */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "12px" }}>
                <span style={{ color: "#00cccc" }}>fati@archlinux</span>
                <span style={{ color: "#555" }}>:</span>
                <span style={{ color: "#3399ff" }}>~</span>
                <span style={{ color: "#555" }}> $ </span>
                <span className="glow">htop --skills</span>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
              }}>
                {/* Skills column */}
                <div>
                  <div style={{ color: "#cccc00", marginBottom: "10px", fontSize: "13px" }}>
                    # Skill levels
                  </div>
                  {LEARNED.map((item) => (
                    <div key={item.label} style={{ marginBottom: "10px" }}>
                      <div style={{
                        display: "flex", justifyContent: "space-between",
                        marginBottom: "3px", fontSize: "13px",
                      }}>
                        <span style={{ color: "#33ff33" }}>{item.label}</span>
                        <span style={{ color: "#555" }}>{item.pct}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${item.pct}%` }} />
                      </div>
                      <div style={{ color: "#555", fontSize: "11px", marginTop: "2px" }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right column */}
                <div>
                  {/* Interests */}
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ color: "#cccc00", marginBottom: "10px", fontSize: "13px" }}>
                      # Intereses
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {INTERESTS.map((i) => (
                        <span key={i} className="term-tag">{i}</span>
                      ))}
                    </div>
                  </div>

                  {/* Learning */}
                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ color: "#cccc00", marginBottom: "10px", fontSize: "13px" }}>
                      # Next level (aprendiendo)
                    </div>
                    {LEARNING.map((l) => (
                      <div key={l} style={{
                        display: "flex", gap: "8px", alignItems: "center",
                        fontSize: "13px", padding: "4px 0",
                        borderBottom: "1px solid rgba(51,255,51,0.05)",
                      }}>
                        <span style={{ color: "#ff9933" }}>-&gt;</span>
                        <span style={{ color: "#cccccc" }}>{l}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div>
                    <div style={{ color: "#cccc00", marginBottom: "10px", fontSize: "13px" }}>
                      # Stats
                    </div>
                    {[
                      { k: "Uptime", v: "2+ años codeando" },
                      { k: "Processes", v: "10+ proyectos" },
                      { k: "Commits", v: "infinity" },
                      { k: "Coffee", v: "9001 tazas" },
                    ].map((row) => (
                      <div key={row.k} style={{
                        display: "flex", marginBottom: "2px", fontSize: "13px",
                      }}>
                        <span style={{ color: "#33ff33", width: "120px", flexShrink: 0 }}>{row.k}:</span>
                        <span style={{ color: "#cccccc" }}>{row.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cursor */}
            <div style={{ marginTop: "8px" }}>
              <span style={{ color: "#00cccc" }}>fati@archlinux</span>
              <span style={{ color: "#555" }}>:</span>
              <span style={{ color: "#3399ff" }}>~</span>
              <span style={{ color: "#555" }}> $ </span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
