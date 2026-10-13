import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/content/images";

/** Feijoadas e cozinheiros, alternados. O formato segue a orientação da foto. */
const slides: { name: PhotoKey; frame: string }[] = [
  { name: "feijoadaMesaCima", frame: "aspect-[3/2]" },
  { name: "cozinheiroMassa", frame: "aspect-[2/3]" },
  { name: "feijoadaCompleta", frame: "aspect-[2/3]" },
  { name: "cozinheiraBancada", frame: "aspect-[3/2]" },
  { name: "feijao", frame: "aspect-[3/2]" },
  { name: "cozinheiraEmpratando", frame: "aspect-[4/5]" },
  { name: "feijoadaLinguica", frame: "aspect-[2/3]" },
  { name: "cozinheiroFogao", frame: "aspect-[3/2]" },
  { name: "feijoadaPanelinha", frame: "aspect-[9/16]" },
  { name: "cozinheiraLegumes", frame: "aspect-[3/2]" },
];

/**
 * Fundo em movimento da seção da feijoada: feijoadas e cozinheiros passando
 * devagar, cobertos pela terracota da seção. É textura, não conteúdo: fica
 * escondido de leitores de tela e parado com movimento reduzido.
 */
export function FeijoadaCarousel() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <ul className="flex h-full w-max motion-safe:animate-[marquee_220s_linear_infinite]">
        {[...slides, ...slides].map((slide, index) => (
          <li key={index} className="h-full shrink-0 pr-2">
            <Photo name={slide.name} tag="none" sizes="40vw" className={`h-full ${slide.frame}`} />
          </li>
        ))}
      </ul>
      {/* A terracota por cima: as fotos aparecem só como uma lembrança */}
      <div className="absolute inset-0 bg-barro/[0.88]" />
    </div>
  );
}
