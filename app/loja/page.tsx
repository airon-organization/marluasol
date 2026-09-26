import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import OlfactoryQuiz from "../components/olfactory-quiz";

const products = [
  {
    name: "Rosa Vermelha",
    family: "Família olfativa floral doce",
    volume: "30 ml",
    price: "R$ 200,00",
    image: "/products/rosa_vermelha.png",
    imageAlt: "Perfume Rosa Vermelha com rosa e elementos botânicos",
  },
  {
    name: "Lakshmi",
    family: "Família olfativa fresco verde",
    volume: "50 ml",
    price: "R$ 250,00",
    image: "/products/lakshmi.png",
    imageAlt: "Perfume Lakshmi entre plantas aromáticas",
  },
  {
    name: "Maçã e Canela",
    family: "Família olfativa oriental doce",
    volume: "25 ml",
    price: "R$ 150,00",
    image: "/products/maca_e_canela.png",
    imageAlt: "Frasco do perfume Maçã e Canela",
  },
] as const;

export default function LojaPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />
      <Box component="main">
        <OlfactoryQuiz />

        <Box sx={{ width: "100%", bgcolor: "background.paper", px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 5, sm: 7 } }}>
          <Box component="section" id="produtos" sx={{ scrollMarginTop: 24 }}>
            <Typography sx={{ color: "primary.main", fontSize: "0.68rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Loja online
            </Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 1, color: "primary.dark", fontSize: { xs: "1.55rem", sm: "2rem" } }}>
              Aromas para seus rituais
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 4, maxWidth: 720, color: "text.secondary", lineHeight: 1.7 }}>
              Uma curadoria de criações botânicas para transformar o cuidado cotidiano em presença.
            </Typography>

            <Grid container spacing={{ xs: 3.5, sm: 2.25 }}>
              {products.map((product) => (
                <Grid key={product.name} size={{ xs: 12, sm: 4 }} sx={{ display: "flex" }}>
                  <Box component="article" sx={{ display: "flex", width: "100%", height: "100%", flexDirection: "column" }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        overflow: "hidden",
                        borderRadius: 1,
                        bgcolor: "#e8e4df",
                      }}
                    >
                      <Image
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 600px) 100vw, 33vw"
                        src={product.image}
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    <Box sx={{ display: "flex", flex: 1, flexDirection: "column", pt: 1.5 }}>
                      <Typography
                        component="h3"
                        sx={{
                          minHeight: "1.3em",
                          color: "text.primary",
                          fontSize: { xs: "0.9rem", sm: "0.78rem" },
                          fontWeight: 500,
                          lineHeight: 1.3,
                          textTransform: "uppercase",
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography sx={{ ...productDetailStyles, minHeight: "1.35em" }}>{product.family}</Typography>
                      <Typography sx={productDetailStyles}>{product.volume}</Typography>
                      <Typography sx={{ ...productDetailStyles, mt: 0.25 }}>{product.price}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

const productDetailStyles = {
  mt: 0.3,
  color: "text.secondary",
  fontSize: { xs: "0.72rem", sm: "0.66rem" },
  fontWeight: 400,
  letterSpacing: "0.025em",
  lineHeight: 1.35,
  textTransform: "uppercase",
} as const;
