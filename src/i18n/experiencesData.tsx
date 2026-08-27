import React from "react";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  tags: string[];
  summary: React.ReactNode;
  details?: {
    title: string;
    items: string[];
  }[];
  isMain?: boolean;
}

export type LocalizedExperience = Experience;

export const getExperiencesData = (lang: "pt" | "en"): {
  titleMain: string;
  titleHighlight: string;
  subtitle: string;
  items: Experience[];
} => {
  if (lang === "en") {
    return {
      titleMain: "Career Journey &",
      titleHighlight: "Experience",
      subtitle: "From journalist to UX Writer: a path shaped by clarity, user empathy, and product-driven strategy.",
      items: [
        {
          id: "magalu",
          company: "Magazine Luiza",
          role: "UX Writer",
          period: "Start: 07/2024 — End: 06/2026",
          tags: ["UX Writing", "UX Research", "AI", "Accessibility", "Product"],
          isMain: true,
          summary: "Working at Luizalabs designing content and microcopy for digital interfaces across the Magalu ecosystem, focused on clarity, accessibility, and frictionless user experience.",
          details: [
            {
              title: "Key Responsibilities",
              items: [
                "Crafting end-to-end user journeys and microcopy (CTAs, error messages, system notifications)",
                "Transactional emails and strategic guidance across mobile app and web platform",
                "Active participation in product discovery and user testing (usability testing, interviews)",
                "Applying UX Research methodologies to validate tone of voice and linguistic ergonomics"
              ]
            },
            {
              title: "Strategy & Cross-Functional Collaboration",
              items: [
                "Direct collaboration with Product Designers, Engineers, and Product Managers",
                "Enforcing plain language, accessibility compliance, and user-centered design",
                "Deploying AI workflows integrated into content design operations"
              ]
            }
          ]
        },
        {
          id: "cultura-preta",
          company: "Cultura Preta",
          role: "Journalist & Columnist",
          period: "Start: 02/2021 — Present",
          tags: ["Journalism", "Content", "Storytelling", "Editorial"],
          summary: (
            <>
              Journalism will always be my profound passion in communications. I love reading, listening to, and telling compelling stories. Currently, I am a columnist for Cultura Preta, an independent news and culture portal dedicated to Black culture and representation.
              <br /><br />
              Visit: <a href="https://culturapreta.com/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">culturapreta.com</a>
            </>
          ),
          details: [
            {
              title: "Editorial Scope",
              items: [
                "In-depth investigative features and exclusive interviews",
                "Cultural coverage highlighting diverse representation",
                "Strategic digital storytelling for high engagement"
              ]
            }
          ]
        },
        {
          id: "hawk",
          company: "Hawk Agency",
          role: "Copywriter",
          period: "Start: 04/2022 — End: 07/2024",
          tags: ["Copywriting", "SEO", "CRO", "Marketing"],
          summary: "Conversion-oriented content and digital performance strategy across multi-channel campaigns.",
          details: [
            {
              title: "Performance & Growth",
              items: [
                "Multi-platform creative content for paid traffic campaigns",
                "SEO strategy and conversion rate optimization (CRO)",
                "Persuasive storytelling for sales funnels and brand positioning"
              ]
            },
            {
              title: "Tool Stack",
              items: ["ChatGPT", "Ubersuggest", "Google Trends"]
            }
          ]
        },
        {
          id: "multivisi",
          company: "Multivisi",
          role: "Copywriter",
          period: "Start: 06/2021 — End: 04/2022",
          tags: ["SEO", "Automation", "Email Marketing", "Content"],
          summary: "Content funnel management and marketing automation for lead generation and retention.",
          details: [
            {
              title: "Inbound Marketing",
              items: [
                "High-converting landing pages and rich educational content",
                "Email marketing workflows and automated nurture sequences",
                "Contact database segmentation and conversion via RD Station"
              ]
            },
            {
              title: "Primary Tool",
              items: ["RD Station"]
            }
          ]
        },
        {
          id: "ecos",
          company: "Ecos Energia Solar",
          role: "Social Media Specialist",
          period: "Start: 08/2021 → End: 12/2021",
          tags: ["Social Media", "Landing Pages", "Content", "Marketing"],
          summary: "Building digital brand presence and customer engagement for the solar energy sector.",
          details: [
            {
              title: "Digital Presence",
              items: [
                "Editorial calendar planning and social community management",
                "Customer service and interaction management",
                "Visual and textual copywriting for landing pages and ads"
              ]
            }
          ]
        },
        {
          id: "unitri",
          company: "UNITRI",
          role: "Journalist",
          period: "Start: 05/2019 → End: 05/2021",
          tags: ["Journalism", "Storytelling", "PR", "Radio"],
          summary: "Institutional and journalistic content production tailored for academic ecosystems.",
          details: [
            {
              title: "Editorial Experience",
              items: [
                "Journalistic articles, executive interviews, and institutional press releases",
                "Storytelling and scriptwriting for university radio broadcasting",
                "Coverage of institutional milestones and academic events"
              ]
            }
          ]
        },
        {
          id: "freelancer",
          company: "Freelance",
          role: "UX Writer | Copywriter | Social Media | Journalist",
          period: "2019 — Present",
          tags: ["UX Writing", "Copywriting", "Paid Media", "Marketing"],
          summary: "Multidisciplinary consulting for prominent brands and institutional projects.",
          details: [
            {
              title: "Strategic Impact",
              items: [
                "Crafting behavioral user-driven content strategies",
                "Experience with clients such as UFU, Lunar Alimentos, Planalto Ovos, and Igep Clínica",
                "Delivering clear, accessible, and inclusive digital journeys for diverse demographics"
              ]
            }
          ]
        }
      ]
    };
  }

  return {
    titleMain: "Trajetória e",
    titleHighlight: "Experiências",
    subtitle: "De jornalista a UX Writer: uma jornada pautada por clareza, empatia e estratégia orientada a produto.",
    items: [
      {
        id: "magalu",
        company: "Magazine Luiza",
        role: "UX Writer",
        period: "Entrada: 07/2024 — Saída: 06/2026",
        tags: ["UX Writing", "UX Research", "IA", "Acessibilidade", "Produto"],
        isMain: true,
        summary: "Atuação no Luizalabs desenvolvendo conteúdos e microcopys para interfaces digitais do ecossistema Magalu, com foco em clareza, acessibilidade e experiência do usuário.",
        details: [
          {
            title: "Responsabilidades",
            items: [
              "Construção de fluxos de navegação, microcopys (botões, mensagens de erro, notificações)",
              "E-mails transacionais e orientações estratégicas no app e site",
              "Participação ativa em discovery e pesquisas com usuários (testes de usabilidade, entrevistas)",
              "Aplicação de estratégias de UX Research para validação de tom e voz"
            ]
          },
          {
            title: "Estratégia & Colaboração",
            items: [
              "Trabalho em colaboração direta com Product Designers, Desenvolvedores e POs",
              "Aplicação de linguagem simples, acessibilidade e design centrado no usuário",
              "Implementação de IA aplicada ao fluxo de criação de conteúdo"
            ]
          }
        ]
      },
      {
        id: "cultura-preta",
        company: "Cultura Preta",
        role: "Jornalista",
        period: "Entrada: 02/2021 — Atual",
        tags: ["Jornalismo", "Conteúdo", "Storytelling", "Editorial"],
        summary: (
          <>
            O Jornalismo sempre será minha grande paixão na área da comunicação. Adoro ler, ouvir e contar boas histórias e não à toa, escrevo para alguns portais independentes de notícia. Atualmente sou colunista do Cultura Preta, um site de notícias e entretenimento voltado para o povo preto.
            <br /><br />
            Acesse: <a href="https://culturapreta.com/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">culturapreta.com</a>
          </>
        ),
        details: [
          {
            title: "Atuação Editorial",
            items: [
              "Produção de matérias aprofundadas e entrevistas exclusivas",
              "Cobertura cultural com foco em representatividade",
              "Storytelling aplicado ao jornalismo digital"
            ]
          }
        ]
      },
      {
        id: "hawk",
        company: "Hawk Agency",
        role: "Copywriter",
        period: "Entrada: 04/2022 — Saída: 07/2024",
        tags: ["Copywriting", "SEO", "CRO", "Marketing"],
        summary: "Conteúdo orientado à conversão e performance em campanhas multiplataformas.",
        details: [
          {
            title: "Performance & Growth",
            items: [
              "Criação de conteúdo multiplataforma para campanhas de mídia paga",
              "Estratégias de SEO e conteúdo orientado à conversão (CRO)",
              "Storytelling aplicado a campanhas de vendas e branding"
            ]
          },
          {
            title: "Stack",
            items: ["ChatGPT", "Ubersuggest", "Google Trends"]
          }
        ]
      },
      {
        id: "multivisi",
        company: "Multivisi",
        role: "Copywriter",
        period: "Entrada: 06/2021 — Saída: 04/2022",
        tags: ["SEO", "Automação", "E-mail Marketing", "Conteúdo"],
        summary: "Gestão de funis de conteúdo e automação de marketing para geração de leads.",
        details: [
          {
            title: "Inbound Marketing",
            items: [
              "Desenvolvimento de Landing Pages e materiais ricos",
              "Automações de e-mail marketing e réguas de relacionamento",
              "Gestão de base de contatos e conversão via RD Station"
            ]
          },
          {
            title: "Ferramenta",
            items: ["RD Station"]
          }
        ]
      },
      {
        id: "ecos",
        company: "Ecos Energia Solar",
        role: "Social Media",
        period: "Entrada: 08/2021 → Saída: 12/2021",
        tags: ["Social Media", "Landing Pages", "Conteúdo", "Marketing"],
        summary: "Construção de presença digital e relacionamento para o setor de energia solar.",
        details: [
          {
            title: "Digital Presence",
            items: [
              "Criação de calendários editoriais e gestão de redes sociais",
              "Atendimento e relacionamento com clientes (SAC)",
              "Produção visual e textual para landing pages e anúncios"
            ]
          }
        ]
      },
      {
        id: "unitri",
        company: "UNITRI",
        role: "Jornalista",
        period: "Entrada: 05/2019 → Saída: 05/2021",
        tags: ["Jornalismo", "Storytelling", "PR", "Rádio"],
        summary: "Produção institucional e jornalística focada no ecossistema acadêmico.",
        details: [
          {
            title: "Experiência Editorial",
            items: [
              "Produção jornalística, interviews e conteúdo institucional",
              "Storytelling e roteirização para rádio",
              "Divulgação de cases de sucesso e eventos institucionais"
            ]
          }
        ]
      },
      {
        id: "freelancer",
        company: "Freelancer",
        role: "UX Writer | Copywriter | Social Media | Jornalista",
        period: "2019 — Atual",
        tags: ["UX Writing", "Copywriting", "Tráfego Pago", "Marketing"],
        summary: "Atuação multidisciplinar para marcas e projetos institucionais.",
        details: [
          {
            title: "Atuação Estratégica",
            items: [
              "Criação de estratégias de conteúdo orientadas pelo comportamento do usuário",
              "Experiência com marcas como UFU, Lunar Alimentos, Planalto Ovos e Igep Clínica",
              "Foco em produzir experiências claras e acessíveis para diversos públicos"
            ]
          }
        ]
      }
    ]
  };
};
