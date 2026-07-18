import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Odontologia Digital Premium | Tecnologia, Precisão e Excelência",
  description:
    "Clínica de odontologia digital premium. Combinamos inovação, scanner intraoral 3D, planejamento digital e atendimento personalizado para transformar o seu sorriso.",
  keywords: [
    "odontologia digital",
    "implantes dentários",
    "lentes de contato dental",
    "ortodontia",
    "clareamento dental",
    "scanner intraoral 3D",
    "clínica odontológica premium",
  ],
  authors: [{ name: "Clínica Odontológica Premium" }],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Odontologia Digital Premium | Tecnologia, Precisão e Excelência",
    description:
      "Combinamos inovação, equipamentos de última geração e atendimento personalizado para proporcionar uma experiência odontológica moderna, confortável e segura.",
    siteName: "Clínica Odontológica Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odontologia Digital Premium | Tecnologia, Precisão e Excelência",
    description:
      "Combinamos inovação, equipamentos de última geração e atendimento personalizado para uma experiência odontológica moderna e segura.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Clínica Odontológica Premium",
  description:
    "Clínica de odontologia digital premium com tecnologia de ponta, scanner intraoral 3D e atendimento personalizado.",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressLocality: "São Paulo",
    addressRegion: "SP",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1500",
  },
  openingHours: "Mo-Fr 08:00-19:00",
  medicalSpecialty: "Dentistry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
