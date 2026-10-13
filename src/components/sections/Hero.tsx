import type { CSSProperties } from "react";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { hero, messages } from "@/content/site";

/** Atraso de entrada, em milissegundos, para a coreografia em CSS. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * A palavra grande da assinatura, letra por letra. Cada letra sobe por trás
 * da máscara da linha, em sequência. Leitores de tela recebem a palavra
 * inteira; as letras soltas ficam escondidas deles.
 */
function Letters({ word, start }: { word: string; start: number }) {
  return (
    <>
      <span className="sr-only">{word}</span>
      <span aria-hidden="true" data-letters>
        {Array.from(word).map((char, index) => (
          <span key={index} style={{ ...delay(start), "--c": index } as CSSProperties}>
            {char}
          </span>
        ))}
      </span>
    </>
  );
}

/**
 * Abertura.
 *
 * - Computador: a foto ocupa a metade esquerda, sangrando até a borda; a
 *   direita é a assinatura em duas vozes e o caminho para falar com a Vanda.
 * - Celular e tablet: a foto vira o fundo da tela inteira e a assinatura
 *   fica centralizada por cima, em creme, sobre uma sombra que garante a
 *   leitura.
 */
export function Hero() {
  const pairs = [
    { small: hero.title[0], big: hero.title[1], at: 0, indent: "" },
    { small: hero.subtitle[0], big: hero.subtitle[1], at: 520, indent: "lg:pl-[14%]" },
  ];

  return (
    <section id="inicio" aria-labelledby="hero-title" className="paper relative isolate overflow-hidden">
      {/* A foto: fundo no celular e no tablet, página da esquerda no computador */}
      <div className="absolute inset-0 -z-10 lg:inset-auto lg:top-20 lg:bottom-12 lg:left-0 lg:z-0 lg:w-[42vw]">
        <div data-hero-photo className="relative h-full">
          <Photo name="hero" preload tag="none" sizes="(min-width: 1024px) 42vw, 100vw" className="size-full bg-brasa" />
          {/* Sombra para a letra creme (só fora do computador) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_52%,rgb(43_19_7/0.55),transparent_75%),linear-gradient(to_bottom,rgb(43_19_7/0.6)_0%,rgb(43_19_7/0.2)_30%,rgb(43_19_7/0.35)_65%,rgb(43_19_7/0.85)_100%)] lg:hidden"
          />
        </div>
      </div>

      {/* O texto */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[90rem] flex-col items-center justify-center px-5 pt-24 pb-16 text-center text-creme sm:px-8 lg:grid lg:min-h-[max(100svh,46rem)] lg:grid-cols-12 lg:items-stretch lg:px-12 lg:pt-32 lg:pb-14 lg:text-left lg:text-cafe">
        <div className="flex flex-col items-center lg:col-span-6 lg:col-start-7 lg:items-start lg:justify-between">
          <h1 id="hero-title" className="[text-shadow:0_2px_28px_rgb(43_19_7/0.55)] lg:mt-4 lg:[text-shadow:none]">
            {pairs.map(({ small, big, at, indent }, pair) => (
              <span key={big} className={`block ${indent} ${pair ? "mt-3 sm:mt-5 lg:mt-6" : ""}`}>
                <span className="-my-[0.1em] block overflow-hidden py-[0.1em]">
                  <span
                    data-hero-word
                    style={delay(at + 80)}
                    className="inline-block font-serif text-[clamp(1.4rem,3.4vw,2.5rem)] font-light tracking-[-0.01em]"
                  >
                    {small}
                  </span>
                </span>
                <span className="-my-[0.12em] block overflow-hidden py-[0.12em]">
                  <span className="display block text-[clamp(4.2rem,15vw,10.5rem)] lg:text-[clamp(3.9rem,10vw,10.5rem)]">
                    <Letters word={big} start={at + 220} />
                  </span>
                </span>
              </span>
            ))}
          </h1>

          <div data-hero-fade className="mt-8 flex flex-col items-center gap-6 lg:mt-0 lg:items-start lg:gap-7">
            <p className="max-w-[26rem] text-[1.04rem] leading-relaxed text-pretty text-creme/90 sm:text-[1.12rem] lg:text-cafe-suave">
              {hero.text}
            </p>
            <div className="flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row sm:flex-wrap">
              <WhatsAppLink message={messages.geral} className="bg-mostarda text-cafe hover:bg-creme lg:bg-cafe lg:text-creme lg:hover:bg-verde">
                {hero.cta}
              </WhatsAppLink>
              <a
                href="#a-cozinha"
                className="group inline-flex min-h-11 items-center gap-2 py-2 font-medium underline decoration-1 underline-offset-[6px] hover:decoration-2"
              >
                {hero.secondaryCta}
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 transition-transform duration-300 ease-(--ease-cozinha) group-hover:translate-y-0.5">
                  <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
