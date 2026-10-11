export type ArticleSection = {
  title?: string;
  paragraphs?: string[];
  items?: string[];
  comparison?: Array<{
    natural: string;
    synthetic: string;
  }>;
};

export type Article = {
  position: number;
  eyebrow: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageAspectRatio: string;
  imagePosition?: string;
  portraitImage?: boolean;
  sections: ArticleSection[];
};

export const articles: Record<string, Article> = {
  mulheres_e_plantas: {
    position: 2,
    eyebrow: "Botânica e ancestralidade",
    title: "Mulheres e plantas — amigas ancestrais",
    description: "A relação ancestral entre mulheres, plantas, olfato, memória e emoções.",
    excerpt: "Muito antes dos medicamentos industrializados, as plantas já acompanhavam os ciclos, os rituais e a vida das mulheres.",
    image: "/articles/mulheres_e_plantas/imagem-artigo-1.jpg",
    imageAlt: "Mulher entre plantas, representando a conexão ancestral com a natureza",
    imageAspectRatio: "429 / 683",
    imagePosition: "center 38%",
    portraitImage: true,
    sections: [
      {
        paragraphs: [
          "Muito antes de existirem medicamentos industrializados, eram as plantas que acompanhavam os ciclos femininos, o nascimento, os rituais, a fertilidade, a maternidade, o luto e a celebração. Como amigas ancestrais.",
          "Talvez por isso exista algo tão familiar quando sentimos o aroma de uma planta. Como se o corpo se lembrasse antes mesmo de a razão compreender. E talvez isso não seja apenas poético: é uma sinergia entre as mulheres e as plantas que podemos honrar mesmo em nossa rotina dos tempos modernos.",
        ],
      },
      {
        title: "O olfato conversa diretamente com as emoções",
        paragraphs: [
          "Diferente de quando vemos uma imagem ou ouvimos uma música, experiências sensoriais que passam por áreas responsáveis pelo processamento racional antes de adquirirem significado, com o cheiro acontece de outra forma: os sinais olfativos chegam primeiro ao sistema límbico, conjunto de estruturas relacionadas às emoções, à memória, à motivação e à sobrevivência.",
          "É por isso que um aroma pode despertar lembranças da infância em poucos segundos. Um aroma pode repelir ou atrair antes mesmo de raciocinarmos sobre isso. Os aromas podem trazer calma, coragem ou nostalgia sem que precisemos pensar.",
          "Essa ligação entre olfato, memória e emoção é uma das características mais fascinantes do cérebro humano. E as mulheres possuem um olfato mais sensível.",
          "Diversos estudos mostram que, em média, mulheres apresentam desempenho ligeiramente superior em algumas habilidades olfativas. Pesquisas em neurociência demonstram que elas conseguem identificar odores em concentrações menores, diferenciar aromas com maior precisão e reconhecer um número maior de cheiros. Estudos anatômicos também identificaram mais neurônios e células gliais no bulbo olfatório feminino, estrutura responsável pelo primeiro processamento das informações do olfato.",
          "Essa diferença pode sugerir que, biologicamente, o olfato ocupa um papel mais relevante na experiência feminina. Isso poderia explicar por que tantas mulheres descrevem os aromas com riqueza de detalhes e estabelecem vínculos emocionais profundos com determinados perfumes e plantas.",
        ],
      },
      {
        title: "O seu nariz também conta a história da sua vida",
        paragraphs: [
          "Relembre se existem épocas em que você amava determinado aroma e, alguns anos depois, simplesmente deixou de gostar dele. A ciência mostra que nossa percepção olfativa não é fixa: ela sofre influência da genética, da idade, dos hormônios, das experiências vividas e do momento emocional. Nós mudamos, e nossa relação com os aromas muda junto.",
        ],
      },
      {
        title: "Cada pessoa percebe o mesmo perfume de maneira diferente",
        paragraphs: [
          "Durante muitos anos, acreditou-se que todas as pessoas percebiam os aromas da mesma forma. Hoje sabemos que isso não é verdade. O sequenciamento do genoma olfativo revelou que possuímos centenas de genes responsáveis pelos receptores do olfato, e pequenas diferenças genéticas fazem com que cada indivíduo interprete os odores de maneira única.",
          "Algumas pessoas quase não percebem determinadas moléculas aromáticas; outras as identificam imediatamente. É como se cada pessoa carregasse uma assinatura olfativa própria. Por isso não existe perfume perfeito para todos, mas existe o perfume que conversa com você.",
        ],
      },
      {
        title: "Aromas e estado emocional",
        paragraphs: [
          "O caminho entre nariz e cérebro funciona nas duas direções: os aromas despertam emoções, mas nosso estado emocional também altera a maneira como os percebemos. Por isso, um mesmo perfume pode parecer maravilhoso em um momento da vida e excessivamente intenso em outro.",
          "Na tradição botânica e em diversas práticas ancestrais de uso das plantas, acredita-se que essa afinidade revele necessidades emocionais daquele momento. A ciência ainda investiga essas interpretações, mas já confirma que emoções, memória e olfato estão conectados.",
        ],
      },
      {
        title: "Até o cheiro de pessoas queridas pode influenciar nossas emoções",
        paragraphs: [
          "Uma pesquisa conduzida por Marlise Hofer, Hanne Collins, Ashley Whillans e Frances Chen observou que mulheres expostas ao aroma da camiseta usada por seus parceiros apresentaram menor resposta fisiológica ao estresse quando comparadas àquelas expostas ao cheiro de um estranho ou a uma camiseta sem odor. Isso indica que o olfato é capaz de influenciar profundamente nossa experiência emocional.",
          "Se o aroma de alguém pode produzir esse efeito, não é difícil compreender por que determinadas plantas nos acompanham há milhares de anos em práticas de cuidado e bem-estar. Podemos utilizar as plantas que nos ajudam a alcançar nossos objetivos, sejam eles externos ou internos. Ficar cheirosa e se sentir bem podem coexistir em uma borrifada.",
        ],
      },
      {
        title: "O que tudo isso tem a ver com a MarLuaSol?",
        paragraphs: [
          "Na MarLuaSol, estudamos as plantas, sua história, sua química, sua participação na perfumaria e também sua simbologia.",
          "Cada aroma pode despertar experiências únicas em cada pessoa. Conhecer as plantas é também uma forma de conhecer a si mesma. Muitas vezes, quando uma mulher se encanta por uma planta, ela está, sem perceber, reconhecendo algo dentro de si.",
          "Nosso propósito é criar perfumes naturais feitos a partir de plantas, utilizando óleos essenciais, extratos botânicos e matérias-primas de origem natural, sem fragrâncias sintéticas. Apenas a natureza perfumando a pele. Através dos aromas, buscamos despertar conexão consigo mesma, atenção plena, presença e bem-estar emocional.",
        ],
      },
      {
        title: "Fontes",
        items: [
          "Decodificação do genoma olfativo — Genome Biology",
          "Olfactory cues from romantic partners and strangers influence women’s responses to stress — Hofer, Collins, Whillans e Chen",
          "Sex differences in human olfaction: a meta-analysis — Sorokowski et al., Frontiers in Psychology, 2019",
        ],
      },
    ],
  },
  quem_sao_as_deusas: {
    position: 3,
    eyebrow: "Aromas e mitologia feminina",
    title: "Quem são as deusas e o que elas têm a ver com os aromas das plantas?",
    description: "Como os perfumes, as plantas e as deusas se encontram em uma linguagem de memória, presença e simbolismo.",
    excerpt: "Cleópatra compreendia o poder dos aromas. Nos perfumes, as plantas tornam-se linguagem e cada aroma pode despertar em nós uma deusa.",
    image: "/articles/quem_sao_as_deusas/imagem-artigo-2.jpg",
    imageAlt: "Mulher caracterizada como uma deusa egípcia em meio à natureza",
    imageAspectRatio: "4 / 3",
    sections: [
      {
        paragraphs: [
          "Cleópatra compreendia o poder dos aromas e sabia usá-los a seu favor. Nos perfumes, as plantas tornam-se linguagem e cada aroma pode despertar em nós uma deusa.",
          "Muito antes de o perfume ser colocado em frascos elegantes sobre penteadeiras, o aroma já acompanhava a humanidade em rituais, templos, celebrações, cuidados com o corpo e momentos de passagem. Flores, resinas, raízes, cascas e ervas eram queimadas, maceradas em óleos ou transformadas em unguentos. Perfumavam a pele, os cabelos, os ambientes e também aquilo que as pessoas consideravam sagrado.",
          "No Egito Antigo, perfumes e incensos ocupavam um lugar importante tanto na vida cotidiana quanto nas práticas religiosas. Misturas aromáticas podiam reunir ingredientes como olíbano, mirra, canela, junípero, resinas e ervas. O famoso kyphi, utilizado especialmente em contextos religiosos, era uma preparação complexa feita a partir de diversos ingredientes aromáticos.",
          "Talvez seja por isso que, milhares de anos depois, o perfume ainda seja capaz de produzir algo difícil de explicar somente com palavras. Sentimos um aroma e alguma coisa acontece. Uma lembrança aparece, uma sensação muda, uma parte de nós desperta.",
        ],
      },
      {
        title: "Cleópatra e o poder invisível do perfume",
        paragraphs: [
          "Poucas figuras históricas representam tão bem essa relação entre perfume, presença e poder quanto Cleópatra, a última rainha da dinastia ptolomaica do Egito.",
          "É importante separar a mulher histórica da personagem criada posteriormente pelo imaginário popular. Cleópatra não foi simplesmente a sedutora que tantas histórias transformaram em lenda. Era uma governante envolvida na política de seu tempo, falava diversos idiomas e soube construir cuidadosamente sua imagem pública. Plutarco ressaltou especialmente sua inteligência, sua conversa persuasiva e sua capacidade de exercer fascínio através da presença e da voz.",
          "O aroma fazia parte dessa construção de presença. Ela era uma sacerdotisa da deusa Ísis e personificava a própria deusa.",
          "Quando Cleópatra navegou pelo rio Cydnus para encontrar Marco Antônio, Plutarco descreveu uma chegada quase teatral: uma embarcação luxuosa, velas púrpuras, música, ouro e aromas de incensos que se espalhavam pelas margens antes mesmo de ela chegar. Antes que pudesse ser vista, ela podia ser percebida. Seu perfume chegava primeiro.",
          "Séculos depois, Shakespeare transformaria essa mesma cena em poesia, imaginando suas velas tão perfumadas que até o vento parecia apaixonado por elas.",
          "Não sabemos exatamente qual perfume pessoal Cleópatra utilizava. Pesquisadores reconstruíram fragrâncias egípcias da época, como o perfume Mendesiano, com notas marcantes de mirra e canela, mas não existe evidência suficiente para afirmar que aquela era especificamente sua fragrância.",
          "O que sabemos é talvez ainda mais interessante: o aroma fazia parte de uma linguagem de poder, beleza, ritual e presença.",
        ],
      },
      {
        title: "As deusas como símbolos",
        paragraphs: [
          "Desde as primeiras civilizações, as deusas deram forma humana a forças difíceis de explicar: amor, fertilidade, sabedoria, morte, renascimento, proteção, desejo, prosperidade, lua, terra, guerra, sexualidade e intuição.",
          "Não existe uma única ideia de deusa. Cada cultura criou suas próprias histórias, símbolos e tradições religiosas, que não devem ser reduzidas a uma mesma coisa. Mas podemos olhar para essas figuras como imagens simbólicas das muitas possibilidades da experiência humana.",
          "Ísis, uma das grandes divindades do Egito, foi associada à maternidade, à proteção e ao poder de restaurar a vida. Durante o período ptolomaico, seu culto tornou-se especialmente importante, e a própria Cleópatra chegou a construir sua imagem política ligada à ideia da nova Ísis.",
          "Hécate, na tradição grega, habita simbolicamente as fronteiras, as encruzilhadas e aquilo que existe entre um mundo e outro. Lakshmi, dentro da tradição hindu, está relacionada à prosperidade, à abundância, à beleza e à boa fortuna.",
          "São histórias diferentes, nascidas de lugares e épocas diferentes. Mas todas carregam algo que continua profundamente humano. E talvez seja por isso que ainda nos reconhecemos nelas.",
        ],
      },
      {
        title: "As plantas também possuem uma linguagem",
        paragraphs: [
          "Uma rosa não nos provoca a mesma sensação que uma raiz de vetiver. A bergamota não ocupa o espaço da mesma maneira que o olíbano. A canela não fala conosco como a lavanda.",
          "Existe uma explicação olfativa para isso. Cada matéria-prima possui moléculas aromáticas, volatilidade, intensidade e características próprias. Mas nossa experiência com o perfume não termina na química. Ela passa pela memória, pela cultura, pela história e pela maneira diferente como cada pessoa recebe um aroma.",
          "A rosa pode nos lembrar sensualidade, delicadeza, amor ou força: bela, porém com espinhos. A canela pode trazer calor, movimento e intensidade, simbolizar a prosperidade e a paixão pela vida. O vetiver, extraído das raízes, pode transmitir profundidade, terra e estabilidade — o aroma de um porto seguro.",
          "O olíbano, utilizado há milênios em cerimônias religiosas, pode nos transportar para uma atmosfera contemplativa e ritualística, de conexão com o divino em nós. A bergamota, luminosa e cítrica, pode trazer sensação de abertura, frescor, otimismo e alegria de viver.",
          "Isso não significa que uma planta carregue obrigatoriamente determinada emoção ou que exista uma interpretação universal para seu aroma. Significa que podemos construir relações simbólicas com aquilo que sentimos. E é justamente aí que os perfumes e as deusas se encontram.",
        ],
      },
      {
        title: "Qual deusa existe em você?",
        paragraphs: [
          "Nenhuma mulher é apenas uma personalidade. Há dias em que buscamos a abundância de Lakshmi. Em outros, precisamos reunir os próprios pedaços, como Ísis reunindo aquilo que havia sido fragmentado no corpo de seu marido.",
          "As deusas podem ser compreendidas como espelhos. Não para dizer às mulheres quem elas devem ser, mas para lembrar quantas possibilidades já existem dentro delas.",
          "O perfume pode participar desse processo de uma maneira muito íntima. Ao escolher conscientemente um aroma, podemos transformar o gesto cotidiano de nos perfumar em um pequeno ritual. Não porque algumas gotas tenham o poder mágico de transformar quem somos, mas porque os sentidos têm uma capacidade extraordinária de nos trazer para o presente.",
          "Você segura o frasco, sente o aroma, respira. E, por alguns segundos, lembra de si mesma e daquilo que deseja cultivar naquele momento.",
        ],
      },
      {
        title: "Perfumar a pele como um ritual",
        paragraphs: [
          "É dessa ideia que nasce a relação entre as deusas e os perfumes naturais da MarLuaSol. As plantas não estão presentes apenas para produzir um cheiro agradável. Elas contam parte da história de cada criação.",
          "Uma flor, uma raiz, uma casca, uma folha ou uma resina possuem formas diferentes de existir no mundo e, quando combinadas, criam narrativas olfativas.",
          "O perfume deixa de ser apenas algo que colocamos sobre a pele. Ele pode se tornar uma intenção. Minha professora Palmira Margarida diz que perfume é posicionamento energético. É um instante de presença que nos lembra de quem somos e daquilo que queremos despertar.",
          "Talvez Cleópatra já compreendesse algo parecido quando fazia do aroma e da presença magnética parte de sua entrada nos eventos. E talvez seja justamente esse o segredo que atravessou tantos séculos. As deusas não precisam estar distantes, sobre altares ou presas às páginas dos antigos mitos. As deusas e as plantas, podemos vivenciá-las na pele.",
        ],
      },
    ],
  },
  perfumaria_ancestral: {
    position: 4,
    eyebrow: "Perfumaria natural",
    title: "Perfumaria ancestral e o ritual dos aromas",
    description: "A história da relação ancestral entre aromas, rituais, sacerdotisas e plantas.",
    excerpt: "Antes dos frascos e das fórmulas modernas, plantas, madeiras, resinas e flores já faziam parte de rituais e cerimônias.",
    image: "/articles/perfumaria_ancestral/imagem-artigo-3.png",
    imageAlt: "Mulher segurando um frasco de perfume em uma composição inspirada no Egito Antigo",
    imageAspectRatio: "1396 / 768",
    sections: [
      {
        paragraphs: [
          "Por meio dos aromas, entramos em contato com uma tradição muito mais antiga do que a perfumaria como conhecemos hoje. Antes dos frascos, das fórmulas modernas e das grandes casas de perfume, já existia o uso ritualístico de plantas, madeiras, resinas, flores, óleos e unguentos aromáticos.",
          "Perfumar não significava apenas adornar o corpo ou produzir um cheiro agradável, mas também marcar cerimônias, preparar ambientes, oferecer algo aos deuses e criar uma atmosfera diferente daquela da vida cotidiana. Conheça um pouco da história da perfumaria e da relação ancestral entre aromas, rituais, sacerdotisas e plantas.",
        ],
      },
      {
        title: "Muito antes da perfumaria moderna",
        paragraphs: [
          "Quando pensamos em perfumaria, é comum imaginar imediatamente a tradição europeia e, principalmente, a França. Mas civilizações antigas, entre elas o Egito, a Mesopotâmia e o Oriente Próximo, já dominavam formas de trabalhar matérias aromáticas muito antes do surgimento da perfumaria moderna. Resinas eram queimadas, plantas eram maceradas e diferentes ingredientes naturais eram combinados e destinados tanto ao corpo quanto aos rituais.",
          "Antes de existir a ideia do perfume líquido, muitos aromas eram liberados através da queima de plantas. A fumaça subia enquanto o cheiro ocupava o ambiente, e esse movimento acabou associado, em diferentes contextos religiosos, ao contato com o divino, com os deuses e com aquilo que era considerado sagrado.",
          "Com o tempo, essas preparações deixaram de existir somente na forma de fumaça e passaram a aparecer como pastas, bálsamos, unguentos e óleos perfumados. No Egito Antigo, matérias aromáticas eram utilizadas em diferentes contextos da vida cotidiana e religiosa, e algumas preparações ficaram conhecidas pela complexidade de seus ingredientes e pela importância que possuíam nos templos.",
        ],
      },
      {
        title: "O perfume no Egito Antigo",
        paragraphs: [
          "No Egito Antigo, o perfume estava profundamente integrado à religião. Incensos, óleos e outras substâncias aromáticas podiam ser utilizados em oferendas e cerimônias. Entre as preparações mais conhecidas estava o kyphi, uma composição aromática natural utilizada especialmente em contextos religiosos.",
          "Dentro dos templos, o aroma fazia parte da própria construção da experiência ritual. O espaço sagrado não era percebido apenas através da visão, das imagens ou dos cânticos, mas também pelo cheiro. Queimar determinadas resinas ou preparar o corpo com substâncias perfumadas ajudava a distinguir aquele momento da vida comum e reforçava a dimensão cerimonial do que estava acontecendo.",
          "Uma das imagens mais curiosas do Egito Antigo é a representação de homens e mulheres utilizando sobre a cabeça estruturas em forma de cone durante banquetes, cerimônias e outras cenas sociais. Durante muito tempo, discutiu-se se esses cones eram apenas uma convenção artística ou se correspondiam a objetos reais.",
          "Descobertas arqueológicas posteriores trouxeram evidências de que esses cones eram feitos de substâncias aromáticas, gorduras e unguentos perfumados. A ideia de que derretiam lentamente sobre a cabeça, perfumando o corpo, tornou-se uma das imagens mais conhecidas quando se fala em cosmética e perfumaria egípcia. Ainda que alguns detalhes dessa interpretação sejam debatidos, não há dúvidas de que óleos, pomadas e substâncias aromáticas faziam parte da cultura egípcia e também apareciam em contextos cerimoniais.",
        ],
      },
      {
        title: "Conhecimento, matérias naturais e novas técnicas",
        paragraphs: [
          "Criar perfume na Antiguidade exigia conhecimento. Era necessário compreender quais matérias podiam ser queimadas, quais poderiam ser incorporadas a óleos, quais liberavam melhor seus aromas quando aquecidas e quais poderiam ser maceradas por longos períodos. Não existiam moléculas aromáticas sintéticas produzidas em laboratório, portanto os perfumes eram construídos a partir daquilo que o mundo natural oferecia.",
          "Com o desenvolvimento de novas técnicas, especialmente de extração e destilação, a perfumaria passou por inúmeras transformações. Povos árabes tiveram enorme importância no aperfeiçoamento da destilação, enquanto diferentes regiões do Mediterrâneo e, posteriormente, da Europa desenvolveram tradições próprias.",
          "Séculos depois, a perfumaria francesa se tornaria uma grande referência mundial, mas ela faz parte de uma história muito mais longa, iniciada muito antes das casas de perfume europeias.",
        ],
      },
      {
        title: "Plantas, histórias e deusas",
        paragraphs: [
          "Quando estudamos as antigas civilizações, percebemos que muitas plantas eram associadas a divindades, cerimônias e histórias mitológicas. Flores, resinas e ervas podiam aparecer em oferendas e rituais dedicados a diferentes deuses e deusas, e essas relações simbólicas foram construídas ao longo do tempo de acordo com cada cultura.",
          "É a partir desse encontro entre natureza e simbolismo que surge uma das ideias que mais inspira a MarLuaSol: olhar para as plantas não apenas como ingredientes, mas também como portadoras de histórias. Como deusas.",
          "No Método da Perfumaria Ancestral, desenvolvido pela doutora em História Palmira Margarida, a relação entre perfumes e plantas é trabalhada através dos arquétipos femininos e das deusas associadas a diferentes características e famílias olfativas. Na MarLuaSol, utilizamos essa linguagem de forma simbólica e inspiradora.",
          "Quando chamamos as plantas de nossas deusas guias, não estamos dizendo que existe um significado único ou universal para cada uma delas, mas reconhecendo que determinadas plantas carregam histórias, mitos e associações construídas por diferentes povos ao longo do tempo.",
          "Uma rosa pode atravessar séculos ligada ao amor, à beleza e ao feminino. Resinas como olíbano e mirra atravessaram templos, rotas comerciais e tradições religiosas. Especiarias como canela e cravo viajaram entre continentes e foram valorizadas muito antes de chegarem aos frascos de perfume que conhecemos hoje. Cada matéria possui uma trajetória própria, e trabalhar com essas plantas significa também entrar em contato com essa história.",
        ],
      },
      {
        title: "A perfumaria ancestral no presente",
        paragraphs: [
          "Falar em perfumaria natural não significa tentar reproduzir exatamente os rituais realizados há milhares de anos. Também não significa transformar todo perfume em uma cerimônia religiosa. Para nós, significa recuperar uma maneira mais consciente de olhar para aquilo que existe dentro de um frasco.",
          "Um perfume pode ser criado apenas para cheirar bem, e não há nada de errado nisso. Mas ele também pode carregar uma história, uma escolha de matérias-primas, uma inspiração e uma intenção artística.",
          "Na perfumaria natural, essa relação fica ainda mais evidente porque continuamos trabalhando diretamente com matérias que acompanham a humanidade há muito tempo: óleos essenciais, resinas, extratos botânicos, flores, folhas, cascas, raízes e madeiras.",
          "Não precisamos voltar ao Egito Antigo para compreender o valor simbólico de um aroma, nem reproduzir os rituais das sacerdotisas para reconhecer que as plantas fizeram parte da história da perfumaria muito antes de nós.",
          "Na MarLuaSol, essa história inspira a maneira como criamos nossos perfumes. Estudamos as matérias-primas, suas características aromáticas, sua presença na história da perfumaria e os símbolos que foram associados a elas ao longo do tempo.",
          "Criamos perfumes naturais a partir de óleos essenciais, extratos botânicos, tinturas, resinas e outras matérias de origem natural, buscando preservar dentro de cada criação não apenas um aroma, mas também uma narrativa. É daí que surgem perfumes inspirados em deusas, arquétipos e diferentes forças da natureza.",
          "Não para reproduzir literalmente o passado, mas para trazer uma pequena parte dessa relação ancestral com as plantas para a vida contemporânea. Muito antes de o perfume ocupar uma prateleira, ele já ocupava templos, cerimônias, corpos e histórias. Talvez seja justamente isso que ainda exista de mais fascinante na perfumaria: transformar uma planta em aroma é também uma forma de honrar sua história ancestral conosco.",
        ],
      },
    ],
  },
  beneficios_do_perfume_natural: {
    position: 1,
    eyebrow: "Perfumaria natural",
    title: "Os benefícios do perfume natural",
    description: "Muito além de um cheiro agradável: uma experiência construída a partir das plantas.",
    excerpt: "Entenda como os perfumes naturais se transformam na pele e aproximam nossos sentidos dos aromas encontrados nas plantas.",
    image: "/articles/beneficios_do_perfume_natural/imagem-artigo-4.png",
    imageAlt: "Frasco de perfume natural MarLuaSol entre flores e matérias botânicas",
    imageAspectRatio: "1086 / 1448",
    imagePosition: "center 42%",
    portraitImage: true,
    sections: [
      {
        paragraphs: [
          "Quando pensamos em perfume, normalmente pensamos primeiro no aroma que queremos deixar na pele. Mas a perfumaria natural propõe uma experiência um pouco diferente: antes de criar um cheiro, ela começa pelas plantas. Flores, folhas, cascas, raízes, madeiras, sementes e resinas dão origem a matérias-primas aromáticas como óleos essenciais, tinturas e extratos botânicos.",
          "Na MarLuaSol, os perfumes são elaborados exclusivamente com matérias-primas de origem natural, buscando preservar essa relação entre planta, aroma e experiência olfativa.",
        ],
      },
      {
        title: "O que é um perfume natural?",
        paragraphs: [
          "Um perfume natural é elaborado a partir de matérias-primas aromáticas obtidas de fontes naturais. Os óleos essenciais, por exemplo, são concentrados aromáticos extraídos de diferentes partes das plantas. Dependendo da espécie, o aroma pode estar presente nas flores, folhas, cascas dos frutos, madeiras, raízes ou resinas.",
          "Na perfumaria natural também podem ser utilizadas tinturas botânicas, resinas, absolutos e outros tipos de extratos. Isso significa que, ao sentir um perfume natural, não estamos apenas diante da reprodução de um cheiro: sentimos uma composição criada a partir de diversas moléculas aromáticas naturalmente presentes nas plantas.",
          "Uma das características mais interessantes da perfumaria natural é a complexidade das plantas. Cada uma é formada por inúmeros compostos aromáticos que, juntos, criam nuances florais, verdes, cítricas, doces, balsâmicas, amadeiradas ou terrosas. Por isso, o perfume natural pode revelar diferentes aspectos conforme permanece sobre a pele. É uma experiência olfativa que convida a perceber os detalhes.",
        ],
      },
      {
        title: "O perfume natural se transforma na pele",
        paragraphs: [
          "O perfume natural não precisa permanecer exatamente igual desde a primeira borrifada até o final do dia. Ele se transforma, é vivo porque é feito de seres vivos, ao contrário de matérias-primas sintéticas.",
          "As notas mais voláteis aparecem primeiro. Aos poucos, outras matérias-primas começam a se revelar, enquanto algumas desaparecem e outras permanecem. Temperatura, pele, clima e composição também interferem na maneira como percebemos um perfume. Essa transformação faz parte de sua beleza.",
          "Em vez de buscar um aroma estático, a perfumaria natural permite acompanhar a evolução do perfume ao longo do tempo. É quase como observar uma paisagem mudar durante o dia.",
        ],
      },
      {
        title: "E a fixação?",
        paragraphs: [
          "Estamos acostumados a avaliar perfumes pela pergunta: quanto tempo ele fixa? Mas duração não é o único critério de qualidade de um perfume.",
          "Na perfumaria natural, a fixação é construída pela própria composição aromática. Madeiras, raízes, resinas e outras matérias-primas menos voláteis podem permanecer por mais tempo na pele e dar sustentação às notas mais leves. Ainda assim, um perfume natural pode apresentar uma evolução diferente de muitas composições sintéticas. Ele pode se aproximar da pele, reaparecer em determinados momentos e revelar novas nuances conforme as horas passam.",
          "Mais do que procurar apenas intensidade, a perfumaria natural convida a desenvolver a percepção olfativa da natureza real, e não de um aroma artificial criado em laboratório para imitar algo que nosso corpo não reconhece como verdadeiro. Apenas aromas naturais possuem sinergia conosco e ajudam a regular o sistema límbico.",
        ],
      },
      {
        title: "Aroma, memória e presença",
        paragraphs: [
          "O olfato possui uma relação especialmente próxima com nossas memórias e emoções. Um aroma pode nos lembrar uma pessoa, uma casa, uma viagem, uma floresta, um jardim ou determinada fase da vida. Quem nunca sentiu um cheiro e imediatamente se lembrou de algo que parecia esquecido? É justamente essa capacidade que torna o perfume tão íntimo.",
          "Na MarLuaSol, gostamos de pensar no perfume como parte de um pequeno ritual cotidiano. Escolher um aroma pela manhã, borrifá-lo sobre a pele e percebê-lo durante alguns segundos pode ser uma forma simples de trazer atenção para aquele momento.",
          "O perfume deixa de ser apenas algo que usamos para que outras pessoas sintam. Ele também pode ser algo que usamos para nós mesmas.",
        ],
      },
      {
        title: "Quais são as plantas utilizadas nos perfumes?",
        paragraphs: [
          "Uma das propostas da perfumaria natural é aproximar quem usa o perfume das matérias-primas que fazem parte dele. Você já deve conhecer a maioria das plantas abaixo. Consegue se lembrar de seu cheiro natural?",
        ],
        items: ["Bergamota", "Alecrim", "Lavanda", "Vetiver", "Cedro", "Rosa", "Olíbano", "Canela", "Ylang-ylang", "Cravo", "Junípero", "Capim-limão", "Gerânio"],
      },
      {
        paragraphs: [
          "São plantas, flores, raízes, madeiras, cascas e resinas que existem na natureza. Conhecer essas matérias-primas muda a maneira como sentimos o perfume.",
          "Pouco a pouco, começamos também a educar o olfato. Passamos a reconhecer uma nota cítrica, uma madeira, uma resina ou uma flor. Perfumar-se pode se transformar também em uma forma de descobrir o universo das plantas aromáticas.",
        ],
      },
      {
        title: "Perfume natural × perfume sintético",
        paragraphs: [
          "Nenhum perfume precisa ser definido simplesmente como bom ou ruim por ser natural ou sintético. São formas diferentes de construir uma composição aromática. A principal diferença está na origem das matérias-primas e, consequentemente, na experiência olfativa que cada abordagem pode proporcionar.",
        ],
        comparison: [
          { natural: "Elaborado com matérias-primas aromáticas de origem natural", synthetic: "Utiliza moléculas produzidas em laboratório" },
          { natural: "Utiliza óleos essenciais, extratos, resinas, tinturas e outras matérias-primas naturais", synthetic: "Permite uma variedade de moléculas aromáticas sintéticas que existem ou não na natureza" },
          { natural: "As matérias-primas apresentam naturalmente grande complexidade molecular e energética", synthetic: "As moléculas podem ser manipuladas e combinadas de maneira altamente controlada" },
          { natural: "Pode apresentar pequenas variações naturais entre matérias-primas e safras", synthetic: "Possibilita maior padronização entre diferentes produções" },
          { natural: "Costuma evoluir e revelar diferentes nuances sobre a pele", synthetic: "Apresenta grande estabilidade, projeção aromática forte e expansiva" },
          { natural: "Sua fixação é construída pela própria arquitetura das matérias-primas naturais", synthetic: "Usa diferentes recursos para aumentar estabilidade, difusão e duração, como óleos, substâncias sintéticas e petrolatos" },
          { natural: "Aproxima quem usa o perfume dos aromas encontrados nas plantas", synthetic: "Permite criar aromas que não existem diretamente na natureza" },
          { natural: "Valoriza a origem botânica das matérias-primas e seus significados", synthetic: "Valoriza principalmente a performance da composição aromática" },
        ],
      },
      {
        paragraphs: [
          "Escolher a perfumaria natural significa escolher uma determinada maneira de se relacionar com o perfume. É saber que um perfume não precisa dominar um ambiente para ser percebido — e que sentir também pode exigir atenção.",
          "Para quem procura essa experiência, o perfume natural oferece algo muito particular: a possibilidade de sentir as plantas sobre a pele.",
        ],
      },
      {
        title: "Natural também exige responsabilidade",
        paragraphs: [
          "Existe uma ideia equivocada de que tudo aquilo que é natural é automaticamente inofensivo. Não é. Óleos essenciais são substâncias altamente concentradas, e algumas matérias-primas possuem restrições de concentração e sensibilização. Por isso, a perfumaria natural responsável exige conhecimento das matérias-primas, diluição adequada, formulação consciente e respeito às recomendações de segurança. Naturalidade e responsabilidade precisam caminhar juntas.",
          "Na MarLuaSol, escolhemos trabalhar com perfumes 100% naturais, produzidos artesanalmente e em pequena escala. Nossa matéria-prima começa nas plantas, com estudo, certificação com perfumistas experientes, conhecimento dos padrões internacionais de diluição de compostos e das leis da Anvisa para comercialização de perfume natural.",
          "Utilizamos óleos essenciais, tinturas botânicas e outros materiais naturais combinados para criar perfumes inspirados na natureza, nas mitologias femininas e nos diferentes estados que atravessam nossa vida.",
          "Não buscamos reproduzir a perfumaria convencional. Buscamos outra experiência: uma perfumaria mais próxima das plantas, dos sentidos e do tempo presente. Perfumes feitos somente de plantas. A natureza perfumando a sua pele.",
        ],
      },
    ],
  },
};
