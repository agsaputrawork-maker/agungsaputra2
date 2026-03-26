import React, { useState, useRef, useEffect, memo } from 'react';
import { MessageCircle, X, Send, Bot, User, RefreshCw, Loader2, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const ChatWidget = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! 👋 Saya Agung AI.\n\nAda yang bisa saya bantu jelaskan tentang layanan atau fitur website kami hari ini?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const API_URL = "https://script.google.com/macros/s/AKfycbxmDqi4BBTa-Xe4u47YumR6nBLFqvf2DjkdJrnOIdTw_Q_x2kUlgVWVY7IQlbT8y50v/exec";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
        const timer = setTimeout(() => setShowTooltip(true), 1000);
        return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
      <div key={i} className={`${line.trim() === '' ? 'h-2' : 'mb-1 last:mb-0'}`}>
        {line.split(/(\*\*.*?\*\*)/).map((part, j) => 
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
      </div>
    ));
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    const historyPayload = newMessages.slice(-6).map(msg => ({
      sender: msg.sender,
      text: msg.text
    }));

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ 
          message: userMsg.text,
          history: historyPayload 
        }),
      });

      const data = await response.json();

      const aiMsg: Message = {
        id: Date.now() + 1,
        text: data.reply || data.text || "Maaf, koneksi ke otak AI terputus.",
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "Maaf, terjadi kesalahan jaringan. Mohon cek koneksi internet Anda.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([{
      id: Date.now(),
      text: "Sesi baru dimulai. Silakan tanya apa saja! 🚀",
      sender: 'ai',
      timestamp: new Date()
    }]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end font-sans pointer-events-none touch-none">
      
      <div 
        className={`
          mb-4 w-[90vw] sm:w-[400px] max-h-[600px] h-[70vh] sm:h-[550px]
          bg-space-900/95 backdrop-blur-xl border border-white/10 
          rounded-2xl shadow-[0_0_60px_-15px_rgba(6,182,212,0.6)] overflow-hidden 
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right flex flex-col pointer-events-auto
          ${isOpen ? 'scale-100 opacity-100 translate-y-0 translate-x-0' : 'scale-0 opacity-0 translate-y-20 translate-x-10 pointer-events-none'}
        `}
      >
        <div className="bg-gradient-to-r from-cyan-950/90 to-blue-950/90 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-md relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

          <div className="flex items-center gap-3 z-10">
            <div className="relative group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Sparkles size={20} className="text-white fill-white/20" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-space-900 rounded-full animate-pulse"></span>
            </div>
            <div>
              <h3 className="text-white font-bold text-base tracking-tight flex items-center gap-1">
                Agung AI <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/20">PRO</span>
              </h3>
              <p className="text-xs text-slate-300 flex items-center gap-1">
                Automation Expert
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 z-10">
            <button 
                onClick={handleReset}
                title="Reset Chat"
                aria-label="Reset chat conversation"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
                <RefreshCw size={18} />
            </button>
            <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
                <X size={22} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-cyan-900/50 scrollbar-track-transparent bg-space-950/50">
            <div className="text-center">
                <span className="text-[10px] bg-space-800/50 text-slate-500 px-3 py-1 rounded-full border border-white/5">
                    Hari ini
                </span>
            </div>

          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-end gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`
                w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] shadow-md
                ${msg.sender === 'user' ? 'bg-slate-700 text-slate-300' : 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white'}
              `}>
                {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>

              <div className={`
                max-w-[85%] p-3 text-sm leading-relaxed shadow-md
                ${msg.sender === 'user' 
                  ? 'bg-cyan-600 text-white rounded-2xl rounded-br-none' 
                  : 'bg-space-800 border border-white/5 text-slate-200 rounded-2xl rounded-bl-none'}
              `}>
                <div className="whitespace-pre-wrap">
                  {msg.sender === 'ai' ? formatMessage(msg.text) : msg.text}
                </div>
                <div className={`text-[10px] mt-1.5 flex items-center gap-1 ${msg.sender === 'user' ? 'text-cyan-100 justify-end' : 'text-slate-500'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-2">
               <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-white" />
               </div>
               <div className="bg-space-800 border border-white/5 p-4 rounded-2xl rounded-bl-none flex gap-1.5 items-center h-10 shadow-md">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
               </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-3 bg-space-950/80 border-t border-white/10 backdrop-blur-md shrink-0">
          <div className="relative flex items-center group">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ketik pertanyaan Anda..."
              disabled={isTyping}
              className="w-full bg-space-900 text-white text-sm rounded-xl pl-4 pr-12 py-3 border border-white/10 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600 shadow-inner"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              aria-label={isTyping ? "Sending message" : "Send message"}
              className={`
                absolute right-2 p-1.5 rounded-lg transition-all duration-300
                ${!inputValue.trim() || isTyping 
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                  : 'bg-cyan-500 text-space-900 hover:bg-cyan-400 hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)]'}
              `}
            >
              {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="ml-0.5" />}
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[9px] text-slate-600 uppercase tracking-widest font-medium">
               Powered by agungsaputra.com
            </p>
          </div>
        </form>
      </div>

      <div className="flex items-center gap-4 relative z-50 pointer-events-auto">
        
        {showTooltip && !isOpen && (
            <div 
                className="flex items-center gap-3 bg-white text-space-900 px-4 py-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] 
                cursor-pointer transition-all duration-500 origin-right animate-bounce-slow hover:scale-105 max-w-[200px] sm:max-w-none"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-sm leading-tight">Tanya Agung AI</span>
                    <span className="text-[10px] text-slate-500 leading-tight">Gratis Konsultasi 24/7</span>
                </div>
                <ChevronRight size={16} className="text-cyan-600 shrink-0" />
            </div>
        )}

        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
            group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full 
            bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)]
            border-2 border-white/20 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:border-white/50
            transition-all duration-500 z-50 relative
            ${isOpen ? 'rotate-90 scale-90' : 'rotate-0 hover:-translate-y-1 scale-100'}
            `}
            aria-label={isOpen ? "Tutup Chat" : "Buka Chat AI"}
        >
            {isOpen ? <X size={28} className="sm:w-8 sm:h-8" /> : <MessageCircle size={28} className="fill-current sm:w-8 sm:h-8" />}
            
            {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 sm:h-6 sm:w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 sm:h-6 sm:w-6 bg-red-500 border-2 border-space-900 text-[10px] sm:text-xs items-center justify-center font-bold text-white shadow-sm">1</span>
            </span>
            )}
        </button>
      </div>
    </div>
  );
});

ChatWidget.displayName = 'ChatWidget';

export default ChatWidget;
