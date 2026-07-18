"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { specialties } from "@/lib/data";

export default function Specialties() {
  return (
    <section id="especialidades" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Especialidades"
          title="Serviços que elevam o seu sorriso a outro nível"
          description="Cada especialidade é executada com tecnologia de ponta e a dedicação de especialistas reconhecidos, garantindo resultados naturais e duradouros."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative p-7 rounded-3xl glass hover:border-gold/30 transition-all duration-500 cursor-pointer min-h-[260px] flex flex-col"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold/70 px-3 py-1 rounded-full border border-gold/20">
                    {spec.tag}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-gold group-hover:rotate-45 transition-all duration-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3 leading-tight">
                  {spec.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed flex-1">
                  {spec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
