"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { contact, messages, navigation } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [tucked, setTucked] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    // Recolhe ao descer (mais espaço para a fotografia) e volta ao subir.
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 560 && y > last + 6) setTucked(true);
      else if (y < last - 6 || y <= 560) setTucked(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  return (
    <header
      onFocusCapture={() => setTucked(false)}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,translate] duration-500 ease-(--ease-cozinha) ${
        tucked ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-creme/95 text-cafe shadow-[0_1px_0_var(--color-linha)] backdrop-blur-[2px]"
          : "bg-transparent text-creme" /* sobre a foto do hero */
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-6 px-4 sm:px-8 lg:h-20 lg:px-12">
        <a href="#inicio" className="py-2.5 text-[0.95rem] lg:text-base" aria-label="Doce e Sabor, voltar ao início">
          <Wordmark />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.92rem] xl:gap-9">
            {navigation.map((item, index) => (
              <li key={item.href} data-menu-item style={{ "--i": index } as CSSProperties}>
                <a
                  href={item.href}
                  className="relative py-2 transition-colors duration-300 hover:text-cafe after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block lg:hidden xl:block">
            <WhatsAppLink message={messages.geral} className="bg-cafe text-creme hover:bg-verde">
              Fale com a Vanda
            </WhatsAppLink>
          </div>
          <button
            type="button"
            onClick={openMenu}
            className="inline-flex min-h-11 items-center gap-2 px-2 text-[0.95rem] font-medium lg:hidden"
            aria-haspopup="dialog"
          >
            <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
              <span className="h-[1.5px] w-full bg-current" />
              <span className="h-[1.5px] w-3/4 bg-current" />
            </span>
            Menu
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        data-menu
        className="m-0 h-dvh max-h-none w-full max-w-none bg-cafe p-0 text-creme backdrop:bg-cafe/40 open:flex open:flex-col"
        onClick={(event) => {
          // Fecha ao tocar num link (navegação por âncora).
          if ((event.target as HTMLElement).closest("a")) closeMenu();
        }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-8">
          <Wordmark className="text-[0.95rem]" />
          <button type="button" onClick={closeMenu} className="inline-flex min-h-11 items-center gap-2 px-2 font-medium">
            <span aria-hidden="true" className="relative block size-4">
              <span className="absolute top-1/2 left-0 h-[1.5px] w-full rotate-45 bg-current" />
              <span className="absolute top-1/2 left-0 h-[1.5px] w-full -rotate-45 bg-current" />
            </span>
            Fechar
          </button>
        </div>

        <nav aria-label="Menu principal" className="flex flex-1 flex-col justify-center px-6 sm:px-10">
          <ul className="space-y-2">
            {navigation.map((item, index) => (
              <li key={item.href} data-menu-item style={{ "--i": index } as CSSProperties}>
                <a href={item.href} className="block py-1.5 font-serif text-[2.1rem] leading-tight">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4 px-6 pb-10 sm:px-10">
          <WhatsAppLink message={messages.geral} className="w-full bg-creme text-cafe hover:bg-linha">
            Fale com a Vanda
          </WhatsAppLink>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block min-h-11 py-2 text-center underline underline-offset-4"
          >
            Instagram {contact.instagramHandle}
          </a>
        </div>
      </dialog>
    </header>
  );
}
