/**
 * Conteúdo editável do site da Doce&Sabor.
 *
 * Regra: só entra aqui o que foi confirmado pela marca. Campos marcados com
 * `null` ou listas vazias aguardam informação real e são omitidos (ou trocados
 * por um convite ao WhatsApp) na interface até serem preenchidos.
 */
import type { PhotoKey } from "./images";

export const brand = {
  name: "Doce&Sabor",
  owner: "Vanda Camargo",
  signature: "Feita com cuidado. Servida com afeto.",
  description:
    "Marmitas congeladas, personal chef e buffet de feijoada em Bragança Paulista, Itatiba, Campinas e Santa Bárbara d’Oeste. A cozinha da Chef Vanda Camargo, da refeição que facilita a semana à mesa que reúne quem você ama.",
} as const;

export const contact = {
  whatsappNumber: "5511952382566",
  whatsappDisplay: "+55 11 95238-2566",
  instagramUrl: "https://www.instagram.com/doceesaborfit",
  instagramHandle: "@doceesaborfit",
  serviceArea: ["Bragança Paulista", "Itatiba", "Campinas", "Santa Bárbara d’Oeste"],
} as const;

/** Crédito de desenvolvimento, no rodapé. */
export const credits = {
  studio: "Senerine.dev",
  url: "https://senerinedev.vercel.app/pt",
} as const;

/** Data da última revisão da política de privacidade e cookies. */
export const privacyUpdatedAt = "9 de outubro de 2026";

/** Mensagens pré-preenchidas, uma por caminho de contato. */
export const messages = {
  geral: "Olá, Chef Vanda! Vim pelo site da Doce&Sabor e gostaria de mais informações.",
  marmitas: "Olá! Vim pelo site e gostaria de consultar as opções de marmitas congeladas da Doce&Sabor.",
  vanda: "Olá, Chef Vanda! Gostaria de conversar sobre o atendimento de personal chef.",
  feijoada: "Olá! Gostaria de solicitar um orçamento do buffet de Feijoada de Raiz para um evento.",
} as const;

/** Abertura do site. */
export const hero = {
  title: ["Feita com", "cuidado."],
  subtitle: ["Servida com", "afeto."],
  text: "Marmitas congeladas, personal chef e feijoada para eventos, pelas mãos da Chef Vanda Camargo. Da refeição que facilita a sua semana à mesa que reúne quem você ama.",
  /** Principal: abre o WhatsApp. */
  cta: "Fale com a Chef",
  /** Secundário: leva à seção da cozinha. */
  secondaryCta: "Conheça a cozinha",
} as const;

export type ServiceId = "marmitas" | "vanda" | "feijoada";

export type Service = {
  id: ServiceId;
  /** Âncora da seção na página. */
  anchor: string;
  /** Nome da frente, usado na assinatura da marca. */
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
    title: "Sabor de casa, do seu jeito.",
    summary:
      "Refeições preparadas com cuidado para acompanhar a sua rotina, com variedade e aquele sabor que faz diferença no dia a dia.",
    cta: "Consulte as opções",
    message: messages.marmitas,
    photo: "marmitas",
  },
  vanda: {
    id: "vanda",
    anchor: "personal-chef",
    line: "Vanda Camargo",
    kind: "Personal chef",
    navLabel: "Personal chef",
    title: "Uma chef na sua casa.",
    summary:
      "A Chef Vanda Camargo vai até a sua casa e prepara as refeições ali mesmo, na sua cozinha, do jeito que a ocasião pede.",
    cta: "Converse sobre o atendimento",
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
    cta: "Solicite um orçamento",
    message: messages.feijoada,
    photo: "feijoadaCompleta",
  },
};

export const serviceOrder: ServiceId[] = ["marmitas", "vanda", "feijoada"];

/* ------------------------------------------------------------------ */
/* A cozinha: quem cozinha                                             */
/* ------------------------------------------------------------------ */

