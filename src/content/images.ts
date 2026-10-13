/**
 * Fotografia do site.
 *
 * Todas as imagens abaixo são PROVISÓRIAS (banco de imagens Unsplash) e
 * aparecem com a marcação "Foto ilustrativa". Nenhuma delas mostra a Vanda,
 * a cozinha ou os pratos reais da Doce e Sabor.
 *
 * Para trocar por uma foto real: coloque o arquivo em /public/fotos,
 * altere `src` para "/fotos/arquivo.jpg", ajuste `width`/`height`
 * e marque `provisional: false`.
 */
export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  provisional: boolean;
  /** Ponto focal do corte (CSS object-position). */
  focus?: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?fm=jpg&q=80&w=1800&fit=max`;

export const photos = {
  hero: {
    src: unsplash("photo-1762631383556-7fa1365898b7"),
    alt: "Prato visto de cima com arroz, feijão, frango grelhado fatiado e salada",
    width: 5333,
    height: 4000,
    provisional: true,
    focus: "50% 50%",
  },
  marmitas: {
    src: unsplash("photo-1666819691666-4be36926335e"),
    alt: "Potes de refeição enfileirados com arroz, legumes e proteínas",
    width: 6000,
    height: 4000,
    provisional: true,
    focus: "50% 45%",
  },
  fit: {
    src: unsplash("photo-1505576633757-0ac1084af824"),
    alt: "Prato colorido de folhas, legumes e grãos sobre uma tábua de madeira",
    width: 3446,
    height: 4595,
    provisional: true,
    focus: "50% 55%",
  },
  lowCarb: {
    src: unsplash("photo-1490645935967-10de6ba17061"),
    alt: "Prato com ovo pochê, legumes e tomates sobre uma mesa de madeira",
    width: 5503,
    height: 3745,
    provisional: true,
    focus: "45% 50%",
  },
  vegetariana: {
    src: unsplash("photo-1714062105923-5cb2a3a07499"),
    alt: "Tigelas com arroz, feijão, repolho roxo e legumes sobre a mesa",
    width: 5504,
    height: 8256,
    provisional: true,
    focus: "50% 40%",
  },
  variada: {
    src: unsplash("photo-1714062105876-1756a22c4caf"),
    alt: "Tigela de arroz, feijão e legumes refogados",
    width: 5504,
    height: 8256,
    provisional: true,
    focus: "50% 45%",
  },
  caldo: {
    src: unsplash("photo-1750296976666-e736034e76fa"),
    alt: "Caldo cremoso em tigela de cerâmica sobre mesa de madeira, com legumes por cima",
    width: 4996,
    height: 7494,
    provisional: true,
    focus: "50% 45%",
  },
  salada: {
    src: unsplash("photo-1611853012080-f496198765bd"),
    alt: "Salada de folhas, legumes e grãos em prato de cerâmica sobre a mesa de madeira",
    width: 4000,
    height: 5000,
    provisional: true,
    focus: "50% 50%",
  },
  maosNaTabua: {
    src: unsplash("photo-1717465962260-d6d2fa73db5f"),
    alt: "Mãos cortando limão sobre uma tábua de madeira, com alho e tomates ao lado",
    width: 7952,
    height: 5304,
    provisional: true,
    focus: "55% 50%",
  },
  panelaNoFogao: {
    src: unsplash("photo-1715828202780-915fd3571413"),
    alt: "Mão mexendo uma panela no fogão de uma cozinha de casa",
    width: 6000,
    height: 4000,
    provisional: true,
    focus: "60% 50%",
  },
  feijoadaPanela: {
    src: unsplash("photo-1790008882149-a136e05daae1"),
    alt: "Caldeirão fumegante sendo mexido ao ar livre",
    width: 6000,
    height: 4000,
    provisional: true,
    focus: "55% 45%",
  },
  feijao: {
    src: unsplash("photo-1647545401750-6dd5539879ac"),
    alt: "Tigela de feijão preto ao lado de limões",
    width: 5184,
    height: 3456,
    provisional: true,
    focus: "40% 50%",
  },
  mesaReunida: {
    src: unsplash("photo-1530062845289-9109b2c9c868"),
    alt: "Pessoas reunidas ao redor de uma mesa ao ar livre, servindo-se",
    width: 4096,
    height: 2726,
    provisional: true,
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
