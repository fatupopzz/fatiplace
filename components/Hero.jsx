"use client";

const TECHS = [
  "Python","JavaScript","TypeScript","React","Next.js",
  "PostgreSQL","Kotlin","Linux","Git","Figma","Firebase","HTML/CSS"
];

export default function Hero() {
  return (
    <section id="hero" className="xp-section"
             style={{ minHeight:"100vh", display:"flex", alignItems:"center",
                       justifyContent:"center", paddingTop:"48px", paddingBottom:"48px",
                       position:"relative" }}>

      <img src="/images/fondo.gif" alt="" style={{
        position:"absolute", inset:0, width:"100%", height:"100%",
        objectFit:"cover", opacity:0.15, zIndex:0
      }} />

      <div style={{ maxWidth:"900px", width:"100%", margin:"0 auto", padding:"0 16px",
                     display:"flex", flexDirection:"column", gap:"16px",
                     position:"relative", zIndex:1 }}>

        {/* ── MAIN WINDOW ── */}
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

          <div className="xp-window" style={{ padding:0 }}>
            {/* menubar */}
            <div style={{ background:"#ece9d8", borderBottom:"1px solid #aca899",
                           padding:"2px 8px", display:"flex", gap:"2px" }}>
              {["Archivo","Ver","Favoritos","Herramientas","Ayuda"].map(m => (
                <button key={m}
                        style={{ background:"transparent", border:"none",
                                  font:"11px Tahoma,Arial,sans-serif",
                                  cursor:"pointer", padding:"2px 6px", borderRadius:"2px" }}
                        onMouseEnter={e => { e.currentTarget.style.background="#3169c6"; e.currentTarget.style.color="white"; }}
                        onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=""; }}>
                  {m}
                </button>
              ))}
            </div>

            {/* body */}
            <div style={{ padding:"16px", display:"flex", gap:"20px", flexWrap:"wrap" }}>

              {/* ── LEFT: avatar ilustrado + ID card ── */}
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center",
                             gap:"12px", minWidth:"200px", flex:"0 0 auto" }}>

                <img src="/images/logo.png" alt="FATIPLACE"
                     style={{ width:"100%", maxWidth:"260px",
                               filter:"drop-shadow(2px 2px 0 rgba(0,0,0,0.3))" }} />

                {/* avatar ilustrado solo */}
                <div style={{ position:"relative" }}>
                  <img src="/images/avatar2.png" alt="Fatima Navarro"
                       className="animate-float"
                       style={{ width:"130px", height:"130px", objectFit:"cover",
                                 border:"2px inset #aca899",
                                 boxShadow:"3px 3px 6px rgba(0,0,0,0.3)" }} />
                  {/* estrella giratoria de decoración */}
                  <img src="/images/estrella.png" alt=""
                       className="animate-spin-slow"
                       style={{ width:"24px", height:"24px", position:"absolute",
                                 top:"-10px", right:"-10px",
                                 filter:"drop-shadow(1px 1px 2px rgba(0,0,0,0.4))" }} />
                </div>

                {/* fantito debajo del avatar */}
                <img src="/images/fantito.png" alt=""
                     className="animate-float-slow"
                     style={{ width:"55px", objectFit:"contain",
                               filter:"drop-shadow(1px 1px 2px rgba(0,0,0,0.2))",
                               marginTop:"-4px" }} />

                {/* ID card */}
                <div style={{ background:"white", border:"1px solid #aca899",
                               padding:"5px 10px", width:"100%",
                               borderTop:"3px solid #0058c0", fontSize:"11px",
                               fontFamily:"Tahoma,Arial,sans-serif" }}>
                  <div style={{ fontWeight:"bold", color:"#0058c0", marginBottom:"2px" }}>
                    Fatima Navarro
                  </div>
                  <div style={{ color:"#555" }}>ID: 24044 · CS&IT · UVG</div>
                  <div style={{ color:"#555" }}>Guatemala 🇬🇹</div>
                </div>
              </div>

              {/* ── RIGHT: info ── */}
              <div style={{ flex:1, minWidth:"240px", display:"flex", flexDirection:"column", gap:"10px" }}>

                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">Descripción</span>
                  <p style={{ fontSize:"11px", lineHeight:"1.6", color:"#1a1a1a" }}>
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
                      <img src="/images/estrella.png" alt="" style={{ width:"14px", height:"14px" }} />
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* statusbar */}
            <div className="xp-statusbar">
              <div className="xp-statusbar-panel">
                <img src="/images/estrella.png" alt=""
                     style={{ width:"12px", height:"12px", verticalAlign:"middle", marginRight:"3px" }} />
                Listo
              </div>
              <div className="xp-statusbar-panel">fatiplace.com</div>
              <div style={{ marginLeft:"auto" }}>
                <img src="/images/estrella.png" alt=""
                     className="animate-spin-slow"
                     style={{ width:"14px", height:"14px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* desktop icons */}
        <div style={{ display:"flex", gap:"12px", flexWrap:"wrap", justifyContent:"flex-end" }}>
          {[
            { label:"Mis Dibujos", href:"#projects" },
            { label:"Sobre mí",    href:"#about" },
            { label:"Contactar",   href:"#contact" },
          ].map(d => (
            <a key={d.label} href={d.href}
               style={{ display:"flex", flexDirection:"column", alignItems:"center",
                         gap:"4px", textDecoration:"none", color:"white",
                         width:"64px", textAlign:"center", padding:"6px 4px", borderRadius:"3px" }}
               onMouseEnter={e => e.currentTarget.style.background="rgba(49,105,198,0.5)"}
               onMouseLeave={e => e.currentTarget.style.background="transparent"}>
              <img src="/images/estrella.png" alt=""
                   style={{ width:"36px", height:"36px", objectFit:"contain",
                             filter:"drop-shadow(1px 1px 2px rgba(0,0,0,0.5))" }} />
              <span style={{ fontSize:"11px", textShadow:"1px 1px 2px rgba(0,0,0,0.8)",
                              fontFamily:"Tahoma,Arial,sans-serif" }}>
                {d.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
