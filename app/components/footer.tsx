"use client";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ position: "relative", overflow: "hidden", mt: { xs: 6, md: 8 } }}>
      <Image alt="" fill sizes="100vw" src="/home/header1.png" style={{ objectFit: "cover" }} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, minHeight: 96, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, flexWrap: "wrap", py: 2 }}>
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
        <Box sx={{ position: "relative", width: 150, height: 72 }}><Image alt="MarLuaSol" fill sizes="150px" src="/logo.png" style={{ objectFit: "contain" }} /></Box>
      </Container>
    </Box>
  );
}
