import Image from "next/image";
import { Figure } from "@/components/ui/Figure";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { brand, kitchen, messages, vanda } from "@/content/site";

/**
 * A cozinha: quem está por trás da marca.
 *
 * Enquanto não houver retrato real da Vanda (`vanda.portrait`), a seção
 * mostra uma foto de preparo, sem apresentá-la como a Vanda.
 */
export function Cozinha() {
  return (
    <section id="a-cozinha" aria-labelledby="cozinha-title" className="bg-cafe text-creme">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 py-24 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-36">
        <div className="lg:col-span-5">
          {vanda.portrait ? (
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={vanda.portrait.src}
                alt={`Retrato de ${brand.owner}`}
                width={vanda.portrait.width}
                height={vanda.portrait.height}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="grade size-full object-cover"
              />
            </div>
          ) : (
            <Figure name="maosNaTabua" sizes="(min-width: 1024px) 38vw, 100vw" frame="aspect-[4/5]" />
          )}
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <h2 id="cozinha-title" className="display text-[clamp(3.4rem,7.4vw,7.5rem)]">
            {brand.owner}.
          </h2>
          <div className="mt-10 max-w-[32rem] space-y-5 text-[1.12rem] leading-relaxed text-pretty text-creme/85">
            <p className="font-serif text-[1.45rem] leading-snug text-creme">{kitchen.text[0]}</p>
            <p>{kitchen.text[1]}</p>
          </div>
          <div className="mt-10">
            <WhatsAppLink message={messages.geral} className="bg-mostarda text-cafe hover:bg-creme">
              Fale com a Vanda
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
