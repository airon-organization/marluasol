"use client";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import SelfImprovementRoundedIcon from "@mui/icons-material/SelfImprovementRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import {
  Box,
  Button,
  Checkbox,
  LinearProgress,
  Radio,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FormEvent, ReactNode, useRef, useState } from "react";

type OlfactoryFamily = "citrico" | "floral" | "amadeirado" | "oriental";
type Scores = Partial<Record<OlfactoryFamily, number>>;

type ChoiceOption = {
  id: string;
  label: string;
  description: string;
  scores: Scores;
  image?: { src: string; alt: string };
  icon?: ReactNode;
  color?: string;
};

type IngredientOption = {
  id: string;
  label: string;
  detail: string;
  color: string;
  scores: Scores;
};

const landscapes: ChoiceOption[] = [
  {
    id: "pomar",
    label: "Um pomar ensolarado",
    description: "Frutas frescas, folhas verdes e brisa leve",
    scores: { citrico: 3, floral: 1 },
    image: { src: "/quiz/citrico.png", alt: "Frutas cítricas e flores sob a luz do sol" },
  },
  {
    id: "jardim",
    label: "Um jardim em flor",
    description: "Pétalas, delicadeza e beleza natural",
    scores: { floral: 3, citrico: 1 },
    image: { src: "/quiz/floral.png", alt: "Rosas, jasmim e lavanda em um jardim" },
  },
  {
    id: "floresta",
    label: "Uma floresta depois da chuva",
    description: "Terra úmida, raízes e madeira",
    scores: { amadeirado: 3, oriental: 1 },
    image: { src: "/quiz/amadeirado.png", alt: "Madeiras, raízes e musgo em uma floresta" },
  },
  {
    id: "templo",
    label: "Um templo ao entardecer",
    description: "Resinas, especiarias e mistério",
    scores: { oriental: 3, amadeirado: 1 },
    image: { src: "/quiz/oriental.png", alt: "Resinas, baunilha e especiarias à luz de velas" },
  },
];

const feelings: ChoiceOption[] = [
  {
    id: "energia",
    label: "Leve e cheia de energia",
    description: "Uma presença luminosa e espontânea",
    scores: { citrico: 3, floral: 1 },
    icon: <LightModeRoundedIcon />,
    color: "linear-gradient(145deg, #fff4bd, #f4bf45)",
  },
  {
    id: "acolhimento",
    label: "Acolhida e delicada",
    description: "Uma aura suave, afetiva e harmoniosa",
    scores: { floral: 3, amadeirado: 1 },
    icon: <FavoriteRoundedIcon />,
    color: "linear-gradient(145deg, #f6dce9, #d995b8)",
  },
  {
    id: "equilibrio",
    label: "Centrada e confiante",
    description: "Segurança, equilíbrio e profundidade",
    scores: { amadeirado: 3, citrico: 1 },
    icon: <ForestRoundedIcon />,
    color: "linear-gradient(145deg, #d9e1c5, #8e9f67)",
  },
  {
    id: "magnetismo",
    label: "Magnética e envolvente",
    description: "Calor, mistério e sensualidade",
    scores: { oriental: 3, floral: 1 },
    icon: <AutoAwesomeRoundedIcon />,
    color: "linear-gradient(145deg, #dfc1e3, #92509a)",
  },
];

const ingredients: IngredientOption[] = [
  { id: "bergamota", label: "Bergamota", detail: "Viva e luminosa", color: "#d7d94c", scores: { citrico: 3, floral: 1 } },
  { id: "laranja", label: "Laranja-doce", detail: "Alegre e suculenta", color: "#ec9b35", scores: { citrico: 3, oriental: 1 } },
  { id: "rosa", label: "Rosa", detail: "Aveludada e afetiva", color: "#d9839d", scores: { floral: 3, oriental: 1 } },
  { id: "lavanda", label: "Lavanda", detail: "Calma e aromática", color: "#9d8ac4", scores: { floral: 2, citrico: 1, amadeirado: 1 } },
  { id: "cedro", label: "Cedro", detail: "Seco e elegante", color: "#9a6746", scores: { amadeirado: 3, oriental: 1 } },
  { id: "vetiver", label: "Vetiver", detail: "Terroso e verde", color: "#71845c", scores: { amadeirado: 3, citrico: 1 } },
  { id: "baunilha", label: "Baunilha", detail: "Cremosa e acolhedora", color: "#d6b271", scores: { oriental: 3, floral: 1 } },
  { id: "cardamomo", label: "Cardamomo", detail: "Quente e vibrante", color: "#8c9560", scores: { oriental: 2, amadeirado: 1, citrico: 1 } },
];

