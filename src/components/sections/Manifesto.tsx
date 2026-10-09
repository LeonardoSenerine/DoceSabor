import { BrandSymbol } from "@/components/brand/marks";

const lines = [
  { text: "Tem dia em que a comida precisa caber na rotina.", dot: "bg-verde-folha", indent: "lg:pl-0" },
  { text: "Tem dia em que ela precisa cuidar de uma casa.", dot: "bg-mostarda", indent: "lg:pl-[9%]" },
  { text: "E tem dia em que precisa reunir muita gente.", dot: "bg-terracota", indent: "lg:pl-[18%]" },
] as const;

export function Manifesto() {
  return (
    <section id="a-cozinha" aria-labelledby="manifesto-title" className="bg-cafe py-24 text-creme lg:py-40">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-3">
          <BrandSymbol className="size-16 text-mostarda lg:size-20" weight={7} title="Símbolo da Doce e Sabor" />
          <h2 id="manifesto-title" className="note mt-6 text-[1.5rem] text-creme/80">
            A cozinha da Vanda
          </h2>
        </div>

        <div className="lg:col-span-9">
          <div data-manifesto className="space-y-5 font-serif text-[clamp(1.75rem,3.7vw,3.4rem)] leading-[1.08] font-light tracking-[-0.02em] lg:space-y-7">
            {lines.map((line) => (
              <p key={line.text} data-manifesto-line className={`flex gap-4 text-balance lg:gap-6 ${line.indent}`}>
                <span aria-hidden="true" className={`mt-[0.42em] size-[0.28em] shrink-0 rounded-full ${line.dot}`} />
                <span>{line.text}</span>
              </p>
            ))}
          </div>

          <p data-split className="mt-16 font-serif text-[clamp(2.4rem,6vw,5.6rem)] leading-[0.95] font-medium tracking-[-0.03em] text-balance text-mostarda lg:mt-24">
            A cozinha é a mesma.
            <br />
            O cuidado também.
          </p>

          <p className="mt-10 max-w-[36rem] text-pretty text-creme/75 lg:ml-[18%]">
            A Doce e Sabor é a marca de Vanda Camargo. Das marmitas que vão para o freezer à feijoada servida no seu
            evento, tudo parte do mesmo jeito de cozinhar: comida de verdade, feita para estar à mesa.
          </p>
        </div>
      </div>
    </section>
  );
}
