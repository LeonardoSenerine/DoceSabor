import { Photo } from "./Photo";
import type { PhotoKey } from "@/content/images";

type FigureProps = {
  name: PhotoKey;
  sizes: string;
  /** Classe do formato (aspect-*) da moldura. */
  frame?: string;
  className?: string;
  /** Atributos repassados à <Image> (ex.: data-speed para parallax interno). */
  imgProps?: Record<`data-${string}`, string | boolean>;
  imgClassName?: string;
  preload?: boolean;
  /** Abre a foto como cortina ao entrar na tela. */
  reveal?: boolean;
};

/** Foto em moldura recortada. O aviso de fotos ilustrativas fica no rodapé. */
export function Figure({ name, sizes, frame = "aspect-[4/5]", className = "", imgProps, imgClassName, preload, reveal = true }: FigureProps) {
  return (
    <figure className={className}>
      <Photo name={name} sizes={sizes} tag="none" className={frame} imgProps={imgProps} imgClassName={imgClassName} preload={preload} reveal={reveal && !preload} />
    </figure>
  );
}
