import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import InnerPage from "../components/inner-page";

export default function ContatosPage() {
  return (
    <InnerPage eyebrow="Contato" title="Vamos conversar" description="Envie uma mensagem para saber mais sobre produtos, práticas, parcerias e atendimentos.">
      <Grid container spacing={{ xs: 4, md: 7 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack component="form" spacing={2.5}>
            <TextField label="Nome" fullWidth />
            <TextField label="E-mail" type="email" fullWidth />
            <TextField label="Mensagem" multiline minRows={5} fullWidth />
            <Button type="button" variant="contained" sx={{ alignSelf: "flex-start" }}>Enviar mensagem</Button>
            <Typography variant="caption" color="text.secondary">Formulário demonstrativo — conecte-o ao canal de atendimento antes da publicação.</Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ bgcolor: "secondary.light", borderRadius: 2, p: 3.5 }}>
            <Typography component="h2" variant="h2" sx={{ color: "primary.main", fontSize: "1.3rem" }}>Outros canais</Typography>
            <Typography sx={{ mt: 2, lineHeight: 1.8 }}>E-mail: contato@marluasol.com.br</Typography>
            <Typography sx={{ lineHeight: 1.8 }}>Instagram: @marluasol</Typography>
            <Typography sx={{ mt: 2, color: "text.secondary" }}>Substitua pelos dados oficiais.</Typography>
          </Box>
        </Grid>
      </Grid>
    </InnerPage>
  );
}
