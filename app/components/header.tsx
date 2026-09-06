"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Box,
  Button,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Yin Yoga", href: "/yin-yoga" },
  { label: "Loja online", href: "/loja" },
  { label: "Quem sou eu", href: "/quem-sou-eu" },
];

export default function Header() {
  const isCompact = useMediaQuery("(max-width: 640px)");

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
          width: "100%",
          minHeight: { xs: 88, sm: 112 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Link aria-label="Página inicial MarLuaSol" href="/" style={{ textDecoration: "none", outline: "none" }}>
          <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} sx={{ alignItems: "center" }}>
            <Box sx={{ position: "relative", width: { xs: 70, sm: 92 }, height: { xs: 70, sm: 92 }, overflow: "hidden", flexShrink: 0 }}>
              <Image alt="" width={215} height={156} priority sizes="(max-width: 600px) 70px, 92px" src="/MALUASOL LOGO.png" style={{ position: "absolute", width: "154.68%", height: "112.23%", maxWidth: "none", left: "-3.6%", top: "-8.63%" }} />
            </Box>
            <Box sx={{ position: "relative", width: { xs: 150, sm: 240 }, aspectRatio: "403 / 68", overflow: "hidden", flexShrink: 0 }}>
              <Image
                alt=""
                width={502}
                height={275}
                priority
                sizes="(max-width: 600px) 150px, 240px"
                src="/MARLUASOL MARCA.png"
                style={{ position: "absolute", width: "124.57%", height: "404.42%", maxWidth: "none", left: "-10.92%", top: "-73.53%" }}
              />
            </Box>
          </Stack>
        </Link>

        {isCompact ? (
          <IconButton aria-label="Abrir menu" sx={{ color: "common.white", bgcolor: "rgba(255,255,255,0.14)" }}>
            <MenuRoundedIcon />
          </IconButton>
        ) : (
          <Stack direction="row" spacing={1.25}>
            {navigationItems.map((item) => (
              <Button
                component={Link}
                href={item.href}
                key={item.label}
                size="small"
                sx={{
                  bgcolor: "common.white",
                  color: "primary.dark",
                  borderRadius: 1.25,
                  px: 2,
                  py: 1,
                  fontSize: "0.64rem",
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
        )}
      </Box>
    </Box>
  );
}
