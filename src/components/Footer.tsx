import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display font-bold text-xl tracking-tighter">
          VICTOR<span className="text-brand-blue">LEAL</span>
        </div>
        
        <div className="text-sm text-secondary text-center md:text-right">
          <p>© {currentYear} Victor Leal. {t.rights}</p>
          <p className="mt-1">{t.craftedWith} <span className="text-brand-blue">{t.craftedHighlight}</span>.</p>
        </div>
      </div>
    </footer>
  );
}

