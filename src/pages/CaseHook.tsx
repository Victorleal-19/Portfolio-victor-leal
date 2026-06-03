import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, TrendingUp, Smartphone, Award, ChevronRight, Zap, Target, Search, MessageSquare, Layout, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseHook() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[60] origin-left"
        initial={{ scaleX: 0 }}
        style={{ scaleX: "var(--scroll-progress, 0)" }}
      />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Voltar para home</span>
          </Link>
          <div className="hidden md:flex gap-2">
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">UX Writing</span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Conversão</span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Magalu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto space-y-8 text-center md:text-left">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-wrap justify-center md:justify-start gap-2"
          >
             {["UX Writing", "Conversão", "Economia Comportamental", "E-commerce", "Pesquisa", "Microcopy", "Magalu"].map(tag => (
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
            Projeto Hook: UX Writing para Conversão no E-commerce Magalu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-4xl"
          >
            Inspirado no livro Hooked: Como Construir Produtos e Serviços Formadores de Hábito do autor Nir Eyal, o projeto Hook nasceu da necessidade de entender como elementos de interface e gatilhos comportamentais poderiam aumentar conversão e engajamento durante a jornada de compra no e-commerce do Magalu.
          </motion.p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/5 py-12">
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Created</span>
              <p className="text-secondary text-sm">Maio 12, 2026</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Projeto</span>
              <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">Case real</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Habilidades</span>
              <p className="text-secondary text-sm leading-snug">Arquitetura da informação, Benchmarking, Gatilhos mentais, UX Writing</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Empresa</span>
              <p className="text-secondary text-sm font-bold flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/pt/2/23/Logo-Magazine-Luiza.png" alt="Magalu" className="h-3 grayscale brightness-200" />
                Magalu Labs
              </p>
           </div>
        </div>
      </section>

      {/* Body Content */}
      <main className="px-6 space-y-32 mt-12">
        
        {/* Resumo */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Resumo</h2>
             <p className="text-secondary leading-relaxed text-lg">
               O desafio não era apenas adicionar selos, timers ou mensagens promocionais, mas descobrir quais estímulos realmente influenciam a tomada de decisão do usuário sem comprometer a experiência.
             </p>
             <p className="text-secondary leading-relaxed text-lg">
                Como UX Writer no time de Labs, participei da construção da estratégia de conteúdo e da definição dos gatilhos textuais aplicados em Home, Busca e Página de Produto (PDP). Minha atuação conectou UX Research, benchmark de mercado, economia comportamental e microcopy para transformar insights de comportamento em comunicação mais clara, persuasiva e contextual.
             </p>
             <p className="text-secondary leading-relaxed text-lg">
                O projeto envolveu benchmark com grandes players do mercado, testes com usuários e análise de percepção sobre elementos de urgência, prova social, escassez e confiança. O resultado foi um conjunto estruturado de recomendações de conteúdo e interface para otimizar a jornada de compra e apoiar futuras implementações e testes A/B.
             </p>
          </div>
        </section>

        {/* Contexto */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Contexto</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Conversão não depende só de preço</h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
               Em marketplaces altamente competitivos, preço e frete deixaram de ser os únicos fatores decisivos para compra. Grandes players como Amazon, Shopee, Mercado Livre e Temu utilizam constantemente gatilhos visuais e textuais para aumentar percepção de valor, urgência e confiança durante a navegação.
            </p>
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-6">
              <h4 className="text-xl font-bold text-brand-blue">O Magalu identificou a oportunidade de aprofundar o entendimento sobre:</h4>
              <ul className="space-y-4">
                {[
                  "Quais elementos realmente influenciam decisão de compra",
                  "Como esses gatilhos aparecem no mercado",
                  "Como aplicá-los de forma mais eficiente no próprio ecossistema digital"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-secondary text-lg">
                     <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={20} />
                     <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-secondary italic text-sm pt-4 border-t border-white/5">
                O objetivo era estruturar uma experiência mais persuasiva sem transformar a jornada em algo agressivo ou poluído visualmente.
              </p>
            </div>
          </div>
        </section>

        {/* O Desafio */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">O Desafio</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Mais do que estimular compra: criar confiança durante a navegação</h3>
          </div>
          
          <div className="space-y-8">
            <p className="text-secondary leading-relaxed text-lg">
               O principal desafio do projeto era encontrar equilíbrio entre conversão e experiência. Precisávamos entender não apenas como vender mais, mas como construir uma jornada segura para o usuário.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-brand-blue font-bold uppercase tracking-widest text-xs">Precisávamos entender</h4>
                  <ul className="space-y-3">
                    {[
                      "O que realmente chama atenção do usuário",
                      "Quais gatilhos aumentam confiança",
                      "Quando urgência ajuda e quando gera rejeição",
                      "Como tornar promoções mais claras",
                      "Como comunicar benefícios sem ruído cognitivo"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-secondary">
                        <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl flex flex-col justify-center text-center space-y-4 italic">
                  <p className="text-secondary">"Muitos elementos utilizados pelo mercado não tinham validação real com usuários dentro do contexto do Magalu."</p>
                  <p className="text-white font-bold text-sm not-italic">O projeto precisava transformar percepção subjetiva em decisões orientadas por pesquisa.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Meu Papel */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Meu papel</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">UX Writer atuando na estratégia de conversão</h3>
             <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                Minha atuação aconteceu de forma integrada ao time de UX, participando desde a fase de exploração até as recomendações finais.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Imersão no Hooked Model",
                desc: "Estudo aprofundado da metodologia Hooked Model e da psicologia dos gatilhos comportamentais aplicados à conversão e engajamento.",
                icon: <Target className="text-brand-blue" size={24} />,
                badge: "Fundamentos"
              },
              {
                title: "Benchmark de concorrentes",
                desc: "Análise de grandes players do mercado para mapear padrões de linguagem, gatilhos e estratégias promocionais utilizadas na jornada de compra.",
                icon: <Search className="text-brand-blue" size={24} />,
                badge: "Análise"
              },
              {
                title: "Estratégia de microcopy",
                desc: "Definição de microcopies, clareza dos gatilhos textuais e hierarquia das informações promocionais ao longo da interface.",
                icon: <Layout className="text-brand-blue" size={24} />,
                badge: "Arquitetura"
              },
              {
                title: "Pesquisa e interpretação de insights",
                desc: "Construção de pesquisas, apoio em testes com usuários e interpretação de insights para validar percepção, confiança e intenção de compra.",
                icon: <MessageSquare className="text-brand-blue" size={24} />,
                badge: "Validação"
              },
              {
                title: "Refinamento de comunicação",
                desc: "Refinamento da comunicação promocional para reduzir ruído cognitivo e melhorar escaneabilidade.",
                icon: <Sparkles className="text-brand-blue" size={24} />,
                badge: "Redação"
              },
              {
                title: "Padronização de tom e voz",
                desc: "Definição e padronização do tom e voz dos gatilhos aplicados na experiência.",
                icon: <Award className="text-brand-blue" size={24} />,
                badge: "Consistência"
              }
            ].map((frente, i) => (
              <div 
                key={i} 
                className="p-8 bg-card-dark border border-white/5 hover:border-brand-blue/20 rounded-3xl space-y-4 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/2 rounded-full blur-xl group-hover:bg-brand-blue/5 transition-all pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/[0.03] rounded-2xl border border-white/5 group-hover:border-brand-blue/30 transition-all">
                    {frente.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue font-mono bg-brand-blue/5 px-2.5 py-1 rounded-lg border border-brand-blue/10">
                    {frente.badge}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white font-display group-hover:text-brand-blue transition-colors">
                    {frente.title}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {frente.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meu Processo de Trabalho */}
        <section className="max-w-4xl mx-auto space-y-32">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Meu Processo de Trabalho</h2>
             <h3 className="text-2xl font-bold text-brand-blue">Metodologia aplicada</h3>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">1</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Estudo de concorrentes e benchmark comportamental</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        O projeto começou com uma análise aprofundada de grandes players do mercado digital como Amazon, Shopee, Mercado Livre, Temu, AliExpress, Shein e Booking.
                     </p>
                  </div>
               </div>
               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                  <img src="/images/cases/Hook/benchmark-hook-1.png" alt="Benchmark comportamental" className="w-full h-auto" />
               </div>
               <div className="space-y-4 max-w-3xl ml-20">
                  <p className="text-secondary">O objetivo era mapear como cada plataforma utiliza gatilhos de conversão ao longo da jornada (Home, Busca e PDP), focando em CTAs, textos promocionais, selos e timers.</p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">2</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Mapeamento de gatilhos do mercado</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        Foi realizado um mapeamento completo da jornada de compra em marketplaces.
                     </p>
                  </div>
               </div>
               
               <div className="ml-0 md:ml-20 space-y-8">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-[32px] space-y-4">
                     <p className="text-secondary leading-relaxed font-semibold text-white/90">O levantamento identificou:</p>
                     <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-white font-bold">
                           <div className="w-2 h-2 bg-brand-blue rounded-full" />
                           38 gatilhos utilizados por concorrentes
                        </li>
                        <li className="flex items-center gap-3 text-white font-bold">
                           <div className="w-2 h-2 bg-brand-blue rounded-full" />
                           21 gatilhos já utilizados no Magalu
                        </li>
                     </ul>
                     <p className="text-secondary leading-relaxed mt-4">
                        A partir disso, começamos a investigar como esses elementos poderiam ser utilizados de forma mais eficaz e contextual dentro da experiência do usuário.
                     </p>
                  </div>
                  
                  <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                     <img src="/images/cases/Hook/tabela-hook.png" alt="Mapeamento de gatilhos do mercado" className="w-full h-auto block" />
                  </div>
               </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">3</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Definição estratégica dos gatilhos</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        Após o mapeamento dos gatilhos utilizados pelos concorrentes, iniciamos uma etapa estratégica para definir quais elementos realmente fariam sentido dentro da experiência do Magalu.
                     </p>
                  </div>
               </div>
               
               <div className="ml-20 space-y-12">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-6">
                     <p className="text-secondary leading-relaxed">
                        Essa definição aconteceu por meio de uma dinâmica colaborativa de <strong>Design Thinking</strong>, envolvendo diferentes stakeholders do projeto para obter uma visão multidisciplinar e alinhada:
                     </p>
                     
                     <div className="flex flex-wrap gap-2.5">
                        {[
                           "UX Designers",
                           "UX Writers",
                           "Product Managers",
                           "Pessoas de negócio",
                           "Pesquisa",
                           "Produto",
                           "Estratégia"
                        ].map((stakeholder, i) => (
                           <span key={i} className="px-4 py-2 bg-white/[0.03] border border-white/5 text-xs text-white/90 font-medium rounded-xl flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
                              {stakeholder}
                           </span>
                        ))}
                     </div>
                     
                     <p className="text-secondary text-sm">
                        O objetivo era identificar quais gatilhos poderiam aumentar percepção de valor e conversão sem comprometer clareza, confiança e experiência da pessoa usuária.
                     </p>
                  </div>

                  <div className="space-y-6">
                     <h5 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Gatilhos priorizados</h5>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                           { name: "Escassez", desc: "Percepção de disponibilidade real e transparente de estoque.", emoji: "💎" },
                           { name: "Urgência", desc: "Sensação de limite temporal para o aproveitamento de ofertas.", emoji: "⚡" },
                           { name: "Prova social", desc: "Uso do comportamento e avaliações de outros compradores.", emoji: "👥" },
                           { name: "Autoridade", desc: "Endossos e selos oficiais para reforçar credibilidade.", emoji: "🛡️" },
                           { name: "Reciprocidade", desc: "Oferta de vantagens ou cupons claros antes de exigir compromisso.", emoji: "🎁" }
                        ].map((item, i) => (
                           <div key={i} className="p-6 bg-white/[0.03] border border-white/5 hover:border-brand-blue/30 rounded-2xl space-y-3 transition-colors flex flex-col justify-between">
                              <div className="space-y-2">
                                 <span className="text-2xl">{item.emoji}</span>
                                 <h6 className="font-bold text-white text-base leading-tight">{item.name}</h6>
                              </div>
                              <p className="text-[11px] text-secondary leading-normal mt-2">{item.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  <p className="text-secondary italic text-sm text-center">
                     Essa etapa foi importante para transformar aprendizados de benchmark em decisões estratégicas alinhadas ao contexto real do produto.
                  </p>
               </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">4</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold text-white font-display">Construção do protótipo navegável</h4>
                     <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                        Após a fase de exploração, participamos da construção de um protótipo navegável com gatilhos aplicados em <strong className="text-white font-medium">Home, Busca e PDP</strong>.
                     </p>
                     <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                        Além da aplicação dos gatilhos na interface, também realizamos explorações e testes A/B de conteúdo para validar quais construções textuais geravam maior percepção de urgência, clareza e intenção de compra.
                     </p>
                  </div>
               </div>

               <div className="ml-0 md:ml-20 space-y-10">
                  {/* Grid layout for areas and actions */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                     {/* Sections Card */}
                     <div className="lg:col-span-4 p-8 bg-card-dark border border-white/5 rounded-3xl flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono mb-4 block">Gatilhos aplicados em:</span>
                        <ul className="space-y-4">
                           {["Home", "Busca", "PDP"].map(item => (
                              <li key={item} className="flex items-center gap-3 text-white font-bold text-base">
                                 <CheckCircle2 size={18} className="text-brand-blue shrink-0 animate-pulse" />
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* My Atuação Card */}
                     <div className="lg:col-span-8 p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block animate-pulse">Minha atuação envolveu principalmente:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                           {[
                              "Definição de microcopies",
                              "Clareza dos gatilhos textuais",
                              "Hierarquia das informações promocionais",
                              "Padronização da comunicação de urgência e benefício",
                              "Exploração e refinamento de variações textuais para testes A/B"
                           ].map(item => (
                              <li key={item} className="text-sm text-secondary flex items-start gap-2.5">
                                 <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0" />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  {/* A/B Testing Editorial Component */}
                  <div className="space-y-6">
                     <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block mb-1">Experimentação e Validação</span>
                        <h5 className="text-xl font-bold text-white">Explorações e Testes A/B de Conteúdo</h5>
                        <p className="text-secondary text-sm leading-relaxed mt-2 max-w-4xl">
                           Analisamos variações sutis no microcopy para entender o comportamento emocional e decifrar quais estruturas ativavam gatilhos com o menor nível de ruído cognitivo.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                           {
                              title: "Comunicação de Urgência",
                              opA: "Termina em",
                              opB: "Acaba em",
                              winning: "A",
                              rationale: "Mais clareza e solidez associadas a um cronômetro e prazos reais."
                           },
                           {
                              title: "Sinalização de Escassez",
                              opA: "Restam apenas X unidades",
                              opB: "Apenas X unidades",
                              winning: "A",
                              rationale: "Reforça o estado dinâmico e o senso de estoque limitado real."
                           },
                           {
                              title: "Previsibilidade de Entrega",
                              opA: "Chega grátis hoje",
                              opB: "Receba grátis hoje",
                              winning: "B",
                              rationale: "O foco no recebimento gera mais imediatismo e sensação de benefício tangível."
                           },
                           {
                              title: "Ativação de Cupons",
                              opA: "Cupom R$X OFF",
                              opB: "Até R$X OFF",
                              winning: "A",
                              rationale: "Garante clareza direta e evita que o usuário se sinta confuso com limites."
                           }
                        ].map((test, i) => (
                           <div key={i} className="p-6 bg-card-dark border border-white/5 rounded-2xl flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300 group">
                              <div className="space-y-4">
                                 <h6 className="font-bold text-white text-sm tracking-wide border-b border-white/5 pb-2">{test.title}</h6>
                                 <div className="grid grid-cols-2 gap-3">
                                    <div className={`p-3 rounded-xl border ${test.winning === "A" ? "bg-brand-blue/5 border-brand-blue/30" : "bg-white/[0.01] border-white/5"} relative`}>
                                       <span className={`absolute top-1.5 right-2 text-[8px] font-mono font-black ${test.winning === "A" ? "text-brand-blue" : "text-white/30"}`}>OPÇÃO A</span>
                                       <span className="text-[10px] text-white/40 block">Proposta A</span>
                                       <span className="font-mono text-white text-[11px] font-bold block mt-1">“{test.opA}”</span>
                                    </div>
                                    <div className={`p-3 rounded-xl border ${test.winning === "B" ? "bg-brand-blue/5 border-brand-blue/30" : "bg-white/[0.01] border-white/5"} relative`}>
                                       <span className={`absolute top-1.5 right-2 text-[8px] font-mono font-black ${test.winning === "B" ? "text-brand-blue" : "text-white/30"}`}>OPÇÃO B</span>
                                       <span className="text-[10px] text-white/40 block">Proposta B</span>
                                       <span className="font-mono text-white text-[11px] font-bold block mt-1">“{test.opB}”</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-4 pt-3 border-t border-white/5 flex items-start gap-2 text-[11px]">
                                 <span className="text-brand-blue shrink-0">💡</span>
                                 <p className="text-secondary leading-relaxed"><strong className="text-white/95">Racional:</strong> {test.rationale}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Video Mockup Celular Animado */}
                  <div className="flex justify-center mt-12">
                     <div className="relative w-full max-w-[280px] aspect-[9/19.5] rounded-[40px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] bg-black">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover scale-[1.03]"
                        >
                          <source
                            src="/images/cases/Hook/projeto-hook.mp4"
                            type="video/mp4"
                          />
                        </video>
                     </div>
                  </div>
               </div>
            </div>

            {/* Step 5 */}
             <div className="space-y-12">
                <div className="flex items-start gap-6">
                   <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">5</div>
                   <div className="space-y-4">
                      <h4 className="text-2xl font-bold font-display text-white">Testes com usuários</h4>
                      <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                         Os protótipos navegáveis foram validados por meio de testes via <strong className="text-white font-semibold">Maze</strong> e <strong className="text-white font-semibold">testes de guerrilha</strong> realizados de forma presencial em lojas físicas do Magalu.
                      </p>
                   </div>
                </div>

                <div className="ml-0 md:ml-20 space-y-8">
                   {/* Strategic Role Alert/Card */}
                   <div className="p-8 bg-gradient-to-r from-brand-blue/10 to-transparent border border-brand-blue/20 rounded-3xl space-y-6 relative overflow-hidden">
                      <div className="absolute top-4 right-4 px-3 py-1 bg-brand-blue/20 rounded-full text-[10px] tracking-widest uppercase font-bold text-brand-blue font-mono">
                         Atuação do UX Writer
                      </div>
                      
                      <div className="space-y-2">
                         <h5 className="text-lg font-bold text-white flex items-center gap-2">
                            <span>✍</span> Co-construção e facilitação ativa de testes
                         </h5>
                         <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                            Como <strong className="text-brand-blue font-semibold">UX Writer</strong> no projeto, atuei de forma integrada em toda a etapa de pesquisa e validação para decodificar o impacto da linguagem no comportamento de compra:
                         </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                         <div className="space-y-3">
                            <div className="flex items-start gap-2.5">
                               <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                               <div>
                                  <span className="text-white font-bold text-sm block">Elaboração de Roteiros</span>
                                  <p className="text-secondary text-xs leading-relaxed mt-0.5">Construção detalhada e estratégica de perguntas voltadas à percepção dos gatilhos textuais.</p>
                               </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                               <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                               <div>
                                  <span className="text-white font-bold text-sm block">Condução de Entrevistas</span>
                                  <p className="text-secondary text-xs leading-relaxed mt-0.5">Facilitação ativa de testes de usabilidade e entrevistas presenciais com usuários utilizando o protótipo navegável.</p>
                               </div>
                            </div>
                         </div>

                         <div className="space-y-3">
                            <div className="flex items-start gap-2.5">
                               <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                               <div>
                                  <span className="text-white font-bold text-sm block">Análise de Microcopy</span>
                                  <p className="text-secondary text-xs leading-relaxed mt-0.5">Mapeamento e decodificação de como cada componente de microcopy influenciou a tomada de decisão.</p>
                               </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                               <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                               <div>
                                  <span className="text-white font-bold text-sm block">Validação de Jornada</span>
                                  <p className="text-secondary text-xs leading-relaxed mt-0.5">Confirmação empírica se a comunicação gerava motivação, previsibilidade e facilitação cognitiva.</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Grid of evaluation topics */}
                   <div className="space-y-4">
                      <h5 className="text-xs uppercase font-bold tracking-widest text-brand-blue font-mono">Principais frentes de avaliação</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                         {[
                           { title: "Pontos de Atenção", desc: "Mapeamento dos primeiros pontos de contato visual onde a copy promocional se sobressaía primeiro.", icon: "🎯" },
                           { title: "Fatores de Confiança", desc: "Interpretação de quais rótulos e selos institucionais foram cruciais para a estabilização de segurança.", icon: "🛡️" },
                           { title: "Decisão de Compra", desc: "Investigação dos termos de urgência, prazos de frete e cupons que de fato impulsionaram o desejo de aquisição.", icon: "🛒" },
                           { title: "Assimilação de Gatilhos", desc: "Análise qualitativa de como o usuário digeria os termos de limite de oferta e escassez sem ruídos.", icon: "⚡" }
                         ].map((item, i) => (
                           <div key={i} className="p-6 bg-card-dark border border-white/5 hover:border-brand-blue/30 rounded-2xl flex flex-col justify-between transition-all duration-300">
                              <div className="space-y-2">
                                 <span className="text-2xl">{item.icon}</span>
                                 <h6 className="font-bold text-white text-sm leading-snug">{item.title}</h6>
                              </div>
                              <p className="text-[11px] text-secondary leading-normal mt-3">{item.desc}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Concluding block */}
                   <p className="text-secondary text-sm leading-relaxed italic bg-white/[0.02] border border-white/5 p-5 rounded-2xl max-w-4xl">
                      Essa etapa estruturada foi indispensável para validar hipóteses do projeto com base em comportamento prático dos usuários, transpassando conclusões abstratas ou análises internas e as convertendo em aprendizados estratégicos fundamentados para a evolução do e-commerce.
                   </p>
                </div>
             </div>
             
             {/* Step 6 */}
             <div className="space-y-12">
                <div className="flex items-start gap-6">
                   <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">6</div>
                   <div className="space-y-4">
                      <h4 className="text-2xl font-bold">Interpretação dos aprendizados</h4>
                      <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                         Os testes de guerrilha e validações via Maze ajudaram a identificar quais gatilhos realmente impactam percepção de valor, confiança e intenção de compra durante a navegação.
                      </p>
                   </div>
                </div>
                
                <div className="ml-0 md:ml-20 space-y-12">
                   {/* Home Card */}
                   <div className="p-8 md:p-10 bg-card-dark border border-white/5 rounded-[32px] space-y-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center gap-3">
                         <span className="text-2xl">📍</span>
                         <h5 className="text-2xl font-bold text-white font-display">Home</h5>
                      </div>

                      <div className="grid md:grid-cols-3 gap-8">
                         {/* Principais Aprendizados */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue">Principais aprendizados</h6>
                            <div className="flex flex-wrap gap-2">
                               {["“Ofertas válidas até hoje”", "“Termina em 05:15”", "“Restam poucas unidades”"].map((tag, i) => (
                                  <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-white/90 font-mono border border-white/5">
                                     {tag}
                                  </span>
                               ))}
                            </div>
                            <p className="text-sm text-secondary leading-relaxed bg-brand-blue/5 p-4 rounded-xl border border-brand-blue/10">
                               Os gatilhos de <strong>urgência e escassez</strong> geraram forte impacto comportamental e foram destacados por <strong className="text-brand-blue">21 participantes</strong>.
                            </p>
                         </div>

                         {/* Destaques Observados */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue">Destaques observados</h6>
                            <ul className="space-y-3 text-sm text-secondary">
                               <li className="flex gap-2">
                                  <span className="text-green-500 shrink-0">✔</span>
                                  <span>Cupons e descontos aplicados diretamente no produto tiveram alta atratividade para <strong>10 participantes</strong>.</span>
                               </li>
                            </ul>
                            
                            {/* Comparison block */}
                            <div className="mt-4 p-4 bg-white/[0.02] rounded-xl border border-white/5 space-y-2">
                               <div className="flex justify-between text-xs">
                                  <span className="text-secondary">Uso de cupons - Magalu:</span>
                                  <span className="font-bold text-white">3% a 4%</span>
                               </div>
                               <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-brand-blue h-full rounded-full" style={{ width: "15%" }} />
                               </div>
                               <div className="flex justify-between text-xs pt-1">
                                  <span className="text-secondary">Uso de cupons - Shopee:</span>
                                  <span className="font-bold text-green-500">&gt; 20%</span>
                               </div>
                               <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-green-500 h-full rounded-full" style={{ width: "80%" }} />
                               </div>
                            </div>
                         </div>

                         {/* Outros Insights */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue">Outros insights</h6>
                            <ul className="space-y-3 text-sm text-secondary">
                               <li className="flex gap-2 items-start">
                                  <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                                  <span>“Baseado na sua busca” + gatilho de escassez geraram percepção positiva.</span>
                               </li>
                               <li className="flex gap-2 items-start">
                                  <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                                  <span>Selo “Magalu Indica” aumentou confiança.</span>
                               </li>
                               <li className="flex gap-2 items-start">
                                  <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                                  <span>Área Cliente Ouro chamou atenção, mas gerou dúvidas sobre benefícios reais.</span>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>

                   {/* Busca Card */}
                   <div className="p-8 md:p-10 bg-card-dark border border-white/5 rounded-[32px] space-y-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center gap-3">
                         <span className="text-2xl">📍</span>
                         <h5 className="text-2xl font-bold text-white font-display">Busca</h5>
                      </div>

                      <div className="grid md:grid-cols-3 gap-8">
                         {/* Principais Fatores */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue">Principais fatores de influência</h6>
                            <div className="flex flex-wrap gap-2">
                               {["Cupom “50 Off”", "Timer “Termina em 05:15:38”", "“Receba grátis hoje”", "“Frete grátis”"].map((tag, i) => (
                                  <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-white/90 border border-white/5">
                                     {tag}
                                  </span>
                               ))}
                            </div>
                            <p className="text-xs text-secondary italic border-t border-white/5 pt-2">
                               Os elementos acima foram decisivos na escolha dos produtos mais selecionados.
                            </p>
                         </div>

                         {/* Insights Observados */}
                         <div className="space-y-3">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue">Insights observados</h6>
                            <ul className="space-y-3 text-sm text-secondary">
                               <li className="flex gap-2 items-start">
                                  <span className="text-green-500 shrink-0">✔</span>
                                  <span>Quantidade de avaliações influenciou fortemente percepção de qualidade e confiança.</span>
                               </li>
                               <li className="flex gap-2 items-start">
                                  <span className="text-green-500 shrink-0">✔</span>
                                  <span>Mesmo marcas genéricas tiveram melhor aceitação quando associadas a avaliações altas.</span>
                               </li>
                               <li className="flex gap-2 items-start">
                                  <span className="text-green-500 shrink-0">✔</span>
                                  <span>Escassez + cupom + condição de pagamento aumentaram intenção de compra.</span>
                               </li>
                            </ul>
                         </div>

                         {/* Outros Fatores */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue">Outros fatores percebidos</h6>
                            <ul className="space-y-3 text-sm text-secondary">
                               <li className="flex gap-2 items-start opacity-75">
                                  <ChevronRight size={16} className="text-white/40 shrink-0 mt-0.5" />
                                  <span>Similaridade visual com produtos Apple.</span>
                               </li>
                               <li className="flex gap-2 items-start opacity-75">
                                  <ChevronRight size={16} className="text-white/40 shrink-0 mt-0.5" />
                                  <span>Design e cor do produto.</span>
                               </li>
                            </ul>
                            <p className="text-xs text-secondary italic bg-white/5 p-3 rounded-xl border border-white/5">
                               Apesar de relevantes, tiveram menor impacto do que urgência, entrega e prova social.
                            </p>
                         </div>
                      </div>
                   </div>

                   {/* PDP Card */}
                   <div className="p-8 md:p-10 bg-card-dark border border-white/5 rounded-[32px] space-y-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center gap-3">
                         <span className="text-2xl">📍</span>
                         <h5 className="text-2xl font-bold text-white font-display">Página de Produto (PDP)</h5>
                      </div>

                      <div className="grid md:grid-cols-3 gap-8">
                         {/* Confiança */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue font-mono">Aumento de confiança</h6>
                            <ul className="space-y-2">
                               {["Avaliações de consumidores", "Feedbacks e comentários", "Reputação da loja", "Prazo de entrega", "Retirada em loja"].map((item, i) => (
                                  <li key={i} className="text-sm font-semibold text-white/90 flex items-center gap-2">
                                     <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {item}
                                  </li>
                               ))}
                            </ul>
                         </div>

                         {/* Principais Aprendizados */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue">Principais aprendizados</h6>
                            <p className="text-sm text-secondary leading-relaxed">
                               A combinação favorável entre as seguintes dimensões:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                               {["marca", "avaliações", "quantidade vendida", "selos de autoridade"].map((tag, i) => (
                                  <span key={i} className="px-2 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs rounded-lg font-medium">
                                     {tag}
                                  </span>
                               ))}
                            </div>
                            <p className="text-xs text-secondary leading-relaxed bg-brand-blue/5 p-3 rounded-lg border border-brand-blue/10 font-medium">
                               Aumentou significativamente a percepção de qualidade e segurança durante a decisão de compra.
                            </p>
                         </div>

                         {/* Insight Estratégico */}
                         <div className="space-y-4">
                            <h6 className="text-xs uppercase font-bold tracking-widest text-brand-blue font-mono">Insight estratégico</h6>
                            <div className="p-5 bg-white/[0.02] border border-blue-500/10 rounded-2xl relative">
                               <div className="absolute top-3 right-3 text-brand-blue opacity-30">
                                  <Sparkles size={20} />
                               </div>
                               <p className="text-sm text-secondary leading-relaxed italic">
                                  "O selo <strong>“Magalu Indica”</strong> elevou a confiança mesmo em produtos de marcas menos conhecidas, reforçando o impacto da prova social contextualizada."
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* A Solução */}
        <section className="max-w-4xl mx-auto space-y-32">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">A Solução</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Recomendações de gatilhos orientadas por comportamento real</h3>
             <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                O projeto resultou em um conjunto estruturado de recomendações para aplicação de gatilhos ao longo da jornada.
             </p>
          </div>

          <div className="space-y-48">
            {/* Solution: Home */}
            <div className="space-y-12">
               <div className="flex justify-between items-end border-b border-white/10 pb-6">
                 <h4 className="text-4xl font-display font-bold">Home</h4>
                 <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">Urgência</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">Destaque</span>
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Antes</span>
                     <p className="text-secondary leading-relaxed text-sm">A comunicação promocional aparecia de forma menos contextualizada e sem hierarquia clara entre urgência, desconto e benefício.</p>
                  </div>
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Depois</span>
                     <ul className="space-y-2">
                        {["Cupom aplicado diretamente no produto", "Timer atrelado à oferta", "Escassez vinculada ao desconto", "Melhor posicionamento de áreas promocionais"].map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs text-secondary font-medium">
                             <ChevronRight size={14} className="text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                  <img src="/images/cases/Hook/home-hook.png" alt="Solução Home" className="w-full h-auto" />
               </div>
            </div>

            {/* Solution: Busca */}
            <div className="space-y-12">
               <div className="flex justify-between items-end border-b border-white/10 pb-6">
                 <h4 className="text-4xl font-display font-bold">Busca</h4>
                 <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">Prova Social</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">Listagem</span>
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Antes</span>
                     <p className="text-secondary leading-relaxed text-sm">Pouca exploração de prova social e urgência na listagem de produtos.</p>
                  </div>
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Depois</span>
                     <ul className="space-y-2">
                        {["Selos de cupom", "Tag e Cliente Ouro", "Reforço de avaliações diretamente na busca", "Prazo de entrega evidente"].map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs text-secondary font-medium">
                             <ChevronRight size={14} className="text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark max-w-4xl mx-auto">
                  <img src="/images/cases/Hook/busca-hook.png" alt="Solução Busca" className="w-full h-auto" />
               </div>
            </div>

            {/* Solution: PDP */}
            <div className="space-y-12">
               <div className="flex justify-between items-end border-b border-white/10 pb-6">
                 <h4 className="text-4xl font-display font-bold">Página de Produto</h4>
                 <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">Confiança</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase rounded-lg text-white/40 tracking-widest">Experiência</span>
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Antes</span>
                     <p className="text-secondary leading-relaxed text-sm">Informações importantes para decisão estavam dispersas ou sem destaque suficiente.</p>
                  </div>
                  <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 h-full">
                     <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Depois</span>
                     <ul className="space-y-2">
                        {["Selo de economia em destaque", "Área de cupom evidente", "Mensagem de 'Restam apenas X unidades'", "Destaque quando o preço baixou"].map(item => (
                          <li key={item} className="flex items-center gap-2 text-xs text-secondary font-medium">
                             <ChevronRight size={14} className="text-green-500 shrink-0" /> {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark max-w-4xl mx-auto">
                  <img src="/images/cases/Hook/pdp-hook.png" alt="Solução PDP" className="w-full h-auto" />
               </div>
            </div>

            </div>
        </section>

        {/* Resultados */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">Resultados</h2>
             <h3 className="text-2xl font-bold">Aprendizados estratégicos da pesquisa</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <p className="text-secondary text-lg leading-relaxed">
                  O projeto validou que elementos textuais têm impacto direto na percepção de valor e confiança por parte do usuário.
               </p>
               <div className="space-y-6">
                  {[
                    { icon: <Target className="text-brand-blue" />, text: "Usuários valorizam previsibilidade mais do que velocidade genérica" },
                    { icon: <Zap className="text-brand-blue" />, text: "Avaliações são decisoras para marcas desconhecidas" },
                    { icon: <Search className="text-brand-blue" />, text: "Gatilhos precisam se repetir ao longo da jornada para reforçar confiança" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                          {item.icon}
                       </div>
                       <p className="text-sm text-secondary font-medium">{item.text}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="p-10 bg-brand-blue border border-brand-blue/20 rounded-[40px] text-white space-y-6 glow-blue">
               <h4 className="text-xs uppercase font-bold tracking-widest opacity-60">Impactos do projeto</h4>
               <ul className="space-y-4">
                  {[
                    "Estruturação de recomendações para toda a jornada",
                    "Base consolidada para futuros testes A/B",
                    "Consolidação de boas práticas de UX Writing",
                    "Integração entre UX Research e Content Strategy"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm font-bold">
                       <CheckCircle2 size={18} className="shrink-0" />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </section>

        {/* O que aprendi */}
        <section className="max-w-4xl mx-auto p-12 md:p-20 bg-card-dark border border-white/5 rounded-[56px] space-y-12">
           <h4 className="text-3xl font-bold flex items-center gap-4">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <Award size={24} />
             </div>
             O que aprendi como UX Writer nesse projeto
           </h4>
           <div className="grid md:grid-cols-2 gap-12">
             <ul className="space-y-8">
               {[
                 { title: "Conversão não é apenas persuasão", desc: "É também redução de incerteza do usuário." },
                 { title: "Confiança sobre Pressão", desc: "Prova social aumenta confiança mais do que pressão promocional." },
                 { title: "Valor da Clareza", desc: "Clareza textual impacta diretamente na percepção de valor." }
               ].map((item, i) => (
                 <li key={i} className="space-y-2">
                   <h5 className="font-bold text-white flex items-center gap-2">
                     <span className="text-brand-blue">0{i+1}.</span>
                     {item.title}
                   </h5>
                   <p className="text-sm text-secondary leading-relaxed pl-7">{item.desc}</p>
                 </li>
               ))}
             </ul>
             <ul className="space-y-8">
               {[
                 { title: "Poder do Microcopy", desc: "O microcopy influencia diretamente o comportamento de compra." },
                 { title: "Decisões baseadas em dados", desc: "Pesquisa comportamental é essencial para decisões de conteúdo." }
               ].map((item, i) => (
                 <li key={i} className="space-y-2">
                   <h5 className="font-bold text-white flex items-center gap-2">
                     <span className="text-brand-blue">0{i+4}.</span>
                     {item.title}
                   </h5>
                   <p className="text-sm text-secondary leading-relaxed pl-7">{item.desc}</p>
                 </li>
               ))}
             </ul>
           </div>
        </section>

      </main>
    </div>
  );
}
