import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, ChevronDown } from "lucide-react";
import { HERO_VIDEO_URL, EASE as ease } from "@/lib/config";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  const ctaMagnetic = useMagnetic(0.3);
  const ghostMagnetic = useMagnetic(0.3);

  return (
    <section ref={ref} id="inicio" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Video with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-gpu">
        <video
          autoPlay muted loop playsInline preload="none"
          onCanPlay={() => setVideoReady(true)}
          aria-label="Clínica odontológica premium"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <AnimatePresence>
          {!videoReady && (
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-obsidian"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/65 via-obsidian/25 to-obsidian pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/25 to-transparent pointer-events-none" />

      {/* Volumetric light — pulsing gold glow, atmosphere layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(ellipse 55% 45% at 35% 65%, rgba(197,160,89,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="max-w-[620px]">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
              Odontologia Digital de Excelência
            </span>
          </motion.div>

          {/* Headline — cinematic line-by-line reveal */}
          <h1 className="text-[clamp(2.4rem,5vw,4.25rem)] font-medium text-white leading-[1.03] tracking-[-0.04em]">
            <span className="overflow-hidden block" style={{ paddingBottom: "0.06em" }}>
              <motion.span
                className="block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.65, ease }}
              >
                Tecnologia, Precisão
              </motion.span>
            </span>
            <span className="overflow-hidden block" style={{ paddingBottom: "0.06em" }}>
              <motion.span
                className="block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.8, ease }}
              >
                <span className="font-serif italic gold-gradient-text">e Excelência</span>
                {" "}para Transformar
              </motion.span>
            </span>
            <span className="overflow-hidden block" style={{ paddingBottom: "0.06em" }}>
              <motion.span
                className="block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.95, ease }}
              >
                o Seu Sorriso.
              </motion.span>
            </span>
          </h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease }}
            className="mt-7 text-[15px] text-neutral-400 leading-[1.75] max-w-[460px] font-light"
          >
            Inovação digital, equipamentos de fronteira e atendimento genuinamente humano
            para uma experiência odontológica acima do convencional.
          </motion.p>

          {/* CTAs with magnetic physics */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <motion.a
              ref={ctaMagnetic.ref as React.RefObject<HTMLAnchorElement>}
              href="#contato"
              style={{ x: ctaMagnetic.x, y: ctaMagnetic.y }}
              className="btn-gold group"
            >
              Agendar Consulta Gratuita
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.a>
            <motion.a
              ref={ghostMagnetic.ref as React.RefObject<HTMLAnchorElement>}
              href="#especialidades"
              style={{ x: ghostMagnetic.x, y: ghostMagnetic.y }}
              className="btn-ghost"
            >
              Ver Especialidades
            </motion.a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5, ease }}
            className="mt-11 flex flex-wrap gap-x-7 gap-y-3 items-center"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gold text-gold" />
              ))}
              <span className="ml-1.5 text-[13px] text-white/70 font-medium">5,0</span>
            </div>
            <span className="text-white/[0.12] select-none">·</span>
            <span className="text-[13px] text-neutral-500">+1.500 pacientes atendidos</span>
            <span className="hidden sm:inline text-white/[0.12] select-none">·</span>
            <span className="hidden sm:inline text-[13px] text-neutral-500">+15 anos de experiência</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue with animated SVG ring */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/25">Role</span>
        <div className="relative w-6 h-6">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 24 24">
            <motion.circle
              cx="12" cy="12" r="10"
              fill="none"
              stroke="rgba(197,160,89,0.3)"
              strokeWidth="1.5"
              strokeDasharray="62.83"
              animate={{ strokeDashoffset: [62.83, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            />
          </svg>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <ChevronDown className="w-3 h-3 text-white/30" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
