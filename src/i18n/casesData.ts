export interface CaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  path: string;
  banner: string;
  color?: string;
  brand?: string;
  iconType: "heart" | "target" | "type" | "wallet" | "bookOpen";
}

export interface OtherCaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  banner: string;
  path: string;
}

export const getFeaturedCases = (lang: "pt" | "en"): CaseItem[] => {
  if (lang === "en") {
    return [
      {
        id: 1,
        title: "New Experience: Favorites and Wishlists at Magalu",
        category: "UX Writing & Content Design",
        description: "Magalu's SuperApp Favorites feature drove millions of monthly interactions, yet what should have been a major conversion engine was turning into user friction.",
        tags: ["UX Writing", "Content Design", "SuperApp", "Magalu"],
        path: "/case/favoritos-e-listas-magalu",
        banner: "/images/cases/banners/favoritos-banner.png",
        color: "from-brand-blue/20",
        brand: "MAGALU",
        iconType: "heart"
      },
      {
        id: 10,
        title: "Project Hook: UX Writing for E-Commerce Conversion",
        category: "UX Writing & Conversion Strategy",
        description: "Project Hook was born to explore how UI elements and behavioral nudges could drive conversion and engagement across Magalu's shopping journey.",
        tags: ["UX Writing", "Conversion Rate", "Behavioral Economics"],
        path: "/case/projeto-hook-magalu",
        banner: "/images/cases/banners/hook-banner.png",
        color: "from-brand-blue/40",
        brand: "MAGALU",
        iconType: "target"
      },
      {
        id: 7,
        title: "Content Guideline: E-Commerce Language Standards",
        category: "Content Governance & Design Systems",
        description: "Textual communication across the e-commerce platform had recurring capitalization and casing inconsistencies, directly impacting clarity and brand perception.",
        tags: ["UX Writing", "Content Design", "Strategy"],
        path: "/case/guideline-linguagem-ecommerce-magalu",
        banner: "/images/cases/banners/guideline-capa-2.png",
        color: "from-brand-blue/30",
        brand: "MAGALU",
        iconType: "type"
      },
      {
        id: 12,
        title: "Wedding Registry: Balance Redemption to MagaluPay",
        category: "UX Writing & Fintech Content Design",
        description: "End-to-end journey mapping, fintech terminology curation, and microcopy crafting that transformed couples' financial payout experience with transparency.",
        tags: ["UX Writing", "Financial Language", "Digital Wallet", "MagaluPay"],
        path: "/case/quero-de-casamento-magalu",
        banner: "/images/cases/banners/qdc.jpg",
        color: "from-brand-blue/45",
        brand: "MAGALU",
        iconType: "wallet"
      },
      {
        id: 11,
        title: "Brandbook & Voice Architecture: Cargo Sapiens",
        category: "UX Writing & Brand Identity",
        description: "Cargo Sapiens needed a structured communication system to guarantee consistency and clarity across all customer touchpoints.",
        tags: ["UX Writing", "Brandbook", "Branding", "Content Strategy"],
        path: "/case/brandbook-cargo-sapiens",
        banner: "/images/cases/banners/brandbook-banner.png",
        color: "from-brand-blue/50",
        brand: "CARGO",
        iconType: "bookOpen"
      }
    ];
  }

  return [
    {
      id: 1,
      title: "Nova experiência: Favoritos e Listas no Magalu",
      category: "UX Writing & Content Design",
      description: "A funcionalidade de Favoritos do SuperApp do Magalu registrava milhões de interações mensais, mas o que deveria ser um motor de conversão estava se tornando um ponto de frustração.",
      tags: ["UX Writing", "Content Design", "SuperApp", "Magalu"],
      path: "/case/favoritos-e-listas-magalu",
      banner: "/images/cases/banners/favoritos-banner.png",
      color: "from-brand-blue/20",
      brand: "MAGALU",
      iconType: "heart"
    },
    {
      id: 10,
      title: "Projeto Hook: UX Writing para Conversão no Magalu",
      category: "UX Writing & Conversion Strategy",
      description: "O Projeto Hook nasceu da necessidade de entender como elementos de interface e gatilhos comportamentais poderiam aumentar conversão e engajamento no e-commerce.",
      tags: ["UX Writing", "Conversão", "Economia Comportamental"],
      path: "/case/projeto-hook-magalu",
      banner: "/images/cases/banners/hook-banner.png",
      color: "from-brand-blue/40",
      brand: "MAGALU",
      iconType: "target"
    },
    {
      id: 7,
      title: "Guideline: Linguagem para E-commerce Magalu",
      category: "Governança & Linguagem",
      description: "A comunicação textual do e-commerce apresentava inconsistências recorrentes no uso de letras maiúsculas, minúsculas e caixa alta, impactando diretamente a clareza e a qualidade.",
      tags: ["UX Writing", "Content Design", "Strategy"],
      path: "/case/guideline-linguagem-ecommerce-magalu",
      banner: "/images/cases/banners/guideline-capa-2.png",
      color: "from-brand-blue/30",
      brand: "MAGALU",
      iconType: "type"
    },
    {
      id: 12,
      title: "Quero de Casamento: Resgate de Saldo para MagaluPay",
      category: "UX Writing & Content Design",
      description: "Mapeamento da jornada, curadoria de termos de fintech e microcopies que transformaram a experiência financeira dos noivos com total transparência e segurança.",
      tags: ["UX Writing", "Linguagem Financeira", "Carteira Digital", "MagaluPay"],
      path: "/case/quero-de-casamento-magalu",
      banner: "/images/cases/banners/qdc.jpg",
      color: "from-brand-blue/45",
      brand: "MAGALU",
      iconType: "wallet"
    },
    {
      id: 11,
      title: "Criação de Brandbook: Cargo Sapiens",
      category: "UX Writing & Branding",
      description: "A Cargo Sapiens precisava estruturar sua comunicação para garantir consistência e clareza em todos os pontos de contato com o cliente.",
      tags: ["UX Writing", "Brandbook", "Branding", "Content Strategy"],
      path: "/case/brandbook-cargo-sapiens",
      banner: "/images/cases/banners/brandbook-banner.png",
      color: "from-brand-blue/50",
      brand: "CARGO",
      iconType: "bookOpen"
    }
  ];
};

