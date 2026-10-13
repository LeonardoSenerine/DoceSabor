"use client";

import { useId, useState } from "react";
import { Leaf } from "@/components/brand/marks";
import { Photo } from "@/components/ui/Photo";
import type { MealCategory } from "@/content/site";

const DESKTOP = "(min-width: 1024px)";

/**
 * Sanfona das categorias de marmita. Apresenta, não vende: sem preço, sem
 * quantidade. No desktop, faixas de foto lado a lado; a escolhida se abre.
 * No celular, uma lista vertical em que cada categoria abre a sua foto.
 */
export function CategoryAccordion({ categories }: { categories: MealCategory[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  const openOnHover = (index: number) => {
    if (window.matchMedia(DESKTOP).matches) setActive(index);
  };

  return (
    <ul id="categorias" className="border-t border-linha lg:flex lg:h-[36rem] lg:gap-2 lg:border-t-0">
      {categories.map((category, index) => {
        const open = index === active;
        const buttonId = `${baseId}-botao-${index}`;
        const panelId = `${baseId}-painel-${index}`;

        return (
          <li
            key={category.id}
            onMouseEnter={() => openOnHover(index)}
            style={{ flexGrow: open ? 6 : 1 }}
            className="relative border-b border-linha transition-[flex-grow] duration-700 ease-(--ease-cozinha) motion-reduce:transition-none lg:basis-0 lg:overflow-hidden lg:border-b-0"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setActive(index)}
                className="group flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left lg:absolute lg:inset-0 lg:z-10 lg:min-h-0 lg:items-end lg:justify-start lg:p-5 focus-visible:outline-offset-[-4px]"
              >
                <span
                  className={`font-serif text-[1.6rem] leading-none text-verde transition-opacity duration-300 lg:text-[1.7rem] lg:text-creme lg:[writing-mode:vertical-rl] lg:rotate-180 ${
                    open ? "lg:opacity-0" : "lg:opacity-100"
                  }`}
                >
                  {category.name}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative size-4 shrink-0 text-verde transition-transform duration-300 lg:hidden ${open ? "rotate-45" : ""}`}
                >
                  <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>

            {/* No celular, foto e texto ficam numa gaveta que abre com altura animada.
                No desktop, a gaveta some (lg:contents) e a foto vira a faixa. */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-(--ease-cozinha) motion-reduce:transition-none lg:contents ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden lg:contents">
                <div className="relative lg:absolute lg:inset-0">
                  <Photo
                    name={category.photo}
                    tag="none"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="aspect-[4/3] lg:aspect-auto lg:h-full"
                    imgClassName={`transition-transform duration-[1200ms] ease-(--ease-cozinha) motion-reduce:transition-none ${
                      open ? "scale-100" : "scale-110"
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 hidden transition-opacity duration-700 lg:block ${
                      open
                        ? "bg-[linear-gradient(to_top,rgb(15_59_38/0.92),rgb(15_59_38/0.35)_45%,transparent_70%)]"
                        : "bg-verde/50"
                    }`}
                  />
                </div>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!open}
                  className={`pt-5 pb-8 lg:pointer-events-none lg:absolute lg:bottom-0 lg:left-0 lg:z-10 lg:w-[min(34rem,52vw)] lg:p-8 lg:text-creme lg:motion-safe:animate-[panel-in_0.5s_var(--ease-cozinha)_0.35s_both] ${
                    open ? "" : "lg:hidden"
                  }`}
                >
                  <p className="hidden font-serif text-[clamp(2.4rem,3.6vw,3.4rem)] leading-none lg:block">{category.name}</p>
                  <p className="max-w-[30rem] text-[1.05rem] text-pretty text-cafe-suave lg:mt-4 lg:text-creme/90">
                    {category.description}
                  </p>
                  {category.notes ? (
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.95rem] text-verde-medio lg:text-verde-folha">
                      {category.notes.map((note) => (
                        <li key={note} className="flex items-center gap-2">
                          <Leaf className="size-3.5 shrink-0" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
