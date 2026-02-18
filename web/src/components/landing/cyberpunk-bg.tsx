"use client";

import { useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Cell {
  x: number;
  y: number;
  char: string;
  opacity: number;
  hue: number;
  pulseOffset: number;
  size: number;
}

export function CyberpunkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const gridRef = useRef<Cell[]>([]);
  const sizeRef = useRef({ w: 0, h: 0 });
  const reduced = useReducedMotion();

  const buildGrid = useCallback((w: number, h: number): Cell[] => {
    const cellSize = 16;
    const cols = Math.floor(w / cellSize);
    const rows = Math.floor(h / cellSize);
    const cells: Cell[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        /* sparse fill — skip ~45 % of cells for breathing room */
        if (Math.random() < 0.45) continue;

        const x = c * cellSize + cellSize / 2;
        const y = r * cellSize + cellSize / 2;

        cells.push({
          x,
          y,
          char: Math.random() > 0.35 ? "7" : "0",
          opacity: Math.random() * 0.35 + 0.08,
          hue: Math.random() > 0.6 ? 320 : Math.random() > 0.5 ? 270 : 200,
          pulseOffset: Math.random() * Math.PI * 2,
          size: Math.random() > 0.92 ? 11 : 9,
        });
      }
    }
    return cells;
  }, []);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (w !== sizeRef.current.w || h !== sizeRef.current.h) {
        sizeRef.current = { w, h };
        gridRef.current = buildGrid(w, h);
      }
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(t: number) {
      const time = t * 0.001;
      const { w, h } = sizeRef.current;
      ctx!.clearRect(0, 0, w, h);

      const grid = gridRef.current;

      for (const cell of grid) {
        const pulse = Math.sin(time * 1.2 + cell.pulseOffset) * 0.08;
        const wave =
          Math.sin(time * 0.6 + cell.x * 0.008 + cell.y * 0.006) * 0.06;
        const alpha = Math.min(
          0.5,
          Math.max(0.03, cell.opacity + pulse + wave),
        );

        let color: string;
        if (cell.hue === 320) {
          color = `rgba(200, 80, 200, ${alpha})`;
        } else if (cell.hue === 270) {
          color = `rgba(140, 100, 255, ${alpha * 0.85})`;
        } else {
          color = `rgba(100, 180, 240, ${alpha * 0.7})`;
        }

        ctx!.fillStyle = color;
        ctx!.font = `${cell.size}px "Courier New", monospace`;
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(cell.char, cell.x, cell.y);

        /* subtle glow on the brightest pink cells */
        if (alpha > 0.35 && cell.hue === 320) {
          ctx!.shadowColor = "rgba(180, 60, 200, 0.25)";
          ctx!.shadowBlur = 6;
          ctx!.fillText(cell.char, cell.x, cell.y);
          ctx!.shadowBlur = 0;
          ctx!.shadowColor = "transparent";
        }
      }

      /* faint scanlines */
      for (let sy = 0; sy < h; sy += 4) {
        ctx!.fillStyle = `rgba(0, 0, 0, ${0.04 + Math.sin(time * 1.5 + sy * 0.08) * 0.015})`;
        ctx!.fillRect(0, sy, w, 1);
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [reduced, buildGrid]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}
