import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { buildWhatsAppLink } from "../lib/contact";

const paragraphs = [
  "Sempre tive uma conexão muito forte com a natureza e com as plantas, embora, durante muitos anos, tenha vivido essa relação quase como se fosse um segredo, talvez por seguir uma trajetória profissional tão diferente. Sou engenheira e construí minha carreira em ambientes técnicos, trabalhando com qualidade de materiais em multinacionais, em um universo marcado por precisão, especificações e racionalidade.",
  "Ao mesmo tempo, porém, o estudo das plantas, dos aromas e das práticas de bem-estar esteve sempre presente na minha vida. A aromaterapia surgiu primeiro como interesse pessoal e depois como campo de estudo, ajudando-me a compreender, com ainda mais clareza, o quanto presença, sensibilidade e conexão com o corpo fazem parte daquilo que quero levar para o mundo.",
  "Foi através dos aromas naturais que essas diferentes partes da minha história começaram a se encontrar. A paixão pelas plantas e a percepção de que seus aromas podem transformar a maneira como vivenciamos um momento despertaram em mim o desejo de aprofundar esse conhecimento e compartilhá-lo com outras pessoas que também buscam uma vida mais natural, consciente e conectada consigo mesmas.",
  "O estudo em uma escola de perfumaria natural aprofundou ainda mais essa relação. Fui aluna da Dra. Palmira Margarida, na Escola de Perfumaria Ancestral, onde mergulhei no estudo das plantas e de seus simbolismos, mitologias femininas e dos benefícios físicos e mentais dos perfumes naturais. Aos poucos, aquilo que antes era apenas uma paixão foi ganhando forma, propósito e identidade.",
  "Assim nasceu a MarLuaSol. Hoje, crio perfumes naturais em pequenos lotes, utilizando somente produtos naturais, como óleos essenciais, extratos botânicos e plantas. Cada perfume nasce do encontro entre estudo, sensibilidade, história, natureza e criação artesanal. Utilizo na perfumaria o cuidado com segurança e qualidade que aprendi na engenharia.",
  "A MarLuaSol representa essa união entre dois mundos que durante muito tempo pareceram separados para mim: o olhar técnico e racional da engenharia e a sensibilidade das plantas, dos aromas e das práticas ancestrais.",
  "No fim, percebi que nunca precisei escolher entre um e outro. Era justamente dessa união que a MarLuaSol precisava nascer. Hoje me vejo como uma pessoa com várias facetas: sou engenheira de controle e automação, com pós-graduação em segurança do trabalho, e também perfumista natural. Espero trazer ao mundo o melhor de todos os meus lados, com o intuito de ajudar as pessoas e fazer minha parte para tornar o mundo um lugar mais gentil e perfumado.",
];

export default function QuemSouEuPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Box component="main" id="page-content" sx={{ width: "100%", bgcolor: "background.paper", px: { xs: 2.5, sm: 5, lg: 7.5 }, py: { xs: 5, md: 7 } }}>
        <Grid container spacing={{ xs: 5, md: 7, lg: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, color: "#111", textTransform: "uppercase" }}>
              Mariane Vidal
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 3, color: "#111", fontSize: { xs: "0.78rem", sm: "0.86rem" }, fontWeight: 900, textTransform: "uppercase" }}>
              Perfumista natural e engenheira
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
            <Box sx={{ position: "relative", width: "100%", maxWidth: 520, mx: "auto", aspectRatio: "1046 / 1504", overflow: "hidden", borderRadius: 1 }}>
              <Image alt="Mariane Vidal em meio à natureza" fill preload sizes="(max-width: 900px) 100vw, 42vw" src="/quem-sou-eu/imagem-quem-sou-eu.png" style={{ objectFit: "cover" }} />
            </Box>

            <Box component="section" sx={{ maxWidth: 620, mx: "auto", mt: { xs: 5, md: 6 } }}>
              <Typography align="center" component="h2" sx={{ mb: 3, color: "#111", fontSize: "1.5rem", fontWeight: 800 }}>
                Fale comigo
              </Typography>
              <Stack spacing={2} sx={{ alignItems: "center" }}>
                <Typography align="center" sx={{ lineHeight: 1.6 }}>
                  Fale comigo pelo WhatsApp para saber mais sobre perfumaria natural e atendimentos.
                </Typography>
                <Button
                  href={buildWhatsAppLink("Olá! Gostaria de saber mais sobre perfumaria natural e atendimentos.")}
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
