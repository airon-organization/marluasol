import type { Metadata } from "next";
import "./globals.css";
import PageLoadingOverlay from "./components/page-loading-overlay";
import ThemeRegistry from "./components/theme-registry";

export const metadata: Metadata = {
  metadataBase: new URL("https://marluasol.com.br"),
  title: {
    default: "MarLuaSol | Perfumaria Natural",
    template: "%s | MarLuaSol",
  },
  description:
    "Perfumaria natural botânica, quiz olfativo personalizado e aromas artesanais para cultivar presença, bem-estar e conexão com a natureza.",
  openGraph: {
    title: "MarLuaSol | Perfumaria Natural",
    description:
      "Descubra seu perfil olfativo e conheça perfumes naturais artesanais feitos a partir das plantas.",
    type: "website",
    locale: "pt_BR",
    siteName: "MarLuaSol",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarLuaSol | Perfumaria Natural",
    description:
      "Descubra seu perfil olfativo e conheça perfumes naturais artesanais feitos a partir das plantas.",
  },
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
        <PageLoadingOverlay />
        <a className="skip-link" href="#page-content">Pular para o conteudo principal</a>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html >
  );
}
