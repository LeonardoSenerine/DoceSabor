import { Tape } from "@/components/brand/kitchen";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { serviceOrder, services, type ServiceId } from "@/content/site";

const tab: Record<ServiceId, { bar: string; wash: string }> = {
  marmitas: { bar: "bg-verde", wash: "group-hover:bg-verde-claro/60" },
  vanda: { bar: "bg-mostarda", wash: "group-hover:bg-mostarda-claro/60" },
  feijoada: { bar: "bg-terracota", wash: "group-hover:bg-terracota-claro/45" },
};

/**
 * Sumário do caderno: as três frentes como entradas de um índice, cada uma
 * com a aba colorida da divisória. No desktop, a foto da entrada aparece
 * presa ao lado quando a linha recebe foco ou o cursor.
 */
export function Sumario() {
  return (
    <section id="servicos" aria-labelledby="sumario-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="sumario-title" className="font-serif text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.02] font-medium tracking-[-0.025em]">
            Três jeitos de cozinhar.
          </h2>
          <Tape tilt={2}>escolha por onde começar</Tape>
        </div>

        <ol className="mt-12 border-t border-cafe">
          {serviceOrder.map((id, index) => {
            const service = services[id];
            return (
              <li key={id} className="group relative border-b border-cafe/25 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-cafe">
                <span aria-hidden="true" className={`absolute top-0 left-0 h-full w-1.5 transition-[width] duration-500 ease-(--ease-cozinha) group-hover:w-3 ${tab[id].bar}`} />
                <div
                  className={`grid gap-x-8 gap-y-4 py-8 pl-6 transition-colors duration-500 sm:pl-8 lg:grid-cols-12 lg:items-center lg:py-11 ${tab[id].wash}`}
                >
                  <div className="flex items-start gap-5 lg:col-span-7">
                    <span className="note w-10 shrink-0 pt-2 text-[1.15rem] text-cafe-suave lg:pt-4">nº {index + 1}</span>
                    <Photo
                      name={service.photo}
                      sizes="72px"
                      tag="none"
                      className="mt-1 size-16 shrink-0 sm:size-20 lg:hidden"
                    />
                    <div>
                      <h3 className="font-serif text-[clamp(1.9rem,4.4vw,4rem)] leading-[0.95] font-medium tracking-[-0.025em]">
                        <a
                          href={`#${service.anchor}`}
                          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                        >
                          {service.kind}
                        </a>
                      </h3>
                      <p className="mt-3 max-w-[30rem] text-pretty text-cafe-suave">{service.summary}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-wrap items-center gap-x-6 pl-15 lg:col-span-2 lg:col-start-11 lg:justify-end lg:pl-0">
                    <WhatsAppLink variant="text" message={service.message}>
                      {service.cta}
                    </WhatsAppLink>
                  </div>
                </div>

                {/* Prévia fotográfica (desktop) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-[22%] z-20 hidden w-44 -translate-y-1/2 rotate-3 opacity-0 transition-[opacity,translate,rotate] duration-500 ease-(--ease-cozinha) group-focus-within:-translate-y-[55%] group-focus-within:rotate-[-2deg] group-focus-within:opacity-100 group-hover:-translate-y-[55%] group-hover:rotate-[-2deg] group-hover:opacity-100 lg:block xl:w-52"
                >
                  <div className="bg-papel p-2 shadow-[0_20px_40px_-24px_rgb(59_31_14/0.6)]">
                    <Photo name={service.photo} sizes="210px" tag="none" className="aspect-[4/5]" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
