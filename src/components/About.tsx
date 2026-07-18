import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scan, Award, Users, Star } from "lucide-react";
import { aboutStats } from "@/lib/data";

const MAIN_IMG = "/media/clinic.jpg";
const PORTRAIT_IMG = "/media/treating.jpg";
const ease = [0.25, 1, 0.5, 1] as const;
const statIcons = [Award, Users, Star];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} id="sobre" className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="ambient-glow-gold w-[600px] h-[600px] -top-32 -left-24 opacity-50" />
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5 relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] gold-glow">
              <motion.img
                style={{ y: imgY }}
                src={MAIN_IMG}
                alt="Interior da Clínica Premium – consultório com tecnologia digital"
                className="w-full h-[112%] object-cover object-center -mt-[6%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />
            </div>

            {/* Portrait card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="absolute -bottom-6 -right-3 sm:-right-8 w-36 sm:w-44 rounded-xl overflow-hidden glass-strong shadow-2xl"
            >
              <img
                src={PORTRAIT_IMG}
                alt="Sorriso do paciente após tratamento"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </motion.div>

            {/* Scanner badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="absolute -top-4 -right-2 sm:-right-6 glass-strong rounded-xl p-3.5 sm:p-4 border border-white/[0.07]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/12 flex items-center justify-center flex-shrink-0">
                  <Scan className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-[12px] font-medium text-white">Scanner 3D</div>
                  <div className="text-[10px] text-neutral-600 mt-0.5">Intraoral Digital</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-7 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="eyebrow-label mb-6"
            >
              Sobre a Clínica
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="text-[clamp(1.9rem,3.5vw,3rem)] font-medium text-white leading-[1.08] tracking-[-0.035em] text-balance"
            >
              Onde tecnologia encontra{" "}
              <span className="font-serif italic gold-gradient-text">o cuidado humano.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.18, ease }}
              className="mt-7 text-[15px] text-neutral-500 leading-[1.8] font-light max-w-lg"
            >
              Nascemos da convicção de que a odontologia pode ser uma experiência extraordinária.
              Unimos precisão digital, equipamentos de fronteira e atendimento profundamente
              personalizado — sorrisos naturais, duradouros e harmonicamente perfeitos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.26, ease }}
              className="mt-4 text-[15px] text-neutral-500 leading-[1.8] font-light max-w-lg"
            >
              Cada tratamento é planejado digitalmente, milimetricamente desenhado
              e executado por especialistas dedicados ao seu bem-estar.
            </motion.p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {aboutStats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 * i + 0.35, ease }}
                    className="card-premium p-4 sm:p-5"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold/50 mb-3" />
                    <div className="text-xl sm:text-2xl font-medium gold-gradient-text leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[11px] text-neutral-600 leading-snug">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
