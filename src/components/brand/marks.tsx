/**
 * Ícones de traço fino da marca, usados só na informação prática
 * (freezer, geladeira, aquecer). O símbolo da logo fica em LogoMark.tsx.
 */
import type { SVGProps } from "react";

type RingProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  /** Espessura em px na tela (o traço não escala com o tamanho). */
  weight?: number;
};

/** Vapor: três fios subindo. Usado para indicar "aquecer". */
export function Steam({ weight = 1.5, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false" className={className} {...props}>
      {["M22 70C12 56 32 46 22 30C16 20 24 12 24 8", "M40 70C30 54 50 44 40 28C34 18 42 10 42 6", "M58 70C48 56 68 46 58 30C52 20 60 12 60 8"].map(
        (d) => (
          <path key={d} d={d} stroke="currentColor" strokeWidth={weight} strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength={1} />
        ),
      )}
    </svg>
  );
}

/** Floco de gelo simplificado: "guardar no freezer". */
export function Frost({ weight = 1.5, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false" className={className} {...props}>
      {["M40 10V70", "M14 25L66 55", "M14 55L66 25", "M32 14L40 22L48 14", "M32 66L40 58L48 66"].map((d) => (
        <path key={d} d={d} stroke="currentColor" strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

/** Folha: "fresco, vai para a geladeira". */
export function Leaf({ weight = 1.5, className, ...props }: RingProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false" className={className} {...props}>
      <path d="M14 66C12 36 34 14 68 12C68 46 46 68 14 66Z" stroke="currentColor" strokeWidth={weight} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <path d="M14 66C30 50 44 36 56 24" stroke="currentColor" strokeWidth={weight} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
