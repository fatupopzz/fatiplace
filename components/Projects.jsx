"use client";
import { useState } from "react";

const DIFF_CLR = { EASY: "#33ff33", NORMAL: "#00cccc", HARD: "#cccc00", EXPERT: "#ff3333" };

const PROJECTS = [
  {
    id: 1, name: "lab6-nodejs-server", difficulty: "EASY",
    description: "Servidor HTTP nativo con Node.js. Debug de bugs, nuevas rutas y manejo de archivos JSON.",
    techs: ["Node.js", "HTTP", "JavaScript"],
    repo: "https://github.com/fatupopzz/lab6-web", deploy: null,
  },
  {
    id: 2, name: "lab7-express-react", difficulty: "NORMAL",
    description: "Migración a Express y calculadora con React + Vite con diseño glass.",
    techs: ["Express", "React", "Vite", "CSS"],
    repo: "https://github.com/fatupopzz/lab7-web", deploy: null,
  },
  {
    id: 3, name: "disci-app", difficulty: "NORMAL",
    description: "Habit tracker gamificado. Creá misiones, ganá XP y subí de rango. Vanilla JS en nginx.",
    techs: ["HTML", "CSS", "JavaScript", "nginx"],
    repo: "https://github.com/fatupopzz/disci-app", deploy: "https://youtu.be/n69axuanyfo",
  },
  {
    id: 4, name: "the-commonplace", difficulty: "HARD",
    description: "Blog app con DummyJSON API. Búsqueda, filtros, paginación, creación y detalle de posts.",
    techs: ["HTML", "CSS", "JavaScript", "DummyJSON"],
    repo: "https://github.com/fatupopzz/blog-project", deploy: null,
  },
  {
    id: 5, name: "not-balatro", difficulty: "EXPERT", isFinal: true,
    description: "Versión simplificada de Balatro. Juego de cartas con jokers, sistema de puntaje y rondas.",
    techs: ["React", "Vite", "JavaScript", "CSS"],
    repo: "https://github.com/fatupopzz/not-balatro", deploy: null,
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];

  return (
    <section id="projects" style={{ padding: "24px 0 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
        <div className="term-window">
          <div className="term-header">
            <div className="term-dots">
              <div className="term-dot term-dot--red" />
              <div className="term-dot term-dot--yellow" />
              <div className="term-dot term-dot--green" />
            </div>
            <span className="term-title">projects/ - fati@archlinux</span>
          </div>

          <div className="term-body" style={{ padding: 0 }}>
            {/* Command */}
            <div style={{ padding: "16px 20px 12px" }}>
              <span style={{ color: "#00cccc" }}>fati@archlinux</span>
              <span style={{ color: "#555" }}>:</span>
              <span style={{ color: "#3399ff" }}>~/projects</span>
              <span style={{ color: "#555" }}> $ </span>
              <span className="glow">ls -la --sort=difficulty</span>
            </div>

            {/* Project explorer - split view */}
            <div style={{
              display: "flex",
              borderTop: "1px solid rgba(51,255,51,0.1)",
              minHeight: "400px",
              flexWrap: "wrap",
            }}>
              {/* File list sidebar */}
              <div style={{
                width: "100%",
                maxWidth: "240px",
                borderRight: "1px solid rgba(51,255,51,0.1)",
                flexShrink: 0,
              }}>
                <div style={{
                  padding: "8px 12px",
                  fontSize: "11px",
                  color: "#555",
                  borderBottom: "1px solid rgba(51,255,51,0.05)",
                }}>
                  EXPLORER
                </div>
                {PROJECTS.map((proj, i) => (
                  <div
                    key={proj.id}
                    className={`project-item${active === i ? " active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span style={{ color: "#cccc00", fontSize: "12px" }}>
                      {active === i ? ">" : " "}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{
                        fontSize: "13px",
                        color: active === i ? "#33ff33" : "#cccccc",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}>
                        {proj.name}/
                      </div>
                      <div style={{
                        fontSize: "11px",
                        color: DIFF_CLR[proj.difficulty],
                        opacity: 0.7,
                      }}>
                        [{proj.difficulty}]{proj.isFinal ? " FINAL" : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detail pane */}
              <div style={{ flex: "1 1 300px", padding: "16px 20px", minWidth: 0 }}>
                {/* File header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  marginBottom: "16px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid rgba(51,255,51,0.1)",
                }}>
                  <span style={{ color: "#cccc00", fontSize: "18px" }}>#</span>
                  <span style={{ color: "#33ff33", fontSize: "16px", fontWeight: "bold" }}>
                    {p.name}
                  </span>
                  {p.isFinal && (
                    <span style={{
                      fontSize: "10px", padding: "2px 6px",
                      border: "1px solid #ff3333", color: "#ff3333",
                      borderRadius: "3px",
                    }}>
                      PROYECTO FINAL
                    </span>
                  )}
                </div>

                {/* Screenshot area */}
                <div style={{
                  width: "100%", height: "160px",
                  border: "1px solid rgba(51,255,51,0.1)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  position: "relative",
                  background: "#0d0d0d",
                }}>
                  <img
                    src={`/images/${p.id}.png`}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  <div style={{
                    position: "absolute", bottom: "6px", left: "8px",
                    fontSize: "10px", color: "#555",
                    background: "rgba(0,0,0,0.7)", padding: "2px 6px",
                    borderRadius: "2px",
                  }}>
                    screenshot.png
                  </div>
                </div>

                {/* README style content */}
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ color: "#cccc00", fontSize: "12px", marginBottom: "6px" }}>
                    ## README.md
                  </div>
                  <p style={{ color: "#cccccc", fontSize: "13px", lineHeight: "1.7" }}>
                    {p.description}
                  </p>
                </div>

                {/* Difficulty */}
                <div style={{ marginBottom: "12px", fontSize: "13px" }}>
                  <span style={{ color: "#555" }}>difficulty: </span>
                  <span style={{ color: DIFF_CLR[p.difficulty], fontWeight: "bold" }}>
                    {p.difficulty}
                  </span>
                </div>

                {/* Tech stack */}
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ color: "#555", fontSize: "12px", marginBottom: "6px" }}>
                    dependencies:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {p.techs.map((t) => (
                      <span key={t} className="term-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="term-btn">
                    <span style={{ color: "#555" }}>$</span> git clone
                  </a>
                  {p.deploy && (
                    <a href={p.deploy} target="_blank" rel="noopener noreferrer" className="term-btn"
                      style={{ color: "#cc66cc", borderColor: "rgba(204,102,204,0.2)" }}>
                      <span style={{ color: "#555" }}>$</span> ./demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div style={{
              borderTop: "1px solid rgba(51,255,51,0.1)",
              padding: "6px 16px",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
              color: "#555",
            }}>
              <span>{PROJECTS.length} projects</span>
              <span>viewing: {p.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
