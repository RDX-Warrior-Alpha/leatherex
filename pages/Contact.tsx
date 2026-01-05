
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 text-center mb-16">
        <h1 className="text-secondary dark:text-white text-4xl md:text-6xl font-black tracking-tight">Partner with Premium Leather Experts</h1>
        <p className="text-accent text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Whether you are looking to import high-grade hides or export finished goods, our global trade desk is ready to assist.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 mb-24">
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold dark:text-white">Get in Touch Direct</h2>
            <p className="text-accent leading-relaxed">Reach out to our team for immediate assistance with your order, partnership inquiry, or logistical questions.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6 p-6 rounded-2xl border border-[#f4f2f0] dark:border-white/5 bg-white dark:bg-white/5 hover:shadow-lg transition-all">
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold dark:text-white">Email Us</h3>
                <a href="mailto:trade@leatherex.com" className="text-accent hover:text-primary">trade@leatherex.com</a>
                <span className="text-xs text-accent/50">Typically replies within 24 hours</span>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-2xl border border-[#f4f2f0] dark:border-white/5 bg-white dark:bg-white/5 hover:shadow-lg transition-all">
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold dark:text-white">Call Us</h3>
                <a href="tel:+15551234567" className="text-accent hover:text-primary">+1 (555) 123-4567</a>
                <span className="text-xs text-accent/50">Mon-Fri, 9am - 6pm EST</span>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-2xl border border-[#f4f2f0] dark:border-white/5 bg-white dark:bg-white/5 hover:shadow-lg transition-all">
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold dark:text-white">Visit HQ</h3>
                <p className="text-accent">123 Tannery Row, Industrial District<br/>New York, NY 10012</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-3xl border border-[#f4f2f0] dark:border-white/10 shadow-sm">
            <h2 className="text-2xl font-bold dark:text-white mb-8">Send us an Inquiry</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-accent tracking-widest">Full Name</label>
                  <input type="text" placeholder="Jane Doe" className="bg-background-light dark:bg-black/20 border-[#f4f2f0] dark:border-white/10 dark:text-white rounded-xl p-4 focus:ring-primary focus:border-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-accent tracking-widest">Business Email</label>
                  <input type="email" placeholder="jane@company.com" className="bg-background-light dark:bg-black/20 border-[#f4f2f0] dark:border-white/10 dark:text-white rounded-xl p-4 focus:ring-primary focus:border-primary" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-accent tracking-widest">Company Name</label>
                <input type="text" placeholder="Leather Co. Ltd" className="bg-background-light dark:bg-black/20 border-[#f4f2f0] dark:border-white/10 dark:text-white rounded-xl p-4 focus:ring-primary focus:border-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-accent tracking-widest">Message</label>
                <textarea rows={4} placeholder="Describe your sourcing needs..." className="bg-background-light dark:bg-black/20 border-[#f4f2f0] dark:border-white/10 dark:text-white rounded-xl p-4 focus:ring-primary focus:border-primary resize-none"></textarea>
              </div>
              <button className="bg-primary hover:bg-[#b0510e] text-white py-5 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95 mt-4">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-[400px] rounded-3xl overflow-hidden relative shadow-lg group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-125" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7vHIPNBxMAuGE14IYcWAXD04vwkwgOWI490avfpwHQwa2hWZQch7NbTc3jOR88Oz30R2xNxnS0qvaQp8wjU8bT4GTYUWMYhf3n2fBvuVPoaxj5-is01v-YB-InBJkjwn3d38uS25FtN_ICqMX3vcmT_Z6tjEZCU-imTIOvAHfj22vLpxIFjBKOI_8W_RzT_w6wB_V6I719RP9S4-vXyWKHXBOtEdlUamb1BAQ4PfZWYgkR63Mx7oTWnVrJoKm76RGtihNNC6nSfo')` }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce">
              <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
              <div>
                <h4 className="font-bold dark:text-white">LeatherEx Global HQ</h4>
                <p className="text-sm text-accent">New York Industrial District</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
