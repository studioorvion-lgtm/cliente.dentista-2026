import { motion } from "framer-motion";
import { differences } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const ease = [0.25, 1, 0.5, 1] as const;

export default function Difference() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nossa Diferença"
          title={<>O que nos torna <span className="font-serif italic gold-gradient-text">excepcionais</span></>}
          description="Não é apenas o que fazemos, mas como fazemos. Cada detalhe foi pensado para entregar uma experiência irrepetível."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {differences.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease }}
                className={`group flex flex-col ${i === 3 ? "lg:col-start-1" : ""} ${i === 4 ? "lg:col-start-2" : ""}`}
              >
                <div className="border-t border-white/[0.04] pt-6 mb-6 flex justify-between items-start">
                  <span className="text-[10px] font-medium text-neutral-700 tracking-widest tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-gold/40 group-hover:text-gold/80 transition-colors duration-400">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-[17px] font-medium text-white mb-3 leading-snug group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[14px] text-neutral-500 leading-[1.8] font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
