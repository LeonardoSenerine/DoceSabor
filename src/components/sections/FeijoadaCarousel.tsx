import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/content/images";

/** Feijoadas e eventos, alternados. O formato segue a orientação da foto. */
const slides: { name: PhotoKey; frame: string }[] = [
  { name: "feijoadaMesaCima", frame: "aspect-[3/2]" },
  { name: "eventoServindo", frame: "aspect-[3/4]" },
  { name: "feijoadaCompleta", frame: "aspect-[3/4]" },
  { name: "eventoQuintal", frame: "aspect-[3/2]" },
  { name: "feijao", frame: "aspect-[3/2]" },
  { name: "eventoMesa", frame: "aspect-[3/2]" },
  { name: "feijoadaLinguica", frame: "aspect-[3/4]" },
  { name: "eventoGramado", frame: "aspect-[3/2]" },
  { name: "feijoadaPanelinha", frame: "aspect-[3/4]" },
];

/**
 * Faixa de fotos que passa devagar, sem setas nem pontos: um fundo de
 * cena, não um controle. Pausa sob o cursor ou o foco do teclado. Com
 * movimento reduzido, fica parada e pode ser rolada com o dedo.
 */
export function FeijoadaCarousel() {
  return (
    <div
      role="region"
      aria-label="Fotos de feijoadas e eventos"
      tabIndex={0}
      className="group overflow-x-auto [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] focus-visible:outline-offset-[-4px] motion-safe:overflow-hidden"
    >
      <ul className="flex w-max motion-safe:animate-[marquee_80s_linear_infinite] motion-safe:group-hover:[animation-play-state:paused] motion-safe:group-focus-visible:[animation-play-state:paused]">
        {[...slides, ...slides].map((slide, index) => {
          const copy = index >= slides.length;
          return (
            <li key={index} aria-hidden={copy || undefined} className={`shrink-0 pr-3 sm:pr-4 ${copy ? "motion-reduce:hidden" : ""}`}>
              <Photo
                name={slide.name}
                tag="none"
                sizes="(min-width: 1024px) 34vw, 70vw"
                className={`h-56 sm:h-72 lg:h-[22rem] ${slide.frame}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
