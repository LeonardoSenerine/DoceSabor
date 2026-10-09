import { Motion } from "@/components/motion/Motion";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Feijoada } from "@/components/sections/Feijoada";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Marmitas } from "@/components/sections/Marmitas";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Vanda } from "@/components/sections/Vanda";
import { businessJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()).replace(/</g, "\\u003c") }}
      />
      <a
        href="#conteudo"
        className="sr-only z-50 bg-cafe px-4 py-3 text-creme focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Manifesto />
        <Marmitas />
        <Vanda />
        <Feijoada />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Motion />
    </>
  );
}
