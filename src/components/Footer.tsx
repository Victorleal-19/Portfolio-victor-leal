import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display font-bold text-xl tracking-tighter">
          VICTOR<span className="text-brand-blue">LEAL</span>
        </div>
        
        <div className="text-sm text-secondary text-center md:text-right">
          <p>© {currentYear} Victor Leal. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com <span className="text-brand-blue">Estratégia & Design System</span>.</p>
        </div>
      </div>
    </footer>
  );
}
