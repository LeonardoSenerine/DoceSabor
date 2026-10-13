import { Wordmark } from "@/components/brand/Wordmark";
import { Frost, Leaf, Steam } from "@/components/brand/marks";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { mealCategories, mealMenuNote, mealOrderNote, mealStorage, services } from "@/content/site";
import { CategoryAccordion } from "./CategoryAccordion";

/**
 * Marmitas congeladas: uma apresentação, não um cardápio. As categorias
 * abrem em sanfona, cada uma com a sua foto; o pedido acontece na conversa.
 */
export function Marmitas() {
  const service = services.marmitas;

  return (
    <section id={service.anchor} aria-labelledby="marmitas-title" className="paper py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <header className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Wordmark line={service.line} className="text-[1.05rem] text-verde" />
            <h2 id="marmitas-title" data-split className="display mt-10 text-[clamp(3rem,7vw,6.75rem)] text-verde">
              Sabor de casa, do seu jeito.
            </h2>
          </div>
          <div data-reveal className="max-w-[28rem] self-end lg:col-span-4 lg:col-start-9">
            <p className="text-[1.1rem] leading-relaxed text-pretty text-cafe-suave">{service.summary}</p>
            <p className="mt-6 border-l-2 border-verde-folha pl-4 font-serif text-[1.25rem] leading-snug text-pretty text-verde">
              {mealMenuNote}
            </p>
          </div>
        </header>

        <div data-reveal className="mt-12 sm:mt-16 lg:mt-20">
          <CategoryAccordion categories={mealCategories} />
        </div>

        <div className="mt-20 grid gap-16 border-t border-linha pt-14 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.1] text-balance text-verde">
              Conte o que você gosta e o que prefere evitar.
            </p>
            <p className="mt-5 max-w-[30rem] text-pretty text-cafe-suave">{mealOrderNote}</p>
            <WhatsAppLink message={service.message} className="mt-8 bg-verde text-creme hover:bg-cafe">
              {service.cta}
            </WhatsAppLink>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className="font-serif text-[1.5rem] leading-tight">Como guardar</h3>
            <ul className="mt-5 border-t border-linha">
              {[
                { icon: Frost, title: mealStorage.frozen.title, text: mealStorage.frozen.lines.join(" ") },
                { icon: Leaf, title: mealStorage.salads.title, text: mealStorage.salads.lines.join(" ") },
                {
                  icon: Steam,
                  title: "Na hora de aquecer",
                  text: mealStorage.heating ? mealStorage.heating.join(" ") : mealStorage.heatingFallback,
                },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-linha py-5">
                  <Icon className="mt-1 size-5 text-verde-medio" />
                  <p>
                    <span className="font-semibold">{title}.</span> <span className="text-cafe-suave">{text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
