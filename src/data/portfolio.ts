export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const portfolio = {
  person: {
    name: "Guilherme dos Santos",
    shortName: "Guilherme Santos",
    role: "Software Engineer | Full Stack Developer",
    location: "Osasco, São Paulo, Brasil",
    email: "guil_stay@hotmail.com",
    linkedin: "https://www.linkedin.com/in/guilherme-bds",
    github: "",
    availability: "Aberto a boas conversas e oportunidades",
    intro:
      "Sou um engenheiro de software que gosta de construir, experimentar e entender como as coisas funcionam — dentro e fora do trabalho.",
  },
  about: {
    lead: "Transformo regras de negócio complexas em software confiável.",
    paragraphs: [
      "Minha trajetória combina desenvolvimento full stack e visão de produto, com foco recente no mercado financeiro. Trabalho em sistemas de crédito e garantias, integrações com serviços externos, microsserviços e fluxos orientados a eventos.",
      "Sou bacharel em Ciência da Computação pela Universidade São Judas Tadeu. No dia a dia, busco equilibrar arquitetura, clareza de código e entendimento do negócio para construir soluções que continuem sustentáveis à medida que evoluem.",
    ],
  },
  skills: [
    { category: "Backend", items: ["C#", ".NET", "Java", "Spring Boot", "REST APIs", "Microsserviços"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Material UI", "Tailwind CSS"] },
    { category: "Dados", items: ["PostgreSQL", "Oracle", "SQL"] },
    { category: "Mensageria", items: ["RabbitMQ", "Apache Kafka"] },
    { category: "Cloud & DevOps", items: ["AWS", "ECS", "CloudWatch", "Docker", "Git", "CI/CD", "Linux"] },
  ],
  experiences: [
    {
      company: "Genial Investimentos",
      role: "Software Engineer | Prestador de Serviços",
      period: "jan 2025 — atual",
      summary: "Atuação no desenvolvimento e evolução de soluções de crédito e serviços financeiros na Genial Investimentos, com foco em microsserviços, integrações com sistemas externos e arquiteturas orientadas a eventos. Desenvolvimento de APIs e aplicações backend e frontend, utilizando .NET, Java, React, Oracle, PostgreSQL, RabbitMQ, Kafka e AWS.",
      highlights: [
        "Atuação como prestador de serviços, sem vínculo empregatício direto com a instituição.",
        "Desenvolvimento backend e frontend em um contexto de sistemas financeiros.",
      ],
      technologies: [".NET", "Java", "React", "Oracle", "PostgreSQL", "RabbitMQ", "Kafka", "AWS"],
    },
    {
      company: "Nobli",
      role: "Full Stack Software Developer",
      period: "mai 2020 — dez 2024",
      summary: "Construção e evolução de uma plataforma de crédito com garantia de investimentos.",
      highlights: [
        "Atuação na arquitetura e construção do frontend e backend.",
        "Desenvolvimento de motor de risco para análise de ativos e definição automática de limites.",
        "Integrações financeiras e otimizações de banco de dados.",
      ],
      technologies: [".NET", "Java", "React", "SQL", "APIs"],
    },
    {
      company: "cromAI",
      role: "Software Developer",
      period: "ago 2018 — abr 2020",
      summary: "Soluções web e ferramentas internas para inteligência artificial aplicada ao agronegócio.",
      highlights: [
        "Visualização interativa de imagens georreferenciadas e resultados de análises de IA.",
        "Ferramenta em Go com processamento paralelo para preparação de datasets.",
      ],
      technologies: ["Go", "Web", "TIFF", "Processamento paralelo", "IA"],
    },
    {
      company: "CNT Log e-Commerce Logistics",
      role: "Development Intern",
      period: "fev 2018 — ago 2018",
      summary: "Desenvolvimento de ferramentas de estoque e uma plataforma de acompanhamento de encomendas.",
      highlights: [],
      technologies: ["Java", "Spring MVC", "Web"],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: "Smart Presente",
      label: "Produto digital",
      status: "Projeto em produção",
      description: "Plataforma de recomendações personalizadas de presentes, desenvolvida em parceria, com foco em facilitar a escolha do presente ideal por meio de tecnologia, inteligência artificial e automação.",
      context: "Uma iniciativa empreendedora e uma experiência prática de desenvolvimento e manutenção de produto digital.",
      technologies: ["Next.js", "Inteligência Artificial"],
      technologyStatus: "Confirmar no repositório as tecnologias de backend, dados, automação e infraestrutura antes de adicioná-las.",
      image: "/smart-presente-home.png",
      imageAlt: "Página inicial do Smart Presente em produção",
      url: "https://smartpresente.com.br",
    },
  ],
  futureProjects: ["Pesquisa Facilitada", "Projetos pessoais", "Experimentos técnicos", "Aplicações open source"],
  beyondCode: {
    title: "Além do código.",
    subtitle: "Antes de construir sistemas, eu já gostava de entender como eles funcionavam.",
    cards: [
      {
        kicker: "16 anos",
        title: "Onde tudo começou",
        text: "Meu interesse por tecnologia começou cedo. Aos 16 anos, tive meu próprio servidor de Ragnarok Online. Entre jogos, servidores e comunidades online, comecei a explorar um universo que despertou ainda mais minha curiosidade por tecnologia.",
      },
      {
        kicker: "Games & Tecnologia",
        title: "Curiosidade em movimento",
        text: "Jogos e experiências digitais continuam entre os meus interesses. Gosto de observar como sistemas, regras e interfaces se combinam para criar algo que prende a atenção e convida à descoberta.",
      },
      {
        kicker: "Projetos paralelos",
        title: "Sempre construindo",
        text: "Fora do trabalho, continuo experimentando tecnologias e transformando ideias em produtos reais. O Smart Presente é uma dessas experiências: construir, publicar, manter e aprender com o produto em uso.",
      },
    ],
    timeline: [
      { marker: "Aos 16 anos", title: "Primeiro servidor", text: "Uma experiência com Ragnarok Online transforma curiosidade em algo prático." },
      { marker: "Formação", title: "Ciência da Computação", text: "A curiosidade ganha fundamentos no bacharelado pela Universidade São Judas Tadeu." },
      { marker: "Carreira", title: "Software e finanças", text: "Desenvolvimento full stack, sistemas financeiros e integrações passam a fazer parte do cotidiano." },
      { marker: "Atualmente", title: "Engenharia e produtos", text: "Atuação como Software Engineer e desenvolvimento de projetos autorais, incluindo o Smart Presente." },
    ],
  },
  principles: [
    { title: "Arquitetura que evolui", text: "Decisões proporcionais ao problema, com fronteiras claras e espaço para mudança." },
    { title: "Código para pessoas", text: "Legibilidade, testes e manutenção como parte do produto — não como acabamento." },
    { title: "Operação observável", text: "Performance, logs e sinais úteis desde o desenho, especialmente em fluxos críticos." },
    { title: "Integrações resilientes", text: "Contratos explícitos, idempotência e tolerância a falhas em sistemas distribuídos." },
    { title: "Segurança por padrão", text: "Menor privilégio, proteção de dados e confiança conquistada em cada camada." },
    { title: "Entrega contínua", text: "Automação para reduzir risco, encurtar feedback e tornar releases previsíveis." },
  ],
} as const;

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Além", href: "#alem-do-codigo" },
  { label: "Contato", href: "#contato" },
] as const;
