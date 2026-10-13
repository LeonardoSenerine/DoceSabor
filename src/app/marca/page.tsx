import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrandSymbol, Frost, Leaf, Steam } from "@/components/brand/marks";
import { Figure } from "@/components/ui/Figure";
import { brand, serviceOrder, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Identidade da marca",
  description: "Sistema de identidade visual da Doce e Sabor: logotipo, símbolo, cores, tipografia, elementos gráficos, fotografia e movimento.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/marca" },
};

type Swatch = { name: string; hex: string; role: string; dark?: boolean; wide?: boolean };

const swatches: Swatch[] = [
  { name: "Creme", hex: "#FCF1E1", role: "Fundo principal. Predomina em toda a página.", wide: true },
  { name: "Café", hex: "#3B1F0E", role: "Texto, títulos, botões, a seção “A cozinha” e o rodapé (13,5:1 sobre creme).", dark: true, wide: true },
  { name: "Verde", hex: "#0F3B26", role: "Marmitas congeladas: títulos e botões.", dark: true },
  { name: "Mostarda", hex: "#F2A922", role: "Cozinheira particular e a luz sobre o café." },
  { name: "Terracota", hex: "#D9452B", role: "Feijoada: acentos e tamanhos grandes.", dark: true },
  { name: "Brasa", hex: "#4B170A", role: "Fundo da feijoada e sombra das fotos.", dark: true },
];

const support: Swatch[] = [
  { name: "Creme escuro", hex: "#F3E2C7", role: "Fundo da cozinheira particular" },
  { name: "Linha", hex: "#E2CCAA", role: "Fios e divisores" },
  { name: "Café suave", hex: "#6E4B33", role: "Texto secundário (6,9:1)", dark: true },
  { name: "Verde médio", hex: "#2E6B47", role: "Ícones e rótulos das marmitas", dark: true },
  { name: "Mostarda escuro", hex: "#8F5B00", role: "Mostarda em texto sobre creme", dark: true },
  { name: "Barro", hex: "#A9321B", role: "Botão da feijoada", dark: true },
];

function Block({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <section className="border-t border-linha py-16 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-24">
      <div className="lg:col-span-4">
        <h2 className="font-serif text-[2rem] leading-tight">{title}</h2>
        <p className="mt-4 max-w-[26rem] text-pretty text-cafe-suave">{intro}</p>
      </div>
      <div className="mt-10 lg:col-span-8 lg:mt-0">{children}</div>
    </section>
  );
}

function Rule({ children }: { children: ReactNode }) {
  return <li className="border-b border-linha py-4 text-pretty">{children}</li>;
}

