/**
 * Conteúdo editável do site da Doce e Sabor.
 *
 * Regra: só entra aqui o que foi confirmado pela marca. Campos marcados com
 * `null` ou listas vazias aguardam informação real e são omitidos (ou trocados
 * por um convite ao WhatsApp) na interface até serem preenchidos.
 */
import type { PhotoKey } from "./images";

export const brand = {
  name: "Doce e Sabor",
  owner: "Vanda Camargo",
  signature: "Feita com cuidado. Servida com afeto.",
  description:
    "Marmitas congeladas, cozinheira particular e buffet de feijoada em Campinas, São Paulo e interior. A cozinha da Vanda Camargo para a rotina, para a sua casa e para as suas festas.",
} as const;

export const contact = {
  whatsappNumber: "5511952382566",
  whatsappDisplay: "+55 11 95238-2566",
  instagramUrl: "https://www.instagram.com/doceesaborfit",
  instagramHandle: "@doceesaborfit",
  serviceArea: ["Campinas", "Cidade de São Paulo", "Interior de São Paulo"],
} as const;

/** Mensagens pré-preenchidas, uma por caminho de contato. */
export const messages = {
  geral: "Olá! Vim pelo site da Doce e Sabor e gostaria de mais informações.",
  marmitas: "Olá! Gostaria de conhecer os kits de marmitas congeladas da Doce e Sabor.",
  vanda: "Olá, Vanda! Gostaria de saber mais sobre o serviço de cozinheira particular.",
  feijoada: "Olá! Gostaria de solicitar um orçamento para o serviço de Feijoada de Raiz para um evento.",
} as const;

export type ServiceId = "marmitas" | "vanda" | "feijoada";

export type Service = {
  id: ServiceId;
  /** Âncora da seção na página. */
  anchor: string;
  /** Nome da frente, usado na assinatura "Doce e Sabor — ...". */
  line: string;
  /** O que a frente é, em linguagem simples. */
  kind: string;
  /** Nome curto para navegação. */
  navLabel: string;
  title: string;
  summary: string;
  cta: string;
  message: string;
  photo: PhotoKey;
};

export const services: Record<ServiceId, Service> = {
  marmitas: {
    id: "marmitas",
    anchor: "marmitas",
    line: "Marmitas congeladas",
    kind: "Marmitas congeladas",
    navLabel: "Marmitas",
    title: "Sua rotina, bem servida.",
    summary:
      "Kits montados do seu jeito: fit, low-carb, vegetarianas, variadas, sopas e saladas frescas, com cardápio que muda sempre e se adapta ao que você deseja.",
    cta: "Pedir meu kit",
    message: messages.marmitas,
    photo: "marmitas",
  },
  vanda: {
    id: "vanda",
    anchor: "cozinheira-particular",
    line: "Vanda Camargo",
    kind: "Cozinheira particular",
    navLabel: "Cozinheira em casa",
    title: "Uma cozinheira na sua casa.",
    summary:
      "A Vanda vai até a sua casa e prepara as refeições ali mesmo, na sua cozinha, do jeito que a ocasião pede.",
    cta: "Falar com a Vanda",
    message: messages.vanda,
    photo: "maosNaTabua",
  },
  feijoada: {
    id: "feijoada",
    anchor: "feijoada-de-raiz",
    line: "Feijoada de Raiz",
    kind: "Buffet de feijoada",
    navLabel: "Feijoada",
    title: "Mesa farta. Gente reunida.",
    summary:
      "Buffet de feijoada preparado e servido no local do evento, para festas particulares e empresas, com até 200 convidados.",
    cta: "Pedir orçamento",
    message: messages.feijoada,
    photo: "feijoadaMesa",
  },
};

export const serviceOrder: ServiceId[] = ["marmitas", "vanda", "feijoada"];

/* ------------------------------------------------------------------ */
/* Marmitas congeladas                                                 */
/* ------------------------------------------------------------------ */

export type MealCategory = {
  id: string;
  name: string;
  description: string;
  photo: PhotoKey;
  /** Observações confirmadas, exibidas como lista curta. */
  notes?: string[];
};

/** Confirmado pela marca: fit, low-carb e vegetarianas têm cardápio rotativo e sob medida. */
const rotatingMenu = ["Cardápio que muda sempre", "Adaptado ao que você deseja"];

/** Frase de destaque da seção de marmitas. */
export const mealMenuNote =
  "O cardápio das marmitas fit, low-carb e vegetarianas muda sempre e se adapta ao que você deseja.";

