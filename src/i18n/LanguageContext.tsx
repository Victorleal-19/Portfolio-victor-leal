import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_language_pref";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "pt" || saved === "en") {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }
    return "pt";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore localStorage errors
    }
  };

  useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";

    // Update document title and meta description
    const isEnglish = language === "en";
    
    // Base SEO Title
    if (document.title.includes("Victor Leal") || document.title === "My Google AI Studio App") {
      document.title = isEnglish
        ? "Victor Leal | UX Writer & Content Designer Portfolio"
        : "Victor Leal | Portfólio de UX Writer & Content Designer";
    }

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      isEnglish
        ? "Portfolio of Victor Leal, UX Writer and Content Designer specialized in AI, digital products, and simple, accessible language."
        : "Portfólio de Victor Leal, UX Writer e Content Designer focado em IA, produtos digitais e linguagem simples e acessível."
    );

    // OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute(
      "content",
      isEnglish
        ? "Victor Leal | UX Writer & Content Designer"
        : "Victor Leal | UX Writer & Content Designer"
    );

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute(
      "content",
      isEnglish
        ? "Explore UX writing, content design, and behavioral research cases by Victor Leal."
        : "Explore cases de UX writing, content design e pesquisa comportamental de Victor Leal."
    );

    // Hreflang links
    let hreflangPt = document.querySelector('link[hreflang="pt-BR"]');
    if (!hreflangPt) {
      hreflangPt = document.createElement("link");
      hreflangPt.setAttribute("rel", "alternate");
      hreflangPt.setAttribute("hreflang", "pt-BR");
      hreflangPt.setAttribute("href", window.location.origin + window.location.pathname);
      document.head.appendChild(hreflangPt);
    }

    let hreflangEn = document.querySelector('link[hreflang="en-US"]');
    if (!hreflangEn) {
      hreflangEn = document.createElement("link");
      hreflangEn.setAttribute("rel", "alternate");
      hreflangEn.setAttribute("hreflang", "en-US");
      hreflangEn.setAttribute("href", window.location.origin + window.location.pathname);
      document.head.appendChild(hreflangEn);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isEn: language === "en" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
