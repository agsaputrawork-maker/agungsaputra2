import React, { memo } from 'react';
import { Mail, MapPin, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/6281234567890",
  linkedin: "https://linkedin.com/in/agungsaputra",
  instagram: "https://instagram.com/agungsaputra",
  email: "mailto:hello@agungsaputra.com",
  map: "https://goo.gl/maps/placeholder"
};

const LinkedInIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const FinalCTA = memo(() => {
  return (
    <section className="py-24 md:py-32 bg-space-950 relative overflow-hidden flex items-center justify-center" aria-labelledby="cta-heading">
      
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
        <div className="relative bg-space-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden shadow-2xl shadow-black/50">
           
           <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <Sparkles className="w-4 h-4" />
              <span>Transformasi Bisnis Anda</span>
           </div>

           <h2 id="cta-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white font-heading tracking-tight leading-[1.1]">
            Siap Merapikan <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Sistem Kerja Anda?
            </span>
           </h2>

           <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
             Hilangkan chaos operasional. Bangun workflow yang berjalan otomatis, hemat biaya, dan siap untuk scale-up.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                          <Link 
               to="/agent"
               className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-space-950 font-bold text-lg md:text-xl rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all flex items-center gap-3 overflow-hidden w-full sm:w-auto justify-center scale-100 active:scale-95 duration-200 cursor-pointer"
               aria-label="Diskusikan workflow dengan AI Agent"
             >
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <MessageCircle className="w-5 h-5 relative z-10" />
               <span className="relative z-10">Diskusikan Workflow</span>
               <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
             </Link>
             
             <div className="flex items-center gap-2 text-slate-400 font-medium text-sm md:text-base bg-space-950/50 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Tanpa komitmen rumit</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = 'FinalCTA';

export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <footer className="bg-space-950 text-slate-400 py-16 md:py-20 border-t border-white/5 relative z-10 text-sm md:text-base">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl font-bold text-white font-heading">Agung <span className="text-cyan-400">Saputra</span></h3>
            <p className="leading-relaxed text-slate-500 max-w-sm">
              AI System Architect. Membantu bisnis membangun workflow yang rapi, efisien, dan siap scale-up tanpa pusing teknis.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-space-900 hover:bg-space-800 hover:text-cyan-400 transition-all border border-white/5 group shadow-lg" aria-label="LinkedIn Agung Saputra">
                <LinkedInIcon />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-space-900 hover:bg-space-800 hover:text-cyan-400 transition-all border border-white/5 group shadow-lg" aria-label="Instagram Agung Saputra">
                <InstagramIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Menu</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'How It Works', 'FAQ'].map((item) => {
                const target = item.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={item}>
                    {isHome ? (
                      <ScrollLink 
                        to={target}
                        smooth={true} 
                        className="hover:text-cyan-400 transition-colors cursor-pointer inline-block"
                      >
                        {item}
                      </ScrollLink>
                    ) : (
                      <RouterLink 
                        to="/"
                        className="hover:text-cyan-400 transition-colors cursor-pointer inline-block"
                        onClick={scrollToTop}
                      >
                        {item}
                      </RouterLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Layanan</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="hover:text-slate-300 transition-colors">Workflow Automation</li>
              <li className="hover:text-slate-300 transition-colors">Business Process Setup</li>
              <li className="hover:text-slate-300 transition-colors">Admin System Improvement</li>
              <li className="hover:text-slate-300 transition-colors">Operational Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Hubungi</h4>
            <ul className="space-y-6 text-sm md:text-base">
              <li className="flex items-start gap-4 text-slate-500 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 shrink-0 text-cyan-500 mt-1" aria-hidden="true" />
                <a href={SOCIAL_LINKS.map} target="_blank" rel="noopener noreferrer" className="leading-relaxed">
                  Kedoya Utara,<br/>Jakarta Barat
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-500 hover:text-white transition-colors">
                <Mail className="w-5 h-5 shrink-0 text-cyan-500" aria-hidden="true" />
                <a href={SOCIAL_LINKS.email} className="font-medium">{SOCIAL_LINKS.email.replace("mailto:", "")}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-center md:text-left gap-6 md:gap-0">
          <p className="text-slate-600">
            &copy; {currentYear} Agung Saputra. All rights reserved.
          </p>
          <div className="flex gap-8 md:gap-12">
            <RouterLink 
              to="/privacy" 
              className="text-slate-600 hover:text-white transition-colors cursor-pointer"
              onClick={scrollToTop}
            >
              Privacy Policy
            </RouterLink>
            <RouterLink 
              to="/terms" 
              className="text-slate-600 hover:text-white transition-colors cursor-pointer"
              onClick={scrollToTop}
            >
              Terms of Service
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';