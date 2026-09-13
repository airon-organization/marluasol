import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header";
import OlfactoryQuiz from "../components/olfactory-quiz";

const products = ["Perfumes botânicos", "Óleos de cuidado", "Kits e rituais"];

export default function LojaPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />
      <Box component="main">
        <OlfactoryQuiz />

        <Container maxWidth="lg" sx={{ bgcolor: "background.paper", px: { xs: 2.5, sm: 6 }, py: { xs: 5, sm: 7 } }}>
          <Box component="section">
            <Typography sx={{ color: "primary.main", fontSize: "0.68rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Loja online
            </Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 1, color: "primary.dark", fontSize: { xs: "1.55rem", sm: "2rem" } }}>
              Aromas para seus rituais
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 4, maxWidth: 720, color: "text.secondary", lineHeight: 1.7 }}>
              Uma curadoria de criações botânicas para transformar o cuidado cotidiano em presença.
            </Typography>

            <Grid container spacing={3}>
              {products.map((product, index) => (
                <Grid key={product} size={{ xs: 12, sm: 4 }}>
                  <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2, overflow: "hidden" }}>
                    <Box sx={{ aspectRatio: "4 / 3", bgcolor: index % 2 ? "secondary.light" : "#eadfea", display: "grid", placeItems: "center" }}>
                      <Typography sx={{ color: "primary.main", fontWeight: 900 }}>Imagem do produto</Typography>
                    </Box>
                    <Box sx={{ p: 2.5 }}>
                      <Typography component="h3" variant="h2" sx={{ fontSize: "1.1rem" }}>{product}</Typography>
                      <Typography sx={{ mt: 1, color: "text.secondary" }}>Coleção em preparação.</Typography>
                      <Button disabled sx={{ mt: 2 }}>Em breve</Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
