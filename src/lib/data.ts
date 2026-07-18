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
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const aboutStats: Stat[] = [
  { value: "+15", label: "Anos de experiência" },
  { value: "+1.500", label: "Pacientes atendidos" },
  { value: "98%", label: "De satisfação" },
];

export const specialties: Specialty[] = [
  {
    title: "Implantes Dentários",
    description:
      "Reabilitação de alta precisão com planejamento digital reverso e implantes de titânio puro.",
    tag: "Reabilitação",
  },
  {
    title: "Lentes de Contato",
    description:
      "Facetas ultrafinas em cerâmica que redesenham o sorriso preservando a estrutura natural do dente.",
    tag: "Estética",
  },
  {
    title: "Ortodontia",
    description:
      "Alinhadores invisíveis e tecnologia tridimensional para resultados mais rápidos, confortáveis e previsíveis.",
    tag: "Alinhamento",
  },
  {
    title: "Clareamento",
    description:
      "Protocolos avançados para alcançar um branco luminoso, uniforme e natural com sensibilidade mínima.",
    tag: "Estética",
  },
  {
    title: "Próteses",
    description:
      "Peças esculpidas por sistema robótico CAD/CAM, garantindo adaptação perfeita e estética impecável.",
    tag: "Reabilitação",
  },
  {
    title: "Harmonização",
    description:
      "Intervenções pontuais e sofisticadas para resgatar o equilíbrio e a jovialidade do rosto.",
    tag: "Harmonia",
  },
  {
    title: "Prevenção",
    description:
      "Mapeamento digital contínuo focado em manter a saúde oral absoluta a longo prazo.",
    tag: "Prevenção",
  },
  {
    title: "Urgências",
    description:
      "Suporte imediato com infraestrutura completa para resolver intercorrências de alta complexidade.",
    tag: "Urgência",
  },
];

export const techItems: TechItem[] = [
  {
    icon: ScanLine,
    title: "Scanner 3D",
    description:
      "Mapeamento intraoral ultrarrápido em alta resolução, dispensando o desconforto das moldagens tradicionais.",
    image: "/media/scanner.jpg",
  },
  {
    icon: Monitor,
    title: "Planejamento Digital",
    description:
      "Arquitetura completa do sorriso projetada em software tridimensional antes de qualquer intervenção clínica.",
    image: "/media/smile_planning.jpg",
  },
  {
    icon: Camera,
    title: "Radiografia Digital",
    description:
      "Diagnóstico profundo com radiação reduzida a níveis mínimos, assegurando segurança e precisão cirúrgica.",
    image: "/media/digital_scanner.jpg",
  },
  {
    icon: Cpu,
    title: "Robótica CAD/CAM",
    description:
      "Escultura de restaurações cerâmicas no mesmo dia, aliando altíssima resistência a um refinamento estético sem igual.",
    image: "/media/implant.jpg",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Análise preditiva de imagens e algoritmos dedicados a elevar o grau de previsibilidade e sucesso a longo prazo.",
    image: "/media/treating.jpg",
  },
  {
    icon: Sparkles,
    title: "Ecossistema Digital",
    description:
      "Integração de dados ponta a ponta. Menos margem para erros, processos mais enxutos e resultados extraordinários.",
    image: "/media/clinic.jpg",
  },
];

