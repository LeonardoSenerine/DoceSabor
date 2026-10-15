import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FORK_PATH, SPOON_PATH } from "@/components/brand/LogoMark";
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

/** O prato da logo em tamanho grande, sobre um disco bege (o fundo da logo original). */
function Plate({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-50 -50 100 100" fill="none" aria-hidden="true" className={className}>
      <circle r="49" fill="#E3CAAC" />
      <g className="text-cafe">
        <circle r="37" stroke="currentColor" strokeWidth="6" />
        <path d="M-21.5 -12.5 A25 25 0 0 1 21.5 -12.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M21.5 12.5 A25 25 0 0 1 -21.5 12.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="-25" r="2.3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="25" r="2.3" stroke="currentColor" strokeWidth="1.8" />
        <path d={FORK_PATH} fill="currentColor" transform="rotate(-42)" />
        <path d={SPOON_PATH} fill="currentColor" transform="rotate(42)" />
      </g>
    </svg>
  );
}

export default function OgCover() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    // Cobre o resto da página: a captura pega só este quadro de 1200x630
    <div className="fixed inset-0 z-[100] bg-cafe">
      <div id="og" className="relative h-[630px] w-[1200px] overflow-hidden bg-cafe text-creme">
        {/* Brilho mostarda atrás do prato */}
        <div className="absolute top-[40px] right-[-60px] size-[620px] rounded-full bg-mostarda/25 blur-[110px]" />

        {/* O prato da logo, cortado na borda, no lugar da foto */}
        <Plate className="absolute top-[22px] right-[-150px] size-[586px] rotate-[-8deg] drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]" />

        {/* Painel de texto */}
        <div className="relative flex h-full w-[720px] flex-col justify-center pb-[14px] pl-[72px]">
          <Wordmark tagline className="text-[40px] text-creme" />
          <p className="mt-[42px] font-serif text-[74px] leading-[1.02] tracking-[-0.01em]">Feita com cuidado.</p>
          <p className="font-serif text-[74px] leading-[1.02] tracking-[-0.01em] text-mostarda italic">
            Servida com afeto.
          </p>
          <p className="mt-[34px] text-[25px] font-semibold text-creme/90">
            Marmitas congeladas · Personal chef · Feijoada
          </p>
          <p className="mt-[12px] text-[18px] font-semibold tracking-[0.14em] text-mostarda uppercase">
            Chef {brand.owner} · Bragança Paulista e região
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
