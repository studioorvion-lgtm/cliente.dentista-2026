import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";
import { EASE as ease } from "@/lib/config";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="ambient-glow-gold w-[500px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-15" />
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-0 sm:px-6 lg:px-10">
        <div className="px-6 sm:px-0">
          <SectionHeading
            eyebrow="Depoimentos"
            title={<>Histórias de sorrisos <span className="font-serif italic gold-gradient-text">transformados</span></>}
            description="A confiança de quem confiou em nosso trabalho é o nosso maior orgulho."
          />
        </div>

        {/* 
          Mobile: CSS Scroll Snap Carousel (native scrolling)
          Desktop: Standard CSS Grid 
        */}
        <div className="mt-14 sm:mt-20 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-10 sm:gap-y-16 overflow-x-auto snap-x-mandatory px-6 sm:px-0 pb-8 sm:pb-0 hide-scrollbar -mx-6 sm:mx-0">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease }}
              className="group flex flex-col relative flex-shrink-0 w-[85vw] sm:w-auto snap-align-start"
            >
              {/* Massive background quote mark */}
              <div
                className="absolute -top-10 -left-4 font-serif text-[100px] leading-none text-white/[0.02] group-hover:text-gold/[0.04] transition-colors duration-500 pointer-events-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="text-[16px] text-neutral-400 leading-[1.75] font-light flex-1 relative z-10 mb-8 pr-4 sm:pr-0">
                {t.text}
              </blockquote>

              {/* Author */}
              <footer className="mt-auto flex items-center gap-3 relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.03] border border-white/[0.08] overflow-hidden"
                  aria-hidden="true"
                >
                  {t.image ? (
                    <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[11px] font-medium text-white/50 group-hover:text-gold/80 transition-colors">
                      {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </span>
                  )}
                </div>
                <div>
                  <cite className="not-italic text-[13px] font-medium text-white/80 block">{t.name}</cite>
                  <span className="text-[11px] text-neutral-600 tracking-wide">{t.role}</span>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-0"
        >
          <div className="flex -space-x-2">
            {testimonials.slice(0, 5).map((t, i) => (
              <div
                key={i}
                aria-hidden="true"
                className="w-8 h-8 rounded-full bg-obsidian border-2 border-obsidian flex items-center justify-center relative z-10 overflow-hidden"
              >
                {t.image ? (
                  <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <span className="text-[9px] font-medium text-white/50">{t.name[0]}</span>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="text-[13px] text-neutral-500 font-light text-center">
            Junte-se a <span className="text-white/80 font-medium">+1.500 pacientes</span> satisfeitos.
          </p>
        </motion.div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
