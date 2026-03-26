import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, AlertCircle, MessageSquare, TrendingUp, BarChart3, Bot, Zap, Users, LucideIcon } from 'lucide-react';
import BentoCard from './ui/BentoCard';

// --- MICRO VISUALS (Optimized & Mobile Ready) ---
// Visuals now animate automatically on view, not just hover

const VisualWorkflow = memo(() => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-cyan-500/5 blur-xl" />
    <div className="relative flex gap-3 md:gap-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-space-900 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400" />
        </motion.div>
      ))}
      <svg className="absolute top-1/2 left-0 w-full h-full -z-0 -translate-y-1/2 overflow-visible">
        <path d="M 12 16 L 40 16 L 72 16" stroke="rgba(34,211,238,0.3)" strokeWidth="2" fill="none" className="hidden md:block" />
      </svg>
    </div>
  </div>
));

const VisualBot = memo(() => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-space-900 border border-purple-500/30 flex items-center justify-center relative shadow-lg shadow-purple-500/20 z-10">
      <Bot className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
      <motion.div 
        className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-space-800 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
      </motion.div>
    </div>
    {/* Animated Bubbles */}
    <motion.div 
      className="absolute top-6 right-4 md:right-8 w-8 md:w-12 h-2 md:h-3 bg-purple-500/20 rounded-full"
      animate={{ opacity: [0, 1, 0], x: [5, 0, -5] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
    <motion.div 
      className="absolute bottom-6 left-4 md:left-8 w-6 md:w-8 h-2 md:h-3 bg-cyan-500/20 rounded-full"
      animate={{ opacity: [0, 1, 0], x: [-5, 0, 5] }}
      transition={{ duration: 2.5, delay: 1.2, repeat: Infinity }}
    />
  </div>
));

const VisualDashboard = memo(() => (
  <div className="w-full h-full relative overflow-hidden flex items-end justify-center pb-4 gap-1.5 md:gap-2">
    {[30, 60, 45, 85].map((h, i) => (
      <motion.div
        key={i}
        className="w-3 md:w-4 bg-gradient-to-t from-cyan-500/10 to-cyan-400 rounded-t-sm"
        initial={{ height: "10%" }}
        whileInView={{ height: `${h}%` }}
        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }} // Re-animate on scroll
      />
    ))}
  </div>
));

