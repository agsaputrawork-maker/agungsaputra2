import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle } from 'lucide-react';

export const Problem = () => {
  const pains = [
    "Pekerjaan berulang menyita waktu setiap hari",
    "Data tersebar di chat & spreadsheet yang berantakan",
    "Follow-up, reporting, atau approval sering terlambat",
    "Tim sering mengulang kesalahan yang sama",
    "Anda harus terus turun tangan untuk hal-hal operasional kecil"
  ];

  return (
    <section className="py-24 bg-space-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-red-400 bg-red-500/10 px-3 py-1 rounded-full text-sm font-medium border border-red-500/20"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Realita Bisnis</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
              Pernah merasa tim sibuk, tapi <span className="text-red-400">hasilnya tetap lambat?</span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Masalahnya sering bukan pada tim Anda, tetapi pada sistem kerja yang belum tertata. Tanpa sistem yang jelas, bisnis hanya akan berputar di tempat.
            </p>

            <div className="space-y-4">
               {pains.map((pain, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex items-start gap-4 p-4 rounded-xl bg-space-800 border border-white/5 hover:border-red-500/30 transition-all group"
                 >
                   <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <X className="w-3.5 h-3.5 text-red-400" />
                   </div>
                   <span className="text-slate-300 group-hover:text-white transition-colors">{pain}</span>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
             {/* Abstract Chaos Visual */}
             <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full" />
             
             <div className="relative w-full max-w-md space-y-4">
                <div className="p-6 bg-space-800/80 backdrop-blur-md rounded-2xl border border-red-500/20 shadow-2xl shadow-red-900/20 rotate-3 transform hover:rotate-0 transition-transform duration-500">
                   <div className="flex items-center justify-between mb-4 border-b border-red-500/10 pb-4">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500" />
                         <span className="text-red-200 font-bold">Chaos Mode</span>
                      </div>
                      <span className="text-xs text-red-400 font-mono">WARNING</span>
                   </div>
                   <div className="space-y-3">
                      <div className="h-2 w-3/4 bg-red-500/10 rounded-full" />
                      <div className="h-2 w-1/2 bg-red-500/10 rounded-full" />
                      <div className="h-2 w-5/6 bg-red-500/10 rounded-full" />
                   </div>
                   <div className="mt-6 p-4 bg-red-950/30 rounded-xl border border-red-500/10 text-red-200 text-sm">
                      ⚠ Operational bottleneck detected. Efficiency dropped by 45%.
                   </div>
                </div>

                <div className="absolute -bottom-10 -right-10 p-6 bg-space-900 rounded-2xl border border-white/10 shadow-xl -rotate-6 transform hover:rotate-0 transition-transform duration-500 z-[-1]">
                   <div className="space-y-2 opacity-50">
                      <div className="w-48 h-4 bg-slate-700 rounded" />
                      <div className="w-32 h-4 bg-slate-700 rounded" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Solution = () => {
  return (
    <section className="py-24 bg-space-800 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">Solusi Practical</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading">
            Bagaimana jika ada cara yang <br/><span className="text-gradient-cyan">lebih rapi & otomatis?</span>
          </h2>
          <p className="text-lg text-slate-400">
            Anda tidak butuh sistem yang terlihat canggih tapi jarang dipakai. Anda butuh workflow yang benar-benar membantu bisnis berjalan lebih rapi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Before Card */}
          <div className="p-8 rounded-3xl bg-space-900/50 border border-white/5 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 group">
            <div className="text-xs font-bold text-slate-500 uppercase mb-6 tracking-widest group-hover:text-red-400">Cara Lama</div>
            <h3 className="text-2xl font-bold text-slate-300 mb-6 group-hover:text-white">Manual & Berantakan</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 group-hover:text-slate-400">
                <X className="w-5 h-5 text-red-500/50 group-hover:text-red-500" /> Proses manual berulang
              </li>
              <li className="flex items-center gap-3 text-slate-500 group-hover:text-slate-400">
                <X className="w-5 h-5 text-red-500/50 group-hover:text-red-500" /> Banyak bottleneck
              </li>
              <li className="flex items-center gap-3 text-slate-500 group-hover:text-slate-400">
                <X className="w-5 h-5 text-red-500/50 group-hover:text-red-500" /> Owner pusing cek operasional
              </li>
            </ul>
          </div>

          {/* After Card */}
          <motion.div 
             whileHover={{ scale: 1.02 }}
             className="relative p-8 rounded-3xl bg-space-900 border border-cyan-500/30 shadow-2xl shadow-cyan-900/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
            
            <div className="absolute top-0 right-0 bg-cyan-500 text-space-900 px-4 py-1.5 rounded-bl-xl font-bold text-xs uppercase tracking-wide">
              Recommended
            </div>
            
            <div className="relative z-10">
              <div className="text-xs font-bold text-cyan-400 uppercase mb-6 tracking-widest">Pendekatan Agung Saputra</div>
              <h3 className="text-2xl font-bold text-white mb-6">Sistematis & AI-Assisted</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="p-1 rounded-full bg-cyan-500/20"><Check className="w-3.5 h-3.5 text-cyan-400" /></div>
                  <span>Workflow jelas & terdokumentasi</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="p-1 rounded-full bg-cyan-500/20"><Check className="w-3.5 h-3.5 text-cyan-400" /></div>
                  <span>Automasi mengurangi beban admin</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="p-1 rounded-full bg-cyan-500/20"><Check className="w-3.5 h-3.5 text-cyan-400" /></div>
                  <span>Owner fokus ke strategi growth</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                 <div className="text-sm text-slate-400">Efficiency Score</div>
                 <div className="text-xl font-bold text-cyan-400 font-mono">98/100</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
