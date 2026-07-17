"use client";

import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export type ArticleCardProps = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  orientation?: "horizontal" | "vertical";
};

export default function ArticleCard({
  title,
  excerpt,
  href,
  image,
  imageAlt,
  orientation = "horizontal",
}: ArticleCardProps) {
  const isVertical = orientation === "vertical";

  return (
    <Card elevation={0} sx={{ bgcolor: "transparent", height: "100%", borderRadius: 0 }}>
      <CardActionArea component={Link} href={href} sx={{ height: "100%", borderRadius: 1, alignItems: "stretch" }}>
        <Stack direction={isVertical ? "column" : "row"} spacing={1.75} sx={{ height: "100%" }}>
          <CardContent sx={{ p: 0, flex: isVertical ? "none" : "0 0 42%", minWidth: 0 }}>
            <Image
              alt={imageAlt}
              height={isVertical ? 380 : 320}
              src={image}
              width={isVertical ? 672 : 306}
              style={{ width: "100%", height: isVertical ? "auto" : "100%", minHeight: isVertical ? undefined : 180, objectFit: "cover", borderRadius: 4 }}
            />
          </CardContent>
          <CardContent sx={{ p: 0, pr: isVertical ? 0 : 0.5, alignSelf: "center" }}>
            <Typography component="h3" sx={{ fontSize: "0.78rem", fontWeight: 900, lineHeight: 1.22, textTransform: "uppercase" }}>
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1, fontSize: "0.74rem", lineHeight: 1.5 }}>
              {excerpt}
            </Typography>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
