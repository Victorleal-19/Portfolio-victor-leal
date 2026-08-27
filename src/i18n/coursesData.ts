export interface Course {
  name: string;
  institution: string;
  year: string;
  tags: string[];
  featured?: boolean;
  cursando?: boolean;
}

export const getCoursesData = (lang: "pt" | "en"): {
  titleMain: string;
  titleHighlight: string;
  subtitle: string;
  inProgressBadge: string;
  featured: Course[];
  regular: Course[];
} => {
  if (lang === "en") {
    return {
      titleMain: "Education &",
      titleHighlight: "Certifications",
      subtitle: "Continuous learning focused on UX Writing, AI, Content Strategy, and Digital Product.",
      inProgressBadge: "In Progress",
      featured: [
        {
          name: "Bachelor's in Journalism",
          institution: "Cruzeiro do Sul University",
          year: "2018 — 2023",
          featured: true,
          tags: ["Journalism", "Communication", "Content", "Storytelling", "Research"],
        },
        {
          name: "English Proficiency",
          institution: "Fluency Academy + CELIN UFU",
          year: "2022 — Present",
          featured: true,
          cursando: true,
          tags: ["English", "Communication", "Languages", "Conversation"],
        },
        {
          name: "UX Writing & Digital Content Certification",
          institution: "Aldeia",
          year: "2022",
          featured: true,
          tags: ["UX Writing", "Content Design", "Microcopy", "UX", "Product"],
        },
      ],
      regular: [
        {
          name: "AI Product Week",
          institution: "PM3",
          year: "2026",
          tags: ["AI", "Product", "Discovery", "Strategy", "Data", "Research"],
        },
        {
          name: "Claude AI: Prompts, Integrations & Automations",
          institution: "IA Portugal",
          year: "2026",
          tags: ["AI", "Prompt Engineering", "Automation", "Claude", "Integrations", "AI Tools"],
        },
        {
          name: "Applying AI in the Workplace",
          institution: "Cubo Academy",
          year: "2026",
          tags: ["AI", "Productivity", "Prompting", "Automation", "Workplace"],
        },
        {
          name: "Prompt Engineering for SEO",
          institution: "Conversion",
          year: "2025",
          tags: ["SEO", "AI", "Prompt Engineering", "Content", "Gemini", "ChatGPT"],
        },
        {
          name: "SEO Summit",
          institution: "Conversion",
          year: "2024",
          tags: ["SEO", "Organic Marketing", "Growth", "Content", "Performance"],
        },
        {
          name: "AI for Marketing",
          institution: "Conversion",
          year: "2024",
          tags: ["AI", "Marketing", "Content", "Automation", "Data"],
        },
        {
          name: "Building Chatbots with BLiP Platform",
          institution: "Udemy",
          year: "2023",
          tags: ["Chatbots", "BLiP", "Conversational AI", "UX", "Automation"],
        },
        {
          name: "Plain Language Certification",
          institution: "Enap",
          year: "2022",
          tags: ["Plain Language", "Accessibility", "Clarity", "Content", "UX Writing"],
        },
        {
          name: "UX Research Certification",
          institution: "Udemy",
          year: "2022",
          tags: ["UX Research", "Research", "User Testing", "Discovery", "Insights"],
        },
        {
          name: "UX Design Program",
          institution: "FIAP",
          year: "2022",
          tags: ["UX Design", "Information Architecture", "Personas", "Prototypes", "Usability"],
        },
        {
          name: "Conversational Design",
          institution: "Domestika",
          year: "2022",
          tags: ["Conversational Design", "Chatbots", "UX Writing", "Conversational UI"],
        },
        {
          name: "Agile Methodologies Certification",
          institution: "FM2S",
          year: "2022",
          tags: ["Agile", "Scrum", "Kanban", "Product", "Methodologies"],
        },
        {
          name: "Copywriting Certification",
          institution: "Rock Content",
          year: "2021",
          tags: ["Copywriting", "Content", "Persuasion", "Marketing", "Writing"],
        },
        {
          name: "Content Marketing Certification",
          institution: "Rock Content",
          year: "2021",
          tags: ["Content Marketing", "SEO", "Strategy", "Content", "Sales Funnel"],
        },
      ]
    };
  }

  return {
    titleMain: "Cursos e",
    titleHighlight: "Especializações",
    subtitle: "Aprendizado contínuo focado em UX Writing, IA, Estratégia de Conteúdo e Produto.",
    inProgressBadge: "Cursando",
    featured: [
      {
        name: "Jornalismo",
        institution: "Universidade Cruzeiro do Sul",
        year: "2018 — 2023",
        featured: true,
        tags: ["Jornalismo", "Comunicação", "Conteúdo", "Storytelling", "Pesquisa"],
      },
      {
        name: "Inglês",
        institution: "Fluency Academy + CELIN UFU",
        year: "2022 — Atual",
        featured: true,
        cursando: true,
        tags: ["Inglês", "Comunicação", "Idiomas", "Conversação"],
      },
      {
        name: "Certificação em UX Writing & Conteúdo Digital",
        institution: "Aldeia",
        year: "2022",
        featured: true,
        tags: ["UX Writing", "Content Design", "Microcopy", "UX", "Produto"],
      },
    ],
    regular: [
      {
        name: "AI Product Week",
        institution: "PM3",
        year: "2026",
        tags: ["IA", "Produto", "Discovery", "Estratégia", "Dados", "Research"],
      },
      {
        name: "Claude AI: Prompts, Integrações e Automações",
        institution: "IA Portugal",
        year: "2026",
        tags: ["IA", "Prompt Engineering", "Automação", "Claude", "Integrações", "AI Tools"],
      },
      {
        name: "Como aplicar IA no trabalho",
        institution: "Cubo Academy",
        year: "2026",
        tags: ["IA", "Produtividade", "Prompting", "Automação", "Trabalho"],
      },
      {
        name: "Prompt Engineering para SEO",
        institution: "Conversion",
        year: "2025",
        tags: ["SEO", "IA", "Prompt Engineering", "Conteúdo", "Gemini", "ChatGPT"],
      },
      {
        name: "SEO Summit",
        institution: "Conversion",
        year: "2024",
        tags: ["SEO", "Marketing Orgânico", "Growth", "Conteúdo", "Performance"],
      },
      {
        name: "IA para Marketing",
        institution: "Conversion",
        year: "2024",
        tags: ["IA", "Marketing", "Conteúdo", "Automação", "Dados"],
      },
      {
        name: "Criando chatbots com a plataforma BLiP",
        institution: "Udemy",
        year: "2023",
        tags: ["Chatbots", "BLiP", "Conversational AI", "UX", "Automação"],
      },
      {
        name: "Curso de Linguagem Simples",
        institution: "Enap",
        year: "2022",
        tags: ["Linguagem Simples", "Acessibilidade", "Clareza", "Conteúdo", "UX Writing"],
      },
      {
        name: "Certificação em UX Research",
        institution: "Udemy",
        year: "2022",
        tags: ["UX Research", "Pesquisa", "Usuário", "Discovery", "Insights"],
      },
      {
        name: "Curso de UX Design",
        institution: "FIAP",
        year: "2022",
        tags: ["UX Design", "Arquitetura da Informação", "Persona", "Protótipos", "Usabilidade"],
      },
      {
        name: "Design Conversacional",
        institution: "Domestika",
        year: "2022",
        tags: ["Conversational Design", "Chatbots", "UX Writing", "Interfaces Conversacionais"],
      },
      {
        name: "Certificação em Metodologias Ágeis",
        institution: "FM2S",
        year: "2022",
        tags: ["Agile", "Scrum", "Kanban", "Produto", "Metodologias"],
      },
      {
        name: "Certificação em Copywriting",
        institution: "Rock Content",
        year: "2021",
        tags: ["Copywriting", "Conteúdo", "Persuasão", "Marketing", "Escrita"],
      },
      {
        name: "Certificação em Marketing de Conteúdo",
        institution: "Rock Content",
        year: "2021",
        tags: ["Marketing de Conteúdo", "SEO", "Estratégia", "Conteúdo", "Funil"],
      },
    ]
  };
};
