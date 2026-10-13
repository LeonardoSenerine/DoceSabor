import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Footer } from "@/components/layout/Footer";
import { brand, contact, messages, privacyUpdatedAt } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Privacidade e cookies",
  description: `Como o site da ${brand.name} trata dados pessoais e cookies.`,
  alternates: { canonical: "/privacidade" },
};

/**
 * Política escrita a partir do que o site realmente faz: sem cookies, sem
 * análise, sem armazenamento no navegador. Se isso mudar (por exemplo, ao
 * instalar uma ferramenta de métricas), este texto precisa ser revisado.
 */
function Item({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-linha py-10 lg:grid lg:grid-cols-12 lg:gap-12">
      <h2 className="font-serif text-[1.6rem] leading-tight text-cafe lg:col-span-4">{title}</h2>
      <div className="mt-4 max-w-[40rem] space-y-4 text-pretty text-cafe-suave lg:col-span-8 lg:mt-0 [&_strong]:font-semibold [&_strong]:text-cafe">
        {children}
      </div>
    </section>
  );
}

const link = "font-medium text-cafe underline underline-offset-4 hover:decoration-2";

export default function PrivacidadePage() {
  return (
    <>
      <main className="paper min-h-screen">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
          <header className="flex h-20 items-center justify-between">
            <Link href="/" aria-label="Doce e Sabor, voltar ao site" className="py-2.5">
              <Wordmark />
            </Link>
            <Link href="/" className="min-h-11 py-2 font-medium underline underline-offset-4">
              Voltar ao site
            </Link>
          </header>

          <div className="py-16 lg:py-24">
            <p className="text-cafe-suave">Atualizada em {privacyUpdatedAt}</p>
            <h1 className="display mt-6 max-w-[52rem] text-[clamp(3rem,8vw,7rem)] text-cafe">
              Privacidade e cookies.
            </h1>
            <p className="mt-8 max-w-[38rem] text-[1.15rem] text-pretty text-cafe-suave">
              Em resumo: este site não usa cookies, não tem cadastro e não guarda os dados que você digita. Os pedidos
              acontecem pelo WhatsApp, só quando você decide enviar a mensagem.
            </p>
          </div>

          <div className="pb-24">
            <Item title="Quem somos">
              <p>
                A {brand.name} é a marca gastronômica de {brand.owner}: marmitas congeladas, cozinheira particular e
                buffet de feijoada, com atendimento em Campinas, São Paulo e interior do estado.
              </p>
              <p>
                Para qualquer assunto sobre seus dados, fale com a gente pelo{" "}
                <a href={whatsappUrl(messages.geral)} target="_blank" rel="noopener noreferrer" className={link}>
                  WhatsApp {contact.whatsappDisplay}
                </a>
                .
              </p>
            </Item>

            <Item title="Cookies">
              <p>
                <strong>Não usamos cookies.</strong> O site não instala cookies próprios nem de terceiros, não usa
                ferramentas de análise de audiência, pixels de anúncio ou rastreamento, e não guarda informações no
                armazenamento do seu navegador.
              </p>
              <p>
                Por isso não há aviso de cookies para aceitar. Se um dia passarmos a usar alguma ferramenta desse tipo,
                esta página será atualizada antes, e pediremos o seu consentimento quando a lei exigir.
              </p>
            </Item>

            <Item title="O que você digita no site">
              <p>
                A <strong>ficha de orçamento da feijoada</strong> não envia nada para o site. Nome, empresa, e-mail,
                endereço, data, número de convidados e observações ficam só no seu navegador até você tocar em
                “Solicite um orçamento”.
              </p>
              <p>
                Nesse momento o site abre o WhatsApp com a mensagem pronta, e é você quem decide se envia. Nada fica
                salvo no site, e fechar a página apaga o que foi digitado.
              </p>
            </Item>

            <Item title="Quando você fala com a gente">
              <p>
                As mensagens enviadas pelo WhatsApp e pelo Instagram usam os serviços da Meta e seguem também as
                políticas dessas plataformas. Usamos os dados que você nos manda (como nome, e-mail, endereço do evento e
                preferências de cardápio) apenas para responder, preparar o orçamento e combinar o atendimento.
              </p>
              <p>Não vendemos nem compartilhamos esses dados com terceiros para fins de publicidade.</p>
            </Item>

            <Item title="Hospedagem, fontes e imagens">
              <p>
                O site é hospedado pela Vercel, que pode registrar dados técnicos de acesso, como endereço IP, data e
                navegador, para manter o serviço seguro e funcionando.
              </p>
              <p>
                As fontes e as fotos são entregues pelo próprio endereço do site, sem que o seu navegador se conecte a
                serviços de fontes ou bancos de imagem.
              </p>
            </Item>

            <Item title="Links para outros sites">
              <p>
                Os botões de WhatsApp e Instagram, e o crédito de desenvolvimento no rodapé, levam a sites de terceiros,
                que têm as suas próprias políticas de privacidade.
              </p>
            </Item>

            <Item title="Seus direitos">
              <p>
                Pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode pedir para saber quais dados seus
                temos das conversas, corrigir ou pedir a exclusão deles. Basta enviar o pedido pelo{" "}
                <a href={whatsappUrl(messages.geral)} target="_blank" rel="noopener noreferrer" className={link}>
                  WhatsApp
                </a>
                .
              </p>
            </Item>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
