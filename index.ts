import {
  ScanLine,
  Monitor,
  Camera,
  Cpu,
  Brain,
  Sparkles,
  Target,
  Heart,
  Shield,
  Users,
} from "lucide-react";
import type {
  NavLink,
  Specialty,
  TechItem,
  DifferenceItem,
  ProcessStep,
  GalleryImage,
  Testimonial,
  FAQItem,
  Stat,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const aboutStats: Stat[] = [
  { value: "+15", label: "Anos de experiência" },
  { value: "+1.500", label: "Pacientes atendidos" },
  { value: "98%", label: "Satisfação" },
];

export const specialties: Specialty[] = [
  {
    title: "Implantes Dentários",
    description:
      "Reabilitação completa com implantes de titânio de alta precisão e planejamento digital guiado.",
    tag: "Reabilitação",
  },
  {
    title: "Lentes de Contato Dental",
    description:
      "Facetas ultrafinas de porcelana que transformam sorrisos com naturalidade e harmonia.",
    tag: "Estética",
  },
  {
    title: "Ortodontia",
    description:
      "Alinhadores transparentes e aparelhos de precisão para um sorriso alinhado e funcional.",
    tag: "Alinhamento",
  },
  {
    title: "Clareamento Dental",
    description:
      "Técnicas avançadas e seguras para um sorriso mais branco e luminoso em poucas sessões.",
    tag: "Estética",
  },
  {
    title: "Próteses",
    description:
      "Próteses fixas e removíveis confeccionadas com tecnologia CAD/CAM para ajuste perfeito.",
    tag: "Reabilitação",
  },
  {
    title: "Harmonização Orofacial",
    description:
      "Procedimentos minimamente invasivos para equilíbrio e harmonia facial completa.",
    tag: "Harmonia",
  },
  {
    title: "Odontologia Preventiva",
    description:
      "Programas personalizados de prevenção e manutenção para saúde bucal duradoura.",
    tag: "Prevenção",
  },
  {
    title: "Emergências",
    description:
      "Atendimento imediato para urgências odontológicas com equipe especializada 24h.",
    tag: "Urgência",
  },
];

export const techItems: TechItem[] = [
  {
    icon: ScanLine,
    title: "Scanner Intraoral 3D",
    description:
      "Captura digital tridimensional precisa, eliminando moldagens tradicionais e garantindo conforto absoluto.",
  },
  {
    icon: Monitor,
    title: "Planejamento Digital",
    description:
      "Simulação computadorizada do resultado final antes mesmo de iniciar o tratamento, com previsibilidade total.",
  },
  {
    icon: Camera,
    title: "Radiografia Digital",
    description:
      "Imagens de alta resolução com radiação reduzida em até 90%, garantindo diagnóstico preciso e seguro.",
  },
  {
    icon: Cpu,
    title: "CAD/CAM",
    description:
      "Confecção digital de próteses e facetas em sessão única, com ajuste milimétrico e acabamento impecável.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Algoritmos de IA auxiliam no diagnóstico, planejamento e previsão de resultados com precisão extraordinária.",
  },
  {
    icon: Sparkles,
    title: "Odontologia Digital",
    description:
      "Fluxo totalmente digital do diagnóstico à execução, integrando todas as tecnologias em um único ecossistema.",
  },
];

export const differences: DifferenceItem[] = [
  {
    icon: Target,
    title: "Precisão",
    description:
      "Cada procedimento é planejado e executado com exatidão milimétrica, garantindo resultados previsíveis e duradouros.",
  },
  {
    icon: Heart,
    title: "Conforto",
    description:
      "Ambiente pensado para o seu bem-estar, com técnicas minimamente invasivas e sedação consciente quando necessário.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description:
      "Protocolos rigorosos de biossegurança e esterilização, com monitoramento completo em todos os procedimentos.",
  },
  {
    icon: Sparkles,
    title: "Resultados Naturais",
    description:
      "Estética que respeita a sua identidade. Sorrisos harmônicos que parecem — e são — genuinamente seus.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description:
      "Equipe dedicada que escuta, acolhe e acompanha cada etapa da sua jornada com empatia e transparência.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Agendamento",
    description:
      "Agende sua consulta pelo canal de sua preferência com conforto e praticidade.",
  },
  {
    number: "02",
    title: "Avaliação",
    description:
      "Diagnóstico completo com exames digitais e avaliação detalhada do seu sorriso.",
  },
  {
    number: "03",
    title: "Planejamento Digital",
    description:
      "Simulação tridimensional do tratamento com previsão do resultado final.",
  },
  {
    number: "04",
    title: "Tratamento",
    description:
      "Execução precisa com tecnologia guiada e acompanhamento em tempo real.",
  },
  {
    number: "05",
    title: "Acompanhamento",
    description: "Manutenção e suporte contínuo para garantir resultados duradouros.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1581585095725-39d2d1e2c4a1?w=800&q=80",
    alt: "Sorriso confiante e radiante",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d3ec4a0e?w=800&q=80",
    alt: "Lente de contato dental em macro",
  },
  {
    src: "https://images.unsplash.com/photo-1629429407759-01cd3d7cbb61?w=800&q=80",
    alt: "Scanner 3D digital de dentes",
  },
  {
    src: "https://images.unsplash.com/photo-1559535326-cd6e8e1d8c5e?w=1200&q=80",
    alt: "Retrato editorial de sorriso natural",
    span: "sm:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c9823a4d3e3?w=800&q=80",
    alt: "Implante de titânio em macro",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Albuquerque",
    role: "Paciente há 3 anos",
    text: "Nunca imaginei que uma visita ao dentista pudesse ser uma experiência tão sofisticada. O resultado do meu tratamento superou todas as expectativas. Sorrio com confiança todos os dias.",
  },
  {
    name: "Ricardo Mendes",
    role: "Implante digital",
    text: "A tecnologia impressiona. Fiz o implante com planejamento digital e em uma única sessão estava pronto. Sem dor, sem complicação, com um resultado perfeito e natural.",
  },
  {
    name: "Carolina Ferreira",
    role: "Lentes de contato dental",
    text: "O cuidado com cada detalhe é evidente. Desde a recepção até o resultado final, senti que estava em mãos excepcionais. Minha autoestima transformou-se completamente.",
  },
  {
    name: "Felipe Andrade",
    role: "Ortodontia invisível",
    text: "Acompanhamento impecável do início ao fim. Os alinhadores transparentes mudaram meu sorriso discretamente. Profissionais que realmente se importam com o resultado.",
  },
  {
    name: "Beatriz Costa",
    role: "Harmonização orofacial",
    text: "Resultado natural e harmônico, exatamente como eu queria. A precisão do planejamento digital me deu segurança total. Recomendo sem reservas.",
  },
  {
    name: "Gustavo Lima",
    role: "Clareamento digital",
    text: "Em poucas sessões meu sorriso estava completamente renovado. Atendimento humanizado, ambiente impecável e tecnologia de ponta. Experiência verdadeiramente premium.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "A primeira consulta inclui uma avaliação completa, exames digitais e um diagnóstico detalhado. Apresentamos todas as opções de tratamento com total transparência, para que você tome a melhor decisão com segurança.",
  },
  {
    question: "Vocês utilizam scanner digital em vez de moldagem tradicional?",
    answer:
      "Sim. Utilizamos scanner intraoral 3D de última geração, que elimina o desconforto das moldagens tradicionais, oferece maior precisão e reduz o tempo de cada procedimento significativamente.",
  },
  {
    question: "Os tratamentos são dolorosos?",
    answer:
      "Utilizamos técnicas minimamente invasivas e modernas de anestesia que garantem conforto em todos os procedimentos. Para casos mais complexos, oferecemos sedação consciente para uma experiência totalmente tranquila.",
  },
  {
    question: "Quanto tempo leva um tratamento com lentes de contato dental?",
    answer:
      "O tratamento com lentes de contato dental geralmente é concluído em duas a três sessões, graças à tecnologia CAD/CAM que permite a confecção digital e o ajuste preciso em tempo reduzido.",
  },
  {
    question: "Vocês oferecem financiamento ou parcelamento?",
    answer:
      "Sim. Trabalhamos com diversas opções de parcelamento para tornar o seu tratamento acessível, mantendo a qualidade premium. Nossa equipe apresentará as melhores condições durante a consulta de avaliação.",
  },
  {
    question: "Como é o acompanhamento pós-tratamento?",
    answer:
      "Oferecemos acompanhamento contínuo após cada tratamento, com consultas de manutenção e suporte dedicado. Nosso compromisso é com resultados duradouros e a sua satisfação a longo prazo.",
  },
];
