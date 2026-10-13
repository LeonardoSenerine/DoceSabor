import { brand } from "@/content/site";

type WordmarkProps = {
  className?: string;
  /** Linha da frente de serviço ("Marmitas congeladas", "Vanda Camargo"...). */
  line?: string;
};

/**
 * Logotipo tipográfico: Fraunces seminegrito com o "e" em itálico leve —
 * a conjunção é o desenho da marca, por isso ela muda de voz.
 */
export function Wordmark({ className = "", line }: WordmarkProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span
        aria-hidden="true"
        className="font-serif text-[1.45em] font-semibold tracking-[-0.025em] whitespace-nowrap"
        style={{ fontVariationSettings: '"SOFT" 100, "WONK" 0, "opsz" 72' }}
      >
        Doce <span className="font-light italic tracking-normal" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>e</span> Sabor
      </span>
      {line ? (
        <span aria-hidden="true" className="mt-[0.5em] text-[0.62em] font-medium tracking-[0.02em]">
          {line}
        </span>
      ) : null}
      <span className="sr-only">{line ? `${brand.name}, ${line}` : brand.name}</span>
    </span>
  );
}
