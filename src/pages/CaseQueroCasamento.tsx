import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Award, ChevronRight, Zap, Target, Search, MessageSquare, Layout, Sparkles, Wallet, DollarSign, FileText, RefreshCw, HelpCircle, Trophy, Eye, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseQueroCasamento() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue col-span-12 z-[60] origin-left"
        initial={{ scaleX: 0 }}
        style={{ scaleX: "var(--scroll-progress, 0)" }}
      />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center bg-transparent">
          <Link id="btn-back-home" to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Voltar para home</span>
          </Link>
          <div className="hidden md:flex gap-2">
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">UX Writing</span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Fintech</span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Magalu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto space-y-8 text-center md:text-left">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-wrap justify-center md:justify-start gap-2"
          >
             {["UX Writing", "Content Strategy", "Fintech", "E-commerce & Wallet", "Linguagem Financeira", "MagaluPay"].map(tag => (
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
            Quero de Casamento Magalu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-4xl"
          >
            Transformando presentes em liberdade de escolha através de uma nova experiência de resgate de saldo para o MagaluPay.
          </motion.p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/5 py-12">
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Data</span>
              <p className="text-secondary text-sm">Junho 2026</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Projeto</span>
              <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">Case real</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Habilidades</span>
              <p className="text-secondary text-sm leading-snug">Arquitetura de informação, Curadoria de Linguagem, Testes A/B, Microcopy</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Empresa</span>
              <p className="text-secondary text-sm font-bold flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/pt/2/23/Logo-Magazine-Luiza.png" alt="Magalu" className="h-3 grayscale brightness-200" />
                Magazine Luiza
              </p>
           </div>
        </div>
      </section>

      {/* Body Content */}
      <main className="px-6 space-y-32 mt-12">
        
        {/* Resumo */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">Resumo</h2>
             <p className="text-secondary leading-relaxed text-lg">
                O <strong className="text-white font-semibold">Quero de Casamento</strong> é uma plataforma do Magazine Luiza que permite que casais criem suas listas de presentes e compartilhem com amigos e familiares durante a organização do casamento. Até então, todos os valores recebidos ficavam travados apenas para compras de produtos físicos dentro do próprio ecossistema varejista do Magalu.
             </p>
             <p className="text-secondary leading-relaxed text-lg">
                O desafio surgiu a partir de uma nova iniciativa estratégica que passou a permitir que os noivos transferissem esse saldo diretamente para uma conta própria no <strong className="text-white font-semibold">MagaluPay</strong>, garantindo flexibilidade total para o uso do valor recebido.
             </p>
             <p className="text-secondary leading-relaxed text-lg">
                Como <strong className="text-brand-blue font-semibold">UX Writer</strong> no projeto, atuei diretamente na construção textual de toda essa jornada, assegurando regras financeiras claras, auxiliando no processo técnico de resgate e entregando um tom de voz equilibrado e acolhedor para sanar incertezas nos usuários durante um momento tão importante de suas vidas.
             </p>
          </div>
        </section>

        {/* Contexto */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">Contexto</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Um novo benefício sem mudar a essência do produto</h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
               O Quero de Casamento sempre se consolidou em inspirar os casais a usarem os valores recebidos para montar o novo lar do zero. Com a integração da carteira digital MagaluPay, a funcionalidade de resgate introduziu a flexibilidade de poder retirar o saldo ou usá-lo fora da loja física/online tradicional.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
               Isso trouxe enorme vantagem competitiva, mas elevou significativamente a complexidade da comunicação. Era necessário explicar um fluxo financeiro sensível e burocrático sem gerar fricção ou sobrecarregar as pessoas usuárias que já lidavam com a típica ansiedade que antecede o casamento.
            </p>
            
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-6">
              <h4 className="text-xl font-bold text-brand-blue flex items-center gap-2">
                <Shield size={20} className="shrink-0" /> Restrição Estratégica & Desafio de Negócio:
              </h4>
              <p className="text-secondary text-sm leading-relaxed">
                Por motivos de viabilidade estratégica de marketplace, a nova funcionalidade de saque não deveria competir agressivamente com as compras internas do portfólio de móveis e eletrodomésticos. Ou seja, precisávamos de um design de conteúdo excepcionalmente transparente para quem precisasse resgatar, mas sem tornar isso o principal holofote promocional das campanhas externas regulares.
              </p>
            </div>
          </div>
        </section>

        {/* O Desafio */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">O Desafio</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Comunicar liberdade sem gerar ambiguidade</h3>
          </div>
          
          <div className="space-y-8">
            <p className="text-secondary leading-relaxed text-lg">
               Em transações financeiras, qualquer fresta de dúvida gera abandono, insegurança ou atrito com o suporte ao cliente. O principal desafio centrou-se em mapear incertezas latentes na jornada e simplificar conceitos jurídicos/financeiros.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-brand-blue font-bold uppercase tracking-widest text-xs flex items-center gap-1.5">
                     <Users size={14} className="shrink-0" /> Nós precisávamos explicar:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "As regras exatas de funcionamento do resgate",
                      "Os critérios claros de quem estava qualificado",
                      "O passo a passo intuitivo para criar a conta MagaluPay",
                      "O fluxo de transferência do saldo acumulado",
                      "A consulta rápida de extratos e comprovantes das transações"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-secondary">
                        <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl flex flex-col justify-center text-center space-y-4 italic">
                  <p className="text-secondary">"Traduzir jargões financeiros burocráticos para um microcopy seguro, simples e receptivo."</p>
                  <p className="text-white font-bold text-sm not-italic">Foco absoluto na previsibilidade de cada etapa do saque.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Meu Papel */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">Meu papel</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">UX Writing para uma experiência financeira mais clara</h3>
             <p className="text-secondary text-lg leading-relaxed max-w-3xl">
                Atuei como o designer de conteúdo e UX Writer responsável, conduzindo o mapeamento de touchpoints, tom e voz, e a redação holística focado em fintech de ponta a ponta.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                   <span className="p-1 px-2 bg-brand-blue/10 text-brand-blue rounded-lg text-sm">A</span> Estratégia de Conteúdo
                </h4>
                <ul className="space-y-3 text-sm text-secondary">
                   <li className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                      <span>Definição da jornada textual em múltiplos fluxos de login.</span>
                   </li>
                   <li className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                      <span>Explorações sistemáticas e testes de conteúdo de microcopias sensíveis.</span>
                   </li>
                   <li className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                      <span>Ajuste preciso de consistência no tom de voz em momentos de erro ou pendências.</span>
                   </li>
                </ul>
             </div>

             <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                   <span className="p-1 px-2 bg-brand-blue/10 text-brand-blue rounded-lg text-sm">B</span> Arquitetura de Informação
                </h4>
                <ul className="space-y-3 text-sm text-secondary">
                   <li className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                      <span>Curadoria sistemática e facilitação visual de terminologias financeiras.</span>
                   </li>
                   <li className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                      <span>Hierarquização estruturada de informações de saldos bloqueados versus liberados.</span>
                   </li>
                   <li className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                      <span>Criação de microcopies explicativos para as transições e links rápidos de resgate.</span>
                   </li>
                </ul>
             </div>
          </div>
        </section>

        {/* Meu Processo de Trabalho */}
        <section className="max-w-4xl mx-auto space-y-24">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">Meu Processo de Trabalho</h2>
          </div>

          {/* Step 1 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">1</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">Entendimento das Regras de Negócio</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      Comecei mergulhando nos requisitos técnicos profundos do MagaluPay. No contexto financeiro, existe uma teia densa de regras e regras regulatórias.
                   </p>
                </div>
             </div>
             
             <div className="ml-0 md:ml-20 p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4 max-w-3xl">
                <p className="text-secondary text-sm leading-relaxed">
                   Mapeamos as regras de transferência de saldos, restrições regulatórias do Banco Central (BACEN), dependências de KYC (verificação de identidade), limites diários de transferência de saldo para MagaluPay e os critérios exatos para herança ou encerramento dos saldos. 
                </p>
                <div className="p-4 bg-brand-blue/5 border border-brand-blue/15 rounded-2xl flex items-start gap-3">
                   <span className="text-brand-blue">💡</span>
                   <p className="text-secondary text-xs leading-relaxed"><strong className="text-white">O Racional de Negócio:</strong> Alinhamos os fluxos textuais com a integridade técnica, preparando o design para ser transparente sobre quaisquer barreiras (como contas bloqueadas ou suspeitas de fraude).</p>
                </div>
             </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">2</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">Mapeamento dos Cenários de Uso</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      Para evitar longos blocos de texto instrucionais cansativos, desenhei dois fluxos condicionais distintos baseados no status da pessoa logada.
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 grid md:grid-cols-2 gap-6 max-w-3xl">
                <div className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-3">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-blue">
                      <HelpCircle size={20} />
                   </div>
                   <h5 className="font-bold text-white text-sm">Cenário 1: Sem Conta MagaluPay</h5>
                   <p className="text-secondary text-xs leading-relaxed">
                      Foco em acolher e educar. Explicamos o benefício da conta MagaluPay, por que ela é necessária para o resgate inteligente e estruturamos um roteiro simples de abertura de conta com validação biométrica em poucos cliques.
                   </p>
                </div>

                <div className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-3">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-blue">
                      <RefreshCw size={20} />
                   </div>
                   <h5 className="font-bold text-white text-sm">Cenário 2: Com Conta MagaluPay</h5>
                   <p className="text-secondary text-xs leading-relaxed">
                      Foco em eficiência e agilidade. A comunicação aqui era puramente transacional, mostrando o saldo atualizado e fornecendo os termos claros para transferência imediata e geração do comprovante.</p>
                 </div>
              </div>

              <div className="ml-0 md:ml-20 max-w-3xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                 <img 
                    src="/images/cases/quero-casamento/cenarios-qdc.png" 
                    alt="Mapeamento de cenários do Quero de Casamento Magalu" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                 />
              </div>
           </div>

          {/* Step 3 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">3</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">Construção da Experiência de Resgate</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      Estruturamos uma nova sub-seção elegante chamada <strong className="text-white font-bold">Resgate</strong> que deu aos noivos flexibilidade e clareza visual impecável de suas finanças.
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 space-y-4 max-w-3xl">
                <p className="text-secondary text-sm leading-relaxed">
                   Esta seção centraliza todos os comandos essenciais. Como UX Writer, criei rascunhos informativos focando em reduzir anseios de carregamento e no status do dinheiro físico.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[
                      { l: "Saldo Disponível", d: "Indicação exata do que já está pronto para transferência." },
                      { l: "Solicitar Saque", d: "Chamamento claro e inequívoco para iniciar a transação." },
                      { l: "Acompanhamento", d: "Textos de status dinâmicos (Processando, Concluído, Falhou)." },
                      { l: "Histórico/Extrato", d: "Registros detalhados de todas as movimentações já feitas." }
                   ].map((item, i) => (
                      <div key={i} className="p-4 bg-[#121214] border border-white/5 rounded-xl space-y-1">
                         <span className="text-[11px] font-bold text-brand-blue block">{item.l}</span>
                         <p className="text-[10px] text-secondary leading-normal">{item.d}</p>
                      </div>
                   ))}
                </div>

                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card-dark mt-6">
                   <img 
                      src="/images/cases/quero-casamento/jornada-qdc.jpg" 
                      alt="Jornada de Resgate do Quero de Casamento Magalu" 
                      className="w-full h-auto block" 
                      referrerPolicy="no-referrer"
                   />
                </div>
             </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">4</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">Curadoria de Linguagem Financeira</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      Para evitar confusão e chamados duplicados ao SAC do Magalu, definimos termos únicos e precisos para cada etapa do ecossistema de transações.
                   </p>
                </div>
             </div>

             <div className="ml-0 md:ml-20 space-y-4 max-w-3xl">
                <div className="p-6 bg-card-dark border border-white/5 rounded-3xl">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                         { term: "Resgate", desc: "Ação de liberar os presentes em saldo da carteira." },
                         { term: "Transferência", desc: "Movimentação ativa do saldo acumulado do Quero para o MagaluPay." },
                         { term: "Extrato", desc: "Janela histórica organizada com todas as entradas e saídas." },
                         { term: "Saldo Disponível", desc: "Dinheiro livre, limpo de restrições de tempo ou contestação." }
                      ].map((item, i) => (
                         <div key={i} className="flex gap-3 items-start border-l-2 border-brand-blue/30 pl-3">
                            <div>
                               <span className="text-white font-bold text-sm block">{item.term}</span>
                               <span className="text-[11px] text-secondary">{item.desc}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Step 5 - A/B Tests */}
          <div className="space-y-6">
             <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">5</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold text-white font-display">Testes e Refinamentos de Conteúdo (A/B Test)</h4>
                   <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                      Além da aplicação de gatilhos na interface geral, realizamos testes heurísticos, explorações sistemáticas e testes A/B de conteúdo e microcopy para garantir alta clareza, urgência saudável e correta percepção de benefício pelo público.
                   </p>
                </div>
             </div>

             {/* Editorial A/B Testing Component */}
             <div className="ml-0 md:ml-20 space-y-6 max-w-3xl">
                <div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block mb-1">Validação de Comunicação</span>
                   <h5 className="text-lg font-bold text-white">Explorações e Microcopy testados</h5>
                </div>

                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                    {[
                       {
                          title: "Nomenclatura do Fluxo",
                          opA: "Saque",
                          opB: "Resgate",
                          winner: "B",
                          rationale: "O termo 'Resgate' se provou muito mais associado ao resgate de prêmios e presentes no casamento do que 'Saque' (que remete à burocracia bancária fria), gerando percepção de ganho, maior acolhimento e clareza no processo."
                       }
                    ].map((test, idx) => (
                       <div key={idx} className="p-6 bg-card-dark border border-white/5 rounded-2xl flex flex-col justify-between hover:border-brand-blue/20 transition-all duration-300">
                          <div className="space-y-3">
                             <h6 className="font-bold text-white text-xs tracking-wide uppercase text-white/70 border-b border-light-dark pb-1.5 flex items-center justify-between">
                               <span>{test.title}</span>
                               <span className="px-1.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded text-[8px] font-bold">A/B TEST</span>
                             </h6>
                             
                             <div className="grid grid-cols-2 gap-2">
                                <div className={`p-2 rounded-lg border text-center ${test.winner === "A" ? "bg-brand-blue/10 border-brand-blue/30" : "bg-white/[0.02] border-white/5"}`}>
                                   <span className="text-[8px] text-white/40 block">Opção A</span>
                                   <span className="font-mono text-white text-[11px] font-bold pb-0.5 flex justify-center">{test.opA}</span>
                                </div>
                                <div className={`p-2 rounded-lg border text-center ${test.winner === "B" ? "bg-brand-blue/10 border-brand-blue/30" : "bg-white/[0.02] border-white/5"}`}>
                                   <span className="text-[8px] text-white/40 block">Opção B</span>
                                   <span className="font-mono text-white text-[11px] font-bold pb-0.5 flex justify-center">{test.opB}</span>
                                </div>
                             </div>
                          </div>
                          <div className="mt-3 pt-2.5 border-t border-white/5 flex gap-1.5 text-[10px]">
                             <span className="text-brand-blue shrink-0 font-bold">Resultado:</span>
                             <p className="text-secondary leading-snug"><strong className="text-white">Opção {test.winner}</strong> ganhou. {test.rationale}</p>
                          </div>
                       </div>
                    ))}
                 </div>
             </div>
          </div>
        </section>

        {/* A Solução */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">A Solução</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Uma nova experiência financeira integrada ao ecossistema Magalu</h3>
          </div>
          
          <div className="space-y-8">
             <p className="text-secondary text-lg leading-relaxed">
                Desenvolvemos uma jornada coesa de ponta a ponta. A interface de resgate do Quero de Casamento passou a funcionar perfeitamente em dispositivos móveis e desktops, guiando usuários por todos os trâmites importantes.
             </p>

             <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-2">
                   <h5 className="font-bold text-white text-sm">Resgate de Valores</h5>
                   <p className="text-secondary text-xs leading-relaxed">Liberdade real para transferir os presentes para o MagaluPay sem burocracias desnecessárias.</p>
                </div>
                <div className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-2">
                   <h5 className="font-bold text-white text-sm">Regras muito Claras</h5>
                   <p className="text-secondary text-xs leading-relaxed">Garantia absoluta de conformidade legal, informando limites, tarifas e status de forma visual e amigável.</p>
                </div>
                <div className="p-6 bg-card-dark border border-white/5 rounded-2xl space-y-2">
                   <h5 className="font-bold text-white text-sm">Integridade de Marca</h5>
                   <p className="text-secondary text-xs leading-relaxed">Reduzimos as dúvidas e prevenimos solicitações desnecessárias aos canais de SAC do Magalu.</p>
                </div>
             </div>

              {/* iPhone 17 Pro Video Mockup */}
              <div className="flex flex-col items-center justify-center mt-16 space-y-8">
                 <div className="text-center space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono block">Demonstração da Jornada</span>
                    <h4 className="text-xl md:text-2xl font-bold text-white font-display">Veja a experiência em funcionamento</h4>
                 </div>

                 <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/19.5] mx-auto filter drop-shadow-[0_35px_60px_rgba(0,0,0,0.85)]">
                    {/* Phone Side Buttons */}
                    {/* Action Button (Left side) */}
                    <div className="absolute left-[-13px] top-[120px] w-[3px] h-[20px] bg-neutral-800 rounded-l-md ring-1 ring-white/5" />
                    {/* Volume Up Button (Left side) */}
                    <div className="absolute left-[-13px] top-[160px] w-[3px] h-[35px] bg-neutral-800 rounded-l-md ring-1 ring-white/5" />
                    {/* Volume Down Button (Left side) */}
                    <div className="absolute left-[-13px] top-[210px] w-[3px] h-[35px] bg-neutral-800 rounded-l-md ring-1 ring-white/5" />
                    {/* Power Button (Right side) */}
                    <div className="absolute right-[-13px] top-[180px] w-[3px] h-[45px] bg-neutral-800 rounded-r-md ring-1 ring-white/5" />

                    {/* Outer Titanium Frame */}
                    <div className="w-full h-full rounded-[48px] border-[8px] border-neutral-900 bg-neutral-950 p-[1.5px] ring-1 ring-white/10 relative overflow-hidden flex items-center justify-center">
                       {/* Anti-Glare / Reflection Overlay */}
                       <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-20" />

                       {/* Dynamic Island */}
                       <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-neutral-800/10 shadow-[inner_0_1px_3px_rgba(255,255,255,0.05)]">
                          <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                          <div className="w-3 h-0.5 bg-neutral-950 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-neutral-900/60 rounded-full" />
                       </div>

                       {/* Screen Screen Container */}
                       <div className="w-full h-full rounded-[40px] overflow-hidden bg-black relative">
                          <video
                             autoPlay
                             loop
                             muted
                             playsInline
                             className="w-full h-full object-cover scale-[1.01]"
                          >
                             <source src="/images/cases/quero-casamento/jornada-qdc.mp4" type="video/mp4" />
                             Seu navegador não suporta vídeos.
                          </video>
                       </div>
                    </div>
                 </div>
              </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">Resultados</h2>
             <h3 className="text-2xl font-bold text-white">Impactos da iniciativa no produto</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <p className="text-secondary text-lg leading-relaxed">
                  A introdução da funcionalidade de resgate para o MagaluPay, enriquecida por um design de conteúdo cuidadoso e humanizado, marcou uma evolução histórica na proposta de valor da lista de presentes.
               </p>
               <div className="space-y-6">
                  {[
                     { icon: <Wallet className="text-brand-blue" />, text: "Nova funcionalidade complexa de resgate com MagaluPay totalmente incorporada." },
                     { icon: <FileText className="text-brand-blue" />, text: "Jornada de transações estruturada do início ao fim com comunicação explicativa." },
                     { icon: <CheckCircle2 className="text-brand-blue" />, text: "Redução maciça de chamados ao SAC e suporte sobre fluxo financeiro." }
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

            <div className="p-10 bg-brand-blue border border-brand-blue/20 rounded-[40px] text-white space-y-6 glow-blue flex flex-col justify-center">
               <h4 className="text-xs uppercase font-bold tracking-widest opacity-60">Resultados Principais</h4>
               <ul className="space-y-4">
                  {[
                     "Autonomia inédita para os noivos utilizarem saldo fora da plataforma",
                     "Interface e arquitetura de dados transparente e integrada",
                     "Consolidação da confiança na carteira e no ecossistema do Magalu",
                     "UX Writing destacado como decisor estratégico financeiro"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm font-bold">
                       <CheckCircle2 size={18} className="shrink-0 text-white" />
                       <span>{item}</span>
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
                  { title: "Simplicidade e Precisão Financeira", desc: "A linguagem do dinheiro precisa ser simples de entender, mas sem perder o rigor técnico das regras contratuais." },
                  { title: "Previsibilidade combate Ansiedade", desc: "Fornecer status transparentes e previsões claras de transferência reduz a agonia dos usuários." },
                  { title: "Linguagem define a Função", desc: "Uma pequena mudança estratégica de 'Retirada' para 'Resgate' mudou a clareza geral da utilidade." }
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
                  { title: "Equilíbrio em Regras de Negócio", desc: "Negociar as amarras de marketing com a usabilidade transparente construiu um fluxo muito honesto." },
                  { title: "A Confiança é a Moeda Principal", desc: "UX Writing é a ponte humana que ajuda o usuário a confiar seu capital financeiro na plataforma." }
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
