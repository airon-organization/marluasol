import { Box, Button, Grid, Typography } from "@mui/material";
import InnerPage from "../components/inner-page";

const products = ["Perfumes botânicos", "Óleos de cuidado", "Kits e rituais"];

export default function LojaPage() {
  return (
    <InnerPage eyebrow="Loja online" title="Aromas para seus rituais" description="Uma curadoria de criações botânicas para transformar o cuidado cotidiano em presença.">
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid key={product} size={{ xs: 12, sm: 4 }}>
            <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2, overflow: "hidden" }}>
              <Box sx={{ aspectRatio: "4 / 3", bgcolor: index % 2 ? "secondary.light" : "#eadfea", display: "grid", placeItems: "center" }}>
                <Typography sx={{ color: "primary.main", fontWeight: 900 }}>Imagem do produto</Typography>
              </Box>
              <Box sx={{ p: 2.5 }}>
                <Typography component="h2" variant="h2" sx={{ fontSize: "1.1rem" }}>{product}</Typography>
                <Typography sx={{ mt: 1, color: "text.secondary" }}>Coleção em preparação.</Typography>
                <Button disabled sx={{ mt: 2 }}>Em breve</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </InnerPage>
  );
}
