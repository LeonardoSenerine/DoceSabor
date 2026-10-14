import { ImageResponse } from "next/og";
import { FORK_PATH, LOGO_VIEWBOX, SPOON_PATH } from "@/components/brand/LogoMark";
import { brand } from "@/content/site";
import { photos } from "@/content/images";

export const alt = `${brand.name}: ${brand.signature}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CAFE = "#3B1F0E";
const BEGE = "#E3CAAC"; // o fundo da logo original

/** Busca uma fonte no Google Fonts durante o build; sem rede, usa a fonte padrão. */
async function loadFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  "use cache";
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`,
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await fetch(url).then((res) => res.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

/** O símbolo da logo, para a imagem gerada. */
function Mark({ width }: { width: number }) {
  return (
    <svg width={width} height={(width * 100) / 120} viewBox={LOGO_VIEWBOX} fill="none">
      <circle cx="44" cy="50" r="37" stroke={CAFE} strokeWidth="6" />
      <path d="M22.5 37.5 A25 25 0 0 1 65.5 37.5" stroke={CAFE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M65.5 62.5 A25 25 0 0 1 22.5 62.5" stroke={CAFE} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="19" cy="50" r="2.3" stroke={CAFE} strokeWidth="1.8" />
      <circle cx="69" cy="50" r="2.3" stroke={CAFE} strokeWidth="1.8" />
      <path d={FORK_PATH} fill={CAFE} transform="translate(44 50) rotate(-42)" />
      <path d={SPOON_PATH} fill={CAFE} transform="translate(44 50) rotate(42)" />
      <path d="M81 41.5 H95 M81.5 50 H95 M81 58.5 H95" stroke={CAFE} strokeWidth="3.2" />
      <path d="M96.5 16 V84" stroke={CAFE} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Capa de link (WhatsApp, Instagram, redes): a logo oficial sobre o bege da
 * logo, com a assinatura, e o banquete do site ao lado.
 */
export default async function OpengraphImage() {
  const logoText = "Doce & SaborMARMITAS FIT";
  const slogan = brand.signature;
  const [logoFont, sloganFont] = await Promise.all([
    loadFont("Noto+Serif", 400, logoText),
    loadFont("Fraunces", 400, slogan),
  ]);
  const photo = photos.hero.src.replace(/w=\d+/, "w=1000");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: BEGE, color: CAFE }}>
        <div
          style={{
            width: 700,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <Mark width={250} />
            <div style={{ display: "flex", flexDirection: "column", fontFamily: logoFont ? "Noto Serif" : "serif" }}>
              <span style={{ fontSize: 96, lineHeight: 1 }}>Doce &amp;</span>
              <span style={{ fontSize: 96, lineHeight: 1 }}>Sabor</span>
              <span style={{ marginTop: 18, fontSize: 26, letterSpacing: 9, opacity: 0.8 }}>MARMITAS FIT</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 56,
              fontSize: 40,
              lineHeight: 1.15,
              fontFamily: sloganFont ? "Fraunces" : "serif",
              display: "flex",
            }}
          >
            {slogan}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- imagem gerada no build, sem otimizador */}
        <img src={photo} alt="" width={500} height={630} style={{ width: 500, height: 630, objectFit: "cover" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(logoFont ? [{ name: "Noto Serif", data: logoFont, weight: 400 as const, style: "normal" as const }] : []),
        ...(sloganFont ? [{ name: "Fraunces", data: sloganFont, weight: 400 as const, style: "normal" as const }] : []),
      ],
    },
  );
}
