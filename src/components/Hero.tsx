import React, { useState, useEffect, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, ShieldCheck, Activity, Cpu, LucideIcon } from 'lucide-react';
import { Link } from 'react-scroll';

const useTypewriter = (words: string[], speed = 100, pause = 1) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : subIndex === words[index].length ? 1000 : Math.max(50, Math.random() * 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, pause]);

  useEffect(() => {
    setDisplayText(`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`);
  }, [subIndex, index, words, blink]);

  return displayText;
};

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
}

const TrustBadge = memo(({ icon: Icon, label }: TrustBadgeProps) => (
  <div className="flex items-center gap-2 text-slate-300 bg-white/5 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 shadow-lg shadow-cyan-500/5 text-xs font-medium hover:scale-105 transition-transform cursor-default select-none">
    <Icon className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
    <span className="whitespace-nowrap">{label}</span>
  </div>
));

TrustBadge.displayName = 'TrustBadge';

const AbstractNodeIllustration = memo(() => {
  return (
    <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center select-none overflow-hidden my-8 lg:my-0" role="img" aria-label="AI System Architecture Illustration">
      <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full transform -translate-y-10 scale-75 animate-pulse-slow pointer-events-none" aria-hidden="true" />
      
      <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 800 600" aria-hidden="true">
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-700"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-slate-700/30 rounded-full"
            style={{ margin: `${i * 15}%` }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          >
             <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-500 rounded-full blur-[2px] shadow-[0_0_10px_cyan]" />
          </motion.div>
        ))}

        <motion.div 
          className="absolute top-[10%] left-[5%] md:top-1/4 md:left-0 p-3 md:p-4 bg-space-800/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-cyan-900/20 z-20 animate-float"
        >
          <div className="flex items-center gap-3">
             <div className="p-2 bg-cyan-500/10 rounded-lg"><Bot className="w-5 h-5 text-cyan-400" /></div>
             <div>
               <div className="text-[10px] text-slate-400 uppercase tracking-wider">AI Core</div>
               <div className="text-xs md:text-sm font-bold text-slate-200">Processing...</div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[15%] right-[5%] md:bottom-1/3 md:right-0 p-3 md:p-4 bg-space-800/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-purple-900/20 z-20 animate-float-delayed"
        >
          <div className="flex items-center gap-3">
             <div className="p-2 bg-purple-500/10 rounded-lg"><Activity className="w-5 h-5 text-purple-400" /></div>
             <div>
               <div className="text-[10px] text-slate-400 uppercase tracking-wider">Efficiency</div>
               <div className="text-xs md:text-sm font-bold text-slate-200">+350% Boost</div>
             </div>
          </div>
        </motion.div>

        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-space-900 rounded-full border border-slate-700 flex items-center justify-center shadow-2xl shadow-cyan-500/20 z-10 group cursor-pointer hover:scale-110 transition-transform duration-500">
           <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full animate-pulse-slow" />
           <Cpu className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:rotate-90 transition-transform duration-700" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
});

AbstractNodeIllustration.displayName = 'AbstractNodeIllustration';

const Hero = () => {
  const typingText = useTypewriter(["Bekerja Otomatis", "Lebih Cepat", "Didukung AI"]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-12 flex items-center justify-center overflow-hidden bg-space-900">
      
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[100px] animate-aurora mix-blend-screen" />
          <div className="absolute bottom-[10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/5 rounded-full blur-[100px] animate-aurora mix-blend-screen" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          <div className="space-y-6 md:space-y-8 text-center lg:text-left mt-4 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Agung Saputra • AI System Architect
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Bangun Sistem Bisnis yang<br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 block h-[1.2em] md:h-[1.3em]" aria-hidden="true">
                {typingText}
              </span>
              <span className="sr-only">Bekerja Otomatis, Lebih Cepat, Lebih Rapi, Didukung AI, Tanpa Ribet</span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Automasi workflow bisnis Anda dengan AI agar tim bekerja lebih cepat, lebih rapi, dan lebih efisien — tanpa perlu pusing teknis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link 
                to="contact" 
                smooth={true} 
                duration={800} 
                offset={-100} 
                className="magnetic-btn group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
                aria-label="Diskusikan Workflow"
              >
                <span className="relative z-10">Diskusikan Workflow</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
              
              <Link 
                to="how-it-works" 
                smooth={true} 
                duration={800} 
                offset={-100} 
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all backdrop-blur-md flex items-center justify-center cursor-pointer"
              >
                Lihat Cara Kerjanya
              </Link>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-3">
              <TrustBadge icon={ShieldCheck} label="Operational Expert" />
              <TrustBadge icon={Zap} label="Fast Implementation" />
              <TrustBadge icon={Bot} label="Practical AI" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <AbstractNodeIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;