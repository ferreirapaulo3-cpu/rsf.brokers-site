// Central data source for RSF | Brokers site
// All content is original and curated from the brand specification.

export const site = {
  name: "RSF | Brokers",
  tagline: "Negócios Seguros",
  responsible: "Sérgio Fernandes",
  founded: "Junho de 2009",
  address: {
    line1: "Rua Garcia de Orta, N.º 30, Loja A",
    postalCode: "2720-252",
    city: "Damaia, Amadora",
    country: "Portugal",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Garcia+de+Orta+30+2720-252+Damaia+Amadora",
  },
  phones: {
    fixed: "210 106 847",
    fixedHref: "+351210106847",
    mobile: "93 310 09 64",
    mobileHref: "+351933100964",
  },
  email: "rsf.brokers@gmail.com",
  facebook: "https://www.facebook.com/p/RSF-Brokers-Neg%C3%B3cios-Seguros-100057524974999/",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Garcia+de+Orta+30+2720-252+Damaia+Amadora&output=embed",
};

// Âncoras de secção da landing page única (src/app/page.tsx).
export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Seguradoras", href: "#seguradoras" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contactos", href: "#contactos" },
];

export const partners = [
  "Allianz Portugal",
  "Generali Tranquilidade",
  "Caravela Seguros",
  "Lusitânia Seguros",
  "Ageas Seguros",
  "Una Seguros",
  "April Seguros",
  "Prévoir Seguros",
  "Saúde Prime",
  "ARAG",
  "Médis",
  "Advance Care",
  "Victoria Seguros",
];

export type PartnerLogo = { src: string; mono?: string; width: number; height: number; maxWidthRem: number };
export const partnerLogos: Record<string, PartnerLogo> = {
  "Allianz Portugal": { src: "/images/seguradoras/allianz.svg", mono: "/images/seguradoras/allianz-mono.svg", width: 300, height: 134, maxWidthRem: 7 },
  "Generali Tranquilidade": { src: "/images/seguradoras/generali-tranquilidade.svg", width: 300, height: 37, maxWidthRem: 14 },
  "Caravela Seguros": { src: "/images/seguradoras/caravela.svg", width: 247, height: 67, maxWidthRem: 9 },
  "Lusitânia Seguros": { src: "/images/seguradoras/lusitania.webp", width: 226, height: 34, maxWidthRem: 9.5 },
  "Ageas Seguros": { src: "/images/seguradoras/ageas.svg", width: 489, height: 167, maxWidthRem: 7.5 },
  "Una Seguros": { src: "/images/seguradoras/una.webp", width: 240, height: 143, maxWidthRem: 5.5 },
  "April Seguros": { src: "/images/seguradoras/april.svg", width: 112, height: 26, maxWidthRem: 8 },
  "Prévoir Seguros": { src: "/images/seguradoras/prevoir.webp", width: 320, height: 118, maxWidthRem: 9 },
  "Saúde Prime": { src: "/images/seguradoras/saude-prime.webp", width: 400, height: 88, maxWidthRem: 11 },
  "ARAG": { src: "/images/seguradoras/arag.webp", mono: "/images/seguradoras/arag-mono.webp", width: 128, height: 128, maxWidthRem: 3.5 },
  "Médis": { src: "/images/seguradoras/medis.svg", mono: "/images/seguradoras/medis-mono.svg", width: 132, height: 88, maxWidthRem: 4.5 },
  "Advance Care": { src: "/images/seguradoras/advancecare.svg", width: 1024, height: 256, maxWidthRem: 9 },
  "Victoria Seguros": { src: "/images/seguradoras/victoria.webp", width: 320, height: 34, maxWidthRem: 9.5 },
};

// Avaliações reais do Google (texto e autor mantidos tal como publicados).
export const googleRating = { value: 4.9, count: 30 };
export const googleReviewsUrl =
  "https://www.google.com/maps/place/R.+Garcia+de+Orta+30,+Damaia,+2720-172+Amadora/@38.749019,-9.210936,17z/data=!3m1!4b1!4m6!3m5!1s0xd1eccdff46ed75b:0xfec7d80b6bd9d8d0!8m2!3d38.749019!4d-9.210936!16s%2Fg%2F11c1xt5dj1?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

export const googleReviews = [
  {
    author: "Rute Novais",
    text: "Rigoroso, sempre disponível para ajudar a esclarecer questões e agilizar contactos para resolver as situações. Total confiança,",
    rating: 5,
  },
  {
    author: "Centenário",
    text: "Trabalho com eles a mas de 10 anos, sempre prestativos e prontos a mudar e tentam sempre os melhores preços.",
    rating: 5,
  },
  {
    author: "Lucia Pineu",
    text: "Muito satisfeita. Muito prestável e profissional.",
    rating: 5,
  },
  {
    author: "Vasco Nobre",
    text: "Sempre disponível e com soluções. Muito satisfeito!",
    rating: 5,
  },
  {
    author: "João Setas",
    text: "É um prazer enorme trabalhar em conjunto com a RSF Brockers, ainda mais quando o 'homem do leme' - Ramiro Sérgio Fernandes - é de um profissionalismo, seriedade e simpatia ímpares. Estás no bom caminho, continuamos juntos nesta caminhada.",
    rating: 5,
  },
  {
    author: "Victor Voctor",
    text: "Estou muito satisfeito!!! Obrigado",
    rating: 5,
  },
];

export const insuranceTypes = [
  "Automóvel",
  "Motas",
  "Multirriscos habitação",
  "Multirriscos condomínio",
  "Acidentes de trabalho",
  "Responsabilidade civil",
  "Proteção criança",
  "SafePet",
  "Acidentes pessoais",
  "Planos de saúde",
  "Plano dentário",
  "Vida risco",
  "Vida crédito habitação",
  "Vida misto",
  "PPR",
  "Seguro viagem",
  "Seguro empresas",
  "Outro / não sei",
];
