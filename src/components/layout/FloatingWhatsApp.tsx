"use client";

import { useEffect, useState } from "react";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppLink";
import { messages } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Atalho persistente para o WhatsApp. Fica escondido enquanto o hero ou o
 * contato final estão na tela — ali já existe um CTA principal e o botão
 * flutuante só competiria com ele.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["inicio", "contato"]
      .map((id) => document.getElementById(id))
      .concat(document.querySelector("footer"))
      .filter((el): el is HTMLElement => el !== null);

    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target);
          else onScreen.delete(entry.target);
        }
        setVisible(onScreen.size === 0);
      },
      { threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl(messages.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center gap-2 rounded-full bg-cafe text-creme shadow-[0_6px_20px_-8px_rgb(59_31_14/0.6)] ring-1 ring-creme/25 transition-[opacity,transform,background-color] duration-300 ease-(--ease-cozinha) hover:bg-verde sm:right-6 sm:bottom-6 sm:w-auto sm:px-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppGlyph className="size-6 sm:size-5" />
      <span className="hidden text-[0.95rem] font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
