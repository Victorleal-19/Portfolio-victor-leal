import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative aspect-[4/5] bg-card-dark rounded-[40px] overflow-hidden group"
        >
          {/* Placeholder for Victor's photo */}
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
            <h2 className="text-3xl md:text-5xl font-bold">Um pouco + sobre <span className="text-brand-blue">Mim</span></h2>
          </div>

          <div className="space-y-6 text-lg text-secondary leading-relaxed font-light">
             <p>
               Me considero uma pessoa curiosa por natureza, e acredito que isso seja uma ótima qualidade (e você?). Também sou bastante flexível e adaptável, gosto de trabalhar em equipe e trocar ideias com pessoas diferentes para construir soluções melhores de forma colaborativa.
             </p>
             <p>
               Tenho muita vontade de aprender, explorar coisas novas e transformar conhecimento em prática no dia a dia. Por isso, estou sempre estudando temas ligados a UX Writing, pesquisa, IA, acessibilidade e linguagem simples. 
               
               Além disso, adoro escrever, ler, ouvir e contar boas histórias. Sou alto-astral, gosto de estar perto de quem amo e acredito muito no poder que uma boa comunicação tem de aproximar pessoas.
             </p>
          </div>

          <div className="relative p-8 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r-3xl">
             <Quote size={40} className="absolute -top-4 -right-4 text-brand-blue/20" />
             <p className="text-xl font-display font-medium italic text-white/90">
               "O que me move é a missão de facilitar o acesso à informação por meio da linguagem simples, humana e acessível para todas as pessoas."
             </p>
          </div>

          <div className="flex gap-8">
             <div className="space-y-1">
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-[10px] uppercase font-bold text-brand-blue tracking-tighter">Anos de experiência</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-[10px] uppercase font-bold text-brand-blue tracking-tighter">Grandes marcas</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-[10px] uppercase font-bold text-brand-blue tracking-tighter">Foco no usuário</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
