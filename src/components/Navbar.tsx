import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  const navItems = [
    { name: t.cases, href: "#cases" },
    { name: t.experiences, href: "#experiences" },
    { name: t.courses, href: "#courses" },
    { name: t.tools, href: "#tools" },
    { name: t.about, href: "#about" },
    { name: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-xl tracking-tighter"
        >
          VICTOR<span className="text-brand-blue">LEAL</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}

          {/* Language Selector placed before CTA */}
          <div className="flex items-center">
            <LanguageSelector />
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-brand-blue text-white text-sm font-semibold rounded-full glow-blue glow-blue-hover transition-all shrink-0"
          >
            {t.cta}
          </motion.a>
        </div>

        {/* Mobile Toggle and Language Selector */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSelector />
          <button 
            className="text-white p-1" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu / Open menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-card-dark border-b border-white/5"
      >
        <div className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-secondary hover:text-white py-1"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-3 bg-brand-blue text-white text-center text-sm font-semibold rounded-full glow-blue"
            onClick={() => setIsOpen(false)}
          >
            {t.cta}
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