const occasions: ChoiceOption[] = [
  {
    id: "cotidiano",
    label: "No cotidiano",
    description: "Para começar o dia com leveza e disposição",
    scores: { citrico: 2, floral: 1 },
    icon: <LightModeRoundedIcon />,
  },
  {
    id: "trabalho",
    label: "No trabalho",
    description: "Para comunicar presença e confiança",
    scores: { amadeirado: 2, citrico: 1 },
    icon: <WorkOutlineRoundedIcon />,
  },
  {
    id: "ritual",
    label: "Em um ritual de pausa",
    description: "Para respirar, silenciar e voltar para si",
    scores: { amadeirado: 2, oriental: 2 },
    icon: <SelfImprovementRoundedIcon />,
  },
  {
    id: "noite",
    label: "Em momentos especiais",
    description: "Para deixar uma lembrança marcante",
    scores: { oriental: 2, floral: 1 },
    icon: <NightsStayRoundedIcon />,
  },
];

const profiles: Record<OlfactoryFamily, { name: string; adjective: string; description: string; notes: string; image: string }> = {
  citrico: {
    name: "Cítrico",
    adjective: "luminosas",
    description: "Frescor, movimento e alegria conduzem a sua assinatura olfativa.",
    notes: "bergamota, laranja-doce, limão-siciliano e petitgrain",
    image: "/quiz/citrico.png",
  },
  floral: {
    name: "Floral",
    adjective: "delicadas",
    description: "Sensibilidade, harmonia e acolhimento aparecem no centro das suas escolhas.",
    notes: "rosa, jasmim, lavanda, gerânio e flores brancas",
    image: "/quiz/floral.png",
  },
  amadeirado: {
    name: "Amadeirado",
    adjective: "profundas",
    description: "Equilíbrio, confiança e conexão com a terra definem o seu caminho.",
    notes: "cedro, sândalo, vetiver, patchouli e raízes aromáticas",
    image: "/quiz/amadeirado.png",
  },
  oriental: {
    name: "Oriental",
    adjective: "envolventes",
    description: "Calor, expressividade e mistério tornam a sua presença memorável.",
    notes: "âmbar, benjoim, baunilha, canela, cardamomo e resinas naturais",
    image: "/quiz/oriental.png",
  },
};

const intensityLabels = ["", "Sutil", "Presente", "Envolvente", "Marcante"];
const questionTitles = [
  "Qual paisagem mais desperta os seus sentidos?",
  "Como você deseja se sentir ao usar um perfume?",
  "Quais ingredientes mais atraem você?",
  "Como você prefere que o aroma se revele?",
  "Em qual momento o perfume é mais importante?",
];

type QuizResult = {
  primary: OlfactoryFamily;
  secondary: OlfactoryFamily;
  primaryPercentage: number;
  secondaryPercentage: number;
  isHybrid: boolean;
};

