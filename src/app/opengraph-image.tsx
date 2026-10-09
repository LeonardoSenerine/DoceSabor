import { ImageResponse } from "next/og";
import { E_PATH, RING_PATH } from "@/components/brand/marks";
import { brand } from "@/content/site";

export const alt = `${brand.name} — ${brand.signature}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Busca a Fraunces no Google Fonts durante o build; sem rede, usa a fonte padrão. */
async function loadFraunces(text: string): Promise<ArrayBuffer | null> {
  "use cache";
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@144,600&text=${encodeURIComponent(text)}`,
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await fetch(url).then((res) => res.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const lines = ["Feita com cuidado.", "Servida com afeto."];
  const font = await loadFraunces(`${lines.join("")}Doce e Sabor`);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FCF1E1",
          color: "#3B1F0E",
          padding: 72,
          position: "relative",
          fontFamily: font ? "Fraunces" : "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ fontSize: 40, display: "flex" }}>Doce e Sabor</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 0.95, letterSpacing: -3 }}>
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 26, fontFamily: "sans-serif" }}>
            {[
              ["#0F3B26", "Marmitas"],
              ["#F2A922", "Cozinheira particular"],
              ["#D9452B", "Feijoada"],
            ].map(([color, label]) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 16, height: 16, borderRadius: 999, background: color }} />
                {label}
              </span>
            ))}
          </div>
        </div>
        <svg
          width="520"
          height="520"
          viewBox="0 0 200 200"
          style={{ position: "absolute", right: -40, top: 56 }}
        >
          <circle cx="100" cy="100" r="86" fill="#3B1F0E" />
          <path d={RING_PATH} fill="none" stroke="#F2A922" strokeWidth="4" strokeLinecap="round" transform="translate(28 28) scale(0.72)" />
          <path d={E_PATH} fill="none" stroke="#F2A922" strokeWidth="5" strokeLinecap="round" transform="translate(28 28) scale(0.72)" />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Fraunces", data: font, weight: 600, style: "normal" }] : undefined,
    },
  );
}
