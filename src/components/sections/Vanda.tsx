import Image from "next/image";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrandSymbol, HandRing } from "@/components/brand/marks";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { services, vanda } from "@/content/site";

/** Espaço do retrato: mostra a foto real quando existir; até lá, um quadro reservado. */
function Portrait() {
  if (vanda.portrait) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden bg-cafe">
        <Image
          src={vanda.portrait.src}
          alt="Retrato de Vanda Camargo"
          width={vanda.portrait.width}
          height={vanda.portrait.height}
          sizes="(min-width: 1024px) 34vw, 90vw"
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Espaço reservado para o retrato de Vanda Camargo"
      className="paper relative flex aspect-[4/5] flex-col items-center justify-center bg-cafe px-8 text-center text-mostarda"
    >
      <BrandSymbol className="size-28 sm:size-36" weight={6} title="" aria-hidden="true" />
      <p aria-hidden="true" className="mt-8 font-serif text-[2rem] leading-none text-creme italic">
        Vanda Camargo
      </p>
      <p aria-hidden="true" className="mt-3 text-[0.9rem] text-creme/60">
        retrato em breve
      </p>
    </div>
  );
}

export function Vanda() {
  const service = services.vanda;

  return (
    <section id={service.anchor} aria-labelledby="vanda-title" className="bg-mostarda py-24 text-cafe lg:py-36">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Portrait />
            <Photo
              name="panelaNoFogao"
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="relative -mt-20 ml-auto aspect-square w-[48%] border-[6px] border-mostarda sm:-mt-28 lg:-mr-16"
              tag="bottom-left"
              reveal
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Wordmark line="Vanda Camargo" ruleClassName="bg-cafe" className="text-[1.05rem]" />
          <h2
            id="vanda-title"
            data-split
            className="mt-10 font-serif text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.95] font-medium tracking-[-0.03em] text-balance"
          >
            {service.title}
          </h2>
          <p className="mt-8 max-w-[34rem] text-[1.15rem] text-pretty">{vanda.intro}</p>

          <h3 className="mt-16 font-serif text-[1.9rem] leading-tight font-medium">Como funciona</h3>
          <ol className="mt-8 space-y-7 border-l border-cafe/30 pl-6 sm:pl-8">
            {vanda.steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-0 -left-[calc(1.5rem+0.8rem)] flex size-[1.6rem] items-center justify-center rounded-full bg-cafe text-[0.85rem] font-semibold text-mostarda sm:-left-[calc(2rem+0.8rem)]"
                >
                  {index + 1}
                </span>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-cafe/80">{step.text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-16 font-serif text-[1.9rem] leading-tight font-medium">Para quais ocasiões</h3>
          <ul className="mt-6 space-y-1">
            {vanda.occasions.map((occasion) => (
              <li key={occasion} className="font-serif text-[clamp(1.35rem,2.4vw,1.8rem)] leading-snug italic">
                {occasion}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[30rem] text-cafe/80">{vanda.occasionsNote}</p>

          <div className="relative mt-14 inline-block">
            <HandRing draw="scroll" weight={1.5} className="pointer-events-none absolute -inset-x-6 -inset-y-4 h-[calc(100%+2rem)] w-[calc(100%+3rem)] text-cafe" />
            <WhatsAppLink message={service.message} className="relative bg-cafe text-mostarda hover:bg-creme hover:text-cafe">
              Pedir orçamento à Vanda
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