export const mealCategories: MealCategory[] = [
  {
    id: "fit",
    name: "Fit",
    description: "Para quem quer manter o prato equilibrado mesmo na semana mais corrida.",
    photo: "fit",
    notes: rotatingMenu,
  },
  {
    id: "low-carb",
    name: "Low-carb",
    description: "Para quem está reduzindo os carboidratos sem abrir mão de comer bem.",
    photo: "lowCarb",
    notes: rotatingMenu,
  },
  {
    id: "vegetarianas",
    name: "Vegetarianas",
    description: "Refeições sem carne, com o mesmo cuidado de todas as outras.",
    photo: "vegetariana",
    notes: rotatingMenu,
  },
  {
    id: "variadas",
    name: "Variadas",
    description: "Comida do dia a dia, para não repetir o mesmo prato a semana inteira.",
    photo: "variada",
  },
  {
    id: "sopas",
    name: "Sopas",
    description: "Para os dias frios, as noites leves e as horas em que só uma sopa resolve.",
    photo: "sopa",
  },
  {
    id: "saladas",
    name: "Saladas frescas",
    description: "As únicas que não vão ao freezer: frescas, com molho, direto para a geladeira.",
    photo: "salada",
    notes: ["Não são congeladas", "Acompanham molho", "Conservação de até 7 dias"],
  },
];

/** Kit sob medida: o cliente escolhe quantas refeições de cada categoria. */
export const kitBuilder = {
  title: "Monte o seu kit.",
  intro: "Escolha quantas refeições quiser de cada categoria. Não existe tamanho fixo: o kit é do jeito que a sua semana pede.",
  maxPerCategory: 30,
  /** Preços: aguardando confirmação. Enquanto `null`, o site orienta a consultar pelo WhatsApp. */
  priceNote: null as string | null,
  priceFallback: "Valores combinados pelo WhatsApp, conforme o kit.",
} as const;

export const mealOrderSteps = [
  {
    title: "Monte o kit aqui",
    text: "Escolha quantas refeições de cada categoria. Não tem tamanho fixo.",
  },
  {
    title: "Envie pelo WhatsApp",
    text: "A mensagem vai pronta com o seu kit. Conte o que gosta e o que prefere evitar.",
  },
  {
    title: "Combine os detalhes",
    text: "Valores, pagamento e a forma de receber são acertados direto na conversa.",
  },
] as const;

export const mealStorage = {
  frozen: {
    title: "Marmitas congeladas",
    lines: ["Guarde no freezer até a hora de comer."],
  },
  salads: {
    title: "Saladas frescas",
    lines: ["Não congele. Guarde na geladeira.", "Consuma em até 7 dias."],
  },
  /** Modo e tempo de aquecimento por tipo de refeição — aguardando confirmação. */
  heating: null as string[] | null,
  heatingFallback: "Ficou com dúvida sobre como aquecer? Pergunte ao fazer o pedido.",
} as const;

/* ------------------------------------------------------------------ */
/* Vanda Camargo — cozinheira particular                               */
/* ------------------------------------------------------------------ */

export const vanda = {
  /** Retrato real da Vanda. Enquanto `null`, o site mostra um espaço reservado. */
  portrait: null as { src: string; width: number; height: number } | null,
  intro:
    "Em vez de você levar a comida para casa, a cozinha vem até você. A Vanda prepara as refeições na sua cozinha, no dia e no horário combinados.",
  steps: [
    {
      title: "Conte o que você precisa",
      text: "Pelo WhatsApp, diga a ocasião, a data e para quantas pessoas.",
    },
    {
      title: "Acertem os detalhes",
      text: "O que vai para a mesa, o horário e os valores: tudo combinado direto com ela.",
    },
    {
      title: "A Vanda cozinha na sua casa",
      text: "No dia marcado, ela chega e prepara tudo ali, na hora.",
    },
  ],
  occasions: [
    "Uma semana em que ninguém tem tempo de cozinhar",
    "Um almoço para receber a família",
    "Um jantar especial em casa",
  ],
  occasionsNote: "Tem outra ocasião em mente? Conte para a Vanda e ela responde se consegue atender.",
} as const;

/* ------------------------------------------------------------------ */
/* Feijoada de Raiz                                                     */
/* ------------------------------------------------------------------ */

export const feijoada = {
  maxGuests: 200,
  intro:
    "Feijoada para a sua festa ou para o evento da sua empresa, feita e servida no próprio local. A panela chega, o fogo acende e a mesa se forma ali, perto de quem você convidou.",
  facts: [
    { label: "Onde", value: "Preparada e servida no local do evento" },
    { label: "Para quem", value: "Festas particulares e eventos de empresas" },
    { label: "Quantos", value: "Até 200 convidados" },
    { label: "Região", value: "Campinas, São Paulo e interior do estado" },
  ],
  /** Itens incluídos no buffet (acompanhamentos, equipe, louça etc.) — aguardando confirmação. */
  includes: [] as string[],
} as const;

/* ------------------------------------------------------------------ */
/* Depoimentos                                                          */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  author: string;
  /** Ex.: "Kit de 14 marmitas" ou "Feijoada, aniversário de 60 anos". */
  context?: string;
  service?: ServiceId;
};

/** Somente avaliações reais, com autorização do cliente. */
export const testimonials: Testimonial[] = [];

/* ------------------------------------------------------------------ */
/* Navegação                                                            */
/* ------------------------------------------------------------------ */

export const navigation = [
  { label: "A cozinha", href: "#a-cozinha" },
  { label: services.marmitas.navLabel, href: `#${services.marmitas.anchor}` },
  { label: services.vanda.navLabel, href: `#${services.vanda.anchor}` },
  { label: services.feijoada.navLabel, href: `#${services.feijoada.anchor}` },
] as const;
