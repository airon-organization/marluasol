import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import InnerPage from "../../components/inner-page";
import { articles } from "../articles-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) return { title: "Artigo não encontrado | MarLuaSol" };

  return {
    title: `${article.title} | MarLuaSol`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  return (
    <InnerPage eyebrow={article.eyebrow} title={article.title} description={article.description}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: article.portraitImage ? 620 : "none",
          aspectRatio: article.imageAspectRatio,
          mx: "auto",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          alt={article.imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 1100px"
          src={article.image}
          style={{ objectFit: "cover", objectPosition: article.imagePosition ?? "center" }}
        />
      </Box>

      <Stack spacing={{ xs: 4, sm: 5 }} sx={{ mt: { xs: 4, sm: 6 }, maxWidth: 820, mx: "auto" }}>
        {article.sections.map((section, sectionIndex) => (
          <Box component="section" key={section.title ?? `secao-${sectionIndex}`}>
            {section.title && (
              <Typography
                component="h2"
                sx={{
                  mb: 2,
                  color: "primary.main",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: { xs: "1.4rem", sm: "1.75rem" },
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {section.title}
              </Typography>
            )}

            {section.paragraphs && (
              <Stack spacing={2}>
                {section.paragraphs.map((paragraph) => (
                  <Typography key={paragraph} sx={{ color: "text.primary", lineHeight: 1.85 }}>
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            )}

            {section.items && (
              <List
                sx={{
                  mt: section.paragraphs ? 1.5 : 0,
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                  columnGap: 3,
                  py: 0,
                }}
              >
                {section.items.map((item) => (
                  <ListItem disableGutters key={item} sx={{ alignItems: "flex-start", py: 0.45 }}>
                    <Box aria-hidden="true" component="span" sx={{ color: "secondary.main", mr: 1, lineHeight: 1.6 }}>•</Box>
                    <ListItemText primary={item} slotProps={{ primary: { sx: { lineHeight: 1.6 } } }} />
                  </ListItem>
                ))}
              </List>
            )}

            {section.comparison && (
              <TableContainer sx={{ mt: 3, border: "1px solid", borderColor: "divider", borderRadius: 1.5 }}>
                <Table aria-label="Comparação entre perfume natural e perfume sintético" sx={{ minWidth: 600 }}>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "primary.dark" }}>
                      <TableCell sx={{ width: "50%", color: "common.white", fontWeight: 800 }}>Perfume natural</TableCell>
                      <TableCell sx={{ width: "50%", color: "common.white", fontWeight: 800 }}>Perfume sintético</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {section.comparison.map((row) => (
                      <TableRow key={row.natural}>
                        <TableCell sx={{ lineHeight: 1.55, verticalAlign: "top" }}>{row.natural}</TableCell>
                        <TableCell sx={{ lineHeight: 1.55, verticalAlign: "top" }}>{row.synthetic}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        ))}
      </Stack>
    </InnerPage>
  );
}
