import { Grid, Typography } from "@mui/material";
import ArticleCard, { type ArticleCardProps } from "../components/article-card";
import InnerPage from "../components/inner-page";
import { articles } from "./articles-data";

const articleCards: ArticleCardProps[] = [
  ...Object.entries(articles).map(([slug, article]) => ({
    title: article.title,
    excerpt: article.excerpt,
    href: `/articles/${slug}`,
    image: article.image,
    imageAlt: article.imageAlt,
  })),
  {
    title: "O que é Yin Yoga",
    excerpt: "Uma introdução à prática, seus fundamentos e o convite à quietude. Saiba mais aqui.",
    href: "/articles/o_que_e_yin_yoga",
    image: "/articles/o_que_e_yin_yoga/IMG-20251001-WA0015 1.png",
    imageAlt: "Prática de Yin Yoga",
  },
];

export default function ArticlesPage() {
  return (
    <InnerPage eyebrow="Leituras" title="Artigos" description="Reflexões sobre perfumaria natural, plantas, cuidado, memória e práticas de presença.">
      <Typography sx={{ mb: 4, maxWidth: 680, lineHeight: 1.7 }}>Explore histórias sobre plantas, aromas, mitologia feminina e práticas de presença no universo MarLuaSol.</Typography>
      <Grid container spacing={4}>
        {articleCards.map((article) => (
          <Grid key={article.href} size={{ xs: 12, sm: 6 }}>
            <ArticleCard {...article} />
          </Grid>
        ))}
      </Grid>
    </InnerPage>
  );
}