export default function MarcaPage() {
  return (
    <main className="paper min-h-screen">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <header className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Voltar ao site" className="py-2.5 text-cafe">
            <Wordmark />
          </Link>
          <Link href="/" className="min-h-11 py-2 font-medium underline underline-offset-4">
            Voltar ao site
          </Link>
        </header>

        <div className="py-16 lg:py-28">
          <h1 className="display max-w-[64rem] text-[clamp(3.2rem,9vw,8.5rem)] text-cafe">Identidade da marca</h1>
          <p className="mt-10 max-w-[40rem] text-[1.15rem] text-pretty text-cafe-suave">
            Comida caseira apresentada com cuidado. A fotografia mostra a comida, a tipografia dá a voz e quase nada
            mais entra na página. Assinatura: {brand.signature}
          </p>
        </div>

        <Block title="Símbolo e logotipo" intro="O “e” de Doce e Sabor é a conjunção que junta as coisas: rotina e festa, casa e mesa. Escrito à mão dentro de um traço circular, a borda de um prato visto de cima.">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex aspect-square items-center justify-center bg-cafe">
              <BrandSymbol className="size-1/2 text-creme" weight={7} />
            </div>
            <div className="flex aspect-square items-center justify-center bg-papel text-cafe">
              <BrandSymbol className="size-1/2" weight={7} />
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-6 bg-papel px-4 text-cafe">
              <Wordmark className="text-[1.6rem]" />
              <Wordmark className="text-[1rem]" line="Feijoada de Raiz" />
            </div>
          </div>
        </Block>

        <Block title="Cores" intro="Creme e café carregam a marca. Cada frente tem uma cor de acento (verde, mostarda, terracota), usada na direção de arte da sua seção e nunca espalhada pelo site. Nada de gradientes decorativos.">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {swatches.map((swatch) => (
              <div key={swatch.hex} className={swatch.wide ? "col-span-2" : ""}>
                <div
                  className={`flex aspect-[2/1] items-end p-4 ring-1 ring-cafe/10 ring-inset ${swatch.dark ? "text-creme" : "text-cafe"}`}
                  style={{ background: swatch.hex }}
                >
                  <span className="font-serif text-[1.3rem]">{swatch.name}</span>
                </div>
                <p className="mt-2 text-[0.85rem] text-cafe-suave">
                  <span className="font-medium text-cafe">{swatch.hex}</span> {swatch.role}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 font-semibold">Apoio</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {support.map((swatch) => (
              <div key={swatch.hex}>
                <div className="h-12 ring-1 ring-cafe/10 ring-inset" style={{ background: swatch.hex }} />
                <p className="mt-2 text-[0.8rem] text-cafe-suave">
                  <span className="font-medium text-cafe">{swatch.name}</span> {swatch.hex}
                  <br />
                  {swatch.role}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Tipografia" intro="Fraunces nos títulos, DM Sans no texto. A personalidade vem da escala: no slogan, a palavra que importa é grande e a que liga é pequena. Nada de destacar uma palavra com cor ou itálico.">
          <div className="space-y-10">
            <div>
              <p className="font-serif text-[clamp(1.3rem,2vw,1.8rem)] font-light">Feita com</p>
              <p className="display text-[clamp(3.5rem,8vw,7rem)] text-cafe">cuidado.</p>
              <p className="mt-3 text-[0.9rem] text-cafe-suave">Fraunces: o slogan em duas escalas</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-serif text-[1.6rem]">Como guardar</p>
                <p className="mt-2 text-[0.9rem] text-cafe-suave">Fraunces, subtítulos em caixa normal</p>
              </div>
              <div>
                <p>Texto corrido em DM Sans, 17px, entrelinha 1,6.</p>
                <p className="mt-2 text-[0.9rem] text-cafe-suave">DM Sans: texto, navegação, botões</p>
              </div>
            </div>
          </div>
        </Block>

        <Block title="Elementos gráficos" intro="Quase nenhum. A marca é reconhecida pelo símbolo, pela tipografia e pela cor de cada frente, não por enfeites.">
          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            <li>
              <div className="flex h-28 items-center bg-papel px-6">
                <Wordmark className="text-[1rem]" line="Marmitas congeladas" />
              </div>
              <p className="mt-4 font-semibold">Assinatura da frente</p>
              <p className="text-[0.95rem] text-cafe-suave">O logotipo com o nome da frente logo abaixo. Abre a seção de cada serviço.</p>
            </li>
            <li>
              <div className="flex h-28 items-center gap-8 bg-papel px-6 text-verde-medio">
                <Frost className="size-6" />
                <Leaf className="size-6" />
                <Steam className="size-6" />
              </div>
              <p className="mt-4 font-semibold">Ícones de conservação</p>
              <p className="text-[0.95rem] text-cafe-suave">Freezer, geladeira e aquecer, em traço fino. Só na informação prática.</p>
            </li>
          </ul>
        </Block>

        <Block title="Fotografia" intro="Luz natural, madeira, cerâmica e pano. A comida perto da lente. A mesma correção de cor em todas as fotos.">
          <div className="grid grid-cols-5 gap-4">
            <Figure name="caldo" sizes="40vw" frame="aspect-[4/5]" className="col-span-2" />
            <Figure name="lowCarb" sizes="50vw" frame="aspect-[4/3]" className="col-span-3 mt-16" />
          </div>
          <ul className="mt-10 border-t border-linha">
            <Rule>Prioridade absoluta para fotos reais da Vanda, da cozinha e dos pratos. As atuais são provisórias.</Rule>
            <Rule>Nunca fundo infinito, prato flutuando ou cenário de estúdio frio.</Rule>
            <Rule>Uma foto não se repete em duas seções.</Rule>
          </ul>
        </Block>

        <Block title="Composição e movimento" intro="O mesmo sistema, com composições diferentes por seção. Movimento só na abertura e quando a pessoa interage.">
          <ul className="border-t border-linha">
            {serviceOrder.map((id) => (
              <Rule key={id}>
                <span className="font-semibold">{services[id].kind}.</span>{" "}
                {id === "marmitas"
                  ? "Abertura em tela cheia com sombra verde; depois as categorias em sanfona, cada uma com a sua foto."
                  : id === "vanda"
                    ? "Abertura com as panelas no fogão; depois o passo a passo em colunas, como uma receita, e as ocasiões ao lado de uma foto de preparo."
                    : "Abertura em tela cheia que termina em terracota; uma faixa de feijoadas e eventos passando devagar; a ficha do evento."}
              </Rule>
            ))}
            <Rule>Cada seção abre como um capítulo: foto em tela cheia e título no centro, entrando letra por letra. Tudo parado com movimento reduzido.</Rule>
            <Rule>Sem rótulos em caixa alta, sem numeração de seção, sem legendas decorativas.</Rule>
            <Rule>Cantos retos em fotos e blocos. Só os botões são arredondados.</Rule>
          </ul>
        </Block>
      </div>
    </main>
  );
}
