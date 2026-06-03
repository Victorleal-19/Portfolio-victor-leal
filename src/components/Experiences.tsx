import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  tags: string[];
  summary: string | React.ReactNode;
  details?: {
    title: string;
    items: string[];
  }[];
  isMain?: boolean;
}

const experiences: Experience[] = [
  {
    id: "magalu",
    company: "Magazine Luiza",
    role: "UX Writer",
    period: "07/2024 — Atual",
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
    period: "2021 — Atual",
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
    period: "2020 — 2021",
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
    period: "2019 — 2020",
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
    period: "2018 — 2019",
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
    period: "2017 — 2018",
    tags: ["Jornalismo", "Storytelling", "PR", "Rádio"],
    summary: "Produção institucional e jornalística focada no ecossistema acadêmico.",
    details: [
      {
        title: "Experiência Editorial",
        items: [
          "Produção jornalística, entrevistas e conteúdo institucional",
          "Storytelling e roteirização para rádio",
          "Divulgação de cases de sucesso e eventos institucionais"
        ]
      }
    ]
  },
  {
    id: "freelancer",
    company: "Freelancer",
    role: "UX Writer & Content Strategist",
    period: "2021 — Atual",
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
];

const ExperienceCard: React.FC<{ exp: Experience, isMain?: boolean, open: boolean, onToggle: () => void }> = ({ exp, isMain, open, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        relative group rounded-[32px] border transition-all duration-500 overflow-hidden
        ${isMain 
          ? "bg-gradient-to-br from-white/[0.04] to-brand-blue/[0.02] border-brand-blue/30 shadow-2xl shadow-brand-blue/5" 
          : "bg-white/[0.02] border-white/5 hover:border-white/10 shadow-sm"
        }
      `}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left p-8 md:p-10 transition-colors ${open ? "bg-white/[0.02]" : ""}`}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className={`font-bold ${isMain ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                {exp.company}
              </h3>
              {isMain && (
                <span className="flex items-center gap-1 px-3 py-1 bg-brand-blue/20 text-brand-blue border border-brand-blue/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles size={12} />
                  Main Stage
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-1">
              <p className={`font-medium ${isMain ? "text-lg text-white" : "text-white/80"}`}>{exp.role}</p>
              <p className="text-secondary text-sm">{exp.period}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-md text-[10px] font-medium text-secondary/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
            ${open ? "bg-brand-blue text-white rotate-180" : "bg-white/5 text-secondary group-hover:bg-white/10"}
          `}>
            <ChevronDown size={20} />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className={`p-8 md:p-10 pt-0 border-t border-white/5 space-y-8`}>
              <div className="mt-8">
                <p className={`leading-relaxed text-secondary ${isMain ? "text-lg md:text-xl" : "text-base"}`}>
                  {exp.summary}
                </p>
              </div>

              <div className={`grid grid-cols-1 ${isMain && exp.details && exp.details.length > 1 ? "md:grid-cols-2" : ""} gap-8`}>
                {exp.details?.map((detail, i) => (
                  <div key={i} className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue">{detail.title}</h4>
                    <ul className="space-y-3">
                      {detail.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-secondary text-sm leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-brand-blue mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experiences() {
  const [openId, setOpenId] = useState<string | null>("magalu");

  const mainExp = experiences.find(e => e.isMain);
  const secondaryExps = experiences.filter(e => !e.isMain);

  return (
    <section id="experiences" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Trajetória e <span className="text-brand-blue">Experiências</span></h2>
          <p className="text-secondary max-w-2xl mx-auto">De jornalista a UX Writer: uma jornada pautada por clareza, empatia e estratégia orientada a produto.</p>
        </div>

        <div className="space-y-6">
          {mainExp && (
            <ExperienceCard 
              exp={mainExp} 
              isMain={true} 
              open={openId === mainExp.id}
              onToggle={() => setOpenId(openId === mainExp.id ? null : mainExp.id)}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {secondaryExps.map((exp) => (
              <ExperienceCard 
                key={exp.id} 
                exp={exp} 
                open={openId === exp.id}
                onToggle={() => setOpenId(openId === exp.id ? null : exp.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
