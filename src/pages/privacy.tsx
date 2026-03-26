import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Server, ArrowLeft, CheckCircle2, Fingerprint } from 'lucide-react';

const PrivacyShield = memo(() => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center select-none pointer-events-none">
      <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full animate-pulse-slow" />
      
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 border ${i === 2 ? 'border-cyan-500/30 border-dashed' : 'border-slate-700/30'} rounded-full`}
          style={{ margin: `${i * 12}%` }}
          animate={{ 
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            rotate: { duration: 25 + i * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      ))}

      <motion.div 
        className="relative z-10 w-24 h-24 bg-space-900 rounded-2xl border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
         <Shield className="w-10 h-10 text-cyan-400" />
         <motion.div 
            className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-space-900"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
         />
      </motion.div>

      <div className="absolute inset-0 w-full h-full">
         {[...Array(6)].map((_, i) => (
            <motion.div
               key={i}
               className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
               initial={{ opacity: 0, scale: 0 }}
               animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: Math.cos(i * 60 * (Math.PI / 180)) * 100,
                  y: Math.sin(i * 60 * (Math.PI / 180)) * 100
               }}
               transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeOut" 
               }}
               style={{ top: '50%', left: '50%' }}
            />
         ))}
      </div>
    </div>
  );
});

PrivacyShield.displayName = 'PrivacyShield';

const Section = ({ title, children, delay = 0 }: { title: string, children: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="mb-12 md:mb-16"
  >
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
      <span className="w-1.5 h-6 bg-cyan-500 rounded-full" />
      {title}
    </h3>
    <div className="text-slate-400 leading-relaxed text-base md:text-lg pl-4 md:pl-5 border-l border-white/5 space-y-4">
      {children}
    </div>
  </motion.div>
);

const InfoCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-space-900 border border-white/5 hover:border-cyan-500/30 transition-all group"
  >
    <div className="w-10 h-10 rounded-xl bg-space-800 border border-white/10 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    <h4 className="text-white font-bold mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </motion.div>
);

const Privacy = () => {
  return (
    <div className="min-h-screen bg-space-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[500px] bg-cyan-900/10 blur-[120px]" />
         <div className="absolute bottom-0 right-0 w-full h-[500px] bg-purple-900/10 blur-[120px]" />
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Lock size={12} />
              Privacy Policy
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white font-heading tracking-tight mb-6"
            >
              Keamanan Data <br/>
              <span className="text-gradient-cyan">Prioritas Kami</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Transparansi penuh tentang bagaimana kami mengelola, melindungi, dan menggunakan informasi Anda dalam membangun sistem automasi.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-sm text-slate-500 flex items-center gap-2 justify-center md:justify-start"
            >
              <CheckCircle2 size={14} className="text-emerald-500" />
              Last Updated: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <PrivacyShield />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          <InfoCard 
            icon={Fingerprint} 
            title="Data Collection" 
            desc="Kami hanya mengumpulkan data esensial untuk keperluan setup workflow dan automasi bisnis Anda." 
          />
          <InfoCard 
            icon={Lock} 
            title="Secure Storage" 
            desc="Seluruh kredensial dan API keys disimpan dengan enkripsi standar industri (AES-256)." 
          />
          <InfoCard 
            icon={Eye} 
            title="No Sharing" 
            desc="Data bisnis Anda adalah milik Anda. Kami tidak pernah menjual data ke pihak ketiga." 
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Section title="1. Pendahuluan">
            <p>
              Kami menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana Agung Saputra ("kami") mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan layanan konsultasi dan automasi kami.
            </p>
            <p>
              Dengan menggunakan layanan kami, Anda menyetujui praktik data yang dijelaskan dalam kebijakan ini. Kami berkomitmen untuk memastikan bahwa privasi Anda dilindungi.
            </p>
          </Section>

          <Section title="2. Informasi yang Kami Kumpulkan">
            <p>Untuk memberikan layanan automasi workflow yang efektif, kami mungkin meminta informasi berikut:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-cyan-500">
              <li>Informasi Kontak (Nama, Email, Nomor WhatsApp).</li>
              <li>Detail Operasional Bisnis (untuk keperluan mapping workflow).</li>
              <li>Akses Terbatas ke Tools/Software (seperti API Keys untuk integrasi Notion, Slack, dll).</li>
            </ul>
          </Section>

          <Section title="3. Penggunaan Informasi">
            <p>Data yang kami kumpulkan digunakan semata-mata untuk:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-cyan-500">
              <li>Membangun dan mengonfigurasi sistem automasi sesuai pesanan Anda.</li>
              <li>Komunikasi terkait progress project dan support.</li>
              <li>Memperbaiki dan mengoptimalkan layanan kami.</li>
            </ul>
          </Section>

          <Section title="4. Keamanan Data & Kredensial">
            <div className="bg-space-900 border border-white/5 rounded-xl p-5 my-4">
              <div className="flex items-start gap-3">
                <Server className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h5 className="text-white font-bold text-sm mb-1">Enkripsi End-to-End</h5>
                  <p className="text-sm text-slate-400">
                    Setiap kredensial sensitif (password/API Key) yang Anda berikan selama proses setup akan dihapus dari database kami segera setelah sistem diserahterimakan kepada Anda.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. Hak Anda">
            <p>
              Anda memiliki hak penuh untuk meminta penghapusan seluruh data project setelah masa kontrak selesai. Kami juga menyediakan dokumentasi lengkap agar Anda memiliki kendali penuh atas sistem yang telah dibangun tanpa ketergantungan pada kami.
            </p>
          </Section>

          <Section title="6. Hubungi Kami">
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:
            </p>
            <a href="mailto:hello@agungsaputra.com" className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-white transition-colors font-medium">
              <FileText size={18} />
              hello@agungsaputra.com
            </a>
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

export default Privacy;