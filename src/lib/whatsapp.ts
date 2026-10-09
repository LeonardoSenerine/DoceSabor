import { contact } from "@/content/site";

/** Monta um link wa.me com a mensagem pré-preenchida corretamente codificada. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
