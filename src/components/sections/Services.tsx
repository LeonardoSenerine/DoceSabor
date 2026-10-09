import type { ReactNode } from "react";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { services } from "@/content/site";

function Line({ dot, children }: { dot: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-[0.95rem] font-medium">
      <span aria-hidden="true" className={`size-2.5 rounded-full ${dot}`} />
      {children}
    </p>
  );
}

/**
 * As três frentes, cada uma com um enquadramento próprio:
 * Marmitas — retângulo ordenado, como a bandeja e o freezer.
 * Vanda — retrato vertical, com o campo mostarda de uma toalha por trás.
 * Feijoada — sangria total: a mesa não cabe na moldura.
 */
export function Services() {
  const { marmitas, vanda, feijoada } = services;

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <header className="max-w-[46rem]">
          <h2 id="servicos-title" data-split className="font-serif text-[clamp(2.3rem,5vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.025em] text-balance">
            Cada ocasião pede um jeito especial de cozinhar.
          </h2>
          <p className="mt-5 max-w-[34rem] text-cafe-suave">
            Três serviços, a mesma cozinha. Escolha o que combina com o seu momento e fale direto com a gente.
          </p>
        </header>

        {/* Marmitas */}
        <article aria-labelledby="frente-marmitas" className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Photo
              name={marmitas.photo}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-[4/3]"
              reveal
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pb-2">
            <Line dot="bg-verde">{marmitas.kind}</Line>
            <h3 id="frente-marmitas" data-split className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.02] font-medium tracking-[-0.02em] text-verde">
              {marmitas.title}
            </h3>
            <p className="mt-4 text-pretty text-cafe-suave">{marmitas.summary}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              <WhatsAppLink message={marmitas.message} className="bg-verde text-creme hover:bg-cafe">
                {marmitas.cta}
              </WhatsAppLink>
              <a href={`#${marmitas.anchor}`} className="min-h-11 py-2 font-medium underline underline-offset-[6px]">
                Ver kits e categorias
              </a>
            </div>
          </div>
        </article>

        {/* Vanda Camargo */}
        <article aria-labelledby="frente-vanda" className="mt-24 grid gap-10 lg:mt-36 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-4 lg:col-start-2">
            <Line dot="bg-mostarda">{vanda.kind}</Line>
            <h3 id="frente-vanda" data-split className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.02] font-medium tracking-[-0.02em]">
              {vanda.title}
            </h3>
            <p className="mt-4 text-pretty text-cafe-suave">{vanda.summary}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              <WhatsAppLink message={vanda.message} className="bg-mostarda text-cafe hover:bg-cafe hover:text-creme">
                {vanda.cta}
              </WhatsAppLink>
              <a href={`#${vanda.anchor}`} className="min-h-11 py-2 font-medium underline underline-offset-[6px]">
                Como funciona
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 lg:col-span-5 lg:col-start-7">
            <div aria-hidden="true" data-parallax="12" className="absolute top-[12%] -left-4 h-full w-[78%] bg-mostarda sm:-left-8 lg:-left-12" />
            <Photo
              name={vanda.photo}
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="relative ml-auto aspect-[4/5] w-[88%]"
              reveal
            />
          </div>
        </article>
      </div>

      {/* Feijoada de Raiz */}
      <article aria-labelledby="frente-feijoada" className="relative mt-24 lg:mt-36">
        <Photo
          name={feijoada.photo}
          sizes="100vw"
          tagTone="dark"
          tag="top-right"
          className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
          imgClassName="scale-[1.14]"
          imgProps={{ "data-parallax": "7" }}
        />
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
          <div className="relative -mt-16 bg-barro px-6 py-8 text-creme sm:-mt-24 sm:max-w-[34rem] sm:px-10 sm:py-10 lg:-mt-56">
            <p className="flex items-center gap-2.5 text-[0.95rem] font-medium">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-creme" />
              {feijoada.line}
            </p>
            <h3 id="frente-feijoada" className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-[1] font-medium tracking-[-0.02em]">
              {feijoada.title}
            </h3>
            <p className="mt-4 text-[1.1rem] text-pretty">{feijoada.summary}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              <WhatsAppLink message={feijoada.message} className="bg-creme text-barro hover:bg-cafe hover:text-creme">
                {feijoada.cta}
              </WhatsAppLink>
              <a href={`#${feijoada.anchor}`} className="min-h-11 py-2 font-medium underline underline-offset-[6px]">
                Saber mais
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
