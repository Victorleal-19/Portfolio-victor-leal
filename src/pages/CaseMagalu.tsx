import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Info, TrendingUp, Users, Smartphone, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

export default function CaseMagalu() {
  const { language } = useLanguage();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    pt: {
      back: "Voltar para home",
      navBadges: ["UX Writing", "Magalu"],
      tags: ["UX Writing", "Content Design", "E-commerce", "SuperApp", "Conversão", "Magalu"],
      title: "Nova experiência: Favoritos e Listas no Magalu",
      heroDesc: "A funcionalidade de Favoritos do SuperApp do Magalu registrava milhões de interações mensais, mas o que deveria ser um motor de conversão estava se tornando um ponto de frustração.",
      overview: {
        createdLabel: "Created",
        createdValue: "10 de Abril, 2024",
        projectLabel: "Projeto",
        projectValue: "Case Real • Labs",
        skillsLabel: "Habilidades",
        skillsValue: "Arquitetura de Info, UX Writing",
        toolsLabel: "Ferramentas",
        toolsValue: "Figma, Miro, Maze"
      },
      summaryTitle: "Resumo",
      summaryText: "A funcionalidade de Favoritos do SuperApp do Magalu registrava milhões de interações mensais, mas o que deveria ser um motor de conversão estava se tornando um ponto de frustração. Usuários reclamavam de listas que sumiam, produtos indisponíveis sem qualquer comunicação e ausência de uma experiência que os ajudasse a, de fato, comprar. Meu trabalho foi articular a estratégia de conteúdo que orientou toda a reescrita da interface: da nomenclatura das funcionalidades até o microcopy de cada estado da jornada.",
      contextTitle: "Contexto",
      contextSubtitle: "Uma funcionalidade relevante, mas subutilizada",
      contextText: "A feature de Favoritos já existia no SuperApp. Qualquer usuário podia marcar um produto com um coração (♡) e acessar a lista pelo menu inferior. Simples, mas limitado. Com a evolução do comportamento de consumo e a movimentação dos concorrentes, surgiu a demanda estratégica de tornar a funcionalidade mais rica e, principalmente, mais útil para a jornada de compra.",
      dataBoxTitle: "A oportunidade que os dados revelavam",
      dataItems: [
        "+ de 3 Milhões de interações com a funcionalidade por mês",
        "A maioria dos usuários preferia o SuperApp ao site para compras",
        "66% dos usuários usam a sacola como lista de desejos",
      ],
      storeReview: `"Sumiu a minha lista de favoritos, vou desistir das compras." — `,
      storeReviewAuthor: "Avaliação real na Google Play Store",
      challengeTitle: "O Desafio",
      challengeSubtitle: "Mais do que reescrever textos: redefinir o modelo mental",
      challengeText: `O projeto não tinha apenas um problema de interface, tinha um problema de linguagem estrutural. O usuário usava "Favoritos" como ferramenta de planejamento de compras, mas o produto não estava instrumentalizado para isso. E havia uma segunda camada de confusão: a chegada das "Listas" tornava urgente a questão: qual a diferença entre "Favoritos" e uma "Lista"?`,
      insightTitle: "Insight de pesquisa",
      insightText: "A survey com centenas de respondentes revelou que uma grande porcentagem usava a sacola de compras como substituto da lista de desejos.",
      barriersTitle: "Barreiras identificadas",
      barriersText: "O problema não era falta de uso, era falta de proposta de valor clara para a funcionalidade.",
      tensionsTitle: "A tensão central de conteúdo",
      tensions: [
        "Como comunicar estados de produto (indisponível, preço caiu, estoque baixo) sem gerar ansiedade?",
        "Como o microcopy de feedback pode ser proativo, e não só reativo?",
        "Como criar uma experiência de listas para influenciadores que seja clara tanto para o afiliado quanto para o cliente final?"
      ],
      roleTitle: "Meu papel",
      roleSubtitle: "UX Writer integrado ao squad de produto desde o discovery",
      roleText: "Fiz parte do time de UX dentro do Squad Favoritos, Labs. Minha atuação não foi pontual, estive presente desde a fase de discovery, participando das discussões de pesquisa, benchmark e definição de escopo.",
      tableHeaders: ["Atribuição", "Ações & Deliverables"],
      tableRows: [
        { title: "Nomenclatura e estratégia de conteúdo", desc: "Recomendações de conteúdo pós-pesquisa" },
        { title: "Microcopy (estados, feedbacks, notificações)", desc: "Definição de tom para cada contexto" },
        { title: "Colaboração com UX Research", desc: "Revisão de copy para testes de usabilidade (Maze)" }
      ],
      processTitle: "Meu Processo de Trabalho",
      processSubtitle: "Como cheguei às decisões de conteúdo",
      steps: [
        {
          num: "01",
          title: "1 - Imersão nos dados e nas vozes dos usuários",
          desc: "Antes de escrever qualquer texto, mergulhei nos dados do Google Analytics (19,6M eventos), nas avaliações da Play Store e nos relatórios do canal Luiza Resolve. O objetivo era entender não só o que os usuários faziam, mas o que diziam, e o que sentiam quando a experiência falhava."
        },
        {
          num: "02",
          title: "2 - Benchmark de linguagem (não só de interface)",
          desc: "Analisamos como diversos players (concorrentes diretos ou não) nomeiam e comunicam suas funcionalidades de favoritos e listas. O foco foi no vocabulário: como cada plataforma chama a mesma ação? Quais termos convertem melhor?"
        },
        {
          num: "03",
          title: "3 - Participação ativa na pesquisa quantitativa (Fase 1)",
          desc: "Colaborei com o time de UX Research na elaboração do roteiro da survey. Meu papel foi assegurar que as perguntas sobre nomenclatura fossem formuladas de forma neutra, a fim de entendermos as principais dores do nosso público em relação à funcionalidade de favoritos do Magalu."
        },
        {
          num: "04",
          title: "4 - Estruturação, escrita e criação do protótipo navegável",
          desc: "Trabalhei diretamente no Figma ao lado do time de UX Design para garantir que o microcopy coubesse no espaço, respeitasse a hierarquia visual e fosse consistente entre telas."
        },
        {
          num: "05",
          title: "5 - Validação com teste de usabilidade",
          desc: "Os testes de usabilidade tiveram um papel fundamental na evolução da solução. De forma geral, os resultados validaram a maior parte das funcionalidades propostas no protótipo, indicando boa compreensão e aderência por parte dos usuários. Ao mesmo tempo, os testes também evidenciaram pontos de melhoria, especialmente em nomenclaturas, clareza de ações e entendimento de alguns fluxos, que foram ajustados antes da evolução do produto."
        }
      ],
      solutionTitle: "A Solução",
      solutionSubtitle: "Antes & Depois: as decisões de linguagem que mudaram a experiência",
      solutionDesc: "Cada reescrita foi orientada por dados, da pesquisa, do benchmark ou do teste de usabilidade. Não foi intuição: foi estratégia.",
      beforeBadge: "Antes",
      afterBadge: "Depois",
      resultsImpactLabel: "Resultados e impactos",
      imp1Title: "1 - Empty state — Favoritos vazio (primeiro acesso)",
      imp1Before: `A hierarquia da informação era confusa: o CTA aparecia antes da mensagem principal. O texto era genérico, pouco amigável e não incentivava nenhuma ação clara. A mensagem era puramente funcional: "Sua lista de favoritos está vazia."`,
      imp1After: "Uma nova abordagem que transforma o silêncio do estado vazio em uma oportunidade de descoberta. Implementamos sugestões baseadas no histórico do usuário e humanizamos o tom de voz da marca.",
      imp1Items: [
        "Corrige a hierarquia da informação",
        "Torna o tom mais próximo e alinhado à marca",
        "Transforma um estado vazio em ponto de descoberta",
        "Incentiva navegação e aumenta potencial de conversão"
      ],
      imp2Title: "2 - Empty state — nenhuma lista criada",
      imp2Before: "Mensagem genérica informando que não havia listas criadas. Sem contexto, sem direcionamento e sem qualquer conexão com valor real para o modelo mental do usuário.",
      imp2After: "Criação de uma tela que comunica e dá visibilidade a produtos do ecossistema, como Listas de Casamento e Chá de Bebê, gerando valor imediato.",
      imp2Impact: "Aumento na descoberta de serviços estratégicos do Magalu diretamente pela funcionalidade de Listas, integrando o ecossistema de forma fluida.",
      imp3Title: "3 - Feedback — adicionar/remover produto dos favoritos",
      imp3Before: "Nenhum feedback visual ou textual ao salvar ou remover produtos. O usuário realizava a ação sem confirmação clara, gerando insegurança no processo.",
      imp3After: "A comunicação passou a informar de forma clara e imediata quando um produto foi salvo ou removido dos favoritos, aumentando a confiança e a previsibilidade da experiência.",
      imp3Impact: "Maior percepção de controle e segurança por parte do usuário, confirmando que sua intenção foi compreendida pelo sistema imediatamente.",
      imp4Title: "4 - Produto indisponível na lista",
      imp4Before: "O produto era simplesmente removido da lista ou sumia sem qualquer explicação, contexto ou alternativa para o usuário, gerando abandono.",
      imp4After: "Exibição clara do estado de indisponibilidade com CTA para explorar produtos similares, mantendo o usuário no fluxo de compra.",
      imp4Impact: "Redução na taxa de abandono da lista e aumento na navegação por produtos recomendados quando o item original está fora de estoque.",
      resultsTitle: "Resultados",
      resultsSubtitle: "Impacto na experiência e na jornada",
      resultsLead: "A nova versão da funcionalidade trouxe melhorias claras na forma como o usuário interage com favoritos. A experiência deixou de ser apenas funcional e passou a ser orientada à jornada de compra.",
      cards: [
        { icon: <TrendingUp />, title: "Fluidez", desc: "Redução de fricções na navegação e estados vazios transformados em oportunidades." },
        { icon: <Award />, title: "Marca", desc: "Tom de voz aproximado e alinhado à proposta de valor do ecossistema Magalu." },
        { icon: <Smartphone />, title: "Conversão", desc: "Favoritos instrumentalizado como ferramenta de planejamento de compra real." }
      ],
      learningsTitle: "O que aprendi como UX Writer nesse projeto",
      learnings: [
        "Empty states não são estados finais — são pontos de ativação",
        "Linguagem define percepção de funcionalidade",
        "Transparência reduz frustração e aumenta confiança",
        "Micro-feedbacks têm grande impacto na experiência",
        "UX Writing não é só clareza — é condução de comportamento"
      ]
    },
    en: {
      back: "Back to home",
      navBadges: ["UX Writing", "Magalu"],
      tags: ["UX Writing", "Content Design", "E-commerce", "SuperApp", "Conversion", "Magalu"],
      title: "New Experience: Favorites & Wishlists at Magalu",
      heroDesc: "Magalu's SuperApp Favorites feature drove millions of monthly interactions, yet what should have been a major conversion engine was turning into user friction.",
      overview: {
        createdLabel: "Created",
        createdValue: "April 10, 2024",
        projectLabel: "Project",
        projectValue: "Real Case • Labs",
        skillsLabel: "Skills",
        skillsValue: "Information Architecture, UX Writing",
        toolsLabel: "Tools",
        toolsValue: "Figma, Miro, Maze"
      },
      summaryTitle: "Summary",
      summaryText: "Magalu's SuperApp Favorites feature recorded millions of monthly interactions, but what was intended as a conversion engine was becoming a source of frustration. Users complained about vanishing lists, unavailable items disappearing without notice, and the lack of an experience that actually helped them buy. My role was articulating the content strategy that guided the complete interface rewrite: from feature taxonomy down to microcopy across every touchpoint.",
      contextTitle: "Context",
      contextSubtitle: "A high-volume feature, yet underleveraged",
      contextText: "The Favorites feature had long existed in the SuperApp. Any shopper could bookmark an item with a heart icon (♡) and view their list via the bottom navigation. Simple, but restrictive. As consumer behavior shifted and competitors evolved, strategic demand arose to make the feature richer and instrumental to the purchase journey.",
      dataBoxTitle: "What the data revealed",
      dataItems: [
        "Over 3 Million interactions with the feature per month",
        "The majority of shoppers preferred the SuperApp over the desktop site",
        "66% of users were utilizing the shopping cart as a de facto wishlist"
      ],
      storeReview: `"My wishlist vanished, I'm abandoning my purchase." — `,
      storeReviewAuthor: "Real Google Play Store review",
      challengeTitle: "The Challenge",
      challengeSubtitle: "Beyond rewriting copy: redefining the mental model",
      challengeText: `This project was not merely an interface redesign; it tackled a structural language challenge. Shoppers used "Favorites" for purchase planning, yet the feature wasn't built for that job-to-be-done. Furthermore, introducing custom "Wishlists" raised an urgent taxonomy question: what is the explicit distinction between "Favorites" and a "List"?`,
      insightTitle: "Research Insight",
      insightText: "A survey with hundreds of shoppers revealed that a large percentage used the cart as a substitute for wishlists due to lack of trust.",
      barriersTitle: "Identified Friction",
      barriersText: "The issue was not lack of adoption, but the absence of a clear value proposition for the feature.",
      tensionsTitle: "Core Content Tensions",
      tensions: [
        "How do we communicate item states (out of stock, price drop, low inventory) without inducing anxiety?",
        "How can feedback microcopy become proactive rather than purely reactive?",
        "How do we craft an influencer list experience that is crystal clear for both creators and end customers?"
      ],
      roleTitle: "My Role",
      roleSubtitle: "UX Writer embedded within the product squad from discovery",
      roleText: "I worked as the dedicated UX Writer within the Favorites Squad at Magalulabs. My involvement was continuous from initial discovery through usability validation, participating in user research, competitor benchmarking, and scope definition.",
      tableHeaders: ["Responsibility", "Actions & Deliverables"],
      tableRows: [
        { title: "Taxonomy & Content Strategy", desc: "Post-research content frameworks and naming systems" },
        { title: "Microcopy (states, feedback, alerts)", desc: "Contextual tone of voice and error guidance" },
        { title: "UX Research Partnership", desc: "Copywriting and validation for Maze usability test scripts" }
      ],
      processTitle: "Working Process",
      processSubtitle: "How content decisions were derived",
      steps: [
        {
          num: "01",
          title: "1 - Immersing in quantitative data and user voices",
          desc: "Before writing a single line of copy, I analyzed Google Analytics events (19.6M interactions), Play Store reviews, and customer support tickets. The goal was understanding not just what users did, but what they said and felt when the flow failed."
        },
        {
          num: "02",
          title: "2 - Linguistic & content benchmarking",
          desc: "We audited how major global and regional e-commerce players name and structure their bookmarking features. We focused on vocabulary: how does each platform frame identical actions, and which terms convert best?"
        },
        {
          num: "03",
          title: "3 - Active quantitative survey design (Phase 1)",
          desc: "I collaborated with UX Research to write neutral survey questions, avoiding bias while pinpointing core user pain points and terminology preferences across Magalu's customer base."
        },
        {
          num: "04",
          title: "4 - Wireframing, copy crafting, and interactive prototyping",
          desc: "I worked directly in Figma alongside Product Designers to ensure microcopy fit screen constraints, adhered to visual hierarchy, and maintained strict cross-screen consistency."
        },
        {
          num: "05",
          title: "5 - Usability testing & rapid copy iteration",
          desc: "Unmoderated testing on Maze validated the majority of proposed features while uncovering subtle ambiguities in button labels and list management, which were refined prior to engineering handoff."
        }
      ],
      solutionTitle: "The Solution",
      solutionSubtitle: "Before & After: Strategic language shifts that elevated the experience",
      solutionDesc: "Every rewrite was backed by quantitative analytics, qualitative research, or usability data. Not intuition: pure strategy.",
      beforeBadge: "Before",
      afterBadge: "After",
      resultsImpactLabel: "Impact & Key Takeaways",
      imp1Title: "1 - Empty state — First-time empty favorites",
      imp1Before: `Confusing information hierarchy where the CTA preceded the primary message. Generic, cold copy that offered no actionable next step: "Your favorites list is empty."`,
      imp1After: "Transformed passive empty space into a discovery hub, offering personalized recommendations based on browsing history while infusing the brand's warm, helpful voice.",
      imp1Items: [
        "Restores natural information hierarchy",
        "Aligns tone of voice with Magalu's helpful identity",
        "Converts dead-ends into proactive discovery touchpoints",
        "Encourages catalog exploration and boosts conversion potential"
      ],
      imp2Title: "2 - Empty state — No custom lists created",
      imp2Before: "Cold message stating no lists existed. Zero contextual guidance or link to user needs.",
      imp2After: "Engineered an onboarding screen that showcases ecosystem services (Wedding & Baby Registries), establishing immediate utility.",
      imp2Impact: "Increased organic discovery of high-margin registry services directly from the list management flow.",
      imp3Title: "3 - Micro-feedback — Favoriting and unfavoriting items",
      imp3Before: "No visual or textual confirmation upon saving or removing an item, leaving users uncertain if the action succeeded.",
      imp3After: "Clear, immediate toast notifications confirming the save/remove action, boosting predictability and confidence.",
      imp3Impact: "Strengthened perceived system responsiveness and user control across high-frequency interactions.",
      imp4Title: "4 - Out-of-stock items within saved lists",
      imp4Before: "Products disappeared silently or remained unpurchasable without context, leading to list abandonment.",
      imp4After: "Explicit out-of-stock badges paired with proactive 'View similar items' CTAs to keep shoppers in the purchase loop.",
      imp4Impact: "Reduced list churn and maintained user session momentum toward alternative catalog offerings.",
      resultsTitle: "Results",
      resultsSubtitle: "Impact on user journey and conversion",
      resultsLead: "The redesigned experience elevated Favorites from a basic bookmarking utility into a robust purchase-planning companion.",
      cards: [
        { icon: <TrendingUp />, title: "Frictionless Flow", desc: "Navigational friction removed and empty states transformed into actionable opportunities." },
        { icon: <Award />, title: "Brand Resonance", desc: "Warm, conversational microcopy aligned with Magalu's approachable identity." },
        { icon: <Smartphone />, title: "Conversion Engine", desc: "Wishlists repositioned as an active purchasing and planning tool." }
      ],
      learningsTitle: "Key UX Writing Takeaways from this Project",
      learnings: [
        "Empty states are not endpoints — they are activation launches",
        "Taxonomy dictates user perception and feature adoption",
        "Radical transparency diffuses frustration and builds brand trust",
        "Micro-feedbacks have macro impacts on user confidence",
        "Content Design isn't just about clarity — it drives behavioral outcomes"
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white pb-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">{t.back}</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              {t.navBadges.map((b) => (
                <span key={b} className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                  {b}
                </span>
              ))}
            </div>
            <LanguageSelector />
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
             {t.tags.map(tag => (
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
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary leading-relaxed font-light"
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.createdLabel}</span>
              <p className="text-secondary text-sm">{t.overview.createdValue}</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.projectLabel}</span>
              <p className="text-secondary text-sm">{t.overview.projectValue}</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.skillsLabel}</span>
              <p className="text-secondary text-sm">{t.overview.skillsValue}</p>
           </div>
           <div className="space-y-1">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block">{t.overview.toolsLabel}</span>
              <p className="text-secondary text-sm">{t.overview.toolsValue}</p>
           </div>
        </div>
      </section>

      {/* Body Content */}
      <main className="px-6 space-y-32">
        
        {/* Resumo / Summary */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.summaryTitle}</h2>
          <p className="text-secondary leading-relaxed text-lg">
            {t.summaryText}
          </p>
        </section>

        {/* Contexto / Context */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 text-white">{t.contextTitle}</h2>
          <h3 className="text-xl font-bold text-brand-blue">{t.contextSubtitle}</h3>
          <p className="text-secondary leading-relaxed text-lg">
            {t.contextText}
          </p>
          
          <div className="p-10 bg-card-dark border border-white/5 rounded-[40px] mt-12 space-y-6">
            <h4 className="text-xl font-bold">{t.dataBoxTitle}</h4>
            <ul className="space-y-4">
              {t.dataItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-secondary">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-4 items-start italic text-sm text-secondary">
              <span className="text-green-500 font-bold">"</span>
              <p>{t.storeReview}<span className="text-white font-semibold">{t.storeReviewAuthor}</span></p>
            </div>
          </div>
        </section>

        {/* O Desafio / The Challenge */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.challengeTitle}</h2>
          <h3 className="text-xl font-bold text-brand-blue uppercase tracking-widest text-sm">{t.challengeSubtitle}</h3>
          <p className="text-secondary leading-relaxed text-lg">
            {t.challengeText}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 glass rounded-3xl space-y-4">
               <Info className="text-brand-blue" />
               <h4 className="font-bold">{t.insightTitle}</h4>
               <p className="text-sm text-secondary">{t.insightText}</p>
            </div>
            <div className="p-8 glass rounded-3xl space-y-4">
               <Users className="text-brand-blue" />
               <h4 className="font-bold">{t.barriersTitle}</h4>
               <p className="text-sm text-secondary">{t.barriersText}</p>
            </div>
          </div>

          <div className="pt-12 space-y-6">
            <h4 className="text-xl font-bold">{t.tensionsTitle}</h4>
            <ul className="space-y-4 text-secondary">
              {t.tensions.map((tension, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-brand-blue flex-shrink-0">•</span>
                  <p>{tension}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Meu Papel / My Role */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.roleTitle}</h2>
            <h3 className="text-xl font-bold">{t.roleSubtitle}</h3>
            <p className="text-secondary text-lg leading-relaxed">
              {t.roleText}
            </p>
          </div>

          {/* Table Component */}
          <div className="bg-card-dark border border-white/5 rounded-[32px] overflow-hidden shadow-xl">
             <div className="grid grid-cols-1 md:grid-cols-2 bg-white/5 py-4 px-8 border-b border-white/10 uppercase text-[10px] font-bold tracking-widest text-white/40">
                <div>{t.tableHeaders[0]}</div>
                <div className="hidden md:block">{t.tableHeaders[1]}</div>
             </div>
             <div className="divide-y divide-white/5">
                {t.tableRows.map((row, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 py-6 px-8 items-center gap-4 hover:bg-white/[0.02] transition-colors">
                    <div className="font-bold text-white">{row.title}</div>
                    <div className="text-secondary text-sm">{row.desc}</div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Meu Processo de Trabalho / Process */}
        <section className="max-w-3xl mx-auto space-y-20">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.processTitle}</h2>
             <h3 className="text-xl font-bold text-brand-blue">{t.processSubtitle}</h3>
          </div>

          <div className="space-y-24">
             {t.steps.map((step, idx) => (
               <div key={step.num} className="space-y-8 relative">
                  <div className="absolute -left-12 top-0 text-7xl font-display font-black text-white/[0.03] -z-10 select-none">{step.num}</div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold">{step.title}</h4>
                     <p className="text-secondary text-lg">{step.desc}</p>
                  </div>
                  {idx === 1 && (
                    <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-xl mt-8">
                      <img
                        src="/images/cases/favoritos/bench-favoritos.jpg"
                        alt="Benchmark de favoritos"
                        className="w-full h-auto block"
                      />
                    </div>
                  )}
               </div>
             ))}
          </div>
        </section>

        {/* A Solução / Solution */}
        <section className="max-w-5xl mx-auto space-y-20">
          <div className="max-w-3xl mx-auto space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2 uppercase tracking-tight">{t.solutionTitle}</h2>
             <h3 className="text-xl font-bold text-brand-blue">{t.solutionSubtitle}</h3>
             <p className="text-secondary text-lg">{t.solutionDesc}</p>
          </div>

          <div className="space-y-32 pt-12">
             {/* Implementation 1 */}
             <div className="space-y-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-bold">{t.imp1Title}</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">{t.beforeBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp1Before}
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">{t.afterBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp1After}
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
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">{t.resultsImpactLabel}</h5>
                      <ul className="grid sm:grid-cols-2 gap-4">
                         {t.imp1Items.map(item => (
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
                   <h4 className="text-2xl font-bold">{t.imp2Title}</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">{t.beforeBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp2Before}
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">{t.afterBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp2After}
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
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">{t.resultsImpactLabel}</h5>
                      <p className="text-secondary text-sm leading-relaxed">
                         {t.imp2Impact}
                      </p>
                   </div>
                </div>
             </div>

             {/* Implementation 3 */}
             <div className="space-y-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-bold">{t.imp3Title}</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">{t.beforeBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp3Before}
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">{t.afterBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp3After}
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
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">{t.resultsImpactLabel}</h5>
                      <p className="text-secondary text-sm leading-relaxed">
                         {t.imp3Impact}
                      </p>
                   </div>
                </div>
             </div>

             {/* Implementation 4 */}
             <div className="space-y-12">
                <div className="space-y-8">
                   <h4 className="text-2xl font-bold">{t.imp4Title}</h4>
                   
                   <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">{t.beforeBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp4Before}
                         </p>
                      </div>
                      <div className="space-y-4">
                         <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">{t.afterBadge}</span>
                         <p className="text-secondary leading-relaxed">
                            {t.imp4After}
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
                      <h5 className="font-bold text-brand-blue text-sm uppercase tracking-widest">{t.resultsImpactLabel}</h5>
                      <p className="text-secondary text-sm leading-relaxed">
                         {t.imp4Impact}
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Resultados / Results */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
             <h2 className="text-3xl font-bold border-l-4 border-brand-blue pl-6 py-2">{t.resultsTitle}</h2>
             <h3 className="text-xl font-bold">{t.resultsSubtitle}</h3>
             <p className="text-secondary text-lg leading-relaxed">{t.resultsLead}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
             {t.cards.map((r, i) => (
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
               {t.learningsTitle}
             </h4>
             <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {t.learnings.map((item, i) => (
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
