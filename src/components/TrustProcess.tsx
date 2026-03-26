import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Search, GitBranch, Lightbulb, Cog, RefreshCw, Briefcase, Award, Users, LucideIcon } from 'lucide-react';
import BentoCard from './ui/BentoCard';

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const ProcessStep = memo(({ step, index }: { step: Step, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
    className="relative flex md:flex-col items-center md:text-center group z-10 w-full md:w-auto"
  >
    <div className="flex-shrink-0 mr-6 md:mr-0">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-space-800 border border-white/10 flex items-center justify-center md:mb-6 shadow-lg shadow-cyan-900/10 group-hover:scale-105 group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/30 transition-all duration-300 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-500 group-hover:text-cyan-400 transition-colors relative z-10" aria-hidden="true" />
        
        <div className="absolute -top-3 -right-3 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-space-900 border border-white/10 text-slate-400 flex items-center justify-center font-bold text-xs md:text-sm shadow-md group-hover:bg-cyan-500 group-hover:text-space-900 group-hover:border-cyan-400 transition-all">
          {index + 1}
        </div>
      </div>
    </div>
    
    <div className="flex-1 md:flex-none text-left md:text-center">
      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-3 text-slate-200 group-hover:text-cyan-300 transition-colors font-heading">{step.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed md:px-2 max-w-full md:max-w-[220px] group-hover:text-slate-400 transition-colors">{step.desc}</p>
    </div>

    {index !== 4 && (
      <div className="absolute left-8 top-16 bottom-[-24px] w-px bg-slate-800 md:hidden -z-10">
        <motion.div 
          initial={{ height: "0%" }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full bg-gradient-to-b from-cyan-500/30 to-transparent"
        />
      </div>
    )}
  </motion.div>
));

ProcessStep.displayName = 'ProcessStep';

export const HowItWorks = memo(() => {
  const steps: Step[] = [
    {
      icon: Search,
      title: "Identifikasi",
      desc: "Kita audit proses mana yang paling banyak menyita waktu & biaya."
    },
    {
      icon: GitBranch,
      title: "Mapping",
      desc: "Alur kerja dipetakan agar bottleneck terlihat jelas."
    },
    {
      icon: Lightbulb,
      title: "Solusi",
      desc: "Sistem disusun sesuai kebutuhan bisnis, bukan sekadar tren."
    },
    {
      icon: Cog,
      title: "Implementasi",
      desc: "Workflow dibangun & diotomasi agar mudah digunakan tim."
    },
    {
      icon: RefreshCw,
      title: "Evaluasi",
      desc: "Review berkala agar sistem tetap relevan & efisien."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-space-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Metodologi
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading"
          >
            Proses Kerja <span className="text-gradient-cyan">Sederhana</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            Semudah itu. Fokusnya bukan membuat proses jadi rumit, tetapi membuat kerja Anda jadi lebih ringan.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-px bg-slate-800 -z-10">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            />
            <motion.div 
               className="absolute top-1/2 -translate-y-1/2 w-20 h-1 bg-cyan-400/50 blur-md rounded-full"
               animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <ProcessStep key={idx} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = 'HowItWorks';

export const Proof = memo(() => {
  return (
    <section className="py-20 md:py-24 bg-space-950 border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading"
           >
             Mengapa Pendekatan Ini <span className="text-gradient-cyan">Berbeda?</span>
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 text-lg leading-relaxed px-4"
           >
             Dibangun dari pengalaman nyata di lapangan, bukan teori semata. Kami paham bedanya rencana di atas kertas vs eksekusi di lapangan.
           </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
           <BentoCard className="bg-space-900/40 min-h-[240px]" glowColor="cyan">
              <div className="w-12 h-12 rounded-xl bg-space-800 border border-white/10 flex items-center justify-center mb-5 text-cyan-400 shadow-inner shadow-black/30">
                <Briefcase className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Operational Expertise</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Berlatar belakang HR Operation & Managerial Level (ex- Kopkarsyah Bank BSI Group, Sampurna). Memahami kompleksitas admin & workflow dari dalam, bukan cuma coding.
              </p>
           </BentoCard>

           <BentoCard className="bg-space-900/40 min-h-[240px]" glowColor="purple">
              <div className="w-12 h-12 rounded-xl bg-space-800 border border-white/10 flex items-center justify-center mb-5 text-purple-400 shadow-inner shadow-black/30">
                <Users className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Human-Centric System</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Sistem dibuat untuk manusia. Fokus utama adalah kemudahan adopsi oleh tim Anda, meminimalkan resistensi perubahan teknologi.
              </p>
           </BentoCard>

           <BentoCard className="bg-space-900/40 min-h-[240px]" glowColor="cyan">
              <div className="w-12 h-12 rounded-xl bg-space-800 border border-white/10 flex items-center justify-center mb-5 text-emerald-400 shadow-inner shadow-black/30">
                <Award className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Result Oriented</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Tidak fanatik pada satu tools (AI/No-Code). Goal kami adalah workflow bisnis Anda menjadi lebih rapi, cepat, dan hemat biaya operasional.
              </p>
           </BentoCard>
        </div>
      </div>
    </section>
  );
});

Proof.displayName = 'Proof';