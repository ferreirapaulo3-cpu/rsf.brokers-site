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
  facebook: "https://www.facebook.com/profile.php?id=100057524974999",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Garcia+de+Orta+30+2720-252+Damaia+Amadora&output=embed",
};

export const nav = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Seguros", href: "/seguros" },
  { label: "Crédito habitação", href: "/seguro-vida-credito-habitacao" },
  { label: "Pedir orçamento", href: "/pedir-orcamento" },
  { label: "Contacto", href: "/contacto" },
  { label: "FAQ", href: "/faq" },
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
  "Una Seguros": { src: "/images/seguradoras/una.webp", width: 372, height: 222, maxWidthRem: 5.5 },
  "April Seguros": { src: "/images/seguradoras/april.svg", width: 112, height: 26, maxWidthRem: 8 },
  "Prévoir Seguros": { src: "/images/seguradoras/prevoir.webp", width: 900, height: 332, maxWidthRem: 9 },
  "Saúde Prime": { src: "/images/seguradoras/saude-prime.webp", width: 900, height: 198, maxWidthRem: 11 },
  "ARAG": { src: "/images/seguradoras/arag.webp", mono: "/images/seguradoras/arag-mono.webp", width: 589, height: 589, maxWidthRem: 3.5 },
  "Médis": { src: "/images/seguradoras/medis.svg", mono: "/images/seguradoras/medis-mono.svg", width: 132, height: 88, maxWidthRem: 4.5 },
  "Advance Care": { src: "/images/seguradoras/advancecare.svg", width: 1024, height: 256, maxWidthRem: 9 },
  "Victoria Seguros": { src: "/images/seguradoras/victoria.webp", width: 900, height: 95, maxWidthRem: 9.5 },
};

export type Insurance = {
  slug: string;
  name: string;
  short: string;
  description: string;
  category: "Particulares" | "Empresas" | "Saúde e proteção" | "Veículos e lazer";
  href: string;
  hasDetailPage?: boolean;
};

/**
 * Builds a link to the quote form with a specific insurance type pre-selected.
 * `type` must be one of `insuranceTypes` below — the form matches it exactly
 * against that list to decide what the Select shows as selected.
 */
function quoteHref(type: string): string {
  return `/pedir-orcamento?tipo=${encodeURIComponent(type)}`;
}