const VisualTeam = memo(() => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
    <div className="relative">
      <Users className="w-8 h-8 md:w-10 md:h-10 text-slate-400 relative z-10" />
      <motion.div 
        className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
          style={{ top: '40%', left: '40%' }}
          animate={{ 
            x: Math.cos(i * 2.09) * 25, 
            y: Math.sin(i * 2.09) * 25 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  </div>
));

// --- SECTIONS ---

export const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24 bg-space-900 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs md:text-sm font-semibold tracking-wide uppercase"
          >
            Why Upgrade?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading"
          >
            Hasil Nyata untuk <span className="text-gradient-cyan">Bisnis Anda</span>
          </motion.h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed px-4">
            Bukan sekadar fitur canggih, tapi dampak langsung ke operasional sehari-hari yang lebih tenang dan terukur.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(160px,auto)]"
        >
          
          {/* Card 1: Hemat Waktu */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-8 md:row-span-2">
            <BentoCard className="h-full min-h-[280px]" glowColor="cyan">
              <motion.div whileTap={{ scale: 0.98 }} className="flex flex-col h-full justify-between z-10 relative cursor-pointer">
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 md:mb-6 text-cyan-400">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">Hemat Waktu Operasional</h3>
                  <p className="text-sm md:text-base text-slate-400 max-w-md">
                    Kurangi pekerjaan manual berulang. Tim Anda bisa fokus pada strategi, bukan terjebak input data membosankan.
                  </p>
                </div>
                
                {/* Mobile Animated Graphic */}
                <div className="mt-6 md:mt-8 h-20 md:h-24 w-full bg-space-800/50 rounded-xl overflow-hidden border border-white/5 relative">
                    <div className="absolute inset-0 flex items-center px-4 gap-3">
                      <div className="h-2 w-full bg-slate-700/30 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: "10%" }}
                            whileInView={{ width: "85%" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          />
                      </div>
                      <span className="text-xs font-mono text-cyan-400 whitespace-nowrap">85% Faster</span>
                    </div>
                </div>
              </motion.div>
            </BentoCard>
          </motion.div>

          {/* Card 2: Workflow Rapi */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4">
            <BentoCard className="h-full min-h-[200px]" glowColor="purple">
              <motion.div whileTap={{ scale: 0.97 }} className="cursor-pointer h-full">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  <Layers size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Workflow Rapi</h3>
                <p className="text-xs md:text-sm text-slate-400">
                  Proses kerja jadi lebih jelas, terstruktur, dan mudah dijalankan siapa saja.
                </p>
              </motion.div>
            </BentoCard>
          </motion.div>

          {/* Card 3: Minim Error */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4">
            <BentoCard className="h-full min-h-[200px]" glowColor="cyan">
              <motion.div whileTap={{ scale: 0.97 }} className="cursor-pointer h-full">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                  <AlertCircle size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Minim Error</h3>
                <p className="text-xs md:text-sm text-slate-400">
                  Validasi otomatis membantu tim bekerja lebih konsisten tanpa human error.
                </p>
              </motion.div>
            </BentoCard>
          </motion.div>

           {/* Card 4: Scale Up */}
           <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 md:row-span-2">
            <BentoCard className="h-full min-h-[280px]" glowColor="cyan">
              <motion.div whileTap={{ scale: 0.98 }} className="h-full flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                      <TrendingUp size={20} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Siap Scale-Up</h3>
                    <p className="text-xs md:text-sm text-slate-400">
                      Sistem yang tahan banting saat orderan naik 10x lipat. Growth tanpa chaos.
                    </p>
                  </div>
                  
                  {/* Graphic: Animated Bar Chart on Scroll */}
                  <div className="mt-4 flex items-end gap-2 h-20 px-1 border-b border-white/5">
                    {[35, 60, 45, 80, 50, 95].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: "5%" }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: false }}
                          transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                          className="flex-1 bg-cyan-500/20 rounded-t-sm"
                        />
                    ))}
                  </div>
              </motion.div>
            </BentoCard>
           </motion.div>

          {/* Card 5: Follow-up Cepat */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4">
            <BentoCard className="h-full min-h-[180px]" glowColor="purple">
               <motion.div whileTap={{ scale: 0.97 }} className="cursor-pointer h-full">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Follow-up Cepat</h3>
                <p className="text-xs md:text-sm text-slate-400">
                  Notifikasi real-time memastikan tidak ada lead yang terlewat.
                </p>
               </motion.div>
            </BentoCard>
          </motion.div>

          {/* Card 6: Keputusan Mudah */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4">
            <BentoCard className="h-full min-h-[180px]" glowColor="cyan">
              <motion.div whileTap={{ scale: 0.97 }} className="cursor-pointer h-full">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
                  <BarChart3 size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Data-Driven</h3>
                <p className="text-xs md:text-sm text-slate-400">
                  Dashboard otomatis membantu Anda melihat kesehatan bisnis instan.
                </p>
              </motion.div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Services = () => {
  const services = [
    {
      title: "AI Workflow Setup",
      desc: "Menghubungkan aplikasi kerja (Notion, Slack, Sheets) agar bicara satu sama lain secara otomatis.",
      visual: VisualWorkflow,
      benefits: ["Hemat 10+ jam/minggu", "No-code integration", "Auto-sync"]
    },
    {
      title: "Business Automation",
      desc: "Mengganti tugas manual berulang seperti input data, invoice, dan email follow-up dengan bot cerdas.",
      visual: VisualBot,
      benefits: ["Zero human error", "24/7 running", "Scalable process"]
    },
    {
      title: "Admin & Reporting",
      desc: "Dashboard monitoring otomatis yang menyajikan data operasional real-time untuk pengambilan keputusan.",
      visual: VisualDashboard,
      benefits: ["Live insights", "Visual data", "Auto-generated report"]
    },
    {
      title: "HR & Team Opt.",
      desc: "Sistem onboarding, tracking tugas, dan performa tim yang lebih transparan dan terukur.",
      visual: VisualTeam,
      benefits: ["Clear KPI tracking", "Faster onboarding", "Better alignment"]
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-space-900 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-900/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
           
           {/* Sticky Header - Mobile Optimized (Stays static on mobile, Sticky on Desktop) */}
           <div className="lg:sticky lg:top-32 relative">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4 md:mb-6"
             >
               <Zap size={12} />
               <span>Core Services</span>
             </motion.div>
             
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white font-heading leading-tight"
             >
               Layanan yang <br/><span className="text-gradient-cyan">Menyesuaikan Bisnis</span>
             </motion.h2>
             <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-md">
               Setiap bisnis unik. Kami tidak menjual template generik, tapi membangun sistem yang memecahkan masalah spesifik di workflow Anda.
             </p>
             
             {/* Abstract Visual - Hidden on small mobile to save space, visible on large screens */}
             <div className="hidden md:block relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden bg-space-800 border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-2 border-2 border-dashed border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-cyan-500/10 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                            <Bot className="w-8 h-8 text-cyan-400" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </div>

           {/* Services List with Micro-Visuals */}
           <div className="space-y-4 md:space-y-6">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }} // Trigger a bit earlier on mobile
                  transition={{ delay: idx * 0.1 }}
                  whileTap={{ scale: 0.98 }} // Tactile feedback
                  className="group relative p-1 bg-gradient-to-b from-white/10 to-white/5 rounded-[2rem] hover:from-cyan-500/50 hover:to-purple-500/50 active:from-cyan-500/30 active:to-purple-500/30 transition-all duration-500"
                >
                  <div className="bg-space-900 rounded-[1.9rem] p-5 md:p-8 h-full relative overflow-hidden">
                    {/* Mobile: ambient glow is always visible but subtle. Desktop: stronger on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-start">
                      {/* Micro Visual Box - Animated on View */}
                      <div className="shrink-0 w-full sm:w-20 h-20 rounded-2xl bg-space-800 border border-white/10 overflow-hidden shadow-inner shadow-black/50 group-hover:border-cyan-500/30 transition-colors">
                         <service.visual />
                      </div>
                      
                      <div className="flex-1">
                         <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                         <p className="text-slate-400 mb-4 text-sm leading-relaxed">{service.desc}</p>
                         <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit, i) => (
                               <span key={i} className="px-2.5 py-1 rounded-full bg-space-800 border border-white/5 text-[10px] md:text-xs text-slate-300 group-hover:border-cyan-500/20 group-hover:text-cyan-100 transition-all">
                                  {benefit}
                               </span>
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
};