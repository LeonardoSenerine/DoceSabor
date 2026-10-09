import { Wordmark } from "@/components/brand/Wordmark";
import { Frost, Leaf, Steam } from "@/components/brand/marks";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { mealCategories, mealKitPrices, mealKits, mealOrderSteps, mealStorage, messages, services } from "@/content/site";
import { CategoryExplorer } from "./CategoryExplorer";

export function Marmitas() {
  const service = services.marmitas;

  return (
    <section id={service.anchor} aria-labelledby="marmitas-title">
      {/* Verde profundo: a proposta e as categorias */}
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
            <p className="max-w-[28rem] self-end text-[1.1rem] text-pretty text-creme/80 lg:col-span-4 lg:col-start-9">
              Refeições preparadas e vendidas em kits, para você abrir o freezer e encontrar comida de verdade nos dias
              em que não dá para cozinhar.
            </p>
          </header>

          <div className="mt-16 lg:mt-24">
            <h3 className="sr-only">Categorias</h3>
            <CategoryExplorer categories={mealCategories} />
          </div>
        </div>
      </div>

      {/* Verde claro: kits, pedido e conservação */}
      <div className="bg-verde-claro py-24 text-verde lg:py-32">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
          <h3 data-split className="max-w-[40rem] font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
            Kits de 7, 14 ou 21 refeições.
          </h3>

          <ul data-rise className="mt-12 grid border-t border-verde/25 md:grid-cols-3">
            {mealKits.map((kit, index) => (
              <li
                key={kit.meals}
                className={`flex flex-col border-b border-verde/25 py-8 md:border-b-0 md:px-8 md:first:pl-0 ${
                  index > 0 ? "md:border-l" : ""
                }`}
              >
                <p className="flex items-baseline gap-3">
                  <span className="-my-[0.1em] overflow-hidden py-[0.1em]">
                    <span data-rise-item className="display-voice block text-[clamp(5.5rem,11vw,9.5rem)] font-semibold">
                      {kit.meals}
                    </span>
                  </span>
                  <span className="font-serif text-[1.5rem] italic">refeições</span>
                </p>
                <p className="mt-4 max-w-[18rem] text-verde/80">{kit.reading}</p>
                <p className="mt-2 text-[0.95rem] font-medium">
                  {mealKitPrices[kit.meals] ?? "Valores pelo WhatsApp"}
                </p>
                <WhatsAppLink
                  variant="text"
                  message={`${messages.marmitas} Tenho interesse no kit de ${kit.meals} refeições.`}
                  className="mt-auto self-start pt-6"
                >
                  Quero o kit de {kit.meals}
                </WhatsAppLink>
              </li>
            ))}
          </ul>

          <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="font-serif text-[1.9rem] leading-tight font-medium">Como pedir</h3>
              <ol className="mt-8 space-y-7">
                {mealOrderSteps.map((step, index) => (
                  <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4">
                    <span aria-hidden="true" className="display-voice text-[2.6rem] text-verde-medio">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-1 text-verde/80">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="font-serif text-[1.9rem] leading-tight font-medium">Como guardar</h3>
              <dl className="mt-8 space-y-6">
                <div className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <Frost className="size-8 text-verde-medio" />
                  <div>
                    <dt className="font-semibold">{mealStorage.frozen.title}</dt>
                    {mealStorage.frozen.lines.map((line) => (
                      <dd key={line} className="mt-1 text-verde/80">
                        {line}
                      </dd>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <Leaf className="size-8 text-verde-medio" />
                  <div>
                    <dt className="font-semibold">{mealStorage.salads.title}</dt>
                    {mealStorage.salads.lines.map((line) => (
                      <dd key={line} className="mt-1 text-verde/80">
                        {line}
                      </dd>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <Steam className="size-8 text-verde-medio" />
                  <div>
                    <dt className="font-semibold">Na hora de aquecer</dt>
                    {mealStorage.heating ? (
                      mealStorage.heating.map((line) => (
                        <dd key={line} className="mt-1 text-verde/80">
                          {line}
                        </dd>
                      ))
                    ) : (
                      <dd className="mt-1 text-verde/80">{mealStorage.heatingFallback}</dd>
                    )}
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start gap-5 border-t border-verde/25 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
            <p className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">Quer montar o seu kit?</p>
            <WhatsAppLink message={service.message} className="bg-verde text-creme hover:bg-cafe">
              Pedir pelo WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
