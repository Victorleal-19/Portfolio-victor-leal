import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Bookmark, Layout, Zap, Search, Globe, Library, PenTool, Type, FileText, ChevronRight, TrendingUp, Award, Smartphone, Info, Target, Settings, Layers, Box, Tag, CreditCard, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseGuideline() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Voltar para home</span>
          </Link>
          <div className="hidden md:flex gap-2">
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Governança</span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Magalu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-wrap justify-center md:justify-start gap-2"
          >
             {["UX Writing", "Content Design", "E-commerce", "Governança", "Linguagem", "Design System"].map(tag => (
               <span key={tag} className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold rounded-full uppercase tracking-wider">
                 {tag}
               </span>
             ))}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-bold leading-tight"
          >
            Guideline: Linguagem para E-commerce Magalu
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light"
          >
            A comunicação textual do e-commerce apresentava inconsistências recorrentes no uso de letras maiúsculas, minúsculas e caixa alta, impactando diretamente a clareza e a percepção de qualidade.
          </motion.p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-6">
        
        {/* RESUMO SECTION */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex items-center gap-4 text-brand-blue">
               <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                  <Info size={24} />
               </div>
               <h2 className="text-3xl font-bold uppercase tracking-tight">Resumo</h2>
            </div>
            
            <div className="space-y-8 text-secondary text-lg md:text-xl leading-relaxed">
              <p>
                A comunicação textual do e-commerce apresentava inconsistências recorrentes no uso de letras maiúsculas, minúsculas e caixa alta, um detalhe aparentemente simples, mas que impactava diretamente a clareza, a escaneabilidade e a percepção de qualidade da experiência.
              </p>
              <p>
                O que deveria ser uma comunicação fluida e confiável acabava gerando ruído visual e falta de padrão entre diferentes pontos da jornada.
              </p>
              <p>
                Meu trabalho foi contribuir para a construção de uma estratégia de padronização textual, definindo diretrizes claras para diferentes contextos da interface, de títulos e categorias até CTAs e estados de produto, garantindo consistência, legibilidade e alinhamento com boas práticas linguísticas.
              </p>
            </div>
          </div>
        </section>

        {/* CONTEXTO SECTION */}
        <section className="py-24 border-b border-white/5 space-y-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex items-center gap-4 text-brand-blue">
               <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                  <Target size={24} />
               </div>
               <h2 className="text-3xl font-bold uppercase tracking-tight">Contexto</h2>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white italic">Uma experiência fragmentada por falta de padrão</h3>
              <p className="text-secondary text-lg leading-relaxed">
                O e-commerce já operava com uma grande variedade de textos distribuídos entre vitrines, páginas de produto, categorias e fluxos de compra. No entanto, não havia um padrão consolidado para o uso de caixa alta e baixa.
              </p>
              
              <div className="p-10 bg-card-dark border border-white/5 rounded-[40px] space-y-6">
                 <p className="text-sm font-bold text-brand-blue uppercase tracking-widest">Isso resultava em:</p>
                 <ul className="grid md:grid-cols-2 gap-6">
                    {[
                      "Variações visuais entre páginas semelhantes",
                      "Falta de consistência em botões e chamadas para ação",
                      "Dificuldade de leitura e escaneabilidade",
                      "Percepção de desorganização na interface"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>

          {/* Oportunidade */}
          <div className="max-w-3xl mx-auto space-y-12">
             <h3 className="text-2xl font-bold text-white">A oportunidade identificada</h3>
             <p className="text-secondary text-lg leading-relaxed">
                A partir de análises internas e da observação da interface, ficou evidente que a padronização textual poderia atuar como um <span className="text-white font-bold">alavancador de experiência</span>, impactando diretamente:
             </p>

             <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Clareza na comunicação", desc: "Redução de ambiguidades e ruído visual." },
                  { title: "Redução de esforço cognitivo", desc: "Melhora a velocidade de leitura e compreensão." },
                  { title: "Confiança do usuário", desc: "Percepção de um produto robusto e bem cuidado." },
                  { title: "Escalabilidade", desc: "Processas mais rápidos para designers e escritores." }
                ].map((opt, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-2">
                     <h4 className="font-bold text-white flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500" /> {opt.title}
                     </h4>
                     <p className="text-sm text-secondary leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
             </div>

             <div className="p-8 border-l-4 border-brand-blue bg-brand-blue/5 rounded-r-3xl">
                <p className="text-secondary text-sm">Além disso, havia a necessidade de alinhar a comunicação com boas práticas de mercado e normas do <span className="text-white font-bold">Acordo Ortográfico da Língua Portuguesa</span>.</p>
             </div>
          </div>
        </section>

        {/* DESAFIO SECTION */}
        <section className="py-24 border-b border-white/5 space-y-24">
           <div className="max-w-3xl mx-auto space-y-12">
             <div className="flex items-center gap-4 text-brand-blue">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                   <Zap size={24} />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight">O Desafio</h2>
             </div>

             <div className="space-y-8">
               <h3 className="text-2xl font-bold text-white">Mais do que padronizar: criar uma lógica de linguagem escalável</h3>
               <p className="text-secondary text-lg leading-relaxed">O desafio não era apenas corrigir inconsistências pontuais, mas estruturar um sistema de linguagem que fosse:</p>
               <div className="flex flex-wrap gap-4">
                  {["Aplicável a múltiplos contextos", "Fácil de entender e adotar", "Coerente com padrões de mercado", "Alinhado com regras formais"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-secondary">{tag}</span>
                  ))}
               </div>
             </div>
           </div>

           <div className="max-w-3xl mx-auto p-12 bg-white/[0.02] border border-white/10 rounded-[40px] space-y-10">
              <h4 className="text-xl font-bold flex items-center gap-3">
                 <Search size={24} className="text-brand-blue" />
                 A tensão central de conteúdo
              </h4>
              <ul className="space-y-6">
                 {[
                   "Quando usar caixa alta para gerar destaque sem comprometer a legibilidade?",
                   "Como equilibrar padronização e flexibilidade em contextos comerciais?",
                   "Como garantir consistência entre diferentes superfícies (vitrine, PDP, checkout)?",
                   "Como transformar regras linguísticas em diretrizes práticas para o dia a dia?",
                   "Como estruturar um guia que seja consultivo e não engessado?"
                 ].map((q, i) => (
                   <li key={i} className="flex gap-4 items-start text-secondary text-lg italic">
                      <span className="text-brand-blue font-black opacity-40">?</span>
                      {q}
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* PAPEL SECTION */}
        <section className="py-24 border-b border-white/5 space-y-16">
           <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Settings size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">Meu Papel</h2>
              </div>
              <h3 className="text-2xl font-bold text-white italic">UX Writer atuando na construção da governança de conteúdo</h3>
              <p className="text-secondary text-lg">Atuei como UX Writer dentro do time de Content & Writing, participando da construção das diretrizes desde a análise até a documentação final.</p>
           </div>

           <div className="max-w-5xl mx-auto bg-card-dark border border-white/5 rounded-[32px] overflow-hidden">
              <div className="grid md:grid-cols-2">
                 <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 space-y-4 hover:bg-white/[0.02] transition-colors">
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">Estratégia</span>
                    <h4 className="text-xl font-bold">Conteúdo e Padronização</h4>
                    <p className="text-sm text-secondary leading-relaxed">Definição de diretrizes por contexto e criação de lógica de aplicação.</p>
                 </div>
                 <div className="p-10 border-b border-white/5 space-y-4 hover:bg-white/[0.02] transition-colors">
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">Pesquisa</span>
                    <h4 className="text-xl font-bold">Benchmark de mercado</h4>
                    <h5 className="text-sm text-secondary leading-relaxed font-normal">Estruturação de boas práticas aplicáveis baseadas em grandes players.</h5>
                 </div>
                 <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 space-y-4 hover:bg-white/[0.02] transition-colors">
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">Análise</span>
                    <h4 className="text-xl font-bold">Inconsistências na interface</h4>
                    <p className="text-sm text-secondary leading-relaxed">Mapeamento de gaps e documentação de pontos cegos na jornada atual.</p>
                 </div>
                 <div className="p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">Design Ops</span>
                    <h4 className="text-xl font-bold">Guia de Padronização</h4>
                    <p className="text-sm text-secondary leading-relaxed">Organização do material final e criação de ferramentas consultivas.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* PROCESSO SECTION */}
        <section className="py-24 border-b border-white/5">
           <div className="max-w-3xl mx-auto space-y-24">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Layers size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">Processo de Trabalho</h2>
              </div>

              <div className="space-y-32">
                 {[
                   {
                     step: "01",
                     title: "Mapeamento de inconsistências",
                     desc: "O primeiro passo foi identificar padrões já existentes e onde eles quebravam. Analisamos diferentes pontos da jornada para entender como a linguagem se comportava na prática."
                   },
                   {
                     step: "02",
                     title: "Benchmark de mercado",
                     desc: "Analisamos grandes players de e-commerce para entender: Como utilizam caixa alta e baixa, Como estruturam títulos, categorias e CTAs, Onde priorizam destaque vs. legibilidade.",
                     visual: (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 opacity-40">
                          {["Amazon", "Mercado Livre", "Shopee", "Shein"].map(b => (
                            <div key={b} className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center font-bold text-[10px] uppercase tracking-widest border border-white/10 hover:border-brand-blue/30 transition-all cursor-default">{b}</div>
                          ))}
                        </div>
                     )
                   },
                   {
                     step: "03",
                     title: "Estudo de boas práticas linguísticas",
                     desc: "A padronização foi fundamentada em: Normas do português (Acordo Ortográfico), Referências institucionais e acadêmicas, Guias de escrita e conteúdo digital. Garantindo consistência sem comprometer a correção linguística."
                   },
                   {
                     step: "04",
                     title: "Definição da arquitetura de padronização",
                     desc: "Estruturamos as diretrizes por contexto de uso: Categorias, Nomes de Produtos, Marcas, Vitrines, CTAs, Prazos, Tags e Pagamento. Cada contexto passou a ter regras específicas e justificadas."
                   },
                   {
                     step: "05",
                     title: "Tradução em diretrizes práticas",
                     desc: "Mais do que definir regras, o foco foi torná-las aplicáveis: Exemplos de uso correto vs. incorreto, Observações de exceções e Orientações claras para tomada de decisão."
                   }
                 ].map((proc, i) => (
                    <div key={i} className="relative pl-20 group">
                       <div className="absolute left-0 top-0 text-7xl font-display font-black text-brand-blue opacity-5 group-hover:opacity-10 transition-opacity">{proc.step}</div>
                       <div className="space-y-4">
                          <h4 className="text-2xl font-bold text-white italic">{proc.title}</h4>
                          <p className="text-secondary text-lg leading-relaxed">{proc.desc}</p>
                          {proc.visual}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SOLUÇÃO SECTION */}
        <section className="py-24 border-b border-white/5 space-y-32">
           <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Globe size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">A Solução</h2>
              </div>
              <h3 className="text-2xl font-bold text-white italic">Antes & Depois: como a padronização transformou a experiência</h3>
              <p className="text-secondary text-lg leading-relaxed">
                A solução foi a criação de um <span className="text-white font-bold">guia estruturado de padronização textual</span>, que organizou a linguagem do e-commerce de forma consistente e escalável.
              </p>
           </div>

           <div className="space-y-12">
              
              {/* 1. Categorias de produtos */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Bookmark className="text-brand-blue" /> 📍 Categorias de produtos</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Categorias apresentavam variações de escrita, ora com todas as palavras em minúsculo, ora com uso inconsistente de maiúsculas.</p>
                       <p className="text-secondary leading-relaxed">Isso gerava ruído visual e dificultava a escaneabilidade da navegação.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Padronização com inicial maiúscula em cada palavra relevante.</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/categorias_produtos.png" alt="Categorias de produtos" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Reforça hierarquia visual</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Facilita a leitura rápida</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Valoriza a percepção das categorias como elementos de navegação</p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 2. Nomes de produtos */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Box className="text-brand-blue" /> 📍 Nomes de produtos</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Títulos com capitalização inconsistente, mistura de padrões e baixa previsibilidade na leitura.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Padronização com maiúscula nas palavras principais, mantendo preposições em minúsculo e respeitando a grafia oficial das marcas.</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/nomes_produtos.png" alt="Nomes de produtos" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Melhora a legibilidade</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Aumenta a confiança na informação</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Cria consistência entre diferentes páginas</p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 3. Nomes de marcas */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Award className="text-brand-blue" /> 📍 Nomes de marcas</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Variações na escrita de marcas e uso inconsistente de siglas.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Adoção da grafia oficial como padrão, com uso correto de maiúsculas e siglas conforme definido pelas próprias marcas.</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/nomes_marcas.png" alt="Nomes de marcas" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Garante precisão</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Reforça credibilidade</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Evita ruído de interpretação</p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 4. Títulos de vitrines */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Layout className="text-brand-blue" /> 📍 Títulos de vitrines</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Uso irregular de caixa alta, com títulos ora muito “gritados”, ora sem padrão de escrita.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Uso de maiúscula apenas na primeira palavra, mantendo o restante em minúsculo — com exceções para nomes próprios.</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/titulos_vitrines.png" alt="Títulos de vitrines" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Cria um tom mais próximo e conversacional</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Melhora a fluidez da leitura</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Mantém consistência entre diferentes vitrines</p>
                 </div>

                 <div className="p-8 bg-brand-blue/5 border border-brand-blue/20 rounded-3xl">
                    <p className="text-sm text-secondary leading-relaxed">
                       <span className="font-bold text-white uppercase tracking-widest text-[10px]">Observação:</span><br />
                       Quando o título da vitrine <span className="font-bold text-white">incluir o nome de uma categoria, marca ou serviços Magalu,</span> esse nome deve se iniciar com <span className="font-bold text-white">letra maiúscula. Ex: Cliente Ouro</span>
                    </p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 5. Serviços e Submarcas */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Briefcase className="text-brand-blue" /> 📍 Serviços e Submarcas do Magalu</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12 border-b border-white/5 pb-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Os nomes de serviços e submarcas apareciam com diferentes padrões de escrita ao longo da jornada.</p>
                       <p className="text-secondary leading-relaxed">Em alguns contextos, havia uso inconsistente de caixa alta e baixa, além de variações na forma como os nomes eram apresentados dentro da interface.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Padronização com inicial maiúscula em cada palavra relevante dos serviços e submarcas Magalu, respeitando a grafia oficial definida pela marca.</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <p className="font-bold text-white">Exemplos padronizados:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[
                         "Magalu Serviços", "Magalu Seguros", "Magalu Indica", "MagaluPay", 
                         "Compra Internacional", "Listas de Casamento", "Cliente Ouro", 
                         "Magalu Entregas", "Magalog", "Consórcio Magalu", "Influenciador Magalu",
                         "Garantia Estendida", "Troca Certa", "Proteção Roubo e Furto",
                         "Casa Protegida", "Proteção Saúde", "Cartão Superprotegido",
                         "Compra Segura", "Favoritos"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-secondary text-sm">
                            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {item}
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/servicos_submarcas.png" alt="Serviços e Submarcas" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Reforça a identidade das submarcas dentro do ecossistema Magalu</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Facilita reconhecimento rápido dos serviços pelo usuário</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Mantém consistência visual entre diferentes superfícies do produto</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Valoriza a percepção de organização e credibilidade da plataforma</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Cria um padrão escalável para novas soluções e serviços futuros</p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 6. Botões (CTAs) */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Smartphone className="text-brand-blue" /> 📍 Botões (CTAs)</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">CTAs com variações entre caixa alta, frases longas e falta de consistência entre telas.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Padronização com apenas a primeira palavra em maiúscula, priorizando clareza e objetividade.</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/botoes_ctas.png" alt="Botões (CTAs)" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Reduz esforço cognitivo</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Torna ações mais diretas</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Mantém padrão consistente na interface</p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 7. Prazos de entrega */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><TrendingUp className="text-brand-blue" /> 📍 Prazos de entrega</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Mensagens com variações de formatação e falta de padrão na escrita.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Padronização com primeira palavra em maiúscula e exceções estratégicas para destacar benefícios.</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/prazos_entrega.png" alt="Prazos de entrega" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Facilita leitura rápida</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Destaca informações relevantes</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Mantém consistência com o restante da interface</p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 8. Tags e selos */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><Tag className="text-brand-blue" /> 📍 Tags e selos</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Uso excessivo de caixa alta sem critério claro, gerando poluição visual.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Padronização com uso de maiúscula apenas na primeira palavra, mantendo caixa alta apenas em casos estratégicos (como promoções).</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/tags_selos.png" alt="Tags e selos" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Equilibra destaque e legibilidade</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Reduz ruído visual</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Direciona atenção para o que realmente importa</p>
                 </div>
              </div>

              <div className="w-full h-px bg-white/5 my-24" />

              {/* 9. Pagamento */}
              <div className="max-w-4xl mx-auto space-y-10">
                 <h4 className="text-2xl font-bold flex items-center gap-3"><CreditCard className="text-brand-blue" /> 📍 Pagamento</h4>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Antes</p>
                       <p className="text-secondary leading-relaxed">Inconsistência na escrita de termos sensíveis e amplamente reconhecidos.</p>
                    </div>
                    <div className="space-y-4">
                       <p className="text-sm font-bold text-green-500 uppercase tracking-widest">Depois</p>
                       <p className="text-secondary leading-relaxed">Padronização seguindo diretrizes oficiais de nomenclatura.</p>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl">
                    <img src="/images/cases/guideline/pagamento.png" alt="Pagamento" className="w-full h-auto block" />
                 </div>

                 <div className="space-y-3">
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Garante conformidade</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Evita ambiguidades</p>
                    <p className="text-secondary flex items-center gap-3"><span className="text-brand-blue">→</span> Reforça confiança do usuário</p>
                 </div>
              </div>

           </div>
        </section>

        {/* RESULTADOS SECTION */}
        <section className="py-24 border-b border-white/5 space-y-16">
           <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center gap-4 text-brand-blue">
                 <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
                    <Library size={24} />
                 </div>
                 <h2 className="text-3xl font-bold uppercase tracking-tight">Resultados</h2>
              </div>
              <h3 className="text-2xl font-bold text-white italic">Impacto estrutural na experiência e na operação</h3>
              <p className="text-secondary text-lg">O impacto do projeto pode ser observado em cinco frentes principais:</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Consistência", desc: "Comunicação padronizada ao longo de toda a jornada." },
                { title: "Clareza", desc: "Melhora significativa na escaneabilidade e leitura rápida." },
                { title: "Interface Limpa", desc: "Menor ruído visual e percepção de organização." },
                { title: "Escalabilidade", desc: "Produção de conteúdo simplificada para múltiplos times." },
                { title: "Governança", desc: "Base estruturada para manutenção do sistema de linguagem." }
              ].map((res, i) => (
                <div key={i} className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                   <h4 className="font-bold text-white italic">{res.title}</h4>
                   <p className="text-sm text-secondary leading-relaxed">{res.desc}</p>
                </div>
              ))}
           </div>

           <div className="max-w-3xl mx-auto p-12 bg-brand-blue/10 border border-brand-blue/20 rounded-[40px] space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-4"><PenTool className="text-brand-blue" /> O que aprendi como UX Writer</h4>
              <ul className="space-y-6">
                 {[
                   { title: "Padronização é estratégia", desc: "Não é apenas um detalhe visual, é sobre previsibilidade." },
                   { title: "Pequenas decisões, grande impacto", desc: "Capitalização afeta diretamente a carga cognitiva." },
                   { title: "Guia aplicável", desc: "Um guia precisa ser útil no dia a dia, não apenas teoricamente correto." },
                   { title: "Criar sistemas", desc: "UX Writing é sobre construir sistemas de linguagem escaláveis." }
                 ].map((learn, i) => (
                   <li key={i} className="space-y-1">
                      <div className="font-bold text-white flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {learn.title}
                      </div>
                      <p className="text-sm text-secondary pl-4 leading-relaxed">{learn.desc}</p>
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* PRÓXIMOS PASSOS SECTION */}
        <section className="py-24 space-y-16">
           <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 italic">Próximos passos</h2>
              <h3 className="text-xl font-bold text-secondary">Evolução contínua da governança de conteúdo</h3>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Monitorar a adoção das diretrizes",
                "Evoluir o guia com novos contextos",
                "Validar impacto via testes A/B",
                "Expandir para outros produtos"
              ].map((prx, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-sm text-secondary flex items-center gap-3">
                   <ChevronRight size={14} className="text-brand-blue" /> {prx}
                </div>
              ))}
           </div>
        </section>

      </main>

      {/* Footer Branding */}
      <section className="py-24 border-t border-white/5 text-center space-y-8">
         <div className="px-10 py-4 bg-brand-blue/10 border border-brand-blue/20 rounded-full inline-block">
            <span className="font-display font-black text-3xl italic tracking-tighter">MAGALU</span>
         </div>
      </section>
    </div>
  );
}
