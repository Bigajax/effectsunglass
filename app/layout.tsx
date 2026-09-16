import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { site } from "@/data/site.config";
import "./globals.css";

/* A Unbounded, larga e pesada, faz a manchete e os títulos: é a
   tipografia de "enxergue o futuro". A Manrope faz o corpo, os nomes
   das peças e os botões. */
const display = Unbounded({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--fonte-display",
  display: "swap",
});

const corpo = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fonte-corpo",
  display: "swap",
});

const TITULO = "Effect Sunglasses: óculos de sol com design arrojado e proteção UV400";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITULO,
    template: "%s · effect",
  },
  description: "Óculos de sol da Effect: quadrados, redondos, ovais e esportivos, todos com proteção UV400. Escolhe o seu, pede pelo WhatsApp e recebe em qualquer lugar do Brasil.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Effect Sunglasses",
    url: site.url,
    title: TITULO,
    description: site.posicionamento,
    images: [{ url: "/og/site.jpg", width: 1200, height: 630, alt: "effect sunglasses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: site.posicionamento,
    images: ["/og/site.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${corpo.variable} antialiased`}>{children}</body>
    </html>
  );
}
