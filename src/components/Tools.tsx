import { motion } from "motion/react";
import { 
  Bot, 
  MessageSquare, 
  Globe, 
  BarChart, 
  Layout, 
  Smartphone, 
  Terminal,
  Pencil,
  Zap,
  Cpu,
  Code
} from "lucide-react";

const toolCategories = [
  {
    name: "AI & Content",
    tools: [
      "Claude",
      "Claude Code",
      "ChatGPT",
      "Gemini",
      "Notebook LM",
      "Google AI Studio",
      "VoiceFlow",
      "Lovable",
      "Antigravity",
      "VS Code"
    ],
    icon: <Bot size={20} className="text-brand-blue" />,
  },
  {
    name: "UX, Design & Research",
    tools: [
      "Figma",
      "FigJam",
      "Figma Make",
      "Miro",
      "Canva",
      "Photoshop",
      "CapCut"
    ],
    icon: <Pencil size={20} className="text-brand-blue" />,
  },
  {
    name: "SEO & Analytics",
    tools: [
      "Google Trends",
      "Ubersuggest",
      "Google Analytics"
    ],
    icon: <BarChart size={20} className="text-brand-blue" />,
  },
  {
    name: "Documentation & Collaboration",
    tools: [
      "Notion",
      "Confluence",
      "Zeroheight",
      "Google Workspace",
      "Slack",
      "Discord",
      "Asana",
      "Trello"
    ],
    icon: <Globe size={20} className="text-brand-blue" />,
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Stack de <span className="text-brand-blue">Ferramentas</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/10 rounded-lg">
                  {cat.icon}
                </div>
                <h3 className="font-bold uppercase tracking-widest text-xs">{cat.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <motion.div
                    key={tool}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-card-dark border border-white/5 rounded-xl text-sm font-medium text-secondary hover:text-white hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all cursor-default flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/50" />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-12 bg-gradient-to-r from-brand-blue/10 to-transparent border border-brand-blue/20 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold italic tracking-tight">"Design de conteúdo é descobrir a melhor maneira de dar às pessoas a informação que elas precisam, no formato que precisam, no momento exato."</h3>
            <p className="text-secondary">— Sarah Winters, fundadora do Content Design London</p>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-[100px]" />
          <Terminal size={120} className="text-brand-blue/5 absolute right-10 top-1/2 -translate-y-1/2 rotate-12" />
        </div>
      </div>
    </section>
  );
}
