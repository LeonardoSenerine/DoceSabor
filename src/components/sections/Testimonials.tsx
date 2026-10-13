import { testimonials } from "@/content/site";

/**
 * Depoimentos reais entram em `testimonials` (src/content/site.ts), com
 * autorização do cliente. Enquanto a lista estiver vazia, a seção não aparece:
 * nada de avaliações inventadas.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="border-t border-linha py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <h2 id="depoimentos-title" className="display text-[clamp(2.4rem,5vw,4.2rem)] text-cafe">
          Quem já provou
        </h2>
        <ul className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {testimonials.map((item) => (
            <li key={`${item.author}-${item.quote.slice(0, 16)}`}>
              <figure>
                <blockquote className="font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug text-pretty">
                  <p>“{item.quote}”</p>
                </blockquote>
                <figcaption className="mt-5 flex flex-wrap items-baseline gap-3 text-[0.95rem]">
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
