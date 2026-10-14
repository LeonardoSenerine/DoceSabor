import { WhatsAppGlyph, WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { contact, messages, serviceOrder, services } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

/** Contato: cada intenção abre o WhatsApp com a mensagem do serviço certo. */
export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="paper relative bg-creme py-20 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <h2 id="contato-title" data-split className="display text-[clamp(4rem,11vw,10.5rem)] text-cafe lg:col-span-6">
            Bateu
            <br />
            <span className="pl-[10%]">a fome?</span>
          </h2>

          <div data-reveal className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-[28rem] text-[1.1rem] text-pretty text-cafe-suave">
              Escolha por onde começar. A conversa abre no WhatsApp com a mensagem pronta, é só enviar.
            </p>
            <ul className="mt-8 border-t border-linha">
              {serviceOrder.map((id) => (
                <li key={id} className="border-b border-linha">
                  <a
                    href={whatsappUrl(services[id].message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid min-h-16 grid-cols-[1fr_auto] items-center gap-3 py-4"
                  >
                    <span>
                      <span className="block font-serif text-[clamp(1.25rem,2vw,1.55rem)] leading-tight transition-colors group-hover:text-terracota">
                        {services[id].cta}
                      </span>
                      <span className="text-[0.9rem] text-cafe-suave">{services[id].kind}</span>
                    </span>
                    <WhatsAppGlyph className="size-6 text-cafe-suave transition-[color,translate] duration-300 group-hover:-translate-y-0.5 group-hover:text-cafe" />
                    <span className="sr-only"> (abre o WhatsApp)</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <WhatsAppLink message={messages.geral} className="bg-cafe text-creme hover:bg-verde">
                Fale com a Chef
              </WhatsAppLink>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 py-2 font-medium underline decoration-1 underline-offset-[6px] hover:decoration-2"
              >
                Instagram {contact.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
