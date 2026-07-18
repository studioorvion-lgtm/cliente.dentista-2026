import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, ChevronDown } from "lucide-react";

const VIDEO_URL =
  "https://media.base44.com/videos/public/user_6a58ea6dd6dede36eda97a7c/e25766e8e_Luxury_dental_clinic_futuristic__202607181042.mp4";

const ease = [0.25, 1, 0.5, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section ref={ref} id="inicio" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Video */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-gpu">
        <video
          autoPlay muted loop playsInline preload="none"
          onCanPlay={() => setVideoReady(true)}
          aria-label="Clínica odontológica premium"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/65 via-obsidian/25 to-obsidian pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/25 to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-10 max-w-7xl mx-auto"
      >
        <div className="max-w-[600px]">
          {/* Badge */}
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

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="text-[clamp(2.4rem,5vw,4.25rem)] font-medium text-white leading-[1.03] tracking-[-0.04em] text-balance"
          >
            Tecnologia, Precisão{" "}
            <span className="font-serif italic gold-gradient-text">e Excelência</span>
            {" "}para Transformar o Seu Sorriso.
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-7 text-[15px] text-neutral-400 leading-[1.75] max-w-[460px] font-light"
          >
            Inovação digital, equipamentos de fronteira e atendimento genuinamente humano
            para uma experiência odontológica acima do convencional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contato" className="btn-gold group">
              Agendar Consulta Gratuita
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a href="#especialidades" className="btn-ghost">
              Ver Especialidades
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease }}
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

        {/* Floating image card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease }}
          className="absolute right-6 lg:right-10 bottom-28 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong rounded-2xl p-2 w-[220px] border border-white/[0.08]"
          >
            <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3 relative">
              <img
                src="/images/clinic.jpg"
                alt="Clínica odontológica futurista"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </div>
            <div className="px-2 pb-1 text-center">
              <div className="text-[12px] font-medium text-white/90">Ambiente Premium</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">Odontologia do futuro, hoje.</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/25">Role</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
