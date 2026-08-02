import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import ArticleCard, { type ArticleCardProps } from "./components/article-card";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeCarousel from "./components/home-carousel";

const articles: ArticleCardProps[] = [
  {
    title: "O que é Yin Yoga",
    excerpt: "Inspirado na medicina chinesa e na cultura yogue, essa prática trabalha o tecido conjuntivo e nos ensina sobre quietude e relaxamento.",
    href: "/articles/o_que_e_yin_yoga",
    image: "/articles/o_que_e_yin_yoga/IMG-20251001-WA0015 1.png",
    imageAlt: "Prática de Yin Yoga",
  },
  {
    title: "Mulheres e plantas — as melhores amigas históricas",
    excerpt: "A ciência diz que as mulheres têm o dobro de receptores olfativos que os homens, o que isso quer dizer?",
    href: "/articles/mulheres_e_plantas",
    image: "/articles/mulheres_e_plantas/IMG_20160715_124006_HDR 1.png",
    imageAlt: "Plantas e paisagem natural",
  },
  {
    title: "Perfumaria ancestral e o ritual dos aromas",
    excerpt: "A perfumaria não é trivial, é ancestralidade. Por meio dos aromas nos conectamos com memórias, emoções e fragmentos da nossa própria realidade.",
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
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Box component="section" sx={{ py: { xs: 2.5, sm: 3 } }}>
            <Typography align="left" component="h1" variant="h1" sx={{ fontSize: { xs: "1.35rem", sm: "1.8rem" }, ml: { xs: "1rem", sm: "2rem" }, textTransform: "uppercase", color: "#880D86" }}>
              A SUA LOJA DE PERFUMARIA NATURAL E BEM ESTAR
            </Typography>
          </Box>
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
              <Grid size={{ xs: 12, md: 7 }}>
                <ArticleCard {...articles[2]} />
              </Grid>
            </Grid>
            <Stack sx={{ alignItems: "flex-end", mt: 3.5 }}>
              <Button href="/articles" sx={{ color: "primary.main", fontSize: "0.62rem" }}>
                Mais artigos…
              </Button>
            </Stack>
          </Box>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}
