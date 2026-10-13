import type { CSSProperties } from "react";

type LettersProps = {
  text: string;
  /**
   * "load": anima ao carregar a página, em CSS (o hero).
   * "scroll": anima quando o título entra na tela, via GSAP (as seções).
   */
  mode?: "load" | "scroll";
  /** Atraso inicial, em milissegundos (só no modo "load"). */
  start?: number;
};

/**
 * Texto letra por letra, a assinatura de movimento da marca: cada letra sobe
 * com uma leve inclinação que se endireita. As palavras ficam inteiras (não
 * quebram no meio) e leitores de tela recebem o texto completo.
 */
export function Letters({ text, mode = "load", start = 0 }: LettersProps) {
  let index = 0;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" data-letters={mode}>
        {text.split(" ").map((word, w, words) => (
          <span key={w}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char) => {
                const c = index++;
                return (
                  <span key={c} data-char style={{ "--d": `${start}ms`, "--c": c } as CSSProperties}>
                    {char}
                  </span>
                );
              })}
            </span>
            {w < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </>
  );
}
