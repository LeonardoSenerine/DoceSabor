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
  `https://images.unsplash.com/${id}?fm=jpg&q=85&w=2600&fit=max`;

const pexels = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2600`;

export const photos = {
  hero: {
    src: unsplash("photo-1577308856961-8e9ec50d0c67"),
    alt: "Mesa farta de banquete, com travessas de assados, batatas, legumes e saladas",
    width: 6000,
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
    src: unsplash("photo-1652283318977-bc722abd88ca"),
    alt: "Mãos sovando massa sobre a bancada enfarinhada",
    width: 5216,
    height: 7824,
    provisional: true,
    focus: "50% 45%",
  },
  cozinheiraCapa: {
    src: pexels(4253132),
    alt: "Mãos cozinhando em duas panelas no fogão de uma cozinha de casa",
    width: 4000,
    height: 6000,
    provisional: true,
    focus: "50% 60%",
  },
  cozinheiraPreparo: {
    src: pexels(4252142),
    alt: "Mãos cortando legumes na tábua, com tigelas de ingredientes picados ao lado",
    width: 4000,
    height: 6000,
    provisional: true,
    focus: "50% 50%",
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
  /* Carrossel da feijoada: feijoadas e eventos */
  feijoadaMesaCima: {
    src: pexels(34195321),
    alt: "Feijoada vista de cima, com arroz, couve, farofa, laranja e pimenta",
    width: 6000,
    height: 4000,
    provisional: true,
  },
  feijoadaLinguica: {
    src: pexels(34442367),
    alt: "Feijoada de perto, com linguiça, couve e pimenta",
    width: 4000,
    height: 6000,
    provisional: true,
  },
  feijoadaPanelinha: {
    src: pexels(36048828),
    alt: "Feijoada servida numa panelinha de metal, com um copo de chá gelado",
    width: 2250,
    height: 4000,
    provisional: true,
  },
  eventoServindo: {
    src: pexels(20488720),
    alt: "Mãos servindo pratos numa mesa posta para muitas pessoas",
    width: 4000,
    height: 6000,
    provisional: true,
  },
  eventoQuintal: {
    src: pexels(8841611),
    alt: "Pessoas almoçando juntas numa mesa farta ao ar livre",
    width: 6000,
    height: 4000,
    provisional: true,
  },
  eventoGramado: {
    src: pexels(8841223),
    alt: "Família reunida em volta da mesa posta no gramado",
    width: 6000,
    height: 4000,
    provisional: true,
  },
  eventoMesa: {
    src: pexels(3758012),
    alt: "Amigos em volta de uma mesa cheia de pratos e travessas",
    width: 6000,
    height: 4000,
    provisional: true,
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
