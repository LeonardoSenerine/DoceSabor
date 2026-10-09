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

const EASE_OUT = "expo.out";

/**
 * Coreografia de movimento da página (tudo condicionado a
 * prefers-reduced-motion: no-preference e limpo pelo useGSAP/matchMedia):
 *
 * - Rolagem suave (Lenis) sincronizada ao ScrollTrigger.
 * - Os títulos das três frentes sobem linha a linha por trás de uma máscara.
 * - A fita crepe "cola" ao entrar na tela; o traço de caneta se desenha.
 * - As fotos da mesa de feijoada abrem como cortina.
 * - Parallax leve só no hero e na foto em sangria da feijoada.
 * - O manifesto "acende" frase a frase conforme a leitura.
 *
 * A entrada do hero é feita em CSS (globals.css) para não depender da
 * hidratação; o estado estático é sempre a composição completa.
 */
export function Motion() {
  useGSAP(() => {
    window.__dsMotion = true;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      /* Rolagem suave ------------------------------------------------ */
      const lenis = new Lenis({
        lerp: 0.09,
        wheelMultiplier: 0.95,
        anchors: true, // respeita o scroll-padding-top do <html>
        autoRaf: false,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      /* Títulos por máscara, linha a linha --------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((title) => {
        SplitText.create(title, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 112,
              duration: 1.15,
              ease: EASE_OUT,
              stagger: 0.09,
              scrollTrigger: { trigger: title, start: "top 86%", once: true },
            }),
        });
      });

      /* Linhas com máscara já marcadas no HTML ("Bateu a fome?") ------- */
      gsap.utils.toArray<HTMLElement>("[data-reveal-scroll]").forEach((line, index) => {
        gsap.from(line.children, {
          yPercent: 110,
          duration: 1.2,
          delay: index * 0.1,
          ease: EASE_OUT,
          scrollTrigger: { trigger: line.parentElement ?? line, start: "top 82%", once: true },
        });
      });

      /* Fotos em cortina --------------------------------------------- */
      gsap.utils.toArray<HTMLElement>("[data-reveal-image]").forEach((frame) => {
        const img = frame.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: frame, start: "top 88%", once: true } });
        tl.fromTo(
          frame,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35, ease: "expo.inOut" },
        );
        if (img) tl.fromTo(img, { scale: 1.28 }, { scale: 1, duration: 1.9, ease: EASE_OUT }, 0.15);
      });

      /* Grupos que sobem em sequência (números dos kits, "200") -------- */
      gsap.utils.toArray<HTMLElement>("[data-rise]").forEach((group) => {
        gsap.from(group.querySelectorAll("[data-rise-item]"), {
          yPercent: 105,
          duration: 1.1,
          ease: EASE_OUT,
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });

      /* Fita crepe sendo colada (fora do hero, que anima em CSS) ------- */
      gsap.utils
        .toArray<HTMLElement>("[data-tape]")
        .filter((tape) => !tape.closest("[data-hero-print]") && !tape.closest('[role="tabpanel"]'))
        .forEach((tape) => {
          gsap.from(tape, {
            scaleX: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: tape, start: "top 90%", once: true },
          });
        });

      /* Traços à mão ao entrar na tela -------------------------------- */
      gsap.utils.toArray<SVGSVGElement>('[data-draw="scroll"]').forEach((svg) => {
        const trigger = { trigger: svg, start: "top 85%", once: true };
        if (svg.hasAttribute("data-ring")) {
          gsap.to(svg, { "--draw": "360deg", duration: 1.5, ease: "power2.inOut", scrollTrigger: trigger });
        } else {
          gsap.to(svg.querySelectorAll("path"), {
            strokeDashoffset: 0,
            duration: 1.3,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: trigger,
          });
        }
      });

      /* Manifesto: cada frase acende conforme a leitura ---------------- */
      const manifesto = document.querySelector<HTMLElement>("[data-manifesto]");
      if (manifesto) {
        gsap.fromTo(
          manifesto.querySelectorAll("[data-manifesto-line]"),
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.6,
            scrollTrigger: { trigger: manifesto, start: "top 78%", end: "bottom 52%", scrub: 0.6 },
          },
        );
      }

      return () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    });

    /* Parallax — só em telas médias para cima, onde há profundidade --- */
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 6;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      // O prato do hero afunda devagar enquanto o título sobe: profundidade sem pinning.
      const hero = document.getElementById("inicio");
      if (hero) {
        const scroll = { trigger: hero, start: "top top", end: "bottom top", scrub: true };
        gsap.to("[data-hero-depth='photo']", { yPercent: 12, ease: "none", scrollTrigger: scroll });
        gsap.to("[data-hero-depth='title']", { yPercent: -10, ease: "none", scrollTrigger: scroll });
      }
    });
  });

  return null;
}
