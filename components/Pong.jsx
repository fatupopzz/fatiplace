"use client";
import { useRef, useEffect, useState, useCallback } from "react";

const W = 600;
const H = 320;
const PAD_H = 60;
const PAD_W = 8;
const BALL_SIZE = 8;
const PAD_SPEED = 5;
const INITIAL_SPEED = 4;

export default function Pong() {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const keysRef = useRef({});
  const rafRef = useRef(null);
  const [scores, setScores] = useState([0, 0]);
  const [paused, setPaused] = useState(true);
  const [msg, setMsg] = useState("press ENTER to start");

  const resetBall = useCallback((dir = 1) => {
    const s = stateRef.current;
    s.ball.x = W / 2;
    s.ball.y = H / 2;
    const angle = (Math.random() * Math.PI / 3) - Math.PI / 6;
    s.ball.vx = dir * INITIAL_SPEED * Math.cos(angle);
    s.ball.vy = INITIAL_SPEED * Math.sin(angle);
  }, []);

  const initState = useCallback(() => {
    stateRef.current = {
      p1: { y: H / 2 - PAD_H / 2 },
      p2: { y: H / 2 - PAD_H / 2 },
      ball: { x: W / 2, y: H / 2, vx: 0, vy: 0 },
    };
    resetBall(1);
  }, [resetBall]);

  const update = useCallback(() => {
    const s = stateRef.current;
    const keys = keysRef.current;

    if (keys["w"] || keys["W"]) s.p1.y = Math.max(0, s.p1.y - PAD_SPEED);
    if (keys["s"] || keys["S"]) s.p1.y = Math.min(H - PAD_H, s.p1.y + PAD_SPEED);

    const aiCenter = s.p2.y + PAD_H / 2;
    const diff = s.ball.y - aiCenter;
    if (Math.abs(diff) > 10) {
      s.p2.y += Math.sign(diff) * (PAD_SPEED - 1.2);
      s.p2.y = Math.max(0, Math.min(H - PAD_H, s.p2.y));
    }

    s.ball.x += s.ball.vx;
    s.ball.y += s.ball.vy;

    if (s.ball.y <= 0 || s.ball.y >= H - BALL_SIZE) {
      s.ball.vy *= -1;
      s.ball.y = s.ball.y <= 0 ? 0 : H - BALL_SIZE;
    }

    if (
      s.ball.x <= PAD_W + 12 &&
      s.ball.y + BALL_SIZE >= s.p1.y &&
      s.ball.y <= s.p1.y + PAD_H
    ) {
      s.ball.vx = Math.abs(s.ball.vx) * 1.05;
      s.ball.vy += ((s.ball.y - (s.p1.y + PAD_H / 2)) / PAD_H) * 3;
      s.ball.x = PAD_W + 12;
    }

    if (
      s.ball.x >= W - PAD_W - 12 - BALL_SIZE &&
      s.ball.y + BALL_SIZE >= s.p2.y &&
      s.ball.y <= s.p2.y + PAD_H
    ) {
      s.ball.vx = -Math.abs(s.ball.vx) * 1.05;
      s.ball.vy += ((s.ball.y - (s.p2.y + PAD_H / 2)) / PAD_H) * 3;
      s.ball.x = W - PAD_W - 12 - BALL_SIZE;
    }

    if (s.ball.x < 0) {
      setScores((prev) => {
        const n = [prev[0], prev[1] + 1];
        if (n[1] >= 5) {
          setPaused(true);
          setMsg("CPU wins — ENTER to restart");
        }
        return n;
      });
      resetBall(1);
    }
    if (s.ball.x > W) {
      setScores((prev) => {
        const n = [prev[0] + 1, prev[1]];
        if (n[0] >= 5) {
          setPaused(true);
          setMsg("you win! — ENTER to restart");
        }
        return n;
      });
      resetBall(-1);
    }
  }, [resetBall]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, W, H);

    ctx.setLineDash([4, 8]);
    ctx.strokeStyle = "#1a3a1a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2, 0);
    ctx.lineTo(W / 2, H);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.shadowColor = "#33ff33";
    ctx.shadowBlur = 6;
    ctx.fillStyle = "#33ff33";
    ctx.fillRect(12, s.p1.y, PAD_W, PAD_H);

    ctx.fillStyle = "#33ff33";
    ctx.fillRect(W - PAD_W - 12, s.p2.y, PAD_W, PAD_H);

    ctx.fillRect(s.ball.x, s.ball.y, BALL_SIZE, BALL_SIZE);
    ctx.shadowBlur = 0;
  }, []);

  const loop = useCallback(() => {
    update();
    draw();
    rafRef.current = requestAnimationFrame(loop);
  }, [update, draw]);

  useEffect(() => {
    initState();
    draw();
  }, [initState, draw]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setPaused((p) => {
          if (p) {
            setScores([0, 0]);
            initState();
            setMsg("");
            return false;
          }
          setMsg("paused — ENTER to resume");
          return true;
        });
        return;
      }
      keysRef.current[e.key] = true;
    };
    const onKeyUp = (e) => {
      keysRef.current[e.key] = false;
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [initState]);

  useEffect(() => {
    if (!paused) {
      rafRef.current = requestAnimationFrame(loop);
    } else if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, loop]);

  // Touch controls
  const handleTouch = useCallback((e) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const y = e.touches[0].clientY - rect.top;
    const ratio = y / rect.height;
    if (stateRef.current) {
      stateRef.current.p1.y = Math.max(0, Math.min(H - PAD_H, ratio * H - PAD_H / 2));
    }
  }, []);

  return (
    <section id="pong" style={{ padding: "24px 0 32px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
        <div className="term-window">
          <div className="term-header">
            <div className="term-dots">
              <div className="term-dot term-dot--red" />
              <div className="term-dot term-dot--yellow" />
              <div className="term-dot term-dot--green" />
            </div>
            <span className="term-title">pong.exe - fati@archlinux</span>
          </div>

          <div className="term-body">
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#00cccc" }}>fati@archlinux</span>
              <span style={{ color: "#555" }}>:</span>
              <span style={{ color: "#3399ff" }}>~</span>
              <span style={{ color: "#555" }}> $ </span>
              <span className="glow">./pong --vs cpu</span>
            </div>

            {/* Scoreboard */}
            <div style={{
              display: "flex", justifyContent: "center", gap: "40px",
              marginBottom: "8px", fontSize: "20px", fontWeight: "bold",
            }}>
              <span style={{ color: "#33ff33" }}>
                <span style={{ color: "#555", fontSize: "11px", fontWeight: "normal" }}>YOU </span>
                {scores[0]}
              </span>
              <span style={{ color: "#555" }}>:</span>
              <span style={{ color: "#33ff33" }}>
                {scores[1]}
                <span style={{ color: "#555", fontSize: "11px", fontWeight: "normal" }}> CPU</span>
              </span>
            </div>

            {/* Canvas */}
            <div style={{
              display: "flex", justifyContent: "center",
              position: "relative",
            }}>
              <canvas
                ref={canvasRef}
                width={W}
                height={H}
                onTouchMove={handleTouch}
                onTouchStart={(e) => {
                  if (paused) {
                    setScores([0, 0]);
                    initState();
                    setMsg("");
                    setPaused(false);
                  }
                  handleTouch(e);
                }}
                style={{
                  border: "1px solid #1a3a1a",
                  borderRadius: "4px",
                  maxWidth: "100%",
                  height: "auto",
                  cursor: "none",
                  touchAction: "none",
                }}
              />
              {msg && (
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  pointerEvents: "none",
                }}>
                  <span className="glow-bright" style={{
                    fontSize: "14px", color: "#33ff33",
                    background: "rgba(10,10,10,0.85)",
                    padding: "8px 20px", borderRadius: "4px",
                    border: "1px solid #1a3a1a",
                  }}>
                    {msg}
                  </span>
                </div>
              )}
            </div>

            {/* Controls help */}
            <div style={{
              marginTop: "12px", fontSize: "11px", color: "#555",
              display: "flex", justifyContent: "center", gap: "20px",
              flexWrap: "wrap",
            }}>
              <span><span style={{ color: "#33ff33" }}>W/S</span> — mover paleta</span>
              <span><span style={{ color: "#33ff33" }}>ENTER</span> — iniciar/pausar</span>
              <span><span style={{ color: "#33ff33" }}>TOUCH</span> — arrastrar (móvil)</span>
            </div>

            <div style={{ marginTop: "12px" }}>
              <span style={{ color: "#00cccc" }}>fati@archlinux</span>
              <span style={{ color: "#555" }}>:</span>
              <span style={{ color: "#3399ff" }}>~</span>
              <span style={{ color: "#555" }}> $ </span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
