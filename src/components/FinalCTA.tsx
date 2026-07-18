import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

const BG_IMG = "/media/reception_luxury.jpg";
const ease = [0.25, 1, 0.5, 1] as const;

const perks = [
  "Avaliação 100% gratuita",
  "Sem compromisso",
  "Atendimento ágil",
  "Parcelamento disponível",
];

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%] will-gpu">
        <img
          src={BG_IMG}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="w-full h-full object-cover object-center opacity-10"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/70 to-obsidian pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(197,160,89,0.08) 0%, transparent 100%)" }}
      />
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold/70">
              Comece sua transformação
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-medium text-white leading-[1.03] tracking-[-0.04em] text-balance">
            Seu Novo Sorriso{" "}
            <span className="font-serif italic gold-gradient-text">Começa Hoje.</span>
          </h2>

          <p className="mt-6 text-[15px] text-neutral-500 leading-[1.8] max-w-md mx-auto font-light">
            Agende sua avaliação e descubra como a tecnologia de ponta pode transformar
            a sua saúde, estética e confiança.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="btn-gold group"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              Agendar Consulta Gratuita
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.a>
            <a href="tel:+5511000000000" className="btn-ghost">
              Ligar agora
            </a>
          </div>

          {/* Perks */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {perks.map((p) => (
              <span key={p} className="text-[12px] text-neutral-700 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold/30 flex-shrink-0" aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
