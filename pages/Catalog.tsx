
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { LeatherGrade } from '../types';

const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeGrade, setActiveGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Gloves', 'Safety', 'Bags', 'Accessories'];
  const grades = ['All', ...Object.values(LeatherGrade)];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchGrade = activeGrade === 'All' || p.grade === activeGrade;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchGrade && matchSearch;
    });
  }, [activeCategory, activeGrade, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-primary font-bold uppercase tracking-widest text-xs">Global Inventory</span>
        <h1 className="text-secondary dark:text-white text-4xl md:text-6xl font-black tracking-tight">Premium Leather Collections</h1>
        <p className="text-accent dark:text-accent/70 text-lg max-w-2xl leading-relaxed mt-4">
          Discover high-performance leather products and raw materials ready for bulk export and manufacturing.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12 border-b border-[#f4f2f0] dark:border-white/5 pb-8">
        <div className="flex-1 flex flex-wrap gap-3">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${
                activeCategory === c 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white dark:bg-white/5 dark:text-white border border-[#f4f2f0] dark:border-white/10 hover:border-primary/50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-accent">search</span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white dark:bg-white/5 dark:text-white border-[#f4f2f0] dark:border-white/10 rounded-xl pl-10 pr-4 py-3 focus:ring-primary focus:border-primary shadow-sm"
            />
          </div>
          <select 
            value={activeGrade}
            onChange={(e) => setActiveGrade(e.target.value)}
            className="w-full md:w-auto bg-white dark:bg-white/5 dark:text-white border-[#f4f2f0] dark:border-white/10 rounded-xl px-4 py-3 focus:ring-primary shadow-sm"
          >
            {grades.map(g => (
              <option key={g} value={g}>{g === 'All' ? 'All Grades' : g}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(p => (
          <div key={p.id} className="group bg-white dark:bg-background-dark border border-[#f4f2f0] dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="aspect-[4/3] relative overflow-hidden bg-background-light dark:bg-black/20">
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {p.isNew && <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">New</span>}
                {p.isBestSeller && <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">Bestseller</span>}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm line-clamp-2">{p.description}</p>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 gap-4">
              <div>
                <h3 className="text-secondary dark:text-white text-xl font-bold group-hover:text-primary transition-colors leading-tight">{p.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                   <span className="text-[10px] font-bold bg-background-light dark:bg-white/10 px-2 py-0.5 rounded text-accent uppercase">{p.grade}</span>
                   <span className="text-[10px] font-bold bg-background-light dark:bg-white/10 px-2 py-0.5 rounded text-accent uppercase">{p.tanning}</span>
                </div>
              </div>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#f4f2f0] dark:border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-accent/60 tracking-widest">MOQ</span>
                  <span className="text-sm font-black dark:text-white">{p.moq}</span>
                </div>
                <button className="bg-secondary dark:bg-white/10 text-white hover:bg-primary hover:text-white font-bold py-2.5 px-6 rounded-xl transition-all text-sm shadow-md">
                  Quote
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-32 text-center">
            <span className="material-symbols-outlined text-8xl text-accent/20 mb-6">search_off</span>
            <p className="text-accent text-xl font-medium">No results found for your search criteria.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setActiveGrade('All'); setSearchQuery('');}}
              className="mt-6 bg-primary/10 text-primary font-bold px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Bulk Order Section */}
      <section className="mt-24 relative rounded-[3rem] overflow-hidden group">
         <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTWjm-wV21uFquhPCme3VL4q2xepvp0LotO6V5By9sJQXtXMJW0KohAswwSNY1QG0YcnMrkkg0m8-LDJpU3uToDicuf1p3VpndFzLt55bKgT_MpTisMVD0fLrFPkZ8rOC8ksKE5BKMAU2j6NVLMgNTazTlwgtVGYIhPvOoRRjz7eI-fkMh0CxWssTia1xyIIASWtl63LYsFgJnU2XNUMBuqeiYZuswGjNIesfrfYK5v6P04QRMKUJ04S16zOlVV-epyiwNmsCgtnc"
            alt="Manufacturing"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent p-10 md:p-20 flex flex-col justify-center">
            <div className="max-w-xl flex flex-col gap-6">
               <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">Private Label <br/>Manufacturing</h2>
               <p className="text-gray-300 text-lg">
                  Bring your designs to life. We provide end-to-end manufacturing services from pattern making to final export, using only our premium sourced hides.
               </p>
               <button className="bg-primary hover:bg-[#b0510e] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all w-fit active:scale-95">
                  Download Production PDF
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Catalog;
