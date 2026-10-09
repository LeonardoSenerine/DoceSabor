"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { HandRing, Leaf } from "@/components/brand/marks";
import { Photo } from "@/components/ui/Photo";
import type { MealCategory } from "@/content/site";

/**
 * Categorias de marmita como abas. A categoria escolhida ganha o círculo de
 * caneta — o mesmo gesto de marcar uma receita no caderno.
 */
export function CategoryExplorer({ categories }: { categories: MealCategory[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = categories[active];

  const select = (index: number) => {
    const next = (index + categories.length) % categories.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, () => void> = {
      ArrowDown: () => select(active + 1),
      ArrowRight: () => select(active + 1),
      ArrowUp: () => select(active - 1),
      ArrowLeft: () => select(active - 1),
      Home: () => select(0),
      End: () => select(categories.length - 1),
    };
    const action = keys[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div
        role="tablist"
        aria-label="Categorias de marmitas"
        aria-orientation="vertical"
        className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 lg:gap-y-2"
      >
        {categories.map((category, index) => {
          const selected = index === active;
          return (
            <button
              key={category.id}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              id={`${baseId}-tab-${category.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={onKeyDown}
              className={`group relative min-h-12 w-fit py-2 pr-4 text-left font-serif text-[clamp(1.4rem,3vw,2.6rem)] leading-tight tracking-[-0.015em] transition-colors duration-300 ${
                selected ? "text-creme" : "text-creme/55 hover:text-creme/85"
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              <HandRing
                weight={1.5}
                className={`absolute -inset-x-4 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+1rem)] text-mostarda transition-[--draw] duration-700 ease-(--ease-cozinha) motion-reduce:transition-none ${
                  selected ? "[--draw:360deg]" : "[--draw:0deg]"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="lg:col-span-7"
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-verde-medio">
          {categories.map((category, index) => (
            <div
              key={category.id}
              aria-hidden={index !== active}
              className={`absolute inset-0 transition-[opacity,scale] duration-[900ms] ease-(--ease-cozinha) motion-reduce:transition-none ${
                index === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
              }`}
            >
              <Photo
                name={category.photo}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="size-full bg-verde-medio"
                tag={index === active ? "bottom-right" : "none"}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start" aria-live="polite">
          <p className="max-w-[32rem] text-[1.1rem] text-pretty text-creme/85">
            <strong className="font-semibold text-creme">{current.name}.</strong> {current.description}
          </p>
          {current.notes ? (
            <ul className="space-y-1.5 text-[0.95rem] text-verde-folha">
              {current.notes.map((note) => (
                <li key={note} className="flex items-center gap-2">
                  <Leaf className="size-4 shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
