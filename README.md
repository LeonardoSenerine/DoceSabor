# Doce&Sabor

Site institucional da Doce&Sabor, marca gastronômica da Chef Vanda Camargo: marmitas congeladas, personal chef e buffet Feijoada de Raiz.

Next.js 16 (App Router), TypeScript estrito, Tailwind CSS 4, GSAP + ScrollTrigger + SplitText e Lenis.

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000. A página `/marca` documenta o sistema de identidade: símbolo, logotipo, cores, tipografia, elementos gráficos (numeração, legendas, traço botânico, selo), fotografia e movimento.

## Onde editar

- `src/content/site.ts` — todos os textos, mensagens de WhatsApp, categorias, passos e depoimentos.
- `src/content/images.ts` — fotografias. As atuais são provisórias (Unsplash) e aparecem marcadas como "Foto ilustrativa".
- `src/app/globals.css` — tokens de cor e tipografia, estados iniciais do movimento.
- `src/components/motion/Motion.tsx` — coreografia de animação (respeita `prefers-reduced-motion`).
- `src/components/motion/Parallax.tsx` — parallax das fotografias (translate3d, só em telas a partir de 1024px).

## Pendências de conteúdo

Nada abaixo foi inventado; cada item tem um campo pronto em `src/content/site.ts`:

- Fotos reais e o retrato da Vanda (`vanda.portrait`).
- Orientações de aquecimento (`mealStorage.heating`).
- Itens incluídos no buffet de feijoada (`feijoada.includes`).
- Depoimentos reais (`testimonials`).
- Domínio oficial: defina `NEXT_PUBLIC_SITE_URL` no ambiente de produção (usado em SEO, sitemap e dados estruturados).
