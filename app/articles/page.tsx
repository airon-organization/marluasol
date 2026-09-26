import { Grid, Typography } from "@mui/material";
import ArticleCard, { type ArticleCardProps } from "../components/article-card";
import InnerPage from "../components/inner-page";

const articles: ArticleCardProps[] = [
  {
    title: "O que é Yin Yoga",
    excerpt: "Uma introdução à prática, seus fundamentos e o convite à quietude. Saiba mais aqui.",
    href: "/articles/o_que_e_yin_yoga",
    image: "/articles/o_que_e_yin_yoga/IMG-20251001-WA0015 1.png",
    imageAlt: "Prática de Yin Yoga",
  },
  {
    title: "MULHERES E PLANTAS - DESCUBRA O QUE AS PLANTAS PODEM FAZER POR VOCÊ",
    excerpt: "Durante milhares de anos, antes da existência dos laboratórios modernos, as mulheres aprenderam a reconhecer o mundo através das plantas.",
    href: "/articles/mulheres_e_plantas",
    image: "/articles/mulheres_e_plantas/QUADROSEMTE 1.png",
    imageAlt: "Mulher em conexão com plantas e a paisagem natural",
  },
  {
    title: "QUEM SÃO AS DEUSAS E O QUE ELAS TÊM A VER COM OS AROMAS DAS PLANTAS?",
    excerpt: "Perfumes, plantas e figuras mitológicas como caminhos para despertar memória, presença e diferentes forças femininas.",
    href: "/articles/quem_sao_as_deusas",
    image: "/articles/quem_sao_as_deusas/01.png",
    imageAlt: "Representação simbólica de uma deusa entre elementos naturais",
  },
  {
    title: "Perfumaria ancestral e o ritual dos aromas",
    excerpt: "Memória, emoção e presença por meio da perfumaria natural.",
    href: "/articles/perfumaria_ancestral",
    image: "/articles/perfumaria_ancestral/DEUSAISIS 1.png",
    imageAlt: "Representação da deusa Ísis",
  },
];

export default function ArticlesPage() {
  return (
    <InnerPage eyebrow="Leituras" title="Artigos" description="Reflexões sobre perfumaria natural, plantas, cuidado, memória e práticas de presença.">
      <Typography sx={{ mb: 4, maxWidth: 680, lineHeight: 1.7 }}>Explore histórias sobre plantas, aromas, mitologia feminina e práticas de presença no universo MarLuaSol.</Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid key={article.href} size={{ xs: 12, sm: 6 }}>
            <ArticleCard {...article} />
          </Grid>
        ))}
      </Grid>
    </InnerPage>
  );
}
