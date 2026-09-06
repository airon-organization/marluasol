import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

const paragraphs = [
  "Desde muito jovem me identifico profundamente com a natureza e com a filosofia do Yoga. As plantas são minhas guias no meu processo de autoconhecimento: me inspiram como seres vivos complexos e me ajudam a buscar uma vida com mais equilíbrio.",
  "Minha paixão pelos aromas naturais e a compreensão de que eles atuam de maneira sinérgica com nossos corpos despertaram em mim o desejo de compartilhar esse conhecimento com quem também sente o chamado para uma vida mais natural, harmoniosa com a natureza e consigo.",
  "A perfumaria natural e a aromaterapia fizeram sentido na minha vida muito antes de se tornarem algo que eu pudesse imaginar compartilhar com outras pessoas. Durante muito tempo, foi uma jornada pessoal e quase secreta.",
  "Porque uma engenheira de controle e automação faria perfumes?",
  "Por algum tempo, isso foi um conflito para mim. Mas estudar me trouxe segurança — e, principalmente, a vontade de permitir que outras pessoas também conhecessem essa arte.\nFui aluna da Doutora Palmira Margarida, na Escola de Perfumaria Ancestral, e, com o tempo, fui me envolvendo cada vez mais com a alquimia das plantas. Hoje crio perfumes naturais e pequenos lotes exclusivos, feitos com matérias-primas de origem vegetal e pensados para proporcionar experiências por meio dos aromas naturais.",
  "A natureza não é algo externo a nós. Nós fazemos parte dela.\nE talvez seja justamente essa comunhão entre nosso mundo interior e o mundo das plantas o que temos de mais próximo da verdadeira MAGIA.",
];

export default function QuemSouEuPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Box component="main" sx={{ width: "100%", bgcolor: "background.paper", px: { xs: 2.5, sm: 5, lg: 7.5 }, py: { xs: 5, md: 7 } }}>
        <Grid container spacing={{ xs: 5, md: 7, lg: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, color: "#111", textTransform: "uppercase" }}>
              Mariane Vidal
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 3, color: "#111", fontSize: { xs: "0.78rem", sm: "0.86rem" }, fontWeight: 900, textTransform: "uppercase" }}>
              Perfumista natural e professora de Yin Yoga
            </Typography>
            <Stack spacing={2.5}>
              {paragraphs.map((paragraph) => (
                <Typography key={paragraph} sx={{ color: "#111", fontSize: { xs: "0.95rem", md: "1rem" }, lineHeight: 1.55, whiteSpace: "pre-line" }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", width: "100%", maxWidth: 520, mx: "auto", aspectRatio: "1113 / 1414", overflow: "hidden", borderRadius: 1 }}>
              <Image alt="Mariane Vidal em momento de meditação" fill priority sizes="(max-width: 900px) 100vw, 42vw" src="/quem-sou-eu/PERFIL 1.png" style={{ objectFit: "cover" }} />
            </Box>

            <Box component="section" sx={{ maxWidth: 620, mx: "auto", mt: { xs: 5, md: 6 } }}>
              <Typography align="center" component="h2" sx={{ mb: 3, color: "#111", fontSize: "1.5rem", fontWeight: 800 }}>
                Fale comigo
              </Typography>
              <Stack spacing={2} sx={{ alignItems: "center" }}>
                <Typography align="center" sx={{ lineHeight: 1.6 }}>
                  Fale comigo pelo WhatsApp para saber mais sobre Yin Yoga, perfumaria natural e atendimentos.
                </Typography>
                <Button
                  href="https://wa.me/554891645940?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20comprar%20um%20perfume."
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  sx={{ maxWidth: "100%", textAlign: "center", py: 1.35 }}
                >
                  Conversar pelo WhatsApp
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
