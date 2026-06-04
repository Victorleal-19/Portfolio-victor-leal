import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Globe, Award, Info, Target, Zap, Settings, Layers, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseThinkLabs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24 font-sans">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Voltar para home</span>
          </Link>
          <div className="hidden md:flex gap-2">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Newsletter</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Content Strategy</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Magalu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto space-y-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center md:justify-start gap-2"
          >
            {["Content Strategy", "UX Writing", "Editorial", "Newsletter", "Pesquisa", "Inovação", "Tendências"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold leading-tight"
          >
            Newsletter Think Labs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-4xl"
          >
            Disseminando tendências, inovação e novos modelos de negócio para públicos internos e externos do Magalu.
          </motion.p>
        </div>
      </section>

      {/* Banner showcasing the custom artwork */}
      <section className="px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark flex flex-col"
        >
          {/* Top Header Mockup */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#121214] border-b border-white/5 z-20 shrink-0 text-xs text-white/45 font-bold uppercase tracking-widest font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Think Labs
            </span>
            <span>Estratégia Editorial</span>
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#0d0d0e] flex items-center justify-center">
            <img 
              src="/images/cases/others/newsller-capa.png" 
              alt="Newsletter Think Labs banner" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/5 py-12">
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Cargo</span>
            <p className="text-secondary text-sm">Content Strategist & Editorial Lead</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Iniciativa</span>
            <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">Curadoria & Inovação</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Foco</span>
            <p className="text-secondary text-sm leading-snug">UX Writing, estratégia editorial, legibilidade, tecnologia</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Plataformas</span>
            <p className="text-secondary text-sm font-bold flex items-center gap-2">
              <BookOpen size={14} className="text-brand-blue" />
              Medium & Substack
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-6 space-y-24 mt-12">
        
        {/* RESUMO SECTION */}
        <section className="py-12 border-b border-white/5">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                <Info size={24} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight">Resumo</h2>
            </div>
            
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              Estruturei e conduzi a estratégia editorial da newsletter Think Labs, responsável por disseminar tendências, inovação e novos modelos de negócio para públicos internos e externos do Magalu.
            </p>
          </div>
        </section>

        {/* CONTEXTO SECTION */}
        <section className="py-12 border-b border-white/5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight">Contexto</h2>
            </div>

            <p className="text-secondary text-lg leading-relaxed">
              A newsletter Think Labs foi criada com o objetivo de compartilhar conhecimento estratégico sobre inovação, novos modelos de negócio de tecnologia e tendências de mercado para os públicos interno e externo do Magalu.
            </p>
          </div>
        </section>

        {/* O DESAFIO SECTION */}
        <section className="py-12 border-b border-white/5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight">O Desafio</h2>
            </div>

            <p className="text-secondary text-lg leading-relaxed">
              Estruturar e conduzir uma estratégia editorial consistente, capaz de engajar leitores de diferentes áreas e perfis, mantendo alta qualidade de curadoria e atendendo a uma cadência periódica de entregas.
            </p>
          </div>
        </section>

        {/* MEU PAPEL SECTION */}
        <section className="py-12 border-b border-white/5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                <Settings size={24} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight">Meu Papel</h2>
            </div>

            <p className="text-secondary text-lg leading-relaxed">
              Conduzir a estratégia editorial, coordenar a curadoria de conteúdos técnicos de tecnologia e inovação, produzir textos claros e estruturar o design de conteúdo para maximizar a escaneabilidade.
            </p>
          </div>
        </section>

        {/* PROCESSO DE TRABALHO SECTION */}
        <section className="py-12 border-b border-white/5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                <Layers size={24} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight">Meu Processo de Trabalho</h2>
            </div>

            <p className="text-secondary text-lg leading-relaxed">
              Curadoria aprofundada de tendências e artigos globais, redação com foco em UX Writing para garantir clareza e síntese, formatação editorial moderna para dispositivos móveis e desktop, e distribuição consistente de conteúdo.
            </p>
          </div>
        </section>

        {/* RESULTADOS SECTION */}
        <section className="py-12 border-b border-white/5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight">Resultados</h2>
            </div>

            <p className="text-secondary text-lg mb-8">
              O impacto estruturado da estratégia editorial e curadoria de conteúdo da Newsletter Think Labs:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { metric: "+60", desc: "Edições publicadas entre 2024 e 2026" },
                { metric: "+500", desc: "Seguidores nas plataformas Medium e Substack" },
                { metric: "+280", desc: "Assinantes de e-mail" },
                { metric: "2 anos", desc: "De cadência quinzenal consistente" },
                { metric: "+50K", desc: "Views nas postagens" },
              ].map((res, i) => (
                <div key={i} className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 hover:border-brand-blue/20 transition-all flex flex-col justify-center">
                  <span className="text-4xl font-display font-bold text-brand-blue leading-none">{res.metric}</span>
                  <p className="text-sm text-secondary leading-relaxed font-medium">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE APRENDI SECTION */}
        <section className="py-12 space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-brand-blue">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tight">O que aprendi</h2>
            </div>

            <p className="text-secondary text-lg leading-relaxed">
              A importância da cadência constante para a construção de engajamento a longo prazo, como curar e sintetizar temas complexos em formatos leves e de rápida digestão, e aproximar pessoas de diferentes times por meio do compartilhamento de tendências de tecnologia.
            </p>
          </div>
        </section>

      </main>

      {/* Footer Branding */}
      <section className="py-24 border-t border-white/5 text-center space-y-8">
        <div className="px-10 py-4 bg-brand-blue/10 border border-brand-blue/20 rounded-full inline-block">
          <span className="font-display font-black text-3xl italic tracking-tighter">THINK LABS x MAGALU</span>
        </div>
      </section>
    </div>
  );
}
