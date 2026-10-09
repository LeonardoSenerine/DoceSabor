"use client";

import { useId, useState, type FormEvent } from "react";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppLink";
import { contact, feijoada, messages } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

type Audience = "particular" | "empresa";

const field =
  "w-full border-0 border-b border-cafe/30 bg-transparent px-0 py-1.5 text-[1.02rem] text-cafe placeholder:text-cafe/40 focus:border-terracota focus:ring-0 focus:outline-none";
const labelText = "note text-[1.05rem] text-cafe-suave";

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return year && month && day ? `${day}/${month}/${year}` : value;
}

/**
 * Ficha de orçamento da feijoada. Monta a mensagem com os dados do evento e
 * abre o WhatsApp oficial; nada é armazenado no site. Sem JavaScript, o
 * formulário ainda abre o WhatsApp com a mensagem padrão de orçamento.
 */
export function FeijoadaQuote() {
  const id = useId();
  const [audience, setAudience] = useState<Audience>("particular");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setError("Preencha nome, e-mail e endereço do evento para montar o pedido.");
      form.reportValidity();
      return;
    }
    setError(null);

    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const lines = [
      messages.feijoada,
      "",
      `Nome: ${get("nome")}`,
      audience === "empresa" && get("empresa") ? `Empresa: ${get("empresa")}` : null,
      `E-mail: ${get("email")}`,
      `Endereço do evento: ${get("endereco")}`,
      get("data") ? `Data: ${formatDate(get("data"))}` : null,
      get("convidados") ? `Convidados: ${get("convidados")}` : null,
      get("observacoes") ? `Observações: ${get("observacoes")}` : null,
    ].filter((line): line is string => line !== null);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      id="orcamento-feijoada"
      action={`https://wa.me/${contact.whatsappNumber}`}
      method="get"
      target="_blank"
      noValidate
      onSubmit={onSubmit}
      aria-labelledby={`${id}-titulo`}
      className="ficha bg-papel text-cafe"
    >
      {/* Sem JavaScript, só esta mensagem padrão é enviada. */}
      <input type="hidden" name="text" value={messages.feijoada} />

      <div className="flex items-baseline justify-between gap-4 px-5 pt-5 pb-3 sm:px-8">
        <h3 id={`${id}-titulo`} className="font-serif text-[1.75rem] leading-tight font-medium">
          Pedir orçamento
        </h3>
        <span className="note shrink-0 text-[1rem] text-cafe-suave">ficha de evento</span>
      </div>
      <div aria-hidden="true" className="h-[3px] bg-terracota" />

      <div className="space-y-6 px-5 pt-6 pb-8 sm:px-8">
        <fieldset>
          <legend className={labelText}>O evento é</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(
              [
                ["particular", "Particular"],
                ["empresa", "De empresa"],
              ] as const
            ).map(([value, text]) => (
              <label
                key={value}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[0.95rem] font-medium ring-1 ring-cafe/30 transition-colors ring-inset has-checked:bg-cafe has-checked:text-creme has-checked:ring-cafe has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-cafe"
              >
                <input
                  type="radio"
                  name="publico"
                  value={value}
                  checked={audience === value}
                  onChange={() => setAudience(value)}
                  className="sr-only"
                />
                {text}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className={labelText}>Seu nome</span>
            <input name="nome" required autoComplete="name" className={field} />
          </label>
          {audience === "empresa" ? (
            <label className="block">
              <span className={labelText}>Empresa</span>
              <input name="empresa" autoComplete="organization" className={field} />
            </label>
          ) : null}
          <label className={`block ${audience === "empresa" ? "sm:col-span-2" : ""}`}>
            <span className={labelText}>E-mail</span>
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
        </div>

        <label className="block">
          <span className={labelText}>Endereço do evento</span>
          <input
            name="endereco"
            required
            autoComplete="street-address"
            placeholder="Rua, número, bairro e cidade"
            className={field}
          />
        </label>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className={labelText}>Data do evento</span>
            <input name="data" type="date" className={field} />
          </label>
          <label className="block">
            <span className={labelText}>Convidados (até {feijoada.maxGuests})</span>
            <input name="convidados" type="number" inputMode="numeric" min={1} max={feijoada.maxGuests} className={field} />
          </label>
        </div>

        <label className="block">
          <span className={labelText}>Observações</span>
          <textarea name="observacoes" rows={2} className={`${field} resize-none`} />
        </label>

        {error ? (
          <p role="alert" className="text-[0.95rem] font-medium text-barro">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2.5 rounded-full bg-barro px-6 py-3 font-medium whitespace-nowrap text-creme transition-colors duration-300 hover:bg-cafe active:translate-y-px"
          >
            <WhatsAppGlyph className="size-[1.15em] transition-transform duration-300 group-hover:-translate-y-0.5" />
            Enviar pelo WhatsApp
          </button>
          <p className="text-[0.85rem] text-cafe-suave">Os dados vão só na mensagem. Nada fica salvo no site.</p>
        </div>
      </div>
    </form>
  );
}
