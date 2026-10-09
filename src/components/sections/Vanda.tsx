import Image from "next/image";
import { Wordmark } from "@/components/brand/Wordmark";
import { Ficha, Tape, TapeStrip } from "@/components/brand/kitchen";
import { BrandSymbol, HandRing } from "@/components/brand/marks";
import { PinnedPhoto } from "@/components/ui/PinnedPhoto";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { services, vanda } from "@/content/site";

/**
 * Retrato da Vanda como foto impressa presa na página. Enquanto não houver
 * retrato real, o espaço mostra o símbolo e o nome. Nenhuma pessoa de banco
 * de imagens é apresentada como a Vanda.
 */
function Portrait() {
  return (
    <figure className="relative -rotate-2">
      <div className="bg-papel p-2 shadow-[0_1px_2px_rgb(59_31_14/0.14),0_22px_40px_-26px_rgb(59_31_14/0.55)] sm:p-3">
        {vanda.portrait ? (
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={vanda.portrait.src}
              alt="Retrato de Vanda Camargo"
              width={vanda.portrait.width}
              height={vanda.portrait.height}
              sizes="(min-width: 1024px) 34vw, 80vw"
              className="grade size-full object-cover"
            />
          </div>
        ) : (
          <div
            role="img"
            aria-label="Espaço reservado para o retrato de Vanda Camargo"
            className="paper flex aspect-[4/5] flex-col items-center justify-center bg-cafe text-mostarda"
          >
            <BrandSymbol className="size-28 sm:size-36" weight={6} title="" aria-hidden="true" />
          </div>
        )}
      </div>
      <TapeStrip tilt={-6} className="absolute -top-3 left-1/2 w-28 -translate-x-1/2" />
      <figcaption className="absolute -bottom-4 left-[10%]">
        <Tape tilt={1.5} className="text-[1.15rem]">
          Vanda Camargo
        </Tape>
      </figcaption>
    </figure>
  );
}

export function Vanda() {
  const service = services.vanda;

  return (
    <section id={service.anchor} aria-labelledby="vanda-title" className="relative overflow-hidden bg-creme py-24 lg:py-36">
      <div className="mx-auto grid max-w-[90rem] gap-16 px-4 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="relative lg:col-span-5">
          <div aria-hidden="true" className="absolute top-[8%] -left-4 h-[78%] w-[62%] bg-mostarda sm:-left-8 lg:-left-12" />
          <div className="relative w-[82%] sm:w-[70%] lg:w-[84%]">
            <Portrait />
          </div>
          <PinnedPhoto
            name="panelaNoFogao"
            caption="no fogão do cliente"
            tilt={4}
            aspect="aspect-square"
            sizes="(min-width: 1024px) 18vw, 45vw"
            className="relative -mt-24 ml-auto w-[52%] sm:-mt-40 sm:w-[44%] lg:-mt-28 lg:-mr-6 lg:w-[56%]"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Wordmark line="Vanda Camargo" ruleClassName="bg-mostarda" className="text-[1.05rem]" />
          <h2
            id="vanda-title"
            data-split
            className="mt-10 font-serif text-[clamp(2.75rem,6.2vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.03em] text-balance"
          >
            {service.title}
          </h2>
          <p className="mt-8 max-w-[34rem] font-serif text-[clamp(1.25rem,1.9vw,1.55rem)] leading-snug font-light text-pretty">
            {vanda.intro}
          </p>

          <Ficha kind="ficha" title="Como funciona" rule="bg-mostarda" className="mt-14 max-w-[36rem]">
            <ol>
              {vanda.steps.map((step, index) => (
                <li key={step.title} data-margin={`${index + 1}.`}>
                  <strong className="font-semibold">{step.title}.</strong> {step.text}
                </li>
              ))}
            </ol>
          </Ficha>

          <h3 className="mt-16 font-serif text-[1.65rem] leading-tight font-medium">Para quais ocasiões</h3>
          <ul className="mt-5 space-y-1.5">
            {vanda.occasions.map((occasion) => (
              <li key={occasion} className="note text-[clamp(1.3rem,2.2vw,1.65rem)] leading-snug">
                {occasion}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-[30rem] text-cafe-suave">{vanda.occasionsNote}</p>

          <div className="relative mt-12 inline-block">
            <HandRing
              draw="scroll"
              weight={1.5}
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 h-[calc(100%+2rem)] w-[calc(100%+3rem)] text-mostarda-escuro"
            />
            <WhatsAppLink message={service.message} className="relative bg-mostarda text-cafe hover:bg-cafe hover:text-mostarda">
              Pedir orçamento à Vanda
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
