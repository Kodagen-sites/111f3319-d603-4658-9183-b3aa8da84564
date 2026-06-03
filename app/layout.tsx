import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import { FilmGrain } from "@/components/motion";
import "./globals.css";
import EditorBridge from "../components/__kodagen/EditorBridge";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = siteConfig.seo.siteUrl || "https://velocityracing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    template: `%s — ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.company.name,
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-bg text-ink antialiased">
        <div className="relative min-h-screen overflow-x-hidden bg-bg">
          <Header />
          {children}
          <Footer />
          <FilmGrain opacity={0.03} blendMode="multiply" />
        </div>
        <EditorBridge />
      </body>
    </html>
  );
}
