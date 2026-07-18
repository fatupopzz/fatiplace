"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("es-GT", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const LINKS = [
    { label: "~", href: "#hero" },
    { label: "/about", href: "#about" },
    { label: "/projects", href: "#projects" },
    { label: "/contact", href: "#contact" },
  ];

  return (
    <nav className="term-navbar">
      <span style={{ color: "#33ff33", fontWeight: "bold", marginRight: "auto" }}>
        fati@arch<span style={{ color: "#555" }}>:</span><span style={{ color: "#3399ff" }}>~</span>
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
      <span style={{
        marginLeft: "auto",
        color: "#555",
        fontSize: "12px",
        fontVariantNumeric: "tabular-nums",
      }}>
        {time}
      </span>
    </nav>
  );
}
