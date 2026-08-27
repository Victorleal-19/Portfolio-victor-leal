import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative aspect-[4/5] bg-card-dark rounded-[40px] overflow-hidden group"
        >
          {/* Photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent z-10 opacity-60" />
          <img 
            src="/images/perfil.jpeg" 
            alt="Victor Leal"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
            onError={(e) => {
              // Fallback to perfil.jpg if perfil.jpeg fails, then to Unsplash
              if (e.currentTarget.src.includes('perfil.jpeg')) {
                e.currentTarget.src = "/images/perfil.jpg";
              } else if (e.currentTarget.src.includes('perfil.jpg')) {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
              }
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 z-20 space-y-2">
             <h3 className="text-3xl font-display font-bold">Victor Leal</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">{t.titleMain} <span className="text-brand-blue">{t.titleHighlight}</span></h2>
          </div>

          <div className="space-y-6 text-lg text-secondary leading-relaxed font-light">
             <p>{t.p1}</p>
             <p className="whitespace-pre-line">{t.p2}</p>
             {t.p3 && <p>{t.p3}</p>}
          </div>

          <div className="relative p-8 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r-3xl">
             <Quote size={40} className="absolute -top-4 -right-4 text-brand-blue/20" />
             <p className="text-xl font-display font-medium italic text-white/90">
               {t.quote}
             </p>
          </div>

          <div className="flex gap-8">
             <div className="space-y-1">
                <p className="text-3xl font-bold text-white">{t.stat1Number}</p>
                <p className="text-[10px] uppercase font-bold text-brand-blue tracking-tighter">{t.stat1Label}</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-bold text-white">{t.stat2Number}</p>
                <p className="text-[10px] uppercase font-bold text-brand-blue tracking-tighter">{t.stat2Label}</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-bold text-white">{t.stat3Number}</p>
                <p className="text-[10px] uppercase font-bold text-brand-blue tracking-tighter">{t.stat3Label}</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

