"use client";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ position: "relative", overflow: "hidden", mt: { xs: 6, md: 8 } }}>
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
          <Button aria-label="Facebook" href="#facebook" sx={{ minWidth: 34, color: "common.white" }}><FacebookRoundedIcon fontSize="small" /></Button>
          <Button aria-label="Instagram" href="#instagram" sx={{ minWidth: 34, color: "common.white" }}><InstagramIcon fontSize="small" /></Button>
        </Stack>
        <Link aria-label="Página inicial MarLuaSol" href="/" style={{ textDecoration: "none", outline: "none" }}>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
            <Box sx={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
              <Image alt="" fill sizes="72px" src="/logo.png" style={{ objectFit: "contain" }} />
            </Box>
            <Box sx={{ position: "relative", width: { xs: 126, sm: 156 }, aspectRatio: "502 / 275", flexShrink: 0 }}>
              <Image
                alt=""
                fill
                sizes="(max-width: 600px) 126px, 156px"
                src="/marluasol-sem-borda.png"
                style={{ objectFit: "contain", transform: "translateY(21%) scale(1.1)" }}
              />
            </Box>
          </Stack>
        </Link>
      </Box>
    </Box>
  );
}
