import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { BayLeaf, BrandSymbol, Frost, HandArrow, HandRing, Leaf, Steam } from "@/components/brand/marks";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Identidade da marca",
  description: "Sistema de identidade visual da Doce e Sabor: logotipo, símbolo, cores, tipografia, elementos gráficos e fotografia.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/marca" },
};

type Swatch = { name: string; hex: string; role: string; dark?: boolean };

const palettes: { title: string; note: string; swatches: Swatch[] }[] = [
  {
    title: "Institucional",
    note: "Creme e café carregam a marca sozinhos. Todo texto corrido é café sobre creme (13,5:1).",
    swatches: [
      { name: "Creme", hex: "#FCF1E1", role: "Fundo principal" },
      { name: "Creme escuro", hex: "#F3E2C7", role: "Superfícies, espera de imagem" },
      { name: "Linha", hex: "#E2CCAA", role: "Fios e divisões" },
      { name: "Café suave", hex: "#6E4B33", role: "Texto secundário (6,9:1)", dark: true },
      { name: "Café", hex: "#3B1F0E", role: "Texto, botões, rodapé", dark: true },
    ],
  },
  {
    title: "Marmitas congeladas",
    note: "Verde de horta: rotina, frescor, ordem. O verde claro dá respiro às informações práticas.",
    swatches: [
      { name: "Verde profundo", hex: "#0F3B26", role: "Campo principal", dark: true },
      { name: "Verde médio", hex: "#2E6B47", role: "Ícones e números", dark: true },
      { name: "Verde folha", hex: "#A9C9A0", role: "Detalhes sobre o verde" },
      { name: "Verde claro", hex: "#D7E6CF", role: "Kits, pedido, conservação" },
    ],
  },
  {
    title: "Vanda Camargo",
    note: "Mostarda é a luz da cozinha de casa. Sobre ela, só café — nunca branco.",
    swatches: [
      { name: "Mostarda", hex: "#F2A922", role: "Campo principal" },
      { name: "Mostarda clara", hex: "#FBE4B4", role: "Superfícies de apoio" },
      { name: "Mostarda escura", hex: "#8F5B00", role: "Texto mostarda sobre creme", dark: true },
    ],
  },
  {
    title: "Feijoada de Raiz",
    note: "Barro e brasa: a panela no fogo. Terracota pura só em blocos e títulos grandes.",
    swatches: [
      { name: "Terracota", hex: "#D9452B", role: "Destaques, títulos grandes", dark: true },
      { name: "Barro", hex: "#A9321B", role: "Campo principal (creme 5,9:1)", dark: true },
      { name: "Brasa", hex: "#4B170A", role: "Fundo das fotos", dark: true },
      { name: "Terracota clara", hex: "#F4C9B8", role: "Apoio sobre creme" },
    ],
  },
];

function Block({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <section className="border-t border-cafe/15 py-16 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-24">
      <div className="lg:col-span-4">
        <h2 className="font-serif text-[2.2rem] leading-tight font-medium tracking-[-0.02em]">{title}</h2>
        <p className="mt-4 max-w-[26rem] text-pretty text-cafe-suave">{intro}</p>
      </div>
      <div className="mt-10 lg:col-span-8 lg:mt-0">{children}</div>
    </section>
  );
}

