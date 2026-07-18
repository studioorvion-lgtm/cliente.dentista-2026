import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";

const ease = [0.25, 1, 0.5, 1] as const;

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

const contacts = [
  { Icon: MapPin, text: "Av. Paulista, 0000 — São Paulo, SP", href: "https://maps.google.com" },
  { Icon: Phone, text: "+55 (11) 0000-0000", href: "tel:+5511000000000" },
  { Icon: Mail, text: "contato@clinicapremium.com.br", href: "mailto:contato@clinicapremium.com.br" },
];

const legalLinks = ["Política de Privacidade", "Termos de Uso"];

export default function Footer() {
  return (
    <footer id="contato" className="relative border-t border-white/[0.04] overflow-hidden">
      <div className="ambient-glow-gold w-[500px] h-[300px] bottom-0 -left-20 opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="sm:col-span-2 lg:col-span-5"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 rounded-full border border-gold/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
              <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/60">Clínica Premium</span>
            </div>

            <p className="text-[13px] text-neutral-600 leading-[1.8] max-w-xs font-light">
              Odontologia digital de excelência. Tecnologia, precisão e cuidado humano para
              transformar o seu sorriso e a sua confiança.
            </p>

            <div className="flex items-center gap-2 mt-7">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group w-9 h-9 rounded-full glass border border-white/[0.05] flex items-center justify-center text-neutral-700 hover:text-gold hover:border-gold/20 transition-all duration-250"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="lg:col-span-3"
          >
            <h4 className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-700 mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-neutral-600 hover:text-gold/80 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14, ease }}
            className="lg:col-span-4"
          >
            <h4 className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-700 mb-5">
              Contato
            </h4>
            <ul className="space-y-3.5 mb-7" role="list">
              {contacts.map(({ Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="group flex items-start gap-2.5 text-[13px] text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold/40 mt-[1px] flex-shrink-0 group-hover:text-gold/70 transition-colors" aria-hidden="true" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contato" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-gold/60 hover:text-gold/90 transition-colors duration-200 group">
              Agendar Consulta
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 group-hover:translate-x-0.5 transition-all duration-250" />
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-neutral-700">
            © {new Date().getFullYear()} Clínica Premium Digital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((item) => (
              <a key={item} href="#" className="text-[11px] text-neutral-700 hover:text-neutral-500 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
