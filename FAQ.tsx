"use client";

import { motion } from "framer-motion";
import { techItems } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Technology() {
  return (
    <section id="tecnologia" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-azure/[0.04] blur-[120px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Tecnologia"
          title="Engenharia de precisão a serviço do seu sorriso"
          description="Investimos continuamente nas tecnologias mais avançadas do mundo para oferecer tratamentos mais rápidos, seguros e previsíveis."
        />

        <div className="mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px auric-line hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {techItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    isLeft ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  <div className={`lg:[direction:ltr] ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="group relative p-8 rounded-3xl glass hover:border-gold/30 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <span className="text-sm font-medium text-neutral-500 tracking-wider">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="w-3 h-3 rounded-full bg-gold ring-4 ring-gold/20"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
