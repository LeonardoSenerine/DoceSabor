"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

declare global {
  interface Window {
    __dsMotion?: boolean;
  }
}

const EASE = "expo.out";

/**
 * Movimento da página. Tudo condicionado a prefers-reduced-motion:
 * no-preference; sem isso, a página fica no estado final, parada.
 *
 * - Rolagem suave (Lenis) sincronizada ao ScrollTrigger.
 * - [data-letters="scroll"]: títulos das aberturas entram letra por letra.
 * - [data-split]: títulos sobem linha a linha por trás de uma máscara.
 * - [data-reveal-image]: fotos abrem como cortina, com o zoom assentando.
 * - [data-reveal]: blocos de texto e botões entram logo depois do título.
 * - [data-zoom]: as fotos das aberturas se afastam devagar conforme a rolagem.
 * - [data-stack]: hero, A cozinha e a abertura das Marmitas se empilham como
 *   pastas, presas no topo enquanto a próxima parte sobe por cima.
 *
 * A abertura do hero é feita em CSS (globals.css), para não depender da
 * hidratação.
 */
export function Motion() {
  useGSAP(() => {
    window.__dsMotion = true;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      /* Rolagem suave ------------------------------------------------ */
      const lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.95,
        anchors: true, // respeita o scroll-padding-top do <html>
        autoRaf: false,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      /* Títulos linha a linha ---------------------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((title) => {
        SplitText.create(title, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.2,
              ease: EASE,
              stagger: 0.09,
              scrollTrigger: { trigger: title, start: "top 88%", once: true },
            }),
        });
      });

      /* Títulos das aberturas, letra por letra -------------------- */
      gsap.utils.toArray<HTMLElement>('[data-letters="scroll"]').forEach((title) => {
        gsap.from(title.querySelectorAll("[data-char]"), {
          yPercent: 100,
          rotate: 7,
          autoAlpha: 0,
          transformOrigin: "0% 100%",
          duration: 1,
          ease: EASE,
          stagger: 0.035,
          scrollTrigger: { trigger: title, start: "top 85%", once: true },
        });
      });

      /* Fotos em cortina --------------------------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-reveal-image]").forEach((frame) => {
        const img = frame.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: frame, start: "top 90%", once: true } });
        tl.fromTo(
          frame,
          { clipPath: "inset(18% 0% 0% 0%)", opacity: 0.001 },
          { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.3, ease: "power3.out" },
        );
        if (img) tl.fromTo(img, { scale: 1.16 }, { scale: 1, duration: 1.8, ease: EASE }, 0);
      });

      /* Blocos que entram depois do título --------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((block) => {
        gsap.from(block.children.length > 1 ? block.children : block, {
          y: 28,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: block, start: "top 90%", once: true },
        });
      });

      /* Aberturas: a foto se afasta devagar conforme a rolagem -------- */
      gsap.utils.toArray<HTMLElement>("[data-zoom]").forEach((frame) => {
        const img = frame.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 0.6 },
          },
        );
      });

      /* Seções empilhadas como pastas (o mesmo efeito do SURAMU) -------
         A seção prende quando o fim dela chega ao fim da tela (assim
         funciona mesmo se for mais alta que a tela); a parte de baixo
         encolhe e escurece enquanto a próxima sobe por cima. */
      const stacks = gsap.utils.toArray<HTMLElement>("[data-stack]");
      const below = (el: HTMLElement) => (el.nextElementSibling ?? el.parentElement?.nextElementSibling) as HTMLElement | null;
      const sizeStacks = () => {
        stacks.forEach((el) => {
          el.style.transform = "";
          el.style.removeProperty("--cover");
          el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
          el.classList.add("is-stack");
        });
      };
      const updateStacks = () => {
        const vh = window.innerHeight;
        stacks.forEach((el) => {
          const next = below(el);
          if (!next || !el.classList.contains("is-stack")) return;
          const p = Math.min(Math.max(1 - next.getBoundingClientRect().top / vh, 0), 1);
          el.style.setProperty("--cover", p.toFixed(3));
          el.style.transform = p > 0 ? `scale(${(1 - p * 0.07).toFixed(4)})` : "";
        });
      };
      const onResize = () => {
        sizeStacks();
        updateStacks();
      };
      onResize();
      lenis.on("scroll", updateStacks);
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        stacks.forEach((el) => {
          el.classList.remove("is-stack");
          el.style.transform = "";
          el.style.top = "";
          el.style.removeProperty("--cover");
        });
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    });
  });

  return null;
}
