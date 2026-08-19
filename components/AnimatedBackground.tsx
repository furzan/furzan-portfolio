"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Medieval / Renaissance Retro Canvas Colors                        */
/* ------------------------------------------------------------------ */
const INK_COLORS = [
  "rgba(0, 0, 0, 0.08)",        // Medieval Ink
  "rgba(89, 88, 85, 0.10)",     // Sepia / Graphite
  "rgba(160, 130, 70, 0.12)",    // Aged Antique Gold
  "rgba(120, 100, 80, 0.09)",    // Iron Gall Sepia
  "rgba(223, 220, 213, 0.15)",   // Vellum
];

type ShapeKind = "starburst" | "constellation_node" | "diamond_cross" | "parchment_mote";

interface Particle {
  x: number;
  y: number;
  size: number;
  kind: ShapeKind;
  color: string;
  rotation: number;
  rotationSpeed: number;
  vx: number;
  vy: number;
  depth: number;
  opacity: number;
  opacityDir: number;
  baseOpacity: number;
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ---------- Drawing routines for Medieval Retro Motifs ---------- */

/** 8-Pointed Medieval Compass Star */
function drawMedievalStarburst(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);

  // 4 Main cardinal rays
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI / 2) * i;
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
  }
  ctx.stroke();

  // 4 Diagonal shorter rays
  const shortSize = size * 0.55;
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = Math.PI / 4 + (Math.PI / 2) * i;
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * shortSize, Math.sin(angle) * shortSize);
  }
  ctx.stroke();

  // Center ring
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

/** Medieval Diamond Cross Flourish */
function drawDiamondCross(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);

  const h = size;
  const w = size * 0.35;

  ctx.beginPath();
  // Vertical diamond
  ctx.moveTo(0, -h);
  ctx.lineTo(w, 0);
  ctx.moveTo(0, -h);
  ctx.lineTo(-w, 0);
  ctx.moveTo(0, h);
  ctx.lineTo(w, 0);
  ctx.moveTo(0, h);
  ctx.lineTo(-w, 0);

  // Horizontal diamond
  ctx.moveTo(-h, 0);
  ctx.lineTo(0, w);
  ctx.moveTo(-h, 0);
  ctx.lineTo(0, -w);
  ctx.moveTo(h, 0);
  ctx.lineTo(0, w);
  ctx.moveTo(h, 0);
  ctx.lineTo(0, -w);

  ctx.stroke();
  ctx.restore();
}

/** Renaissance Astrolabe Wheel (Background Anchor Artwork) */
function drawAstrolabeWheel(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  angle: number
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  ctx.strokeStyle = "rgba(89, 88, 85, 0.05)";
  ctx.lineWidth = 1;

  // Outer ring
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();

  // Inner ring
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.82, 0, Math.PI * 2);
  ctx.stroke();

  // Core ring
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
  ctx.stroke();

  // Ticks on outer rim (24 degree divisions)
  const ticks = 24;
  ctx.beginPath();
  for (let i = 0; i < ticks; i++) {
    const a = (Math.PI * 2 / ticks) * i;
    const r1 = r * 0.82;
    const r2 = r;
    ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
    ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
  }
  ctx.stroke();

  // Cardinal crosshair lines
  ctx.beginPath();
  ctx.moveTo(-r * 1.1, 0);
  ctx.lineTo(r * 1.1, 0);
  ctx.moveTo(0, -r * 1.1);
  ctx.lineTo(0, r * 1.1);
  ctx.stroke();

  ctx.restore();
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

