"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setShowDialog(true); };
  const handleConfirm = () => { setShowDialog(false); setSent(true); };

  return (
    <section id="contact" className="xp-section" style={{ paddingBottom:"64px" }}>
      <div style={{ maxWidth:"900px", margin:"0 auto", padding:"0 16px",
                     display:"flex", flexDirection:"column", gap:"16px" }}>

        <div>
          <div className="xp-titlebar">
            <img src="/images/estrella.png" alt="" style={{ width:"16px", height:"16px" }} />
            <span>Contacto — Enviar mensaje</span>
            <div className="xp-titlebar-buttons">
              <button className="xp-btn-min">_</button>
              <button className="xp-btn-max">□</button>
              <button className="xp-btn-close">✕</button>
            </div>
          </div>

          <div className="xp-window">
            <div style={{ padding:"12px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>

              {/* LEFT: info + chibi decoración */}
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle" }} />
                    {" "}Dónde encontrarme
                  </span>
                  <p style={{ fontSize:"11px", lineHeight:"1.6", color:"#333", marginBottom:"10px" }}>
                    ¿Tenés un proyecto, idea o simplemente querés hablar de código o arte?
                    Mandame un mensaje o encontrame en mis redes.
                  </p>
                  <div style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
                    {[
                      { label:"github.com/fatupopzz", href:"https://github.com/fatupopzz" },
                      { label:"nav24044@uvg.edu.gt",  href:"mailto:nav24044@uvg.edu.gt" },
                      { label:"LinkedIn — fatimanav", href:"https://www.linkedin.com/in/fatimanav" },
                    ].map(l => (
                      <a key={l.label} href={l.href} className="xp-button"
                         style={{ justifyContent:"flex-start" }}
                         target={l.href.startsWith("http") ? "_blank" : undefined}
                         rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        <img src="/images/estrella.png" alt="" style={{ width:"14px", height:"14px" }} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* system info */}
                <div className="xp-groupbox">
                  <span className="xp-groupbox-label">Información del sistema</span>
                  <table style={{ width:"100%", fontSize:"11px" }}>
                    <tbody>
                      {[
                        { k:"Tiempo de respuesta", v:"< 24 hrs" },
                        { k:"Idiomas",             v:"ES / EN" },
                        { k:"Zona horaria",        v:"GMT-6" },
                        { k:"Ubicación",           v:"Guatemala" },
                      ].map(row => (
                        <tr key={row.k} style={{ borderBottom:"1px solid #d4d0c8" }}>
                          <td style={{ padding:"3px 4px", color:"#555" }}>{row.k}</td>
                          <td style={{ padding:"3px 4px", fontWeight:"bold", color:"#0058c0" }}>{row.v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ── chibi como decoración ── */}
                <div style={{ display:"flex", alignItems:"flex-end", gap:"8px",
                               padding:"6px 8px",
                               background:"white", border:"1px solid #aca899",
                               borderRadius:"2px" }}>
                  <img src="/images/avatar.png" alt=""
                       className="animate-float"
                       style={{ width:"70px", height:"70px", objectFit:"cover",
                                 border:"1px inset #aca899",
                                 boxShadow:"2px 2px 4px rgba(0,0,0,0.2)",
                                 flexShrink:0 }} />
                  {/* speech bubble */}
                  <div style={{ position:"relative", background:"#fffde7",
                                 border:"1px solid #aca899", borderRadius:"4px",
                                 padding:"5px 8px", fontSize:"11px",
                                 fontFamily:"Tahoma,Arial,sans-serif",
                                 color:"#333", lineHeight:"1.5", flex:1 }}>
                    {/* bubble tail */}
                    <div style={{ position:"absolute", left:"-7px", top:"50%",
                                   transform:"translateY(-50%)",
                                   width:0, height:0,
                                   borderTop:"6px solid transparent",
                                   borderBottom:"6px solid transparent",
                                   borderRight:"7px solid #aca899" }} />
                    <div style={{ position:"absolute", left:"-5px", top:"50%",
                                   transform:"translateY(-50%)",
                                   width:0, height:0,
                                   borderTop:"5px solid transparent",
                                   borderBottom:"5px solid transparent",
                                   borderRight:"6px solid #fffde7" }} />
                    no muerdo (casi nunca) — mandame un mensaje!
                  </div>
                </div>
              </div>

              {/* RIGHT: form */}
              <div>
                <div className="xp-groupbox" style={{ height:"100%" }}>
                  <span className="xp-groupbox-label">
                    <img src="/images/estrella.png" alt="" style={{ width:"12px", height:"12px", verticalAlign:"middle" }} />
                    {" "}Nuevo mensaje
                  </span>

                  {sent ? (
                    <div style={{ textAlign:"center", padding:"30px 0" }}>
                      <img src="/images/estrella.png" alt="" className="animate-spin-slow"
                           style={{ width:"48px", height:"48px", marginBottom:"10px" }} />
                      <p style={{ fontSize:"13px", fontWeight:"bold", color:"#0058c0" }}>
                        Mensaje enviado correctamente
                      </p>
                      <p style={{ fontSize:"11px", color:"#555", marginTop:"4px" }}>
                        Te respondo pronto. ★
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                      {[
                        { name:"name",  label:"Nombre:", type:"text",  ph:"Tu nombre..." },
                        { name:"email", label:"Email:",  type:"email", ph:"tu@email.com" },
                      ].map(f => (
                        <div key={f.name} style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                          <label style={{ fontSize:"11px", width:"56px", flexShrink:0 }}>{f.label}</label>
                          <input type={f.type} name={f.name} value={form[f.name]}
                                 onChange={handleChange} required placeholder={f.ph}
                                 className="xp-input" />
                        </div>
                      ))}
                      <div style={{ display:"flex", alignItems:"flex-start", gap:"6px" }}>
                        <label style={{ fontSize:"11px", width:"56px", flexShrink:0, marginTop:"2px" }}>Mensaje:</label>
                        <textarea name="message" value={form.message} onChange={handleChange}
                                  required rows={5} placeholder="Hola Fatima, quería..."
                                  className="xp-input" style={{ resize:"vertical" }} />
                      </div>
                      <div style={{ display:"flex", gap:"6px", justifyContent:"flex-end" }}>
                        <button type="submit" className="xp-button">
                          <img src="/images/estrella.png" alt="" style={{ width:"14px", height:"14px" }} />
                          Enviar
                        </button>
                        <button type="button" className="xp-button"
                                onClick={() => setForm({ name:"", email:"", message:"" })}>
                          Cancelar
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* footer banners */}
            <div style={{ borderTop:"1px solid #aca899", padding:"8px 12px",
                           background:"#d4d0c8", display:"flex", flexWrap:"wrap",
                           gap:"4px", alignItems:"center" }}>
              {[
                { t:"MADE WITH\nHTML", bg:"#dce8ff", fg:"#0058c0" },
                { t:"LINUX\nINSIDE",   bg:"#e8ffe0", fg:"#1a5c00" },
                { t:"NO\nCOOKIES",    bg:"#fff8e0", fg:"#5c3800" },
                { t:"UVG\n2026",       bg:"#ffe0e0", fg:"#5c0000" },
                { t:"FATIPLACE\nv1.0", bg:"#f0e0ff", fg:"#3a0058" },
              ].map(b => (
                <div key={b.t} style={{
                  width:"60px", height:"22px", background:b.bg, color:b.fg,
                  border:"1px solid currentColor", fontSize:"8px",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  textAlign:"center", lineHeight:"1.1", whiteSpace:"pre",
                  fontFamily:"Tahoma,Arial,sans-serif"
                }}>
                  {b.t}
                </div>
              ))}
              <div style={{ marginLeft:"auto", fontSize:"11px", color:"#444" }}>
                FATIMA NAVARRO © 2026 ✦ fatiplace.com
              </div>
            </div>
          </div>
        </div>

        {/* XP confirmation dialog */}
        {showDialog && (
          <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.4)",
                         display:"flex", alignItems:"center", justifyContent:"center", zIndex:300 }}>
            <div style={{ width:"320px" }}>
              <div className="xp-titlebar">
                <img src="/images/estrella.png" alt="" style={{ width:"14px", height:"14px" }} />
                <span>Confirmar envío</span>
                <div className="xp-titlebar-buttons">
                  <button className="xp-btn-close" onClick={() => setShowDialog(false)}>✕</button>
                </div>
              </div>
              <div className="xp-window" style={{ padding:"16px" }}>
                <div style={{ display:"flex", gap:"12px", alignItems:"flex-start", marginBottom:"16px" }}>
                  <img src="/images/estrella.png" alt="" style={{ width:"32px", height:"32px" }} />
                  <div>
                    <p style={{ fontSize:"11px", fontWeight:"bold", marginBottom:"4px" }}>
                      ¿Confirmar envío del mensaje?
                    </p>
                    <p style={{ fontSize:"11px", color:"#555" }}>
                      Tu mensaje será enviado a Fatima Navarro. Este proceso no se puede deshacer.
                    </p>
                  </div>
                </div>
                <div style={{ display:"flex", gap:"6px", justifyContent:"flex-end" }}>
                  <button className="xp-button" onClick={handleConfirm}>Aceptar</button>
                  <button className="xp-button" onClick={() => setShowDialog(false)}>Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
