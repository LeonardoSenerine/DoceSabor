/**
 * Marcas de uso da cozinha — a linguagem gráfica da Doce e Sabor.
 *
 * Tudo aqui vem de objetos reais da cozinha de quem faz marmita:
 * - Fita crepe: a etiqueta escrita à mão no pote que vai ao freezer.
 *   Regra: sempre identifica algo (um prato, uma categoria, uma foto).
 *   Nunca decora, nunca vira botão, no máximo uma por bloco.
 * - Ficha pautada: a ficha de preparo. Organiza informação prática
 *   (passos, conservação). A linha de topo leva a cor da frente.
 * - Selo: o carimbo de origem, com a área de atendimento.
 */
import type { CSSProperties, ReactNode } from "react";
import { E_PATH, RING_PATH } from "./marks";

type TapeProps = {
  children?: ReactNode;
  /** Inclinação em graus. Mantenha entre -4 e 4. */
  tilt?: number;
  className?: string;
};

/** Etiqueta de fita crepe com texto escrito à mão. */
export function Tape({ children, tilt = -2, className = "" }: TapeProps) {
  return (
    <span
      data-tape
      className={`tape note inline-block px-4 py-1.5 text-[1.05rem] leading-snug text-cafe ${className}`}
      style={{ rotate: `${tilt}deg` } as CSSProperties}
    >
      {children}
    </span>
  );
}

/** Tira de fita sem texto, para prender uma foto na página. Decorativa. */
export function TapeStrip({ tilt = 0, className = "" }: Omit<TapeProps, "children">) {
  return (
    <span
      aria-hidden="true"
      className={`tape block h-7 w-24 ${className}`}
      style={{ rotate: `${tilt}deg` } as CSSProperties}
    />
  );
}

type FichaProps = {
  /** Nome curto da ficha, escrito à mão no cabeçalho. */
  kind: string;
  title: string;
  /** Classe de cor da linha de topo (a cor da frente). */
  rule: string;
  children: ReactNode;
  className?: string;
};

/**
 * Ficha pautada, com a margem vertical do caderno. Itens em <li> ganham
 * uma linha em branco entre si; use data-margin="1." para escrever o número
 * do lado de fora da margem.
 */
export function Ficha({ kind, title, rule, children, className = "" }: FichaProps) {
  return (
    <div className={`ficha relative bg-papel text-cafe ${className}`}>
      <div className="flex items-baseline justify-between gap-4 px-6 pt-7 pb-4 sm:px-8">
        <h3 className="font-serif text-[1.75rem] leading-tight font-medium">{title}</h3>
        <span className="note shrink-0 text-[1.05rem] text-cafe-suave">{kind}</span>
      </div>
      <div aria-hidden="true" className={`h-[3px] ${rule}`} />
      <div className="ficha-lines ficha-margin pr-6 pb-10 sm:pr-8">{children}</div>
    </div>
  );
}

type StampProps = {
  text: string;
  label: string;
  className?: string;
};

/** Selo circular de origem: texto em volta do símbolo. */
export function Stamp({ text, label, className = "" }: StampProps) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={label} className={className}>
      <defs>
        <path id="selo-circulo" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text className="font-serif" fill="currentColor" fontSize="15.5" fontStyle="italic" letterSpacing="0.4">
        <textPath href="#selo-circulo" textLength="462" lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
      <g transform="translate(62 62) scale(0.38)" fill="none" stroke="currentColor" strokeLinecap="round">
        <path d={RING_PATH} strokeWidth="9" />
        <path d={E_PATH} strokeWidth="11" />
      </g>
    </svg>
  );
}
