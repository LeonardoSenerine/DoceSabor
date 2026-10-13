import type { Metadata } from "next";
import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { messages, serviceOrder, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="paper flex min-h-svh flex-col">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <header className="flex h-20 items-center">
          <Link href="/" aria-label="Doce e Sabor, voltar ao início" className="py-2.5">
            <Wordmark />
          </Link>
        </header>
      </div>

      <div className="mx-auto grid w-full max-w-[90rem] flex-1 items-center gap-14 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="lg:col-span-7">
          <p aria-hidden="true" className="display text-[clamp(7rem,22vw,17rem)] text-terracota">404</p>
          <h1 className="mt-6 max-w-[34rem] font-serif text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] text-balance">
            Essa receita não está no caderno.
          </h1>
          <p className="mt-5 max-w-[30rem] text-pretty text-cafe-suave">
            O endereço pode ter mudado ou sido digitado com algum erro. Volte ao início ou escolha por onde continuar.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cafe px-6 py-3 font-medium text-creme transition-colors duration-300 hover:bg-verde"
            >
              Voltar ao início
            </Link>
            <WhatsAppLink variant="text" message={messages.geral}>
              Falar pelo WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <nav aria-label="Talvez você procure" className="lg:col-span-4 lg:col-start-9">
          <p className="font-serif text-[1.4rem]">Talvez você procure</p>
          <ul className="mt-5 border-t border-linha">
            {serviceOrder.map((id) => (
              <li key={id} className="border-b border-linha">
                <Link href={`/#${services[id].anchor}`} className="group flex items-baseline gap-4 py-4">
                  <span className="font-serif text-[1.4rem] transition-colors group-hover:text-cafe">{services[id].kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
