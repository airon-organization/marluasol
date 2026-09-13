"use client";

import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Button,
  LinearProgress,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { FormEvent, useMemo, useRef, useState } from "react";

type OlfactoryFamily = "citrico" | "floral" | "amadeirado" | "oriental";

type Question = {
  id: string;
  title: string;
  options: Array<{
    label: string;
    description: string;
    family: OlfactoryFamily;
  }>;
};

const questions: Question[] = [
  {
    id: "paisagem",
    title: "Qual paisagem mais desperta os seus sentidos?",
    options: [
      { label: "Um pomar ensolarado", description: "Frutas frescas, folhas verdes e brisa leve", family: "citrico" },
      { label: "Um jardim em flor", description: "Pétalas, delicadeza e beleza natural", family: "floral" },
      { label: "Uma floresta depois da chuva", description: "Terra úmida, raízes e madeira", family: "amadeirado" },
      { label: "Um templo ao entardecer", description: "Resinas, especiarias e mistério", family: "oriental" },
    ],
  },
  {
    id: "sensacao",
    title: "Como você deseja se sentir ao usar um perfume?",
    options: [
      { label: "Leve e cheia de energia", description: "Uma presença luminosa e espontânea", family: "citrico" },
      { label: "Acolhida e delicada", description: "Uma aura suave e harmoniosa", family: "floral" },
      { label: "Centrada e confiante", description: "Segurança, equilíbrio e profundidade", family: "amadeirado" },
      { label: "Magnética e envolvente", description: "Intensidade, calor e sensualidade", family: "oriental" },
    ],
  },
  {
    id: "notas",
    title: "Qual grupo de aromas mais atrai você?",
    options: [
      { label: "Bergamota, limão e laranja", description: "Notas vivas, alegres e refrescantes", family: "citrico" },
      { label: "Rosa, jasmim e lavanda", description: "Notas florais, macias e elegantes", family: "floral" },
      { label: "Cedro, vetiver e sândalo", description: "Notas secas, terrosas e sofisticadas", family: "amadeirado" },
      { label: "Âmbar, baunilha e especiarias", description: "Notas quentes, doces e marcantes", family: "oriental" },
    ],
  },
  {
    id: "intensidade",
    title: "Que intensidade combina mais com você?",
    options: [
      { label: "Fresca", description: "Discreta, limpa e fácil de usar", family: "citrico" },
      { label: "Suave", description: "Delicada, presente sem dominar", family: "floral" },
      { label: "Equilibrada", description: "Confortável, duradoura e elegante", family: "amadeirado" },
      { label: "Marcante", description: "Intensa, memorável e cheia de personalidade", family: "oriental" },
    ],
  },
  {
    id: "momento",
    title: "Em qual momento o perfume é mais importante para você?",
    options: [
      { label: "Na rotina diária", description: "Para começar o dia com disposição", family: "citrico" },
      { label: "Em encontros especiais", description: "Para celebrar afeto e conexão", family: "floral" },
      { label: "Nos momentos de pausa", description: "Para criar presença e enraizamento", family: "amadeirado" },
      { label: "À noite", description: "Para expressar mistério e sensualidade", family: "oriental" },
    ],
  },
];

const profiles: Record<OlfactoryFamily, { name: string; description: string; notes: string }> = {
  citrico: {
    name: "Cítrico luminoso",
    description: "Seu perfume ideal transmite frescor, movimento e alegria. Composições leves e vibrantes acompanham bem a sua energia natural.",
    notes: "Bergamota, laranja-doce, limão-siciliano, petitgrain e ervas frescas.",
  },
  floral: {
    name: "Floral delicado",
    description: "Você se conecta com perfumes harmoniosos, acolhedores e sensíveis. Flores naturais revelam a sua presença com suavidade e elegância.",
    notes: "Rosa, jasmim, lavanda, gerânio e flores brancas.",
  },
  amadeirado: {
    name: "Amadeirado profundo",
    description: "Seu caminho olfativo pede equilíbrio, presença e conexão com a terra. Aromas profundos e serenos reforçam sua confiança.",
    notes: "Cedro, sândalo, vetiver, patchouli e raízes aromáticas.",
  },
  oriental: {
    name: "Oriental envolvente",
    description: "Você prefere perfumes expressivos, quentes e misteriosos. Resinas e especiarias criam uma assinatura marcante e sensual.",
    notes: "Âmbar, benjoim, baunilha, canela, cardamomo e resinas naturais.",
  },
};

