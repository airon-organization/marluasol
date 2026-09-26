import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./components/theme-registry";

export const metadata: Metadata = {
  metadataBase: new URL("https://marluasol.com.br"),
  title: {
    default: "MarLuaSol | Perfumaria Natural e Yin Yoga",
    template: "%s | MarLuaSol",
  },
  description:
    "Perfumaria natural botanica, quiz olfativo personalizado e praticas de Yin Yoga para cultivar presenca, bem-estar e conexao com a natureza.",
  openGraph: {
    title: "MarLuaSol | Perfumaria Natural e Yin Yoga",
    description:
      "Descubra seu perfil olfativo, conheca perfumes naturais artesanais e explore praticas de Yin Yoga.",
    type: "website",
    locale: "pt_BR",
    siteName: "MarLuaSol",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarLuaSol | Perfumaria Natural e Yin Yoga",
    description:
      "Descubra seu perfil olfativo, conheca perfumes naturais artesanais e explore praticas de Yin Yoga.",
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
        <a className="skip-link" href="#page-content">Pular para o conteudo principal</a>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html >
  );
}
