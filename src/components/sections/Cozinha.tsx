import { Cover } from "@/components/ui/Cover";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { brand, kitchen, messages } from "@/content/site";

/**
 * A cozinha: quem está por trás da marca, aberta como um capítulo.
 *
 * Enquanto não houver retrato real da Vanda, a abertura usa uma foto de
 * preparo, sem apresentá-la como a Vanda. Quando o retrato chegar, basta
 * cadastrá-lo em src/content/images.ts e trocar a foto aqui.
 */
export function Cozinha() {
  return (
    <section id="a-cozinha" aria-labelledby="cozinha-title" className="bg-cafe">
      <Cover photo="maosNaTabua" title={[`${brand.owner}.`]} titleId="cozinha-title">
        <p className="max-w-[36rem] font-serif text-[clamp(1.3rem,2.2vw,1.7rem)] leading-snug text-pretty">{kitchen.text[0]}</p>
        <p className="max-w-[34rem] text-[1.05rem] leading-relaxed text-pretty text-creme/90 sm:text-[1.12rem]">{kitchen.text[1]}</p>
        <WhatsAppLink message={messages.geral} className="mt-2 bg-mostarda text-cafe hover:bg-creme">
          Fale com a Chef
        </WhatsAppLink>
      </Cover>
    </section>
  );
}
