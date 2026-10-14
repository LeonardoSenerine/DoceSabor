import { Wordmark } from "@/components/brand/Wordmark";
import { Cover } from "@/components/ui/Cover";
import { feijoada, services } from "@/content/site";
import { FeijoadaCarousel } from "./FeijoadaCarousel";
import { FeijoadaQuote } from "./FeijoadaQuote";

/**
 * Feijoada de Raiz: a frente de maior impacto. Abre com a panela em tela
 * cheia; depois, a capacidade e a ficha para consultar a data, sobre um
 * fundo de feijoadas e cozinheiros passando devagar sob a terracota.
 */
export function Feijoada() {
  const service = services.feijoada;

  return (
    <section
      id={service.anchor}
      aria-labelledby="feijoada-title"
      className="relative bg-barro text-creme"
    >
      <Cover
        photo="feijoadaPanela"
        title={["Mesa farta.", "Gente reunida."]}
        titleId="feijoada-title"
        fadeTo="169 50 27"
        eyebrow={<Wordmark line={service.line} className="text-[1.05rem]" />}
      >
        <p className="max-w-[34rem] text-[1.05rem] leading-relaxed text-pretty text-creme/90 sm:text-[1.15rem]">
          {feijoada.intro}
        </p>
      </Cover>

      {/* Capacidade, como funciona e a ficha do evento, sobre o fundo em movimento */}
      <div className="relative isolate">
        <FeijoadaCarousel />
        <div className="mx-auto grid max-w-[90rem] gap-16 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-5">
            {/* A capacidade, na mesma voz do slogan: a palavra pequena liga, a grande importa */}
            <p data-reveal className="mb-12">
              <span className="block font-serif text-[clamp(1.35rem,2.2vw,2rem)] font-light">
                Para até
              </span>
              <span className="display block text-[clamp(3.4rem,6vw,6rem)] text-mostarda-claro">
                {feijoada.maxGuests} convidados.
              </span>
            </p>
            <dl data-reveal className="border-t border-creme/25">
              {feijoada.facts
                .filter((fact) => fact.label !== "Quantos")
                .map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-creme/25 py-5"
                  >
                    <dt className="note text-[1.15rem] text-mostarda-claro">
                      {fact.label}
                    </dt>
                    <dd className="text-[1.05rem]">{fact.value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-serif text-[clamp(1.9rem,3.3vw,2.8rem)] leading-[1.08] text-balance">
              Festa em casa ou evento da empresa: consulte a disponibilidade
              para a sua data.
            </p>
            <div className="mt-10">
              <FeijoadaQuote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
