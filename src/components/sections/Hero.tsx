import type { CSSProperties } from "react";
import { HandArrow, HandRing } from "@/components/brand/marks";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { messages, serviceOrder, services } from "@/content/site";

const fronts = {
  marmitas: { dot: "bg-verde", hint: "para a rotina" },
  vanda: { dot: "bg-mostarda", hint: "na sua casa" },
  feijoada: { dot: "bg-terracota", hint: "para a sua festa" },
} as const;

/**
 * Hero: o prato visto de cima entra pela borda da tela, cortado por dois
 * lados — como um prato que alguém acabou de pousar no canto da mesa.
 * A frase-assinatura ocupa o lado oposto, em duas vozes de escala.
 */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="paper relative overflow-hidden">
      {/* Prato */}
      <div
        className="pointer-events-none relative h-[106vw] sm:h-[66vw] lg:absolute lg:inset-0 lg:h-auto">
        <div data-hero-depth="plate" className="absolute top-[18vw] right-[-30vw] w-[96vw] sm:top-[2vw] sm:right-[-18vw] sm:w-[76vw] lg:top-[9vh] lg:right-[-11vw] lg:w-[min(56vw,60rem)]">
          <div className="relative aspect-square">
            {/* Anotação de caderno, apontando para o prato */}
            <p
              data-hero-fade
              className="note absolute top-[3%] right-[calc(100%+4.5rem)] hidden w-52 text-right text-[1.12rem] text-cafe-suave xl:block"
            >
              comida de verdade, feita para estar à mesa
              <HandArrow draw="load" className="absolute top-3 -right-[5.5rem] w-24 text-cafe/60" />
            </p>
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div data-hero-plate className="absolute inset-0">
                <Photo
                  name="hero"
                  preload
                  tag="none"
                  sizes="(min-width: 1024px) 56vw, (min-width: 640px) 76vw, 96vw"
                  className="size-full"
                />
              </div>
            </div>
            <HandRing
              draw="load"
              weight={1.5}
              className="absolute -inset-[13%] z-10 size-[126%] -translate-x-[3%] translate-y-[2%] -rotate-[14deg] text-cafe/70"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[90rem] px-4 pb-10 sm:px-8 lg:flex lg:min-h-[max(100svh,46rem)] lg:flex-col lg:px-12 lg:pt-36 lg:pb-12">
        <div data-hero-depth="title" className="lg:max-w-[52%]">
          <h1 id="hero-title" className="display-voice text-cafe">
            <span data-reveal-line className="-my-[0.12em] block overflow-hidden py-[0.12em]">
              <span style={{ "--i": 0 } as CSSProperties} className="text-[clamp(1.55rem,3vw,2.75rem)] font-light tracking-[-0.015em]">
                Feita com
              </span>
            </span>
            <span data-reveal-line className="-my-[0.12em] block overflow-hidden py-[0.12em]">
              <span style={{ "--i": 1 } as CSSProperties} className="text-[clamp(4.1rem,11.2vw,10.75rem)] font-semibold">
                cuidado.
              </span>
            </span>
            <span data-reveal-line className="-my-[0.12em] mt-[0.35em] block overflow-hidden py-[0.12em] pl-[14%]">
              <span style={{ "--i": 2 } as CSSProperties} className="text-[clamp(1.55rem,3vw,2.75rem)] font-light tracking-[-0.015em]">
                Servida com
              </span>
            </span>
            <span data-reveal-line className="-my-[0.12em] block overflow-hidden py-[0.12em] pl-[14%]">
              <span style={{ "--i": 3 } as CSSProperties} className="text-[clamp(4.1rem,11.2vw,10.75rem)] font-semibold">
                afeto.
              </span>
            </span>
          </h1>

          <div data-hero-fade className="mt-8 max-w-[31rem] lg:mt-10">
            <p className="text-pretty text-[1.08rem] leading-relaxed text-cafe-suave lg:text-[1.15rem]">
              A cozinha da Vanda Camargo em três formas: marmitas congeladas para a rotina, uma cozinheira
              particular na sua casa e feijoada servida no seu evento. Em Campinas, São Paulo e interior.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <WhatsAppLink message={messages.geral} className="bg-cafe text-creme hover:bg-verde">
                Pedir pelo WhatsApp
              </WhatsAppLink>
              <a href="#servicos" className="min-h-11 py-2 font-medium underline decoration-1 underline-offset-[6px] hover:decoration-2">
                Conhecer os três serviços
              </a>
            </div>
          </div>
        </div>

        {/* As três frentes — a legenda de cores do sistema */}
        <nav aria-label="Serviços" data-hero-fade className="mt-12 lg:mt-auto lg:max-w-[58%] lg:pt-12">
          <ul className="grid border-t border-cafe/20 sm:grid-cols-3">
            {serviceOrder.map((id) => (
              <li key={id} className="border-b border-cafe/20 sm:border-b-0">
                <a href={`#${services[id].anchor}`} className="group flex items-start gap-3 py-4 sm:pr-4">
                  <span aria-hidden="true" className={`mt-[0.45em] size-2.5 shrink-0 rounded-full ${fronts[id].dot}`} />
                  <span>
                    <span className="block font-medium group-hover:underline group-hover:underline-offset-4">
                      {services[id].kind}
                    </span>
                    <span className="note block text-[0.98rem] text-cafe-suave">{fronts[id].hint}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
