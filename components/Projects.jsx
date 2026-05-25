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
    <section id="projects" style={{ padding:"16px 0 24px", position:"relative" }}>
      <img src="/images/fondo.gif" alt="" style={{
        position:"absolute", inset:0, width:"100%", height:"100%",
        objectFit:"cover", opacity:0.15, zIndex:0, pointerEvents:"none"
      }} />

      {/* chibi deco — bottom left */}
      <img src="/images/avatar2.png" alt=""
           className="animate-float-slow"
           style={{ position:"absolute", bottom:"16px", left:"16px",
                     width:"48px", opacity:0.8, zIndex:1,
                     filter:"drop-shadow(1px 2px 2px rgba(0,0,0,0.3))",
                     animationDelay:"1s" }} />

      {/* ghost deco — top right */}
      <img src="/images/fantito.png" alt=""
           className="animate-float"
           style={{ position:"absolute", top:"14px", right:"18px",
                     width:"50px", opacity:0.8, zIndex:1,
                     filter:"drop-shadow(1px 2px 2px rgba(0,0,0,0.3))",
                     animationDelay:"0.5s" }} />

      <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 12px", position:"relative", zIndex:2 }}>
        <div>
          <div className="xp-titlebar">
            <img src="/images/estrella.png" alt="" style={{ width:"16px", height:"16px" }} />
            <span>Explorador de Proyectos</span>
            <div className="xp-titlebar-buttons">
              <button className="xp-btn-min">_</button>
              <button className="xp-btn-max">□</button>
              <button className="xp-btn-close">✕</button>
            </div>
          </div>

          <div className="xp-window">
            {/* toolbar */}
            <div style={{ background:"#ece9d8", borderBottom:"1px solid #aca899",
                           padding:"3px 6px", display:"flex", gap:"4px",
                           alignItems:"center", flexWrap:"wrap" }}>
              <button className="xp-button" style={{ padding:"1px 8px" }}>
                <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                Atrás
              </button>
              <span style={{ fontSize:"11px", color:"#555", marginLeft:"4px" }}>
                C:\fatiplace\proyectos\
              </span>
            </div>

            {/* project list — stacks on mobile */}
            <div style={{ display:"flex", flexWrap:"wrap" }}>

              {/* sidebar: file list */}
              <div style={{
                width:"100%", maxWidth:"200px", flexShrink:0,
                borderRight:"1px solid #aca899",
              }}>
                {/* tasks panel */}
                <div style={{ background:"#3a6ea5", padding:"8px" }}>
                  <div style={{ fontSize:"11px", fontWeight:"bold", color:"white", marginBottom:"4px" }}>
                    Tareas del archivo
                  </div>
                  <div style={{ fontSize:"11px", color:"#aac8f8", display:"flex", flexDirection:"column", gap:"2px" }}>
                    <span style={{ cursor:"pointer", textDecoration:"underline" }}>Ver proyecto</span>
                    <span style={{ cursor:"pointer", textDecoration:"underline" }}>Abrir en GitHub</span>
                  </div>
                </div>
                {/* list */}
                <div style={{ background:"white" }}>
                  {PROJECTS.map((proj, i) => (
                    <div key={proj.id}
                         className={`xp-listitem${active===i ? " selected" : ""}`}
                         onClick={() => setActive(i)}>
                      <img src="/images/estrella.png" alt="" style={{ width:"16px", height:"16px", flexShrink:0 }} />
                      <div style={{ minWidth:0 }}>
                        <div style={{
                          fontSize:"11px", fontWeight:"bold",
                          color: active===i ? "white" : "#1a1a1a",
                          whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
                          maxWidth:"140px"
                        }}>
                          {proj.name}
                        </div>
                        <div style={{
                          fontSize:"10px",
                          background: DIFF_BG[proj.difficulty],
                          color: DIFF_CLR[proj.difficulty],
                          padding:"0 4px", display:"inline-block", borderRadius:"2px"
                        }}>
                          {proj.difficulty}{proj.isFinal ? " ★" : ""}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* detail pane */}
              <div style={{ flex:"1 1 220px", padding:"10px",
                             background:"white", minWidth:0, minHeight:"300px" }}>
                <div style={{ width:"100%", height:"130px", background:"#ece9d8",
                               border:"2px inset #888", position:"relative", marginBottom:"10px" }}>
                  <Image src={`/images/${p.id}.png`} alt={p.name} fill
                         style={{ objectFit:"cover" }}
                         onError={e => { e.target.style.display="none"; }} />
                  <div style={{ position:"absolute", inset:0, display:"flex",
                                 alignItems:"center", justifyContent:"center" }}>
                    <img src="/images/estrella.png" alt=""
                         style={{ width:"36px", height:"36px", opacity:0.2 }} />
                  </div>
                </div>

                <div className="xp-groupbox" style={{ marginBottom:"8px" }}>
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                    {" "}{p.name}
                  </span>
                  <div style={{ display:"flex", gap:"4px", marginBottom:"6px", flexWrap:"wrap" }}>
                    <span style={{ fontSize:"10px", padding:"1px 6px", borderRadius:"2px",
                                    background:DIFF_BG[p.difficulty], color:DIFF_CLR[p.difficulty],
                                    border:"1px solid currentColor" }}>
                      {p.difficulty}
                    </span>
                    {p.isFinal && (
                      <span style={{ fontSize:"10px", padding:"1px 6px", borderRadius:"2px",
                                      background:"#fff3cd", color:"#856404", border:"1px solid #856404" }}>
                        PROYECTO FINAL
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize:"11px", lineHeight:"1.55", color:"#333", marginBottom:"8px" }}>
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
                  <div style={{ display:"flex", gap:"5px", flexWrap:"wrap" }}>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="xp-button">
                      <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                      Repo
                    </a>
                    {p.deploy && (
                      <a href={p.deploy} target="_blank" rel="noopener noreferrer" className="xp-button">
                        <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="xp-statusbar">
              <div className="xp-statusbar-panel">{PROJECTS.length} objetos</div>
              <div className="xp-statusbar-panel" style={{ flex:1, overflow:"hidden",
                                                             whiteSpace:"nowrap", textOverflow:"ellipsis" }}>
                {p.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
