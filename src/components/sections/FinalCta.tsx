import { WhatsAppGlyph } from "@/components/ui/WhatsAppLink";
import { contact, messages, services, type ServiceId } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

const choices: { id: ServiceId; label: string; dot: string }[] = [
  { id: "marmitas", label: "Quero um kit de marmitas", dot: "bg-verde" },
  { id: "vanda", label: "Quero a Vanda cozinhando em casa", dot: "bg-mostarda" },
  { id: "feijoada", label: "Quero feijoada no meu evento", dot: "bg-terracota" },
];

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="paper py-24 lg:py-36">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <h2 id="contato-title" className="display-voice text-[clamp(4.5rem,13vw,12rem)] font-semibold lg:col-span-6">
          <span data-reveal-scroll className="-my-[0.12em] block overflow-hidden py-[0.12em]">
            <span className="block">Bateu</span>
          </span>
          <span data-reveal-scroll className="-my-[0.12em] block overflow-hidden py-[0.12em] pl-[8%]">
            <span className="block">a fome?</span>
          </span>
        </h2>

        <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="max-w-[28rem] text-[1.15rem] text-pretty text-cafe-suave">
            Escolha por onde começar. A conversa abre no WhatsApp com a mensagem pronta, é só enviar.
          </p>
          <ul className="mt-8 border-t border-cafe/20">
            {choices.map((choice) => (
              <li key={choice.id} className="border-b border-cafe/20">
                <a
                  href={whatsappUrl(services[choice.id].message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center gap-4 py-4 transition-[padding] duration-300 ease-(--ease-cozinha) hover:pl-2"
                >
                  <span aria-hidden="true" className={`size-3 shrink-0 rounded-full ${choice.dot}`} />
                  <span className="flex-1 font-serif text-[clamp(1.3rem,2.2vw,1.65rem)] leading-tight">{choice.label}</span>
                  <WhatsAppGlyph className="size-6 shrink-0 text-cafe-suave transition-colors group-hover:text-cafe" />
                  <span className="sr-only"> (abre o WhatsApp)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-cafe-suave">
            Ou só diga oi:{" "}
            <a
              href={whatsappUrl(messages.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cafe underline underline-offset-4"
            >
              {contact.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
