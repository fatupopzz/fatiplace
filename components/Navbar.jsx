"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("es-GT", { hour:"2-digit", minute:"2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const LINKS = [
    { label:"inicio",     href:"#hero" },
    { label:"sobre mí",  href:"#about" },
    { label:"proyectos", href:"#projects" },
    { label:"contacto",  href:"#contact" },
  ];

  return (
    <>
      {/* ── TICKER ── */}
      <div className="xp-ticker">
        <span>
          ★ FATIPLACE.EXE — portafolio de fatima navarro — CS @ UVG — ilustración &amp; código — fedora/hyprland — last boot: 2026 — ★ running windows xp home edition ★ &nbsp;&nbsp;&nbsp;
        </span>
      </div>

      {/* ── TASKBAR ── */}
      <div className="xp-taskbar">
        <button className="xp-start-btn" onClick={() => setOpen(!open)}>
          <img src="/images/estrella.png" alt="" style={{ width:"18px", height:"18px", objectFit:"contain" }} />
          start
        </button>

        {/* separator */}
        <div style={{ width:"2px", height:"20px", background:"rgba(255,255,255,0.2)",
                       borderLeft:"1px solid rgba(0,0,0,0.3)", margin:"0 4px" }} />

        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="xp-task-btn">
            <img src="/images/estrella.png" alt="" style={{ width:"14px", height:"14px", objectFit:"contain" }} />
            {l.label}
          </a>
        ))}

        <div className="xp-tray">
          <img src="/images/estrella.png" alt="" style={{ width:"14px", height:"14px", objectFit:"contain" }} />
          <span>{time}</span>
        </div>
      </div>

      {/* ── START MENU ── */}
      {open && (
        <>
          {/* backdrop */}
          <div onClick={() => setOpen(false)}
               style={{ position:"fixed", inset:0, zIndex:9997 }} />
          <div style={{
            position:"fixed", bottom:"30px", left:0, zIndex:9998,
            width:"280px",
            background:"linear-gradient(to bottom, #1a5abf, #2c7ad4)",
            border:"1px solid #0a3090",
            boxShadow:"4px 0 16px rgba(0,0,0,0.6), 0 -4px 16px rgba(0,0,0,0.4)",
            borderRadius:"0 8px 0 0",
          }}>
            {/* user header */}
            <div style={{ background:"linear-gradient(to right, #2060c8, #1a8adf)",
                           padding:"10px 12px", display:"flex", alignItems:"center",
                           gap:"10px", borderRadius:"0 8px 0 0", borderBottom:"1px solid rgba(0,0,0,0.2)" }}>
              <img src="/images/avatar2.png" alt="fati"
                   style={{ width:"48px", height:"48px", objectFit:"cover",
                             border:"2px solid rgba(255,255,255,0.6)", borderRadius:"2px" }} />
              <div>
                <div style={{ color:"white", fontWeight:"bold", fontSize:"13px",
                               textShadow:"1px 1px 2px rgba(0,0,0,0.5)" }}>
                  Fatima Navarro
                </div>
                <div style={{ color:"rgba(255,255,255,0.7)", fontSize:"10px" }}>
                  ID: 24044 · UVG
                </div>
              </div>
            </div>

            {/* items */}
            <div style={{ display:"flex" }}>
              <div style={{ flex:1, background:"white", paddingTop:"4px", paddingBottom:"6px" }}>
                {[
                  { label:"Sobre mí",   href:"#about" },
                  { label:"Proyectos",  href:"#projects" },
                  { label:"Contacto",   href:"#contact" },
                  { label:"GitHub ↗",   href:"https://github.com/fatupopzz", ext:true },
                ].map((item) => (
                  <a key={item.label} href={item.href}
                     onClick={() => setOpen(false)}
                     target={item.ext ? "_blank" : undefined}
                     rel={item.ext ? "noopener noreferrer" : undefined}
                     style={{ display:"flex", alignItems:"center", gap:"8px",
                               padding:"5px 12px", textDecoration:"none",
                               color:"#1a1a1a", fontSize:"11px",
                               fontFamily:"Tahoma, Arial, sans-serif" }}
                     onMouseEnter={e => { e.currentTarget.style.background="#3169c6"; e.currentTarget.style.color="white"; }}
                     onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#1a1a1a"; }}>
                    <img src="/images/estrella.png" alt="" style={{ width:"20px", height:"20px", objectFit:"contain" }} />
                    {item.label}
                  </a>
                ))}
                <div style={{ height:"1px", background:"#ccc", margin:"4px 0" }} />
                <a href="mailto:nav24044@uvg.edu.gt"
                   style={{ display:"flex", alignItems:"center", gap:"8px",
                             padding:"5px 12px", textDecoration:"none",
                             color:"#1a1a1a", fontSize:"11px",
                             fontFamily:"Tahoma, Arial, sans-serif" }}
                   onMouseEnter={e => { e.currentTarget.style.background="#3169c6"; e.currentTarget.style.color="white"; }}
                   onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#1a1a1a"; }}>
                  <img src="/images/estrella.png" alt="" style={{ width:"20px", height:"20px", objectFit:"contain" }} />
                  Email
                </a>
              </div>

              {/* sidebar */}
              <div style={{ width:"76px", background:"linear-gradient(to bottom, #1a5abf, #2060c8)",
                             display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ writingMode:"vertical-rl", transform:"rotate(180deg)",
                               color:"rgba(255,255,255,0.6)", fontSize:"15px",
                               fontFamily:"Tahoma, Arial, sans-serif",
                               fontWeight:"bold", fontStyle:"italic",
                               letterSpacing:"0.05em" }}>
                  fatiplace ✦
                </div>
              </div>
            </div>

            {/* bottom bar */}
            <div style={{ background:"linear-gradient(to bottom, #1040a0, #0a3080)",
                           padding:"5px 10px", display:"flex",
                           justifyContent:"flex-end", gap:"4px",
                           borderTop:"1px solid rgba(255,255,255,0.15)" }}>
              <button className="xp-button" onClick={() => setOpen(false)}
                      style={{ fontSize:"11px" }}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
