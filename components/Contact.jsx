"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(1);
    setTimeout(() => setStep(2), 600);
    setTimeout(() => setStep(3), 1200);
    setTimeout(() => {
      setSent(true);
      setStep(0);
    }, 1800);
  };

  return (
    <section id="contact" style={{ padding: "24px 0 80px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
        <div className="term-window">
          <div className="term-header">
            <div className="term-dots">
              <div className="term-dot term-dot--red" />
              <div className="term-dot term-dot--yellow" />
              <div className="term-dot term-dot--green" />
            </div>
            <span className="term-title">mail - fati@archlinux</span>
          </div>

          <div className="term-body">
            <div style={{ marginBottom: "16px" }}>
              <span style={{ color: "#00cccc" }}>fati@archlinux</span>
              <span style={{ color: "#555" }}>:</span>
              <span style={{ color: "#3399ff" }}>~</span>
              <span style={{ color: "#555" }}> $ </span>
              <span className="glow">./contact.sh --interactive</span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}>
              {/* Left: contact info */}
              <div>
                <div style={{ color: "#cccc00", fontSize: "12px", marginBottom: "12px" }}>
                  # Dónde encontrarme
                </div>

                <div style={{
                  color: "#cccccc", fontSize: "13px", lineHeight: "1.8",
                  marginBottom: "16px",
                }}>
                  <p>¿Tenés un proyecto, idea o simplemente querés hablar de código o arte?</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  {[
                    { label: "github.com/fatupopzz", href: "https://github.com/fatupopzz", prefix: "git" },
                    { label: "nav24044@uvg.edu.gt", href: "mailto:nav24044@uvg.edu.gt", prefix: "mail" },
                    { label: "linkedin/fatimanav", href: "https://www.linkedin.com/in/fatimanav", prefix: "web" },
                  ].map((l) => (
                    <a key={l.label} href={l.href} className="term-link"
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: "13px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#555" }}>[{l.prefix}]</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>

                <hr className="term-divider" />

                <div style={{ color: "#cccc00", fontSize: "12px", marginBottom: "10px" }}>
                  # System info
                </div>
                {[
                  { k: "Response time", v: "< 24 hrs" },
                  { k: "Languages", v: "ES / EN" },
                  { k: "Timezone", v: "GMT-6" },
                  { k: "Location", v: "Guatemala" },
                ].map((row) => (
                  <div key={row.k} style={{
                    display: "flex", marginBottom: "4px", fontSize: "13px",
                  }}>
                    <span style={{ color: "#33ff33", width: "140px", flexShrink: 0 }}>{row.k}:</span>
                    <span style={{ color: "#cccccc" }}>{row.v}</span>
                  </div>
                ))}
              </div>

              {/* Right: form */}
              <div>
                <div style={{ color: "#cccc00", fontSize: "12px", marginBottom: "12px" }}>
                  # Nuevo mensaje
                </div>

                {sent ? (
                  <div style={{ padding: "24px 0", textAlign: "center" }}>
                    <div style={{
                      color: "#33ff33", fontSize: "14px",
                      fontWeight: "bold", marginBottom: "8px",
                    }} className="glow-bright">
                      Message sent successfully.
                    </div>
                    <div style={{ color: "#555", fontSize: "13px" }}>
                      <span style={{ color: "#33ff33" }}>exit code: 0</span> // te respondo pronto
                    </div>
                  </div>
                ) : step > 0 ? (
                  <div style={{ padding: "16px 0", fontSize: "13px" }}>
                    <div style={{ color: "#cccccc", marginBottom: "4px" }}>
                      {step >= 1 && <div><span style={{ color: "#33ff33" }}>[OK]</span> Validating fields...</div>}
                      {step >= 2 && <div><span style={{ color: "#33ff33" }}>[OK]</span> Encrypting message...</div>}
                      {step >= 3 && <div><span style={{ color: "#cccc00" }}>[..]</span> Sending via SMTP...</div>}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{
                    display: "flex", flexDirection: "column", gap: "14px",
                  }}>
                    {[
                      { name: "name", label: "name", type: "text", ph: "tu nombre" },
                      { name: "email", label: "email", type: "email", ph: "tu@email.com" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label style={{ color: "#555", fontSize: "12px", display: "block", marginBottom: "4px" }}>
                          {f.label}:
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name]}
                          onChange={handleChange}
                          required
                          placeholder={f.ph}
                          className="term-input"
                        />
                      </div>
                    ))}
                    <div>
                      <label style={{ color: "#555", fontSize: "12px", display: "block", marginBottom: "4px" }}>
                        message:
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Hola Fátima, quería..."
                        className="term-textarea"
                      />
                    </div>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                      <button type="submit" className="term-btn">
                        <span style={{ color: "#555" }}>$</span> send
                      </button>
                      <button type="button" className="term-btn"
                        style={{ color: "#ff3333", borderColor: "rgba(255,51,51,0.2)" }}
                        onClick={() => setForm({ name: "", email: "", message: "" })}>
                        <span style={{ color: "#555" }}>$</span> clear
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <hr className="term-divider" style={{ marginTop: "20px" }} />

            {/* Footer */}
            <div style={{
              display: "flex", flexWrap: "wrap",
              justifyContent: "space-between", alignItems: "center",
              gap: "8px", fontSize: "11px", color: "#555",
            }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["MADE WITH HTML", "LINUX INSIDE", "NO COOKIES", "UVG 2026", "FATIPLACE v2.0"].map((b) => (
                  <span key={b} style={{
                    padding: "2px 8px",
                    border: "1px solid rgba(51,255,51,0.1)",
                    borderRadius: "2px",
                    fontSize: "9px",
                    letterSpacing: "0.05em",
                  }}>
                    {b}
                  </span>
                ))}
              </div>
              <span>FÁTIMA NAVARRO 2026 // fatiplace.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
