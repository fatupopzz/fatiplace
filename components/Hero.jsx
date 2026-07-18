"use client";
import { useState, useEffect } from "react";

const TECHS = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "PostgreSQL", "Kotlin", "Linux", "Git", "Figma", "Firebase", "HTML/CSS",
];

const BOOT_LINES = [
  { text: "[    0.000000] Linux version 6.12.1-arch1 (fati@archlinux)", delay: 0 },
  { text: "[    0.000001] Command line: BOOT_IMAGE=/vmlinuz-linux", delay: 100 },
  { text: "[    0.234521] ACPI: RSDP 0x00000000000F0490 000024", delay: 200 },
  { text: "[    0.412003] CPU: AMD Ryzen 7 5700U (16 cores)", delay: 300 },
  { text: "[    0.523100] Memory: 16384MB available", delay: 400 },
  { text: "[    0.634200] Loading portfolio modules...", delay: 500 },
  { text: "[    0.745300] Mounting /home/fati/portfolio...", delay: 650 },
  { text: "[    0.856400] Starting Hyprland compositor...", delay: 800 },
  { text: "[    0.967500] Network: Connected (Guatemala)", delay: 950 },
  { text: "[    1.000000] System ready.", delay: 1100 },
  { text: "", delay: 1200 },
];

const ASCII_ART = `
 ███████╗ █████╗ ████████╗██╗██████╗ ██╗      █████╗  ██████╗███████╗
 ██╔════╝██╔══██╗╚══██╔══╝██║██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
 █████╗  ███████║   ██║   ██║██████╔╝██║     ███████║██║     █████╗
 ██╔══╝  ██╔══██║   ██║   ██║██╔═══╝ ██║     ██╔══██║██║     ██╔══╝
 ██║     ██║  ██║   ██║   ██║██║     ███████╗██║  ██║╚██████╗███████╗
 ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝`;

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => setBootDone(true), 400);
        }
      }, line.delay);
    });
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "60px",
      paddingBottom: "48px",
    }}>
      <div style={{
        maxWidth: "900px", width: "100%",
        margin: "0 auto", padding: "0 16px",
      }}>
        <div className="term-window">
          <div className="term-header">
            <div className="term-dots">
              <div className="term-dot term-dot--red" />
              <div className="term-dot term-dot--yellow" />
              <div className="term-dot term-dot--green" />
            </div>
            <span className="term-title">fati@archlinux: ~/portfolio</span>
          </div>

          <div className="term-body">
            {/* Boot sequence */}
            <div style={{
              fontSize: "11px",
              color: "#555",
              marginBottom: "16px",
              transition: "opacity 0.5s",
              opacity: bootDone ? 0.3 : 1,
              maxHeight: bootDone ? "60px" : "300px",
              overflow: "hidden",
              transition: "all 0.8s ease",
            }}>
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i} style={{ color: line.text.includes("ready") ? "#33ff33" : "#555" }}>
                  {line.text}
                </div>
              ))}
            </div>

            {bootDone && (
              <div style={{ animation: "fadeInUp 0.6s ease" }}>
                {/* ASCII Art Logo */}
                <div className="ascii-art" style={{ marginBottom: "20px", overflow: "auto" }}>
                  {ASCII_ART}
                </div>

                {/* Welcome message */}
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ color: "#00cccc" }}>fati@archlinux</span>
                  <span style={{ color: "#555" }}>:</span>
                  <span style={{ color: "#3399ff" }}>~</span>
                  <span style={{ color: "#555" }}> $ </span>
                  <span className="glow">cat welcome.txt</span>
                </div>

                <div style={{
                  borderLeft: "2px solid #1a3a1a",
                  paddingLeft: "16px",
                  marginBottom: "20px",
                  color: "#cccccc",
                  fontSize: "14px",
                  lineHeight: "1.8",
                }}>
                  <p>Hola! Soy <span style={{ color: "#33ff33", fontWeight: "bold" }}>Fátima Navarro</span></p>
                  <p>
                    Desarrolladora y artista. Estudio CS en la{" "}
                    <span style={{ color: "#cccc00" }}>UVG</span>.
                  </p>
                  <p>
                    Dibujo personajes, programo interfaces y customizo mi setup de{" "}
                    <span style={{ color: "#cc66cc" }}>Fedora + Hyprland</span> con demasiado cariño.
                  </p>
                  <p style={{ color: "#555", marginTop: "8px" }}>
                    // este es mi pequeño rincón en internet
                  </p>
                </div>

                {/* System info */}
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ color: "#00cccc" }}>fati@archlinux</span>
                  <span style={{ color: "#555" }}>:</span>
                  <span style={{ color: "#3399ff" }}>~</span>
                  <span style={{ color: "#555" }}> $ </span>
                  <span className="glow">neofetch --short</span>
                </div>

                <div style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}>
                  {/* Avatar */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <div style={{
                      width: "120px", height: "120px",
                      border: "1px solid #1a3a1a",
                      borderRadius: "4px",
                      overflow: "hidden",
                      boxShadow: "0 0 15px rgba(51, 255, 51, 0.1)",
                    }}>
                      <img src="/images/avatar.png" alt="Fatima Navarro"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <span style={{ fontSize: "11px", color: "#555" }}>avatar.png</span>
                  </div>

                  {/* Info table */}
                  <div style={{ flex: 1, minWidth: "200px", fontSize: "13px" }}>
                    {[
                      { k: "OS", v: "Fedora Linux 42" },
                      { k: "WM", v: "Hyprland" },
                      { k: "Shell", v: "zsh 5.9" },
                      { k: "Terminal", v: "kitty" },
                      { k: "User", v: "Fátima Navarro" },
                      { k: "ID", v: "24044 - CS&IT - UVG" },
                      { k: "Location", v: "Guatemala" },
                    ].map((row) => (
                      <div key={row.k} style={{ display: "flex", marginBottom: "2px" }}>
                        <span style={{ color: "#33ff33", width: "110px", flexShrink: 0 }}>{row.k}:</span>
                        <span style={{ color: "#cccccc" }}>{row.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packages / Tech */}
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ color: "#00cccc" }}>fati@archlinux</span>
                  <span style={{ color: "#555" }}>:</span>
                  <span style={{ color: "#3399ff" }}>~</span>
                  <span style={{ color: "#555" }}> $ </span>
                  <span className="glow">pacman -Qe | grep skills</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {TECHS.map((t) => (
                    <span key={t} className="term-tag">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ color: "#00cccc" }}>fati@archlinux</span>
                  <span style={{ color: "#555" }}>:</span>
                  <span style={{ color: "#3399ff" }}>~</span>
                  <span style={{ color: "#555" }}> $ </span>
                  <span className="glow">ls ~/links/</span>
                </div>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                  {[
                    { label: "github/", href: "https://github.com/fatupopzz", color: "#cccccc" },
                    { label: "linkedin/", href: "https://www.linkedin.com/in/fatimanav", color: "#3399ff" },
                    { label: "projects/", href: "#projects", color: "#cccc00" },
                    { label: "contact/", href: "#contact", color: "#cc66cc" },
                  ].map((btn) => (
                    <a key={btn.label} href={btn.href} className="term-btn"
                      target={btn.href.startsWith("http") ? "_blank" : undefined}
                      rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ color: btn.color, borderColor: btn.color + "33" }}>
                      {btn.label}
                    </a>
                  ))}
                </div>

                {/* Waiting cursor */}
                <div style={{ marginTop: "8px" }}>
                  <span style={{ color: "#00cccc" }}>fati@archlinux</span>
                  <span style={{ color: "#555" }}>:</span>
                  <span style={{ color: "#3399ff" }}>~</span>
                  <span style={{ color: "#555" }}> $ </span>
                  <span className="cursor" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
