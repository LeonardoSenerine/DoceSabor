import Image from "next/image";
import { photos, type Photo as PhotoData, type PhotoKey } from "@/content/images";

type PhotoProps = {
  name: PhotoKey;
  sizes: string;
  className?: string;
  imgClassName?: string;
  /** Somente para a imagem principal acima da dobra. */
  preload?: boolean;
  /** Onde fica a marcação "Foto ilustrativa". */
  tag?: "bottom-left" | "bottom-right" | "top-right" | "none";
  /** Tom da marcação, conforme o fundo da foto. */
  tagTone?: "light" | "dark";
  /** Abre a foto como cortina ao entrar na tela. */
  reveal?: boolean;
  /** Qualidade da compressão (75 ou 85, conforme next.config). */
  quality?: 75 | 85;
  /** Atributos extras repassados à <Image> (ex.: data-parallax). */
  imgProps?: Record<`data-${string}`, string | boolean>;
};

const tagPosition = {
  "bottom-left": "left-3 bottom-3",
  "bottom-right": "right-3 bottom-3",
  "top-right": "right-3 top-3",
  none: "",
} as const;

/**
 * Fotografia com corte controlado. O contêiner define o formato (retângulo,
 * retrato, círculo, sangria); a imagem sempre preenche com object-cover.
 */
export function Photo({
  name,
  sizes,
  className = "",
  imgClassName = "",
  preload = false,
  tag = "bottom-right",
  tagTone = "light",
  imgProps,
  reveal = false,
  quality = 75,
}: PhotoProps) {
  const photo: PhotoData = photos[name];

  return (
    <div className={`relative overflow-hidden bg-creme-escuro ${className}`} data-reveal-image={reveal ? "" : undefined}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        quality={quality}
        preload={preload}
        fetchPriority={preload ? "high" : undefined}
        className={`grade object-cover ${imgClassName}`}
        style={{ objectPosition: photo.focus ?? "50% 50%" }}
        {...imgProps}
      />
      {photo.provisional && tag !== "none" ? (
        <span
          className={`pointer-events-none absolute z-10 ${tagPosition[tag]} note px-2 py-0.5 text-[0.72rem] ${
            tagTone === "light" ? "bg-creme/85 text-cafe" : "bg-cafe/75 text-creme"
          }`}
        >
          Foto ilustrativa
        </span>
      ) : null}
    </div>
  );
}