export default function OlfactoryQuiz() {
  const [answers, setAnswers] = useState<Record<string, OlfactoryFamily>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<OlfactoryFamily | null>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const answeredQuestions = Object.keys(answers).length;
  const currentQuestion = questions[currentStep];

  const progress = useMemo(
    () => (answeredQuestions / questions.length) * 100,
    [answeredQuestions],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!answers[currentQuestion.id]) return;

    if (currentStep < questions.length - 1) {
      setCurrentStep((step) => step + 1);
      window.setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      return;
    }

    const scores: Record<OlfactoryFamily, number> = {
      citrico: 0,
      floral: 0,
      amadeirado: 0,
      oriental: 0,
    };

    Object.values(answers).forEach((family) => {
      scores[family] += 1;
    });

    const bestMatch = (Object.keys(scores) as OlfactoryFamily[]).reduce((best, family) =>
      scores[family] > scores[best] ? family : best,
    );

    setResult(bestMatch);
    window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    window.setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const selectedProfile = result ? profiles[result] : null;
  const whatsappMessage = selectedProfile
    ? encodeURIComponent(`Olá! Fiz o questionário olfativo e meu perfil é ${selectedProfile.name}. Gostaria de conhecer um perfume para mim.`)
    : "";

  return (
    <Box
      component="section"
      ref={quizRef}
      sx={{
        overflow: "hidden",
        bgcolor: "#fffdf8",
      }}
    >
      <Box sx={{ bgcolor: "primary.dark", color: "common.white", px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 4, sm: 5 } }}>
        <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", color: "secondary.light" }}>
          <SpaRoundedIcon />
          <Typography sx={{ fontSize: "0.68rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Descubra seu aroma
          </Typography>
        </Stack>
        <Typography component="h1" variant="h1" sx={{ mt: 1.5, maxWidth: 720, fontSize: { xs: "1.85rem", sm: "2.65rem" } }}>
          Qual é o seu perfil olfativo?
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 720, color: "rgba(255,255,255,0.78)", lineHeight: 1.65 }}>
          Responda às perguntas e descubra a família de perfumes naturais que mais combina com a sua essência.
        </Typography>
        <Box sx={{ mt: 3, maxWidth: 520 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.75 }}>
            <Typography sx={{ fontSize: "0.68rem" }}>Seu progresso</Typography>
            <Typography sx={{ fontSize: "0.68rem", fontWeight: 800 }}>
              {selectedProfile ? "Concluído" : `Pergunta ${currentStep + 1} de ${questions.length}`}
            </Typography>
          </Stack>
          <LinearProgress
            aria-label={`${answeredQuestions} de ${questions.length} perguntas respondidas`}
            value={progress}
            variant="determinate"
            sx={{ height: 7, borderRadius: 4, bgcolor: "rgba(255,255,255,0.18)", "& .MuiLinearProgress-bar": { bgcolor: "secondary.main" } }}
          />
        </Box>
      </Box>

      {!selectedProfile && (
        <Box component="form" onSubmit={handleSubmit} sx={{ minHeight: { xs: 480, sm: 410 }, px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 4, sm: 5 } }}>
          <Stack spacing={{ xs: 4, sm: 5 }}>
            <Box component="fieldset" sx={{ m: 0, p: 0, border: 0 }}>
              <Typography component="legend" sx={{ mb: 2.5, color: "primary.dark", fontSize: { xs: "1.15rem", sm: "1.4rem" }, fontWeight: 900 }}>
                {currentStep + 1}. {currentQuestion.title}
              </Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.family;

                  return (
                    <Box
                      component="label"
                      key={option.label}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                        p: { xs: 1.75, sm: 2.25 },
                        border: "1px solid",
                        borderColor: isSelected ? "primary.main" : "rgba(34,34,34,0.14)",
                        borderRadius: 2,
                        bgcolor: isSelected ? "#f4eaf4" : "common.white",
                        cursor: "pointer",
                        transition: "border-color 160ms ease, background-color 160ms ease, transform 160ms ease",
                        "&:hover": { borderColor: "primary.light", transform: "translateY(-1px)" },
                      }}
                    >
                      <Radio
                        checked={isSelected}
                        name={currentQuestion.id}
                        onChange={() => {
                          setAnswers((current) => ({ ...current, [currentQuestion.id]: option.family }));
                          setResult(null);
                        }}
                        required
                        size="small"
                        value={option.family}
                        sx={{ p: 0.25, color: "primary.light", "&.Mui-checked": { color: "primary.main" } }}
                      />
                      <Box>
                        <Typography sx={{ color: "text.primary", fontSize: "0.82rem", fontWeight: 800, lineHeight: 1.3 }}>
                          {option.label}
                        </Typography>
                        <Typography sx={{ mt: 0.45, color: "text.secondary", fontSize: "0.7rem", lineHeight: 1.45 }}>
                          {option.description}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            <Stack direction="row" spacing={1.5} sx={{ justifyContent: "space-between" }}>
              <Button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((step) => step - 1)}
                sx={{ color: "primary.main" }}
              >
                Voltar
              </Button>
              <Button
                disabled={!answers[currentQuestion.id]}
                type="submit"
                variant="contained"
                sx={{ bgcolor: "primary.main", px: { xs: 2.5, sm: 4 }, py: 1.35 }}
              >
                {currentStep === questions.length - 1 ? "Descobrir meu perfil" : "Próxima pergunta"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}

      {selectedProfile && (
        <Box
          aria-live="polite"
          ref={resultRef}
          sx={{ minHeight: { xs: 420, sm: 370 }, bgcolor: "#eee4ef", borderTop: "1px solid", borderColor: "rgba(100, 16, 95, 0.16)", px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 4, sm: 5 } }}
        >
          <Typography sx={{ color: "primary.main", fontSize: "0.68rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Seu resultado
          </Typography>
          <Typography component="h3" variant="h2" sx={{ mt: 1, color: "primary.dark", fontSize: { xs: "1.55rem", sm: "2rem" } }}>
            {selectedProfile.name}
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 760, lineHeight: 1.7 }}>
            {selectedProfile.description}
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 760, fontSize: "0.8rem", lineHeight: 1.6 }}>
            <Box component="span" sx={{ fontWeight: 900 }}>Notas que combinam com você: </Box>
            {selectedProfile.notes}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3, alignItems: { xs: "stretch", sm: "center" } }}>
            <Button
              href={`https://wa.me/554891645940?text=${whatsappMessage}`}
              rel="noopener noreferrer"
              startIcon={<WhatsAppIcon />}
              target="_blank"
              variant="contained"
              sx={{ py: 1.2 }}
            >
              Encontrar meu perfume
            </Button>
            <Button onClick={resetQuiz} startIcon={<ReplayRoundedIcon />} sx={{ color: "primary.main" }}>
              Refazer questionário
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
