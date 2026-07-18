import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Specialty {
  title: string;
  description: string;
  tag: string;
}

export interface TechItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DifferenceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
