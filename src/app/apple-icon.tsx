import { ImageResponse } from "next/og";
import { E_PATH, RING_PATH } from "@/components/brand/marks";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Ícone da tela inicial do iPhone: o símbolo em mostarda sobre café. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#3B1F0E" }}>
        <svg width="180" height="180" viewBox="0 0 200 200">
          <g transform="translate(30 30) scale(0.7)" fill="none" stroke="#F2A922" strokeLinecap="round">
            <path d={RING_PATH} strokeWidth="11" />
            <path d={E_PATH} strokeWidth="13" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
