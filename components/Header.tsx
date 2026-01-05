
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform">
              <span className="material-symbols-outlined text-xl">layers</span>
            </div>
            <h2 className="text-xl font-black tracking-tight text-secondary">LeatherExports</h2>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-secondary/70 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 flex-1 justify-end max-w-md ml-8">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <button className="bg-primary hover:bg-[#b0510e] text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-sm whitespace-nowrap">
              Get a Quote
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold px-2 py-1 ${
                  location.pathname === link.path ? 'text-primary' : 'text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <input type="text" placeholder="Search" className="bg-gray-100 border-none rounded-full px-4 py-2" />
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">Get a Quote</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
