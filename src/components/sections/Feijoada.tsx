import { Wordmark } from "@/components/brand/Wordmark";
import { Figure } from "@/components/ui/Figure";
import { Photo } from "@/components/ui/Photo";
import { feijoada, services } from "@/content/site";
import { FeijoadaQuote } from "./FeijoadaQuote";

/**
 * Feijoada de Raiz: a frente de maior impacto. Abre com a panela no fogo em
 * sangria total e uma sombra de brasa sob o título; depois, a mesa em fotos
 * e a ficha para consultar a data do evento.
 */
export function Feijoada() {
  const service = services.feijoada;

  return (
    <section id={service.anchor} aria-labelledby="feijoada-title" className="bg-barro text-creme">
      {/* Abertura: foto protagonista com sombra sob o texto */}
      <div className="relative isolate flex min-h-[88svh] items-end overflow-hidden lg:min-h-[92svh]">
        <div data-zoom className="absolute inset-0 -z-20">
          <Photo
            name="feijoadaPanela"
            sizes="100vw"
            tag="none"
            className="size-full bg-brasa"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(169_50_27)_0%,rgb(120_36_18/0.85)_28%,rgb(75_23_10/0.3)_62%,rgb(75_23_10/0.05)_100%)] lg:bg-[linear-gradient(to_top,rgb(169_50_27)_0%,rgb(120_36_18/0.7)_30%,transparent_70%),linear-gradient(to_right,rgb(75_23_10/0.6),transparent_62%)]"
        />
        <div className="mx-auto w-full max-w-[90rem] px-4 pt-40 pb-12 sm:px-8 lg:px-12 lg:pb-20">
          <Wordmark line={service.line} ruleClassName="bg-mostarda" className="text-[1.05rem]" />
          <h2
            id="feijoada-title"
            data-split
            className="display mt-8 text-[clamp(3.4rem,10vw,10rem)] [text-shadow:0_2px_30px_rgb(75_23_10/0.45)]"
          >
            Mesa farta.
            <br />
            <span className="lg:pl-[12%]">Gente reunida.</span>
          </h2>
          <p data-reveal className="mt-6 max-w-[34rem] text-[1.05rem] sm:mt-8 sm:text-[1.15rem] leading-relaxed text-pretty text-creme/90 lg:ml-[12%]">
            {feijoada.intro}
          </p>
        </div>
      </div>

      {/* A mesa e a ficha do evento */}
      <div className="mx-auto grid max-w-[90rem] gap-16 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-5">
          {/* A capacidade, na mesma voz do slogan: a palavra pequena liga, a grande importa */}
          <p data-reveal className="mb-12">
            <span className="block font-serif text-[clamp(1.35rem,2.2vw,2rem)] font-light">Para até</span>
            <span className="display block text-[clamp(3.4rem,6vw,6rem)] text-mostarda-claro">
              {feijoada.maxGuests} convidados.
            </span>
          </p>
          <dl data-reveal className="border-t border-creme/25">
            {feijoada.facts.filter((fact) => fact.label !== "Quantos").map((fact) => (
              <div key={fact.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-creme/25 py-5">
                <dt className="note text-[1.15rem] text-mostarda-claro">{fact.label}</dt>
                <dd className="text-[1.05rem]">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid grid-cols-5 gap-4">
            <Figure
              name="feijoadaCompleta"
              sizes="(min-width: 1024px) 26vw, 60vw"
              frame="aspect-[4/5]"
              className="col-span-3"
            />
            <Figure
              name="feijao"
              sizes="(min-width: 1024px) 17vw, 40vw"
              frame="aspect-[3/4]"
              className="col-span-2 mt-20"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="font-serif text-[clamp(1.9rem,3.3vw,2.8rem)] leading-[1.08] text-balance">
            Festa em casa ou evento da empresa: consulte a disponibilidade para a sua data.
          </p>
          <div className="mt-10">
            <FeijoadaQuote />
          </div>
        </div>
      </div>
    </section>
  );
}
