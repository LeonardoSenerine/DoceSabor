"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP);

declare global {
  interface Window {
    __dsMotion?: boolean;
  }
}

/**
 * Movimento da página, de propósito pouco:
 *
 * - A abertura (o slogan subindo linha a linha e a foto assentando) é feita
 *   em CSS, em globals.css, e é o único momento coreografado.
 * - Aqui fica só a rolagem suave (Lenis), desligada com movimento reduzido.
 * - O resto só se move quando a pessoa interage (a sanfona das marmitas,
 *   os botões).
 */
export function Motion() {
  useGSAP(() => {
    window.__dsMotion = true;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.95,
        anchors: true, // respeita o scroll-padding-top do <html>
        autoRaf: false,
      });
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    });
  });

  return null;
}