export const getOtherCases = (lang: "pt" | "en"): OtherCaseItem[] => {
  if (lang === "en") {
    return [
      {
        id: 13,
        title: "Newsletter Think Labs",
        category: "Content Strategy • UX Writing • Editorial",
        description: "Structured and led the editorial strategy for Think Labs newsletter, disseminating emerging technology trends, innovation, and business models for Magalu's internal and external audiences.",
        tags: ["Content Strategy", "UX Writing", "Editorial"],
        banner: "/images/cases/others/newsller-capa.png",
        path: "/cases/newsletter-think-labs"
      },
      {
        id: 4,
        title: "Journalist — Cultura Preta",
        category: "Journalism / Editorial Content",
        description: "Journalistic content production focused on Black culture, music, societal shifts, and diverse representation.",
        tags: ["Cultura Preta", "Journalism"],
        banner: "/images/cases/others/jornalista-1.png",
        path: "/cases/jornalista"
      },
      {
        id: 5,
        title: "Copywriter & Strategic Content",
        category: "Copywriting / Direct Response",
        description: "Crafting strategic copy and narratives engineered for conversion, customer loyalty, and digital performance.",
        tags: ["Copywriting", "Conversion"],
        banner: "/images/cases/others/copy-1.png",
        path: "/cases/redator-copywriter"
      },
      {
        id: 6,
        title: "Social Media Strategy",
        category: "Social Media / Content Strategy",
        description: "Strategic social media content creation, high-impact digital campaigns, and consistent multi-channel brand positioning.",
        tags: ["Social Media", "Strategy"],
        banner: "/images/cases/others/social-media-1.png",
        path: "/cases/social-media"
      }
    ];
  }

  return [
    {
      id: 13,
      title: "Newsletter Think Labs",
      category: "Content Strategy • UX Writing • Editorial",
      description: "Estruturei e conduzi a estratégia editorial da newsletter Think Labs, responsável por disseminar tendências, inovação e novos modelos de negócio para públicos internos e externos do Magalu.",
      tags: ["Content Strategy", "UX Writing", "Editorial"],
      banner: "/images/cases/others/newsller-capa.png",
      path: "/cases/newsletter-think-labs"
    },
    {
      id: 4,
      title: "Jornalista — Cultura Preta",
      category: "Jornalismo / Conteúdo Editorial",
      description: "Produção de conteúdo jornalístico voltado à cultura negra, música, comportamento e representatividade.",
      tags: ["Cultura Preta", "Jornalismo"],
      banner: "/images/cases/others/jornalista-1.png",
      path: "/cases/jornalista"
    },
    {
      id: 5,
      title: "Redator e Copywriter",
      category: "Copywriting / Conversão",
      description: "Criação de conteúdos estratégicos orientados à conversão, relacionamento e performance digital.",
      tags: ["Copywriting", "Conversão"],
      banner: "/images/cases/others/copy-1.png",
      path: "/cases/redator-copywriter"
    },
    {
      id: 6,
      title: "Social Media",
      category: "Social Media / Conteúdo Estratégico",
      description: "Criação de conteúdo estratégico para redes sociais, campanhas digitais e posicionamento de marca.",
      tags: ["Social Media", "Estratégia"],
      banner: "/images/cases/others/social-media-1.png",
      path: "/cases/social-media"
    }
  ];
};
