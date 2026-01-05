
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-[#f4f2f0] dark:border-white/10 pt-16 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 text-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold dark:text-white">LeatherEx</h3>
            </div>
            <p className="text-accent dark:text-accent/80 text-sm leading-relaxed max-w-xs">
              Your trusted partner for premium leather sourcing and global export. Quality you can feel, logistics you can trust. Since 1995.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 dark:text-white uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-accent dark:text-accent/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Tanneries</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 dark:text-white uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm text-accent dark:text-accent/70">
              <li><Link to="/sourcing" className="hover:text-primary transition-colors">B2B Sourcing</Link></li>
              <li><Link to="/sourcing" className="hover:text-primary transition-colors">Custom Manufacturing</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Logistics & Shipping</Link></li>
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Wholesale Catalog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 dark:text-white uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-accent dark:text-accent/70">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span>123 Leather District, Milan, Italy</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <span>+39 02 5555 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span>sourcing@leatherex.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#f4f2f0] dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent text-xs">© 2024 LeatherEx Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="text-accent text-xs hover:text-primary">Privacy Policy</Link>
            <Link to="#" className="text-accent text-xs hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
