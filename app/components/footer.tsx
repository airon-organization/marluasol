"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ position: "relative", overflow: "hidden" }}>
      <Image alt="" fill sizes="100vw" src="/home/header1.png" style={{ objectFit: "cover" }} />
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", minHeight: 96, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, flexWrap: "wrap", px: { xs: 2, sm: 3, md: 4 }, py: 2 }}>
        <Stack direction="row" spacing={1}>
          {[
            ["Loja", "/loja"],
            ["Contatos", "/contatos"],
          ].map(([label, href]) => (
            <Button component={Link} href={href} key={label} size="small" sx={{ bgcolor: "common.white", color: "primary.dark", fontSize: "0.58rem", px: 1.3 }}>
              {label}
            </Button>
          ))}
          <Button aria-label="Instagram de marianeluasol" href="https://www.instagram.com/marianeluasol/" target="_blank" rel="noopener noreferrer" sx={{ minWidth: 34, color: "common.white" }}><InstagramIcon fontSize="small" /></Button>
        </Stack>
        <Link aria-label="Página inicial MarLuaSol" href="/" style={{ textDecoration: "none", outline: "none" }}>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <Box sx={{ position: "relative", width: { xs: 170, sm: 220 }, aspectRatio: "331 / 80", flexShrink: 0 }}>
              <Image
                alt=""
                fill
                sizes="(max-width: 600px) 170px, 220px"
                src="/MARLUASOL SEM FUNDO SEM YIN YOGA 5.png"
                style={{ objectFit: "contain", transform: "translateY(7.5%)" }}
              />
            </Box>
            <Box sx={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
              <Image alt="" fill sizes="72px" src="/MARLUASOL LOGO.png" style={{ objectFit: "contain", transform: "translateY(-4%)" }} />
            </Box>
          </Stack>
        </Link>
      </Box>
    </Box>
  );
}
