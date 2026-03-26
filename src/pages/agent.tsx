import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Command, ArrowLeft, RefreshCw, Cpu, Wifi, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_URL = "https://script.google.com/macros/s/AKfycbxmDqi4BBTa-Xe4u47YumR6nBLFqvf2DjkdJrnOIdTw_Q_x2kUlgVWVY7IQlbT8y50v/exec";

// --- COMPONENTS ---

const TypingIndicator = () => (
  <div className="flex gap-1.5 p-2">
    <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }} />
    <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, ease: "easeInOut" }} />
    <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, ease: "easeInOut" }} />
  </div>
);

const MessageBubble = memo(({ id, text, sender, timestamp }: { id: number, text: string, sender: 'user' | 'ai', timestamp: Date }) => {
  const isAi = sender === 'ai';

  const formattedText = text.split('\n').map((line, i) => (
    <div key={i} className={`${line.trim() === '' ? 'h-3' : 'mb-1 last:mb-0'}`}>
      {line.split(/(\*\*.*?\*\*)/).map((part, j) => 
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={j} className="text-cyan-100 font-bold tracking-wide drop-shadow-sm">{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      )}
    </div>
  ));

  return (
    <motion.div 
      id={`msg-${id}`}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex w-full ${isAi ? 'justify-start scroll-mt-48' : 'justify-end'} mb-6 group relative z-10`}
    >
      <div className={`flex max-w-[85%] md:max-w-[75%] gap-3 md:gap-4 ${isAi ? 'flex-row' : 'flex-row-reverse'}`}>

        <div className={`
          w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg border mt-1
          ${isAi 
            ? 'bg-space-900 border-cyan-500/30 shadow-cyan-900/20' 
            : 'bg-gradient-to-br from-cyan-600 to-blue-700 border-white/10'}
        `}>
          {isAi ? <Bot size={18} className="text-cyan-400 md:w-5 md:h-5" /> : <User size={18} className="text-white md:w-5 md:h-5" />}
        </div>

        <div className={`
          relative p-4 md:p-5 rounded-2xl backdrop-blur-md shadow-xl transition-all duration-300
          ${isAi 
            ? 'bg-space-900/80 border border-white/5 text-slate-300 rounded-tl-none hover:border-cyan-500/20' 
            : 'bg-cyan-950/60 border border-cyan-500/20 text-cyan-50 rounded-tr-none hover:bg-cyan-900/60'}
        `}>
          {isAi && (
            <div className="absolute -top-3 left-0 bg-space-950 border border-cyan-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm z-20">
               <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
               </span>
               <span className="text-[8px] md:text-[9px] font-bold text-cyan-500 uppercase tracking-widest">Agung AI</span>
            </div>
          )}
          
          <div className="text-sm md:text-base leading-relaxed font-light tracking-wide text-slate-200">
            {formattedText}
          </div>

          <div className={`text-[10px] mt-2 opacity-40 flex items-center gap-1 font-mono ${isAi ? 'justify-start' : 'justify-end'}`}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

MessageBubble.displayName = 'MessageBubble';

// --- MAIN PAGE ---

const Agent = () => {
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'user'|'ai', timestamp: Date}[]>([
    {
      id: 1,
      text: "Selamat datang di **Agung AI Core**. 🚀\n\nSaya adalah asisten virtual Agung Saputra yang siap membantu menjawab pertanyaan dan memberikan informasi yang Anda butuhkan dengan cepat.\n\nSilakan tanyakan tentang layanan, harga, atau langsung **jadwalkan konsultasi** di sini.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (!lastMsg) return;

    if (lastMsg.sender === 'user') {
       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
       setTimeout(() => {
          const element = document.getElementById(`msg-${lastMsg.id}`);
          if (element) {
             element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
       }, 100);
    }
  }, [messages]);

  useEffect(() => {
    if (isTyping) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isTyping]);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');
    
    const newUserMsg = { id: Date.now(), text: userText, sender: 'user' as const, timestamp: new Date() };
    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setIsTyping(true);

    const historyPayload = updatedMessages.slice(-8).map(m => ({ sender: m.sender, text: m.text }));

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ message: userText, history: historyPayload }),
      });
      const data = await res.json();
      
      const replyText = data.reply || data.text || "Maaf, koneksi neural terganggu.";
      setMessages(prev => [...prev, { id: Date.now(), text: replyText, sender: 'ai', timestamp: new Date() }]);
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now(), text: "Network Error: Gagal sinkronisasi data.", sender: 'ai', timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-space-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-white flex flex-col relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-5 bg-space-950/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20 flex items-center justify-between transition-all duration-300">
         <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 transition-all group text-sm font-bold text-slate-400 hover:text-white">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform text-cyan-500" />
            <span className="hidden md:inline">Back</span>
         </Link>

         <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
               <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
               </span>
               <h1 className="font-bold text-white tracking-tight text-base md:text-lg">AGUNG <span className="text-cyan-500">AI AGENT</span></h1>
            </div>
            <div className="text-[9px] md:text-[10px] text-slate-500 font-mono tracking-widest mt-0.5">LIVE SYSTEM SYNCED</div>
         </div>

         <div className="flex items-center gap-3">
             <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-900 border border-white/5 text-[10px] font-mono text-cyan-400 shadow-inner">
                <Wifi size={12} />
                <span>ACTIVE</span>
             </div>
             <button onClick={() => window.location.reload()} className="p-2 md:p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all hover:rotate-180 duration-500">
                <RefreshCw size={18} />
             </button>
         </div>
      </header>

      <main className="flex-1 pt-44 md:pt-52 pb-48 overflow-y-auto relative z-10 scroll-smooth px-4">
         <div className="max-w-3xl mx-auto w-full">

            <div className="flex justify-center mb-10">
               <div className="px-5 py-2 rounded-full bg-space-900/80 backdrop-blur-md border border-white/5 flex items-center gap-4 shadow-lg">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono border-r border-white/10 pr-4">
                     <Cpu size={12} className="text-cyan-600" />
                     <span>CORE-SYS V.2</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                     <ShieldCheck size={12} className="text-green-600" />
                     <span>ENCRYPTED</span>
                  </div>
               </div>
            </div>

            <AnimatePresence mode="popLayout">
               {messages.map((msg) => (
                  <MessageBubble key={msg.id} id={msg.id} text={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
               ))}
               {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex justify-start mb-6 pl-12 md:pl-14"
                  >
                     <div className="bg-space-900/60 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-3 shadow-lg">
                        <span className="text-xs text-cyan-500/80 font-mono animate-pulse">Processing</span>
                        <TypingIndicator />
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
         </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-space-950 via-space-950/95 to-transparent pt-12 pb-6 px-4">
         <div className="max-w-3xl mx-auto w-full relative">
            
            <form 
               onSubmit={handleSend}
               className="relative bg-space-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] group focus-within:border-cyan-500/40 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
            >
               <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ketik pesan anda..."
                  className="w-full bg-transparent text-white placeholder:text-slate-600 px-5 py-4 md:px-6 md:py-5 pr-14 md:pr-24 focus:outline-none text-base tracking-wide"
                  disabled={isTyping}
                  autoComplete="off"
               />
               
               <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 text-[10px] text-slate-500 font-mono pointer-events-none opacity-50 group-focus-within:opacity-100 transition-opacity">
                     <Command size={10} />
                     <span>RET</span>
                  </div>
                  <button 
                     type="submit"
                     disabled={!inputValue.trim() || isTyping}
                     className={`
                        p-2.5 md:p-3 rounded-xl flex items-center justify-center transition-all duration-300
                        ${!inputValue.trim() || isTyping 
                           ? 'bg-space-800 text-slate-600 cursor-not-allowed opacity-50' 
                           : 'bg-gradient-to-tr from-cyan-600 to-cyan-400 text-space-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]'}
                     `}
                  >
                     <Send size={18} className={!inputValue.trim() ? "" : "ml-0.5"} />
                  </button>
               </div>
            </form>

            <div className="mt-4 text-center">
               <div className="inline-flex items-center gap-2 text-[10px] text-slate-600 opacity-60 hover:opacity-100 transition-opacity cursor-help select-none">
                  <Lock size={10} className="text-cyan-500/70" />
                  <span className="tracking-widest">SECURE NEURAL NETWORK</span>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default Agent;