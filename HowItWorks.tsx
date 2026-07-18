"use client";

import { motion } from "framer-motion";
import { differences } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Difference() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nossa Diferença"
          title="O que nos torna excepcionais"
          description="Não é apenas o que fazemos, mas como fazemos. Cada detalhe foi pensado para entregar uma experiência irrepetível."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differences.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-3xl glass hover:border-gold/30 transition-all duration-500 ${
                  i === 4 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
