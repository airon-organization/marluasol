"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Yin Yoga", href: "/articles/o_que_e_yin_yoga" },
  { label: "Loja online", href: "#loja" },
  { label: "Quem sou eu", href: "#sobre" },
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
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: { xs: 88, sm: 112 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Link aria-label="Página inicial MarLuaSol" href="/">
          <Box sx={{ position: "relative", width: { xs: 116, sm: 164 }, height: { xs: 70, sm: 92 } }}>
            <Image alt="MarLuaSol" fill priority sizes="164px" src="/logo.png" style={{ objectFit: "contain" }} />
          </Box>
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
      </Container>
    </Box>
  );
}
