"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] glass-strong p-12 sm:p-16 lg:p-20 text-center overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-gold/10" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-gold/10" />

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium tracking-[0.15em] uppercase text-white/70 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Comece sua transformação
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.1] tracking-[-0.04em] text-balance">
            Seu Novo Sorriso <span className="gold-gradient-text">Começa Hoje.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
            Agende sua avaliação e descubra como a tecnologia de ponta pode transformar a
            sua saúde, a sua estética e a sua confiança.
          </p>

          <motion.a
            href="#contato"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-2 mt-10 px-10 py-4 rounded-full bg-gold text-obsidian font-medium hover:shadow-[0_0_50px_rgba(197,160,89,0.5)] transition-all duration-300 min-h-[48px]"
          >
            Agendar Consulta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