export default function OlfactoryQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [intensity, setIntensity] = useState(2);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const selectAnswer = (question: string, option: string) => {
    setAnswers((current) => ({ ...current, [question]: option }));
  };

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients((current) => {
      if (current.includes(ingredient)) return current.filter((item) => item !== ingredient);
      if (current.length === 3) return current;
      return [...current, ingredient];
    });
  };

  const isCurrentStepComplete =
    (currentStep === 0 && Boolean(answers.landscape)) ||
    (currentStep === 1 && Boolean(answers.feeling)) ||
    (currentStep === 2 && selectedIngredients.length >= 2) ||
    currentStep === 3 ||
    (currentStep === 4 && Boolean(answers.occasion));

  const addScores = (score: Scores, total: Record<OlfactoryFamily, number>) => {
    Object.entries(score).forEach(([family, points]) => {
      total[family as OlfactoryFamily] += points ?? 0;
    });
  };

  const calculateResult = () => {
    const scores: Record<OlfactoryFamily, number> = { citrico: 0, floral: 0, amadeirado: 0, oriental: 0 };
    const selectedLandscape = landscapes.find((option) => option.id === answers.landscape);
    const selectedFeeling = feelings.find((option) => option.id === answers.feeling);
    const selectedOccasion = occasions.find((option) => option.id === answers.occasion);

    [selectedLandscape, selectedFeeling, selectedOccasion].forEach((option) => {
      if (option) addScores(option.scores, scores);
    });
    selectedIngredients.forEach((id) => {
      const ingredient = ingredients.find((option) => option.id === id);
      if (ingredient) addScores(ingredient.scores, scores);
    });

    const ranking = (Object.entries(scores) as Array<[OlfactoryFamily, number]>).sort((a, b) => b[1] - a[1]);
    const total = ranking.reduce((sum, [, points]) => sum + points, 0);

    setResult({
      primary: ranking[0][0],
      secondary: ranking[1][0],
      primaryPercentage: Math.round((ranking[0][1] / total) * 100),
      secondaryPercentage: Math.round((ranking[1][1] / total) * 100),
      isHybrid: ranking[0][1] === ranking[1][1],
    });
    window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isCurrentStepComplete) return;

    if (currentStep < questionTitles.length - 1) {
      setCurrentStep((step) => step + 1);
      window.setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      return;
    }
    calculateResult();
  };

  const resetQuiz = () => {
    setAnswers({});
    setSelectedIngredients([]);
    setIntensity(2);
    setCurrentStep(0);
    setResult(null);
    window.setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const primaryProfile = result ? profiles[result.primary] : null;
  const secondaryProfile = result ? profiles[result.secondary] : null;
  const resultName = result && primaryProfile && secondaryProfile
    ? result.isHybrid
      ? `${primaryProfile.name} + ${secondaryProfile.name}`
      : `${primaryProfile.name} com nuances ${secondaryProfile.adjective}`
    : "";
  const whatsappMessage = resultName
    ? encodeURIComponent(`Olá! Fiz o questionário olfativo e meu perfil é ${resultName}, com intensidade ${intensityLabels[intensity].toLowerCase()}. Gostaria de conhecer um perfume para mim.`)
    : "";

  return (
    <Box component="section" ref={quizRef} sx={{ overflow: "hidden", bgcolor: "#fffdf8", scrollMarginTop: 16 }}>
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
          Uma experiência sensorial para encontrar os aromas naturais que combinam com a sua essência.
        </Typography>
        <Box sx={{ mt: 3, maxWidth: 560 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.75 }}>
            <Typography sx={{ fontSize: "0.68rem" }}>Seu caminho olfativo</Typography>
            <Typography sx={{ fontSize: "0.68rem", fontWeight: 800 }}>
              {result ? "Concluído" : `Pergunta ${currentStep + 1} de ${questionTitles.length}`}
            </Typography>
          </Stack>
          <LinearProgress
            aria-label={`${result ? questionTitles.length : currentStep + 1} de ${questionTitles.length} etapas`}
            value={result ? 100 : ((currentStep + 1) / questionTitles.length) * 100}
            variant="determinate"
            sx={{ height: 7, borderRadius: 4, bgcolor: "rgba(255,255,255,0.18)", "& .MuiLinearProgress-bar": { bgcolor: "secondary.main" } }}
          />
        </Box>
      </Box>

      {!result && (
        <Box component="form" onSubmit={handleSubmit} sx={{ minHeight: { xs: 490, sm: 420 }, px: { xs: 2.5, sm: 6, lg: 10 }, py: { xs: 4, sm: 5 } }}>
          <Typography component="h2" sx={{ mb: 1, color: "primary.dark", fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 900 }}>
            {currentStep + 1}. {questionTitles[currentStep]}
          </Typography>
          {currentStep === 2 && (
            <Typography sx={{ mb: 2.5, color: "text.secondary", fontSize: "0.72rem" }}>
              Escolha de duas a três notas. ({selectedIngredients.length}/3 selecionadas)
            </Typography>
          )}

          {currentStep === 0 && (
            <ChoiceGrid options={landscapes} selected={answers.landscape} onSelect={(id) => selectAnswer("landscape", id)} variant="image" />
          )}
          {currentStep === 1 && (
            <ChoiceGrid options={feelings} selected={answers.feeling} onSelect={(id) => selectAnswer("feeling", id)} variant="mood" />
          )}
          {currentStep === 2 && (
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(4, minmax(0, 1fr))" }, gap: 1.25 }}>
              {ingredients.map((ingredient) => {
                const selected = selectedIngredients.includes(ingredient.id);
                const disabled = selectedIngredients.length === 3 && !selected;
                return (
                  <Box
                    component="label"
                    key={ingredient.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.25,
                      minHeight: 82,
                      p: 1.5,
                      border: "2px solid",
                      borderColor: selected ? "primary.main" : "rgba(34,34,34,0.13)",
                      borderRadius: 2,
                      bgcolor: selected ? "#f4eaf4" : "common.white",
                      opacity: disabled ? 0.48 : 1,
                      cursor: disabled ? "not-allowed" : "pointer",
                    }}
                  >
                    <Checkbox checked={selected} disabled={disabled} onChange={() => toggleIngredient(ingredient.id)} sx={{ display: "none" }} />
                    <Box sx={{ width: 42, height: 42, flexShrink: 0, display: "grid", placeItems: "center", borderRadius: "50%", bgcolor: ingredient.color, boxShadow: "inset 0 0 0 5px rgba(255,255,255,0.28)" }}>
                      {selected && <CheckRoundedIcon sx={{ color: "common.white" }} />}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "0.76rem", fontWeight: 900 }}>{ingredient.label}</Typography>
                      <Typography sx={{ mt: 0.25, color: "text.secondary", fontSize: "0.63rem" }}>{ingredient.detail}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          )}
          {currentStep === 3 && (
            <Box sx={{ maxWidth: 820, mt: { xs: 4, sm: 6 }, mx: "auto", p: { xs: 2.5, sm: 5 }, borderRadius: 3, bgcolor: "#f2eaf2", textAlign: "center" }}>
              <Box sx={{ width: 88, height: 88, mx: "auto", display: "grid", placeItems: "center", borderRadius: "50%", color: "common.white", bgcolor: "primary.main", boxShadow: "0 12px 32px rgba(100,16,95,0.25)" }}>
                <SpaRoundedIcon sx={{ fontSize: 42 }} />
              </Box>
              <Typography sx={{ mt: 2, color: "primary.dark", fontSize: { xs: "1.25rem", sm: "1.65rem" }, fontWeight: 900 }}>
                {intensityLabels[intensity]}
              </Typography>
              <Typography sx={{ mt: 0.75, color: "text.secondary", fontSize: "0.72rem" }}>
                Deslize para escolher a presença que o perfume deve ter na sua pele.
              </Typography>
              <Slider
                aria-label="Intensidade do perfume"
                marks={intensityLabels.slice(1).map((label, index) => ({ value: index + 1, label }))}
                max={4}
                min={1}
                onChange={(_, value) => setIntensity(value as number)}
                step={1}
                value={intensity}
                sx={{ mt: 4, color: "primary.main", "& .MuiSlider-markLabel": { fontSize: { xs: "0.54rem", sm: "0.64rem" } } }}
              />
            </Box>
          )}
          {currentStep === 4 && (
            <ChoiceGrid options={occasions} selected={answers.occasion} onSelect={(id) => selectAnswer("occasion", id)} variant="icon" />
          )}

          <Stack direction="row" spacing={1.5} sx={{ justifyContent: "space-between", mt: 5 }}>
            <Button disabled={currentStep === 0} onClick={() => setCurrentStep((step) => step - 1)} sx={{ color: "primary.main" }}>
              Voltar
            </Button>
            <Button disabled={!isCurrentStepComplete} type="submit" variant="contained" sx={{ bgcolor: "primary.main", px: { xs: 2.5, sm: 4 }, py: 1.35 }}>
              {currentStep === questionTitles.length - 1 ? "Ver meu resultado" : "Continuar"}
            </Button>
          </Stack>
        </Box>
      )}

      {result && primaryProfile && secondaryProfile && (
        <Box ref={resultRef} aria-live="polite" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(320px, 0.8fr) 1.2fr" }, bgcolor: "#eee4ef" }}>
          <Box sx={{ position: "relative", minHeight: { xs: 280, md: 520 } }}>
            <Image alt={`Atmosfera olfativa do perfil ${primaryProfile.name}`} fill sizes="(max-width: 900px) 100vw, 40vw" src={primaryProfile.image} style={{ objectFit: "cover" }} />
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(31,4,31,0.72))" }} />
          </Box>
          <Box sx={{ px: { xs: 2.5, sm: 6 }, py: { xs: 4, sm: 6 } }}>
            <Typography sx={{ color: "primary.main", fontSize: "0.68rem", fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase" }}>Seu resultado</Typography>
            <Typography component="h2" variant="h2" sx={{ mt: 1, color: "primary.dark", fontSize: { xs: "1.65rem", sm: "2.15rem" } }}>{resultName}</Typography>
            <Typography sx={{ mt: 1.5, maxWidth: 720, lineHeight: 1.7 }}>
              {primaryProfile.description} Seu lado secundário acrescenta nuances {secondaryProfile.adjective} e mais complexidade à composição.
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 3, maxWidth: 560 }}>
              <AffinityBar label={primaryProfile.name} value={result.primaryPercentage} />
              <AffinityBar label={secondaryProfile.name} value={result.secondaryPercentage} />
            </Stack>

            <Box sx={{ mt: 3, p: 2, borderRadius: 2, bgcolor: "rgba(255,255,255,0.58)" }}>
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 900 }}>Sua composição ideal</Typography>
              <Typography sx={{ mt: 0.6, fontSize: "0.7rem", lineHeight: 1.6 }}>
                Intensidade {intensityLabels[intensity].toLowerCase()}, com {primaryProfile.notes} e toques de {secondaryProfile.notes}.
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 3, alignItems: { xs: "stretch", sm: "center" }, flexWrap: "wrap" }}>
              <Button href="#produtos" variant="contained" sx={{ py: 1.2 }}>Ver produtos para mim</Button>
              <Button href={`https://wa.me/554891645940?text=${whatsappMessage}`} rel="noopener noreferrer" startIcon={<WhatsAppIcon />} target="_blank" variant="outlined" sx={{ py: 1.1 }}>
                Falar com a perfumista
              </Button>
              <Button onClick={resetQuiz} startIcon={<ReplayRoundedIcon />} sx={{ color: "primary.main" }}>Refazer</Button>
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
}

