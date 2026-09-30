"use client";

import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Loja online", href: "/loja" },
  { label: "Artigos", href: "/articles" },
  { label: "Contato", href: "/contatos" },
  { label: "Quem sou eu", href: "/quem-sou-eu" },
];

export default function Header() {
  return (
    <Box className="cosmic-flight" component="header" sx={{ position: "relative", overflow: "hidden" }}>
      <Image
        alt=""
        className="cosmic-flight__starfield"
        fill
        priority
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
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1.5, md: 0 },
        }}
      >
        <Link aria-label="Página inicial MarLuaSol" href="/" style={{ textDecoration: "none", outline: "none" }}>
          <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} sx={{ alignItems: "center" }}>
            <Box sx={{ position: "relative", width: { xs: 70, sm: 92 }, height: { xs: 70, sm: 92 }, overflow: "hidden", flexShrink: 0 }}>
              <Image alt="" fill priority sizes="(max-width: 600px) 70px, 92px" src="/logo.png" style={{ objectFit: "cover" }} />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: 180, sm: 300 },
                aspectRatio: "461 / 143",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                alt=""
                width={493}
                height={246}
                priority
                sizes="(max-width: 600px) 180px, 300px"
                src="/MARLUASOL 1.png"
                style={{
                  position: "absolute",
                  width: "106.94%",
                  height: "172.03%",
                  maxWidth: "none",
                  left: "-3.04%",
                  top: "-16.08%",
                }}
              />
            </Box>
          </Stack>
        </Link>

        <Box
          aria-label="Navegação principal"
          component="nav"
          sx={{
            width: { xs: "100%", sm: "auto" },
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(4, auto)" },
            justifyContent: "center",
            gap: { xs: 1, sm: 2.5 },
          }}
        >
          {navigationItems.map((item) => (
            <Button
              component={Link}
              href={item.href}
              key={item.href}
              size="small"
              sx={{
                minWidth: { xs: 0, sm: 132, lg: 158 },
                width: { xs: "100%", sm: "auto" },
                bgcolor: "#E0AA18",
                color: "primary.dark",
                borderRadius: 1.25,
                px: { xs: 1.5, sm: 2 },
                py: 1,
                fontSize: { xs: "0.78rem", sm: "0.85rem" },
                fontWeight: 800,
                letterSpacing: "0.03em",
                boxShadow: "0 5px 16px rgba(0,0,0,0.22)",
                "&:hover": { bgcolor: "secondary.light" },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
