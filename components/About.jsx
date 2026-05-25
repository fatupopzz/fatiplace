"use client";

const LEARNED = [
  { label:"HTML & CSS",      desc:"Estructura y estilos desde cero" },
  { label:"JavaScript",      desc:"Lógica, DOM y APIs" },
  { label:"React & Next.js", desc:"Componentes, rutas y App Router" },
  { label:"Node.js",         desc:"Backend y servidores con Express" },
  { label:"Deployment",      desc:"Nginx, Vercel y hosting real" },
];
const INTERESTS = [
  "Frontend & UI/UX","Linux & Sistemas","Mobile Dev",
  "Bases de Datos","Open Source","Pixel Art & Diseño",
];
const LEARNING = [
  "Three.js & animaciones 3D",
  "Kotlin avanzado / Jetpack Compose",
  "DevOps & CI/CD pipelines",
  "Diseño de sistemas distribuidos",
];

export default function About() {
  return (
    <section id="about" className="xp-section" style={{ paddingBottom:"32px" }}>
      <div style={{ maxWidth:"900px", margin:"0 auto", padding:"0 16px" }}>

        {/* window */}
        <div>
          <div className="xp-titlebar">
            <img src="/images/estrella.png" alt="" style={{ width:"16px", height:"16px" }} />
            <span>Sobre mí — Fatima Navarro — Propiedades</span>
            <div className="xp-titlebar-buttons">
              <button className="xp-btn-min">_</button>
              <button className="xp-btn-max">□</button>
              <button className="xp-btn-close">✕</button>
            </div>
          </div>

          <div className="xp-window">
            {/* tab bar */}
            <div style={{ display:"flex", gap:0, borderBottom:"1px solid #aca899",
                           background:"#d4d0c8", paddingTop:"4px" }}>
              {["General","Habilidades","Intereses","Siguiente nivel"].map((tab, i) => (
                <div key={tab} style={{
                  padding:"3px 14px 3px",
                  fontFamily:"Tahoma,Arial,sans-serif", fontSize:"11px",
                  background: i===0 ? "#ece9d8" : "linear-gradient(to bottom,#d8d4cc,#c8c4bc)",
                  border:"1px solid #aca899",
                  borderBottom: i===0 ? "1px solid #ece9d8" : "1px solid #aca899",
                  marginBottom: i===0 ? "-1px" : "0",
                  cursor:"default",
                  fontWeight: i===0 ? "bold" : "normal",
                }}>
                  {tab}
                </div>
              ))}
            </div>

            <div style={{ padding:"12px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>

              {/* col 1 */}
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle", marginRight:"3px" }} />
                    Player Info
                  </span>
                  <p style={{ fontSize:"11px", lineHeight:"1.6" }}>
                    Soy <strong>Fatima Navarro</strong>, estudiante de Ciencias de la Computación en la
                    Universidad del Valle de Guatemala. Me apasiona construir interfaces que combinen
                    buen diseño con código limpio. Cuando no estoy programando, estoy customizando mi
                    setup de <strong>Fedora + Hyprland</strong> o jugando en mi Switch OLED. También desarrollo
                    en Android con Kotlin, trabajo con PostgreSQL y disfruto el proceso completo desde Figma hasta el deploy.
                  </p>
                </div>

                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle", marginRight:"3px" }} />
                    En este curso aprendí
                  </span>
                  <div style={{ display:"flex", flexDirection:"column", gap:"4px" }}>
                    {LEARNED.map(item => (
                      <div key={item.label} style={{ display:"flex", alignItems:"flex-start", gap:"6px",
                                                      fontSize:"11px", borderBottom:"1px solid #d4d0c8",
                                                      paddingBottom:"3px" }}>
                        <img src="/images/estrella.png" alt="" style={{ width:"14px", height:"14px", flexShrink:0, marginTop:"1px" }} />
                        <div>
                          <div style={{ fontWeight:"bold" }}>{item.label}</div>
                          <div style={{ color:"#555" }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* col 2 */}
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle", marginRight:"3px" }} />
                    Intereses
                  </span>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"4px" }}>
                    {INTERESTS.map(i => (
                      <span key={i} className="xp-tag">
                        <img src="/images/estrella.png" alt="" style={{ width:"10px", height:"10px" }} />
                        {i}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle", marginRight:"3px" }} />
                    Next level — quiero aprender
                  </span>
                  {LEARNING.map(l => (
                    <div key={l} style={{ display:"flex", gap:"5px", alignItems:"center",
                                           fontSize:"11px", padding:"2px 0", borderBottom:"1px dotted #ccc" }}>
                      <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px" }} />
                      {l}
                    </div>
                  ))}
                </div>

                {/* stats as XP properties */}
                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">Estadísticas del sistema</span>
                  <table style={{ width:"100%", fontSize:"11px", borderCollapse:"collapse" }}>
                    <tbody>
                      {[
                        { k:"Años codeando", v:"2+" },
                        { k:"Proyectos completados", v:"10+" },
                        { k:"Commits en Git", v:"∞" },
                        { k:"Café consumido", v:"9001 tazas" },
                      ].map(row => (
                        <tr key={row.k} style={{ borderBottom:"1px solid #d4d0c8" }}>
                          <td style={{ padding:"2px 4px", color:"#555", width:"60%" }}>{row.k}</td>
                          <td style={{ padding:"2px 4px", fontWeight:"bold", color:"#0058c0" }}>{row.v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="xp-statusbar">
              <div className="xp-statusbar-panel">
                <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle", marginRight:"3px" }} />
                2 columnas, 4 secciones
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
