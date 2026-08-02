import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

const paragraphs = [
  "Desde muito jovem me identifico profundamente com a filosofia do yoga e com a natureza. As plantas são minhas guias no meu processo de autoconhecimento e entendimento da realidade e conhecê-las como seres vivos complexos e ativos tem sido uma jornada de humildade e reverência. Juntamente com o Yoga como estilo de vida, minha mente tem sido aos poucos transformada e assim nasceu o desejo de servir aos seres vivos com meu trabalho e conhecimento.",
  "Sou praticante de yoga há 9 anos e realizei minha formação em Yin Yoga com a professora Marina Boni, referência no Brasil, de quem também fui aluna. Atualmente, sigo em constante aprimoramento, estudando com professoras experientes e participando de cursos e conferências com professores nacionais e internacionais, com foco nos métodos Yin Yoga e Ashtanga Yoga. Além disso, me dedico a estudos de filosofia, meditação, mantras, deusas, fitoterapia e perfumaria botânica.",
  "A perfumaria natural e as tinturas de plantas fazem sentido na minha vida, e por muito tempo foi uma jornada pessoal e quase secreta. Porque uma engenheira de controle e automação faria perfume? Foi um conflito. Mas não preciso escolher, sou várias. Fui aluna da Doutora Palmira Margarida na escola de Perfumaria Ancestral, e com o tempo, nasceu o desejo de criar e compartilhar, não apenas aulas de yoga mas também a alquimia das plantas. Por isso faço perfumes naturais e exclusivos com foco em promover o bem-estar por meio dos aromas naturais com perfumes artesanais criados por mim com amor e devoção. É muito estudo, sempre!",
  "Venha me conhecer, seja por interesse em Yin Yoga ou por perfumaria natural ou em ambos! A natureza não é algo externo, faz parte de nós. A comunhão do nosso mundo interior com as plantas é urgente e é o que temos de mais próximo da verdadeira MAGIA.",
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
            <Typography sx={{ mt: 1.5, mb: 3, color: "primary.main", fontSize: { xs: "0.78rem", sm: "0.86rem" }, fontWeight: 900, textTransform: "uppercase" }}>
              Professora de Yin Yoga e perfumista natural
            </Typography>
            <Stack spacing={2.5}>
              {paragraphs.map((paragraph) => (
                <Typography key={paragraph} sx={{ color: "primary.dark", fontSize: { xs: "0.95rem", md: "1rem" }, lineHeight: 1.55 }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", width: "100%", maxWidth: 520, mx: "auto", aspectRatio: "1113 / 1414", overflow: "hidden", borderRadius: 1 }}>
              <Image alt="Mariane Vidal em momento de meditação" fill priority sizes="(max-width: 900px) 100vw, 42vw" src="/quem-sou-eu/quem-sou-eu.png" style={{ objectFit: "cover" }} />
            </Box>

            <Box component="section" sx={{ maxWidth: 620, mx: "auto", mt: { xs: 5, md: 6 } }}>
              <Typography align="center" component="h2" sx={{ mb: 3, color: "#111", fontSize: "1.5rem", fontWeight: 800 }}>
                Fale comigo
              </Typography>
              <Stack
                component="form"
                spacing={2}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" },
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#d7b7ef",
                    "& fieldset": { borderColor: "#c79be8" },
                    "&:hover fieldset": { borderColor: "primary.light" },
                    "&.Mui-focused fieldset": { borderColor: "primary.main", borderWidth: 2 },
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Nome" /></Grid>
                  <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth label="Sobrenome" /></Grid>
                </Grid>
                <TextField fullWidth label="Endereço de e-mail" type="email" />
                <TextField fullWidth label="Sua mensagem" minRows={5} multiline />
                <Button type="button" variant="contained" sx={{ bgcolor: "#111", color: "common.white", py: 1.35, "&:hover": { bgcolor: "primary.dark" } }}>
                  Enviar
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
