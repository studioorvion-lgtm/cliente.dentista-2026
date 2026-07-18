"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const BEFORE =
  "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=1200&q=80";
const AFTER =
  "https://images.unsplash.com/photo-1581585095725-39d2d1e2c4a1?w=1200&q=80";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const handleMove = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos((x / rect.width) * 100);
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Transformação"
          title="Antes e depois, com precisão"
          description="Mova o cursor sobre a imagem e descubra o poder de uma transformação digital completa."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            className="relative aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize select-none glass"
          >
            {/* After (full color), always full-size underneath */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AFTER}
              alt="Depois do tratamento"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before (grayscale), clipped with clip-path so it never divides by zero
                and always stays pixel-aligned with the image underneath */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BEFORE}
                alt="Antes do tratamento"
                className="absolute inset-0 w-full h-full object-cover grayscale"
                draggable={false}
              />
            </div>

            {/* Gold divider lens */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gold pointer-events-none shadow-[0_0_20px_rgba(197,160,89,0.6)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-strong border border-gold flex items-center justify-center">
                <span className="text-gold text-xs font-medium">⟷</span>
              </div>
            </div>

            {/* Labels */}
            <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-white/70 px-3 py-1 rounded-full glass">
              Antes
            </span>
            <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-white/70 px-3 py-1 rounded-full glass">
              Depois
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
