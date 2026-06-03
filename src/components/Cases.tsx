import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Smartphone, Heart, Sparkles, ChevronLeft, ChevronRight, Layout, Zap, Search, Globe, Type, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const featuredCases = [
  {
    id: 1,
    title: "Nova experiência: Favoritos e Listas no Magalu",
    category: "UX Writing & Content Design",
    description: "A funcionalidade de Favoritos do SuperApp do Magalu registrava milhões de interações mensais, mas o que deveria ser um motor de conversão estava se tornando um ponto de frustração.",
    tags: ["UX Writing", "Content Design", "SuperApp", "Magalu"],
    path: "/case/favoritos-e-listas-magalu",
    icon: <Heart size={40} className="text-white fill-white" />,
    banner: "/images/cases/banners/favoritos-banner.png",
    color: "from-brand-blue/20",
    brand: "MAGALU"
  },
  {
    id: 10,
    title: "Projeto Hook: UX Writing para Conversão no Magalu",
    category: "UX Writing & Conversion Strategy",
    description: "O Projeto Hook nasceu da necessidade de entender como elementos de interface e gatilhos comportamentais poderiam aumentar conversão e engajamento no e-commerce.",
    tags: ["UX Writing", "Conversão", "Economia Comportamental"],
    path: "/case/projeto-hook-magalu",
    icon: <Target size={40} className="text-white" />,
    banner: "/images/cases/banners/hook-banner.png",
    color: "from-brand-blue/40",
    brand: "MAGALU"
  },
  {
    id: 7,
    title: "Guideline: Linguagem para E-commerce Magalu",
    category: "Governança & Linguagem",
    description: "A comunicação textual do e-commerce apresentava inconsistências recorrentes no uso de letras maiúsculas, minúsculas e caixa alta, impactando diretamente a clareza e a qualidade.",
    tags: ["UX Writing", "Content Design", "Strategy"],
    path: "/case/guideline-linguagem-ecommerce-magalu",
    icon: <Type size={40} className="text-white" />,
    banner: "/images/cases/banners/guideline-banner.png",
    color: "from-brand-blue/30",
    brand: "MAGALU"
  },
  {
    id: 11,
    title: "Criação de Brandbook: Cargo Sapiens",
    category: "UX Writing & Branding",
    description: "A Cargo Sapiens precisava estruturar sua comunicação para garantir consistência e clareza em todos os pontos de contato com o cliente.",
    tags: ["UX Writing", "Brandbook", "Branding", "Content Strategy"],
    path: "/case/brandbook-cargo-sapiens",
    icon: <BookOpen size={40} className="text-white" />,
    banner: "/images/cases/banners/brandbook-banner.png",
    color: "from-brand-blue/50",
    brand: "CARGO"
  }
];

