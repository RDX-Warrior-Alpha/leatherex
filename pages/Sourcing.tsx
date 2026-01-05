
import React, { useState } from 'react';
import { getSourcingAdvice } from '../services/geminiService';

const Sourcing: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getSourcingAdvice(query);
    setResponse(result || '');
    setLoading(false);
  };

  const guides = [
    {
      title: "Full Grain",
      subtitle: "The Gold Standard",
      description: "Uses the entire grain of the hide with all layers. Most durable and develops a beautiful patina over time.",
      icon: "workspace_premium"
    },
    {
      title: "Vegetable Tanning",
      subtitle: "Eco-Friendly Choice",
      description: "Uses natural tannins from tree bark. Takes longer to produce but results in a unique, organic feel.",
      icon: "eco"
    },
    {
      title: "Logistics",
      subtitle: "Global Fulfillment",
      description: "DDP and FOB shipping options to over 50 countries with integrated customs handling.",
      icon: "local_shipping"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="bg-background-dark py-20 px-4 md:px-10 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">Intelligent Sourcing</h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Harnessing AI to help you find the perfect leather match for your specific production requirements.
          </p>
        </div>
      </section>

      {/* AI Consulting Area */}
      <section className="max-w-5xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white dark:bg-secondary rounded-3xl shadow-2xl border border-[#f4f2f0] dark:border-white/5 overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold dark:text-white mb-6">Expert Sourcing Consultant</h2>
            <form onSubmit={handleAsk} className="flex flex-col gap-4">
              <div className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., I need a durable but soft leather for high-end automotive seating. What do you recommend?"
                  className="w-full bg-background-light dark:bg-background-dark border-none rounded-2xl p-6 text-lg min-h-[150px] focus:ring-2 focus:ring-primary dark:text-white resize-none shadow-inner"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute bottom-4 right-4 bg-primary hover:bg-[#b0510e] text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? (
                    <span className="animate-spin material-symbols-outlined">sync</span>
                  ) : (
                    <span className="material-symbols-outlined">psychology</span>
                  )}
                  Consult AI
                </button>
              </div>
            </form>

            {response && (
              <div className="mt-8 p-8 bg-primary/5 border border-primary/20 rounded-2xl animate-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-2 text-primary font-bold mb-4">
                  <span className="material-symbols-outlined">verified</span>
                  AI Recommendations
                </div>
                <div className="prose dark:prose-invert max-w-none text-secondary dark:text-white leading-relaxed whitespace-pre-wrap">
                  {response}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Educational Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {guides.map((guide, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <div className="size-16 rounded-2xl bg-white dark:bg-white/5 shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">{guide.icon}</span>
              </div>
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{guide.subtitle}</span>
                <h3 className="text-xl font-bold dark:text-white mt-1">{guide.title}</h3>
                <p className="text-accent dark:text-accent/70 mt-3 text-sm leading-relaxed">{guide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Timeline */}
      <section className="bg-background-light dark:bg-black/20 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 dark:text-white">Our Sourcing Pipeline</h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>
            {[
              { step: "01", title: "Consultation", desc: "Identify requirements, grades, and targets." },
              { step: "02", title: "Sampling", desc: "Prototype testing and quality approval." },
              { step: "03", title: "Production", desc: "Tanning and manufacturing process." },
              { step: "04", title: "Logistics", desc: "Global shipping and customs clearance." }
            ].map((item, i) => (
              <div key={i} className="flex-1 bg-white dark:bg-secondary p-8 rounded-2xl border border-[#f4f2f0] dark:border-white/5 shadow-sm relative z-10 hover:shadow-xl transition-shadow group">
                <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-6">{item.step}</span>
                <h4 className="text-lg font-bold dark:text-white mb-2">{item.title}</h4>
                <p className="text-accent text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sourcing;
