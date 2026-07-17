import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import InnerPage from "../../components/inner-page";

export default function YinYogaArticlePage() {
  return (
    <InnerPage eyebrow="Yin Yoga" title="O que é Yin Yoga" description="Uma prática que nos ensina sobre quietude, relaxamento e a inteligência de respeitar o próprio tempo.">
      <Box sx={{ position: "relative", width: "100%", aspectRatio: { xs: "4 / 3", md: "16 / 7" }, borderRadius: 2, overflow: "hidden" }}>
        <Image alt="Prática de Yin Yoga" fill sizes="(max-width: 900px) 100vw, 1100px" src="/articles/o_que_e_yin_yoga/IMG-20251001-WA0015 1.png" style={{ objectFit: "cover" }} />
      </Box>
      <Stack spacing={2.5} sx={{ mt: 4, maxWidth: 760 }}>
        <Typography component="h2" variant="h2" sx={{ color: "primary.main", fontSize: "1.55rem" }}>Um convite à permanência</Typography>
        <Typography sx={{ lineHeight: 1.8 }}>Inspirado na medicina chinesa e na cultura yogue, o Yin Yoga trabalha o tecido conjuntivo por meio de posturas mantidas por mais tempo e com menos esforço muscular.</Typography>
        <Typography sx={{ lineHeight: 1.8 }}>Este esboço pode receber o texto completo sobre benefícios, cuidados, experiência de aula e orientações para iniciantes.</Typography>
      </Stack>
    </InnerPage>
  );
}
