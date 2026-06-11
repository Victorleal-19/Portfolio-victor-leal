import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] -z-10" />

      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-semibold text-brand-blue uppercase tracking-widest"
        >
          Disponível para novos desafios
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold leading-tight"
          >
            UX Writer <br />
            <span className="text-secondary">& Content Designer</span>
          </motion.h1>


        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          UX Writer com origem no Jornalismo e vivência em Marketing Digital. Com a missão de garantir o acesso à informação para todos, conecto UX Writing, Pesquisa, IA e visão de produto para criar experiências mais claras, acessíveis e orientadas a resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#cases"
            className="group px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl flex items-center gap-2 glow-blue glow-blue-hover transition-all"
          >
            Ver cases
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://drive.google.com/file/d/1ctcDkJTjfS1GaqajdKTYiznT0STGUOCm/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
          >
            <Download size={20} />
            Baixar CV
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[10%] w-12 h-12 bg-white/5 border border-white/10 rounded-xl blur-sm md:block hidden"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[15%] w-16 h-16 bg-brand-blue/5 border border-brand-blue/10 rounded-full blur-sm md:block hidden"
      />
    </section>
  );
}
