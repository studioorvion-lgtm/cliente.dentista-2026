"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processSteps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Como Funciona"
          title="Uma jornada clara, do início ao fim"
          description="Cada etapa foi desenhada para que você se sinta seguro, informado e confiante em todo o processo."
        />

        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 rounded-full glass-strong flex items-center justify-center mb-6 group hover:border-gold/40 transition-colors">
                  <span className="text-2xl font-medium gold-gradient-text">{step.number}</span>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-gold/30"
                    initial={{ scale: 1, opacity: 0.3 }}
                    whileInView={{ scale: 1.15, opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.12 + 0.3 }}
                  />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
