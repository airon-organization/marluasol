import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { getProduct, products } from "../products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: "Perfume não encontrado | MarLuaSol" };

  return {
    title: `${product.name} | Perfumaria Natural MarLuaSol`,
    description: `${product.tagline}. Perfume natural da família olfativa ${product.family.toLowerCase()}.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const purchaseMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o perfume ${product.name} (${product.volume}).`,
  );

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fffdf8" }}>
      <Header />

      <Box component="main">
        <Box
          sx={{
            width: "100%",
            maxWidth: 1480,
            mx: "auto",
            px: { xs: 2.5, sm: 6, lg: 10 },
            py: { xs: 3.5, sm: 6 },
          }}
        >
          <Button
            href="/loja#produtos"
            startIcon={<ArrowBackRoundedIcon />}
            sx={{ mb: { xs: 2.5, sm: 4 }, color: "primary.main", fontSize: "0.65rem" }}
          >
            Voltar para os perfumes
          </Button>

          <Grid container spacing={{ xs: 4, md: 7, lg: 9 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                aria-label={`Galeria do perfume ${product.name}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: { xs: 1.25, sm: 2 },
                }}
              >
                {product.gallery.map((image, index) => (
                  <Box
                    key={image.src}
                    sx={{
                      position: "relative",
                      gridColumn: index === 0 ? "1 / -1" : "auto",
                      aspectRatio: index === 0 ? { xs: "4 / 5", sm: "5 / 4" } : "1 / 1",
                      overflow: "hidden",
                      borderRadius: { xs: 1.5, sm: 2 },
                      bgcolor: "#eee8df",
                    }}
                  >
                    <Image
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes={
                        index === 0
                          ? "(max-width: 900px) 100vw, 58vw"
                          : "(max-width: 900px) 50vw, 29vw"
                      }
                      src={image.src}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: { md: "sticky" }, top: { md: 24 } }}>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Perfumaria botânica
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    mt: 1,
                    color: "primary.dark",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: { xs: "2.25rem", sm: "3.25rem", md: "2.7rem", lg: "3.4rem" },
                    fontWeight: 400,
                    lineHeight: 1.03,
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  sx={{
                    mt: 1.25,
                    color: "primary.main",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: { xs: "1.05rem", sm: "1.25rem" },
                    lineHeight: 1.4,
                  }}
                >
                  {product.tagline}
                </Typography>

                <Stack direction="row" sx={{ mt: 2.5, flexWrap: "wrap", gap: 1 }}>
                  <Chip label={product.family} size="small" sx={chipStyles} />
                  <Chip label={product.volume} size="small" sx={chipStyles} />
                  <Chip label="Natural" size="small" sx={chipStyles} />
                </Stack>

                <Typography sx={{ mt: 3, color: "text.secondary", lineHeight: 1.75 }}>
                  {product.introduction}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography sx={{ fontSize: "0.68rem", fontWeight: 900, textTransform: "uppercase" }}>
                  Composição
                </Typography>
                <Typography sx={{ mt: 1, color: "text.secondary", fontSize: "0.72rem", lineHeight: 1.7 }}>
                  {product.composition}
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    color: "primary.dark",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.5rem",
                  }}
                >
                  {product.price}
                </Typography>

                <Button
                  fullWidth
                  href={`https://wa.me/554891645940?text=${purchaseMessage}`}
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  target="_blank"
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1.4,
                    bgcolor: "primary.main",
                    "&:hover": { bgcolor: "primary.dark" },
                  }}
                >
                  Quero este perfume
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ bgcolor: "#f2eaf2" }}>
          <Box sx={{ width: "100%", maxWidth: 1480, mx: "auto", px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 5, sm: 7 } }}>
            <SectionHeading eyebrow="A arquitetura do aroma" title={product.highlightsTitle} />

            <Grid container spacing={2.25} sx={{ mt: 2 }}>
              {product.highlights.map((highlight, index) => (
                <Grid key={highlight.title} size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      width: "100%",
                      p: { xs: 2.5, sm: 3 },
                      borderTop: "3px solid",
                      borderColor: "secondary.main",
                      borderRadius: 1.5,
                      bgcolor: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <Typography sx={{ color: "primary.main", fontSize: "0.62rem", fontWeight: 900, letterSpacing: "0.12em" }}>
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography component="h3" sx={{ mt: 1.25, color: "primary.dark", fontSize: "1rem", fontWeight: 900 }}>
                      {highlight.title}
                    </Typography>
                    {highlight.ingredients && (
                      <Typography sx={{ mt: 0.5, color: "primary.main", fontSize: "0.7rem", fontWeight: 800 }}>
                        {highlight.ingredients}
                      </Typography>
                    )}
                    <Typography sx={{ mt: 1.5, color: "text.secondary", fontSize: "0.7rem", lineHeight: 1.7 }}>
                      {highlight.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={{ width: "100%", maxWidth: 1480, mx: "auto", px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 5, sm: 8 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading eyebrow="Mitologia feminina" title={product.mythologyTitle} />
              <Stack spacing={2} sx={{ mt: 2.5 }}>
                {product.mythology.map((paragraph) => (
                  <Typography key={paragraph} sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ p: { xs: 2.5, sm: 3.5 }, borderRadius: 2, bgcolor: "primary.dark", color: "common.white" }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "secondary.light" }}>
                  <LocalFloristRoundedIcon />
                  <Typography component="h2" sx={{ fontSize: "0.76rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Detalhes do produto
                  </Typography>
                </Stack>
                <Stack divider={<Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.15)" }} />} sx={{ mt: 2.5 }}>
                  <ProductDetail label="Volume" value={product.volume} />
                  <ProductDetail label="Líquido" value={product.liquid} />
                  <ProductDetail label="Frasco" value={product.material} />
                  <ProductDetail label="Embalagem" value={product.packaging} />
                </Stack>
                <Box sx={{ mt: 3, p: 2, borderRadius: 1, bgcolor: "rgba(255,255,255,0.08)" }}>
                  <Typography sx={{ fontSize: "0.66rem", lineHeight: 1.65 }}>
                    Uso externo. Não ingerir. Manter fora do alcance de crianças.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <Typography sx={{ color: "primary.main", fontSize: "0.64rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {eyebrow}
      </Typography>
      <Typography component="h2" sx={{ mt: 0.75, color: "primary.dark", fontFamily: "Georgia, 'Times New Roman', serif", fontSize: { xs: "1.65rem", sm: "2.15rem" }, fontWeight: 400 }}>
        {title}
      </Typography>
    </>
  );
}

function ProductDetail({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ py: 1.4 }}>
      <Typography sx={{ color: "rgba(255,255,255,0.62)", fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </Typography>
      <Typography sx={{ mt: 0.4, fontSize: "0.72rem", lineHeight: 1.5 }}>{value}</Typography>
    </Box>
  );
}

const chipStyles = {
  border: "1px solid rgba(100,16,95,0.18)",
  bgcolor: "#f5edf4",
  color: "primary.main",
  fontSize: "0.6rem",
  fontWeight: 800,
  textTransform: "uppercase",
} as const;
