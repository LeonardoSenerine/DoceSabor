/**
 * Endereço público do site, em ordem de preferência:
 * 1. NEXT_PUBLIC_SITE_URL (defina quando houver domínio próprio);
 * 2. o domínio de produção da Vercel (variável de sistema da Vercel);
 * 3. localhost, em desenvolvimento.
 */
const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProduction ? `https://${vercelProduction}` : "http://localhost:3000")
).replace(/\/$/, "");
