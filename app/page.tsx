import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import ArticleCard, { type ArticleCardProps } from "./components/article-card";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeCarousel from "./components/home-carousel";
import { articles } from "./articles/articles-data";

const orderedArticles: ArticleCardProps[] = Object.entries(articles)
  .sort(([, first], [, second]) => first.position - second.position)
  .map(([slug, article]) => ({
    title: article.title,
    excerpt: article.excerpt,
    href: `/articles/${slug}`,
    image: article.image,
    imageAlt: article.imageAlt,
  }));

const sideArticles = orderedArticles.slice(0, 2);
const featuredArticle = orderedArticles[orderedArticles.length - 1];

export default function Home() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <main id="page-content">
        <Header />
        <Box sx={{ width: "100%", bgcolor: "background.paper" }} >
          <HomeCarousel />
          <Box component="section" sx={{ px: { xs: 2, sm: 4 }, py: { xs: 4, sm: 5 } }}>
            <Typography component="h2" variant="h2" sx={{ fontSize: { xs: "1.45rem", sm: "1.75rem" }, textTransform: "uppercase" }}>
              Artigos
            </Typography>
            <Divider sx={{ mt: 1.25, mb: 3.5 }} />
            <Grid container spacing={{ xs: 3.25, md: 4 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={3.5}>
                  {sideArticles.map((article) => <ArticleCard {...article} key={article.href} />)}
                </Stack>
              </Grid>
              {featuredArticle && (
                <Grid size={{ xs: 12, md: 7 }}>
                  <ArticleCard {...featuredArticle} orientation="vertical" />
                </Grid>
              )}
            </Grid>
            <Stack sx={{ alignItems: "flex-end", mt: 3.5 }}>
              <Button href="/articles" sx={{ color: "primary.main", fontSize: "0.85rem" }}>
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
