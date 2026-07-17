import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./components/theme-registry";

export const metadata: Metadata = {
  title: "Marluasol",
  description: "Marluasol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
    >
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html >
  );
}