export default function MarcaPage() {
  return (
    <main className="paper min-h-screen">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <header className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Voltar ao site">
            <Wordmark />
          </Link>
          <Link href="/" className="min-h-11 py-2 font-medium underline underline-offset-4">
            Voltar ao site
          </Link>
        </header>

        <div className="py-16 lg:py-28">
          <p className="note text-[1.3rem] text-cafe-suave">Sistema de identidade</p>
          <h1 className="display-voice mt-4 max-w-[60rem] text-[clamp(3.2rem,9vw,8.5rem)] font-semibold">A cozinha da Vanda.</h1>
          <p className="mt-8 max-w-[38rem] text-[1.15rem] text-pretty text-cafe-suave">
            Uma mesma cozinha que facilita a rotina, cuida de uma casa e reúne gente para celebrar. Três frentes com
            temperamentos diferentes, uma só voz: {brand.signature}
          </p>
        </div>

        <Block
          title="O símbolo"
          intro="O “e” de Doce e Sabor é a conjunção que junta as coisas: rotina e festa, casa e mesa, quem cozinha e quem come. Ele é escrito à mão dentro de um traço circular — a borda de um prato visto de cima e o círculo de caneta que marca o que importa num caderno de receitas."
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex aspect-square items-center justify-center bg-cafe text-mostarda">
              <BrandSymbol className="size-1/2" weight={7} title="Símbolo sobre café" />
            </div>
            <div className="flex aspect-square items-center justify-center bg-creme-escuro text-cafe">
              <BrandSymbol className="size-1/2" weight={7} title="Símbolo sobre creme" />
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-6 bg-papel text-cafe">
              <div className="flex items-end gap-5">
                <BrandSymbol className="size-16" weight={9} title="Símbolo a 64 pixels" />
                <BrandSymbol className="size-8" weight={11} title="Símbolo a 32 pixels" />
                <BrandSymbol className="size-4" weight={14} title="Símbolo a 16 pixels" />
              </div>
              <p className="text-[0.9rem] text-cafe-suave">Em tamanhos pequenos, o traço engrossa.</p>
            </div>
          </div>
        </Block>

        <Block
          title="Logotipo"
          intro="Fraunces seminegrito, com o “e” em itálico leve: a conjunção muda de voz porque é ela que dá sentido ao nome. Abaixo, as assinaturas de cada frente — mesma marca, um fio de cor e o nome da frente."
        >
          <div className="space-y-6">
            <div className="flex min-h-56 items-center justify-center bg-papel px-6 text-[2.2rem] sm:text-[3.4rem]">
              <Wordmark />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex min-h-40 items-center justify-center bg-verde px-6 text-[1.4rem] text-creme">
                <Wordmark line="Marmitas congeladas" ruleClassName="bg-verde-folha" />
              </div>
              <div className="flex min-h-40 items-center justify-center bg-mostarda px-6 text-[1.4rem] text-cafe">
                <Wordmark line="Vanda Camargo" ruleClassName="bg-cafe" />
              </div>
              <div className="flex min-h-40 items-center justify-center bg-barro px-6 text-[1.4rem] text-creme">
                <Wordmark line="Feijoada de Raiz" ruleClassName="bg-mostarda" />
              </div>
            </div>
          </div>
        </Block>

        <Block
          title="Cor"
          intro="Cada frente tem um campo de cor próprio, mas nunca aparece sem o creme e o café da marca. Uma cor forte por vez; as outras recuam."
        >
          <div className="space-y-12">
            {palettes.map((palette) => (
              <div key={palette.title}>
                <h3 className="font-serif text-[1.5rem] font-medium">{palette.title}</h3>
                <p className="mt-1 max-w-[36rem] text-cafe-suave">{palette.note}</p>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {palette.swatches.map((swatch) => (
                    <li key={swatch.hex}>
                      <div
                        className={`flex aspect-[4/3] items-end p-3 ring-1 ring-cafe/10 ring-inset ${swatch.dark ? "text-creme" : "text-cafe"}`}
                        style={{ backgroundColor: swatch.hex }}
                      >
                        <span className="text-[0.85rem] font-medium">{swatch.hex}</span>
                      </div>
                      <p className="mt-2 text-[0.95rem] font-semibold">{swatch.name}</p>
                      <p className="text-[0.85rem] text-cafe-suave">{swatch.role}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        <Block
          title="Tipografia"
          intro="Duas famílias com papéis que não se cruzam. Fraunces fala; DM Sans informa. Os eixos SOFT e WONK da Fraunces só sobem ao máximo nos títulos de abertura e nos números."
        >
          <div className="space-y-10">
            <div>
              <p className="text-[0.9rem] text-cafe-suave">Fraunces — voz de cartaz (SOFT 100, WONK 1)</p>
              <p className="display-voice mt-2 text-[clamp(3.5rem,8vw,6.5rem)] font-semibold">cuidado. 7 14 21</p>
            </div>
            <div>
              <p className="text-[0.9rem] text-cafe-suave">Fraunces — títulos de seção (500)</p>
              <p className="mt-2 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.02em]">
                Mesa farta. Gente reunida.
              </p>
            </div>
            <div>
              <p className="text-[0.9rem] text-cafe-suave">Fraunces itálico — anotação de caderno</p>
              <p className="note mt-2 text-[1.6rem]">comida de verdade, feita para estar à mesa</p>
            </div>
            <div>
              <p className="text-[0.9rem] text-cafe-suave">DM Sans — texto, navegação, botões (17px / 1,6)</p>
              <p className="mt-2 max-w-[36rem]">
                Refeições prontas em kits de 7, 14 ou 21, para ter comida de verdade nos dias em que não dá tempo de
                cozinhar. Linhas curtas, frases diretas, sem caixa-alta.
              </p>
            </div>
          </div>
        </Block>

        <Block
          title="Traço à mão"
          intro="Um único traço de caneta, monolinear e com ponta arredondada. Ele circula informações reais (a categoria escolhida, os 200 convidados), aponta e desenha ingredientes. Nunca enfeita espaço vazio."
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="relative flex aspect-square items-center justify-center bg-papel">
              <span className="relative px-8 py-4 font-serif text-[1.8rem]">
                Saladas
                <HandRing weight={1.6} className="absolute inset-0 size-full text-mostarda-escuro" />
              </span>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-3 bg-papel">
              <HandArrow className="w-28 text-cafe" />
              <p className="note text-[1.2rem]">aponta, não decora</p>
            </div>
            <div className="flex aspect-square items-center justify-center gap-6 bg-papel text-cafe">
              <BayLeaf className="size-16" />
              <Steam className="size-12" />
              <Frost className="size-10" />
              <Leaf className="size-10" />
            </div>
          </div>
        </Block>

        <Block
          title="Molduras"
          intro="Cada frente tem um jeito de enquadrar a foto. A moldura já diz de qual serviço se trata, antes de qualquer texto."
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Institucional", desc: "Círculo: o prato visto de cima.", shape: <div className="aspect-square rounded-full bg-cafe/80" /> },
              { label: "Marmitas", desc: "Retângulo firme: bandeja, freezer, rotina.", shape: <div className="aspect-[4/3] bg-verde" /> },
              {
                label: "Vanda",
                desc: "Retrato vertical sobre um campo mostarda deslocado.",
                shape: (
                  <div className="relative aspect-[4/5]">
                    <div className="absolute top-[14%] -left-2 h-full w-[78%] bg-mostarda" />
                    <div className="relative ml-auto h-full w-[86%] bg-cafe/70" />
                  </div>
                ),
              },
              { label: "Feijoada", desc: "Sangria: a mesa não cabe na moldura.", shape: <div className="-mx-2 aspect-[21/12] bg-barro" /> },
            ].map((frame) => (
              <div key={frame.label}>
                <div className="flex h-40 items-center">{<div className="w-full">{frame.shape}</div>}</div>
                <p className="mt-4 font-semibold">{frame.label}</p>
                <p className="text-[0.95rem] text-cafe-suave">{frame.desc}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block
          title="Fotografia"
          intro="Luz natural quente, sombra de verdade, cerâmica, madeira e pano. A comida perto da lente, com textura e vapor. Nunca fundo infinito, nunca prato flutuando."
        >
          <dl className="grid gap-8 md:grid-cols-3">
            <div>
              <dt className="flex items-center gap-2 font-semibold">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-verde" />
                Marmitas
              </dt>
              <dd className="mt-2 text-cafe-suave">
                Pratos e potes de cima, ingredientes reconhecíveis, cores naturais. Variedade lado a lado, ordem de rotina.
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 font-semibold">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-mostarda" />
                Vanda Camargo
              </dt>
              <dd className="mt-2 text-cafe-suave">
                Retratos reais da Vanda, mãos em ação, utensílios em uso, a cozinha do cliente. Presença e confiança, sem pose.
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 font-semibold">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-terracota" />
                Feijoada de Raiz
              </dt>
              <dd className="mt-2 text-cafe-suave">
                Panela no fogo, vapor, acompanhamentos em volta, mesa cheia e gente se servindo. Abundância, nunca bagunça.
              </dd>
            </div>
          </dl>
          <p className="mt-10 max-w-[40rem] bg-mostarda-claro px-5 py-4 text-[0.95rem]">
            As fotos do site hoje são provisórias e aparecem marcadas como “Foto ilustrativa”. Substitua-as em
            <code className="mx-1 font-semibold">src/content/images.ts</code>
            pelos registros reais da Doce e Sabor.
          </p>
        </Block>

        <Block
          title="Composição"
          intro="Regras curtas para manter o sistema reconhecível em qualquer peça."
        >
          <ol className="space-y-5">
            {[
              "Alinhamento à esquerda, grade de 12 colunas, assimetria intencional: texto e imagem nunca dividem a tela ao meio.",
              "Um momento de escala por seção. Se o título é enorme, o resto fica quieto.",
              "Uma cor forte por vez. A cor de cada frente ocupa um campo inteiro — não se espalha em detalhes.",
              "Cantos retos em fotos e blocos. O único elemento totalmente arredondado é o botão: a borda do prato.",
              "Numeração só para passos reais (como pedir, como funciona).",
              "Respiro generoso: 96–144 px entre seções no desktop, 96 px no celular.",
            ].map((rule, index) => (
              <li key={rule} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="display-voice text-[2rem] text-cafe-suave">{index + 1}</span>
                <span className="pt-1">{rule}</span>
              </li>
            ))}
          </ol>
        </Block>
      </div>
    </main>
  );
}
