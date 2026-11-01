import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { SITE_URL } from "@/lib/site-url";
import { LocalBusinessJsonLd } from "@/components/site/local-business-jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mediador de Seguros em Amadora | RSF | Brokers",
    template: "%s | RSF | Brokers",
  },
  description:
    "Mediação de seguros multimarca para particulares e empresas em Amadora. Automóvel, habitação, saúde, vida, crédito habitação e mais. Peça orçamento gratuito.",
  keywords: [
    "mediador de seguros Amadora",
    "seguros multimarca",
    "seguro automóvel",
    "seguro habitação",
    "seguro vida crédito habitação",
    "seguro saúde",
    "seguro empresas",
    "RSF Brokers",
    "Sérgio Fernandes",
    "comparação seguradoras",
  ],
  authors: [{ name: "RSF | Brokers" }],
  creator: "RSF | Brokers",
  publisher: "RSF | Brokers",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mediador de Seguros em Amadora | RSF | Brokers",
    description:
      "Seguros para particulares e empresas, com comparação entre várias seguradoras. Análise das necessidades, recomendação equilibrada entre preço e serviço.",
    url: SITE_URL,
    siteName: "RSF | Brokers",
    locale: "pt_PT",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RSF | Brokers — Negócios Seguros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediador de Seguros em Amadora | RSF | Brokers",
    description:
      "Seguros multimarca para particulares e empresas. Análise, comparação e recomendação entre várias seguradoras.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Exigido pela CSP com nonce por pedido em src/proxy.ts: o nonce só existe
// depois de o pedido chegar, por isso nenhuma página pode ser pré-gerada em
// build time (SSG) — ver comentário em src/proxy.ts.
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
