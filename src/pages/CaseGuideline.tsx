import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Bookmark, Box, Award, Layout, Briefcase, Smartphone, TrendingUp, Tag, CreditCard, Layers, Globe, Zap, Settings, Search, Library, PenTool, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";
import { guidelineData } from "../i18n/cases/guidelineData";

export default function CaseGuideline() {
  const { language } = useLanguage();
  const t = guidelineData[language];

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

      {/* Hero Image Container */}
      <section className="px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark"
        >
          <img 
            src="/images/cases/guideline/banner.png" 
            alt="Guideline: Linguagem para E-commerce Magalu banner" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Main Content Details */}
      <main className="px-6 max-w-5xl mx-auto space-y-32 mt-20">
        
        {/* RESUMO SECTION */}
        <section className="py-12 border-b border-white/5">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight">{t.summaryTitle}</h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              {t.summaryParas.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEXTO SECTION */}
        <section className="py-24 border-b border-white/5 space-y-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex items-center gap-4 text-brand-blue">
               <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                  <Bookmark size={24} />
               </div>
               <h2 className="text-3xl font-bold uppercase tracking-tight">{t.contextTitle}</h2>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white italic">{t.contextSubtitle}</h3>
              <p className="text-secondary text-lg leading-relaxed">
                {t.contextDesc}
              </p>
              
              <div className="p-10 bg-card-dark border border-white/5 rounded-[40px] space-y-6">
                 <p className="text-sm font-bold text-brand-blue uppercase tracking-widest">{t.contextResultTitle}</p>
                 <ul className="grid md:grid-cols-2 gap-6">
                    {t.contextResults.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>

          {/* Oportunidade */}
          <div className="max-w-3xl mx-auto space-y-12">
             <h3 className="text-2xl font-bold text-white">{t.oppTitle}</h3>
             <p className="text-secondary text-lg leading-relaxed">
                {t.oppLead}
             </p>

             <div className="grid md:grid-cols-2 gap-6">
                {t.opps.map((opt, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-2">
                     <h4 className="font-bold text-white flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500" /> {opt.title}
                     </h4>
                     <p className="text-sm text-secondary leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
             </div>

             <div className="p-8 border-l-4 border-brand-blue bg-brand-blue/5 rounded-r-3xl">
                <p className="text-secondary text-sm">{t.oppNote}</p>
             </div>
          </div>
        </section>

        {/* DESAFIO SECTION */}
        <section className="py-24 border-b border-white/5 space-y-24">
           <div className="max-w-3xl mx-auto space-y-12">
             <div className="flex items-center gap-4 text-brand-blue">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                   <Zap size={24} />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight">{t.challengeTitle}</h2>
             </div>

             <div className="space-y-8">
               <h3 className="text-2xl font-bold text-white">{t.challengeSubtitle}</h3>
               <p className="text-secondary text-lg leading-relaxed">{t.challengeDesc}</p>
               <div className="flex flex-wrap gap-4">
                  {t.challengeTags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-secondary">{tag}</span>
                  ))}
               </div>
             </div>
           </div>

           <div className="max-w-3xl mx-auto p-12 bg-white/[0.02] border border-white/10 rounded-[40px] space-y-10">
              <h4 className="text-xl font-bold flex items-center gap-3">
                 <Search size={24} className="text-brand-blue" />
                 {t.tensionTitle}
              </h4>
              <ul className="space-y-6">
                 {t.tensionQuestions.map((q, i) => (
                   <li key={i} className="flex gap-4 items-start text-secondary text-lg italic">
                      <span className="text-brand-blue font-black opacity-40">?</span>
                      {q}
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* PAPEL SECTION */}
        <section className="py-24 border-b border-white/5 space-y-16">
           <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Settings size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">{t.roleTitle}</h2>
              </div>
              <h3 className="text-2xl font-bold text-white italic">{t.roleSubtitle}</h3>
              <p className="text-secondary text-lg">{t.roleDesc}</p>
           </div>

           <div className="max-w-5xl mx-auto bg-card-dark border border-white/5 rounded-[32px] overflow-hidden">
              <div className="grid md:grid-cols-2">
                 {t.roleCards.map((rc, idx) => (
                   <div key={idx} className="p-10 border-b md:border-b-0 md:border-r border-white/5 space-y-4 hover:bg-white/[0.02] transition-colors">
                      <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">{rc.tag}</span>
                      <h4 className="text-xl font-bold">{rc.title}</h4>
                      <p className="text-sm text-secondary leading-relaxed">{rc.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PROCESSO SECTION */}
        <section className="py-24 border-b border-white/5">
           <div className="max-w-3xl mx-auto space-y-24">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Layers size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">{t.processTitle}</h2>
              </div>

              <div className="space-y-32">
                 {t.processSteps.map((proc, i) => (
                    <div key={i} className="relative pl-20 group">
                       <div className="absolute left-0 top-0 text-7xl font-display font-black text-brand-blue opacity-5 group-hover:opacity-10 transition-opacity">{proc.step}</div>
                       <div className="space-y-4">
                          <h4 className="text-2xl font-bold text-white italic">{proc.title}</h4>
                          <p className="text-secondary text-lg leading-relaxed">{proc.desc}</p>
                          {i === 1 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 opacity-40">
                              {["Amazon", "Mercado Livre", "Shopee", "Shein"].map(b => (
                                <div key={b} className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center font-bold text-[10px] uppercase tracking-widest border border-white/10 hover:border-brand-blue/30 transition-all cursor-default">{b}</div>
                              ))}
                            </div>
                          )}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SOLUÇÃO SECTION */}
        <section className="py-24 border-b border-white/5 space-y-32">
           <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Globe size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">{t.solutionTitle}</h2>
              </div>
              <h3 className="text-2xl font-bold text-white italic">{t.solutionSubtitle}</h3>
              <p className="text-secondary text-lg leading-relaxed">
                {t.solutionDesc}
              </p>
           </div>

           <div className="space-y-12">
              
              {/* 1. Categorias de produtos */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Bookmark className="text-brand-blue" /> 📍 {t.sec1.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec1.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec1.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/categorias_produtos.png" alt={t.sec1.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec1.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 2. Nomes de produtos */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Box className="text-brand-blue" /> 📍 {t.sec2.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec2.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec2.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/nomes_produtos.png" alt={t.sec2.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec2.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 3. Nomes de marcas */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Award className="text-brand-blue" /> 📍 {t.sec3.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec3.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec3.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/nomes_marcas.png" alt={t.sec3.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec3.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 4. Títulos de vitrines */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Layout className="text-brand-blue" /> 📍 {t.sec4.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec4.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec4.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/titulos_vitrines.png" alt={t.sec4.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec4.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>

                 <div className="p-8 bg-brand-blue/5 border border-brand-blue/20 rounded-3xl">
                    <p className="text-sm text-secondary leading-relaxed">
                       {t.sec4.note}
                    </p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 5. Serviços e Submarcas */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Briefcase className="text-brand-blue" /> 📍 {t.sec5.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12 border-b border-white/5 pb-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec5.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec5.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/servicos_submarcas.png" alt={t.sec5.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec5.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 6. Botões (CTAs) */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Smartphone className="text-brand-blue" /> 📍 {t.sec6.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec6.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec6.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/botoes_ctas.png" alt={t.sec6.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec6.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 7. Prazos de entrega */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><TrendingUp className="text-brand-blue" /> 📍 {t.sec7.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec7.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec7.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/prazos_entrega.png" alt={t.sec7.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec7.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 8. Tags e selos */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Tag className="text-brand-blue" /> 📍 {t.sec8.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec8.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec8.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/tags_selos.png" alt={t.sec8.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec8.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 9. Pagamento */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><CreditCard className="text-brand-blue" /> 📍 {t.sec9.title}</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{t.beforeLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec9.before}</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">{t.afterLabel}</p>
                       <p className="text-secondary leading-relaxed">{t.sec9.after}</p>
                    </div>
                 </div>

                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/pagamento.png" alt={t.sec9.title} className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    {t.sec9.bullets.map((bullet, idx) => (
                      <p key={idx} className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> {bullet}</p>
                    ))}
                 </div>
              </div>

           </div>
        </section>

        {/* RESULTADOS SECTION */}
        <section className="py-24 border-b border-white/5 space-y-16">
           <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Library size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">{t.resultsTitle}</h2>
              </div>
              <h3 className="text-2xl font-bold text-white italic">{t.resultsSubtitle}</h3>
              <p className="text-secondary text-lg">{t.resultsLead}</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.resultsCards.map((res, i) => (
                <div key={i} className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                   <h4 className="font-bold text-white italic">{res.title}</h4>
                   <p className="text-sm text-secondary leading-relaxed">{res.desc}</p>
                </div>
              ))}
           </div>

           <div className="max-w-3xl mx-auto p-12 bg-brand-blue/10 border border-brand-blue/20 rounded-[40px] space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-4"><PenTool className="text-brand-blue" /> {t.learningsTitle}</h4>
              <ul className="space-y-6">
                 {t.learnings.map((learn, i) => (
                   <li key={i} className="space-y-1">
                      <div className="font-bold text-white flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {learn.title}
                      </div>
                      <p className="text-sm text-secondary pl-4 leading-relaxed">{learn.desc}</p>
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* PRÓXIMOS PASSOS SECTION */}
        <section className="py-24 space-y-16">
           <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 italic">{t.nextTitle}</h2>
              <h3 className="text-xl font-bold text-secondary">{t.nextSubtitle}</h3>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.nextSteps.map((prx, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-sm text-secondary flex items-center gap-3">
                   <ChevronRight size={14} className="text-brand-blue" /> {prx}
                </div>
              ))}
           </div>
        </section>

      </main>

      {/* Footer Branding */}
      <section className="py-24 border-t border-white/5 text-center space-y-8">
         <div className="px-10 py-4 bg-brand-blue/10 border border-brand-blue/20 rounded-full inline-block">
            <span className="font-display font-black text-3xl italic tracking-tighter">MAGALU</span>
         </div>
      </section>
    </div>
  );
}
