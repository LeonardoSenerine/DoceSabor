/**
 * Elementos proprietários da marca.
 *
 * O símbolo nasce do próprio nome: o "e" de Doce e Sabor é a conjunção que
 * junta as coisas — rotina e festa, casa e mesa, quem cozinha e quem come.
 * Ele aparece escrito à mão, dentro de um traço circular que é ao mesmo tempo
 * a borda de um prato visto de cima e o círculo de caneta que se faz num
 * caderno de receitas para marcar o que importa.
 */
import type { SVGProps } from "react";

/** Traço circular imperfeito, com a sobra de caneta no fim. viewBox 0 0 200 200. */
export const RING_PATH =
  "M62 30C104 8 170 24 185 80C199 130 160 183 99 186C43 189 11 149 14 99C17 56 54 25 110 21C128 20 142 25 152 32";

/** O "e" cursivo, monolinear. viewBox 0 0 200 200. */
export const E_PATH =
  "M74 112C98 117 130 109 137 90C142 76 130 66 114 68C86 72 66 100 68 126C70 147 89 155 109 151C122 148 131 140 139 129";

type MarkProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  /** Espessura do traço em unidades do viewBox (200). */
  weight?: number;
  title?: string;
};

export function BrandSymbol({ weight = 9, title = "Doce e Sabor", ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" role="img" aria-label={title} {...props}>
      <path d={RING_PATH} stroke="currentColor" strokeWidth={weight} strokeLinecap="round" />
      <path d={E_PATH} stroke="currentColor" strokeWidth={weight * 1.15} strokeLinecap="round" />
    </svg>
  );
}

type RingProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  /** Espessura em px na tela (o traço não escala com o tamanho). */
  weight?: number;
  /** "load": desenha ao carregar; "scroll": desenha ao entrar na tela. */
  draw?: "load" | "scroll";
};

/**
 * O círculo de caneta, usado para destacar uma informação. Decorativo.
 * O "desenho" é uma máscara cônica que gira (--draw, de 0deg a 360deg), assim
 * o traço mantém espessura uniforme em qualquer proporção da caixa.
 */
export function HandRing({ weight = 2, draw, className, ...props }: RingProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={className}
      data-ring=""
      data-draw={draw}
      {...props}
    >
      <path d={RING_PATH} stroke="currentColor" strokeWidth={weight} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Seta de anotação, desenhada à mão. viewBox 0 0 120 60. */
export function HandArrow({ weight = 2, draw, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 120 60" fill="none" aria-hidden="true" focusable="false" className={className} data-draw={draw} {...props}>
      <path
        d="M4 8C30 4 70 10 92 34C98 41 102 48 104 54"
        stroke="currentColor"
        strokeWidth={weight}
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        d="M92 46L104 55L110 41"
        stroke="currentColor"
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}

/** Folha de louro — ingrediente-assinatura da feijoada, em traço único. */
export function BayLeaf({ weight = 2, draw, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false" className={className} data-draw={draw} {...props}>
      <path
        d="M18 104C20 62 50 22 104 14C102 66 70 100 18 104Z"
        stroke="currentColor"
        strokeWidth={weight}
        strokeLinejoin="round"
        pathLength={1}
      />
      <path
        d="M10 112C40 82 66 52 92 28"
        stroke="currentColor"
        strokeWidth={weight}
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

/** Vapor — três fios subindo. Usado para indicar "aquecer". */
export function Steam({ weight = 1.5, draw, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false" className={className} data-draw={draw} {...props}>
      {["M22 70C12 56 32 46 22 30C16 20 24 12 24 8", "M40 70C30 54 50 44 40 28C34 18 42 10 42 6", "M58 70C48 56 68 46 58 30C52 20 60 12 60 8"].map(
        (d) => (
          <path key={d} d={d} stroke="currentColor" strokeWidth={weight} strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength={1} />
        ),
      )}
    </svg>
  );
}

/** Floco de gelo simplificado — "guardar no freezer". */
export function Frost({ weight = 1.5, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false" className={className} {...props}>
      {["M40 10V70", "M14 25L66 55", "M14 55L66 25", "M32 14L40 22L48 14", "M32 66L40 58L48 66"].map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

/** Folha — "fresco, vai para a geladeira". */
export function Leaf({ weight = 1.5, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false" className={className} {...props}>
      <path d="M14 66C12 36 34 14 68 12C68 46 46 68 14 66Z" stroke="currentColor" strokeWidth={weight} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <path d="M14 66C30 50 44 36 56 24" stroke="currentColor" strokeWidth={weight} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
