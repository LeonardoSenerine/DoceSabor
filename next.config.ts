import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Fotos provisórias (Unsplash e Pexels). Ao trocar pelas fotos reais em
    // /public, estes padrões podem ser removidos.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
    ],
  },
};

export default nextConfig;
