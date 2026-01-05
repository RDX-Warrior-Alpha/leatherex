
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show if scrolled down more than 20px
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Hero Section - Now fits the frame (viewport height minus header) */}
      <section id="hero-section" className="relative h-[calc(100vh-80px)] flex items-center overflow-hidden">
        {/* Background Image - Reference image 11.png */}
        <div
          className="absolute inset-0 bg-secondary bg-cover bg-center bg-no-repeat transition-transform duration-[30s] scale-110"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
          <div className="max-w-2xl flex flex-col gap-5">
            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded w-fit animate-in fade-in slide-in-from-left-4 duration-500">
              PREMIUM MATERIALS
            </span>

            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
              Your Source for<br />
              <span className="text-primary">Premium Leather Products</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-xl animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              Connecting artisans with global markets since 1998. We facilitate seamless import and export of high-grade leather goods.
            </p>

            <div className="flex flex-wrap gap-4 mt-4 animate-in fade-in slide-in-from-left-10 duration-700 delay-300">
              <button
                onClick={() => navigate('/catalog')}
                className="bg-primary hover:bg-[#b0510e] text-white px-10 py-4 rounded-lg font-bold text-base transition-all shadow-lg active:scale-95"
              >
                View All Products
              </button>
              <button
                onClick={() => navigate('/catalog')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-base transition-all"
              >
                Explore Categories
              </button>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-12 right-12 flex gap-4 z-20">
          <button className="size-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Quick Nav Bar - Now appears below hero with animation on scroll */}
      <section
        id="quick-nav"
        className={`relative z-30 px-4 md:px-8 -mt-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-[0_20px_80px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

          {/* Item 1: Finished Goods */}
          <div className="flex items-center gap-6 p-6 md:p-0 md:pr-12 group cursor-pointer hover:bg-gray-50/50 transition-colors">
            <div className="size-24 bg-gray-50 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKwN8EbuMoI7-ZYEYiSqZoDrvFUX8H8c2oksGlxQPUOgZmYDTk4GBRzsk5iZ5thbMbhDec8JnKjziacQ0kkTgeQfmmUcXiIdTDsjSOyG0yGkUL8X0M_ue5ejqrao0Kwwjr3FzW-QEzfY45ImW303VuAGcXGJRbCgUsRXivmJokYJlLXuepLgSL87cLvK-S5aY9jirhQBqYW11Kx0Z5WFl2HTLV5qQW5GQCbur2C67BTIv162MmbQxWFHm7ZG8F8wo3vOaNWnqsnFc"
                alt="Shoes"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-black text-secondary text-xl">Finished Goods</h3>
              <p className="text-accent text-sm leading-tight mt-1">Handcrafted bags, shoes, and accessories.</p>
              <button className="text-primary text-sm font-bold mt-3 flex items-center gap-1 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Item 2: Raw Materials */}
          <div className="flex items-center gap-6 p-6 md:p-0 md:px-12 group cursor-pointer hover:bg-gray-50/50 transition-colors">
            <div className="size-24 bg-gray-50 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwXtzCj-XZ26-h96ExqrvQHSgjT71bLHOOBPlcsfJTkWeND_Xm74apL-tTuYCnyKSV9tVZ1PSUQMvvNUepD5g8i3IcgmrCzwALoL2J9wxaS_ExutEQ-1Lcld_mSvFvSOUcIU5uA418C8-8__mIa1N0EW2H7mgN3Hy4EJ_NLSj8JA-Jq2F6c_HpmZziTg7ZioKqKdGyXMijPpbD_DrrGGPhdpeZmojbXQaUPFaeg3ZjhifISbYBg0TxGBvI8AuAmyIA_1emaxB7l-A"
                alt="Leather Hide"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-black text-secondary text-xl">Raw Materials</h3>
              <p className="text-accent text-sm leading-tight mt-1">Premium hides and processed leather rolls.</p>
              <button className="text-primary text-sm font-bold mt-3 flex items-center gap-1 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Item 3: Tools & Supplies */}
          <div className="flex items-center gap-6 p-6 md:p-0 md:pl-12 group cursor-pointer hover:bg-gray-50/50 transition-colors">
            <div className="size-24 bg-gray-50 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcSwCR1OiwlVO4mnVp_uqGjqpsUbh-bKZo79zPZkstB2cbARGSvU-S6XAjgX4ZZASp5uRROgpRSetvrCu0XBWp4s93DEVYYU1VPk2qnhrEeegX-UYk-9gMC6MfHyd4uWIfDlzP-W4nGlp-QZCn-BhXot-XQQKaBVuIIt2ey3R-YIpyIhTDN72dlOkYE0Ydg8_BTh-uEFI9JRbHb08KGueQlgc69dON0gT3dbnghLAUsvUAcp1wVeePt1RFrpabsuagDnYANIwMnHY"
                alt="Tools"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-black text-secondary text-xl">Tools & Supplies</h3>
              <p className="text-accent text-sm leading-tight mt-1">Professional equipment for leather work.</p>
              <button className="text-primary text-sm font-bold mt-3 flex items-center gap-1 group-hover:gap-3 transition-all">
                Explore <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col gap-1">
            <h2 className="text-secondary text-4xl font-black tracking-tight">Featured Collections</h2>
            <p className="text-accent text-lg">Discover our most popular export categories</p>
          </div>
          <div className="flex gap-3">
            <button className="size-12 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:bg-gray-50 hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-12 rounded-full border border-gray-200 flex items-center justify-center text-secondary hover:bg-gray-50 hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEozlXPAd2qsb0CuEyyJ0kPenoN9zgOIPHWgSWuBfLkuGdNVp1DvB3zYFZByMnxL639dwiG0g2SvmFLKshLZHQqeqQarJxx8acEqzs_j3j41ZgLTb8rbT6B-TMM1emN3wDquQRuz2KzQZYholtm-SWDV_Upp6HiMa0ney-diDFb5I5S53LunTJtL6Zj-elNhK6x4l6gbebIV9ICzVCVDfcujC_LKxg5ANrcNjNEO1NfBxjWLEUuX4DSC65WQ72kPOsXtItwrXJ_0Q"
                alt="Duffel Bag"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-black px-3 py-1.5 rounded">BEST SELLER</span>
            </div>
            <div className="p-8 flex flex-col gap-2">
              <h3 className="text-2xl font-black text-secondary">Travel & Luggage</h3>
              <p className="text-accent text-sm leading-relaxed">Durable, handcrafted weekenders and duffels.</p>
              <button className="mt-8 w-full bg-gray-50 hover:bg-gray-200 text-secondary py-3.5 rounded-lg font-bold text-sm transition-all">
                View Collection
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKwN8EbuMoI7-ZYEYiSqZoDrvFUX8H8c2oksGlxQPUOgZmYDTk4GBRzsk5iZ5thbMbhDec8JnKjziacQ0kkTgeQfmmUcXiIdTDsjSOyG0yGkUL8X0M_ue5ejqrao0Kwwjr3FzW-QEzfY45ImW303VuAGcXGJRbCgUsRXivmJokYJlLXuepLgSL87cLvK-S5aY9jirhQBqYW11Kx0Z5WFl2HTLV5qQW5GQCbur2C67BTIv162MmbQxWFHm7ZG8F8wo3vOaNWnqsnFc"
                alt="Leather Gloves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex flex-col gap-2">
              <h3 className="text-2xl font-black text-secondary">Protective Gear</h3>
              <p className="text-accent text-sm leading-relaxed">Industrial grade leather gloves and aprons.</p>
              <button className="mt-8 w-full bg-gray-50 hover:bg-gray-200 text-secondary py-3.5 rounded-lg font-bold text-sm transition-all">
                View Collection
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTWjm-wV21uFquhPCme3VL4q2xepvp0LotO6V5By9sJQXtXMJW0KohAswwSNY1QG0YcnMrkkg0m8-LDJpU3uToDicuf1p3VpndFzLt55bKgT_MpTisMVD0fLrFPkZ8rOC8ksKE5BKMAU2j6NVLMgNTazTlwgtVGYIhPvOoRRjz7eI-fkMh0CxWssTia1xyIIASWtl63LYsFgJnU2XNUMBuqeiYZuswGjNIesfrfYK5v6P04QRMKUJ04S16zOlVV-epyiwNmsCgtnc"
                alt="Wallet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded">NEW ARRIVAL</span>
            </div>
            <div className="p-8 flex flex-col gap-2">
              <h3 className="text-2xl font-black text-secondary">Small Goods</h3>
              <p className="text-accent text-sm leading-relaxed">Wallets, cardholders, and belts made from premium calfskin.</p>
              <button className="mt-8 w-full bg-gray-50 hover:bg-gray-200 text-secondary py-3.5 rounded-lg font-bold text-sm transition-all">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
