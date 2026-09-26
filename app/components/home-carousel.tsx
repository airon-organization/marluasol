"use client";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FocusEvent, useEffect, useState } from "react";

const slides = [
  {
    src: "/home/carrosel/carrosel01.png",
    alt: "A perfumação natural que cuida de você",
    href: "/loja",
    eyebrow: "MARLUASOL",
    title: "Perfumaria Natural",
    description: "A natureza perfumando a sua pele",
    tone: "brand",
  },
  {
    src: "/home/carrosel/carrosel02.png",
    alt: "Frascos de perfumes naturais entre plantas aromáticas",
    href: "/loja",
    eyebrow: "Descubra seu perfume natural",
    description: "Faça o teste olfativo e descubra os aromas que mais combinam com você",
    cta: "Fazer o teste olfativo",
    tone: "quiz",
  },
  {
    src: "/home/carrosel/carrosel03.png",
    alt: "Perfumes naturais MarLuaSol — aromas que despertam sua essência",
    href: "/loja",
    eyebrow: "Pré-lançamento MarLuaSol",
    title: "100% Natural",
    description: "Perfumes feitos de plantas, com óleos essenciais e extratos botânicos artesanais.",
    cta: "Conheça os perfumes",
    tone: "launch",
  },
] as const;

export default function HomeCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const handleFocusWithin = () => {
    setIsPaused(true);
  };

  const handleBlurWithin = (event: FocusEvent<HTMLElement>) => {
    const nextFocused = event.relatedTarget as Node | null;
    if (!nextFocused || !event.currentTarget.contains(nextFocused)) {
      setIsPaused(false);
    }
  };

  return (
    <Box
      aria-label="Destaques da MarLuaSol"
      aria-roledescription="carrossel"
      component="section"
      onBlurCapture={handleBlurWithin}
      onFocusCapture={handleFocusWithin}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        position: "relative",
        aspectRatio: { xs: "1 / 1", sm: "1440 / 563" },
        overflow: "hidden",
        bgcolor: "#171107",
      }}
    >
      {slides.map((slide, index) => (
        <Box
          aria-hidden={index !== activeSlide}
          aria-label={`${index + 1} de ${slides.length}`}
          aria-roledescription="slide"
          key={slide.src}
          role="group"
          sx={{
            position: "absolute",
            inset: 0,
            opacity: index === activeSlide ? 1 : 0,
            pointerEvents: index === activeSlide ? "auto" : "none",
            transition: "opacity 600ms ease",
            "@media (prefers-reduced-motion: reduce)": { transition: "none" },
          }}
        >
          <Link
            aria-label={`${"cta" in slide ? slide.cta : "Conheça a MarLuaSol"}: ${slide.alt}`}
            href={slide.href}
            tabIndex={index === activeSlide ? 0 : -1}
            style={{ position: "absolute", inset: 0, display: "block", color: "inherit", textDecoration: "none" }}
          >
            <Image
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              src={slide.src}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />

            <Box aria-hidden="true" sx={contentBackdropStyles(slide.tone)} />

            <Stack sx={slideContentStyles(slide.tone)}>
              <Typography
                component={index === 0 ? "h1" : "p"}
                sx={eyebrowStyles(slide.tone)}
              >
                {slide.eyebrow}
              </Typography>

              {"title" in slide && slide.title && (
                <Typography component="p" sx={titleStyles(slide.tone)}>
                  {slide.title}
                </Typography>
              )}

              <Typography component="p" sx={descriptionStyles(slide.tone)}>
                {slide.description}
              </Typography>

              {"cta" in slide && slide.cta && (
                <Box component="span" sx={ctaStyles}>
                  {slide.cta}
                  <Box aria-hidden="true" component="span" sx={{ ml: 0.7 }}>
                    →
                  </Box>
                </Box>
              )}
            </Stack>
          </Link>
        </Box>
      ))}

      <IconButton
        aria-label="Imagem anterior"
        onClick={showPrevious}
        sx={navigationButtonStyles("left")}
      >
        <ArrowBackIosNewRoundedIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="Próxima imagem"
        onClick={showNext}
        sx={navigationButtonStyles("right")}
      >
        <ArrowForwardIosRoundedIcon fontSize="small" />
      </IconButton>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          zIndex: 2,
          left: "50%",
          bottom: { xs: 12, sm: 16 },
          transform: "translateX(-50%)",
          p: 0.75,
          borderRadius: 5,
          bgcolor: "rgba(0, 0, 0, 0.35)",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            aria-label={`Mostrar imagem ${index + 1}`}
            aria-current={index === activeSlide}
            aria-pressed={index === activeSlide}
            component="button"
            key={slide.src}
            onClick={() => setActiveSlide(index)}
            sx={{
              width: 36,
              height: 36,
              p: 0,
              border: "none",
              borderRadius: "50%",
              bgcolor: "transparent",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              "&::before": {
                content: '""',
                width: 10,
                height: 10,
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: "50%",
                backgroundColor: index === activeSlide ? "#fff" : "transparent",
              },
              "&:focus-visible": { outline: "2px solid #fff", outlineOffset: 2 },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

type SlideTone = (typeof slides)[number]["tone"];

function contentBackdropStyles(tone: SlideTone) {
  const mobileGradient = "linear-gradient(180deg, rgba(23, 12, 5, 0.58) 0%, rgba(23, 12, 5, 0.28) 62%, transparent 100%)";

  return {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
    background: {
      xs: mobileGradient,
      sm:
        tone === "brand"
          ? "radial-gradient(ellipse at 50% 26%, rgba(31, 15, 7, 0.54), transparent 42%)"
          : "linear-gradient(180deg, rgba(28, 14, 7, 0.48) 0%, rgba(28, 14, 7, 0.12) 52%, transparent 78%)",
    },
  } as const;
}

function slideContentStyles(tone: SlideTone) {
  return {
    position: "absolute",
    zIndex: 2,
    top: {
      xs: tone === "launch" ? "9%" : "13%",
      sm: tone === "brand" ? "18%" : tone === "quiz" ? "12%" : "6%",
    },
    left: "50%",
    width: { xs: "82%", sm: tone === "brand" ? "58%" : "84%" },
    maxWidth: tone === "brand" ? 760 : 1100,
    alignItems: "center",
    gap: { xs: 0.35, sm: 0.25 },
    color: "#fff8e9",
    textAlign: "center",
    textShadow: "0 2px 12px rgba(22, 10, 3, 0.78)",
    transform: "translateX(-50%)",
  } as const;
}

function eyebrowStyles(tone: SlideTone) {
  return {
    fontFamily: tone === "brand" ? "Georgia, 'Times New Roman', serif" : "Arial, Helvetica, sans-serif",
    fontSize: {
      xs: tone === "brand" ? "clamp(2.5rem, 11vw, 3.4rem)" : "clamp(1.1rem, 5vw, 1.4rem)",
      sm: tone === "brand" ? "clamp(3rem, 5.8vw, 5rem)" : "clamp(1.2rem, 2.25vw, 1.7rem)",
    },
    fontWeight: tone === "brand" ? 400 : 500,
    letterSpacing: tone === "brand" ? "0.035em" : "0.025em",
    lineHeight: 1.08,
    textTransform: tone === "brand" ? "none" : "uppercase",
  } as const;
}

function titleStyles(tone: SlideTone) {
  return {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: {
      xs: tone === "brand" ? "1.7rem" : "2rem",
      sm: tone === "brand" ? "clamp(1.8rem, 3vw, 2.45rem)" : "clamp(1.9rem, 3.15vw, 2.7rem)",
    },
    fontWeight: 400,
    lineHeight: 1.12,
  } as const;
}

function descriptionStyles(tone: SlideTone) {
  return {
    maxWidth: tone === "brand" ? 620 : 1000,
    mt: tone === "brand" ? 0.25 : 0.4,
    fontSize: {
      xs: tone === "brand" ? "0.92rem" : "1.02rem",
      sm: tone === "brand" ? "clamp(0.95rem, 1.65vw, 1.3rem)" : "clamp(1.05rem, 2vw, 1.55rem)",
    },
    fontWeight: 400,
    letterSpacing: tone === "brand" ? "0.065em" : 0,
    lineHeight: 1.35,
    textTransform: tone === "brand" ? "uppercase" : "none",
  } as const;
}

const ctaStyles = {
  display: "inline-flex",
  alignItems: "center",
  mt: { xs: 1.5, sm: 1.85 },
  pb: 0.3,
  borderBottom: "1px solid rgba(255, 248, 233, 0.72)",
  fontSize: { xs: "1rem", sm: "clamp(1.05rem, 1.8vw, 1.4rem)" },
  fontWeight: 500,
  letterSpacing: "0.025em",
  lineHeight: 1.25,
  textTransform: "uppercase",
  transition: "border-color 180ms ease, transform 180ms ease",
  "a:hover &": {
    borderColor: "#fff8e9",
    transform: "translateY(-1px)",
  },
  "a:focus-visible &": {
    outline: "2px solid #fff8e9",
    outlineOffset: 5,
  },
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
} as const;

function navigationButtonStyles(side: "left" | "right") {
  return {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    [side]: { xs: 8, sm: 16 },
    transform: "translateY(-50%)",
    width: { xs: 40, sm: 46 },
    height: { xs: 40, sm: 46 },
    color: "common.white",
    bgcolor: "rgba(0, 0, 0, 0.38)",
    backdropFilter: "blur(3px)",
    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.58)" },
    "&:focus-visible": { outline: "2px solid #fff", outlineOffset: 2 },
  } as const;
}
