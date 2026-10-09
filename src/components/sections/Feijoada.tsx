import { Wordmark } from "@/components/brand/Wordmark";
import { BayLeaf, HandRing } from "@/components/brand/marks";
import { Photo } from "@/components/ui/Photo";
import { feijoada, services } from "@/content/site";
import { FeijoadaQuote } from "./FeijoadaQuote";

/**
 * Feijoada de Raiz: a frente mais intensa. Abre com a panela no fogo em
 * sangria total, título de cartaz sobre uma sombra de brasa, e fecha com a
 * ficha de orçamento do evento.
 */
export function Feijoada() {
  const service = services.feijoada;

  return (
    <section id={service.anchor} aria-labelledby="feijoada-title" className="bg-barro text-creme">
      {/* Abertura: foto de fundo com sombra de brasa sob o texto */}
      <div className="relative isolate flex min-h-[88svh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Photo
            name="feijoadaPanela"
            sizes="100vw"
            tag="top-right"
            tagTone="dark"
            className="size-full bg-brasa"
            imgClassName="scale-[1.14]"
            imgProps={{ "data-parallax": "6" }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(75_23_10/0.96)_0%,rgb(75_23_10/0.78)_32%,rgb(75_23_10/0.25)_62%,rgb(75_23_10/0.05)_100%)] lg:bg-[linear-gradient(to_top,rgb(75_23_10/0.95)_0%,rgb(75_23_10/0.7)_30%,transparent_70%),linear-gradient(to_right,rgb(75_23_10/0.55),transparent_60%)]"
        />
        <div className="mx-auto w-full max-w-[90rem] px-4 pt-40 pb-14 sm:px-8 lg:px-12 lg:pb-20">
          <Wordmark line={service.line} ruleClassName="bg-mostarda" className="text-[1.05rem]" />
          <h2
            id="feijoada-title"
            className="display-voice mt-8 text-[clamp(3.4rem,10vw,9.5rem)] font-semibold text-balance [text-shadow:0_2px_30px_rgb(75_23_10/0.5)]"
          >
            Mesa farta.
            <br />
            <span className="lg:pl-[12%]">Gente reunida.</span>
          </h2>
          <p className="mt-8 max-w-[34rem] text-[1.15rem] leading-relaxed text-pretty text-creme/90 lg:ml-[12%]">
            {feijoada.intro}
          </p>
        </div>
      </div>

      {/* O serviço */}
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-28">
        <dl className="border-t border-creme/25 lg:col-span-6">
          {feijoada.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-creme/25 py-5">
              <dt className="note text-[1.15rem] text-mostarda-claro">{fact.label}</dt>
              <dd className="text-[1.08rem]">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative flex items-center justify-center lg:col-span-5 lg:col-start-8">
          <BayLeaf draw="scroll" weight={2} className="absolute -top-6 right-2 size-20 text-mostarda sm:size-24 lg:-top-10 lg:right-6" />
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

      {/* Fotos e ficha de orçamento */}
      <div className="bg-brasa">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-6">
            <p className="font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05] font-medium text-balance">
              Festa em casa ou evento da empresa: conte a data, o endereço e quantos convidados.
            </p>
            <div className="mt-10 grid grid-cols-5 gap-4">
              <Photo name="mesaReunida" sizes="(min-width: 1024px) 30vw, 60vw" className="col-span-3 aspect-[4/5]" reveal />
              <Photo name="feijao" sizes="(min-width: 1024px) 20vw, 40vw" className="col-span-2 mt-16 aspect-[3/4]" reveal />
            </div>
          </div>
          <div className="lg:col-span-6">
            <FeijoadaQuote />
          </div>
        </div>
      </div>
    </section>
  );
}