const otherCases = [
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

export default function Cases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === featuredCases.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredCases.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <section id="cases" className="py-24 px-6 max-w-7xl mx-auto space-y-24 overflow-hidden">
      <div className="space-y-4 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold">Principais <span className="text-brand-blue">Cases</span></h2>
        <p className="text-secondary max-w-xl mx-auto">Conteúdo estratégico aliado à pesquisa, acessibilidade e IA para facilitar a experiência das pessoas usuárias e impulsionar resultados de negócio.</p>
      </div>

      {/* Featured Carousel */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-[40px] p-1 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Link to={featuredCases[currentIndex].path} className="block group/item">
                <div className="bg-card-dark p-8 md:p-12 lg:p-16 rounded-[38px] transition-all duration-500 group-hover:bg-white/[0.04]">
                  <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${featuredCases[currentIndex].color} to-transparent blur-[100px] -z-10 transition-colors`} />
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold rounded-lg uppercase tracking-wider flex items-center gap-1">
                          <Sparkles size={10} /> Case em destaque
                        </span>
                        {featuredCases[currentIndex].tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-secondary text-[10px] font-bold rounded-lg uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-3xl md:text-5xl font-bold leading-tight group-hover/item:text-brand-blue transition-colors">
                          {featuredCases[currentIndex].title}
                        </h3>
                        <p className="text-secondary text-lg leading-relaxed max-w-lg">
                          {featuredCases[currentIndex].description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <div className="px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl flex items-center gap-2 glow-blue group-hover/item:shadow-[0_0_30px_rgba(0,71,188,0.5)] transition-all">
                          Ver case completo
                          <ArrowUpRight size={20} className="group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Visual Showcase */}
                    <div className="relative aspect-[4/3] bg-card-dark rounded-[32px] border border-white/10 flex items-center justify-center overflow-hidden group/banner">
                      <div className="absolute inset-0 opacity-60 group-hover/item:opacity-80 transition-opacity duration-700">
                        <img 
                          src={featuredCases[currentIndex].banner} 
                          alt={featuredCases[currentIndex].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent " />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
           <button 
             onClick={prevSlide}
             className="p-2 text-secondary hover:text-white transition-colors"
           >
             <ChevronLeft size={24} />
           </button>
           
           <div className="flex gap-2">
             {featuredCases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-brand-blue" : "bg-white/20"}`}
                />
             ))}
           </div>

           <button 
             onClick={nextSlide}
             className="p-2 text-secondary hover:text-white transition-colors"
           >
             <ChevronRight size={24} />
           </button>
        </div>
      </div>

      {/* Other Cases Section */}
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Outros <span className="text-brand-blue">Cases</span></h2>
          <div className="h-px w-full bg-white/5" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCases.map((c, i) => (
            <Link key={c.id} to={c.path} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full bg-card-dark border border-white/5 rounded-[32px] overflow-hidden hover:bg-white/[0.04] hover:border-brand-blue/30 transition-all flex flex-col justify-between"
              >
                {/* Horizontal Banner image */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0d0d0e] border-b border-white/5 flex flex-col">
                  {c.id === 5 && (
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-[#121214]/95 border-b border-white/5 z-20 shrink-0 shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 max-w-[170px] mx-auto h-4 bg-white/5 rounded-md flex items-center justify-center text-[7px] text-white/40 font-mono border border-white/5">
                        behance.net/portfolio-copy
                      </div>
                    </div>
                  )}
                  {c.id === 6 && (
                    <div className="flex items-center justify-between px-4 py-1.5 bg-[#121214]/95 border-b border-white/5 z-20 shrink-0 text-[7px] text-white/45 font-semibold font-sans shadow-sm">
                      <span>09:41</span>
                      <div className="w-12 h-2.5 bg-black rounded-full flex items-center justify-center border border-white/5">
                        <div className="w-1 h-1 rounded-full bg-neutral-900" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span>5G</span>
                        <div className="w-3 h-1.5 border border-white/20 rounded-[2px]" />
                      </div>
                    </div>
                  )}
                  {c.id === 4 && (
                    <div className="flex items-center justify-between px-4 py-2 bg-[#121214]/95 border-b border-white/5 z-20 shrink-0 text-[7px] text-white/45 font-bold uppercase tracking-widest font-mono shadow-sm">
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-brand-blue" />
                        Cultura Preta
                      </span>
                      <span>Edição Especial</span>
                    </div>
                  )}

                  <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-[#0d0d0e]">
                    <img 
                      src={c.banner} 
                      alt={c.title} 
                      className={`max-h-full transition-transform duration-500 group-hover:scale-103 ${c.id === 4 ? "max-w-full object-contain" : "w-full h-full object-cover"}`}
                      referrerPolicy="no-referrer"
                    />
                    {c.id !== 4 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-card-dark/80 via-transparent to-transparent pointer-events-none" />
                    )}
                  </div>
                  
                  {/* Category overlay */}
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-bg-dark/85 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white/80 rounded-lg uppercase tracking-wider z-20">
                    {c.category}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex gap-2 flex-wrap">
                      {c.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-white/45 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-brand-blue transition-colors leading-tight">{c.title}</h4>
                    <p className="text-sm text-secondary leading-relaxed line-clamp-3">{c.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between group/link">
                     <span className="text-xs font-bold text-white/40 group-hover/link:text-white transition-colors">Ver case completo</span>
                     <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-brand-blue group-hover/link:border-brand-blue group-hover/link:text-white transition-all">
                       <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                     </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
