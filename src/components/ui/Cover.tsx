import type { ReactNode } from "react";
import { Letters } from "@/components/brand/Letters";
import type { PhotoKey } from "@/content/images";
import { Photo } from "./Photo";

type CoverProps = {
  photo: PhotoKey;
  /** Título em linhas; cada linha entra letra por letra. */
  title: string[];
  titleId: string;
  /** Assinatura da frente, acima do título. */
  eyebrow?: ReactNode;
  /** Texto e botões abaixo do título. */
  children?: ReactNode;
  /** Cor da sombra (r g b). */
  shade?: string;
  /** Cor em que a foto termina embaixo (r g b), para emendar com o fundo da seção. */
  fadeTo?: string;
  /** Empilha como pasta: fica presa no topo enquanto a próxima parte sobe por cima. */
  stack?: boolean;
  className?: string;
};

/**
 * Abertura de seção: a foto ocupa a tela inteira e o título fica no centro,
 * em creme, sobre uma sombra que garante a leitura. A mesma linguagem do
 * hero, para que cada frente abra como um capítulo.
 */
export function Cover({ photo, title, titleId, eyebrow, children, shade = "43 19 7", fadeTo, stack = false, className = "" }: CoverProps) {
  const s = (alpha: number) => `rgb(${shade} / ${alpha})`;

  return (
    <div data-stack={stack || undefined} className={`relative isolate flex min-h-[88svh] items-center justify-center overflow-hidden text-center text-creme ${className}`}>
      <div data-zoom className="absolute inset-0 -z-10">
        <Photo name={photo} tag="none" quality={85} sizes="100vw" className="size-full bg-cafe" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 55%, ${s(0.66)}, transparent 80%), linear-gradient(to bottom, ${s(0.55)} 0%, ${s(0.2)} 28%, ${s(0.3)} 70%, ${fadeTo ? `rgb(${fadeTo})` : s(0.92)} 100%)`,
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-[64rem] flex-col items-center px-5 py-28 sm:px-8 lg:py-36">
        {eyebrow}
        <h2 id={titleId} className="display mt-8 text-[clamp(3rem,9vw,7.5rem)] [text-shadow:0_2px_28px_rgb(43_19_7/0.55)]">
          {title.map((line) => (
            <span key={line} className="block">
              <Letters text={line} mode="scroll" />
            </span>
          ))}
        </h2>
        {children ? (
          <div data-reveal className="mt-8 flex flex-col items-center gap-6 [text-shadow:0_1px_16px_rgb(43_19_7/0.6)] [&_a]:[text-shadow:none]">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}
