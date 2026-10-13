import type { CSSProperties } from "react";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { hero, messages } from "@/content/site";

const line = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * Abertura: a fotografia ocupa a metade esquerda, sangrando até a borda;
 * a direita é o slogan, em duas vozes, e o caminho para a cozinha.
 */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="paper relative flex flex-col overflow-hidden lg:block">
      {/* A foto (no celular, logo abaixo do menu) */}
      <div className="mt-16 lg:absolute lg:top-20 lg:bottom-12 lg:left-0 lg:mt-0 lg:w-[42vw]">
        <div data-hero-photo className="relative h-full">
          <Photo
            name="hero"
            preload
            tag="none"
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[16/10] sm:aspect-[2/1] lg:aspect-auto lg:h-full"
          />
        </div>
      </div>

      {/* O texto */}
      <div className="relative mx-auto flex w-full max-w-[90rem] flex-col px-4 pt-8 pb-14 sm:px-8 sm:pt-12 lg:grid lg:min-h-[max(100svh,46rem)] lg:grid-cols-12 lg:px-12 lg:pt-32 lg:pb-14">
        <div className="flex flex-col lg:col-span-6 lg:col-start-7 lg:justify-between">
          <h1 id="hero-title" className="text-cafe lg:mt-4">
            {[
              [hero.title[0], hero.title[1], ""],
              [hero.subtitle[0], hero.subtitle[1], "pl-[14%]"],
            ].map(([small, big, indent], pair) => (
              <span key={big} className={`block ${indent} ${pair ? "mt-4 lg:mt-6" : ""}`}>
                <span data-reveal-line className="-my-[0.1em] block overflow-hidden py-[0.1em]">
                  <span style={line(pair * 2)} className="font-serif text-[clamp(1.35rem,2.5vw,2.5rem)] font-light tracking-[-0.01em]">
                    {small}
                  </span>
                </span>
                <span data-reveal-line className="-my-[0.1em] block overflow-hidden py-[0.1em]">
                  <span style={line(pair * 2 + 1)} className="display text-[clamp(3.9rem,10vw,10.5rem)]">
                    {big}
                  </span>
                </span>
              </span>
            ))}
          </h1>

          <div data-hero-fade className="mt-7 flex flex-col gap-6 lg:mt-0 lg:gap-7">
            <p className="max-w-[26rem] text-[1.02rem] leading-relaxed text-pretty text-cafe-suave sm:text-[1.12rem]">{hero.text}</p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href="#a-cozinha"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-cafe px-6 py-3 font-medium text-creme transition-colors duration-300 hover:bg-verde active:translate-y-px"
              >
                {hero.cta}
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 transition-transform duration-300 ease-(--ease-cozinha) group-hover:translate-y-0.5">
                  <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <WhatsAppLink variant="text" message={messages.geral} className="text-cafe">
                {hero.secondaryCta}
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
