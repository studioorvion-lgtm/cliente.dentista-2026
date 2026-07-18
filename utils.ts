"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ArrowRight, ChevronDown } from "lucide-react";

const VIDEO_URL =
  "https://media.base44.com/videos/public/user_6a58ea6dd6dede36eda97a7c/e25766e8e_Luxury_dental_clinic_futuristic__202607181042.mp4";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen min-h-[700px] w-full overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Vídeo cinematográfico da clínica dental futurista"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/40" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-10"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/80">
              Odontologia Digital Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] font-medium text-white leading-[1.05] tracking-[-0.04em] text-balance"
          >
            Tecnologia, Precisão e{" "}
            <span className="gold-gradient-text">Excelência</span> para Transformar o Seu
            Sorriso.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-base sm:text-lg text-neutral-300/90 leading-relaxed max-w-xl"
          >
            Combinamos inovação, equipamentos de última geração e atendimento personalizado
            para proporcionar uma experiência odontológica moderna, confortável e segura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-obsidian font-medium hover:shadow-[0_0_40px_rgba(197,160,89,0.5)] hover:scale-[1.03] active:scale-95 transition-all duration-300 min-h-[48px]"
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all duration-300 min-h-[48px]"
            >
              Conhecer Especialidades
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-white/90 font-medium">5,0</span>
            </div>
            <div className="h-4 w-px bg-white/15" />
            <span className="text-sm text-neutral-300">+1.500 pacientes atendidos</span>
            <div className="h-4 w-px bg-white/15 hidden sm:block" />
            <span className="text-sm text-neutral-300 hidden sm:block">
              Tecnologia Digital
            </span>
            <div className="h-4 w-px bg-white/15 hidden sm:block" />
            <span className="text-sm text-neutral-300 hidden sm:block">
              Especialistas Qualificados
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Role</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
