import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getExperiencesData, LocalizedExperience } from "../i18n/experiencesData";

const ExperienceCard: React.FC<{ exp: LocalizedExperience, isMain?: boolean, open: boolean, onToggle: () => void }> = ({ exp, isMain, open, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        relative group rounded-[32px] border transition-all duration-500 overflow-hidden
        ${isMain 
          ? "bg-gradient-to-br from-white/[0.04] to-brand-blue/[0.02] border-brand-blue/30 shadow-2xl shadow-brand-blue/5" 
          : "bg-white/[0.02] border-white/5 hover:border-white/10 shadow-sm"
        }
      `}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left p-8 md:p-10 transition-colors ${open ? "bg-white/[0.02]" : ""}`}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className={`font-bold ${isMain ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                {exp.company}
              </h3>
            </div>
            
            <div className="flex flex-col gap-1">
              <p className={`font-medium ${isMain ? "text-lg text-white" : "text-white/80"}`}>{exp.role}</p>
              <p className="text-secondary text-sm">{exp.period}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-md text-[10px] font-medium text-secondary/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
            ${open ? "bg-brand-blue text-white rotate-180" : "bg-white/5 text-secondary group-hover:bg-white/10"}
          `}>
            <ChevronDown size={20} />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className={`p-8 md:p-10 pt-0 border-t border-white/5 space-y-8`}>
              <div className="mt-8">
                <div className={`leading-relaxed text-secondary ${isMain ? "text-lg md:text-xl" : "text-base"}`}>
                  {exp.summary}
                </div>
              </div>

              <div className={`grid grid-cols-1 ${isMain && exp.details && exp.details.length > 1 ? "md:grid-cols-2" : ""} gap-8`}>
                {exp.details?.map((detail, i) => (
                  <div key={i} className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue">{detail.title}</h4>
                    <ul className="space-y-3">
                      {detail.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-secondary text-sm leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-brand-blue mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Experiences() {
  const [openId, setOpenId] = useState<string | null>("magalu");
  const { language } = useLanguage();
  const { titleMain, titleHighlight, subtitle, items: experiences } = getExperiencesData(language);

  const mainExp = experiences.find(e => e.isMain);
  const secondaryExps = experiences.filter(e => !e.isMain);

  return (
    <section id="experiences" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">{titleMain} <span className="text-brand-blue">{titleHighlight}</span></h2>
          <p className="text-secondary max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-6">
          {mainExp && (
            <ExperienceCard 
              exp={mainExp} 
              isMain={true} 
              open={openId === mainExp.id}
              onToggle={() => setOpenId(openId === mainExp.id ? null : mainExp.id)}
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {secondaryExps.map((exp) => (
              <ExperienceCard 
                key={exp.id} 
                exp={exp} 
                open={openId === exp.id}
                onToggle={() => setOpenId(openId === exp.id ? null : exp.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
