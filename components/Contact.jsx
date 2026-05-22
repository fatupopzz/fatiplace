"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#120e2a" }}>
      {/* Fondo */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full blur-[120px]" style={{ backgroundColor: "#f7379715" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-[10px]" style={{ color: "#f73797" }}>04</span>
          <div className="h-px flex-1" style={{ backgroundColor: "#f7379740" }} />
          <h2 className="font-display text-lg sm:text-xl text-white text-stroke">CONTACTO</h2>
          <div className="h-px flex-1" style={{ backgroundColor: "#f7379740" }} />
          <span className="text-xl animate-star-twinkle" style={{ color: "#d1f9f6" }}>✦</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: info */}
          <div>
            <div className="rounded-2xl border-4 border-black p-6 shadow-[6px_6px_0px_black] mb-6" style={{ backgroundColor: "#1a1035" }}>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 border-2" style={{ backgroundColor: "#f7379720", borderColor: "#f73797" }}>
                <span className="font-display text-[8px]" style={{ color: "#f73797" }}>INSERT COIN</span>
              </div>

              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#d1f9f6aa" }}>
                ¿Tenés un proyecto, idea o simplemente querés hablar de código?
                <span className="font-bold" style={{ color: "#f73797" }}> Mandame un mensaje</span> o encontrame en mis redes.
              </p>

              {/* Links */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/fatupopzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body font-bold text-sm px-4 py-3 rounded-xl border-4 border-black shadow-[3px_3px_0px_black] hover:shadow-[5px_5px_0px_black] hover:-translate-y-1 transition-all duration-200"
                  style={{ backgroundColor: "#f73797", color: "white" }}
                >
                  <span className="text-lg">⬡</span>
                  github.com/fatupopzz
                </a>

                <a
                  href="mailto:nav24044@uvg.edu.gt"
                  className="flex items-center gap-3 font-body font-bold text-sm px-4 py-3 rounded-xl border-4 border-black shadow-[3px_3px_0px_black] hover:shadow-[5px_5px_0px_black] hover:-translate-y-1 transition-all duration-200"
                  style={{ backgroundColor: "#0d97b6", color: "white" }}
                >
                  <span className="text-lg">✉</span>
                  nav24044@uvg.edu.gt
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body font-bold text-sm px-4 py-3 rounded-xl border-4 border-black shadow-[3px_3px_0px_black] hover:shadow-[5px_5px_0px_black] hover:-translate-y-1 transition-all duration-200"
                  style={{ backgroundColor: "#568c40", color: "white" }}
                >
                  <span className="text-lg">◈</span>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Fun stat */}
            <div className="rounded-xl border-4 border-black p-4 shadow-[4px_4px_0px_black] text-center" style={{ backgroundColor: "#231848" }}>
              <p className="font-display text-[8px] mb-1" style={{ color: "#d1f9f660" }}>TIEMPO DE RESPUESTA</p>
              <p className="font-display text-base" style={{ color: "#f73797", textShadow: "0 0 10px #f73797" }}>{"< 24hrs"}</p>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="rounded-2xl border-4 border-black shadow-[6px_6px_0px_black]" style={{ backgroundColor: "#1a1035" }}>
            {/* Arcade header bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b-4 border-black" style={{ backgroundColor: "#231848" }}>
              <span className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black" />
              <span className="w-3 h-3 rounded-full border-2 border-black" style={{ backgroundColor: "#568c40" }} />
              <span className="font-display text-[8px] ml-2" style={{ color: "#d1f9f660" }}>FORM.EXE</span>
            </div>

            <div className="p-6">
              {sent ? (
                <div className="text-center py-8">
                  <p className="text-4xl mb-4">🎮</p>
                  <p className="font-display text-[10px] mb-2" style={{ color: "#f73797", textShadow: "0 0 10px #f73797" }}>
                    MENSAJE ENVIADO
                  </p>
                  <p className="font-body text-sm" style={{ color: "#d1f9f680" }}>
                    Te respondo pronto. ✦
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="font-display text-[8px] block mb-2" style={{ color: "#d1f9f680" }}>
                      ▶ NOMBRE
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre..."
                      className="w-full rounded-xl border-4 border-black px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                      style={{
                        backgroundColor: "#231848",
                        color: "#d1f9f6",
                        caretColor: "#f73797",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-display text-[8px] block mb-2" style={{ color: "#d1f9f680" }}>
                      ▶ EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full rounded-xl border-4 border-black px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                      style={{
                        backgroundColor: "#231848",
                        color: "#d1f9f6",
                        caretColor: "#f73797",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-display text-[8px] block mb-2" style={{ color: "#d1f9f680" }}>
                      ▶ MENSAJE
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Hola Fatima, quería..."
                      className="w-full rounded-xl border-4 border-black px-4 py-3 font-body text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        backgroundColor: "#231848",
                        color: "#d1f9f6",
                        caretColor: "#f73797",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-display text-[10px] text-white py-3 border-4 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 transition-all duration-200 rounded-xl"
                    style={{ backgroundColor: "#f73797" }}
                  >
                    ✦ ENVIAR MENSAJE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t-2" style={{ borderColor: "#f7379730" }}>
          <p className="font-display text-[8px] tracking-widest" style={{ color: "#d1f9f640" }}>
            FATIMA NAVARRO © 2026 ✦ UVG ✦ fatiplace.com
          </p>
        </div>
      </div>
    </section>
  );
}
