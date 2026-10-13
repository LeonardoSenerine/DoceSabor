import { Wordmark } from "@/components/brand/Wordmark";
import { Frost, Leaf, Steam } from "@/components/brand/marks";
import { Cover } from "@/components/ui/Cover";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { mealCategories, mealMenuNote, mealOrderNote, mealStorage, services } from "@/content/site";
import { CategoryAccordion } from "./CategoryAccordion";

/**
 * Marmitas congeladas: abre com a foto em tela cheia; depois, uma
 * apresentação, não um cardápio. As categorias abrem em sanfona, cada uma
 * com a sua foto; o pedido acontece na conversa.
 */
export function Marmitas() {
  const service = services.marmitas;

  return (
    <section id={service.anchor} aria-labelledby="marmitas-title" className="paper">
      <Cover
        photo="marmitas"
        title={["Sabor de casa,", "do seu jeito."]}
        titleId="marmitas-title"
        shade="6 28 17"
        eyebrow={<Wordmark line={service.line} className="text-[1.05rem]" />}
      >
        <p className="max-w-[34rem] text-[1.05rem] leading-relaxed text-pretty text-creme/90 sm:text-[1.15rem]">{service.summary}</p>
        <p className="max-w-[32rem] font-serif text-[clamp(1.25rem,2vw,1.5rem)] leading-snug text-pretty">{mealMenuNote}</p>
      </Cover>

      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div data-reveal>
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
