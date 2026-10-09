import type { CSSProperties } from "react";
import { Stamp } from "@/components/brand/kitchen";
import { PinnedPhoto } from "@/components/ui/PinnedPhoto";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { messages } from "@/content/site";

const line = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * Hero como página de caderno: a frase-assinatura é a estrutura da
 * composição, em duas vozes de escala. Sobre ela, uma foto impressa
 * presa com fita crepe e o selo de origem com a área de atendimento.
 */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="paper relative overflow-hidden">
      <div className="relative mx-auto max-w-[90rem] px-4 pt-24 pb-16 sm:px-8 lg:min-h-[max(100svh,50rem)] lg:px-12 lg:pt-32 lg:pb-14">
        <h1 id="hero-title" data-hero-depth="title" className="display-voice relative text-cafe">
          <span data-reveal-line className="-my-[0.12em] block overflow-hidden py-[0.12em]">
            <span style={line(0)} className="text-[clamp(1.6rem,3vw,2.9rem)] font-light tracking-[-0.015em]">
              Feita com
            </span>
          </span>
          <span data-reveal-line className="-my-[0.12em] block overflow-hidden py-[0.12em]">
            <span style={line(1)} className="text-[clamp(4.3rem,13.5vw,13rem)] font-semibold">
              cuidado.
            </span>
          </span>
          <span data-reveal-line className="-my-[0.12em] mt-[0.3em] block overflow-hidden py-[0.12em] pl-[18%] lg:pl-[22%]">
            <span style={line(2)} className="text-[clamp(1.6rem,3vw,2.9rem)] font-light tracking-[-0.015em]">
              Servida com
            </span>
          </span>
          <span data-reveal-line className="-my-[0.12em] block overflow-hidden py-[0.12em] pl-[18%] lg:pl-[22%]">
            <span style={line(3)} className="text-[clamp(4.3rem,13.5vw,13rem)] font-semibold">
              afeto.
            </span>
          </span>
        </h1>

        {/* Foto impressa e selo */}
        <div
          data-hero-depth="photo"
          className="relative mt-8 ml-auto w-[60%] sm:mt-12 sm:w-[46%] lg:absolute lg:top-24 lg:right-[max(3rem,6vw)] lg:mt-0 lg:w-[min(31vw,30rem)]"
        >
          <PinnedPhoto
            name="hero"
            caption="prato do dia"
            tilt={3}
            preload
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 60vw"
            dataAttrs={{ "data-hero-print": "" }}
          />
          <Stamp
            text="a cozinha da Vanda, em Campinas, São Paulo e interior,"
            label="Atendimento em Campinas, São Paulo e interior do estado"
            className="absolute bottom-6 -left-[62%] w-[52%] -rotate-12 text-cafe sm:-left-[58%] sm:w-[44%] lg:-bottom-[9%] lg:-left-[24%] lg:w-[40%]"
          />
        </div>

        <div data-hero-fade className="mt-10 max-w-[31rem] sm:mt-14 lg:mt-12">
          <p className="text-[1.08rem] leading-relaxed text-pretty text-cafe-suave lg:text-[1.15rem]">
            A cozinha da Vanda Camargo em três formas: marmitas congeladas para a rotina, uma cozinheira particular
            na sua casa e feijoada servida no seu evento.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
            <WhatsAppLink message={messages.geral} className="bg-cafe text-creme hover:bg-verde">
              Pedir pelo WhatsApp
            </WhatsAppLink>
            <a href="#servicos" className="min-h-11 py-2 font-medium underline decoration-1 underline-offset-[6px] hover:decoration-2">
              Ver os três serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
