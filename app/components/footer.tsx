"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box className="cosmic-flight cosmic-flight--footer" component="footer" sx={{ position: "relative", overflow: "hidden" }}>
      <Image
        alt=""
        className="cosmic-flight__starfield"
        fill
        sizes="100vw"
        src="/home/cosmic-flight-brand-v2.webp"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <Box aria-hidden="true" className="cosmic-flight__shooting-star" />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: { xs: 88, sm: 112 },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1.5, md: 0 },
        }}
      >
        <Stack aria-label="Navegação do rodapé" component="nav" direction="row" spacing={{ xs: 1.25, sm: 2.5 }}>
          <Button
            component={Link}
            href="/loja"
            size="small"
            sx={{
              minWidth: { xs: 132, sm: 158 },
              bgcolor: "#E0AA18",
              color: "primary.dark",
              borderRadius: 1.25,
              px: { xs: 1.5, sm: 2 },
              py: 1,
              fontSize: { xs: "0.58rem", sm: "0.64rem" },
              fontWeight: 800,
              letterSpacing: "0.03em",
              boxShadow: "0 5px 16px rgba(0,0,0,0.22)",
              "&:hover": { bgcolor: "secondary.light" },
            }}
          >
            Loja online
          </Button>
          <Button
            aria-label="Instagram de MarLuaSol"
            endIcon={<InstagramIcon sx={{ fontSize: "1rem !important" }} />}
            href="https://www.instagram.com/marianeluasol/"
            rel="noopener noreferrer"
            target="_blank"
            size="small"
            sx={{
              minWidth: { xs: 132, sm: 176 },
              justifyContent: "space-between",
              bgcolor: "#E0AA18",
              color: "primary.dark",
              borderRadius: 1.25,
              px: { xs: 1.5, sm: 2 },
              py: 1,
              fontSize: { xs: "0.55rem", sm: "0.6rem" },
              fontWeight: 500,
              boxShadow: "0 5px 16px rgba(0,0,0,0.22)",
              "&:hover": { bgcolor: "secondary.light" },
            }}
          >
            Redes sociais
          </Button>
        </Stack>

        <Link aria-label="Página inicial MarLuaSol" href="/" style={{ textDecoration: "none", outline: "none" }}>
          <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} sx={{ alignItems: "center" }}>
            <Box sx={{ position: "relative", width: { xs: 150, sm: 240 }, aspectRatio: "403 / 68", overflow: "hidden", flexShrink: 0 }}>
              <Image
                alt=""
                width={502}
                height={275}
                sizes="(max-width: 600px) 150px, 240px"
                src="/MARLUASOL MARCA.png"
                style={{ position: "absolute", width: "124.57%", height: "404.42%", maxWidth: "none", left: "-10.92%", top: "-73.53%" }}
              />
            </Box>
            <Box sx={{ position: "relative", width: { xs: 70, sm: 92 }, height: { xs: 70, sm: 92 }, overflow: "hidden", flexShrink: 0 }}>
              <Image alt="" fill sizes="(max-width: 600px) 70px, 92px" src="/logo.png" style={{ objectFit: "cover" }} />
            </Box>
          </Stack>
        </Link>
      </Box>
    </Box>
  );
}
