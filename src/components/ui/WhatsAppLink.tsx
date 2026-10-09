import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

type Variant = "solid" | "outline" | "text";

type WhatsAppLinkProps = {
  message?: string;
  children: ReactNode;
  variant?: Variant;
  /** Classes de cor/tamanho específicas do contexto. */
  className?: string;
  /** Nome acessível quando o texto visível não basta. */
  label?: string;
  icon?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 font-medium transition-[background-color,color,box-shadow,transform] duration-300 ease-(--ease-cozinha) active:translate-y-px";

const variants: Record<Variant, string> = {
  // Pílula: a borda do prato. Único elemento totalmente arredondado do sistema.
  solid: "min-h-12 rounded-full px-6 py-3 text-[0.98rem]",
  outline: "min-h-12 rounded-full px-6 py-3 text-[0.98rem] ring-1 ring-inset ring-current",
  text: "min-h-11 py-2 underline decoration-1 underline-offset-[6px] hover:decoration-2",
};

export function WhatsAppLink({ message, children, variant = "solid", className = "", label, icon = true }: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon ? <WhatsAppGlyph className="size-[1.15em] shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" /> : null}
      <span>{children}</span>
      {label ? null : <span className="sr-only"> (abre o WhatsApp)</span>}
    </a>
  );
}

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={className}>
      <path
        d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L3 21l4.4-1.1A9.2 9.2 0 1 0 12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 7.7c-.3 0-.7.1-.9.5-.4.6-.7 1.4-.4 2.6.4 1.5 1.5 3 2.9 4.1 1.3 1 2.6 1.6 3.8 1.6.9 0 1.6-.5 1.8-1.1l.2-.7c0-.2 0-.4-.3-.5l-1.8-.9c-.2-.1-.4 0-.6.1l-.7.9c-.1.1-.3.2-.5.1-.6-.3-1.3-.7-1.9-1.3-.6-.5-1-1.2-1.3-1.7-.1-.2 0-.4.1-.5l.6-.7c.1-.2.2-.4.1-.6l-.8-1.8c-.1-.3-.3-.4-.5-.4h-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