export const differences: DifferenceItem[] = [
  {
    icon: Target,
    title: "Precisão Cirúrgica",
    description:
      "Planejamento guiado que traduz dados em intervenções milimétricas, permitindo recuperações aceleradas e silenciosas.",
  },
  {
    icon: Heart,
    title: "Conforto Absoluto",
    description:
      "Ambientes desenhados para acolher. Nossos protocolos de sedação consciente transformam o atendimento em uma experiência serena.",
  },
  {
    icon: Shield,
    title: "Biossegurança",
    description:
      "Adotamos padrões internacionais de esterilização e controle cruzado de infecções. Sem atalhos. Sem concessões.",
  },
  {
    icon: Sparkles,
    title: "Naturalidade",
    description:
      "Acreditamos que a verdadeira estética é imperceptível. Criamos sorrisos que complementam sua identidade, nunca a ofuscam.",
  },
  {
    icon: Users,
    title: "Cuidado Humanizado",
    description:
      "A tecnologia jamais substitui o olhar atencioso. Nossa equipe é treinada para escutar, entender e priorizar você.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Um diálogo inicial focado em compreender profundamente suas expectativas, histórico e necessidades.",
  },
  {
    number: "02",
    title: "Mapeamento",
    description:
      "Coleta de dados através de scanners e exames digitais, criando o seu avatar odontológico 3D.",
  },
  {
    number: "03",
    title: "Arquitetura",
    description:
      "Apresentação do projeto do seu novo sorriso, simulando o resultado estético e funcional com exatidão.",
  },
  {
    number: "04",
    title: "Execução",
    description:
      "Implementação do plano terapêutico em ambiente premium, utilizando as tecnologias de fronteira da clínica.",
  },
  {
    number: "05",
    title: "Preservação",
    description: "Protocolo exclusivo de manutenção contínua para assegurar a longevidade da sua saúde oral.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/media/smile.jpg",
    alt: "Beautiful smile",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/media/veneers.jpg",
    alt: "Dental veneers",
  },
  {
    src: "/media/implant.jpg",
    alt: "Implant treatment",
  },
  {
    src: "/media/scanner.jpg",
    alt: "Digital scanner",
    span: "sm:col-span-2",
  },
  {
    src: "/media/treating.jpg",
    alt: "Premium dental consultation",
  },
  {
    src: "/media/clinic.jpg",
    alt: "Premium dental clinic",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mariana Albuquerque",
    role: "Executiva",
    text: "A abordagem é diferente de tudo que já vi. A precisão do planejamento digital me deu uma tranquilidade absoluta, e o resultado final é de uma naturalidade ímpar.",
    image: "/media/dentist_portrait.jpg",
  },
  {
    name: "Ricardo Mendes",
    role: "Empresário",
    text: "Fiz a reabilitação completa em tempo recorde graças ao fluxo digital. Ambiente sofisticado, equipe impecável. Um serviço verdadeiramente de alto nível.",
  },
  {
    name: "Carolina Ferreira",
    role: "Arquiteta",
    text: "O cuidado com os mínimos detalhes impressiona. As lentes de contato redesenharam meu sorriso e elevaram minha autoconfiança de forma que eu não imaginava ser possível.",
  },
  {
    name: "Felipe Andrade",
    role: "Diretor de Arte",
    text: "Desde a recepção até a cadeira do dentista, a experiência é irretocável. Os alinhadores invisíveis corrigiram meu sorriso sem impactar minha rotina.",
  },
  {
    name: "Beatriz Costa",
    role: "Médica",
    text: "Busquei a clínica pela tecnologia, mas o que me fidelizou foi a empatia da equipe. O resultado ficou harmônico e superou amplamente as minhas expectativas.",
  },
  {
    name: "Gustavo Lima",
    role: "Advogado",
    text: "Eficiência e luxo. Em poucas sessões saí com um sorriso que mudou a minha comunicação não-verbal. Uma odontologia que entrega rigorosamente o que promete.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Como funciona a primeira avaliação?",
    answer:
      "A primeira visita consiste em um diagnóstico imersivo. Realizamos escaneamento intraoral e tomografias, desenhando um plano terapêutico focado na sua saúde e estética, apresentado com total transparência.",
  },
  {
    question: "O escaneamento digital substitui completamente as moldagens?",
    answer:
      "Absolutamente. A tecnologia 3D garante maior conforto e exatidão, descartando a necessidade daquelas massas de moldagem desconfortáveis do passado.",
  },
  {
    question: "Os procedimentos causam algum desconforto?",
    answer:
      "Nossa filosofia é pautada pelo conforto. Utilizamos anestesia computadorizada e, em intervenções mais longas, disponibilizamos sedação consciente acompanhada por médicos especialistas.",
  },
  {
    question: "Quanto tempo dura o processo das lentes de contato dental?",
    answer:
      "Devido ao nosso laboratório robótico interno (CAD/CAM), frequentemente conseguimos planejar, esculpir e finalizar a aplicação das lentes de porcelana em apenas duas sessões clínicas.",
  },
  {
    question: "Vocês trabalham com planos de saúde ou convênios?",
    answer:
      "Atuamos de forma particular para garantir um padrão de excelência, tempo de cadeira adequado e materiais de primeira linha. Fornecemos documentação completa para pedidos de reembolso, caso seu plano ofereça.",
  },
  {
    question: "Quais as facilidades para o investimento no tratamento?",
    answer:
      "Entendemos o valor do seu investimento. Disponibilizamos opções de parcelamento inteligente e estruturação financeira adaptada à jornada do seu plano de tratamento.",
  },
];
