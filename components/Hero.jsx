"use client";

const TECHS = [
  "Python","JavaScript","TypeScript","React","Next.js",
  "PostgreSQL","Kotlin","Linux","Git","Figma","Firebase","HTML/CSS"
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "60px",
      paddingBottom: "48px",
      position: "relative",
    }}>
      <img src="/images/fondo.gif" alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", opacity: 0.15, zIndex: 0, pointerEvents: "none"
      }} />

      <div style={{
        maxWidth: "860px", width: "100%", margin: "0 auto",
        padding: "0 12px", display: "flex", flexDirection: "column",
        gap: "14px", position: "relative", zIndex: 1,
      }}>
        {/* MAIN WINDOW */}
        <div>
          <div className="xp-titlebar">
            <img src="/images/estrella.png" alt="" style={{ width:"16px", height:"16px" }} />
            <span>FATIPLACE — Mi Portafolio Personal</span>
            <div className="xp-titlebar-buttons">
              <button className="xp-btn-min">_</button>
              <button className="xp-btn-max">□</button>
              <button className="xp-btn-close">✕</button>
            </div>
          </div>
          <div className="xp-window" style={{ padding: 0 }}>
            {/* menubar */}
            <div className="xp-menubar">
              {["Archivo","Ver","Favoritos","Herramientas","Ayuda"].map(m => (
                <button key={m} className="xp-menuitem">{m}</button>
              ))}
            </div>

            {/* body — stacks on mobile */}
            <div style={{
              padding: "14px",
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}>
              {/* LEFT: avatar + ID card */}
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "10px",
                flex: "0 0 auto", width: "100%", maxWidth: "200px",
                margin: "0 auto",
              }}>
                <img src="/images/logo.png" alt="FATIPLACE"
                     style={{ width:"100%", filter:"drop-shadow(2px 2px 0 rgba(0,0,0,0.3))" }} />

                <div style={{ position:"relative" }}>
                  <img src="/images/avatar.png" alt="Fatima Navarro"
                       className="animate-float"
                       style={{ width:"120px", height:"120px", objectFit:"cover",
                                 border:"2px inset #aca899",
                                 boxShadow:"3px 3px 6px rgba(0,0,0,0.3)",
                                 display:"block" }} />
                  <img src="/images/estrella.png" alt="" className="animate-spin-slow"
                       style={{ width:"20px", height:"20px", position:"absolute",
                                 top:"-8px", right:"-8px" }} />
                </div>

                {/* ID card */}
                <div style={{
                  background:"white", border:"1px solid #aca899",
                  padding:"5px 10px", width:"100%",
                  borderTop:"3px solid #0058c0", fontSize:"11px",
                  fontFamily:"Tahoma,Arial,sans-serif",
                }}>
                  <div style={{ fontWeight:"bold", color:"#0058c0", marginBottom:"2px" }}>Fatima Navarro</div>
                  <div style={{ color:"#555" }}>ID: 24044 · CS&IT · UVG</div>
                  <div style={{ color:"#555" }}>Guatemala 🇬🇹</div>
                </div>
              </div>

              {/* RIGHT: info */}
              <div style={{ flex:"1 1 220px", display:"flex", flexDirection:"column", gap:"10px" }}>
                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">Descripción</span>
                  <p style={{ fontSize:"11px", lineHeight:"1.7", color:"#1a1a1a" }}>
                    Desarrolladora y artista. Estudio Ciencias de la Computación en la UVG,
                    dibujo personajes, programo interfaces y customizo mi setup de
                    <strong style={{ color:"#0058c0" }}> Fedora + Hyprland</strong> con demasiado cariño.
                    Este es mi portafolio personal — mi pequeño rincón en internet ★
                  </p>
                </div>

                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">Tecnologías</span>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"4px" }}>
                    {TECHS.map(t => (
                      <span key={t} className="xp-tag">
                        <img src="/images/estrella.png" alt="" style={{ width:"10px", height:"10px" }} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
                  {[
                    { label:"GitHub",    href:"https://github.com/fatupopzz" },
                    { label:"LinkedIn",  href:"https://www.linkedin.com/in/fatimanav" },
                    { label:"Contacto",  href:"#contact" },
                    { label:"Proyectos", href:"#projects" },
                  ].map(btn => (
                    <a key={btn.label} href={btn.href} className="xp-button"
                       target={btn.href.startsWith("http") ? "_blank" : undefined}
                       rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      <img src="/images/estrella.png" alt="" style={{ width:"13px", height:"13px" }} />
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="xp-statusbar">
              <div className="xp-statusbar-panel">
                <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                Listo
              </div>
              <div className="xp-statusbar-panel">fatiplace.com</div>
              <div style={{ marginLeft:"auto" }}>
                <img src="/images/estrella.png" alt="" className="animate-spin-slow"
                     style={{ width:"13px", height:"13px" }} />
              </div>
            </div>
          </div>
        </div>
        {/* fantito deco — floating */}
      <img src="/images/fantito.png" alt=""
           className="animate-float"
           style={{ position:"absolute", bottom:"20px", right:"20px",
                     width:"52px", opacity:0.85, zIndex:1,
                     filter:"drop-shadow(1px 2px 2px rgba(0,0,0,0.3))",
                     pointerEvents:"none" }} />
      </div>
    </section>
  );
}
