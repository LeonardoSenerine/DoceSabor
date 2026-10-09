"use client";

import { useMemo, useState } from "react";
import { Tape } from "@/components/brand/kitchen";
import { HandRing, Leaf } from "@/components/brand/marks";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppLink";
import { kitBuilder, messages, type MealCategory } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

type Counts = Record<string, number>;

function plural(n: number) {
  return n === 1 ? "refeição" : "refeições";
}

/**
 * Monte o seu kit: cada categoria é um pote com etiqueta de fita crepe.
 * O cliente escolhe quantas quiser de cada uma; a ficha ao lado soma o kit
 * e monta a mensagem do WhatsApp. Nada é fixo, nada é salvo no site.
 */
export function KitBuilder({ categories }: { categories: MealCategory[] }) {
  const [counts, setCounts] = useState<Counts>({});
  const [notes, setNotes] = useState("");

  const chosen = useMemo(() => categories.filter((c) => (counts[c.id] ?? 0) > 0), [categories, counts]);
  const total = chosen.reduce((sum, c) => sum + (counts[c.id] ?? 0), 0);

  const change = (id: string, delta: number) =>
    setCounts((prev) => {
      const next = Math.min(kitBuilder.maxPerCategory, Math.max(0, (prev[id] ?? 0) + delta));
      return { ...prev, [id]: next };
    });

  const message = useMemo(() => {
    if (total === 0) return notes.trim() ? `${messages.marmitas}\n\nPreferências: ${notes.trim()}` : messages.marmitas;
    const lines = [
      messages.marmitas,
      "",
      "Montei este kit no site:",
      ...chosen.map((c) => `- ${c.name}: ${counts[c.id]}`),
      `Total: ${total} ${plural(total)}`,
    ];
    if (notes.trim()) lines.push("", `Preferências: ${notes.trim()}`);
    return lines.join("\n");
  }, [chosen, counts, notes, total]);

  return (
    <div id="monte-seu-kit" className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-8">
      <ul className="grid gap-x-6 gap-y-9 sm:grid-cols-2 sm:gap-y-12 xl:grid-cols-3">
        {categories.map((category) => {
          const count = counts[category.id] ?? 0;
          return (
            <li key={category.id} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-4 sm:flex sm:flex-col">
              <div className="relative self-start sm:self-auto">
                <Photo
                  name={category.photo}
                  sizes="(min-width: 1280px) 20vw, (min-width: 640px) 45vw, 104px"
                  className="aspect-square bg-verde-medio sm:aspect-[4/3]"
                  tag="none"
                />
                <span aria-hidden="true" className="absolute -top-3 left-4 hidden sm:block">
                  <Tape tilt={-2.5} className="text-[1.15rem]">
                    {category.name}
                  </Tape>
                </span>
              </div>

              <div className="flex flex-col sm:flex-1">
              <h4 className="note text-[1.3rem] leading-tight sm:sr-only">{category.name}</h4>
              <p className="mt-1 text-[0.95rem] text-pretty text-creme/80 sm:mt-5 sm:text-[1.0625rem]">{category.description}</p>
              {category.notes ? (
                <ul className="mt-3 space-y-1 text-[0.92rem] text-verde-folha">
                  {category.notes.map((note) => (
                    <li key={note} className="flex items-center gap-2">
                      <Leaf className="size-3.5 shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div
                role="group"
                aria-label={`Quantidade de ${category.name}`}
                className="mt-4 flex items-center justify-end gap-4 border-t sm:justify-between border-creme/15 pt-3 sm:mt-auto sm:pt-4"
              >
                <span className="note hidden text-[1.05rem] text-creme/70 sm:inline">{plural(count)}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => change(category.id, -1)}
                    disabled={count === 0}
                    aria-label={`Tirar uma refeição de ${category.name}`}
                    className="inline-flex size-11 items-center justify-center rounded-full text-[1.4rem] ring-1 ring-creme/35 transition-colors ring-inset hover:bg-creme/10 disabled:opacity-35"
                  >
                    −
                  </button>
                  <span className="relative inline-flex w-12 justify-center sm:w-14">
                    <output aria-live="polite" className="display-voice text-[2.4rem] leading-none font-semibold tabular-nums">
                      {count}
                    </output>
                    <HandRing
                      weight={1.5}
                      className={`pointer-events-none absolute -inset-2 size-[calc(100%+1rem)] text-mostarda transition-[--draw] duration-700 ease-(--ease-cozinha) motion-reduce:transition-none ${
                        count > 0 ? "[--draw:360deg]" : "[--draw:0deg]"
                      }`}
                    />
                  </span>
                  <button
                    type="button"
                    onClick={() => change(category.id, 1)}
                    disabled={count >= kitBuilder.maxPerCategory}
                    aria-label={`Adicionar uma refeição de ${category.name}`}
                    className="inline-flex size-11 items-center justify-center rounded-full bg-creme text-[1.4rem] text-verde transition-colors hover:bg-verde-folha disabled:opacity-35"
                  >
                    +
                  </button>
                </div>
              </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Barra do kit no celular: aparece enquanto se monta o kit */}
      {total > 0 ? (
        <div className="sticky bottom-3 z-20 mt-8 lg:hidden">
          <a
            href="#seu-kit"
            className="flex min-h-14 items-center justify-between gap-4 rounded-full bg-creme px-6 py-3 text-verde shadow-[0_12px_30px_-12px_rgb(0_0_0/0.5)]"
          >
            <span>
              Seu kit: <strong className="font-semibold">{total} {plural(total)}</strong>
            </span>
            <span className="font-medium underline underline-offset-4">Revisar e enviar</span>
          </a>
        </div>
      ) : null}
      </div>

      {/* Ficha do kit */}
      <aside id="seu-kit" aria-labelledby="seu-kit-titulo" className="lg:col-span-4">
        <div className="ficha bg-papel text-cafe lg:sticky lg:top-28">
          <div className="flex items-baseline justify-between gap-4 px-6 pt-7 pb-4 sm:px-8">
            <h3 id="seu-kit-titulo" className="font-serif text-[1.75rem] leading-tight font-medium">
              Seu kit
            </h3>
            <span className="note text-[1.05rem] text-cafe-suave">ficha de pedido</span>
          </div>
          <div aria-hidden="true" className="h-[3px] bg-verde" />

          <div className="ficha-lines ficha-compact px-6 pt-0 pb-6 sm:px-8" aria-live="polite">
            {chosen.length === 0 ? (
              <p className="note text-[1.15rem] text-cafe-suave">Escolha as categorias ao lado.</p>
            ) : (
              <ul>
                {chosen.map((c) => (
                  <li key={c.id} className="flex justify-between gap-4">
                    <span>{c.name}</span>
                    <span className="note text-[1.2rem] tabular-nums">{counts[c.id]}</span>
                  </li>
                ))}
                <li className="flex justify-between gap-4 font-semibold">
                  <span>Total</span>
                  <span className="tabular-nums">
                    {total} {plural(total)}
                  </span>
                </li>
              </ul>
            )}
          </div>

          <div className="space-y-5 px-6 pb-8 sm:px-8">
            <label className="block">
              <span className="note text-[1.05rem] text-cafe-suave">O que você gosta ou prefere evitar</span>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={2}
                className="mt-1 w-full resize-none border-0 border-b border-cafe/30 bg-transparent px-0 py-1.5 text-cafe focus:border-verde focus:ring-0 focus:outline-none"
              />
            </label>
            <p className="text-[0.9rem] text-cafe-suave">{kitBuilder.priceNote ?? kitBuilder.priceFallback}</p>
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-verde px-6 py-3 font-medium text-creme transition-colors duration-300 hover:bg-cafe active:translate-y-px"
            >
              <WhatsAppGlyph className="size-[1.15em] transition-transform duration-300 group-hover:-translate-y-0.5" />
              {total > 0 ? `Enviar meu kit (${total} ${plural(total)})` : "Pedir pelo WhatsApp"}
              <span className="sr-only"> (abre o WhatsApp)</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
