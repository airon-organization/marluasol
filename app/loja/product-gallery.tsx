import { Box } from "@mui/material";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  images: GalleryImage[];
  productName: string;
};

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const cover = images[0];

  if (!cover) return null;

  return (
    <Box
      aria-label={`Imagem de capa do perfume ${productName}`}
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: { xs: "4 / 5", sm: "5 / 4" },
        overflow: "hidden",
        borderRadius: { xs: 1.5, sm: 2 },
        bgcolor: "#eee8df",
      }}
    >
      <Image
        alt={cover.alt}
        fill
        preload
        sizes="(max-width: 900px) 100vw, 58vw"
        src={cover.src}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}

export function ProductImageGallery({ images, productName }: ProductGalleryProps) {
  if (images.length === 0) return null;

  return (
    <Box
      aria-label={`Outras imagens do perfume ${productName}`}
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          sm: "repeat(auto-fit, minmax(210px, 1fr))",
        },
        gap: { xs: 1, sm: 2.5 },
        mt: { xs: 4, sm: 6 },
      }}
    >
      {images.map((image) => (
        <Box
          key={image.src}
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: { xs: 1.5, sm: 2 },
            bgcolor: "#eee8df",
          }}
        >
          <Image
            alt={image.alt}
            fill
            sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 25vw"
            src={image.src}
            style={{ objectFit: "contain" }}
          />
        </Box>
      ))}
    </Box>
  );
}
