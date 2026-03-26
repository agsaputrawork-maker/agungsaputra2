import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Problem, Solution } from './components/ProblemSolution';
import { Benefits, Services } from './components/ValueProp';
import { HowItWorks, Proof } from './components/TrustProcess';
import { Pricing, Guarantee } from './components/PricingGuarantee';
import { Objections } from './components/ObjectionsFAQ';
import { FinalCTA, Footer } from './components/FooterCTA';
import ChatWidget from './components/ChatWidget';

const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/privacy'));
const Terms = lazy(() => import('./pages/terms'));
const Agent = lazy(() => import('./pages/agent'));

const LandingPage = () => (
  <>
    <Helmet>
      <title>Agung Saputra | AI System Architect & Workflow Automation</title>
      <meta name="description" content="Optimalkan operasional bisnis dengan sistem kerja otomatis. Agung Saputra membantu merapikan workflow, mengurangi kerja manual, dan integrasi AI praktis." />
      <link rel="canonical" href="https://agungsaputra.com/" />
    </Helmet>

    <ScrollProgress />
    <Navbar />
    
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] animate-aurora rounded-full mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] animate-aurora animation-delay-2000 rounded-full mix-blend-screen" />
    </div>
    
    <main className="relative">
      <div id="home"><Hero /></div>
      <div id="about">
        <Problem />
        <Solution />
      </div>
      <div id="services">
        <Benefits />
        <Services />
      </div>
      <div id="how-it-works">
        <HowItWorks />
        <Proof />
      </div>
      <div id="pricing">
        <Pricing />
        <Guarantee />
      </div>
      <div id="faq"><Objections /></div>
      <div id="contact"><FinalCTA /></div>
    </main>

    <Footer />
    <ChatWidget />
  </>
);

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Kebijakan Privasi | Agung Saputra</title>
      <meta name="description" content="Kebijakan privasi layanan Agung Saputra. Transparansi pengelolaan data, keamanan informasi, dan penggunaan kredensial dalam projek automasi." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://agungsaputra.com/privacy" />
    </Helmet>
    <ScrollProgress />
    <Privacy />
    <Footer />
    <ChatWidget />
  </>
);

const TermsPage = () => (
  <>
    <Helmet>
      <title>Syarat & Ketentuan | Agung Saputra</title>
      <meta name="description" content="Syarat dan ketentuan layanan konsultasi AI dan automasi workflow Agung Saputra. Hak, kewajiban, pembayaran, dan batasan tanggung jawab." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://agungsaputra.com/terms" />
    </Helmet>
    <ScrollProgress />
    <Terms />
    <Footer />
    <ChatWidget />
  </>
);

const AgentPage = () => (
  <>
    <Helmet>
      <title>Agung AI Agent | Virtual Assistant</title>
      <meta name="description" content="Chat dengan AI Agent untuk konsultasi jadwal dan info layanan secara instan." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://agungsaputra.com/agent" />
    </Helmet>
    <Agent />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <div className="font-sans antialiased text-slate-300 bg-space-900 selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
        <Router>
          <Suspense fallback={<div className="min-h-screen bg-space-900" />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/agent" element={<AgentPage />} />
              <Route path="*" element={
                <>
                  <Helmet>
                    <title>404 Page Not Found | Agung Saputra</title>
                    <meta name="robots" content="noindex" />
                  </Helmet>
                  <NotFound />
                </>
              } />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
