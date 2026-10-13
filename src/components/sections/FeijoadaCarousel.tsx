"use client";

import { useEffect, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/content/images";

/** Feijoadas e cozinheiros, alternados. */
const slides: PhotoKey[] = [
  "feijoadaMesaCima",
  "cozinheiroMassa",
  "feijoadaCompleta",
  "cozinheiraBancada",
  "feijao",
  "cozinheiraEmpratando",
  "feijoadaLinguica",
  "cozinheiroFogao",
];

/** Tempo de cada foto na tela, em milissegundos. */
const INTERVAL = 5000;

/**
 * Fundo da área da capacidade: as fotos trocam no mesmo lugar, uma surgindo
 * enquanto a outra some, sob a terracota da seção. É textura, não conteúdo:
 * fica escondido de leitores de tela. Com movimento reduzido, mostra só a
 * primeira foto, parada. Também pausa quando a aba não está visível.
 */
export function FeijoadaCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-brasa">
      {slides.map((name, index) => {
        const on = index === active;
        return (
          <div
            key={name}
            className={`absolute inset-0 transition-[opacity,scale] ease-(--ease-cozinha) motion-reduce:transition-none ${
              on ? "scale-100 opacity-100 duration-[1600ms,6500ms]" : "scale-[1.06] opacity-0 duration-[1600ms,0ms] delay-[0ms,1600ms]"
            }`}
          >
            <Photo name={name} tag="none" sizes="100vw" className="size-full" />
          </div>
        );
      })}
      {/* A terracota por cima, mais densa à esquerda, onde fica o texto */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(169_50_27/0.92),rgb(169_50_27/0.78))]" />
    </div>
  );
}
