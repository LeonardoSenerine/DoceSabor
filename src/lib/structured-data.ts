import { brand, contact, feijoada, serviceOrder, services } from "@/content/site";
import { siteUrl } from "./site-url";

/**
 * LocalBusiness de área de atendimento (sem endereço físico divulgado),
 * com os três serviços confirmados. Nada de avaliações, preços ou horários
 * enquanto não forem informados pela marca.
 */
export function businessJsonLd() {
  const id = `${siteUrl}/#negocio`;
  const areaServed = [
    { "@type": "City", name: "Campinas", containedInPlace: { "@type": "State", name: "São Paulo" } },
    { "@type": "City", name: "São Paulo", containedInPlace: { "@type": "State", name: "São Paulo" } },
    { "@type": "State", name: "São Paulo" },
  ];

  const serviceDescriptions: Record<string, string> = {
    marmitas: "Refeições congeladas em kits de 7, 14 ou 21: fit, low-carb, vegetarianas, variadas, sopas e saladas frescas.",
    vanda: "Cozinheira particular que prepara as refeições na residência do cliente.",
    feijoada: `Buffet de feijoada preparado e servido no local do evento, para até ${feijoada.maxGuests} convidados.`,
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": id,
    name: brand.name,
    description: brand.description,
    url: siteUrl,
    telephone: `+${contact.whatsappNumber}`,
    founder: { "@type": "Person", name: brand.owner },
    sameAs: [contact.instagramUrl],
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: serviceOrder.map((key) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${brand.name} — ${services[key].line}`,
          serviceType: services[key].kind,
          description: serviceDescriptions[key],
          provider: { "@id": id },
          areaServed,
          url: `${siteUrl}/#${services[key].anchor}`,
        },
      })),
    },
  };
}
