export type ProductHighlight = {
  title: string;
  ingredients?: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  family: string;
  tagline: string;
  introduction: string;
  composition: string;
  highlightsTitle: string;
  highlights: ProductHighlight[];
  mythologyTitle: string;
  mythology: string[];
  volume: string;
  liquid: string;
  material: string;
  packaging: string;
  price: string;
  listImage: string;
  listImageAlt: string;
  gallery: Array<{ src: string; alt: string }>;
};

export const products: Product[] = [
  {
    slug: "rosa-vermelha",
    name: "Rosa Vermelha",
    family: "Floral doce",
    tagline: "A essência da força feminina",
    introduction:
      "Inspirado na força ancestral feminina, nas encruzilhadas da vida e na capacidade de transformação, Rosa Vermelha celebra a liberdade, a sensualidade e o poder de ser quem se é.",
    composition:
      "Álcool de cereais, extrato botânico natural de rosas vermelhas, cravos e morangos, óleos essenciais de bergamota, lavanda, baunilha, rosa damascena, olíbano e cedro.",
    highlightsTitle: "Composição aromática",
    highlights: [
      {
        title: "Notas de saída",
        ingredients: "Bergamota FCF e morango",
        description:
          "Uma abertura luminosa e frutada, que combina o frescor cítrico da bergamota à delicadeza adocicada do morango.",
      },
      {
        title: "Notas de coração",
        ingredients: "Rosa vermelha, rosa damascena, cravo e lavanda",
        description:
          "Um coração floral intenso e aveludado, enriquecido pelo calor especiado do cravo e pela suavidade aromática da lavanda.",
      },
      {
        title: "Notas de fundo",
        ingredients: "Baunilha, olíbano e cedro",
        description:
          "Uma base doce, resinosa e amadeirada, que envolve a fragrância em profundidade, calor e elegância.",
      },
    ],
    mythologyTitle: "A força feminina que inspira o perfume",
    mythology: [
      "Sua inspiração nasce da simbologia de Pambu-ia-njila, divindade de origem bantu associada aos caminhos, às encruzilhadas e ao movimento da vida. Essa força ancestral encontra, nas tradições espirituais brasileiras, diferentes expressões e significados, entre eles o universo simbólico das Pombagiras.",
      "Entre essas figuras, Maria Padilha é a principal inspiração deste perfume. Muito mais do que uma bela mulher, sua trajetória atravessou os séculos envolta em paixão, poder e mistério, tornando-se símbolo de uma autoridade que não se limita às convenções de seu tempo.",
      "As rosas vermelhas revelam sensualidade e também seus espinhos. O cravo e a baunilha envolvem a composição em calor e doçura, a bergamota traz otimismo, e o olíbano e o cedro conferem profundidade. Um perfume para celebrar a mulher que floresce quando honra sua própria natureza.",
    ],
    volume: "30 ml",
    liquid: "Avermelhado",
    material: "Vidro redondo, tampa prata com rosa",
    packaging: "Saco de linho bordado com flores",
    price: "R$ 200,00",
    listImage: "/products/rosa_vermelha.png",
    listImageAlt: "Perfume Rosa Vermelha com rosa e elementos botânicos",
    gallery: [
      {
        src: "/products/rosa-vermelha/galeria-1.png",
        alt: "Frasco do perfume Rosa Vermelha com rosas e canela",
      },
      {
        src: "/products/rosa-vermelha/galeria-2.png",
        alt: "Perfume Rosa Vermelha em composição botânica",
      },
      {
        src: "/products/rosa-vermelha/galeria-3.jpg",
        alt: "Detalhes do perfume natural Rosa Vermelha",
      },
    ],
  },
  {
    slug: "lakshmi",
    name: "Lakshmi",
    family: "Fresca",
    tagline: "Leveza, coragem, foco e disposição para a ação",
    introduction:
      "Inspirado na deusa hindu da prosperidade e da abundância, Lakshmi reúne plantas que evocam clareza, energia e confiança para transformar intenção em movimento.",
    composition:
      "Álcool de cereais e óleos essenciais de bergamota FCF, canela e capim-limão.",
    highlightsTitle: "A função de cada planta no perfume",
    highlights: [
      {
        title: "Canela",
        ingredients: "Prosperidade e direção",
        description:
          "Uma nuance quente e especiada sustenta a composição e dá profundidade ao perfume. Associada à prosperidade, à abundância e à vitalidade, simboliza a força para transformar intenção em movimento.",
      },
      {
        title: "Capim-limão",
        ingredients: "Vitalidade e movimento",
        description:
          "Forma o corpo fresco e verde da fragrância, trazendo vivacidade, leveza e dinamismo. Seu aroma cítrico e herbal evoca clareza, energia e disposição para seguir adiante.",
      },
      {
        title: "Bergamota FCF",
        ingredients: "Luz e abertura de caminhos",
        description:
          "Responsável pela abertura da fragrância, traz brilho, frescor e expansão. Sem furanocumarinas responsáveis pela fotossensibilidade, é uma nota cítrica segura para usar durante o dia.",
      },
    ],
    mythologyTitle: "A prosperidade que inspira o perfume",
    mythology: [
      "Lakshmi significa “objetivo” em sânscrito e representa o objetivo final do universo. Consorte de Vishnu, é geralmente representada com quatro braços voltados às quatro direções, simbolizando que sua energia está em todo lugar.",
      "A deusa é adorada em oito formas, associadas às riquezas da ancestralidade, do dinheiro, dos alimentos, do poder, da família, da paciência, das vitórias e da sabedoria.",
      "Em forma de perfume, essa simbologia se traduz no brilho da bergamota, na energia verde do capim-limão e no calor da canela: uma composição fresca criada para abrir caminhos com leveza e coragem.",
    ],
    volume: "50 ml",
    liquid: "Transparente",
    material: "Vidro redondo ou quadrado, borrifador prata ou dourado",
    packaging: "Saco de linho bordado",
    price: "R$ 250,00",
    listImage: "/products/lakshmi.png",
    listImageAlt: "Perfume Lakshmi entre plantas aromáticas",
    gallery: [
      {
        src: "/products/lakshmi/galeria-1.png",
        alt: "Frasco do perfume natural Lakshmi",
      },
      {
        src: "/products/lakshmi/galeria-2.png",
        alt: "Perfume Lakshmi em cenário botânico",
      },
      {
        src: "/products/lakshmi/galeria-3.png",
        alt: "Composição aromática do perfume Lakshmi",
      },
      {
        src: "/products/lakshmi/galeria-4.png",
        alt: "Detalhe do frasco do perfume Lakshmi",
      },
    ],
  },
  {
    slug: "maca-e-canela",
    name: "Maçã e Canela",
    family: "Frutado doce especiado",
    tagline: "Um convite ao florescimento e à doçura da vida",
    introduction:
      "Inspirado em Coré, a jovem perfumista que colhia flores antes de se tornar a deusa da primavera, este perfume celebra o florescimento, a doçura da vida e a descoberta do próprio caminho.",
    composition:
      "Extrato botânico natural de maçã feito com álcool de cereais e maçãs, óleos essenciais de canela, cravo, junípero e rosa damascena, e óleo essencial de baunilha de Madagascar.",
    highlightsTitle: "Composição aromática",
    highlights: [
      {
        title: "Notas de saída",
        ingredients: "Maçã e junípero",
        description: "Uma abertura frutada, fresca e delicada.",
      },
      {
        title: "Notas de coração",
        ingredients: "Rosa damascena, canela e cravo",
        description:
          "Um coração floral e especiado, porém suave, no qual a delicadeza aveludada das rosas encontra o calor da canela e a autenticidade do cravo.",
      },
      {
        title: "Notas de fundo",
        ingredients: "Baunilha e nuances especiadas",
        description:
          "A baunilha se une às nuances especiadas, proporcionando profundidade e suavidade à fragrância.",
      },
    ],
    mythologyTitle: "O florescimento que inspira o perfume",
    mythology: [
      "Na mitologia grega, Coré significa “donzela”. Filha da deusa da agricultura e da fertilidade da terra, ela é associada à juventude e ao florescimento da natureza antes de sua transformação em Perséfone, rainha do mundo subterrâneo.",
      "Sua história atravessa os ciclos da existência e revela que florescer também significa transformar-se, descobrir novos caminhos e reconhecer a própria força. A maçã traz doçura, a rosa damascena acrescenta delicadeza, a canela e o cravo envolvem a composição em calor, e a baunilha oferece acolhimento.",
      "O resultado é um perfume frutado, doce e suave, com uma nuance verde e silvestre de junípero. Um convite para acolher os novos ciclos da vida e o florescer da primavera.",
    ],
    volume: "25 ml",
    liquid: "Dourado claro",
    material: "Vidro em forma de maçã com tampa dourada",
    packaging: "Saco de linho bordado com flores",
    price: "R$ 150,00",
    listImage: "/products/maca_e_canela.png",
    listImageAlt: "Frasco do perfume Maçã e Canela",
    gallery: [
      {
        src: "/products/maca-e-canela/galeria-1.png",
        alt: "Frasco do perfume natural Maçã e Canela",
      },
      {
        src: "/products/maca-e-canela/galeria-2.png",
        alt: "Perfume Maçã e Canela com ingredientes botânicos",
      },
      {
        src: "/products/maca-e-canela/galeria-3.jpg",
        alt: "Detalhes do perfume Maçã e Canela",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
