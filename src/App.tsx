/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cases from "./components/Cases";
import Experiences from "./components/Experiences";
import Courses from "./components/Courses";
import Tools from "./components/Tools";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseMagalu from "./pages/CaseMagalu";
import CaseGuideline from "./pages/CaseGuideline";
import CaseHook from "./pages/CaseHook";
import CaseBrandbook from "./pages/CaseBrandbook";
import CaseQueroCasamento from "./pages/CaseQueroCasamento";
import CaseJornalista from "./pages/cases/CaseJornalista";
import CaseRedatorCopywriter from "./pages/cases/CaseRedatorCopywriter";
import CaseSocialMedia from "./pages/cases/CaseSocialMedia";
import CaseThinkLabs from "./pages/cases/CaseThinkLabs";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cases />
        <Experiences />
        <Courses />
        <Tools />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-blue selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case/favoritos-e-listas-magalu" element={<CaseMagalu />} />
          <Route path="/case/projeto-hook-magalu" element={<CaseHook />} />
          <Route path="/case/guideline-linguagem-ecommerce-magalu" element={<CaseGuideline />} />
          <Route path="/case/quero-de-casamento-magalu" element={<CaseQueroCasamento />} />
          <Route path="/case/brandbook-cargo-sapiens" element={<CaseBrandbook />} />
          <Route path="/cases/newsletter-think-labs" element={<CaseThinkLabs />} />
          <Route path="/cases/jornalista" element={<CaseJornalista />} />
          <Route path="/cases/redator-copywriter" element={<CaseRedatorCopywriter />} />
          <Route path="/cases/social-media" element={<CaseSocialMedia />} />
        </Routes>
      </div>
    </Router>
  );
}

