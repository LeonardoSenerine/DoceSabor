import { Wordmark } from "@/components/brand/Wordmark";
import { BayLeaf, HandRing } from "@/components/brand/marks";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { feijoada, services } from "@/content/site";

export function Feijoada() {
  const service = services.feijoada;

  return (
    <section id={service.anchor} aria-labelledby="feijoada-title" className="bg-barro text-creme">
      <div className="mx-auto max-w-[90rem] px-4 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-36 lg:pb-24">
        <Wordmark line={service.line} ruleClassName="bg-mostarda" className="text-[1.05rem]" />
        <h2
          id="feijoada-title"
          className="display-voice mt-10 text-[clamp(3.4rem,10vw,9.5rem)] font-semibold text-balance"
        >
          Mesa farta.
          <br />
          <span className="lg:pl-[12%]">Gente reunida.</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="max-w-[34rem] text-[1.2rem] leading-relaxed text-pretty">{feijoada.intro}</p>
            <dl className="mt-10 border-t border-creme/25">
              {feijoada.facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-creme/25 py-4">
                  <dt className="note text-[1.1rem] text-mostarda-claro">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-5 lg:col-start-8">
            <BayLeaf draw="scroll" weight={1.4} className="absolute -top-6 right-2 size-20 text-mostarda sm:size-24 lg:-top-10 lg:right-6" />
            <p data-rise className="relative px-10 py-8 text-center">
              <span className="block text-[1rem]">até</span>
              <span className="-my-[0.1em] block overflow-hidden py-[0.1em]">
                <span data-rise-item className="display-voice block text-[clamp(7rem,17vw,13.5rem)] font-semibold text-mostarda">
                  {feijoada.maxGuests}
                </span>
              </span>
              <span className="note mt-3 block text-[1.5rem]">convidados</span>
              <HandRing draw="scroll" weight={1.6} className="pointer-events-none absolute inset-0 size-full rotate-[-6deg] text-creme/80" />
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <Photo
          name="feijoadaMesa"
          sizes="100vw"
          tag="top-right"
          className="aspect-[4/3] sm:aspect-[2/1] lg:aspect-[12/5]"
          imgClassName="scale-[1.14]"
          imgProps={{ "data-parallax": "6" }}
        />
      </div>

      <div className="bg-brasa">
        <div className="mx-auto grid max-w-[90rem] gap-6 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-24">
          <Photo
            name="mesaReunida"
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="aspect-[3/2] lg:col-span-7"
            reveal
          />
          <div className="flex flex-col gap-10 lg:col-span-5">
            <Photo
              name="feijao"
              sizes="(min-width: 1024px) 36vw, 70vw"
              className="aspect-square w-[72%] self-end lg:mt-24 lg:w-[80%] lg:self-start"
              reveal
            />
            <div>
              <p data-split className="font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05] font-medium text-balance">
                Vai reunir gente? Conte a data e quantos convidados.
              </p>
              <WhatsAppLink message={service.message} className="mt-7 bg-creme text-barro hover:bg-mostarda hover:text-cafe">
                Pedir orçamento da feijoada
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
