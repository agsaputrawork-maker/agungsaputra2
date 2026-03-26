import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, RefreshCw, Cpu, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const xSpring = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const ySpring = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  useEffect(() => {
    xSpring.set(mousePosition.x * 20); // Sensitivity
    ySpring.set(mousePosition.y * 20);
  }, [mousePosition, xSpring, ySpring]);


  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-space-950 flex flex-col items-center justify-center relative overflow-hidden font-sans text-slate-300 selection:bg-cyan-500/30 selection:text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" /> {/* Optional grid pattern */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-4xl flex flex-col items-center">
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 flex items-center justify-center">
           {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 border ${i === 2 ? 'border-dashed border-red-500/20' : 'border-slate-700/30'} rounded-full`}
              style={{ margin: `${i * 12}%` }}
              animate={{ 
                rotate: i % 2 === 0 ? 360 : -360,
                scale: i === 2 ? [1, 1.05, 0.95, 1] : 1
              }}
              transition={{ 
                rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 5 } // Random glitch
              }}
            />
           ))}

           <motion.div 
             className="relative w-24 h-24 bg-space-900 rounded-2xl border border-red-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)] z-10"
             animate={{ 
                boxShadow: ["0 0 30px rgba(239,68,68,0.2)", "0 0 50px rgba(239,68,68,0.4)", "0 0 30px rgba(239,68,68,0.2)"]
             }}
             transition={{ duration: 2, repeat: Infinity }}
           >
              <AlertTriangle className="w-10 h-10 text-red-400" />
              
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-red-400 rounded-full"
                  animate={{
                    x: [0, (Math.random() - 0.5) * 100],
                    y: [0, (Math.random() - 0.5) * 100],
                    opacity: [1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
           </motion.div>

           <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
             <motion.path 
               d="M 160 160 L 40 40" 
               stroke="rgba(239,68,68,0.3)" 
               strokeWidth="2" 
               strokeDasharray="5,5"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
             />
             <motion.path 
               d="M 160 160 L 280 200" 
               stroke="rgba(148,163,184,0.2)" 
               strokeWidth="2" 
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 0.6 }} // Incomplete path
               transition={{ duration: 1.5, delay: 0.8 }}
             />
           </svg>
        </div>

        <div className="text-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            SYSTEM_ERROR: 404_NOT_FOUND
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-heading tracking-tight relative inline-block">
             <span className="relative z-10">Lost in Space?</span>
             <motion.span 
               className="absolute top-0 left-0 -ml-[2px] text-red-500/50 mix-blend-screen z-0 overflow-hidden"
               animate={{ x: [-2, 2, -1, 0] }}
               transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
               aria-hidden="true"
             >
               Lost in Space?
             </motion.span>
             <motion.span 
               className="absolute top-0 left-0 ml-[2px] text-cyan-500/50 mix-blend-screen z-0 overflow-hidden"
               animate={{ x: [2, -2, 1, 0] }}
               transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 2 }}
               aria-hidden="true"
             >
               Lost in Space?
             </motion.span>
          </h1>

          <p className="text-slate-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Halaman yang Anda cari telah dipindahkan, dihapus, atau mungkin tidak pernah ada dalam sistem kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center gap-2 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Home className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Kembali ke Home</span>
            </Link>

            <button 
               onClick={() => window.location.reload()}
               className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 font-semibold rounded-xl transition-all flex items-center gap-2 hover:text-white"
            >
               <RefreshCw className="w-4 h-4" />
               <span>Reload System</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 text-xs text-slate-600 font-mono">
           ERROR_CODE: 0x404_PAGE_MISSING
        </div>

      </div>
    </div>
  );
};

export default NotFound;