function ChoiceGrid({ options, selected, onSelect, variant }: { options: ChoiceOption[]; selected?: string; onSelect: (id: string) => void; variant: "image" | "mood" | "icon" }) {
  return (
    <Box component="fieldset" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" }, gap: 1.5, m: 0, p: 0, border: 0 }}>
      <Typography component="legend" sx={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Escolha uma opção</Typography>
      {options.map((option) => {
        const isSelected = selected === option.id;
        return (
          <Box
            component="label"
            key={option.id}
            sx={{
              display: "block",
              overflow: "hidden",
              minHeight: variant === "image" ? 0 : 210,
              border: "2px solid",
              borderColor: isSelected ? "primary.main" : "rgba(34,34,34,0.14)",
              borderRadius: 2,
              bgcolor: isSelected ? "#f4eaf4" : "common.white",
              boxShadow: isSelected ? "0 10px 28px rgba(100,16,95,0.2)" : "0 5px 18px rgba(34,34,34,0.07)",
              transform: isSelected ? "translateY(-3px)" : "none",
              cursor: "pointer",
              transition: "180ms ease",
              "&:hover": { borderColor: "primary.light", transform: "translateY(-3px)" },
            }}
          >
            {variant === "image" && option.image && (
              <Box sx={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                <Image alt={option.image.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" src={option.image.src} style={{ objectFit: "cover" }} />
              </Box>
            )}
            {variant === "mood" && (
              <Box sx={{ height: 112, display: "grid", placeItems: "center", color: "rgba(69,6,68,0.8)", background: option.color, "& svg": { fontSize: 52 } }}>{option.icon}</Box>
            )}
            {variant === "icon" && (
              <Box sx={{ pt: 3, pl: 2, color: "primary.main", "& svg": { fontSize: 46 } }}>{option.icon}</Box>
            )}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.75, minHeight: variant === "image" ? 105 : 95, p: 1.5 }}>
              <Radio checked={isSelected} name="quiz-choice" onChange={() => onSelect(option.id)} size="small" value={option.id} sx={{ p: 0.25, color: "primary.light", "&.Mui-checked": { color: "primary.main" } }} />
              <Box>
                <Typography sx={{ fontSize: "0.76rem", fontWeight: 900, lineHeight: 1.3 }}>{option.label}</Typography>
                <Typography sx={{ mt: 0.45, color: "text.secondary", fontSize: "0.65rem", lineHeight: 1.42 }}>{option.description}</Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function AffinityBar({ label, value }: { label: string; value: number }) {
  return (
    <Box>
      <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
        <Typography sx={{ fontSize: "0.68rem", fontWeight: 800 }}>{label}</Typography>
        <Typography sx={{ fontSize: "0.68rem", fontWeight: 900 }}>{value}%</Typography>
      </Stack>
      <LinearProgress value={value} variant="determinate" sx={{ height: 8, borderRadius: 5, bgcolor: "rgba(100,16,95,0.12)", "& .MuiLinearProgress-bar": { bgcolor: "primary.main" } }} />
    </Box>
  );
}
