import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Award, ChevronRight, Target, Layout, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";
import { brandbookData } from "../i18n/cases/brandbookData";

export default function CaseBrandbook() {
  const { language } = useLanguage();
  const t = brandbookData[language];

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
                <BookOpen size={14} className="text-brand-blue" />
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
             {t.summaryParas.map((para, idx) => (
               <p key={idx} className="text-secondary leading-relaxed text-lg">
                 {para}
               </p>
             ))}
          </div>
        </section>

        {/* Contexto */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.contextTitle}</h2>
             {t.contextParas.map((para, idx) => (
               <p key={idx} className="text-secondary leading-relaxed text-lg">
                 {para}
               </p>
             ))}
          </div>
        </section>

        {/* O Desafio */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.challengeTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.challengeSubtitle}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.challengeItems.map((item, i) => (
              <div key={i} className="p-8 bg-card-dark border border-white/5 rounded-3xl flex gap-4 items-start">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={20} />
                <span className="text-secondary text-lg">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-secondary leading-relaxed text-lg italic text-center max-w-2xl mx-auto">
            {t.challengeQuote}
          </p>
        </section>

        {/* Meu Papel */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.roleTitle}</h2>
             <p className="text-secondary text-lg leading-relaxed">
                {t.roleDesc}
             </p>
          </div>

          <div className="bg-card-dark border border-white/5 rounded-[32px] overflow-hidden shadow-xl">
             <div className="p-8 md:p-12 space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">{t.roleScopeTitle}</h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                   {t.roleScopeItems.map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-white font-bold pb-4 border-b border-white/5">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                        {item}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Meu Processo de Trabalho */}
        <section className="max-w-4xl mx-auto space-y-32">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.processTitle}</h2>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[0].num}</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.steps[0].title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.steps[0].desc}
                     </p>
                  </div>
               </div>
               <div className="ml-20 grid sm:grid-cols-2 gap-4">
                  {t.steps[0].items?.map((item, i) => (
                    <div key={i} className="flex gap-3 text-secondary text-sm">
                       <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                       <span>{item}</span>
                    </div>
                  ))}
               </div>
               {t.steps[0].quote && (
                 <div className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl ml-20 text-center italic">
                    <p className="text-secondary">{t.steps[0].quote}</p>
                 </div>
               )}
            </div>

            {/* Step 2 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[1].num}</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.steps[1].title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.steps[1].desc}
                     </p>
                  </div>
               </div>
               <div className="ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {t.steps[1].items?.map((item, i) => (
                    <div key={i} className="p-6 bg-card-dark border border-white/5 rounded-2xl text-sm text-secondary leading-relaxed font-medium">
                       {item}
                    </div>
                  ))}
               </div>
               {t.steps[1].bottomText && (
                 <p className="text-secondary leading-relaxed ml-20">
                    {t.steps[1].bottomText}
                 </p>
               )}
            </div>

            {/* Step 3 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[2].num}</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.steps[2].title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.steps[2].desc}
                     </p>
                  </div>
               </div>
               <div className="ml-20 grid sm:grid-cols-2 gap-4">
                  {t.steps[2].items?.map((item, i) => (
                    <div key={i} className="flex gap-3 text-secondary text-sm">
                       <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                       <span>{item}</span>
                    </div>
                  ))}
               </div>
               {t.steps[2].bottomText && (
                 <p className="text-secondary leading-relaxed ml-20">
                    {t.steps[2].bottomText}
                 </p>
               )}
            </div>

            {/* Step 4 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[3].num}</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.steps[3].title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.steps[3].desc}
                     </p>
                  </div>
               </div>
               
               <div className="ml-20 space-y-16">
                  {t.steps[3].subsections?.map((sub, idx) => (
                    <div key={idx} className="space-y-8">
                       <h5 className="text-xl font-bold text-white flex items-center gap-3">
                          <div className="w-2 h-2 bg-brand-blue rounded-full" />
                          {sub.title}
                       </h5>
                       <p className="text-secondary">{sub.desc}</p>
                       {sub.img && (
                         <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                            <img src={sub.img} alt={sub.imgAlt || sub.title} className="w-full h-auto block" />
                         </div>
                       )}
                    </div>
                  ))}
               </div>
            </div>

            {/* Step 5 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">{t.steps[4].num}</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{t.steps[4].title}</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        {t.steps[4].desc}
                     </p>
                  </div>
               </div>
               <div className="ml-20 flex flex-wrap gap-4">
                  {t.steps[4].items?.map((item, i) => (
                    <div key={i} className="px-6 py-3 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl text-secondary text-sm font-bold">
                       {item}
                    </div>
                  ))}
               </div>
               {t.steps[4].bottomText && (
                 <p className="text-secondary leading-relaxed ml-20">
                    {t.steps[4].bottomText}
                 </p>
               )}
            </div>
          </div>
        </section>

        {/* A Solução */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.solutionTitle}</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">{t.solutionSubtitle}</h3>
             <p className="text-secondary leading-relaxed text-lg">
                {t.solutionDesc}
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="space-y-6">
                <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                   <h5 className="font-bold text-brand-blue">{t.materialTitle}</h5>
                   <ul className="space-y-2">
                      {t.materialItems.map(item => (
                        <li key={item} className="text-sm font-bold flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <p className="text-secondary leading-relaxed italic">
                   {t.solutionNote}
                </p>
             </div>
             <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                <img src="/images/cases/brandbook/personalidade.png" alt="Personalidade da marca" className="w-full h-auto block" />
             </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">{t.resultsTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <h4 className="text-2xl font-bold text-white">{t.businessImpactTitle}</h4>
               <div className="space-y-4">
                  {t.businessImpacts.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                          <Target size={18} className="text-brand-blue" />
                       </div>
                       <p className="text-sm text-secondary font-medium">{item}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="p-10 bg-brand-blue border border-brand-blue/20 rounded-[40px] text-white space-y-6 glow-blue">
               <h4 className="text-xs uppercase font-bold tracking-widest opacity-60">{t.strategicBenefitsTitle}</h4>
               <ul className="space-y-4">
                  {t.strategicBenefits.map((item, i) => (
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
           <h4 className="text-3xl font-bold flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <Award size={24} />
             </div>
             {t.learningsTitle}
           </h4>
           <div className="grid md:grid-cols-2 gap-12">
             <ul className="space-y-8">
               {t.learningsCol1.map((item, i) => (
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
               {t.learningsCol2.map((item, i) => (
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
