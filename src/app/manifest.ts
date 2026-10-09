import type { MetadataRoute } from "next";
import { brand } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name}, de ${brand.owner}`,
    short_name: brand.name,
    description: brand.description,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf1e1",
    theme_color: "#3b1f0e",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
