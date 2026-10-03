import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import OlfactoryQuiz from "../components/olfactory-quiz";
import { products } from "./products";

type StoreProduct = {
  name: string;
  family: string;
  volume: string;
  price: string;
  image: string;
  imageAlt: string;
};

const storeProducts: StoreProduct[] = [
  {
    name: "Pachamama",
    family: "Terrosa fresca",
    volume: "50 ml",
    price: "R$ 250,00",
    image: "/products/store/pachamama.png",
    imageAlt: "Frasco do perfume natural Pachamama",
  },
  {
    name: "Maçã e Figo",
    family: "Frutado doce",
    volume: "25 ml",
    price: "R$ 150,00",
    image: "/products/store/maca_e_figo.png",
    imageAlt: "Frasco do perfume natural Maçã e Figo",
  },
  {
    name: "Hécate",
    family: "Oriental resinoso",
    volume: "180 ml",
    price: "R$ 450,00",
    image: "/products/store/hecate.png",
    imageAlt: "Frasco do perfume natural Hécate",
  },
  {
    name: "Perfume Mar",
    family: "Fresca",
    volume: "30 ml",
    price: "R$ 200,00",
    image: "/products/store/perfume_mar.png",
    imageAlt: "Frasco do Perfume Mar",
  },
  {
    name: "Perfume Lua",
    family: "Amadeirada",
    volume: "30 ml",
    price: "R$ 200,00",
    image: "/products/store/perfume_lua.png",
    imageAlt: "Frasco do Perfume Lua",
  },
  {
    name: "Perfume Sol",
    family: "Oriental",
    volume: "30 ml",
    price: "R$ 200,00",
    image: "/products/store/perfume_sol.png",
    imageAlt: "Frasco do Perfume Sol",
  },
];

