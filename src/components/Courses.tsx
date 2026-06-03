import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const featuredCourses = [
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
];

const regularCourses = [
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
];

interface Course {
  name: string;
  institution: string;
  year: string;
  tags: string[];
  featured?: boolean;
  cursando?: boolean;
}

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`
        p-6 rounded-2xl border transition-all duration-300
        ${course.featured 
          ? "bg-brand-blue/5 border-brand-blue/20 shadow-lg shadow-brand-blue/5" 
          : "bg-white/[0.02] border-white/5 hover:border-white/10"
        }
      `}
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className={`font-bold leading-tight ${course.featured ? "text-white text-lg" : "text-white/90"}`}>
              {course.name}
            </h3>
            {course.cursando && (
              <span className="shrink-0 px-2.2 py-0.5 rounded-full bg-brand-blue text-[10px] font-bold text-white uppercase tracking-wider">
                Cursando
              </span>
            )}
          </div>
          <p className="text-secondary text-xs font-medium">
            {course.institution} <span className="opacity-30">•</span> {course.year}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {course.tags.map(tag => (
            <span 
              key={tag} 
              className={`
                px-2 py-0.5 rounded-md text-[10px] font-medium
                ${course.featured 
                  ? "bg-brand-blue/10 text-brand-blue/80" 
                  : "bg-white/5 text-secondary/70"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  
  // Group courses into pages of 4
  const pages = [];
  for (let i = 0; i < regularCourses.length; i += itemsPerPage) {
    pages.push(regularCourses.slice(i, i + itemsPerPage));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [pages.length]);

  return (
    <section id="courses" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Cursos e <span className="text-brand-blue">Especializações</span></h2>
        <p className="text-secondary max-w-xl mx-auto">Aprendizado contínuo focado em UX Writing, IA, Estratégia de Conteúdo e Produto.</p>
      </div>

      <div className="space-y-12">
        {/* Featured Courses Grid - Static */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map((course, i) => (
            <CourseCard key={course.name} course={course as Course} index={i} />
          ))}
        </div>

        {/* Regular Courses Carousel */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {pages[currentPage].map((course, i) => (
                <CourseCard 
                  key={course.name} 
                  course={course as Course} 
                  index={i} 
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === i ? "bg-brand-blue w-6" : "bg-white/10"
                }`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
