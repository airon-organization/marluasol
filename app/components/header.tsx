"use client";

import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Loja online", href: "/loja" },
  { label: "Quem sou eu", href: "/quem-sou-eu" },
];

export default function Header() {
  return (
    <Box component="header" sx={{ position: "relative", overflow: "hidden" }}>
      <Image
        alt=""
        fill
        priority
        sizes="100vw"
        src="/home/header1.png"
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: { xs: 88, sm: 112 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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

        <Stack aria-label="Navegação principal" component="nav" direction="row" spacing={{ xs: 1.25, sm: 2.5 }}>
          {navigationItems.map((item) => (
            <Button
              component={Link}
              href={item.href}
              key={item.href}
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
              {item.label}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
