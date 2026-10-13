/**
 * Fotografia do site.
 *
 * Todas as imagens abaixo são PROVISÓRIAS (bancos de imagens Unsplash e
 * Pexels) e
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

const pexels = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;

export const photos = {
  hero: {
    src: unsplash("photo-1709114107937-6dec855d9ab5"),
    alt: "Mesa servida com carne seca desfiada, cuscuz e mandioca cozida, vista de perto",
    width: 3375,
    height: 6000,
    provisional: true,
    focus: "50% 22%",
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
    src: unsplash("photo-1652283318977-bc722abd88ca"),
    alt: "Mãos sovando massa sobre a bancada enfarinhada",
    width: 5216,
    height: 7824,
    provisional: true,
    focus: "50% 45%",
  },
  panelaNoFogao: {
    src: unsplash("photo-1706685835600-fa406f365c2b"),
    alt: "Panela no fogão de uma cozinha de casa, com o vapor subindo",
    width: 5982,
    height: 3992,
    provisional: true,
    focus: "50% 55%",
  },
  feijoadaPanela: {
    src: pexels(34195320),
    alt: "Feijoada servida na panela de barro com concha, ao lado de couve, laranja e arroz, sobre a mesa de madeira",
    width: 6000,
    height: 4000,
    provisional: true,
    focus: "60% 55%",
  },
  feijao: {
    src: pexels(34195319),
    alt: "Panela de barro com feijoada e linguiça, laranja fatiada e couve ao fundo",
    width: 6000,
    height: 4000,
    provisional: true,
    focus: "40% 60%",
  },
  feijoadaCompleta: {
    src: pexels(9494742),
    alt: "Prato de feijoada completa com arroz, couve, farofa, laranja, torresmo e linguiça",
    width: 4000,
    height: 6000,
    provisional: true,
    focus: "50% 55%",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
