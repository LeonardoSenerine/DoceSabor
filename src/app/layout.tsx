import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces, Noto_Serif } from "next/font/google";
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

/** A serifa do logotipo oficial ("Doce & Sabor"). Só no logotipo. */
const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = `${brand.name} | Marmitas congeladas, personal chef e feijoada`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  authors: [{ name: brand.owner }],
  creator: brand.owner,
  publisher: brand.name,
  category: "food",
  keywords: [
    "marmitas congeladas",
    "marmita fit",
    "marmita low-carb",
    "marmita vegetariana",
    "kit de marmitas",
    "personal chef",
    "chef em casa",
    "buffet de feijoada",
    "feijoada para eventos",
    "Bragança Paulista",
    "Itatiba",
    "Campinas",
    "Santa Bárbara d'Oeste",
    brand.owner,
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Imagem da prévia: src/app/opengraph-image.jpg e twitter-image.jpg (gerar com `npm run og`)
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
  // Defina GOOGLE_SITE_VERIFICATION com o código do Google Search Console, quando houver.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  appleWebApp: { title: brand.name, statusBarStyle: "default" },
  formatDetection: { telephone: false, email: false, address: false },
  other: {
    // Área de atendimento confirmada pela marca.
    "geo.region": "BR-SP",
    "geo.placename": "Bragança Paulista, Itatiba, Campinas e Santa Bárbara d'Oeste",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcf1e1",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/**
 * Aplica .motion-ok antes da primeira pintura (sem esperar o React) quando o
 * visitante não pediu movimento reduzido. Se o JavaScript de animação não
 * subir em 4s, a classe sai e a página fica no estado final, estático.
 */
const motionScript = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches){d.classList.add('motion-ok');setTimeout(function(){if(!window.__dsMotion)d.classList.remove('motion-ok')},4000)}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${dmSans.variable} ${notoSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
