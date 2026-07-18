import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { navLinks } from "@/lib/data";

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative border-t border-white/[0.06] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-gold/60" />
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/90">
                Premium
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Odontologia digital de excelência. Tecnologia, precisão e cuidado humano para
              transformar o seu sorriso e a sua confiança.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gold text-obsidian text-sm font-medium hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:scale-[1.03] transition-all duration-300 min-h-[48px]"
            >
              Agendar Consulta
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  Av. Paulista, 0000 — São Paulo, SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+5511000000000"
                  className="text-sm text-neutral-400 hover:text-gold transition-colors"
                >
                  +55 (11) 0000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:contato@premium.com.br"
                  className="text-sm text-neutral-400 hover:text-gold transition-colors"
                >
                  contato@premium.com.br
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold/30 transition-all duration-300 min-h-[48px] min-w-[48px]"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Premium. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-neutral-500 hover:text-gold transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-neutral-500 hover:text-gold transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
