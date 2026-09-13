import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import ArticleCard, { type ArticleCardProps } from "./components/article-card";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeCarousel from "./components/home-carousel";

const articles: ArticleCardProps[] = [
  {
    title: "MULHERES E PLANTAS - AMIGAS ANCESTRAIS",
    excerpt: "Durante milhares de anos, antes da existência dos laboratórios modernos, as mulheres aprenderam a reconhecer o mundo através das plantas...",
    href: "/articles/mulheres_e_plantas",
    image: "/articles/mulheres_e_plantas/QUADROSEMTE 1.png",
    imageAlt: "Plantas e paisagem natural",
  },
  {
    title: "QUEM SÃO AS DEUSAS E O QUE ELAS TEM A VER COM OS AROMAS DAS PLANTAS",
    excerpt: "Cleópatra compreendia o poder dos aromas e usava ao seu favor. Nos perfumes, as plantas tornam-se linguagem — e cada aroma desperta em nós uma força, uma memória, uma deusa.",
    href: "/articles/quem_sao_as_deusas",
    image: "/articles/quem_sao_as_deusas/01.png",
    imageAlt: "Plantas e paisagem natural",
  },
  {
    title: "Perfumaria ancestral e o ritual dos aromas",
    excerpt: "Por meio dos aromas nos conectamos com memórias, emoções e fragmentos da nossa própria realidade que se comunicam conosco por meio do simbolismo e dos aromas das nossas deusas guias: as plantas. Conheça nesse artigo a História da Perfumaria e o que significa.",
    href: "/articles/perfumaria_ancestral",
    image: "/articles/perfumaria_ancestral/DEUSAISIS 1.png",
    imageAlt: "Deusa Ísis em arte egípcia",
    orientation: "vertical",
  },
];

export default function Home() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <main>
        <Header />
        <Box sx={{ width: "100%", bgcolor: "background.paper" }} style={{ paddingTop: "5px" }}>
          <HomeCarousel />
          <Box component="section" sx={{ px: { xs: 2, sm: 4 }, py: { xs: 4, sm: 5 } }}>
            <Typography component="h2" variant="h2" sx={{ fontSize: { xs: "1.45rem", sm: "1.75rem" }, textTransform: "uppercase" }}>
              Artigos
            </Typography>
            <Divider sx={{ mt: 1.25, mb: 3.5 }} />
            <Grid container spacing={{ xs: 3.25, md: 4 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={3.5}>
                  {articles.slice(0, 2).map((article) => <ArticleCard {...article} key={article.href} />)}
                </Stack>
              </Grid>
              {articles[articles.length - 1] && (
                <Grid size={{ xs: 12, md: 7 }}>
                  <ArticleCard {...articles[articles.length - 1]} />
                </Grid>
              )}
            </Grid>
            <Stack sx={{ alignItems: "flex-end", mt: 3.5 }}>
              <Button href="/articles" sx={{ color: "primary.main", fontSize: "0.62rem" }}>
                Mais artigos…
              </Button>
            </Stack>
          </Box>
        </Box>
      </main >
      <Footer />
    </Box >
  );
}
