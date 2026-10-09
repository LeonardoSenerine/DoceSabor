import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

/**
 * Gera /robots.txt. O site inteiro pode ser indexado, exceto /marca
 * (documentação interna da identidade) e as rotas internas do Next.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/marca", "/_next/", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
