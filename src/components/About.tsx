import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Star } from "lucide-react";
import { EASE as ease } from "@/lib/config";
import { useCountUp } from "@/hooks/useCountUp";

const MAIN_IMG = "/media/clinic.jpg";
const statIcons = [Award, Users, Star];

/** Each stat's numeric config — prefix/suffix preserve the original display. */
const STAT_COUNTERS = [
  { to: 15,   prefix: "+", suffix: "",  duration: 1800, delay: 0   },
  { to: 1500, prefix: "+", suffix: "",  duration: 2000, delay: 150, grouped: true },
  { to: 98,   prefix: "",  suffix: "%", duration: 1600, delay: 300 },
] as const;

const STAT_LABELS = ["Anos de experiência", "Pacientes atendidos", "De satisfação"];

interface StatCardProps {
  index: number;
}

function StatCard({ index }: StatCardProps) {
  const config = STAT_COUNTERS[index];
  const Icon = statIcons[index];
  const { value, ref } = useCountUp({ to: config.to, duration: config.duration, delay: config.delay });
  const display = "grouped" in config && config.grouped
    ? value.toLocaleString("pt-BR")
    : String(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.08 * index + 0.35, ease }}
      className="card-premium p-4 sm:p-5"
    >
      <Icon className="w-3.5 h-3.5 text-gold/50 mb-3" />
      <div className="text-xl sm:text-2xl font-medium gold-gradient-text leading-none tabular-nums">
        {config.prefix}{display}{config.suffix}
      </div>
      <div className="mt-1.5 text-[11px] text-neutral-600 leading-snug">
        {STAT_LABELS[index]}
      </div>
    </motion.div>
  );
}

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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5 relative tilt-root"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square gold-glow">
              <motion.img
                style={{ y: imgY }}
                src={MAIN_IMG}
                alt="Interior da Clínica Premium – consultório com tecnologia digital"
                className="w-full h-[112%] object-cover object-center -mt-[6%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />
            </div>
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

            {/* Line-by-line reveal for mixed JSX heading */}
            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-medium text-white leading-[1.08] tracking-[-0.035em]">
              <span className="overflow-hidden block" style={{ paddingBottom: "0.06em" }}>
                <motion.span
                  className="block"
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.75, delay: 0.08, ease }}
                >
                  Onde tecnologia encontra
                </motion.span>
              </span>
              <span className="overflow-hidden block" style={{ paddingBottom: "0.06em" }}>
                <motion.span
                  className="block"
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.75, delay: 0.18, ease }}
                >
                  <span className="font-serif italic gold-gradient-text">o cuidado humano.</span>
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.32, ease }}
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
              transition={{ duration: 0.6, delay: 0.42, ease }}
              className="mt-4 text-[15px] text-neutral-500 leading-[1.8] font-light max-w-lg"
            >
              Cada tratamento é planejado digitalmente, milimetricamente desenhado
              e executado por especialistas dedicados ao seu bem-estar.
            </motion.p>

            {/* Animated stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {[0, 1, 2].map((i) => (
                <StatCard key={i} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
