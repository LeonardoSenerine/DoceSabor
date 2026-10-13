import { Wordmark } from "@/components/brand/Wordmark";
import { Cover } from "@/components/ui/Cover";
import { Figure } from "@/components/ui/Figure";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { services, vanda } from "@/content/site";

/**
 * Cozinheira particular: abre com as panelas no fogão de casa em tela cheia;
 * depois, o passo a passo em três colunas e as ocasiões ao lado de uma foto
 * de preparo.
 */
export function Particular() {
  const service = services.vanda;

  return (
    <section id={service.anchor} aria-labelledby="particular-title" className="paper bg-creme-escuro">
      <Cover
        photo="cozinheiraCapa"
        title={["Uma cozinheira", "na sua casa."]}
        titleId="particular-title"
        eyebrow={<Wordmark line={service.line} className="text-[1.05rem]" />}
      >
        <p className="max-w-[34rem] font-serif text-[clamp(1.25rem,2vw,1.55rem)] leading-snug text-pretty">{vanda.intro}</p>
        <WhatsAppLink message={service.message} className="mt-2 bg-mostarda text-cafe hover:bg-creme">
          {service.cta}
        </WhatsAppLink>
      </Cover>

      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <h3 className="font-serif text-[1.6rem] leading-tight">Como funciona</h3>
        <ol data-reveal className="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
          {vanda.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-mostarda pt-5">
              <p className="font-serif text-[1.45rem] leading-tight">
                <span className="text-mostarda-escuro">{index + 1}.</span> {step.title}
              </p>
              <p className="mt-3 max-w-[22rem] text-pretty text-cafe-suave">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid items-center gap-12 lg:mt-28 lg:grid-cols-12 lg:gap-12">
          <Figure
            name="cozinheiraPreparo"
            sizes="(min-width: 1024px) 34vw, 100vw"
            frame="aspect-[4/3] lg:aspect-[4/5]"
            className="lg:col-span-5"
          />
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="font-serif text-[1.6rem] leading-tight">Para quais ocasiões</h3>
            <ul className="mt-6 space-y-3 font-serif text-[clamp(1.3rem,2.2vw,1.7rem)] leading-snug">
              {vanda.occasions.map((occasion) => (
                <li key={occasion}>{occasion}</li>
              ))}
            </ul>
            <p className="mt-6 max-w-[32rem] text-cafe-suave">{vanda.occasionsNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