export const insurances: Insurance[] = [
  // Particulares
  { slug: "automovel", name: "Automóvel", short: "Particulares", description: "Cobertura para o seu carro: responsabilidade civil, danos próprios, vidros e assistência.", category: "Particulares", href: "/seguros/automovel", hasDetailPage: true },
  { slug: "motas", name: "Motas", short: "Particulares", description: "Proteção para motociclos, scooters e veículos de duas rodas.", category: "Particulares", href: quoteHref("Motas") },
  { slug: "multirriscos-habitacao", name: "Multirriscos habitação", short: "Paredes e recheio", description: "Cobertura para a sua casa: paredes, recheio, responsabilidade civil e extras.", category: "Particulares", href: "/seguros/habitacao", hasDetailPage: true },
  { slug: "multirriscos-condominio", name: "Multirriscos condomínio", short: "Particulares", description: "Proteção integral para prédios e frações em condomínio.", category: "Particulares", href: quoteHref("Multirriscos condomínio") },
  { slug: "acidentes-trabalho-part", name: "Acidentes de trabalho", short: "Particulares", description: "Cobertura obrigatória para trabalhadores independentes e domésticos.", category: "Particulares", href: "/seguros/acidentes-trabalho", hasDetailPage: true },
  { slug: "acidentes-trabalho-domestica", name: "AT — empregada doméstica", short: "Particulares", description: "Seguro obrigatório para trabalhador doméstico ao seu serviço.", category: "Particulares", href: quoteHref("Acidentes de trabalho") },
  { slug: "protecao-crianca", name: "Proteção criança", short: "Particulares", description: "Proteção financeira e de saúde para os mais novos em caso de acidente ou doença.", category: "Particulares", href: quoteHref("Proteção criança") },
  { slug: "rc-familiar", name: "Responsabilidade civil Familiar", short: "Particulares", description: "Cobertura para danos causados a terceiros pela sua família no dia-a-dia.", category: "Particulares", href: "/seguros/responsabilidade-civil", hasDetailPage: true },
  { slug: "rc-animais", name: "Responsabilidade civil Animais", short: "Particulares", description: "Proteção para danos causados pelos seus animais de companhia.", category: "Particulares", href: quoteHref("Responsabilidade civil") },
  { slug: "safepet", name: "SafePet", short: "Saúde animal", description: "Seguro de saúde para animais de companhia: consultas, cirurgias e internamento.", category: "Saúde e proteção", href: quoteHref("SafePet") },
  { slug: "acidentes-pessoais", name: "Acidentes pessoais", short: "Particulares", description: "Capital por morte, invalidez e despesas de tratamento em caso de acidente.", category: "Particulares", href: quoteHref("Acidentes pessoais") },
  { slug: "planos-saude", name: "Planos de saúde", short: "Saúde", description: "Rede de hospitais e clínicas, sem limites de região, para si e para a família.", category: "Saúde e proteção", href: "/seguros/saude", hasDetailPage: true },
  { slug: "saude-dentario", name: "Plano de saúde dentário", short: "Saúde", description: "Cobertura específica para tratamentos e consultas de medicina dentária.", category: "Saúde e proteção", href: quoteHref("Plano dentário") },
  { slug: "vida-risco", name: "Seguro de vida risco", short: "Vida", description: "Proteção financeira da família em caso de falecimento do segurado.", category: "Particulares", href: quoteHref("Vida risco") },
  { slug: "vida-credito-habitacao", name: "Vida para crédito habitação", short: "Vida", description: "Seguro de vida individual associado ao empréstimo da habitação.", category: "Particulares", href: "/seguro-vida-credito-habitacao", hasDetailPage: true },
  { slug: "vida-misto", name: "Seguro de vida misto", short: "Vida", description: "Combina garantia de morte com componente de poupança acumulada.", category: "Particulares", href: quoteHref("Vida misto") },
  { slug: "ppr", name: "Planos de poupança / PPR", short: "Poupança", description: "Construir uma poupança para a reforma com benefícios fiscais.", category: "Particulares", href: quoteHref("PPR") },
  { slug: "viagem", name: "Seguros de Viagem", short: "Viagem", description: "Assistência em viagem, despesas médicas e cancelamento.", category: "Veículos e lazer", href: "/seguros/viagem", hasDetailPage: true },
  { slug: "caca", name: "Seguros de Caça", short: "Lazer", description: "Responsabilidade civil específica para praticantes de caça.", category: "Veículos e lazer", href: quoteHref("Outro / não sei") },
  { slug: "embarcacoes-recreio", name: "Embarcações de recreio", short: "Lazer", description: "Cobertura para barcos de recreio, jet-skis e desportos náuticos.", category: "Veículos e lazer", href: quoteHref("Outro / não sei") },

  // Empresas
  { slug: "automovel-empresa", name: "Automóvel de empresa", short: "Empresas", description: "Frotas e veículos comerciais com condições adaptadas ao negócio.", category: "Empresas", href: "/seguros/empresas", hasDetailPage: true },
  { slug: "acidentes-trabalho-emp", name: "Acidentes de trabalho", short: "Empresas", description: "Cobertura obrigatória para trabalhadores por conta de outrem.", category: "Empresas", href: "/seguros/acidentes-trabalho", hasDetailPage: true },
  { slug: "rc-empresa", name: "Responsabilidade civil", short: "Empresas", description: "Proteção da atividade empresarial perante terceiros.", category: "Empresas", href: "/seguros/responsabilidade-civil", hasDetailPage: true },
  { slug: "multirriscos-empresarial", name: "Multirriscos empresarial", short: "Empresas", description: "Edifício, equipamento, stocks e perdas de exploração em único contrato.", category: "Empresas", href: "/seguros/empresas", hasDetailPage: true },
];

export const testimonials = [
  {
    text: "Excelente profissional na mediação de seguros. Depois de ouvir o que o cliente pretende, analisa as várias alternativas nas seguradoras e sugere o seguro mais adequado preço/serviço.",
    author: "Maria Cruz",
    date: "21 de março de 2019",
    source: "Testemunho recolhido pelo mediador",
  },
];

// Avaliações reais do Google (texto e autor mantidos tal como publicados).
export const googleRating = { value: 4.8, count: 26 };
export const googleReviewsUrl =
  "https://www.google.com/maps/place/R.+Garcia+de+Orta+30,+Damaia,+2720-172+Amadora/@38.749019,-9.210936,17z/data=!3m1!4b1!4m6!3m5!1s0xd1eccdff46ed75b:0xfec7d80b6bd9d8d0!8m2!3d38.749019!4d-9.210936!16s%2Fg%2F11c1xt5dj1?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