export default function LojaPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />
      <Box component="main" id="page-content">
        <OlfactoryQuiz />

        <Box sx={{ bgcolor: "background.paper", px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 5, sm: 7, md: 9 } }}>
          <Box sx={{ mx: "auto", width: "100%", maxWidth: 1180 }}>
            <Box component="section" id="produtos" aria-labelledby="rituals-title" sx={{ mb: { xs: 7, sm: 9 }, scrollMarginTop: 24 }}>
              <Typography sx={{ color: "primary.main", fontSize: "0.85rem", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Loja online
              </Typography>
              <Typography component="h2" id="rituals-title" variant="h2" sx={{ mt: 1, color: "primary.dark", fontSize: { xs: "1.55rem", sm: "2rem" } }}>
                Aromas para seus rituais
              </Typography>
              <Typography sx={{ mt: 1.5, mb: 4, maxWidth: 720, color: "text.secondary", lineHeight: 1.7 }}>
                Uma curadoria de criações botânicas para transformar o cuidado cotidiano em presença.
              </Typography>

              <Grid container spacing={{ xs: 3.5, sm: 2.25 }}>
                {products.map((product) => (
                  <Grid key={product.name} size={{ xs: 12, sm: 4 }} sx={{ display: "flex" }}>
                    <Link
                      href={`/loja/${product.slug}`}
                      style={{ display: "flex", width: "100%", height: "100%", color: "inherit", textDecoration: "none" }}
                    >
                      <Box
                        component="article"
                        sx={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "column",
                          "& img": { transition: "transform 350ms ease" },
                          "a:hover & img": { transform: "scale(1.025)" },
                          "a:focus-visible &": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: 5 },
                          "@media (prefers-reduced-motion: reduce)": { "& img": { transition: "none" } },
                        }}
                      >
                        <Box sx={{ position: "relative", width: "100%", aspectRatio: "1 / 1", overflow: "hidden", borderRadius: 1, bgcolor: "#e8e4df" }}>
                          <Image
                            alt={product.listImageAlt}
                            fill
                            sizes="(max-width: 600px) 100vw, 33vw"
                            src={product.listImage}
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                        <Box sx={{ display: "flex", flex: 1, flexDirection: "column", pt: 1.5 }}>
                          <Typography component="h3" sx={productNameStyles}>{product.name}</Typography>
                          <Typography sx={{ ...detailStyles, minHeight: "1.35em" }}>Família olfativa {product.family}</Typography>
                          <Typography sx={detailStyles}>{product.volume}</Typography>
                          <Typography sx={{ ...detailStyles, mt: 0.25 }}>{product.price}</Typography>
                        </Box>
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box component="section" aria-labelledby="collection-title">
              <Typography component="h2" id="collection-title" sx={sectionTitleStyles}>
                Coleção MarLuaSol
              </Typography>
              <Typography sx={{ mt: 1, color: "text.primary", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                Um perfume para cada momento do dia
              </Typography>

              <Grid container spacing={{ xs: 3.5, md: 3 }} sx={{ mt: { xs: 1.5, sm: 2.25 } }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <CollectionImage alt="Caixa da Coleção MarLuaSol com os perfumes Mar, Lua e Sol" image="/products/store/collection/collection01.png" />
                  <Box sx={{ mt: 1.75 }}>
                    <Typography component="h3" sx={collectionHeadingStyles}>
                      Coleção MarLuaSol
                    </Typography>
                    <Stack spacing={0.25} sx={{ mt: 0.65 }}>
                      <Typography sx={detailStyles}>Família olfativa fresca</Typography>
                      <Typography sx={detailStyles}>Família olfativa amadeirada</Typography>
                      <Typography sx={detailStyles}>Família olfativa oriental</Typography>
                    </Stack>
                    <Stack spacing={0.25} sx={{ mt: 2 }}>
                      <Typography sx={detailStyles}>3 frascos x 30 ml</Typography>
                      <Typography sx={detailStyles}>R$ 600,00</Typography>
                    </Stack>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <CollectionImage alt="Frascos dos perfumes Mar, Lua e Sol sobre tecido acetinado" image="/products/store/collection/collection02.png" />
                  <Box sx={{ mt: 1.75, maxWidth: 530 }}>
                    <Typography component="h3" sx={{ ...collectionHeadingStyles, textTransform: "none" }}>
                      Você não precisa escolher um só perfume!
                    </Typography>
                    <Typography sx={{ mt: 0.65, color: "text.primary", fontSize: { xs: "0.9rem", sm: "0.96rem" }, lineHeight: 1.55 }}>
                      Esse kit contém os principais aromas para todos os momentos do seu dia:
                    </Typography>
                    <Stack spacing={0.2} sx={{ mt: 0.35 }}>
                      <Typography sx={collectionCopyStyles}>Mar para esportes, atenção plena e meditação</Typography>
                      <Typography sx={collectionCopyStyles}>Lua para uma noite tranquila e envolvente</Typography>
                      <Typography sx={collectionCopyStyles}>Sol para brilhar e ser magnética</Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box component="section" id="perfumes-naturais" aria-labelledby="products-title" sx={{ mt: { xs: 7, sm: 9 } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box aria-hidden="true" sx={{ width: 3, height: 26, bgcolor: "primary.main", borderRadius: 2 }} />
                <Typography component="h2" id="products-title" sx={sectionTitleStyles}>
                  Perfumes naturais para todos os gostos
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 4, sm: 2.5, md: 3 }} sx={{ mt: { xs: 2.5, sm: 3 } }}>
                {storeProducts.map((product) => (
                  <Grid key={product.name} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
                    <Box component="article" sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
                      <Box sx={{ position: "relative", width: "100%", aspectRatio: "1 / 1", overflow: "hidden", borderRadius: 1, bgcolor: "#e8e4df" }}>
                        <Image
                          alt={product.imageAlt}
                          fill
                          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                          src={product.image}
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Box sx={{ display: "flex", flex: 1, flexDirection: "column", pt: 1.35 }}>
                        <Typography component="h3" sx={productNameStyles}>{product.name}</Typography>
                        <Typography sx={{ ...detailStyles, minHeight: { md: "2.6em" } }}>Família olfativa {product.family}</Typography>
                        <Typography sx={detailStyles}>{product.volume}</Typography>
                        <Typography sx={{ ...detailStyles, mt: 0.25 }}>{product.price}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>


          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

function CollectionImage({ alt, image }: { alt: string; image: string }) {
  return (
    <Box sx={{ position: "relative", width: "100%", aspectRatio: "1.5 / 1", overflow: "hidden", borderRadius: 1, bgcolor: "#eee7e1" }}>
      <Image alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" src={image} style={{ objectFit: "cover" }} />
    </Box>
  );
}

const sectionTitleStyles = {
  color: "primary.dark",
  fontSize: { xs: "1.05rem", sm: "1.25rem" },
  fontWeight: 900,
  letterSpacing: "0.01em",
  lineHeight: 1.25,
  textTransform: "uppercase",
} as const;

const collectionHeadingStyles = {
  color: "text.primary",
  fontSize: { xs: "0.9rem", sm: "0.96rem" },
  fontWeight: 500,
  lineHeight: 1.35,
  textTransform: "uppercase",
} as const;

const collectionCopyStyles = {
  color: "text.primary",
  fontSize: { xs: "0.9rem", sm: "0.96rem" },
  lineHeight: 1.45,
} as const;

const productNameStyles = {
  color: "text.primary",
  fontSize: { xs: "0.98rem", sm: "0.92rem" },
  fontWeight: 500,
  lineHeight: 1.35,
  textTransform: "uppercase",
} as const;

const detailStyles = {
  mt: 0.28,
  color: "text.secondary",
  fontSize: { xs: "0.86rem", sm: "0.8rem" },
  fontWeight: 400,
  letterSpacing: "0.025em",
  lineHeight: 1.35,
  textTransform: "uppercase",
} as const;
