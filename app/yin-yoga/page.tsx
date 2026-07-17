import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import InnerPage from "../components/inner-page";

const pillars = [
  ["Pausa", "Posturas sustentadas com calma e atenção à respiração."],
  ["Escuta", "Um convite para perceber limites, sensações e emoções."],
  ["Presença", "Uma prática suave para cultivar mobilidade e quietude."],
];

export default function YinYogaPage() {
  return (
    <InnerPage eyebrow="Prática" title="Yin Yoga" description="Uma prática contemplativa que desacelera o corpo e abre espaço para escuta, presença e descanso.">
      <Grid container spacing={3}>
        {pillars.map(([title, text]) => (
          <Grid key={title} size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: "100%", bgcolor: "secondary.light", borderRadius: 2, p: 3 }}>
              <Typography component="h2" variant="h2" sx={{ color: "primary.main", fontSize: "1.25rem" }}>{title}</Typography>
              <Typography sx={{ mt: 1.5, lineHeight: 1.65 }}>{text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ alignItems: "flex-start", mt: 5 }}>
        <Typography component="h2" variant="h2" sx={{ fontSize: "1.5rem" }}>Conheça a prática</Typography>
        <Typography sx={{ maxWidth: 720, lineHeight: 1.7 }}>Este é um espaço inicial para apresentar aulas, horários, modalidades e orientações para quem deseja começar.</Typography>
        <Button href="/articles/o_que_e_yin_yoga" variant="contained">Leia o artigo completo</Button>
      </Stack>
    </InnerPage>
  );
}
