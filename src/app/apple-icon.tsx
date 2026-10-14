import { ImageResponse } from "next/og";
import { FORK_PATH, SPOON_PATH } from "@/components/brand/LogoMark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const CAFE = "#3B1F0E";

/** Ícone da tela inicial do iPhone: o prato da logo, em café sobre o bege da logo. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#E3CAAC" }}>
        <svg width="150" height="150" viewBox="2 8 84 84" fill="none">
          <circle cx="44" cy="50" r="37" stroke={CAFE} strokeWidth="6" />
          <path d="M22.5 37.5 A25 25 0 0 1 65.5 37.5" stroke={CAFE} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M65.5 62.5 A25 25 0 0 1 22.5 62.5" stroke={CAFE} strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="19" cy="50" r="2.3" stroke={CAFE} strokeWidth="1.8" />
          <circle cx="69" cy="50" r="2.3" stroke={CAFE} strokeWidth="1.8" />
          <path d={FORK_PATH} fill={CAFE} transform="translate(44 50) rotate(-42)" />
          <path d={SPOON_PATH} fill={CAFE} transform="translate(44 50) rotate(42)" />
        </svg>
      </div>
    ),
    size,
  );
}