export const googleReviews = [
  {
    author: "Centenário. Dep Financeiro Faturação",
    text: "Trabalho com eles a mas de 10 anos , sempre prestativos e prontos a mudar e tentam sempre os melhores preços.",
    rating: 5,
  },
  {
    author: "Rui Almeida",
    text: "Este homem não falha! A qualquer hora atende e resolve tudo. Á mais de 20 anos que confio nele. É de confiança!",
    rating: 5,
  },
  {
    author: "Gonçalo Santa Bárbara",
    text: "Sempre transparente, simpatia e acima de tudo dedicado na resolução dos assuntos!",
    rating: 5,
  },
  {
    author: "Susana Felizardo",
    text: "Sempre fui muito bem atendida! Recomendo os serviços 😝…",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Como pedir um orçamento?",
    a: "Pode pedir através do formulário na página Pedir orçamento, por telefone, por email ou diretamente na loja. Em qualquer canal, a análise é gratuita e sem compromisso. Recolhemos as informações necessárias sobre o risco a segurar, comparamos propostas entre as seguradoras com que trabalhamos e enviamos uma recomendação clara por escrito.",
  },
  {
    q: "Com que seguradoras trabalham?",
    a: "A RSF | Brokers é mediador multimarca. Trabalhámos ou já trabalhámos com Allianz Portugal, Generali Tranquilidade, Caravela Seguros, Lusitânia Seguros, Ageas Seguros, Una Seguros, April Seguros, Prévoir Seguros, Saúde Prime, ARAG, Médis, Advance Care e Victoria Seguros. A disponibilidade atual de cada seguradora para cada ramo deve ser confirmada caso a caso antes da publicação de qualquer proposta.",
  },
  {
    q: "É possível mudar de mediador mantendo o mesmo seguro?",
    a: "Sim. A nomeação do mediador pode ser alterada em qualquer altura, mantendo o mesmo contrato de seguro, as mesmas coberturas e o mesmo prémio. O processo é simples: assina um documento de nomeação e o novo mediador trata da comunicação à seguradora. Não há penalizações nem mudança de coberturas.",
  },
  {
    q: "O seguro de vida do crédito habitação tem de ser contratado no banco?",
    a: "Não. O cliente pode escolher livremente onde contratar o seguro de vida associado ao crédito habitação. A lei portuguesa permite ao titular do empréstimo subscrever o seguro junto da entidade que entender, desde que apresente ao banco as garantias equivalentes. A RSF | Brokers atua na defesa dos interesses do cliente neste processo.",
  },
  {
    q: "Como funciona a simulação de seguro de vida para crédito habitação?",
    a: "Recolhemos os dados essenciais (idade, capital em dívida, profissão, histórico de saúde relevante) e solicitamos simulações junto das seguradoras. Para capital em dívida inferior a 300.000€, é habitual dispensar exames médicos, conforme informação fornecida pela seguradora. Apresentamos as opções comparadas, com prémio, coberturas e condições, para o cliente decidir.",
  },
  {
    q: "Como acionar um sinistro?",
    a: "Contacte-nos o mais rapidamente possível por telefone ou email com a descrição do acontecimento. Orientamos o registo do sinistro na seguradora, indicamos a documentação necessária e acompanhamos todo o processo até ao encerramento. Em caso de sinistro automóvel, prepare ainda fotografias do local, identificação dos intervenientes e testemunhas.",
  },
  {
    q: "Que documentos são necessários para pedir um seguro?",
    a: "Depende do ramo. Em geral: documento de identificação do segurado e do beneficiário, dados do bem a segurar (matrícula, número fiscal de imóvel, etc.), mapa de sinistralidade anterior quando aplicável e, no caso de seguros de saúde, declaração de saúde. Em cada caso concreto indicamos os documentos exatos.",
  },
  {
    q: "Que ramos estão disponíveis para empresas?",
    a: "Seguro automóvel de empresa, acidentes de trabalho, responsabilidade civil, multirriscos empresarial e outros ramos mediante análise (saúde grupo, RC profissional, ciber-risco, transporte de mercadorias). Apresentamos propostas de várias seguradoras adaptadas à atividade, dimensão e risco específico da empresa.",
  },
];

export const valueProps = [
  {
    title: "Análise das necessidades",
    description:
      "Antes de comparar preços, procuramos perceber o que precisa de proteger. Sem isso não há recomendação que valha.",
  },
  {
    title: "Comparação entre várias seguradoras",
    description:
      "Como mediadores multimarca, recolhemos propostas de várias companhias e apresentamos-as lado a lado, sem preferência comercial.",
  },
  {
    title: "Recomendação equilibrada",
    description:
      "Não escolhemos só pelo preço. Pesam coberturas, franquias, exclusões e qualidade do serviço em sinistro.",
  },
  {
    title: "Apoio na contratação",
    description:
      "Tratamos do preenchimento das declarações, da comunicação à seguradora e da entrega das apólices e certificados.",
  },
  {
    title: "Gestão de contactos com as companhias",
    description:
      "Renovações, alterações, averbamentos e pedidos de esclarecimento — falamos com a seguradora por si.",
  },
  {
    title: "Acompanhamento em caso de sinistro",
    description:
      "Acompanhamos o registo do sinistro, os contactos com o segurador e a liquidação da indemnização.",
  },
  {
    title: "Defesa dos interesses do segurado",
    description:
      "Em situações de discordância com a seguradora, representamos o cliente e sustentamos a sua posição.",
  },
  {
    title: "Alterar de mediador sem perder o seguro",
    description:
      "Pode nomear a RSF | Brokers como mediadora dos seus contratos atuais, mantendo coberturas e prémio.",
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
