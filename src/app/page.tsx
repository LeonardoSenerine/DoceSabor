import { Motion } from "@/components/motion/Motion";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Cozinha } from "@/components/sections/Cozinha";
import { Feijoada } from "@/components/sections/Feijoada";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Marmitas } from "@/components/sections/Marmitas";
import { Particular } from "@/components/sections/Particular";
import { Testimonials } from "@/components/sections/Testimonials";
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
        {/* As três primeiras seções se empilham como pastas; o bloco limita o
            efeito, para que elas parem de ficar presas ao fim das Marmitas. */}
        <div>
          <Hero />
          <Cozinha />
          <Marmitas />
        </div>
        <Particular />
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
