import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Quote, Globe, Heart, Sparkles, ChevronRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseJornalista() {
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
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Jornalismo</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Conteúdo Editorial</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Cultura Preta</span>
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
            {["Jornalismo", "Narrativas", "Mídia Independente", "Cultura Negra", "Representatividade", "Storytelling"].map(tag => (
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
            Jornalista — Cultura Preta
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-4xl"
          >
            Produção de conteúdo jornalístico focado na valorização, resistência e protagonismo da cultura negra brasileira.
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
          {/* News Agency Top Header Mockup */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#121214] border-b border-white/5 z-20 shrink-0 text-xs text-white/45 font-bold uppercase tracking-widest font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Cultura Preta
            </span>
            <span>Edição Especial</span>
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#0d0d0e] flex items-center justify-center">
            <img 
              src="/images/cases/others/jornalista-1.png" 
              alt="Jornalista - Cultura Preta banner" 
              className="max-w-full max-h-full object-contain"
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
            <p className="text-secondary text-sm">Jornalista & Redator</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Iniciativa</span>
            <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">Mídia Independente</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Foco</span>
            <p className="text-secondary text-sm leading-snug">Cultura negra, música, vivências, comportamento</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Veículo</span>
            <p className="text-secondary text-sm font-bold flex items-center gap-2">
              <BookOpen size={14} className="text-brand-blue" />
              Cultura Preta
            </p>
          </div>
        </div>
      </section>

      {/* Main content body */}
      <main className="px-6 space-y-24 mt-12">
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Minha Paixão de Origem</h2>
            <p className="text-secondary leading-relaxed text-lg">
              O jornalismo sempre será minha grande paixão na área da comunicação. Adoro ler, ouvir e contar boas histórias. Atualmente, atuo como jornalista no coletivo de mídia independente chamado Cultura Preta.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
              Esse coletivo não é só um veículo de comunicação, é um espaço de resistência, valorização e protagonismo da cultura negra. O nosso objetivo é contar histórias a partir de uma perspectiva que por muito tempo foi ignorada, trazendo informação, visibilidade para a arte, música, comportamento e vivências da população preta com verdade e profundidade.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
              E é nesse lugar que eu me encontro como jornalista.
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <a 
              href="https://culturapreta.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-2xl flex items-center gap-2 glow-blue shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Globe size={18} />
              Acessar Cultura Preta
            </a>
          </div>
        </section>

        {/* Editorial Pillars Section */}
        <section className="max-w-4xl mx-auto p-12 md:p-20 bg-card-dark border border-white/5 rounded-[56px] space-y-12">
          <h4 className="text-3xl font-bold flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
              <Award size={24} />
            </div>
            Pilares do Conteúdo Editorial
          </h4>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-8">
              {[
                { title: "Verdade Histórica", desc: "Contar fatos sob uma lente autêntica, livre de estereótipos ou silenciamentos institucionais." },
                { title: "Amplificação de Vozes", desc: "Dar palco para artistas locais, pensadores negros, músicos e ativistas que lideram transformações sociais." }
              ].map((item, i) => (
                <li key={i} className="space-y-2 text-center md:text-left">
                  <h5 className="font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-brand-blue">0{i+1}.</span>
                    {item.title}
                  </h5>
                  <p className="text-sm text-secondary leading-relaxed pl-7">{item.desc}</p>
                </li>
              ))}
            </ul>
            <ul className="space-y-8">
              {[
                { title: "Estética Documental", desc: "Casar palavras de forte impacto dramático com fomento cultural de alto valor estético, fotográfico e urbano." },
                { title: "Resistência e Resgate", desc: "Reconectar o leitor às origens ancestrais da música, culinária e manifestação artística nacional." }
              ].map((item, i) => (
                <li key={i} className="space-y-2 text-center md:text-left">
                  <h5 className="font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                    <span className="text-brand-blue">0{i+3}.</span>
                    {item.title}
                  </h5>
                  <p className="text-sm text-secondary leading-relaxed pl-7">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
