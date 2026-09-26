import { Box, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import InnerPage from "../../components/inner-page";

type Article = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  sections: Array<{
    title?: string;
    paragraphs: string[];
  }>;
};

const articles: Record<string, Article> = {
  mulheres_e_plantas: {
    eyebrow: "Botânica e ancestralidade",
    title: "Mulheres e plantas — amigas ancestrais",
    description: "O olfato, a memória e a relação ancestral das mulheres com o universo das plantas.",
    image: "/articles/mulheres_e_plantas/QUADROSEMTE 1.png",
    imageAlt: "Mulher em conexão com plantas e a paisagem natural",
    sections: [
      {
        paragraphs: [
          "Durante milhares de anos, as mulheres aprenderam a reconhecer o mundo através das plantas. As plantas alimentavam. Curavam. Protegiam. Perfumavam. Acalmavam. Fortaleciam.",
          "Muito antes de existirem medicamentos industrializados, eram elas que acompanhavam os ciclos femininos: o nascimento, a fertilidade, a maternidade, os rituais, o luto e a celebração.",
          "Talvez por isso exista algo tão familiar quando sentimos o aroma de uma planta. Como se o corpo se lembrasse antes mesmo de a razão compreender. E talvez isso não seja apenas poesia.",
        ],
      },
      {
        title: "O olfato conversa diretamente com as emoções",
        paragraphs: [
          "A ciência tem descoberto que o olfato ocupa um lugar único no cérebro humano. Quando vemos uma imagem ou ouvimos uma música, essas informações passam por áreas responsáveis pelo processamento racional antes de adquirirem significado.",
          "Com o cheiro acontece diferente: os sinais olfativos chegam rapidamente ao sistema límbico — conjunto de estruturas relacionadas às emoções, à memória, à motivação e à sobrevivência.",
          "É por isso que um aroma pode despertar lembranças da infância em poucos segundos. Ou trazer calma. Ou coragem. Ou nostalgia. Sem que precisemos pensar.",
          "Essa ligação entre olfato, memória e emoção é uma das características mais fascinantes do cérebro humano.",
        ],
      },
      {
        title: "As mulheres possuem um olfato ainda mais sensível",
        paragraphs: [
          "Diversos estudos mostram que, em média, as mulheres apresentam maior sensibilidade olfativa do que os homens. Pesquisas em neurociência demonstram que elas conseguem identificar odores em concentrações menores, diferenciar aromas com maior precisão e reconhecer um número maior de cheiros.",
          "Além disso, estudos anatômicos identificaram que mulheres possuem aproximadamente duas vezes mais neurônios e células gliais no bulbo olfatório — estrutura responsável pelo primeiro processamento das informações do olfato — em comparação aos homens.",
          "Isso ajuda a explicar por que tantas mulheres descrevem os aromas com riqueza de detalhes e frequentemente estabelecem vínculos emocionais profundos com determinados perfumes e plantas. Essa diferença não significa superioridade; significa apenas que, biologicamente, o olfato ocupa um papel ainda mais relevante na experiência feminina.",
        ],
      },
      {
        title: "O seu nariz também conta a história da sua vida",
        paragraphs: [
          "Você já percebeu que existem épocas em que ama determinado aroma e, alguns anos depois, simplesmente deixa de gostar dele? Isso acontece com muitas pessoas.",
          "A ciência mostra que nossa percepção olfativa não é fixa. Ela sofre influência da genética, da idade, dos hormônios, das experiências vividas, da memória e do contexto emocional.",
          "Em outras palavras: nós mudamos. E nossa relação com os aromas muda junto.",
        ],
      },
      {
        title: "Cada pessoa percebe o mesmo perfume de maneira diferente",
        paragraphs: [
          "Durante muitos anos, acreditou-se que todas as pessoas percebiam os aromas da mesma forma. Hoje sabemos que isso não é verdade.",
          "O sequenciamento do chamado genoma olfativo revelou que possuímos centenas de genes responsáveis pelos receptores do olfato. Pequenas diferenças genéticas fazem com que cada indivíduo interprete os odores de maneira única.",
          "Algumas pessoas quase não percebem determinadas moléculas aromáticas. Outras as identificam imediatamente. É como se cada pessoa carregasse uma assinatura olfativa própria.",
          "Por isso, não existe perfume perfeito para todos. Existe o perfume que conversa com você.",
          "A descoberta da diversidade genética dos receptores olfativos ajudou a explicar por que duas pessoas podem viver experiências completamente diferentes diante do mesmo aroma.",
        ],
      },
      {
        title: "Os aromas também influenciam nosso estado emocional",
        paragraphs: [
          "O caminho entre nariz e cérebro funciona em duas direções. Os aromas despertam emoções, mas nosso estado emocional também altera a maneira como percebemos os aromas.",
          "Por isso, um mesmo perfume pode parecer maravilhoso em um momento da vida e excessivamente intenso em outro.",
          "Na tradição botânica e em diversas práticas ancestrais de uso das plantas, acredita-se que essa afinidade revele necessidades emocionais daquele momento. A ciência ainda investiga essas interpretações, mas já confirma que emoções, memória e olfato estão profundamente conectados.",
        ],
      },
      {
        title: "Até o cheiro de pessoas queridas pode reduzir o estresse",
        paragraphs: [
          "Uma pesquisa conduzida por Marlise Hofer, Hanne Collins, Ashley Whillans e Frances Chen observou que mulheres expostas ao aroma da camiseta usada por seus parceiros apresentaram menor resposta fisiológica ao estresse quando comparadas àquelas expostas ao cheiro de um estranho ou a uma camiseta sem odor.",
          "Esse resultado reforça algo que intuitivamente já percebemos: o olfato é capaz de influenciar profundamente nossa experiência emocional.",
          "Se o aroma de alguém pode produzir esse efeito, não é difícil compreender por que determinadas plantas nos acompanham há milhares de anos em práticas de cuidado e bem-estar.",
        ],
      },
      {
        title: "O que tudo isso tem a ver com a MarLuaSol?",
        paragraphs: [
          "Na MarLuaSol, nós não criamos apenas perfumes. Estudamos plantas: sua história, sua química, sua presença na cultura humana, sua participação na perfumaria e sua simbologia.",
          "Estudamos também a forma como cada aroma pode despertar experiências únicas em cada pessoa.",
          "Não acreditamos que exista uma planta capaz de transformar a vida de alguém por si só. Mas acreditamos que conhecer as plantas é também uma forma de conhecer a si mesma.",
          "Porque, muitas vezes, quando uma mulher se encanta por uma planta, ela está, sem perceber, reconhecendo algo dentro de si.",
        ],
      },
    ],
  },
  quem_sao_as_deusas: {
    eyebrow: "Aromas e mitologia feminina",
    title: "Quem são as deusas e o que elas têm a ver com os aromas das plantas?",
    description: "Como plantas, perfumes e figuras mitológicas podem despertar memória, presença e diferentes forças femininas.",
    image: "/articles/quem_sao_as_deusas/01.png",
    imageAlt: "Representação simbólica de uma deusa entre elementos naturais",
    sections: [
      {
        paragraphs: [
          "Cleópatra compreendia o poder dos aromas e sabia usá-los a seu favor. Nos perfumes, as plantas tornam-se linguagem — e cada aroma pode despertar em nós uma força, uma memória, uma deusa.",
          "Muito antes de o perfume ser colocado em frascos elegantes sobre penteadeiras, o aroma já acompanhava a humanidade em rituais, templos, celebrações, cuidados com o corpo e momentos de passagem.",
          "Flores, resinas, raízes, cascas e ervas eram queimadas, maceradas em óleos ou transformadas em unguentos. Perfumavam a pele, os cabelos, os ambientes e também aquilo que as pessoas consideravam sagrado.",
          "No Egito Antigo, perfumes e incensos ocupavam um lugar importante tanto na vida cotidiana quanto nas práticas religiosas. Misturas aromáticas podiam reunir ingredientes como olíbano, mirra, canela, zimbro, resinas e ervas. O famoso kyphi, utilizado especialmente em contextos religiosos, era uma preparação complexa feita a partir de diversos ingredientes aromáticos.",
          "Talvez seja por isso que, milhares de anos depois, o perfume ainda seja capaz de produzir algo difícil de explicar somente com palavras. Nós sentimos um aroma — e alguma coisa acontece. Uma lembrança aparece. Uma sensação muda. Uma parte de nós desperta.",
        ],
      },
      {
        title: "Cleópatra e o poder invisível do perfume",
        paragraphs: [
          "Poucas figuras históricas representam tão bem essa relação entre perfume, presença e poder quanto Cleópatra VII, a última rainha da dinastia ptolomaica do Egito.",
          "É importante separar a mulher histórica da personagem criada posteriormente pelo imaginário popular. Cleópatra não foi simplesmente a “sedutora” que tantas histórias transformaram em lenda. Era uma governante extremamente envolvida na política de seu tempo, falava diversos idiomas e soube construir cuidadosamente sua imagem pública.",
          "Plutarco, escrevendo mais tarde sobre sua vida, ressaltou especialmente sua inteligência, sua conversa persuasiva e sua capacidade de exercer fascínio através da presença e da voz. E o aroma fazia parte dessa construção de presença.",
          "Quando Cleópatra navegou pelo rio Cydnus para encontrar Marco Antônio, Plutarco descreveu uma chegada quase teatral: uma embarcação luxuosa, velas púrpuras, música, ouro e aromas de incensos que se espalhavam pelas margens antes mesmo de ela chegar.",
          "Antes que Cleópatra pudesse ser tocada, ela podia ser percebida. Seu perfume chegava primeiro.",
          "Séculos depois, Shakespeare transformaria essa mesma cena em poesia, imaginando suas velas tão perfumadas que até o vento parecia apaixonado por elas.",
          "Não sabemos exatamente qual perfume pessoal Cleópatra utilizava. Pesquisadores reconstruíram fragrâncias egípcias da época, como o perfume Mendesiano, com notas marcantes de mirra e canela, mas não existe evidência suficiente para afirmar que aquela era especificamente a fragrância de Cleópatra.",
          "O que sabemos é talvez ainda mais interessante: o aroma fazia parte de uma linguagem de poder, beleza, ritual e presença.",
        ],
      },
      {
        title: "Mas onde entram as deusas?",
        paragraphs: [
          "Desde as primeiras civilizações, as deusas deram forma humana a forças difíceis de explicar: amor, fertilidade, sabedoria, morte, renascimento, proteção, desejo, prosperidade, lua, terra, guerra, sexualidade e intuição.",
          "Não existe uma única ideia de “deusa”. Cada cultura criou suas próprias histórias, símbolos e tradições religiosas, que não devem ser reduzidas a uma mesma coisa. Mas podemos olhar para essas figuras também como imagens simbólicas das muitas possibilidades da experiência humana.",
          "Afrodite nos lembra do desejo, da beleza e do prazer.",
          "Ísis, uma das grandes divindades do Egito, foi associada à maternidade, à proteção e ao poder de restaurar a vida. Durante o período ptolomaico, seu culto tornou-se especialmente importante, e a própria Cleópatra chegou a construir sua imagem política ligada à ideia da “nova Ísis”.",
          "Hécate, na tradição grega, habita simbolicamente as fronteiras, as encruzilhadas e aquilo que existe entre um mundo e outro.",
          "Lakshmi, dentro da tradição hindu, está relacionada à prosperidade, à abundância, à beleza e à boa fortuna.",
          "São histórias diferentes, nascidas de lugares e épocas diferentes. Mas todas carregam algo que continua profundamente humano. E talvez seja por isso que ainda nos reconhecemos nelas.",
        ],
      },
      {
        title: "As plantas também possuem uma linguagem",
        paragraphs: [
          "Uma rosa não nos provoca a mesma sensação que uma raiz de vetiver. A bergamota não ocupa o espaço da mesma maneira que o olíbano. A canela não fala conosco como a lavanda.",
          "Existe, naturalmente, uma explicação olfativa para isso. Cada matéria-prima possui moléculas aromáticas, volatilidade, intensidade e características próprias. Mas nossa experiência com o perfume não termina na química.",
          "Ela passa pela memória. Pela cultura. Pela história. E também pela maneira como cada pessoa recebe aquele aroma.",
          "A rosa pode nos lembrar de sensualidade, delicadeza, amor ou força. A canela pode trazer calor, movimento e intensidade. O vetiver, extraído das raízes, pode transmitir profundidade, terra e estabilidade.",
          "O olíbano, utilizado há milênios em cerimônias religiosas, pode nos transportar para uma atmosfera contemplativa e ritualística. A bergamota, luminosa e cítrica, pode trazer a sensação de abertura e frescor.",
          "Isso não significa que uma planta carregue obrigatoriamente determinada emoção ou que exista uma interpretação universal para seu aroma. Significa que podemos construir relações simbólicas com aquilo que sentimos.",
          "E é justamente aí que os perfumes e as deusas se encontram.",
        ],
      },
      {
        title: "Qual deusa existe em você?",
        paragraphs: [
          "Talvez nenhuma mulher seja apenas Afrodite. Em alguns momentos, precisamos de sua capacidade de desejar e sentir prazer. Em outros, precisamos atravessar uma encruzilhada com Hécate.",
          "Há dias em que buscamos a abundância de Lakshmi. Em outros, precisamos reunir os próprios pedaços, como Ísis reunindo aquilo que havia sido fragmentado.",
          "As deusas podem ser compreendidas como espelhos. Não para dizer às mulheres quem elas devem ser, mas para lembrar quantas possibilidades já existem dentro delas.",
          "O perfume pode participar desse processo de uma maneira muito íntima. Ao escolher conscientemente um aroma, podemos transformar o gesto cotidiano de nos perfumar em um pequeno ritual.",
          "Não porque algumas gotas de perfume tenham o poder mágico de transformar quem somos, mas porque os sentidos têm uma capacidade extraordinária de nos trazer para o presente.",
          "Você segura o frasco. Sente o primeiro aroma. Respira. E, por alguns segundos, lembra daquilo que deseja cultivar em si.",
        ],
      },
      {
        title: "Perfumar a pele como um ritual",
        paragraphs: [
          "É dessa ideia que nasce a relação entre as deusas e os perfumes naturais da MarLuaSol.",
          "As plantas não estão presentes apenas para produzir um cheiro agradável. Elas contam parte da história de cada criação. Uma flor, uma raiz, uma casca, uma folha ou uma resina possuem formas diferentes de existir no mundo — e, quando combinadas, criam narrativas olfativas.",
          "O perfume deixa então de ser apenas algo que colocamos sobre a pele. Ele pode se tornar uma intenção. Um instante de presença. Uma lembrança de quem somos ou daquilo que queremos despertar.",
          "Talvez Cleópatra já compreendesse algo parecido quando fazia do aroma parte de sua entrada no mundo: perfume também é presença. E talvez seja justamente esse o segredo que atravessou tantos séculos.",
          "As deusas não precisam estar distantes, sobre altares ou presas às páginas dos antigos mitos. Elas podem continuar vivendo como símbolos das inúmeras forças que habitam uma mulher.",
          "E as plantas, com seus aromas, podem ser uma maneira de nos lembrarmos delas. Porque, às vezes, basta um aroma para que alguma coisa que estava adormecida dentro de nós volte a respirar.",
        ],
      },
    ],
  },
  perfumaria_ancestral: {
    eyebrow: "Perfumaria natural",
    title: "Perfumaria ancestral e o ritual dos aromas",
    description: "Os aromas como caminhos para acessar memórias, emoções e fragmentos da nossa própria história.",
    image: "/articles/perfumaria_ancestral/DEUSAISIS 1.png",
    imageAlt: "Representação da deusa Ísis em arte egípcia",
    sections: [
      {
        title: "Uma história em construção",
        paragraphs: [
          "A perfumaria não é trivial: ela acompanha ritos, encontros e formas de expressão desde tempos ancestrais.",
          "Este artigo está estruturado como esboço editorial e pronto para receber o conteúdo completo, referências e chamadas relacionadas.",
        ],
      },
    ],
  },
};

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) return { title: "Artigo não encontrado | MarLuaSol" };

  return {
    title: `${article.title} | MarLuaSol`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  return (
    <InnerPage eyebrow={article.eyebrow} title={article.title} description={article.description}>
      <Box sx={{ position: "relative", width: "100%", aspectRatio: { xs: "4 / 3", md: "16 / 7" }, borderRadius: 2, overflow: "hidden" }}>
        <Image alt={article.imageAlt} fill sizes="(max-width: 900px) 100vw, 1100px" src={article.image} style={{ objectFit: "cover" }} />
      </Box>

      <Stack spacing={{ xs: 4, sm: 5 }} sx={{ mt: { xs: 4, sm: 6 }, maxWidth: 820, mx: "auto" }}>
        {article.sections.map((section, sectionIndex) => (
          <Box component="section" key={section.title ?? `introducao-${sectionIndex}`}>
            {section.title && (
              <Typography
                component="h2"
                sx={{
                  mb: 2,
                  color: "primary.main",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: { xs: "1.4rem", sm: "1.75rem" },
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {section.title}
              </Typography>
            )}
            <Stack spacing={2}>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <Typography key={paragraphIndex} sx={{ color: "text.primary", lineHeight: 1.85 }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </InnerPage>
  );
}
