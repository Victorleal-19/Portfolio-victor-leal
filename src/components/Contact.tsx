import { motion } from "motion/react";
import { MessageCircle, Mail, Download, Linkedin, Send, Hash } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const links = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/victorlealalo-ux-writer/",
      color: "hover:text-[#0077B5]",
      description: t.linkedinDesc
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} />,
      href: language === "en" 
        ? "https://api.whatsapp.com/send?phone=5534992477580&text=Hi%20Victor!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect."
        : "https://api.whatsapp.com/send?phone=5534992477580&text=Ol%C3%A1%20Victor%2C%20tudo%20bem%3F%20Adorei%20o%20seu%20trabalho!%20Bora%20bater%20um%20papo%3F",
      color: "hover:text-[#25D366]",
      description: t.whatsappDesc
    },
    {
      name: "E-mail",
      icon: <Mail size={24} />,
      href: "mailto:victorlealalo19@gmail.com",
      color: "hover:text-brand-blue",
      description: t.emailDesc
    },
    {
      name: "Medium",
      icon: <Send size={24} />,
      href: "https://medium.com/@victorleal19",
      color: "hover:text-white",
      description: t.mediumDesc
    },
    {
      name: "Behance",
      icon: <Hash size={24} />,
      href: "https://www.behance.net/victorleal9",
      color: "hover:text-[#1769FF]",
      description: t.behanceDesc
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">{t.titleMain} <span className="text-brand-blue">{t.titleHighlight}</span></h2>
          <p className="text-secondary max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 bg-card-dark border border-white/5 rounded-[32px] group transition-all hover:bg-white/[0.04] hover:border-white/10 ${link.color}`}
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                  {link.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{link.name}</h3>
                  <p className="text-sm text-secondary group-hover:text-white/60 transition-colors">{link.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
          
          <motion.a
            href="https://drive.google.com/file/d/1C3P89VZFnmw6YIriinxWBgM92QhpqExl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-brand-blue border border-brand-blue rounded-[32px] group flex items-center gap-6 glow-blue glow-blue-hover transition-all cursor-pointer"
          >
            <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors">
              <Download size={24} className="text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">{t.downloadCvTitle}</h3>
              <p className="text-sm text-white/80">{t.downloadCvDesc}</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

