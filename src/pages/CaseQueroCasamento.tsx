import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Award, ChevronRight, Zap, Target, Search, MessageSquare, Layout, Sparkles, Wallet, DollarSign, FileText, RefreshCw, HelpCircle, Trophy, Eye, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";
import { casamentoData } from "../i18n/cases/casamentoData";

export default function CaseQueroCasamento() {
  const { language } = useLanguage();
  const t = casamentoData[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue col-span-12 z-[60] origin-left"
        initial={{ scaleX: 0 }}
        style={{ scaleX: "var(--scroll-progress, 0)" }}
      />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center bg-transparent">
          <Link id="btn-back-home" to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">{t.back}</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
               {t.navBadges.map((badge, idx) => (
                 <span key={idx} className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                   {badge}
                 </span>
               ))}
            </div>
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto space-y-8 text-center md:text-left">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-wrap justify-center md:justify-start gap-2"
          >
             {t.tags.map(tag => (
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
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-4xl"
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/5 py-12">
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.dateLabel}</span>
              <p className="text-secondary text-sm">{t.overview.dateValue}</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.projectLabel}</span>
              <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">{t.overview.projectValue}</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.skillsLabel}</span>
              <p className="text-secondary text-sm leading-snug">{t.overview.skillsValue}</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.companyLabel}</span>
              <p className="text-secondary text-sm font-bold flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/pt/2/23/Logo-Magazine-Luiza.png" alt="Magalu" className="h-3 grayscale brightness-200" />
                {t.overview.companyValue}
              </p>
           </div>
        </div>
      </section>

      {/* Body Content */}
      <main className="px-6 space-y-32 mt-12">
        
        {/* Resumo */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.summaryTitle}</h2>
             {t.summaryParas.map((para, i) => (
               <p key={i} className="text-secondary leading-relaxed text-lg">
                 {para}
               </p>
             ))}
          </div>
        </section>

        {/* Contexto */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.contextTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.contextSubtitle}</h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
               {t.contextDesc1}
            </p>
            <p className="text-secondary leading-relaxed text-lg">
               {t.contextDesc2}
            </p>
            
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-6">
              <h4 className="text-xl font-bold text-brand-blue flex items-center gap-2">
                <Shield size={20} className="shrink-0" /> {t.restrictionTitle}
              </h4>
              <p className="text-secondary text-sm leading-relaxed">
                {t.restrictionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* O Desafio */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.challengeTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.challengeSubtitle}</h3>
          </div>
          
          <div className="space-y-8">
            <p className="text-secondary leading-relaxed text-lg">
               {t.challengeDesc}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-brand-blue font-bold uppercase tracking-widest text-xs flex items-center gap-1.5">
                     <Users size={14} className="shrink-0" /> {t.needToExplain}
                  </h4>
                  <ul className="space-y-3">
                    {t.explainItems.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-secondary">
                        <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl flex flex-col justify-center text-center space-y-4 italic">
                  <p className="text-secondary">{t.challengeQuote}</p>
                  <p className="text-white font-bold text-sm not-italic">{t.challengeQuoteAuthor}</p>
               </div>
            </div>
          </div>
        </section>

        {/* Meu Papel */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.roleTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.roleSubtitle}</h3>
             <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                {t.roleDesc}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {t.roleCards.map((rc, idx) => (
               <div key={idx} className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                     <span className="p-1 px-2 bg-brand-blue/10 text-brand-blue rounded-lg text-sm">{rc.letter}</span> {rc.title}
                  </h4>
                  <ul className="space-y-3 text-sm text-secondary">
                     {rc.items.map((it, i) => (
                       <li key={i} className="flex gap-2.5 items-start">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                          <span>{it}</span>
                       </li>
                     ))}
                  </ul>
               </div>
             ))}
          </div>
        </section>

        {/* Meu Processo de Trabalho */}
        <section className="max-w-4xl mx-auto space-y-24">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.processTitle}</h2>
          </div>

          {/* Step 1 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[0].num}</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">{t.steps[0].title}</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      {t.steps[0].desc}
                   </p>
                </div>
             </div>
             
             <div className="ml-0 md:ml-20 p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 max-w-3xl">
                <p className="text-secondary text-sm leading-relaxed">
                   {t.steps[0].innerDesc}
                </p>
                <div className="p-4 bg-brand-blue/5 border border-brand-blue/15 rounded-2xl flex items-start gap-3">
                   <span className="text-brand-blue">💡</span>
                   <p className="text-secondary text-xs leading-relaxed"><strong className="text-white">{t.steps[0].insightTitle}</strong> {t.steps[0].insightText}</p>
                </div>
             </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[1].num}</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">{t.steps[1].title}</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      {t.steps[1].desc}
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 grid md:grid-cols-2 gap-6 max-w-3xl">
                <div className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-3">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-blue">
                      <HelpCircle size={20} />
                   </div>
                   <h5 className="font-bold text-white text-sm">{t.steps[1].scenario1Title}</h5>
                   <p className="text-secondary text-xs leading-relaxed">
                      {t.steps[1].scenario1Desc}
                   </p>
                </div>

                <div className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-3">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-blue">
                      <RefreshCw size={20} />
                   </div>
                   <h5 className="font-bold text-white text-sm">{t.steps[1].scenario2Title}</h5>
                   <p className="text-secondary text-xs leading-relaxed">
                      {t.steps[1].scenario2Desc}
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 max-w-3xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                <img 
                   src="/images/cases/quero-casamento/cenarios-qdc.png" 
                   alt="Mapeamento de cenários do Quero de Casamento Magalu" 
                   className="w-full h-auto block" 
                   referrerPolicy="no-referrer"
                />
             </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[2].num}</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">{t.steps[2].title}</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      {t.steps[2].desc}
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 space-y-4 max-w-3xl">
                <p className="text-secondary text-sm leading-relaxed">
                   {t.steps[2].innerDesc}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {t.steps[2].quads?.map((item, i) => (
                      <div key={i} className="p-4 bg-[#121214] border border-white/5 rounded-xl space-y-1">
                         <span className="text-[11px] font-bold text-brand-blue block">{item.l}</span>
                         <p className="text-[10px] text-secondary leading-normal">{item.d}</p>
                      </div>
                   ))}
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card-dark mt-6">
                   <img 
                      src="/images/cases/quero-casamento/jornada-qdc.jpg" 
                      alt="Jornada de Resgate do Quero de Casamento Magalu" 
                      className="w-full h-auto block" 
                      referrerPolicy="no-referrer"
                   />
                </div>
             </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[3].num}</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">{t.steps[3].title}</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      {t.steps[3].desc}
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 space-y-4 max-w-3xl">
                <div className="p-6 bg-card-dark border border-white/5 rounded-3xl">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {t.steps[3].terms?.map((item, i) => (
                         <div key={i} className="flex gap-3 items-start border-l-2 border-brand-blue/30 pl-3">
                            <div>
                               <span className="text-white font-bold text-sm block">{item.term}</span>
                               <span className="text-[11px] text-secondary">{item.desc}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Step 5 - A/B Tests */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[4].num}</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">{t.steps[4].title}</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      {t.steps[4].desc}
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 space-y-6 max-w-3xl">
                <div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block mb-1">{t.steps[4].abBadge}</span>
                   <h5 className="text-lg font-bold text-white">{t.steps[4].abTitle}</h5>
                </div>

                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                   {t.steps[4].abTests?.map((test, idx) => (
                      <div key={idx} className="p-6 bg-card-dark border border-white/5 rounded-2xl flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300">
                         <div className="space-y-3">
                            <h6 className="font-bold text-white text-xs tracking-wide uppercase text-white/70 border-b border-light-dark pb-1.5 flex items-center justify-between">
                              <span>{test.title}</span>
                              <span className="px-1.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded text-[8px] font-bold">A/B TEST</span>
                            </h6>
                            
                            <div className="grid grid-cols-2 gap-2">
                               <div className={`p-2 rounded-lg border text-center ${test.winner === "A" ? "bg-brand-blue/10 border-brand-blue/30" : "bg-white/[0.02] border-white/5"}`}>
                                  <span className="text-[8px] text-white/40 block">Opção A</span>
                                  <span className="font-mono text-white text-[11px] font-bold pb-0.5 flex justify-center">{test.opA}</span>
                               </div>
                               <div className={`p-2 rounded-lg border text-center ${test.winner === "B" ? "bg-brand-blue/10 border-brand-blue/30" : "bg-white/[0.02] border-white/5"}`}>
                                  <span className="text-[8px] text-white/40 block">Opção B</span>
                                  <span className="font-mono text-white text-[11px] font-bold pb-0.5 flex justify-center">{test.opB}</span>
                               </div>
                            </div>
                         </div>
                         <div className="mt-3 pt-2.5 border-t border-white/5 flex gap-1.5 text-[10px]">
                            <span className="text-brand-blue shrink-0 font-bold">Resultado:</span>
                            <p className="text-secondary leading-snug"><strong className="text-white">Opção {test.winner}</strong> {test.rationale}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* A Solução */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.solutionTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.solutionSubtitle}</h3>
          </div>
          
          <div className="space-y-8">
             <p className="text-secondary text-lg leading-relaxed">
                {t.solutionDesc}
             </p>

             <div className="grid md:grid-cols-3 gap-6">
                {t.solCards.map((card, idx) => (
                  <div key={idx} className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-2">
                     <h5 className="font-bold text-white text-sm">{card.title}</h5>
                     <p className="text-secondary text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
             </div>

              {/* iPhone Video Mockup */}
              <div className="flex flex-col items-center justify-center mt-16 space-y-8">
                 <div className="text-center space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block">{t.demoBadge}</span>
                    <h4 className="text-xl md:text-2xl font-bold text-white font-display">{t.demoTitle}</h4>
                 </div>

                 <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/19.5] mx-auto filter drop-shadow-[0_35px_60px_rgba(0,0,0,0.85)]">
                    <div className="absolute left-[-13px] top-[120px] w-[3px] h-[20px] bg-neutral-800 rounded-l-md ring-1 ring-white/5" />
                    <div className="absolute left-[-13px] top-[160px] w-[3px] h-[35px] bg-neutral-800 rounded-l-md ring-1 ring-white/5" />
                    <div className="absolute left-[-13px] top-[210px] w-[3px] h-[35px] bg-neutral-800 rounded-l-md ring-1 ring-white/5" />
                    <div className="absolute right-[-13px] top-[180px] w-[3px] h-[45px] bg-neutral-800 rounded-r-md ring-1 ring-white/5" />

                    <div className="w-full h-full rounded-[48px] border-[8px] border-neutral-900 bg-neutral-950 p-[1.5px] ring-1 ring-white/10 relative overflow-hidden flex items-center justify-center">
                       <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-20" />

                       <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-neutral-800/10 shadow-[inner_0_1px_3px_rgba(255,255,255,0.05)]">
                          <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                          <div className="w-3 h-0.5 bg-neutral-950 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-neutral-900/60 rounded-full" />
                       </div>

                       <div className="w-full h-full rounded-[40px] overflow-hidden bg-black relative">
                          <video
                             autoPlay
                             loop
                             muted
                             playsInline
                             className="w-full h-full object-cover scale-[1.01]"
                          >
                             <source src="/images/cases/quero-casamento/jornada-qdc.mp4" type="video/mp4" />
                          </video>
                       </div>
                    </div>
                 </div>
              </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.resultsTitle}</h2>
             <h3 className="text-2xl font-bold text-white">{t.resultsSubtitle}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <p className="text-secondary text-lg leading-relaxed">
                  {t.resultsLead}
               </p>
               <div className="space-y-6">
                  {t.resultsItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                          <CheckCircle2 className="text-brand-blue" />
                       </div>
                       <p className="text-sm text-secondary font-medium">{item}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-10 bg-brand-blue border border-brand-blue/20 rounded-[40px] text-white space-y-6 glow-blue flex flex-col justify-center">
               <h4 className="text-xs uppercase font-bold tracking-widest opacity-60">{t.mainResultsTitle}</h4>
               <ul className="space-y-4">
                  {t.mainResults.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm font-bold">
                       <CheckCircle2 size={18} className="shrink-0 text-white" />
                       <span>{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </section>

        {/* O que aprendi */}
        <section className="max-w-4xl mx-auto p-12 md:p-20 bg-card-dark border border-white/5 rounded-[56px] space-y-12">
           <h4 className="text-3xl font-bold flex items-center gap-4">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <Award size={24} />
             </div>
             {t.learningsTitle}
           </h4>
           <div className="grid md:grid-cols-2 gap-12">
             <ul className="space-y-8">
               {t.learningsCol1.map((item, i) => (
                 <li key={i} className="space-y-2">
                   <h5 className="font-bold text-white flex items-center gap-2">
                     <span className="text-brand-blue">0{i+1}.</span>
                     {item.title}
                   </h5>
                   <p className="text-sm text-secondary leading-relaxed pl-7">{item.desc}</p>
                 </li>
               ))}
             </ul>
             <ul className="space-y-8">
               {t.learningsCol2.map((item, i) => (
                 <li key={i} className="space-y-2">
                   <h5 className="font-bold text-white flex items-center gap-2">
                     <span className="text-brand-blue">0{i+4}.</span>
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
