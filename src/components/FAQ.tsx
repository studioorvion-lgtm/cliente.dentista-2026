import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/data";
import { EASE as ease } from "@/lib/config";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* Left — sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Perguntas Frequentes"
              title={<>Tudo o que você precisa <span className="font-serif italic gold-gradient-text">saber</span></>}
              description="Reunimos as dúvidas mais comuns para que você se sinta completamente informado."
              centered={false}
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-8"
            >
              <a href="#contato" className="btn-gold text-[13px]">
                Ainda tem dúvidas? Fale conosco
              </a>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8" role="list">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease }}
                  role="listitem"
                  className={`border-b transition-colors duration-300 ${
                    isOpen ? "border-gold/20" : "border-white/[0.06]"
                  }`}
                >
                  <button
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center gap-5 py-5 text-left group"
                  >
                    <span className={`flex-1 text-[14px] sm:text-[15px] font-medium leading-snug transition-colors duration-200 ${
                      isOpen ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                    }`}>
                      {faq.question}
                    </span>

                    <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-250 ${
                      isOpen
                        ? "border-gold/35 bg-gold/8"
                        : "border-white/[0.08] bg-white/[0.02] group-hover:border-white/[0.14]"
                    }`}>
                      <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                          <motion.span key="m" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                            <Minus className="w-3 h-3 text-gold" />
                          </motion.span>
                        ) : (
                          <motion.span key="p" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                            <Plus className="w-3 h-3 text-neutral-500" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.35, ease }, opacity: { duration: 0.25 } }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[13px] sm:text-[14px] text-neutral-500 leading-[1.8] font-light max-w-lg">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
