import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import InnerPage from "../../components/inner-page";

const articles = {
  mulheres_e_plantas: {
    eyebrow: "Botânica e ancestralidade",
    title: "Mulheres e plantas — as melhores amigas históricas",
    description: "Uma aproximação entre sensibilidade olfativa, cuidado e os saberes transmitidos entre gerações.",
    image: "/articles/mulheres_e_plantas/IMG_20160715_124006_HDR 1.png",
    imageAlt: "Plantas em uma paisagem natural",
    opening: "A relação entre mulheres e plantas atravessa práticas de cuidado, alimentação, cura, perfumação e memória.",
  },
  perfumaria_ancestral: {
    eyebrow: "Perfumaria natural",
    title: "Perfumaria ancestral e o ritual dos aromas",
    description: "Os aromas como caminhos para acessar memórias, emoções e fragmentos da nossa própria história.",
    image: "/articles/perfumaria_ancestral/DEUSAISIS 1.png",
    imageAlt: "Representação da deusa Ísis em arte egípcia",
    opening: "A perfumaria não é trivial: ela acompanha ritos, encontros e formas de expressão desde tempos ancestrais.",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) notFound();

  return (
    <InnerPage eyebrow={article.eyebrow} title={article.title} description={article.description}>
      <Box sx={{ position: "relative", width: "100%", aspectRatio: { xs: "4 / 3", md: "16 / 7" }, borderRadius: 2, overflow: "hidden" }}>
        <Image alt={article.imageAlt} fill sizes="(max-width: 900px) 100vw, 1100px" src={article.image} style={{ objectFit: "cover" }} />
      </Box>
      <Stack spacing={2.5} sx={{ mt: 4, maxWidth: 760 }}>
        <Typography component="h2" variant="h2" sx={{ color: "primary.main", fontSize: "1.55rem" }}>Uma história em construção</Typography>
        <Typography sx={{ lineHeight: 1.8 }}>{article.opening}</Typography>
        <Typography sx={{ lineHeight: 1.8 }}>Esta rota está estruturada como esboço editorial e pronta para receber o artigo completo, referências e chamadas relacionadas.</Typography>
      </Stack>
    </InnerPage>
  );
}
