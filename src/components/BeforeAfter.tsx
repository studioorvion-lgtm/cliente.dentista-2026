import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { EASE as ease } from "@/lib/config";

const BEFORE = "/media/before.webp";
const AFTER = "/media/after.webp";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const move = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Transformação"
          title={<>Antes e depois, <span className="font-serif italic gold-gradient-text">com precisão</span></>}
          description="Mova o cursor sobre a imagem e descubra o poder de uma transformação digital completa."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mt-14 max-w-4xl mx-auto"
        >
          {/* Column labels */}
          <div className="flex justify-between mb-3 px-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-700">Antes</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold/50">Depois</span>
          </div>

          <div
            ref={containerRef}
            role="slider"
            aria-label="Comparação antes e depois"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${Math.round(pos)}% antes visível`}
            tabIndex={0}
            onMouseMove={(e) => dragging && move(e.clientX)}
            onMouseDown={(e) => { setDragging(true); move(e.clientX); }}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchMove={(e) => move(e.touches[0].clientX)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos(p => Math.max(0, p - 2));
              if (e.key === "ArrowRight") setPos(p => Math.min(100, p + 2));
            }}
            className="relative aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          >
            {/* After */}
            <img 
              src={AFTER} 
              alt="Resultado após o tratamento" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover" 
              draggable={false} 
            />

            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img 
                src={BEFORE} 
                alt="Antes do tratamento" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover" 
                draggable={false} 
              />
            </div>

            {/* Divider */}
            <div className="absolute inset-y-0 -translate-x-1/2 pointer-events-none" style={{ left: `${pos}%` }}>
              <div className="absolute inset-y-0 left-1/2 w-[1.5px] bg-gold/80 shadow-[0_0_12px_rgba(197,160,89,0.6)]" />

              {/* Handle */}
              <motion.div
                animate={{ scale: dragging ? 0.92 : 1 }}
                transition={{ duration: 0.15 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong border border-gold/40 shadow-[0_0_24px_rgba(197,160,89,0.3)] flex items-center justify-center gap-[3px]"
              >
                {[-1, 1].map((dir) => (
                  <div key={dir} className="flex flex-col gap-[3px]">
                    {[0,1,2].map((j) => (
                      <div key={j} className="w-[1.5px] h-[1.5px] rounded-full bg-gold/60" />
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom shade */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-obsidian/30 to-transparent pointer-events-none" />
          </div>

          <p className="mt-4 text-center text-[11px] text-neutral-700 tracking-wide select-none">
            ← Arraste para comparar →
          </p>
        </motion.div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
