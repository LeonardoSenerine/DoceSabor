import type { Metadata } from "next";
import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Ficha, Tape } from "@/components/brand/kitchen";
import { HandRing } from "@/components/brand/marks";
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
          <div>
            <Tape tilt={-2}>página não encontrada</Tape>
          </div>
          <p aria-hidden="true" className="relative mt-6 inline-block">
            <span className="display-voice block text-[clamp(7rem,22vw,17rem)] font-semibold text-cafe">404</span>
            <HandRing weight={1.6} className="pointer-events-none absolute -inset-x-[8%] -inset-y-[4%] size-[116%] -rotate-6 text-terracota" />
          </p>
          <h1 className="mt-8 max-w-[34rem] font-serif text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.02] font-medium tracking-[-0.02em] text-balance">
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

        <Ficha kind="sumário" title="Talvez você procure" rule="bg-terracota" className="lg:col-span-4 lg:col-start-9">
          <ul>
            {serviceOrder.map((id) => (
              <li key={id}>
                <Link href={`/#${services[id].anchor}`} className="font-medium underline-offset-4 hover:underline">
                  {services[id].kind}
                </Link>
              </li>
            ))}
          </ul>
        </Ficha>
      </div>
    </main>
  );
}
