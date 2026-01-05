
import React, { useState, useRef, useEffect } from 'react';
import { getSourcingAdvice } from '../services/geminiService';

const SourcingAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getSourcingAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || '' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-white dark:bg-background-dark rounded-2xl shadow-2xl border border-[#f4f2f0] dark:border-white/10 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold">Sourcing Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-full p-1 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-light/50 dark:bg-black/20">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-accent text-sm">Ask me anything about leather types, tanning, or grades!</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-white dark:bg-secondary text-secondary dark:text-white border border-[#f4f2f0] dark:border-white/5 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-secondary p-3 rounded-2xl rounded-tl-none border border-[#f4f2f0] dark:border-white/5 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-white dark:bg-background-dark border-t border-[#f4f2f0] dark:border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How do I choose between..."
                className="flex-1 bg-background-light dark:bg-black/20 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-primary text-white rounded-lg p-2 flex items-center justify-center hover:bg-[#b0510e] disabled:opacity-50 transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white size-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <span className="material-symbols-outlined text-3xl">smart_toy</span>
          <span className="absolute -top-10 right-0 bg-white dark:bg-secondary dark:text-white text-secondary text-xs px-2 py-1 rounded-lg border border-[#f4f2f0] dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Leather Expert AI
          </span>
        </button>
      )}
    </div>
  );
};

export default SourcingAssistant;
