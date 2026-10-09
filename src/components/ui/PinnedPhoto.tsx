import type { CSSProperties } from "react";
import { Tape, TapeStrip } from "@/components/brand/kitchen";
import { photos, type PhotoKey } from "@/content/images";
import { Photo } from "./Photo";

type PinnedPhotoProps = {
  name: PhotoKey;
  sizes: string;
  /** Nome do prato ou da cena, escrito na fita quando a foto for real. */
  caption: string;
  /** Inclinação da foto em graus. */
  tilt?: number;
  aspect?: string;
  preload?: boolean;
  className?: string;
  /** Atributos do contêiner (ex.: data-hero-print). */
  dataAttrs?: Record<`data-${string}`, string>;
};

/**
 * Foto impressa, com margem de papel, presa na página com fita crepe.
 * A etiqueta diz o que é a foto; enquanto a imagem for provisória, ela
 * avisa "foto ilustrativa".
 */
export function PinnedPhoto({
  name,
  sizes,
  caption,
  tilt = 2,
  aspect = "aspect-[4/5]",
  preload = false,
  className = "",
  dataAttrs,
}: PinnedPhotoProps) {
  const label = photos[name].provisional ? "foto ilustrativa" : caption;

  return (
    <figure className={`relative ${className}`} style={{ rotate: `${tilt}deg` } as CSSProperties} {...dataAttrs}>
      <div className="bg-papel p-2 shadow-[0_1px_2px_rgb(59_31_14/0.14),0_22px_40px_-26px_rgb(59_31_14/0.55)] sm:p-3">
        <Photo name={name} sizes={sizes} preload={preload} tag="none" className={aspect} />
      </div>
      <TapeStrip tilt={-8} className="absolute -top-3 left-[12%] w-20 sm:w-24" />
      <TapeStrip tilt={6} className="absolute -top-3 right-[10%] w-20 sm:w-24" />
      <figcaption className="absolute right-[8%] -bottom-4">
        <Tape tilt={-2}>{label}</Tape>
      </figcaption>
    </figure>
  );
}
