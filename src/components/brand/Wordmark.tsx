import { brand } from "@/content/site";
import { LogoMark } from "./LogoMark";

type WordmarkProps = {
  className?: string;
  /** Linha da frente de serviço ("Marmitas congeladas", "Vanda Camargo"...). */
  line?: string;
  /** Mostra a linha "Marmitas fit" da logo original (rodapé, capa de link). */
  tagline?: boolean;
};

/**
 * Logotipo oficial: o símbolo do prato com a placa e "Doce & Sabor" em duas
 * linhas, numa serifa clássica. O tamanho segue o font-size do contexto.
 */
export function Wordmark({ className = "", line, tagline = false }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-[0.4em] leading-none ${className}`}>
      <LogoMark className="h-[2.5em] w-auto shrink-0" />
      <span aria-hidden="true" className="flex flex-col items-start text-left">
        <span className="font-logo text-[1.08em] leading-[1.02] tracking-[-0.005em] whitespace-nowrap">
          Doce &amp;
          <br />
          Sabor
        </span>
        {tagline ? (
          <span className="font-logo mt-[0.45em] text-[0.4em] tracking-[0.34em] whitespace-nowrap uppercase opacity-80">
            Marmitas fit
          </span>
        ) : null}
        {line ? <span className="mt-[0.45em] text-[0.62em] font-medium tracking-[0.02em] whitespace-nowrap">{line}</span> : null}
      </span>
      <span className="sr-only">{line ? `${brand.name}, ${line}` : brand.name}</span>
    </span>
  );
}
