import { Box, Grid, Typography } from "@mui/material";
import InnerPage from "../components/inner-page";

export default function QuemSouEuPage() {
  return (
    <InnerPage eyebrow="Sobre" title="Quem sou eu" description="A história por trás da MarLuaSol e do encontro entre perfumaria botânica, autocuidado e práticas de presença.">
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ aspectRatio: "4 / 5", bgcolor: "secondary.light", borderRadius: 2, display: "grid", placeItems: "center" }}>
            <Typography sx={{ color: "primary.main", fontWeight: 900 }}>Retrato / imagem autoral</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography component="h2" variant="h2" sx={{ color: "primary.main", fontSize: "1.6rem" }}>Minha trajetória</Typography>
          <Typography sx={{ mt: 2, lineHeight: 1.8 }}>Este esboço reserva espaço para contar sua formação, sua relação com as plantas e o caminho que deu origem à MarLuaSol.</Typography>
          <Typography sx={{ mt: 2, lineHeight: 1.8 }}>Aqui também podem entrar valores, certificações, experiências e a visão que orienta cada produto, aula e conteúdo.</Typography>
        </Grid>
      </Grid>
    </InnerPage>
  );
}
