import React, { useState } from 'react';
import { Plus, Minus, ShieldCheck, Check } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-white/5">
      <button 
        className="flex justify-between items-start w-full py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-cyan-400' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`mt-1 p-1 rounded-full transition-colors shrink-0 ${isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 group-hover:text-white'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
      >
        <p className="text-slate-400 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

export const Objections = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const objections = [
    {
      q: "Bisnis saya masih kecil. Apa saya butuh ini?",
      a: "Justru yang dibutuhkan bukan sistem besar, tetapi proses kerja yang lebih rapi sejak awal agar bisnis tidak makin kacau saat berkembang. Mulai dari yang kecil membuat pondasi lebih kuat."
    },
    {
      q: "Saya takut implementasinya rumit.",
      a: "Pendekatan dibuat step-by-step dan disesuaikan dengan cara kerja bisnis Anda, bukan memaksa sistem yang asing. Fokusnya adalah kemudahan penggunaan."
    },
    {
      q: "Apa bedanya dengan jasa AI lain?",
      a: "Agung datang dari pengalaman operasional, HR, planning, dan administrasi. Jadi bukan hanya paham tools, tetapi paham alur kerja bisnis nyata dan masalah lapangan."
    },
    {
      q: "Saya khawatir biayanya tidak sebanding.",
      a: "Fokus utamanya adalah mengurangi pemborosan waktu, error, dan bottleneck yang setiap hari justru memiliki biaya tersembunyi jauh lebih besar daripada investasi perapihan sistem."
    },
    {
      q: "Saya belum siap sekarang.",
      a: "Menunda perapihan workflow biasanya berarti membiarkan waktu dan energi terus bocor dari proses manual yang sama setiap harinya."
    },
    {
      q: "Apa itu jasa AI System Builder?",
      a: "Jasa perancangan sistem kerja (workflow) yang memanfaatkan teknologi AI untuk mengotomasi tugas berulang, merapikan data, dan mempercepat proses bisnis tanpa menghilangkan kendali manusia."
    },
    {
      q: "Industri apa saja yang bisa dibantu?",
      a: "Hampir semua industri yang memiliki proses operasional berulang, seperti: Agensi, Retail/E-commerce, Logistik, HR Services, Konsultan, dan Manufaktur ringan."
    },
    {
      q: "Bagaimana cara memulai konsultasi?",
      a: "Cukup klik tombol WhatsApp di halaman ini. Kita akan diskusi singkat dulu untuk memetakan masalah Anda, baru menentukan langkah selanjutnya."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-space-900 relative">
       {/* Decorative Elements */}
       <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

       <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Sticky Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-cyan-500 font-bold uppercase tracking-widest text-xs mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading">
              Masih Ragu? <br/><span className="text-slate-500">Mari Luruskan.</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Wajar jika Anda berhati-hati. Tujuan layanan ini adalah mengurangi beban pikiran, bukan menambahnya.
            </p>
            
            <div className="p-6 rounded-2xl bg-space-800 border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl -mr-8 -mt-8" />
               <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Garansi Pendekatan</h4>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    Kita mulai dari konsultasi awal untuk melihat apakah ada proses yang memang layak dirapikan. Jika belum relevan, tidak perlu dipaksakan.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                    <Check size={16} />
                    <span>Risk-Free Consultation</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="bg-space-800/50 rounded-3xl p-6 md:p-8 border border-white/5">
              {objections.map((obj, i) => (
                <AccordionItem 
                  key={i} 
                  question={obj.q} 
                  answer={obj.a} 
                  isOpen={openIndex === i} 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
