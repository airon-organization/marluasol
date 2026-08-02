"use client";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/home/carrosel/CARROSEL 1.png",
    alt: "A perfumação natural que cuida de você",
  },
  {
    src: "/home/carrosel/CARROSEL 2.png",
    alt: "Frascos de perfumes naturais entre plantas aromáticas",
  },
  {
    src: "/home/carrosel/CARROSEL 3.png",
    alt: "Perfumes naturais MarLuaSol — aromas que despertam sua essência",
  },
];

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

  return (
    <Box
      aria-label="Destaques da MarLuaSol"
      aria-roledescription="carrossel"
      component="section"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
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
            transition: "opacity 600ms ease",
            "@media (prefers-reduced-motion: reduce)": { transition: "none" },
          }}
        >
          <Image
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            src={slide.src}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
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
            aria-pressed={index === activeSlide}
            component="button"
            key={slide.src}
            onClick={() => setActiveSlide(index)}
            sx={{
              width: 10,
              height: 10,
              p: 0,
              border: "1px solid rgba(255,255,255,0.9)",
              borderRadius: "50%",
              bgcolor: index === activeSlide ? "common.white" : "transparent",
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

function navigationButtonStyles(side: "left" | "right") {
  return {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    [side]: { xs: 8, sm: 16 },
    transform: "translateY(-50%)",
    color: "common.white",
    bgcolor: "rgba(0, 0, 0, 0.38)",
    backdropFilter: "blur(3px)",
    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.58)" },
  } as const;
}
