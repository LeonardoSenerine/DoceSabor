/**
 * Endereço público do site. Defina NEXT_PUBLIC_SITE_URL no ambiente de
 * produção (ex.: https://seudominio.com.br) — o domínio oficial ainda não foi
 * confirmado, por isso o padrão é local.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
