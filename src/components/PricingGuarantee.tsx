import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, ArrowRight, Zap, BarChart3, Boxes, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';

interface PricingTier {
  name: string;
  icon: any;
  desc: string;
  price: string;
  subPrice?: string;
  features: string[];
  highlight: boolean;
  ctaText: string;
  color: string;
}

const PricingCard = memo(({ tier, index }: { tier: PricingTier, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    className={`relative flex flex-col h-full rounded-[2rem] p-6 md:p-8 border transition-all duration-300 group ${
      tier.highlight 
        ? 'bg-space-800/80 border-cyan-500/50 shadow-2xl shadow-cyan-900/20 scale-100 md:scale-105 z-10' 
        : 'bg-space-900/40 border-white/10 hover:border-white/20 hover:bg-space-900/60'
    }`}
  >
    {tier.highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 whitespace-nowrap">
        <Sparkles className="w-3 h-3 fill-white" />
        Most Popular
      </div>
    )}

    <div className="mb-6">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${
        tier.highlight 
          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
          : 'bg-space-800 border-white/10 text-slate-400'
      }`}>
        <tier.icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2 font-heading">{tier.name}</h3>
      <p className="text-sm text-slate-400 leading-relaxed min-h-[40px]">{tier.desc}</p>
    </div>

    <div className="mb-8 pb-8 border-b border-white/5">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{tier.price}</span>
      </div>
      {tier.subPrice && (
        <p className="text-xs text-slate-500 mt-2 font-medium">{tier.subPrice}</p>
      )}
    </div>

    <div className="flex-1">
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm group-hover:text-slate-200 transition-colors text-slate-400">
            <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
              tier.highlight ? 'bg-cyan-500 text-space-900' : 'bg-slate-700 text-slate-300'
            }`}>
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <Link 
      to="contact" 
      smooth={true}
      offset={-50}
      className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer overflow-hidden relative group/btn ${
          tier.highlight 
            ? 'bg-cyan-500 text-space-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]' 
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
      }`}
    >
      <span className="relative z-10">{tier.ctaText}</span>
      {tier.highlight && <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />}
      {tier.highlight && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />}
    </Link>
  </motion.div>
));

PricingCard.displayName = 'PricingCard';

export const Pricing = memo(() => {
  const tiers: PricingTier[] = [
    {
      name: "Starter Workflow",
      icon: Zap,
      desc: "Cocok untuk UMKM yang ingin merapikan 1 proses spesifik agar lebih efisien.",
      price: "IDR 5 - 15 Juta",
      subPrice: "One-time payment (Investasi Sekali)",
      features: [
        "Audit 1 Workflow Utama (ex: Invoice)",
        "Blueprint & Dokumentasi SOP",
        "Setup Automasi (Zapier/Make)",
        "Training Video untuk Tim",
        "Garansi Bug 14 Hari"
      ],
      highlight: false,
      ctaText: "Mulai Starter",
      color: "slate"
    },
    {
      name: "System Growth",
      icon: BarChart3,
      desc: "Untuk bisnis berkembang yang butuh sistem terintegrasi antar divisi.",
      price: "IDR 20 - 50 Juta",
      subPrice: "One-time payment + Setup Fee",
      features: [
        "Audit Operasional Menyeluruh",
        "Mapping Workflow Lintas Divisi",
        "Dashboard Admin & Reporting",
        "Integrasi Database (Airtable/SQL)",
        "Prioritas Support 30 Hari",
        "Sesi Review Pasca-Implementasi"
      ],
      highlight: true,
      ctaText: "Konsultasi Growth",
      color: "cyan"
    },
    {
      name: "Custom Enterprise",
      icon: Boxes,
      desc: "Solusi kompleks untuk perusahaan dengan kebutuhan custom app & security.",
      price: "Custom Quote",
      subPrice: "Berdasarkan kompleksitas project",
      features: [
        "Full Custom App Development",
        "Advanced Data Security & Role",
        "Dedicated System Architect",
        "Integrasi API Khusus / Legacy",
        "Retainer Maintenance Option",
        "SLA Support Agreement"
      ],
      highlight: false,
      ctaText: "Hubungi Tim",
      color: "purple"
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-space-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Investasi
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading"
          >
            Harga Transparan, <br className="hidden md:block" />
            <span className="text-gradient-cyan">Tanpa Biaya Tersembunyi</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed px-4"
          >
            Bukan biaya hangus, melainkan investasi aset sistem. Bayar sekali untuk sistem yang akan menghemat biaya operasional Anda bertahun-tahun ke depan.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <PricingCard key={idx} tier={tier} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';

export const Guarantee = memo(() => {
  return (
    <section className="py-16 md:py-24 bg-space-900 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-900/20 to-space-900 border border-emerald-500/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />
          
          <div className="shrink-0 relative z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" />
            </div>
          </div>
          
          <div className="text-center md:text-left relative z-10 flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">
              Risk-Free <span className="text-emerald-400">Consultation</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-base md:text-lg">
              Kami tidak akan menjual sistem jika bisnis Anda belum membutuhkannya. Konsultasi awal 100% gratis untuk membedah masalah. Jika kami tidak bisa membantu, kami akan mengatakannya secara jujur di awal.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <div className="flex items-center gap-3 bg-space-950/50 px-4 py-2 rounded-xl border border-white/5">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400"><Check className="w-3 h-3" strokeWidth={3} /></div>
                <span className="text-sm font-bold text-slate-300">Tanpa Komitmen</span>
              </div>
              <div className="flex items-center gap-3 bg-space-950/50 px-4 py-2 rounded-xl border border-white/5">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400"><Check className="w-3 h-3" strokeWidth={3} /></div>
                <span className="text-sm font-bold text-slate-300">Garansi Transparansi</span>
              </div>
            </div>
          </div>

          <div className="md:w-px md:h-32 w-32 h-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent shrink-0" />

          <div className="shrink-0 text-center">
             <p className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-2">Success Rate</p>
             <div className="text-4xl md:text-5xl font-bold text-white mb-1">98%</div>
             <p className="text-xs text-slate-500">Klien Puas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Guarantee.displayName = 'Guarantee';