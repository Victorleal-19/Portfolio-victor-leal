import { motion } from "motion/react";
import { MessageCircle, Mail, Download, Linkedin, Send, Hash, Instagram } from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    href: "https://www.linkedin.com/in/victorlealalo-ux-writer/",
    color: "hover:text-[#0077B5]",
    description: "Para networking e currículo."
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle size={24} />,
    href: "https://api.whatsapp.com/send?phone=5534992477580&text=Ol%C3%A1%20Victor%2C%20tudo%20bem%3F%20Adorei%20o%20seu%20trabalho!%20Bora%20bater%20um%20papo%3F",
    color: "hover:text-[#25D366]",
    description: "Resposta rápida."
  },
  {
    name: "E-mail",
    icon: <Mail size={24} />,
    href: "mailto:victorlealalo19@gmail.com",
    color: "hover:text-brand-blue",
    description: "Para propostas e parcerias."
  },
  {
    name: "Medium",
    icon: <Send size={24} />,
    href: "https://medium.com/@victorleal19",
    color: "hover:text-white",
    description: "Artigos e pensamentos."
  },
  {
    name: "Behance",
    icon: <Hash size={24} />,
    href: "https://www.behance.net/victorleal9",
    color: "hover:text-[#1769FF]",
    description: "Visual stories e cases."
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Bora <span className="text-brand-blue">Conversar?</span></h2>
          <p className="text-secondary max-w-xl mx-auto">Sinta-se à vontade para me chamar para um café (digital ou não), falar sobre projetos ou apenas trocar figurinhas sobre UX e IA.</p>
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
            href="https://drive.google.com/file/d/1ctcDkJTjfS1GaqajdKTYiznT0STGUOCm/view?usp=drive_link"
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
              <h3 className="text-xl font-bold text-white">Download CV</h3>
              <p className="text-sm text-white/80">Versão PDF completa.</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