const PARTICLE_COUNT = 55;
const MAX_CONSTELLATION_DIST = 140;

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollYRef = useRef(0);
  const astrolabeAngleRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---- Size the canvas ----
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    // ---- Init particles ----
    const w = window.innerWidth;
    const h = window.innerHeight;

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const depth = Math.random();
      const kinds: ShapeKind[] = [
        "starburst",
        "constellation_node",
        "constellation_node",
        "diamond_cross",
        "parchment_mote",
      ];
      const kind = pickRandom(kinds);
      const baseOpacity = randomBetween(0.2, 0.85);

      return {
        x: Math.random() * w,
        y: Math.random() * h * 3.5,
        size:
          kind === "starburst"
            ? randomBetween(12, 22)
            : kind === "diamond_cross"
            ? randomBetween(10, 18)
            : kind === "constellation_node"
            ? randomBetween(3, 5)
            : randomBetween(2, 4),
        kind,
        color: pickRandom(INK_COLORS),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: randomBetween(-0.002, 0.002),
        vx: randomBetween(-0.2, 0.2),
        vy: randomBetween(-0.12, 0.12),
        depth,
        opacity: baseOpacity,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        baseOpacity,
      };
    });

    // ---- Listeners ----
    function onScroll() {
      scrollYRef.current = window.scrollY;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    // ---- Animation loop ----
    function animate() {
      if (!canvas || !ctx) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      ctx.clearRect(0, 0, vw, vh);

      const scrollY = scrollYRef.current;
      astrolabeAngleRef.current += 0.0005;
      const astrolabeAngle = astrolabeAngleRef.current;

      // 1. Draw Renaissance Astrolabe background rings (Top-Right & Mid-Left)
      drawAstrolabeWheel(ctx, vw * 0.88, vh * 0.35 - scrollY * 0.04, Math.min(vw * 0.28, 260), astrolabeAngle);
      drawAstrolabeWheel(ctx, vw * 0.10, vh * 1.6 - scrollY * 0.04, Math.min(vw * 0.22, 220), -astrolabeAngle * 0.7);

      // 2. Update particle positions
      const activeNodes: { x: number; y: number; opacity: number }[] = [];

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Opacity breathing
        p.opacity += p.opacityDir * 0.0015;
        if (p.opacity > p.baseOpacity + 0.15) p.opacityDir = -1;
        if (p.opacity < p.baseOpacity - 0.15) p.opacityDir = 1;
        p.opacity = Math.max(0.04, Math.min(1, p.opacity));

        // Wrap around viewport bounds
        if (p.x < -40) p.x = vw + 30;
        if (p.x > vw + 40) p.x = -30;
        if (p.y < -40) p.y = vh * 3.5 + 30;
        if (p.y > vh * 3.5 + 40) p.y = -30;

        const parallax = scrollY * (0.04 + p.depth * 0.10);
        const drawY = p.y - parallax;

        if (drawY > -50 && drawY < vh + 50) {
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.strokeStyle = p.color;
          ctx.fillStyle = p.color;
          ctx.lineWidth = 0.85;

          if (p.kind === "starburst") {
            drawMedievalStarburst(ctx, p.x, drawY, p.size, p.rotation);
          } else if (p.kind === "diamond_cross") {
            drawDiamondCross(ctx, p.x, drawY, p.size, p.rotation);
          } else if (p.kind === "constellation_node") {
            ctx.beginPath();
            ctx.arc(p.x, drawY, p.size, 0, Math.PI * 2);
            ctx.fill();
            activeNodes.push({ x: p.x, y: drawY, opacity: p.opacity });
          } else {
            // Parchment mote
            ctx.beginPath();
            ctx.arc(p.x, drawY, p.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }
      }

      // 3. Draw Medieval Constellation hairline connections between nearby nodes
      ctx.lineWidth = 0.6;
      for (let i = 0; i < activeNodes.length; i++) {
        for (let j = i + 1; j < activeNodes.length; j++) {
          const n1 = activeNodes[i];
          const n2 = activeNodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_CONSTELLATION_DIST) {
            const alpha = (1 - dist / MAX_CONSTELLATION_DIST) * Math.min(n1.opacity, n2.opacity) * 0.25;
            ctx.strokeStyle = `rgba(89, 88, 85, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
