import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Wordmark } from "@/components/brand/Wordmark";
import { brand } from "@/content/site";

/*
 * Arte da capa de compartilhamento (Open Graph), 1200x630.
 * Só existe em desenvolvimento: `npm run og` abre esta página num Chrome/Edge
 * headless e salva a captura em src/app/opengraph-image.jpg e twitter-image.jpg.
 */
export const metadata: Metadata = {
  title: "Capa de compartilhamento",
  robots: { index: false, follow: false },
};

export default function OgCover() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    // Cobre o resto da página: a captura pega só este quadro de 1200x630
    <div className="fixed inset-0 z-[100] bg-cafe">
      <div id="og" className="relative h-[630px] w-[1200px] overflow-hidden bg-cafe text-creme">
        {/* Brilho mostarda atrás da logo */}
        <div className="absolute top-[40px] right-[-60px] size-[620px] rounded-full bg-mostarda/25 blur-[110px]" />

        {/* A logo oficial, em café sobre o bege da logo original, num disco */}
        <div className="absolute top-[35px] right-[-50px] grid size-[560px] place-items-center rounded-full bg-[#E3CAAC] pr-[90px] shadow-[0_30px_60px_rgba(0,0,0,0.45)] ring-[14px] ring-creme/10">
          <Wordmark tagline className="text-[54px] text-cafe" />
        </div>

        {/* Painel de texto */}
        <div className="relative flex h-full w-[720px] flex-col justify-center pb-[14px] pl-[72px]">
          <p className="text-[20px] font-semibold tracking-[0.16em] text-mostarda uppercase">Chef {brand.owner}</p>
          <p className="mt-[22px] font-serif text-[74px] leading-[1.02] tracking-[-0.01em]">Feita com cuidado.</p>
          <p className="font-serif text-[74px] leading-[1.02] tracking-[-0.01em] text-mostarda italic">
            Servida com afeto.
          </p>
          <p className="mt-[34px] text-[25px] font-semibold text-creme/90">
            Marmitas congeladas · Personal chef · Feijoada
          </p>
          <p className="mt-[12px] text-[18px] font-semibold tracking-[0.14em] text-mostarda uppercase">
            Bragança Paulista · Itatiba · Campinas
          </p>
        </div>

        {/* Faixa no rodapé, como nos outros projetos: uma cor por frente */}
        <div className="absolute inset-x-0 bottom-0 flex h-[14px]">
          <span className="flex-1 bg-verde-medio" />
          <span className="flex-1 bg-mostarda" />
          <span className="flex-1 bg-terracota" />
        </div>
      </div>
    </div>
  );
}
