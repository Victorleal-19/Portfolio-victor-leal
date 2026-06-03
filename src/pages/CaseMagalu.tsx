import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Info, TrendingUp, Users, Smartphone, Clock, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseMagalu() {
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
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Magalu</span>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-wrap gap-2"
          >
             {["UX Writing", "Content Design", "E-commerce", "SuperApp", "Conversão", "Magalu"].map(tag => (
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
            Nova experiência: Favoritos e Listas no Magalu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light"
          >
            A funcionalidade de Favoritos do SuperApp do Magalu registrava milhões de interações mensais, mas o que deveria ser um motor de conversão estava se tornando um ponto de frustração.
          </motion.p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Created</span>
              <p className="text-secondary text-sm">10 de Abril, 2024</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Projeto</span>
              <p className="text-secondary text-sm">Case Real • Labs</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Habilidades</span>
              <p className="text-secondary text-sm">Arquitetura de Info, UX Writing</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Ferramentas</span>
              <p className="text-secondary text-sm">Figma, Miro, Maze</p>
           </div>
        </div>
      </section>

      {/* Body Content */}
      <main className="px-6 space-y-32">
        
        {/* Resumo */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Resumo</h2>
          <p className="text-secondary leading-relaxed text-lg">
            A funcionalidade de Favoritos do SuperApp do Magalu registrava milhões de interações mensais, mas o que deveria ser um motor de conversão estava se tornando um ponto de frustração. Usuários reclamavam de listas que sumiam, produtos indisponíveis sem qualquer comunicação e ausência de uma experiência que os ajudasse a, de fato, comprar. Meu trabalho foi articular a estratégia de conteúdo que orientou toda a reescrita da interface: da nomenclatura das funcionalidades até o microcopy de cada estado da jornada.
          </p>
        </section>

        {/* Contexto */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 text-white">Contexto</h2>
          <h3 className="text-xl font-bold text-brand-blue">Uma funcionalidade relevante, mas subutilizada</h3>
          <p className="text-secondary leading-relaxed text-lg">
            A feature de Favoritos já existia no SuperApp. Qualquer usuário podia marcar um produto com um coração (♡) e acessar a lista pelo menu inferior. Simples, mas limitado. Com a evolução do comportamento de consumo e a movimentação dos concorrentes, surgiu a demanda estratégica de tornar a funcionalidade mais rica e, principalmente, mais útil para a jornada de compra.
          </p>
          
          <div className="p-10 bg-card-dark border border-white/5 rounded-[40px] mt-12 space-y-6">
            <h4 className="text-xl font-bold">A oportunidade que os dados revelavam</h4>
            <ul className="space-y-4">
              {[
                "+ de 3 Milhões de interações com a funcionalidade por mês",
                "A maioria dos usuários preferia o SuperApp ao site para compras",
                "66% dos usuários usam a sacola como lista de desejos",
                
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-secondary">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-4 items-start italic text-sm text-secondary">
              <span className="text-green-500 font-bold">"</span>
              <p>"Sumiu a minha lista de favoritos, vou desistir das compras." — <span className="text-white font-semibold">Avaliação real na Google Play Store</span></p>
            </div>
          </div>
        </section>

        {/* O Desafio */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">O Desafio</h2>
          <h3 className="text-xl font-bold text-brand-blue uppercase tracking-widest text-sm">Mais do que reescrever textos: redefinir o modelo mental</h3>
          <p className="text-secondary leading-relaxed text-lg">
            O projeto não tinha apenas um problema de interface, tinha um problema de linguagem estrutural. O usuário usava "Favoritos" como ferramenta de planejamento de compras, mas o produto não estava instrumentalizado para isso. E havia uma segunda camada de confusão: a chegada das "Listas" tornava urgente a questão: qual a diferença entre "Favoritos" e uma "Lista"?
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 glass rounded-3xl space-y-4">
               <Info className="text-brand-blue" />
               <h4 className="font-bold">Insight de pesquisa</h4>
               <p className="text-sm text-secondary">A survey com centenas de respondentes revelou que uma grande porcentagem usava a sacola de compras como substituto da lista de desejos.</p>
            </div>
            <div className="p-8 glass rounded-3xl space-y-4">
               <Users className="text-brand-blue" />
               <h4 className="font-bold">Barreiras identificadas</h4>
               <p className="text-sm text-secondary">O problema não era falta de uso, era falta de proposta de valor clara para a funcionalidade.</p>
            </div>
          </div>

          <div className="pt-12 space-y-6">
            <h4 className="text-xl font-bold">A tensão central de conteúdo</h4>
            <ul className="space-y-4 text-secondary">
              <li className="flex gap-4">
                <span className="text-brand-blue flex-shrink-0">•</span>
                <p>Como comunicar estados de produto (indisponível, preço caiu, estoque baixo) sem gerar ansiedade?</p>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-blue flex-shrink-0">•</span>
                <p>Como o microcopy de feedback pode ser proativo, e não só reativo?</p>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-blue flex-shrink-0">•</span>
                <p>Como criar uma experiência de listas para influenciadores que seja clara tanto para o afiliado quanto para o cliente final?</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Meu Papel */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Meu papel</h2>
            <h3 className="text-xl font-bold">UX Writer integrado ao squad de produto desde o discovery</h3>
            <p className="text-secondary text-lg leading-relaxed">
              Fiz parte do time de UX dentro do Squad Favoritos, Labs. Minha atuação não foi pontual, estive presente desde a fase de discovery, participando das discussões de pesquisa, benchmark e definição de escopo.
            </p>
          </div>

          {/* Table Component */}
          <div className="bg-card-dark border border-white/5 rounded-[32px] overflow-hidden shadow-xl">
             <div className="grid grid-cols-1 md:grid-cols-2 bg-white/5 py-4 px-8 border-b border-white/10 uppercase text-[10px] font-bold tracking-widest text-white/40">
                <div>Atribuição</div>
                <div className="hidden md:block">Ações & Deliverables</div>
             </div>
             <div className="divide-y divide-white/5">
                {[
                  { title: "Nomenclatura e estratégia de conteúdo", desc: "Recomendações de conteúdo pós-pesquisa" },
                  { title: "Microcopy (estados, feedbacks, notificações)", desc: "Definição de tom para cada contexto" },
                  { title: "Colaboração com UX Research", desc: "Revisão de copy para testes de usabilidade (Maze)" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 py-6 px-8 items-center gap-4 hover:bg-white/[0.02] transition-colors">
                    <div className="font-bold text-white">{row.title}</div>
                    <div className="text-secondary text-sm">{row.desc}</div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Meu Processo de Trabalho */}
        <section className="max-w-3xl mx-auto space-y-20">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Meu Processo de Trabalho</h2>
             <h3 className="text-xl font-bold text-brand-blue">Como cheguei às decisões de conteúdo</h3>
          </div>

          <div className="space-y-24">
             {/* Step 1 */}
             <div className="space-y-8 relative">
                <div className="absolute -left-12 top-0 text-7xl font-display font-black text-white/[0.03] -z-10 select-none">01</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold">1 - Imersão nos dados e nas vozes dos usuários</h4>
                   <p className="text-secondary text-lg">Antes de escrever qualquer texto, mergulhei nos dados do Google Analytics (19,6M eventos), nas avaliações da Play Store e nos relatórios do canal Luiza Resolve. O objetivo era entender não só o que os usuários faziam, mas o que diziam, e o que sentiam quando a experiência falhava.</p>
                </div>
             </div>

             {/* Step 2 */}
             <div className="space-y-8 relative">
                <div className="absolute -left-12 top-0 text-7xl font-display font-black text-white/[0.03] -z-10 select-none">02</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold">2 - Benchmark de linguagem (não só de interface)</h4>
                   <p className="text-secondary text-lg">Analisamos como diversos players (concorrentes diretos ou não) nomeiam e comunicam suas funcionalidades de favoritos e listas. O foco foi no vocabulário: como cada plataforma chama a mesma ação? Quais termos convertem melhor?</p>
                </div>
                <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl mt-8">
                  <img
                    src="/images/cases/favoritos/bench-favoritos.jpg"
                    alt="Benchmark de favoritos"
                    className="w-full h-auto block"
                  />
                </div>
             </div>

             {/* Step 3 */}
             <div className="space-y-8 relative">
                <div className="absolute -left-12 top-0 text-7xl font-display font-black text-white/[0.03] -z-10 select-none">03</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold">3 - Participação ativa na pesquisa quantitativa (Fase 1)</h4>
                   <p className="text-secondary text-lg">Colaborei com o time de UX Research na elaboração do roteiro da survey. Meu papel foi assegurar que as perguntas sobre nomenclatura fossem formuladas de forma neutra, a fim de entendermos as principais dores do nosso público em relação à funcionalidade de favoritos do Magalu.</p>
                </div>
             </div>

             {/* Step 4 */}
             <div className="space-y-8 relative">
                <div className="absolute -left-12 top-0 text-7xl font-display font-black text-white/[0.03] -z-10 select-none">04</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold">4 - Estruturação, escrita e criação do protótipo navegável</h4>
                   <p className="text-secondary text-lg">Trabalhei diretamente no Figma ao lado do time de UX Design para garantir que o microcopy coubesse no espaço, respeitasse a hierarquia visual e fosse consistente entre telas.</p>
                </div>
             </div>

             {/* Step 5 */}
             <div className="space-y-8 relative">
                <div className="absolute -left-12 top-0 text-7xl font-display font-black text-white/[0.03] -z-10 select-none">05</div>
                <div className="space-y-4">
                   <h4 className="text-2xl font-bold">5 - Validação com teste de usabilidade</h4>
                   <p className="text-secondary text-lg">Os testes de usabilidade tiveram um papel fundamental na evolução da solução. De forma geral, os resultados validaram a maior parte das funcionalidades propostas no protótipo, indicando boa compreensão e aderência por parte dos usuários. Ao mesmo tempo, os testes também evidenciaram pontos de melhoria, especialmente em nomenclaturas, clareza de ações e entendimento de alguns fluxos, que foram ajustados antes da evolução do produto.</p>
                </div>
             </div>
          </div>
        </section>

        {/* A Solução (Before & After) */}
        <section className="max-w-5xl mx-auto space-y-20">
          <div className="max-w-3xl mx-auto space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight">A Solução</h2>
             <h3 className="text-xl font-bold text-brand-blue">Antes & Depois: as decisões de linguagem que mudaram a experiência</h3>
             <p className="text-secondary text-lg">Cada reescrita foi orientada por dados, da pesquisa, do benchmark ou do teste de usabilidade. <span className="text-white font-bold">Não foi intuição: foi estratégia.</span></p>
          </div>

          <div className="space-y-32 pt-12">
             {/* Implementation 1 */}
             <div className="space-y-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-bold">1 - Empty state — Favoritos vazio (primeiro acesso)</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Antes</span>
                         <p className="text-secondary leading-relaxed">
                            A hierarquia da informação era confusa: o CTA aparecia antes da mensagem principal. O texto era genérico, pouco amigável e não incentivava nenhuma ação clara. A mensagem era puramente funcional: <span className="italic text-white">"Sua lista de favoritos está vazia."</span>
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Depois</span>
                         <p className="text-secondary leading-relaxed">
                            Uma nova abordagem que transforma o silêncio do estado vazio em uma oportunidade de descoberta. Implementamos sugestões baseadas no histórico do usuário e humanizamos o tom de voz da marca.
                         </p>
                      </div>
                   </div>

                   <div className="max-w-2xl mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-xl bg-card-dark">
                      <img
                        src="/images/cases/favoritos/empify-favoritos-vazio.jpg"
                        alt="Nova experiência de favoritos vazio"
                        className="w-full h-auto block"
                      />
                   </div>

                   <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">Resultados e impactos</h5>
                      <ul className="grid sm:grid-cols-2 gap-4">
                         {[
                           "Corrige a hierarquia da informação",
                           "Torna o tom mais próximo e alinhado à marca",
                           "Transforma um estado vazio em ponto de descoberta",
                           "Incentiva navegação e aumenta potencial de conversão"
                         ].map(item => (
                           <li key={item} className="flex items-center gap-2 text-xs text-secondary">
                              <CheckCircle2 size={14} className="text-green-500" /> {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>

             {/* Implementation 2 */}
             <div className="space-y-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-bold">2 - Empty state — nenhuma lista criada</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Antes</span>
                         <p className="text-secondary leading-relaxed">
                            Mensagem genérica informando que não havia listas criadas. Sem contexto, sem direcionamento e sem qualquer conexão com valor real para o modelo mental do usuário.
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Depois</span>
                         <p className="text-secondary leading-relaxed">
                            Criação de uma tela que comunica e dá visibilidade a produtos do ecossistema, como Listas de Casamento e Chá de Bebê, gerando valor imediato.
                         </p>
                      </div>
                   </div>

                   <div className="max-w-sm mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-xl bg-card-dark">
                      <img
                        src="/images/cases/favoritos/empty-lista.png"
                        alt="Interface de listas vazias"
                        className="w-full h-auto block"
                      />
                   </div>

                   <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">Resultados e impactos</h5>
                      <p className="text-secondary text-sm leading-relaxed">
                         Aumento na descoberta de serviços estratégicos do Magalu diretamente pela funcionalidade de Listas, integrando o ecossistema de forma fluida.
                      </p>
                   </div>
                </div>
             </div>

             {/* Implementation 3 */}
             <div className="space-y-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-bold">3 - Feedback — adicionar/remover produto dos favoritos</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Antes</span>
                         <p className="text-secondary leading-relaxed">
                            Nenhum feedback visual ou textual ao salvar ou remover produtos. O usuário realizava a ação sem confirmação clara, gerando insegurança no processo.
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Depois</span>
                         <p className="text-secondary leading-relaxed">
                            Decisão estratégica de linguagem: uso do termo "salvar" em vez de "favoritar" e introdução de micro-feedbacks instantâneos de sucesso.
                         </p>
                      </div>
                   </div>

                   <div className="max-w-2xl mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-xl bg-card-dark">
                      <img
                        src="/images/cases/favoritos/feedback.png"
                        alt="Feedback ao favoritar produto"
                        className="w-full h-auto block"
                      />
                   </div>

                   <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">Resultados e impactos</h5>
                      <p className="text-secondary text-sm leading-relaxed">
                         Maior percepção de controle e segurança por parte do usuário, confirmando que sua intenção foi compreendida pelo sistema imediatamente.
                      </p>
                   </div>
                </div>
             </div>

             {/* Implementation 4 */}
             <div className="space-y-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-bold">4 - Produto indisponível na lista</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Antes</span>
                         <p className="text-secondary leading-relaxed">
                            O produto era simplesmente removido da lista ou sumia sem qualquer explicação, contexto ou alternativa para o usuário, gerando abandono.
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Depois</span>
                         <p className="text-secondary leading-relaxed">
                            Exibição clara do estado de indisponibilidade com CTA para explorar produtos similares, mantendo o usuário no fluxo de compra.
                         </p>
                      </div>
                   </div>

                   <div className="max-w-sm mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-xl bg-card-dark">
                      <img
                        src="/images/cases/favoritos/produto-indis.jpg"
                        alt="Estado de produto indisponível"
                        className="w-full h-auto block"
                      />
                   </div>

                   <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">Resultados e impactos</h5>
                      <p className="text-secondary text-sm leading-relaxed">
                         Redução na taxa de abandono da lista e aumento na navegação por produtos recomendados quando o item original está fora de estoque.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Resultados</h2>
             <h3 className="text-xl font-bold">Impacto na experiência e na jornada</h3>
             <p className="text-secondary text-lg leading-relaxed">A nova versão da funcionalidade trouxe melhorias claras na forma como o usuário interage com favoritos. A experiência deixou de ser apenas funcional e passou a ser <span className="text-white font-bold underline decoration-brand-blue underline-offset-4">orientada à jornada de compra</span>.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
             {[
               { icon: <TrendingUp />, title: "Fluidez", desc: "Redução de fricções na navegação e estados vazios transformados em oportunidades." },
               { icon: <Award />, title: "Marca", desc: "Tom de voz aproximado e alinhado à proposta de valor do ecossistema Magalu." },
               { icon: <Smartphone />, title: "Conversão", desc: "Favoritos instrumentalizado como ferramenta de planejamento de compra real." }
             ].map((r, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4"
               >
                 <div className="w-12 h-12 bg-brand-blue/20 flex items-center justify-center rounded-2xl text-brand-blue">
                    {r.icon}
                 </div>
                 <h4 className="font-bold text-xl">{r.title}</h4>
                 <p className="text-sm text-secondary">{r.desc}</p>
               </motion.div>
             ))}
          </div>

          <div className="max-w-3xl mx-auto p-12 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-8">
             <h4 className="text-xl font-bold flex items-center gap-3">
               <CheckCircle2 className="text-brand-blue" />
               O que aprendi como UX Writer nesse projeto
             </h4>
             <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  "Empty states não são estados finais — são pontos de ativação",
                  "Linguagem define percepção de funcionalidade",
                  "Transparência reduz frustração e aumenta confiança",
                  "Micro-feedbacks têm grande impacto na experiência",
                  "UX Writing não é só clareza — é condução de comportamento"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-brand-blue font-bold">0{i+1}.</span>
                    <p className="text-sm text-secondary font-medium">{item}</p>
                  </li>
                ))}
             </ul>
          </div>
        </section>

      </main>
    </div>
  );
}
