"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "INICIO",    href: "#hero" },
  { label: "SOBRE MÍ", href: "#about" },
  { label: "PROYECTOS",href: "#projects" },
  { label: "CONTACTO", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(13,10,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "2px solid #f7379740" : "none",
        boxShadow: scrolled ? "0 0 20px #f7379720" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-display text-sm animate-glitch" style={{ color: "#f73797", textShadow: "0 0 10px #f73797" }}>
          FATIPLACE
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[9px] tracking-widest transition-all duration-200 hover:text-glow-pink"
                style={{ color: "#d1f9f6" }}
                onMouseEnter={e => e.target.style.color = "#f73797"}
                onMouseLeave={e => e.target.style.color = "#d1f9f6"}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-display text-xl"
          style={{ color: "#f73797" }}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 border-t-2 border-black" style={{ backgroundColor: "#1a1035" }}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-display text-[9px] py-3 border-b tracking-widest transition-all"
              style={{ color: "#d1f9f6", borderColor: "#ffffff10" }}
            >
              ▶ {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
