import { motion } from "motion/react";
import { ArrowLeft, BookOpen, ExternalLink, ShieldCheck, CheckCircle2, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import LanguageSelector from "../../components/LanguageSelector";
import { socialMediaData } from "../../i18n/cases/socialMediaData";

export default function CaseSocialMedia() {
  const { language } = useLanguage();
  const t = socialMediaData[language];

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
          {/* Smartphone Simulator Top Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#121214] border-b border-white/5 z-20 shrink-0 text-xs text-white/45 font-semibold font-sans">
            <span>09:41</span>
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center border border-white/5 shadow-inner">
              <div className="w-3.5 h-3.5 rounded-full bg-neutral-900 border-2 border-neutral-800" />
            </div>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="w-5 h-3.5 border border-white/20 rounded-[3px] p-[2px] flex items-center"><div className="w-full h-full bg-white/70 rounded-[1px]" /></div>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <img 
              src="/images/cases/others/social-media-1.png" 
              alt="Social Media banner" 
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
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.tenureLabel}</span>
            <p className="text-secondary text-sm">{t.overview.tenureValue}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.partnersLabel}</span>
            <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">{t.overview.partnersValue}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.focusLabel}</span>
            <p className="text-secondary text-sm leading-snug">{t.overview.focusValue}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.institutionLabel}</span>
            <p className="text-secondary text-sm font-bold flex items-center gap-2">
              <ShieldCheck size={14} className="text-brand-blue" />
              {t.overview.institutionValue}
            </p>
          </div>
        </div>
      </section>

      {/* Main content body */}
      <main className="px-6 space-y-24 mt-12">
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.connectedTitle}</h2>
            {t.connectedParas.map((para, idx) => (
              <p key={idx} className="text-secondary leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <a 
              href="https://www.behance.net/gallery/144068243/Portfolio-Social-Media-Victor-Leal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-2xl flex items-center gap-2 glow-blue shadow-lg transition-all transform hover:-translate-y-1"
            >
              <ExternalLink size={18} />
              {t.ctaButton}
            </a>
          </div>
        </section>

        {/* Strategy Pillars Section */}
        <section className="max-w-4xl mx-auto p-12 md:p-20 bg-card-dark border border-white/5 rounded-[56px] space-y-12">
          <h4 className="text-3xl font-bold flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
              <Award size={24} />
            </div>
            {t.approachTitle}
          </h4>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-8">
              {t.approachCol1.map((item, i) => (
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
              {t.approachCol2.map((item, i) => (
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
