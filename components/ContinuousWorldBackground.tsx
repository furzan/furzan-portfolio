"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Cloud {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  opacity: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  color: string;
  type: "ember" | "leaf" | "spark";
  angle: number;
}

export default function ContinuousWorldBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    function handleChange(e: MediaQueryListEvent) {
      setReducedMotion(e.matches);
    }
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Track scroll position for continuous parallax
  useEffect(() => {
    if (reducedMotion) return;

    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  // Atmospheric Animation Canvas (Clouds, Embers, Leaves, Torch Halos)
  useEffect(() => {
    if (reducedMotion || !mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    function resize() {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    // Drifting clouds
    const clouds: Cloud[] = Array.from({ length: 6 }, () => ({
      x: Math.random() * w,
      y: 20 + Math.random() * (h * 0.3),
      width: 180 + Math.random() * 220,
      height: 60 + Math.random() * 80,
      speed: 0.2 + Math.random() * 0.35,
      opacity: 0.12 + Math.random() * 0.15,
    }));

    // Floating particles (Embers, Magical sparks, Forest leaves)
    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 1.5 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(0.3 + Math.random() * 0.7),
      opacity: 0.3 + Math.random() * 0.6,
      color:
        Math.random() > 0.4
          ? "rgba(240, 180, 70, "
          : Math.random() > 0.5
          ? "rgba(220, 110, 40, "
          : "rgba(140, 195, 90, ",
      type: Math.random() > 0.3 ? "ember" : "leaf",
      angle: Math.random() * Math.PI * 2,
    }));

    let phase = 0;

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, w, h);
      phase += 0.035;

      // 1. Draw horizontal drifting clouds
      for (const cloud of clouds) {
        cloud.x += cloud.speed;
        if (cloud.x > w + cloud.width) {
          cloud.x = -cloud.width;
          cloud.y = 20 + Math.random() * (h * 0.3);
        }

        const grad = ctx.createRadialGradient(
          cloud.x + cloud.width / 2,
          cloud.y + cloud.height / 2,
          10,
          cloud.x + cloud.width / 2,
          cloud.y + cloud.height / 2,
          cloud.width / 2
        );
        grad.addColorStop(0, `rgba(245, 235, 215, ${cloud.opacity})`);
        grad.addColorStop(0.7, `rgba(215, 195, 165, ${cloud.opacity * 0.4})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(
          cloud.x + cloud.width / 2,
          cloud.y + cloud.height / 2,
          cloud.width / 2,
          cloud.height / 2,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // 2. Torch Light Flicker Halos (Left and Right ambient spots)
      const torchFlicker = Math.sin(phase * 1.5) * 0.08 + Math.cos(phase * 2.3) * 0.05;
      const torchLocations = [
        { x: w * 0.12, y: h * 0.4 },
        { x: w * 0.88, y: h * 0.45 },
        { x: w * 0.5, y: h * 0.7 },
      ];

      for (const torch of torchLocations) {
        const radius = 160 + torchFlicker * 35;
        const torchGrad = ctx.createRadialGradient(
          torch.x,
          torch.y,
          5,
          torch.x,
          torch.y,
          radius
        );
        torchGrad.addColorStop(0, `rgba(240, 160, 50, ${0.14 + torchFlicker})`);
        torchGrad.addColorStop(0.6, `rgba(190, 100, 30, ${0.05 + torchFlicker * 0.5})`);
        torchGrad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = torchGrad;
        ctx.beginPath();
        ctx.arc(torch.x, torch.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw floating embers & leaves
      for (const p of particles) {
        p.angle += 0.02;
        p.x += p.vx + Math.sin(p.angle) * 0.4;
        p.y += p.vy;

        if (p.y < -20) {
          p.y = h + 20;
          p.x = Math.random() * w;
        }

        const alpha = p.opacity * (0.8 + Math.sin(phase + p.x) * 0.2);

        if (p.type === "leaf") {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = `rgba(150, 185, 90, ${alpha * 0.8})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.8, p.size * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          ctx.fillStyle = `${p.color}${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion, mounted]);

  // Calculate environmental cross-fade opacities based on scroll position
  const maxScroll = typeof window !== "undefined" ? Math.max(1, document.body.scrollHeight - window.innerHeight) : 3600;
  const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

  // Opacities for 6 environments along scroll journey
  const env0Opacity = Math.max(0, 1 - progress * 5);
  const env1Opacity = Math.max(0, Math.min(1, 1 - Math.abs(progress - 0.20) * 5));
  const env2Opacity = Math.max(0, Math.min(1, 1 - Math.abs(progress - 0.40) * 5));
  const env3Opacity = Math.max(0, Math.min(1, 1 - Math.abs(progress - 0.60) * 5));
  const env4Opacity = Math.max(0, Math.min(1, 1 - Math.abs(progress - 0.80) * 5));
  const env5Opacity = Math.max(0, Math.min(1, (progress - 0.70) * 5));

  // Parallax offsets (Far, Mid, Foreground) with height safety bounds
  const vhHeight = typeof window !== "undefined" ? window.innerHeight : 900;
  const farOffset = reducedMotion ? 0 : Math.min(scrollY * 0.04, vhHeight * 0.3);
  const midOffset = reducedMotion ? 0 : Math.min(scrollY * 0.08, vhHeight * 0.5);
  const depthScale = reducedMotion ? 1 : 1 + Math.sin(scrollY * 0.0008) * 0.02;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#160f0a]"
      aria-hidden="true"
      suppressHydrationWarning
    >
      {/* Dynamic Ambient Background Color Gradient that shifts with progress */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background:
            progress < 0.25
              ? "radial-gradient(ellipse at top, #2d2015 0%, #160f0a 80%)"
              : progress < 0.65
              ? "radial-gradient(ellipse at center, #2b1d12 0%, #140d08 80%)"
              : "radial-gradient(ellipse at bottom, #3a2215 0%, #160c07 80%)",
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* PARALLAX LAYER 1: FAR SKY & DISTANT MOUNTAINS                   */}
      {/* ---------------------------------------------------------------- */}
      <div
        className="absolute inset-0 h-[160vh] w-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${-farOffset}px, 0) scale(${depthScale})`,
          filter: "contrast(1.06) saturate(1.1)",
        }}
      >
        {/* Castle Sky */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: env0Opacity }}
        >
          <Image
            src="/assets/medieval/hero/sky.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* PARALLAX LAYER 2: MIDGROUND LANDSCAPES (CROSS-FADING JOURNEY)    */}
      {/* ---------------------------------------------------------------- */}
      <div
        className="absolute inset-0 h-[160vh] w-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${-midOffset}px, 0) scale(${depthScale})`,
          filter: "contrast(1.08) saturate(1.12)",
        }}
      >
        {/* Environment 0: Hero Castle Kingdom */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: env0Opacity }}
        >
          <Image
            src="/assets/medieval/hero/castle.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>

        {/* Environment 1: About Enchanted Forest */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: env1Opacity }}
        >
          <Image
            src="/assets/medieval/about/forest.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>

        {/* Environment 2: Skills Fantasy Tavern */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: env2Opacity }}
        >
          <Image
            src="/assets/medieval/skills/tavern.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>

        {/* Environment 3: Projects Alchemy Laboratory */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: env3Opacity }}
        >
          <Image
            src="/assets/medieval/projects/lab.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>

        {/* Environment 4: Grand Stained-Glass Observatory Hall */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: env4Opacity }}
        >
          <Image
            src="/assets/medieval/observatory.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>

        {/* Environment 5: Contact & Footer Sunset Courtyard */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: env5Opacity }}
        >
          <Image
            src="/assets/medieval/contact/sunset.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>
      </div>

      {/* Soft Vignette Edge Framing (non-opaque, leaves center vibrant) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(18,12,8,0.65)_100%)]" />

      {/* Atmospheric Canvas for Drifting Clouds, Embers, Leaves, Torch Halos */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 h-full w-full opacity-90"
      />
    </div>
  );
}
