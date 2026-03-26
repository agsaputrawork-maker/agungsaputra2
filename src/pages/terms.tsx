import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Scale, Zap, ShieldCheck, Copyright, AlertCircle, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';

const TermsIllustration = memo(() => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center select-none pointer-events-none">
      <div className="absolute inset-0 bg-purple-500/10 blur-[60px] rounded-full animate-pulse-slow" />
      
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 border ${i === 2 ? 'border-purple-500/30' : 'border-slate-700/30'} rounded-3xl`}
          style={{ margin: `${i * 10}%` }}
          animate={{ 
            rotate: i % 2 === 0 ? 180 : -180,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      ))}

      <motion.div 
        className="relative z-10 w-28 h-32 bg-space-900 rounded-xl border border-purple-500/30 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
         <div className="w-8 h-1 bg-slate-700 rounded-full mb-2" />
         <div className="w-16 h-1 bg-slate-800 rounded-full mb-1" />
         <div className="w-14 h-1 bg-slate-800 rounded-full mb-1" />
         <div className="w-16 h-1 bg-slate-800 rounded-full mb-4" />
         
         <FileText className="w-8 h-8 text-purple-400" />
         
         <motion.div 
            className="absolute -bottom-3 -right-3 w-8 h-8 bg-cyan-500 rounded-full border-4 border-space-950 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
         >
            <CheckCircle2 size={16} className="text-space-900" />
         </motion.div>
      </motion.div>

      <div className="absolute inset-0 w-full h-full">
         {[...Array(3)].map((_, i) => (
            <motion.div
               key={i}
               className="absolute flex items-center gap-2 px-3 py-1 bg-space-900/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-slate-400"
               initial={{ opacity: 0, x: 0 }}
               animate={{ 
                  opacity: [0, 1, 1, 0],
                  x: [0, 20, 20, 40],
                  y: -50 + (i * 40)
               }}
               transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 1.2,
                  ease: "easeInOut" 
               }}
               style={{ left: '60%' }}
            >
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
               Approved
            </motion.div>
         ))}
      </div>
    </div>
  );
});

TermsIllustration.displayName = 'TermsIllustration';

const Section = ({ title, children, delay = 0 }: { title: string, children: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="mb-12 md:mb-16"
  >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
      <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
      {title}
    </h3>
    <div className="text-slate-400 leading-relaxed text-base md:text-lg pl-4 md:pl-5 border-l border-white/5 space-y-4">
      {children}
    </div>
  </motion.div>
);

const KeyPoint = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-space-900 border border-white/5 hover:border-purple-500/30 transition-all group"
  >
    <div className="w-10 h-10 rounded-xl bg-space-800 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    <h4 className="text-white font-bold mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </motion.div>
);

const Terms = () => {
  return (
    <div className="min-h-screen bg-space-950 text-slate-300 font-sans selection:bg-purple-500/30 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-full h-[500px] bg-purple-900/10 blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-full h-[500px] bg-cyan-900/10 blur-[120px]" />
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8 flex justify-between items-center backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group bg-space-900/50 px-4 py-2 rounded-full border border-white/5 hover:border-white/10">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Home</span>
        </Link>
      </nav>

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-24 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
          <div className="flex-1 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Scale size={12} />
              Terms of Service
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white font-heading tracking-tight mb-6"
            >
              Syarat & Ketentuan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Kerja Sama</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Panduan transparan mengenai hak, kewajiban, dan batasan layanan kami untuk memastikan kolaborasi yang profesional dan saling menguntungkan.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-sm text-slate-500 flex items-center gap-2 justify-center md:justify-start"
            >
              <Clock size={14} className="text-purple-500" />
              Effective Date: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <TermsIllustration />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          <KeyPoint 
            icon={Zap} 
            title="Scope of Work" 
            desc="Lingkup kerja didefinisikan jelas di awal. Penambahan fitur di tengah jalan akan dikenakan biaya tambahan." 
          />
          <KeyPoint 
            icon={Copyright} 
            title="Ownership" 
            desc="Sistem yang dibangun adalah milik Anda sepenuhnya setelah pembayaran lunas. Kami tidak mengunci (vendor lock-in)." 
          />
          <KeyPoint 
            icon={AlertCircle} 
            title="3rd Party Apps" 
            desc="Kami tidak bertanggung jawab atas perubahan harga atau kebijakan API dari software pihak ketiga (OpenAI, Zapier, dll)." 
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Section title="1. Definisi Layanan">
            <p>
              Agung Saputra menyediakan layanan konsultasi, perancangan, dan implementasi sistem automasi bisnis (AI & No-Code). Layanan kami bertujuan untuk efisiensi operasional, namun tidak menjamin kesuksesan finansial atau penjualan secara langsung.
            </p>
          </Section>

          <Section title="2. Pembayaran & Termin">
            <p>Ketentuan pembayaran standar kami adalah:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-purple-500">
              <li><strong>50% Down Payment (DP):</strong> Wajib dibayarkan sebelum project dimulai untuk mengamankan slot waktu.</li>
              <li><strong>50% Pelunasan:</strong> Dibayarkan setelah sistem selesai dibangun dan diserahterimakan (handover), namun sebelum akses penuh diberikan.</li>
            </ul>
            <p className="mt-4 text-sm bg-purple-500/10 p-4 rounded-lg border border-purple-500/20 text-purple-200">
              *Keterlambatan pembayaran pelunasan lebih dari 7 hari setelah handover dapat mengakibatkan penangguhan support atau akses sistem.
            </p>
          </Section>

          <Section title="3. Batasan Tanggung Jawab">
            <p>
              Sistem kami seringkali bergantung pada platform pihak ketiga (seperti OpenAI, Notion, Airtable, Make.com, dll).
            </p>
            <p>
              Kami tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-purple-500">
              <li>Downtime server dari pihak ketiga tersebut.</li>
              <li>Perubahan struktur harga atau API dari pihak ketiga.</li>
              <li>Kesalahan input data (human error) yang dilakukan oleh tim Anda setelah sistem berjalan.</li>
            </ul>
          </Section>

          <Section title="4. Kekayaan Intelektual">
            <div className="flex items-start gap-4">
               <ShieldCheck className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
               <div>
                  <p className="mb-2"><strong>Data Anda:</strong> Seluruh data bisnis yang diolah dalam sistem adalah hak milik Anda 100%.</p>
                  <p><strong>Metodologi Kami:</strong> Teknik, script kode custom, dan blueprint automasi yang kami gunakan merupakan kekayaan intelektual kami, namun Anda diberikan lisensi abadi untuk menggunakannya dalam bisnis Anda.</p>
               </div>
            </div>
          </Section>

          <Section title="5. Dukungan Pasca-Proyek (Maintenance)">
            <p>
              Kami memberikan garansi bug-fix selama <strong>14 hari</strong> setelah serah terima. Setelah masa garansi habis, perbaikan error atau penambahan fitur akan dikenakan biaya maintenance terpisah atau per-jam konsultasi.
            </p>
          </Section>

          <Section title="6. Perubahan Ketentuan">
            <p>
              Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan material akan diberitahukan kepada klien yang sedang dalam masa kontrak aktif.
            </p>
          </Section>
        </div>
        
        <div className="mt-20 border-t border-white/5 pt-10 text-center">
            <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                <span>Kembali ke Beranda</span>
                <ArrowLeft size={18} className="rotate-180" />
            </Link>
        </div>
      </main>
    </div>
  );
};

export default Terms;