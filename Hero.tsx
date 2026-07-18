"use client";

import { motion } from "framer-motion";
import { Scan } from "lucide-react";
import { aboutStats } from "@/lib/data";

const OPERATORY_IMG =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] gold-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={OPERATORY_IMG}
                alt="Consultório odontológico futurista com iluminação dourada ambiente"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 glass-strong rounded-2xl p-6 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <Scan className="w-5 h-5 text-gold" />
                </div>
                <span className="text-2xl font-medium text-white">3D</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Scanner intraoral de última geração
              </p>
            </motion.div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold mb-6"
            >
              <span className="h-px w-8 bg-gold/50" />
              Sobre a Clínica
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.1] text-balance"
            >
              Onde a tecnologia encontra o{" "}
              <span className="gold-gradient-text">cuidado humano</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed"
            >
              Nascemos da convicção de que a odontologia pode ser uma experiência
              extraordinária. Unimos precisão digital, equipamentos de fronteira e um
              atendimento profundamente personalizado para entregar resultados que vão além
              do esperado — sorrisos naturais, duradouros e harmonicamente perfeitos.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed"
            >
              Cada tratamento é planejado digitalmente, milimetricamente desenhado e
              executado por especialistas dedicados ao seu bem-estar.
            </motion.p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="text-2xl sm:text-3xl font-medium gold-gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-neutral-400 leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
