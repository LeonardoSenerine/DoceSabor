import type { SVGProps } from "react";

/**
 * Símbolo oficial da Doce & Sabor, redesenhado em vetor a partir da logo da
 * marca: o prato (aro grosso e borda interna tracejada, com dois pontos nas
 * laterais), garfo e colher cruzados e, à direita, a placa presa por uma
 * haste com três barras. viewBox 0 0 120 100.
 *
 * As formas ficam em constantes para serem reaproveitadas nas imagens geradas
 * (capa de link e ícones), que não usam componentes React com hooks.
 */
export const LOGO_VIEWBOX = "0 0 120 100";

/** Garfo em pé, centrado na origem, para ser girado. */
export const FORK_PATH =
  "M-1.6 -6 L-1.6 21 Q0 23 1.6 21 L1.6 -6 Q7 -9 7 -17 L7 -27 L5 -27 L5 -17 L3.2 -17 L3.2 -27 L1.2 -27 L1.2 -17 L-1.2 -17 L-1.2 -27 L-3.2 -27 L-3.2 -17 L-5 -17 L-5 -27 L-7 -27 L-7 -17 Q-7 -9 -1.6 -6 Z";

/** Colher em pé, centrada na origem, para ser girada. */
export const SPOON_PATH =
  "M-1.6 -6 L-1.6 21 Q0 23 1.6 21 L1.6 -6 Q7.5 -9 7.5 -18 Q7.5 -29 0 -29 Q-7.5 -29 -7.5 -18 Q-7.5 -9 -1.6 -6 Z";

type LogoMarkProps = Omit<SVGProps<SVGSVGElement>, "children"> & { title?: string };

export function LogoMark({ title, ...props }: LogoMarkProps) {
  return (
    <svg viewBox={LOGO_VIEWBOX} fill="none" role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true} {...props}>
      {/* Aro do prato */}
      <circle cx="44" cy="50" r="37" stroke="currentColor" strokeWidth="6" />
      {/* Borda interna: dois arcos e dois pontos */}
      <path d="M22.5 37.5 A25 25 0 0 1 65.5 37.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M65.5 62.5 A25 25 0 0 1 22.5 62.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="19" cy="50" r="2.3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="69" cy="50" r="2.3" stroke="currentColor" strokeWidth="1.8" />
      {/* Garfo e colher cruzados */}
      <path d={FORK_PATH} fill="currentColor" transform="translate(44 50) rotate(-42)" />
      <path d={SPOON_PATH} fill="currentColor" transform="translate(44 50) rotate(42)" />
      {/* A placa: três barras e a haste */}
      <path d="M81 41.5 H95 M81.5 50 H95 M81 58.5 H95" stroke="currentColor" strokeWidth="3.2" />
      <path d="M96.5 16 V84" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
