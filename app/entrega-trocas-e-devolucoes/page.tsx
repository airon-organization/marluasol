import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import InnerPage from "../components/inner-page";
import { buildWhatsAppLink } from "../lib/contact";

export const metadata: Metadata = {
  title: "Entrega, trocas e devoluções | MarLuaSol",
  description:
    "Saiba como funcionam a confirmação do pedido, o frete grátis, o prazo de envio, as trocas e as devoluções na MarLuaSol.",
};

const contactMessage =
  "Olá! Preciso de ajuda com um pedido, entrega, troca ou devolução.";

export default function EntregaTrocasEDevolucoesPage() {
  return (
    <InnerPage
      eyebrow="Compra segura"
      title="Entrega, trocas e devoluções"
      description="Informações claras para você comprar com tranquilidade e acompanhar cada etapa do seu pedido."
    >
      <Stack spacing={0}>
        <InformationSection title="Como o pedido é feito e confirmado">
          Escolha o perfume e toque em “Quero este perfume”. O atendimento continua
          pelo WhatsApp, onde você recebe os dados para pagamento via Pix. Após a
          confirmação do pagamento, a MarLuaSol confirma o pedido pelo próprio
          WhatsApp.
        </InformationSection>

        <InformationSection title="Frete grátis e prazo de envio">
          O frete é grátis. O pedido é preparado e enviado em até 7 dias úteis,
          contados a partir da confirmação do pagamento. O prazo de transporte começa
          após o envio e varia de acordo com o destino; a previsão é informada durante
          o atendimento.
        </InformationSection>

        <InformationSection title="Direito de arrependimento e devolução">
          Nas compras realizadas à distância, você pode desistir da compra em até 7
          dias corridos após o recebimento do produto. Entre em contato pelo WhatsApp
          dentro desse prazo para receber as orientações de devolução, sem custo, e o
          reembolso integral dos valores pagos.
        </InformationSection>

        <InformationSection title="Trocas e problemas com o pedido">
          Se o produto chegar danificado, diferente do pedido ou apresentar algum
          problema, fale conosco pelo WhatsApp e informe o número ou os dados do pedido.
          Se possível, envie fotos para facilitar o atendimento. A solicitação será
          analisada e resolvida de acordo com os direitos previstos no Código de Defesa
          do Consumidor.
        </InformationSection>

        <InformationSection title="Segurança e atendimento">
          As vendas são atendidas diretamente pela MarLuaSol Perfumaria Natural pelo
          WhatsApp. Nunca informe senhas, códigos de autenticação ou dados completos de
          cartão. Antes de pagar, confira os dados do recebedor do Pix e aguarde a
          confirmação do pedido no mesmo atendimento.
        </InformationSection>
      </Stack>

      <Box sx={{ mt: 5, p: { xs: 2.5, sm: 3.5 }, borderRadius: 2, bgcolor: "#f2eaf2" }}>
        <Typography component="h2" sx={{ color: "primary.dark", fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.35rem" }}>
          Precisa de ajuda?
        </Typography>
        <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}>
          Fale com a MarLuaSol pelo canal usado para realizar o pedido.
        </Typography>
        <Button
          href={buildWhatsAppLink(contactMessage)}
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon />}
          target="_blank"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Conversar pelo WhatsApp
        </Button>
      </Box>
    </InnerPage>
  );
}

function InformationSection({ title, children }: { title: string; children: string }) {
  return (
    <Box
      component="section"
      sx={{
        py: 3.5,
        borderBottom: "1px solid rgba(100,16,95,0.14)",
        "&:first-of-type": { pt: 0 },
        "&:last-of-type": { borderBottom: 0, pb: 0 },
      }}
    >
      <Typography component="h2" sx={{ color: "primary.dark", fontFamily: "Georgia, 'Times New Roman', serif", fontSize: { xs: "1.35rem", sm: "1.6rem" } }}>
        {title}
      </Typography>
      <Typography sx={{ mt: 1.25, maxWidth: 820, color: "text.secondary", lineHeight: 1.75 }}>
        {children}
      </Typography>
    </Box>
  );
}
