import { Wordmark } from "@/components/brand/Wordmark";
import { Figure } from "@/components/ui/Figure";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { services, vanda } from "@/content/site";

/**
 * Cozinheira particular: a frente mais íntima. Fundo creme escuro, a foto de
 * uma cozinha de casa em sangria à direita e o passo a passo em três colunas.
 */
export function Particular() {
  const service = services.vanda;

  return (
    <section id={service.anchor} aria-labelledby="particular-title" className="paper bg-creme-escuro py-20 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <Wordmark line={service.line} ruleClassName="bg-mostarda" className="text-[1.05rem]" />

        <h2 id="particular-title" data-split className="display mt-10 max-w-[11ch] text-[clamp(3rem,7.4vw,7.5rem)] text-balance">
          {service.title}
        </h2>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="flex flex-col justify-end lg:col-span-4">
            <p className="font-serif text-[clamp(1.35rem,2vw,1.7rem)] leading-snug text-pretty">{vanda.intro}</p>
            <WhatsAppLink message={service.message} className="mt-10 self-start bg-mostarda text-cafe hover:bg-cafe hover:text-mostarda">
              {service.cta}
            </WhatsAppLink>
          </div>

          <div className="-mx-4 sm:-mx-8 lg:col-span-7 lg:col-start-6 lg:mr-[calc(-1*max(3rem,(100vw_-_90rem)/2_+_3rem))] lg:ml-0">
            <Figure name="panelaNoFogao" sizes="(min-width: 1024px) 60vw, 100vw" frame="aspect-[3/2]" />
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
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
        </div>

        <div className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-12">
          <h3 className="font-serif text-[1.6rem] leading-tight lg:col-span-4">Para quais ocasiões</h3>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-3 font-serif text-[clamp(1.3rem,2.2vw,1.7rem)] leading-snug">
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
