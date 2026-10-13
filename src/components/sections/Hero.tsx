import type { CSSProperties } from "react";
import { Letters } from "@/components/brand/Letters";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { hero, messages } from "@/content/site";

/** Atraso de entrada, em milissegundos, para a coreografia em CSS. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * Abertura: o banquete ocupa a tela inteira e a assinatura fica no centro,
 * em creme, sobre uma sombra que garante a leitura. As palavras pequenas
 * sobem inteiras; as grandes entram letra por letra.
 */
export function Hero() {
  const pairs = [
    { small: hero.title[0], big: hero.title[1], at: 0 },
    { small: hero.subtitle[0], big: hero.subtitle[1], at: 520 },
  ];

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-brasa text-creme">
      <div className="absolute inset-0 -z-10">
        <div data-hero-photo className="relative h-full">
          <Photo name="hero" preload quality={85} tag="none" sizes="100vw" className="size-full bg-brasa" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_55%,rgb(43_19_7/0.68),transparent_80%),linear-gradient(to_bottom,rgb(43_19_7/0.6)_0%,rgb(43_19_7/0.2)_28%,rgb(43_19_7/0.3)_68%,rgb(43_19_7/0.88)_100%)]"
          />
        </div>
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[72rem] flex-col items-center justify-center px-5 pt-24 pb-16 text-center sm:px-8">
        <h1 id="hero-title" className="[text-shadow:0_2px_28px_rgb(43_19_7/0.55)]">
          {pairs.map(({ small, big, at }, pair) => (
            <span key={big} className={`block ${pair ? "mt-3 sm:mt-5" : ""}`}>
              <span className="-my-[0.1em] block overflow-hidden py-[0.1em]">
                <span
                  data-hero-word
                  style={delay(at + 80)}
                  className="inline-block font-serif text-[clamp(1.4rem,3vw,2.6rem)] font-light tracking-[-0.01em]"
                >
                  {small}
                </span>
              </span>
              <span className="-my-[0.12em] block overflow-hidden py-[0.12em]">
                <span className="display block text-[clamp(4.2rem,13vw,11rem)]">
                  <Letters text={big} start={at + 220} />
                </span>
              </span>
            </span>
          ))}
        </h1>

        <div data-hero-fade className="mt-8 flex flex-col items-center gap-6 lg:mt-10">
          <p className="max-w-[30rem] text-[1.04rem] leading-relaxed text-pretty text-creme/90 [text-shadow:0_1px_16px_rgb(43_19_7/0.6)] sm:text-[1.15rem]">
            {hero.text}
          </p>
          <div className="flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row">
            <WhatsAppLink message={messages.geral} className="bg-mostarda text-cafe hover:bg-creme">
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
    </section>
  );
}
