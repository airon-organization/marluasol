import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Stack, Typography } from "@mui/material";
import InnerPage from "../components/inner-page";
import { buildWhatsAppLink } from "../lib/contact";

export default function ContatosPage() {
  return (
    <InnerPage eyebrow="Contato" title="Vamos conversar" description="Fale comigo pelo WhatsApp para saber mais sobre produtos, práticas, parcerias e atendimentos.">
      <Stack spacing={2.5} sx={{ alignItems: "flex-start" }}>
        <Typography sx={{ lineHeight: 1.6 }}>
          Toque no botão abaixo para iniciar uma conversa.
        </Typography>
        <Button
          href={buildWhatsAppLink("Ola! Tenho interesse em conhecer os perfumes e atendimentos da MarLuaSol.")}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{ maxWidth: "100%", textAlign: "center" }}
        >
          Conversar pelo WhatsApp
        </Button>
      </Stack>
    </InnerPage>
  );
}
