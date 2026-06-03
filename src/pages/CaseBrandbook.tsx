import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Award, ChevronRight, Target, Layout, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CaseBrandbook() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24 font-sans">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Voltar para home</span>
          </Link>
          <div className="hidden md:flex gap-2">
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Branding</span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">UX Writing</span>
             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Cargo Sapiens</span>
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
             {["UX Writing", "Brandbook", "Branding", "Content Strategy", "Tone of Voice", "Content Design"].map(tag => (
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
            Criação de Brandbook: Cargo Sapiens
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-4xl"
          >
            A Cargo Sapiens precisava estruturar sua comunicação para garantir consistência e clareza em todos os pontos de contato com o cliente.
          </motion.p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/5 py-12">
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Created</span>
              <p className="text-secondary text-sm">Abril 30, 2026</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Projeto</span>
              <p className="text-brand-blue font-bold px-2 py-0.5 bg-brand-blue/10 rounded inline-block text-[10px]">Case real</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Habilidades</span>
              <p className="text-secondary text-sm leading-snug">Arquitetura da informação, Arquétipos, Brand Voice, Tom e Voz</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">Empresa</span>
              <p className="text-secondary text-sm font-bold flex items-center gap-2">
                <BookOpen size={14} className="text-brand-blue" />
                Cargo Sapiens
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
                A Cargo Sapiens precisava estruturar sua comunicação para garantir consistência e clareza em todos os pontos de contato com o cliente. O desafio não era apenas criar um brand book, mas construir um sistema de linguagem que traduzisse a essência da marca de forma prática e aplicável no dia a dia.
             </p>
             <p className="text-secondary leading-relaxed text-lg">
                Como UX Writer, liderei a construção desse sistema desde a base estratégica até a aplicação final, conectando posicionamento de marca, necessidades do público e diretrizes claras de comunicação.
             </p>
          </div>
        </section>

        {/* Contexto */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Contexto</h2>
             <p className="text-secondary leading-relaxed text-lg">
                A Cargo Sapiens é uma uma plataforma de gestão de fretes desenvolvida para modernizar e simplificar o processo de compra de fretes nas modalidades marítimo, aéreo, rodoviário e naval, ou seja, uma empresa inserida em um mercado técnico e competitivo, onde confiança, clareza e eficiência são fatores decisivos na escolha do cliente.
             </p>
             <p className="text-secondary leading-relaxed text-lg">
                Apesar de já possuir uma atuação definida, a marca ainda não tinha uma estrutura consolidada de comunicação. Isso gerava inconsistências na forma como se apresentava em diferentes canais e dificultava a construção de uma identidade forte e reconhecível.
             </p>
          </div>
        </section>

        {/* O Desafio */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">O Desafio</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Estruturar uma comunicação que fosse:</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Coerente com o posicionamento da marca",
              "Clara mesmo ao tratar temas complexos",
              "Consistente entre diferentes canais e materiais",
              "Escalável para diferentes times"
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card-dark border border-white/5 rounded-3xl flex gap-4 items-start">
                <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={20} />
                <span className="text-secondary text-lg">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-secondary leading-relaxed text-lg italic text-center max-w-2xl mx-auto">
            Mais do que criar um documento, era necessário construir um sistema que funcionasse na prática.
          </p>
        </section>

        {/* Meu Papel */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Meu papel</h2>
             <p className="text-secondary text-lg leading-relaxed">
                Atuei como UX Writer e estrategista de conteúdo, responsável por estruturar toda a linguagem da marca.
             </p>
          </div>

          <div className="bg-card-dark border border-white/5 rounded-[32px] overflow-hidden shadow-xl">
             <div className="p-8 md:p-12 space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">Minha atuação envolveu:</h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                   {[
                     "Imersão estratégica com stakeholders",
                     "Pesquisa de público-alvo",
                     "Benchmark de mercado",
                     "Definição de posicionamento e linguagem",
                     "Criação do brand book",
                     "Apresentação e validação da solução"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-white font-bold pb-4 border-b border-white/5">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                        {item}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Meu Processo de Trabalho */}
        <section className="max-w-4xl mx-auto space-y-32">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">Meu Processo de Trabalho</h2>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">1</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Imersão com stakeholders</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        O projeto começou com duas reuniões estratégicas com os stakeholders da empresa. O objetivo foi entender profundamente o negócio:
                     </p>
                  </div>
               </div>
               <div className="ml-20 grid sm:grid-cols-2 gap-4">
                  {[
                    "Por que a empresa foi criada",
                    "O que ela oferece",
                    "Missão, visão e valores",
                    "Como os stakeholders enxergam a marca",
                    "Pontos fortes e pontos de melhoria",
                    "Personalidade da marca",
                    "Como desejam ser percebidos"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-secondary text-sm">
                       <ChevronRight size={16} className="text-brand-blue shrink-0 mt-0.5" />
                       <span>{item}</span>
                    </div>
                  ))}
               </div>
               <div className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl ml-20 text-center italic">
                  <p className="text-secondary">“Essa etapa foi essencial para garantir que a comunicação fosse construída a partir da essência real da empresa, e não apenas de percepções externas.”</p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">2</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Entendimento do público-alvo</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        Depois da imersão interna, o foco foi entender para quem a marca se comunica. Analisei:
                     </p>
                  </div>
               </div>
               <div className="ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Dados demográficos do público",
                    "Principais dores e necessidades",
                    "Objeções no processo de decisão",
                    "Expectativas em relação ao serviço"
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-card-dark border border-white/5 rounded-2xl text-sm text-secondary leading-relaxed font-medium">
                       {item}
                    </div>
                  ))}
               </div>
               <p className="text-secondary leading-relaxed ml-20">
                  Esse entendimento orientou toda a construção da linguagem, garantindo que ela fosse relevante e acessível para o público certo.
               </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">3</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Benchmark de mercado</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        Realizei um benchmark para analisar como empresas do mesmo segmento se comunicam. O objetivo foi identificar:
                     </p>
                  </div>
               </div>
               <div className="ml-20 grid sm:grid-cols-2 gap-4">
                  {[
                    "Boas práticas que poderiam ser incorporadas",
                    "Padrões de linguagem do mercado",
                    "Oportunidades de diferenciação",
                    "Abordagens que deveriam ser evitadas"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-secondary text-sm">
                       <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                       <span>{item}</span>
                    </div>
                  ))}
               </div>
               <p className="text-secondary leading-relaxed ml-20">
                  Essa análise ajudou a posicionar a marca de forma mais estratégica e competitiva.
               </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">4</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Construção do brand book</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        Com todos os insumos consolidados, iniciei a construção do brand book. A estrutura foi desenvolvida de forma progressiva:
                     </p>
                  </div>
               </div>
               
               <div className="ml-20 space-y-16">
                  <div className="space-y-6">
                     <h5 className="text-xl font-bold text-white flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-blue rounded-full" />
                        Missão, visão e valores
                     </h5>
                     <p className="text-secondary">Organização e definição clara dos pilares da empresa.</p>
                  </div>

                  <div className="space-y-8">
                     <h5 className="text-xl font-bold text-white flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-blue rounded-full" />
                        Arquétipos e personalidade da marca
                     </h5>
                     <p className="text-secondary">Definição de como a marca se comporta e se expressa.</p>
                     <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                        <img src="/images/cases/brandbook/arquetipos.png" alt="Arquétipos da marca" className="w-full h-auto block" />
                     </div>
                  </div>

                  <div className="space-y-8">
                     <h5 className="text-xl font-bold text-white flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-blue rounded-full" />
                        Tom de voz
                     </h5>
                     <p className="text-secondary">Construção de diretrizes práticas de linguagem, incluindo resumo semântico, palavras-chave e direcionamentos de escrita.</p>
                     <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                        <img src="/images/cases/brandbook/tomevoz.png" alt="Tom de Voz da Cargo Sapiens" className="w-full h-auto block" />
                     </div>
                  </div>

                  <div className="space-y-8">
                     <h5 className="text-xl font-bold text-white flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-blue rounded-full" />
                        Do’s e Don’ts
                     </h5>
                     <p className="text-secondary">Criação de exemplos claros do que fazer e do que evitar na comunicação. Essa etapa transformou conceitos estratégicos em orientações aplicáveis no dia a dia.</p>
                     <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                        <img src="/images/cases/brandbook/dosedonts.png" alt="Tom de Voz Dos e Don'ts" className="w-full h-auto block" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Step 5 */}
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center font-display font-black text-2xl shrink-0">5</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">Apresentação e validação</h4>
                     <p className="text-secondary text-lg leading-relaxed">
                        Após a construção do material, apresentei o brand book para os stakeholders. O retorno foi altamente positivo:
                     </p>
                  </div>
               </div>
               <div className="ml-20 flex flex-wrap gap-4">
                  {[
                    "Alta aderência ao posicionamento esperado",
                    "Aprovação da maior parte do material na primeira versão",
                    "Pequenos ajustes pontuais refinados posteriormente"
                  ].map((item, i) => (
                    <div key={i} className="px-6 py-3 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl text-secondary text-sm font-bold">
                       {item}
                    </div>
                  ))}
               </div>
               <p className="text-secondary leading-relaxed ml-20">
                  Essa validação confirmou que o trabalho estava alinhado tanto com a visão do negócio quanto com as necessidades de comunicação.
               </p>
            </div>
          </div>
        </section>

        {/* A Solução */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">A Solução</h2>
             <h3 className="text-2xl font-bold text-white leading-tight">Um sistema de linguagem estruturado e aplicável</h3>
             <p className="text-secondary leading-relaxed text-lg">
                O resultado foi a criação de um brand book completo, que organiza a comunicação da marca de ponta a ponta.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="space-y-6">
                <div className="p-8 bg-card-dark border border-white/5 rounded-3xl space-y-4">
                   <h5 className="font-bold text-brand-blue">O material inclui:</h5>
                   <ul className="space-y-2">
                      {[
                        "Definição clara de missão, visão e valores",
                        "Personalidade e arquétipos da marca",
                        "Diretrizes de tom de voz",
                        "Palavras-chave e território semântico",
                        "Exemplos práticos de uso (Do’s e Don’ts)"
                      ].map(item => (
                        <li key={item} className="text-sm font-bold flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <p className="text-secondary leading-relaxed italic">
                   Além disso, o guia foi pensado para ser utilizado por diferentes áreas, garantindo consistência mesmo em escala.
                </p>
             </div>
             <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-card-dark">
                <img src="/images/cases/brandbook/personalidade.png" alt="Personalidade da marca" className="w-full h-auto block" />
             </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight italic">Resultados</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <h4 className="text-2xl font-bold text-white">Impacto para o negócio</h4>
               <div className="space-y-4">
                  {[
                    "Comunicação mais consistente entre canais",
                    "Clareza na forma de apresentar serviços",
                    "Redução de ambiguidades e ruídos",
                    "Base estruturada para crescimento da marca",
                    "Maior alinhamento interno entre times"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                          <Target size={18} className="text-brand-blue" />
                       </div>
                       <p className="text-sm text-secondary font-medium">{item}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="p-10 bg-brand-blue border border-brand-blue/20 rounded-[40px] text-white space-y-6 glow-blue">
               <h4 className="text-xs uppercase font-bold tracking-widest opacity-60">Benefícios estratégicos</h4>
               <ul className="space-y-4">
                  {[
                    "Facilita a produção de conteúdo em escala",
                    "Reduz retrabalho na comunicação",
                    "Aumenta a confiança na marca",
                    "Melhora a experiência do cliente"
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
           <h4 className="text-3xl font-bold flex items-center gap-4 text-center md:text-left justify-center md:justify-start">
             <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <Award size={24} />
             </div>
             O que aprendi como UX Writer nesse projeto
           </h4>
           <div className="grid md:grid-cols-2 gap-12">
             <ul className="space-y-8">
               {[
                 { title: "Escuta ativa", desc: "Um bom brand book começa com escuta, não com escrita." },
                 { title: "Entender o negócio", desc: "Entender o negócio é tão importante quanto entender o usuário." }
               ].map((item, i) => (
                 <li key={i} className="space-y-2 text-center md:text-left">
                   <h5 className="font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                     <span className="text-brand-blue">0{i+1}.</span>
                     {item.title}
                   </h5>
                   <p className="text-sm text-secondary leading-relaxed pl-7">{item.desc}</p>
                 </li>
               ))}
             </ul>
             <ul className="space-y-8">
               {[
                 { title: "Estratégia vs Acabamento", desc: "Linguagem é estratégia, não acabamento." },
                 { title: "Utilidade prática", desc: "Exemplos práticos são o que tornam diretrizes utilizáveis." },
                 { title: "Consistência e Tempo", desc: "Consistência é o que constrói percepção de marca ao longo do tempo." }
               ].map((item, i) => (
                 <li key={i} className="space-y-2 text-center md:text-left">
                   <h5 className="font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                     <span className="text-brand-blue">0{i+3}.</span>
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
