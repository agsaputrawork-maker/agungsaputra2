import React, { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const navLinks = [
    { name: 'Tentang', to: 'about' },
    { name: 'Layanan', to: 'services' },
    { name: 'Cara Kerja', to: 'how-it-works' },
    { name: 'FAQ', to: 'faq' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5 md:py-6'
        }`}
      >
        <div className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? 'opacity-100 glass-nav shadow-lg shadow-black/5' : 'opacity-0'}`} />
        
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-10">
          <a href="#" className="group relative z-50 flex flex-col" onClick={scrollToTop} aria-label="Agung Saputra - AI System Builder">
            <div className="text-xl font-extrabold text-white tracking-tight font-heading flex items-center gap-1">
              Agung <span className="text-cyan-400">Saputra</span>
            </div>
            <div className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase group-hover:text-cyan-300 transition-colors">
              AI System Builder
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center bg-space-900/40 p-1 rounded-full border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => (
                <ScrollLink 
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="cursor-pointer px-5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                  activeClass="text-white bg-white/5 rounded-full shadow-inner shadow-white/5"
                >
                  {link.name}
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </ScrollLink>
              ))}
            </div>
            
            <ScrollLink 
              to="contact" 
              smooth={true}
              offset={-50}
              className="group relative px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-space-950 text-sm font-bold rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] cursor-pointer flex items-center gap-2"
            >
              <span className="relative z-10">Konsultasi</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
          </div>

          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white bg-space-800/80 backdrop-blur-md rounded-xl border border-white/10 relative z-50 active:scale-95 transition-all"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-space-950/95 backdrop-blur-xl z-40 md:hidden flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <ScrollLink 
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  onClick={closeMenu}
                  className="group flex items-center justify-between text-2xl font-bold text-slate-300 hover:text-white border-b border-white/5 pb-4 cursor-pointer"
                >
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-cyan-400" />
                </ScrollLink>
              ))}
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <ScrollLink 
                  to="contact"
                  smooth={true}
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-cyan-500 text-space-900 font-bold rounded-xl text-lg active:scale-95 transition-transform"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-5 h-5" />
                </ScrollLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;