export const kitchen = {
  kicker: "Quem cozinha",
  text: [
    "A Chef Vanda Camargo é a pessoa por trás da Doce&Sabor.",
    "É dela o jeito de cozinhar que aparece em tudo o que a marca faz, das marmitas que vão para o freezer à feijoada servida no seu evento: comida de verdade, feita para estar à mesa.",
  ],
} as const;

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

/** Destaque da seção de marmitas (confirmado pela marca). */
export const mealMenuNote =
  "Nas vegetarianas, low-carb e fit, o cardápio muda sempre e se adapta ao que você deseja.";

export const mealCategories: MealCategory[] = [
  {
    id: "vegetarianas",
    name: "Vegetarianas",
    description: "Refeições sem carne, com o mesmo cuidado de todas as outras.",
    photo: "vegetariana",
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
    id: "fit",
    name: "Fit",
    description: "Para quem quer manter o prato equilibrado mesmo na semana mais corrida.",
    photo: "fit",
    notes: rotatingMenu,
  },
  {
    id: "variadas",
    name: "Variadas",
    description: "Comida do dia a dia, para não repetir o mesmo prato a semana inteira.",
    photo: "variada",
  },
  {
    id: "saladas",
    name: "Saladas",
    description: "As únicas que não vão ao freezer: frescas, com molho, direto para a geladeira.",
    photo: "salada",
    notes: ["Não são congeladas", "Acompanham molho", "Conservação de até 7 dias"],
  },
  {
    id: "caldos",
    name: "Caldos",
    description: "Para os dias frios, as noites leves e as horas em que só um caldo resolve.",
    photo: "caldo",
  },
];

/** Como o pedido é combinado: sem carrinho, tudo na conversa. */
export const mealOrderNote = "Opções, valores, pagamento e a forma de receber são combinados direto na conversa.";

export const mealStorage = {
  frozen: {
    title: "Marmitas congeladas",
    lines: ["Guarde no freezer até a hora de comer."],
  },
  salads: {
    title: "Saladas frescas",
    lines: ["Não congele. Guarde na geladeira.", "Consuma em até 7 dias."],
  },
  /** Modo e tempo de aquecimento por tipo de refeição: aguardando confirmação. */
  heating: null as string[] | null,
  heatingFallback: "Ficou com dúvida sobre como aquecer? Pergunte ao fazer o pedido.",
} as const;

/* ------------------------------------------------------------------ */
/* Vanda Camargo, personal chef                                       */
/* ------------------------------------------------------------------ */

export const vanda = {
  /** Retrato real da Vanda. Enquanto `null`, o site mostra um espaço reservado. */
  portrait: null as { src: string; width: number; height: number } | null,
  intro:
    "Em vez de você levar a comida para casa, a cozinha vem até você. A Chef prepara as refeições na sua cozinha, no dia e no horário combinados.",
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
      title: "A Chef cozinha na sua casa",
      text: "No dia marcado, ela chega e prepara tudo ali, na hora.",
    },
  ],
  occasions: [
    "Uma semana em que ninguém tem tempo de cozinhar",
    "Um almoço para receber a família",
    "Um jantar especial em casa",
  ],
  occasionsNote:
    "Com certeza! Nós adaptamos o cardápio e a estrutura para qualquer tipo de comemoração. Me conta: qual seria a ocasião e o que você tem em mente? Assim já monto uma proposta personalizada e deliciosa para o seu evento!",
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
    { label: "Região", value: "Bragança Paulista, Itatiba, Campinas e Santa Bárbara d’Oeste" },
  ],
  /** Itens incluídos no buffet (acompanhamentos, equipe, louça etc.): aguardando confirmação. */
  includes: [] as string[],
} as const;

/* ------------------------------------------------------------------ */
/* Depoimentos                                                          */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  author: string;
  /** Ex.: "Marmitas congeladas" ou "Feijoada, aniversário de 60 anos". */
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
  { label: "Contato", href: "#contato" },
] as const;
