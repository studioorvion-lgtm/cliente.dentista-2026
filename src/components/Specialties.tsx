import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { specialties } from "@/lib/data";
import { EASE as ease } from "@/lib/config";

export default function Specialties() {
  return (
    <section id="especialidades" className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="ambient-glow-gold w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Especialidades"
          title={<>Serviços que elevam seu sorriso a <span className="font-serif italic gold-gradient-text">outro nível</span></>}
          description="Cada especialidade é executada com tecnologia de ponta e a dedicação de especialistas reconhecidos, garantindo resultados naturais e duradouros."
        />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease }}
              className="group card-premium p-7 flex flex-col min-h-[260px]"
            >
              <div className="flex items-start justify-between mb-7">
                <span className="text-[10px] font-medium text-neutral-600 tracking-widest tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-7 h-7 rounded-full border border-white/[0.04] flex items-center justify-center group-hover:border-gold/30 transition-colors duration-400">
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-gold transition-colors duration-400" />
                </div>
              </div>

              <h3 className="text-[15px] font-medium text-white mb-3 leading-snug flex-1 group-hover:text-white/90 transition-colors">
                {spec.title}
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.7] mb-6">
                {spec.description}
              </p>

              <span className="self-start text-[10px] font-medium uppercase tracking-[0.2em] text-gold/60">
                {spec.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
