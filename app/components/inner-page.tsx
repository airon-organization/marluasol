"use client";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type InnerPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function InnerPage({ eyebrow, title, description, children }: InnerPageProps) {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header />
      <Container disableGutters maxWidth="lg" sx={{ bgcolor: "background.paper", minHeight: "60vh" }}>
        <Box
          component="header"
          sx={{
            bgcolor: "primary.dark",
            color: "common.white",
            px: { xs: 2.5, sm: 6 },
            py: { xs: 5, sm: 7 },
          }}
        >
          {eyebrow && (
            <Typography sx={{ color: "secondary.light", fontSize: "0.72rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {eyebrow}
            </Typography>
          )}
          <Typography component="h1" variant="h1" sx={{ mt: 1, maxWidth: 760, fontSize: { xs: "2rem", sm: "3rem" } }}>
            {title}
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 720, color: "rgba(255,255,255,0.82)", fontSize: { xs: "1rem", sm: "1.12rem" }, lineHeight: 1.6 }}>
            {description}
          </Typography>
        </Box>

        <Box component="main" sx={{ px: { xs: 2.5, sm: 6 }, py: { xs: 4, sm: 6 } }}>
          {children}
          <Stack direction="row" sx={{ mt: 6 }}>
            <Button component={Link} href="/" startIcon={<ArrowBackRoundedIcon />} sx={{ color: "primary.main" }}>
              Voltar ao início
            </Button>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
