"use client";
import { useState } from "react";
import Image from "next/image";

const DIFF_BG  = { EASY:"#d4edda", NORMAL:"#d1ecf1", HARD:"#fff3cd", EXPERT:"#f8d7da" };
const DIFF_CLR = { EASY:"#155724", NORMAL:"#0c5460", HARD:"#856404", EXPERT:"#721c24" };

const PROJECTS = [
  { id:1, name:"Lab 6 — Node.js Server", difficulty:"EASY",
    description:"Servidor HTTP nativo con Node.js. Debug de bugs, nuevas rutas y manejo de archivos JSON.",
    techs:["Node.js","HTTP","JavaScript"], repo:"https://github.com/fatupopzz/lab6-web", deploy:null },
  { id:2, name:"Lab 7 — Express + React", difficulty:"NORMAL",
    description:"Migración a Express y calculadora con React + Vite con diseño glass.",
    techs:["Express","React","Vite","CSS"], repo:"https://github.com/fatupopzz/lab7-web", deploy:null },
  { id:3, name:"disci-app", difficulty:"NORMAL",
    description:"Habit tracker gamificado. Crea misiones, ganá XP y subí de rango. Vanilla JS en nginx.",
    techs:["HTML","CSS","JavaScript","nginx"], repo:"https://github.com/fatupopzz/disci-app", deploy:"https://youtu.be/n69axuanyfo" },
  { id:4, name:"The Commonplace", difficulty:"HARD",
    description:"Blog app con DummyJSON API. Búsqueda, filtros, paginación, creación y detalle de posts.",
    techs:["HTML","CSS","JavaScript","DummyJSON"], repo:"https://github.com/fatupopzz/blog-project", deploy:null },
  { id:5, name:"Not Balatro", difficulty:"EXPERT", isFinal:true,
    description:"Versión simplificada de Balatro. Juego de cartas con jokers, sistema de puntaje y rondas.",
    techs:["React","Vite","JavaScript","CSS"], repo:"https://github.com/fatupopzz/not-balatro", deploy:null },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];

  return (
    <section id="projects" className="xp-section" style={{ paddingBottom:"32px" }}>
      <div style={{ maxWidth:"900px", margin:"0 auto", padding:"0 16px" }}>

        <div>
          <div className="xp-titlebar">
            <img src="/images/estrella.png" alt="" style={{ width:"16px", height:"16px" }} />
            <span>Explorador de Proyectos — Mis Trabajos</span>
            <div className="xp-titlebar-buttons">
              <button className="xp-btn-min">_</button>
              <button className="xp-btn-max">□</button>
              <button className="xp-btn-close">✕</button>
            </div>
          </div>

          <div className="xp-window">
            {/* toolbar */}
            <div style={{ background:"#ece9d8", borderBottom:"1px solid #aca899",
                           padding:"3px 6px", display:"flex", gap:"4px", alignItems:"center" }}>
              <button className="xp-button" style={{ padding:"1px 8px" }}>
                <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                Atrás
              </button>
              <button className="xp-button" style={{ padding:"1px 8px" }}>
                <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                Adelante
              </button>
              <div style={{ width:"1px", height:"20px", background:"#aca899", margin:"0 2px" }} />
              <span style={{ fontSize:"11px", color:"#555" }}>Ubicación:</span>
              <div style={{ flex:1, background:"white", border:"1px inset #888",
                             padding:"1px 4px", fontSize:"11px", fontFamily:"Tahoma,Arial,sans-serif" }}>
                C:\fatiplace\proyectos\
              </div>
            </div>

            <div style={{ display:"flex", height:"380px" }}>
              {/* file list */}
              <div style={{ width:"200px", flexShrink:0, borderRight:"1px solid #aca899",
                             overflowY:"auto" }}>
                {/* sidebar */}
                <div style={{ background:"#3a6ea5", padding:"8px", color:"white" }}>
                  <div style={{ fontSize:"11px", fontWeight:"bold", marginBottom:"4px" }}>
                    Tareas del archivo
                  </div>
                  <div style={{ fontSize:"11px", display:"flex", flexDirection:"column", gap:"3px" }}>
                    <span style={{ cursor:"pointer", textDecoration:"underline", color:"#aac8f8" }}>
                      Ver este proyecto
                    </span>
                    <span style={{ cursor:"pointer", textDecoration:"underline", color:"#aac8f8" }}>
                      Abrir en GitHub
                    </span>
                  </div>
                </div>
                <div className="xp-listbox" style={{ border:"none" }}>
                  {PROJECTS.map((proj, i) => (
                    <div key={proj.id}
                         className={`xp-listitem ${active===i ? "selected" : ""}`}
                         onClick={() => setActive(i)}>
                      <img src="/images/estrella.png" alt=""
                           style={{ width:"16px", height:"16px", flexShrink:0 }} />
                      <div>
                        <div style={{ fontSize:"11px", fontWeight:"bold",
                                       color: active===i ? "white" : "#1a1a1a",
                                       whiteSpace:"nowrap", overflow:"hidden",
                                       textOverflow:"ellipsis", maxWidth:"130px" }}>
                          {proj.name}
                        </div>
                        <div style={{ fontSize:"10px",
                                       background: DIFF_BG[proj.difficulty],
                                       color: DIFF_CLR[proj.difficulty],
                                       padding:"0 4px", borderRadius:"2px", display:"inline-block" }}>
                          {proj.difficulty}
                          {proj.isFinal && " ★ FINAL"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* detail pane */}
              <div style={{ flex:1, padding:"12px", display:"flex", flexDirection:"column", gap:"10px",
                             overflowY:"auto", background:"white" }}>
                {/* screenshot */}
                <div style={{ width:"100%", height:"140px", background:"#ece9d8",
                               border:"2px inset #888", position:"relative", flexShrink:0 }}>
                  <Image src={`/images/${p.id}.png`} alt={p.name} fill
                         className="object-cover"
                         onError={e => { e.target.style.display="none"; }} />
                  <div style={{ position:"absolute", inset:0, display:"flex",
                                 alignItems:"center", justifyContent:"center" }}>
                    <img src="/images/estrella.png" alt=""
                         style={{ width:"40px", height:"40px", opacity:0.25 }} />
                  </div>
                </div>

                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle" }} />
                    {" "}{p.name}
                  </span>
                  <div style={{ display:"flex", gap:"4px", marginBottom:"6px" }}>
                    <span style={{ fontSize:"10px", padding:"1px 6px",
                                    background:DIFF_BG[p.difficulty], color:DIFF_CLR[p.difficulty],
                                    border:"1px solid currentColor", borderRadius:"2px" }}>
                      {p.difficulty}
                    </span>
                    {p.isFinal && (
                      <span style={{ fontSize:"10px", padding:"1px 6px",
                                      background:"#fff3cd", color:"#856404",
                                      border:"1px solid #856404", borderRadius:"2px" }}>
                        PROYECTO FINAL
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize:"11px", lineHeight:"1.5", color:"#333", marginBottom:"8px" }}>
                    {p.description}
                  </p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"3px", marginBottom:"10px" }}>
                    {p.techs.map(t => (
                      <span key={t} className="xp-tag">
                        <img src="/images/estrella.png" alt="" style={{ width:"10px", height:"10px" }} />
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display:"flex", gap:"6px" }}>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="xp-button">
                      <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                      Abrir repo
                    </a>
                    {p.deploy && (
                      <a href={p.deploy} target="_blank" rel="noopener noreferrer" className="xp-button">
                        <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                        Ver demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="xp-statusbar">
              <div className="xp-statusbar-panel">
                {PROJECTS.length} objetos
              </div>
              <div className="xp-statusbar-panel">
                Seleccionado: {p.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
