import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { brand } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = `${brand.name} — Marmitas congeladas, cozinheira particular e feijoada`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  authors: [{ name: brand.owner }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: brand.name,
    title,
    description: brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: brand.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fcf1e1",
};

/**
 * Aplica .motion-ok antes da primeira pintura (sem esperar o React) quando o
 * visitante não pediu movimento reduzido. Se o JavaScript de animação não
 * subir em 4s, a classe sai e a página fica no estado final, estático.
 */
const motionScript = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches){d.classList.add('motion-ok');setTimeout(function(){if(!window.__dsMotion)d.classList.remove('motion-ok')},4000)}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
