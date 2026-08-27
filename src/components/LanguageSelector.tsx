import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "motion/react";

interface LanguageSelectorProps {
  className?: string;
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = "", compact = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all ${className}`}
      role="group"
      aria-label="Language selector / Seletor de idioma"
    >
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          language === "pt"
            ? "text-white bg-brand-blue/90 shadow-sm shadow-brand-blue/20"
            : "text-white/60 hover:text-white hover:bg-white/5"
        }`}
        aria-pressed={language === "pt"}
      >
        <span className="text-sm leading-none">🇧🇷</span>
        <span>PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          language === "en"
            ? "text-white bg-brand-blue/90 shadow-sm shadow-brand-blue/20"
            : "text-white/60 hover:text-white hover:bg-white/5"
        }`}
        aria-pressed={language === "en"}
      >
        <span className="text-sm leading-none">🇺🇸</span>
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSelector;
