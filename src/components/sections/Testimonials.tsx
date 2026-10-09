import { contact, testimonials, type ServiceId } from "@/content/site";

const accent: Record<ServiceId, string> = {
  marmitas: "bg-verde",
  vanda: "bg-mostarda",
  feijoada: "bg-terracota",
};

/**
 * Depoimentos reais entram em `testimonials` (src/content/site.ts).
 * Enquanto a lista estiver vazia, a seção vira um convite para acompanhar
 * a cozinha no Instagram — nada de avaliações inventadas.
 */
export function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <section id="depoimentos" aria-labelledby="depoimentos-title" className="border-y border-linha bg-papel py-20 lg:py-24">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-4 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-[40rem]">
            <h2 id="depoimentos-title" className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
              Veja o que sai da cozinha todos os dias.
            </h2>
            <p className="mt-4 text-cafe-suave">Pratos, kits e eventos aparecem primeiro no Instagram da Doce e Sabor.</p>
          </div>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center self-start rounded-full px-6 py-3 font-medium ring-1 ring-cafe transition-colors duration-300 ring-inset hover:bg-cafe hover:text-creme lg:self-auto"
          >
            Seguir {contact.instagramHandle} no Instagram
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <h2 id="depoimentos-title" className="font-serif text-[clamp(2.3rem,5vw,4rem)] leading-[1.02] font-medium tracking-[-0.025em]">
          Quem já provou
        </h2>
        <ul className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {testimonials.map((item) => (
            <li key={`${item.author}-${item.quote.slice(0, 16)}`}>
              <figure>
                <blockquote className="font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug text-pretty">
                  <p>“{item.quote}”</p>
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-[0.95rem]">
                  {item.service ? <span aria-hidden="true" className={`size-2.5 rounded-full ${accent[item.service]}`} /> : null}
                  <span className="font-semibold">{item.author}</span>
                  {item.context ? <span className="text-cafe-suave">{item.context}</span> : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
