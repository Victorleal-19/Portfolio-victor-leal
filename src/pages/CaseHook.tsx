import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Award, ChevronRight, Zap, Target, Search, MessageSquare, Layout, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";
import { hookData } from "../i18n/cases/hookData";

export default function CaseHook() {
  const { language } = useLanguage();
  const t = hookData[language];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const frentesIcons = [
    <Target className="text-brand-blue" size={24} />,
    <Search className="text-brand-blue" size={24} />,
    <Layout className="text-brand-blue" size={24} />,
    <MessageSquare className="text-brand-blue" size={24} />,
    <Sparkles className="text-brand-blue" size={24} />,
    <Award className="text-brand-blue" size={24} />
  ];

  const researchIcons = [
    <Target className="text-brand-blue" />,
    <Zap className="text-brand-blue" />,
    <Search className="text-brand-blue" />
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
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
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
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
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.createdLabel}</span>
              <p className="text-secondary text-sm">{t.overview.createdValue}</p>
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
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.summaryTitle}</h2>
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
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.contextTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.contextSubtitle}</h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
               {t.contextDesc}
            </p>
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-6">
              <h4 className="text-xl font-bold text-brand-blue">{t.contextBoxTitle}</h4>
              <ul className="space-y-4">
                {t.contextItems.map((item, i) => (
                  <li key={i} className="flex gap-4 text-secondary text-lg">
                     <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={20} />
                     <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-secondary italic text-sm pt-4 border-t border-white/5">
                {t.contextFooter}
              </p>
            </div>
          </div>
        </section>

        {/* O Desafio */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.challengeTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.challengeSubtitle}</h3>
          </div>
          
          <div className="space-y-8">
            <p className="text-secondary leading-relaxed text-lg">
               {t.challengeDesc}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-brand-blue font-bold uppercase tracking-widest text-xs">{t.needToUnderstand}</h4>
                  <ul className="space-y-3">
                    {t.understandItems.map((item, i) => (
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
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.roleTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.roleSubtitle}</h3>
             <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                {t.roleDesc}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.frentes.map((frente, i) => (
              <div 
                key={i} 
                className="p-8 bg-card-dark border border-white/5 hover:border-brand-blue/20 rounded-3xl space-y-4 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/2 rounded-full blur-xl group-hover:bg-brand-blue/5 transition-all pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/[0.03] rounded-2xl border border-white/5 group-hover:border-brand-blue/30 transition-all">
                    {frentesIcons[i]}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue font-mono bg-brand-blue/5 px-2.5 py-1 rounded-lg border border-brand-blue/10">
                    {frente.badge}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white font-display group-hover:text-brand-blue transition-colors">
                    {frente.title}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {frente.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meu Processo de Trabalho */}
        <section className="max-w-4xl mx-auto space-y-32">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.processTitle}</h2>
             <h3 className="text-2xl font-bold text-brand-blue">{t.processSubtitle}</h3>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">1</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.step1Title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.step1Desc}
                     </p>
                  </div>
               </div>
               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                  <img src="/images/cases/Hook/benchmark-hook-1.png" alt="Benchmark comportamental" className="w-full h-auto" />
               </div>
               <div className="space-y-4 max-w-3xl ml-0 md:ml-20">
                  <p className="text-secondary">{t.step1Footer}</p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">2</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.step2Title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.step2Desc}
                     </p>
                  </div>
               </div>
               
               <div className="ml-0 md:ml-20 space-y-8">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-[32px] space-y-4">
                     <p className="text-secondary leading-relaxed font-semibold text-white/90">{t.step2FoundTitle}</p>
                     <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-white font-bold">
                           <div className="w-2 h-2 bg-brand-blue rounded-full" />
                           {t.step2Count1}
                        </li>
                        <li className="flex items-center gap-3 text-white font-bold">
                           <div className="w-2 h-2 bg-brand-blue rounded-full" />
                           {t.step2Count2}
                        </li>
                     </ul>
                     <p className="text-secondary leading-relaxed mt-4">
                        {t.step2Footer}
                     </p>
                  </div>
                  
                  <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                     <img src="/images/cases/Hook/tabela-hook.png" alt="Mapeamento de gatilhos do mercado" className="w-full h-auto block" />
                  </div>
               </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">3</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.step3Title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.step3Desc}
                     </p>
                  </div>
               </div>
               
               <div className="ml-0 md:ml-20 space-y-12">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-6">
                     <p className="text-secondary leading-relaxed">
                        {t.step3MethodDesc}
                     </p>
                     
                     <div className="flex flex-wrap gap-2.5">
                        {t.stakeholders.map((stakeholder, i) => (
                           <span key={i} className="px-4 py-2 bg-white/[0.03] border border-white/5 text-xs text-white/90 font-medium rounded-xl flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
                              {stakeholder}
                           </span>
                        ))}
                     </div>
                     
                     <p className="text-secondary text-sm">
                        {t.step3Goal}
                     </p>
                  </div>

                  <div className="space-y-6">
                     <h5 className="text-sm font-bold uppercase tracking-widest text-brand-blue">{t.prioritizedLabel}</h5>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {t.prioritizedTriggers.map((item, i) => (
                           <div key={i} className="p-6 bg-white/[0.03] border border-white/5 hover:border-brand-blue/30 rounded-2xl space-y-3 transition-colors flex flex-col justify-between">
                              <div className="space-y-2">
                                 <span className="text-2xl">{item.emoji}</span>
                                 <h6 className="font-bold text-white text-base leading-tight">{item.name}</h6>
                              </div>
                              <p className="text-[11px] text-secondary leading-normal mt-2">{item.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  <p className="text-secondary italic text-sm text-center">
                     {t.step3Footer}
                  </p>
               </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">4</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold text-white font-display">{t.step4Title}</h4>
                     <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                        {t.step4Desc1}
                     </p>
                     <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                        {t.step4Desc2}
                     </p>
                  </div>
               </div>

               <div className="ml-0 md:ml-20 space-y-10">
                  {/* Grid layout for areas and actions */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                     {/* Sections Card */}
                     <div className="lg:col-span-4 p-8 bg-card-dark border border-white/5 rounded-3xl flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono mb-4 block">{t.triggersAppliedIn}</span>
                        <ul className="space-y-4">
                           {["Home", "Busca", "PDP"].map(item => (
                              <li key={item} className="flex items-center gap-3 text-white font-bold text-base">
                                 <CheckCircle2 size={18} className="text-brand-blue shrink-0 animate-pulse" />
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* My Role Card */}
                     <div className="lg:col-span-8 p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block animate-pulse">{t.myRoleInvolved}</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {t.myRoleItems.map(item => (
                              <li key={item} className="text-sm text-secondary flex items-start gap-2.5">
                                 <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0" />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  {/* A/B Testing Component */}
                  <div className="space-y-6">
                     <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block mb-1">{t.experimentationBadge}</span>
                        <h5 className="text-xl font-bold text-white">{t.abTestingTitle}</h5>
                        <p className="text-secondary text-sm leading-relaxed mt-2 max-w-4xl">
                           {t.abTestingDesc}
                        </p>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {t.abTests.map((test, i) => (
                           <div key={i} className="p-6 bg-card-dark border border-white/5 rounded-2xl flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300 group">
                              <div className="space-y-4">
                                 <h6 className="font-bold text-white text-sm tracking-wide border-b border-white/5 pb-2">{test.title}</h6>
                                 <div className="grid grid-cols-2 gap-3">
                                    <div className={`p-3 rounded-xl border ${test.winning === "A" ? "bg-brand-blue/5 border-brand-blue/30" : "bg-white/[0.01] border-white/5"} relative`}>
                                       <span className={`absolute top-1.5 right-2 text-[8px] font-mono font-black ${test.winning === "A" ? "text-brand-blue" : "text-white/30"}`}>OPÇÃO A</span>
                                       <span className="text-[10px] text-white/40 block">Proposta A</span>
                                       <span className="font-mono text-white text-[11px] font-bold block mt-1">“{test.opA}”</span>
                                    </div>
                                    <div className={`p-3 rounded-xl border ${test.winning === "B" ? "bg-brand-blue/5 border-brand-blue/30" : "bg-white/[0.01] border-white/5"} relative`}>
                                       <span className={`absolute top-1.5 right-2 text-[8px] font-mono font-black ${test.winning === "B" ? "text-brand-blue" : "text-white/30"}`}>OPÇÃO B</span>
                                       <span className="text-[10px] text-white/40 block">Proposta B</span>
                                       <span className="font-mono text-white text-[11px] font-bold block mt-1">“{test.opB}”</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-4 pt-3 border-t border-white/5 flex items-start gap-2 text-[11px]">
                                 <span className="text-brand-blue shrink-0">💡</span>
                                 <p className="text-secondary leading-relaxed"><strong className="text-white/95">Racional:</strong> {test.rationale}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Video Mockup */}
                  <div className="flex justify-center mt-12">
                     <div className="relative w-full max-w-[280px] aspect-[9/19.5] rounded-[40px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] bg-black">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover scale-[1.03]"
                        >
                          <source
                            src="/images/cases/Hook/projeto-hook.mp4"
                            type="video/mp4"
                          />
                        </video>
                     </div>
                  </div>
               </div>
            </div>

            {/* Step 5 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">5</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold font-display text-white">{t.step5Title}</h4>
                     <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                        {t.step5Desc}
                     </p>
                  </div>
               </div>

               <div className="ml-0 md:ml-20 space-y-8">
                  <div className="p-8 bg-gradient-to-r from-brand-blue/10 to-transparent border border-brand-blue/20 rounded-3xl space-y-6 relative overflow-hidden">
                     <div className="absolute top-4 right-4 px-3 py-1 bg-brand-blue/20 rounded-full text-[10px] tracking-widest uppercase font-bold text-brand-blue font-mono">
                        {t.step5RoleBadge}
                     </div>
                     
                     <div className="space-y-2">
                        <h5 className="text-lg font-bold text-white flex items-center gap-2">
                           <span>✍</span> {t.step5RoleTitle}
                        </h5>
                     </div>

                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {t.step5RoleItems.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-secondary">
                              <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                              <span>{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {t.step5Cards.map((card, i) => (
                        <div key={i} className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                           <h6 className="font-bold text-white text-base">{card.title}</h6>
                           <p className="text-xs text-brand-blue font-semibold">{card.finding}</p>
                           <p className="text-sm text-secondary leading-relaxed">{card.insight}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* A Solução */}
        <section className="max-w-4xl mx-auto space-y-32">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.solutionTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.solutionSubtitle}</h3>
             <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                {t.solutionDesc}
             </p>
          </div>

          <div className="space-y-48">
            {/* Solution: Home */}
            <div className="space-y-12">
               <div className="flex justify-between items-end border-b border-white/10 pb-6">
                 <h4 className="text-4xl font-display font-bold">{t.solHome.title}</h4>
                 <div className="flex gap-2">
                    {t.solHome.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">{tag}</span>
                    ))}
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">{t.beforeLabel}</span>
                     <p className="text-secondary leading-relaxed text-sm">{t.solHome.before}</p>
                  </div>
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">{t.afterLabel}</span>
                     <ul className="space-y-2">
                        {t.solHome.after.map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs text-secondary font-medium">
                             <ChevronRight size={14} className="text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                  <img src="/images/cases/Hook/home-hook.png" alt="Solução Home" className="w-full h-auto" />
               </div>
            </div>

            {/* Solution: Busca */}
            <div className="space-y-12">
               <div className="flex justify-between items-end border-b border-white/10 pb-6">
                 <h4 className="text-4xl font-display font-bold">{t.solBusca.title}</h4>
                 <div className="flex gap-2">
                    {t.solBusca.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">{tag}</span>
                    ))}
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">{t.beforeLabel}</span>
                     <p className="text-secondary leading-relaxed text-sm">{t.solBusca.before}</p>
                  </div>
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">{t.afterLabel}</span>
                     <ul className="space-y-2">
                        {t.solBusca.after.map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs text-secondary font-medium">
                             <ChevronRight size={14} className="text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark max-w-4xl mx-auto">
                  <img src="/images/cases/Hook/busca-hook.png" alt="Solução Busca" className="w-full h-auto" />
               </div>
            </div>

            {/* Solution: PDP */}
            <div className="space-y-12">
               <div className="flex justify-between items-end border-b border-white/10 pb-6">
                 <h4 className="text-4xl font-display font-bold">{t.solPDP.title}</h4>
                 <div className="flex gap-2">
                    {t.solPDP.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">{tag}</span>
                    ))}
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">{t.beforeLabel}</span>
                     <p className="text-secondary leading-relaxed text-sm">{t.solPDP.before}</p>
                  </div>
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">{t.afterLabel}</span>
                     <ul className="space-y-2">
                        {t.solPDP.after.map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs text-secondary font-medium">
                             <ChevronRight size={14} className="text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark max-w-4xl mx-auto">
                  <img src="/images/cases/Hook/pdp-hook.png" alt="Solução PDP" className="w-full h-auto" />
               </div>
            </div>

          </div>
        </section>

        {/* Resultados */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.resultsTitle}</h2>
             <h3 className="text-2xl font-bold">{t.resultsSubtitle}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <p className="text-secondary text-lg leading-relaxed">
                  {t.resultsLead}
               </p>
               <div className="space-y-6">
                  {t.researchTakeaways.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                          {researchIcons[i]}
                       </div>
                       <p className="text-sm text-secondary font-medium">{item.text}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="p-10 bg-brand-blue border border-brand-blue/20 rounded-[40px] text-white space-y-6 glow-blue">
               <h4 className="text-xs uppercase font-bold tracking-widest opacity-60">{t.impactsTitle}</h4>
               <ul className="space-y-4">
                  {t.impacts.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm font-bold">
                       <CheckCircle2 size={18} className="shrink-0" />
                       {item}
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
