"use client";
import { useState } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    name: "Lab 6 — Node.js Server",
    description: "Servidor HTTP nativo con Node.js. Debug de bugs, nuevas rutas y manejo de archivos JSON.",
    techs: ["Node.js", "HTTP", "JavaScript"],
    color: "#f73797",
    icon: "⬡",
    difficulty: "EASY",
    repo: "https://github.com/fatupopzz/lab6-web",
    deploy: null,
  },
  {
    id: 2,
    name: "Lab 7 — Express + React",
    description: "Migración de servidor a Express y calculadora construida con React + Vite con diseño glass.",
    techs: ["Express", "React", "Vite", "CSS"],
    color: "#0d97b6",
    icon: "◈",
    difficulty: "NORMAL",
    repo: "https://github.com/fatupopzz/lab7-web",
    deploy: null,
  },
  {
    id: 3,
    name: "disci-app",
    description: "Habit tracker gamificado. Crea misiones, ganá XP y subí de rango. Vanilla JS deployado en nginx.",
    techs: ["HTML", "CSS", "JavaScript", "nginx"],
    color: "#568c40",
    icon: "▶",
    difficulty: "NORMAL",
    repo: "https://github.com/fatupopzz/disci-app",
    deploy: "https://youtu.be/n69axuanyfo",
  },
  {
    id: 4,
    name: "The Commonplace",
    description: "Blog app con DummyJSON API. Búsqueda, filtros, paginación, creación y detalle de posts.",
    techs: ["HTML", "CSS", "JavaScript", "DummyJSON API"],
    color: "#9d1b1a",
    icon: "✦",
    difficulty: "HARD",
    repo: "https://github.com/fatupopzz/blog-project",
    deploy: null,
  },
  {
    id: 5,
    name: "Not Balatro",
    description: "Versión simplificada de Balatro. Juego de cartas con jokers, sistema de puntaje y rondas.",
    techs: ["React", "Vite", "JavaScript", "CSS"],
    color: "#f73797",
    icon: "🃏",
    difficulty: "EXPERT",
    repo: "https://github.com/fatupopzz/not-balatro",
    deploy: null,
    isFinal: true,
  },
];

const DIFFICULTY_COLORS = {
  EASY:   "#568c40",
  NORMAL: "#0d97b6",
  HARD:   "#9d1b1a",
  EXPERT: "#f73797",
};

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section id="projects" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0d0a1a" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full blur-[120px]" style={{ backgroundColor: "#f7379715" }} />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-[100px]" style={{ backgroundColor: "#0d97b615" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-[10px]" style={{ color: "#0d97b6" }}>03</span>
          <div className="h-px flex-1" style={{ backgroundColor: "#0d97b640" }} />
          <h2 className="font-display text-lg sm:text-xl text-white text-stroke">PROYECTOS</h2>
          <div className="h-px flex-1" style={{ backgroundColor: "#0d97b640" }} />
          <span className="text-xl animate-star-twinkle" style={{ color: "#d1f9f6" }}>✦</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT: lista */}
          <div className="flex flex-col gap-3 lg:w-80 flex-shrink-0">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="w-full text-left rounded-xl border-4 border-black p-4 transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: active === i ? p.color : "#1a1035",
                  boxShadow: active === i ? `4px 4px 0px black, 0 0 20px ${p.color}60` : "4px 4px 0px black",
                  transform: active === i ? "translateY(-4px)" : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                 <img src="/images/estrella.png" alt="star" className="w-6 h-6 object-contain" />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[9px] truncate" style={{ color: active === i ? "black" : "#d1f9f6" }}>
                      {p.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="font-display text-[7px] px-2 py-0.5 rounded-full border border-black"
                        style={{ backgroundColor: DIFFICULTY_COLORS[p.difficulty], color: "white" }}
                      >
                        {p.difficulty}
                      </span>
                      {p.isFinal && (
                        <span className="font-display text-[7px] px-2 py-0.5 rounded-full border border-black bg-yellow-300 text-black">
                          FINAL
                        </span>
                      )}
                    </div>
                  </div>
                  {active === i && <span className="font-display text-[10px] text-black">▶</span>}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: detalle */}
          <div
            className="flex-1 rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0px_black] transition-all duration-300"
            style={{ backgroundColor: "#1a1035" }}
          >
            {/* Screenshot */}
            <div
              className="relative w-full h-40 rounded-xl border-4 border-black mb-5 overflow-hidden"
              style={{ backgroundColor: "#231848", boxShadow: `0 0 20px ${project.color}40` }}
            >
              <Image
                src={`/images/${project.id}.png`}
                alt={project.name}
                fill
                className="object-cover"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>

            {/* Título + badge */}
            <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
              <h3 className="font-display text-sm leading-tight" style={{ color: project.color, textShadow: `0 0 10px ${project.color}` }}>
                {project.name}
              </h3>
              <div className="flex gap-2">
                <span
                  className="font-display text-[7px] px-2 py-1 rounded-full border-2 border-black"
                  style={{ backgroundColor: DIFFICULTY_COLORS[project.difficulty], color: "white" }}
                >
                  {project.difficulty}
                </span>
                {project.isFinal && (
                  <span className="font-display text-[7px] px-2 py-1 rounded-full border-2 border-black bg-yellow-300 text-black">
                    PROYECTO FINAL
                  </span>
                )}
              </div>
            </div>

            {/* Descripción */}
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#d1f9f6aa" }}>
              {project.description}
            </p>

            {/* Techs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="font-body font-bold text-xs px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_black]"
                  style={{ backgroundColor: project.color, color: "white" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-[9px] px-4 py-2 border-4 border-black shadow-[3px_3px_0px_black] hover:shadow-[5px_5px_0px_black] hover:-translate-y-1 transition-all duration-200 text-white"
                style={{ backgroundColor: project.color }}
              >
                ⬡ REPO
              </a>
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[9px] px-4 py-2 border-4 border-black shadow-[3px_3px_0px_black] hover:shadow-[5px_5px_0px_black] hover:-translate-y-1 transition-all duration-200 text-black"
                  style={{ backgroundColor: "#d1f9f6" }}
                >
                  ◈ DEMO
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
