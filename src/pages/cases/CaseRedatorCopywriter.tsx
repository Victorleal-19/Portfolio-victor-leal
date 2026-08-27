import { motion } from "motion/react";
import { ArrowLeft, BookOpen, ExternalLink, Mail, CheckCircle2, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import LanguageSelector from "../../components/LanguageSelector";
import { copywriterData } from "../../i18n/cases/copywriterData";

export default function CaseRedatorCopywriter() {
  const { language } = useLanguage();
  const t = copywriterData[language];

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

      {/* Banner showcasing the custom artwork */}
      <section className="px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark flex flex-col"
        >
          {/* Browser Window Header Mockup */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-[#121214] border-b border-white/5 z-20 shrink-0">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/75 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/75 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-green-500/75 shadow-sm" />
            </div>
            <div className="flex-1 max-w-md mx-auto h-7 bg-white/5 rounded-lg flex items-center justify-center text-xs text-white/40 font-mono border border-white/5">
              behance.net/gallery/144066663/Portfolio-Redator-e-Copywriter
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <img 
              src="/images/cases/others/copy-1.png" 
              alt="Copywriting banner" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/5 py-12">
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.methodLabel}</span>
            <p className="text-secondary text-sm">{t.overview.methodValue}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.objectiveLabel}</span>
            <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">{t.overview.objectiveValue}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.channelsLabel}</span>
            <p className="text-secondary text-sm leading-snug">{t.overview.channelsValue}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.styleLabel}</span>
            <p className="text-secondary text-sm font-bold flex items-center gap-2">
              <Mail size={14} className="text-brand-blue" />
              {t.overview.styleValue}
            </p>
          </div>
        </div>
      </section>

      {/* Main content body */}
      <main className="px-6 space-y-24 mt-12">
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.strategicTitle}</h2>
            {t.strategicParas.map((para, idx) => (
              <p key={idx} className="text-secondary leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <a 
              href="https://www.behance.net/gallery/144066663/Portfolio-Redator-e-Copywriter-Victor-Leal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-2xl flex items-center gap-2 glow-blue shadow-lg transition-all transform hover:-translate-y-1"
            >
              <ExternalLink size={18} />
              {t.ctaButton}
            </a>
          </div>
        </section>

        {/* Persuasion Blueprint Section */}
        <section className="max-w-4xl mx-auto p-12 md:p-20 bg-card-dark border border-white/5 rounded-[56px] space-y-12">
          <h4 className="text-3xl font-bold flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
              <Award size={24} />
            </div>
            {t.methodTitle}
          </h4>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-8">
              {t.methodCol1.map((item, i) => (
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
              {t.methodCol2.map((item, i) => (
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
