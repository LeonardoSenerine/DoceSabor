import { Wordmark } from "@/components/brand/Wordmark";
import { Ficha } from "@/components/brand/kitchen";
import { Frost, Leaf, Steam } from "@/components/brand/marks";
import { kitBuilder, mealCategories, mealMenuNote, mealOrderSteps, mealStorage, services } from "@/content/site";
import { KitBuilder } from "./KitBuilder";

/**
 * Marmitas: a frente mais estruturada. Grade precisa, potes lado a lado,
 * etiquetas de fita crepe e fichas de pedido e conservação.
 */
export function Marmitas() {
  const service = services.marmitas;

  return (
    <section id={service.anchor} aria-labelledby="marmitas-title">
      <div className="bg-verde py-24 text-creme lg:py-36">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
          <header className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Wordmark line={service.line} ruleClassName="bg-verde-folha" className="text-[1.05rem] text-creme" />
              <h2
                id="marmitas-title"
                data-split
                className="mt-10 font-serif text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.95] font-medium tracking-[-0.03em] text-balance"
              >
                {service.title}
              </h2>
            </div>
            <div className="max-w-[28rem] self-end lg:col-span-4 lg:col-start-9">
              <p className="text-[1.1rem] text-pretty text-creme/80">
                Refeições preparadas e vendidas em kits, para você abrir o freezer e encontrar comida de verdade nos
                dias em que não dá para cozinhar.
              </p>
              <p className="mt-6 border-l-2 border-verde-folha pl-4 font-serif text-[1.3rem] leading-snug text-pretty text-creme">
                {mealMenuNote}
              </p>
            </div>
          </header>

          <div className="mt-20 border-t border-creme/20 pt-12 lg:mt-28 lg:pt-16">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] font-medium tracking-[-0.02em]">
                {kitBuilder.title}
              </h3>
              <p className="max-w-[30rem] text-pretty text-creme/80">{kitBuilder.intro}</p>
            </div>
            <KitBuilder categories={mealCategories} />
          </div>
        </div>
      </div>

      <div className="bg-verde-claro py-24 text-verde lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-4 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
          <Ficha kind="ficha de pedido" title="Como pedir" rule="bg-verde" className="lg:col-span-6">
            <ol>
              {mealOrderSteps.map((step, index) => (
                <li key={step.title} data-margin={`${index + 1}.`}>
                  <strong className="font-semibold">{step.title}.</strong> {step.text}
                </li>
              ))}
            </ol>
          </Ficha>

          <Ficha kind="ficha de conservação" title="Como guardar" rule="bg-verde" className="lg:col-span-6 lg:mt-20">
            <ul>
              <li className="flex gap-3">
                <Frost className="mt-[0.6rem] size-4 shrink-0 text-verde-medio" />
                <span>
                  <strong className="font-semibold">{mealStorage.frozen.title}.</strong> {mealStorage.frozen.lines.join(" ")}
                </span>
              </li>
              <li className="flex gap-3">
                <Leaf className="mt-[0.6rem] size-4 shrink-0 text-verde-medio" />
                <span>
                  <strong className="font-semibold">{mealStorage.salads.title}.</strong> {mealStorage.salads.lines.join(" ")}
                </span>
              </li>
              <li className="flex gap-3">
                <Steam className="mt-[0.6rem] size-4 shrink-0 text-verde-medio" />
                <span>
                  <strong className="font-semibold">Na hora de aquecer.</strong>{" "}
                  {mealStorage.heating ? mealStorage.heating.join(" ") : mealStorage.heatingFallback}
                </span>
              </li>
            </ul>
          </Ficha>
        </div>
      </div>
    </section>
  );
}
