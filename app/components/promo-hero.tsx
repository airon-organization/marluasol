"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function PromoHero() {
  return (
    <Box component="section" sx={{ position: "relative" }}>
      <Box sx={{ position: "relative", aspectRatio: { xs: "1 / 1", sm: "3.29 / 1" }, overflow: "hidden" }}>
        <Image
          alt="Frascos e símbolos da perfumaria ancestral entre plantas aromáticas"
          fill
          priority
          sizes="(max-width: 600px) 100vw, 1200px"
          src="/home/header2.png"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Button
        component={Link}
        href="/articles/perfumaria_ancestral"
        sx={{
          position: "absolute",
          left: "50%",
          bottom: { xs: 12, sm: 18 },
          transform: "translateX(-50%)",
          width: { xs: "86%", sm: 350 },
          bgcolor: "secondary.main",
          color: "#40500e",
          borderRadius: 0,
          py: 0.85,
          fontSize: { xs: "0.57rem", sm: "0.63rem" },
          "&:hover": { bgcolor: "secondary.light" },
        }}
      >
        Descubra o que os perfumes naturais podem fazer por você
      </Button>
    </Box>
  );
}
