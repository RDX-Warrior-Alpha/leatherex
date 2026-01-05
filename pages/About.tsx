
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="bg-secondary py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoARgC1bHevtROd6_4cNoEy2x9ppkBgUhcFtAGOlAzA2H6Rsg2DbBg7grpKApn1UNNpdhcGD52LzCn_krWs16wLctO3dLOqGsO-6DnQEZcKSlH0UMVhPUC4h7GPB2I5TNQKVu7D60Rpm_RTFa_uFXitWEYCEKGJLygcrlA1wB_po5WHcLDhqbc_S47d6YH64mK8AUCN_ImicuP-bs15OTqqk3xEwvlyjWdZzr2W2V74XSOHJPnaX4urxGQbp6-9HZwkLUFtxFTuxA')` }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 relative z-10 text-center">
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Established 1995</span>
          <h1 className="text-white text-4xl md:text-7xl font-black tracking-tight mb-8">Bridging Markets with <span className="text-primary">Premium Leather</span></h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Global Sourcing, Local Excellence. We bring the world's finest full-grain and top-grain leathers to manufacturers across the globe.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white dark:bg-background-dark py-12 border-b border-[#f4f2f0] dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-1 text-center md:text-left p-4 border-l-4 border-primary/20">
            <span className="text-accent text-xs font-bold uppercase">Years Experience</span>
            <span className="text-secondary dark:text-white text-4xl font-black">28+</span>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left p-4 border-l-4 border-primary/20">
            <span className="text-accent text-xs font-bold uppercase">Countries Served</span>
            <span className="text-secondary dark:text-white text-4xl font-black">45</span>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left p-4 border-l-4 border-primary/20">
            <span className="text-accent text-xs font-bold uppercase">Tons Exported</span>
            <span className="text-secondary dark:text-white text-4xl font-black">15k</span>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left p-4 border-l-4 border-primary/20">
            <span className="text-accent text-xs font-bold uppercase">Partner Tanneries</span>
            <span className="text-secondary dark:text-white text-4xl font-black">30+</span>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 w-full relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcSwCR1OiwlVO4mnVp_uqGjqpsUbh-bKZo79zPZkstB2cbARGSvU-S6XAjgX4ZZASp5uRROgpRSetvrCu0XBWp4s93DEVYYU1VPk2qnhrEeegX-UYk-9gMC6MfHyd4uWIfDlzP-W4nGlp-QZCn-BhXot-XQQKaBVuIIt2ey3R-YIpyIhTDN72dlOkYE0Ydg8_BTh-uEFI9JRbHb08KGueQlgc69dON0gT3dbnghLAUsvUAcp1wVeePt1RFrpabsuagDnYANIwMnHY" 
                  alt="Quality Control" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl">Detailed Inspection</p>
                    <p className="text-sm opacity-80">Milan, Italy Quality Control Center</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 size-40 bg-primary/10 rounded-full -z-10 blur-2xl" />
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold w-fit">
                <span className="material-symbols-outlined text-lg">grade</span>
                Premium Grading System
              </div>
              <h2 className="text-secondary dark:text-white text-3xl md:text-5xl font-black leading-tight">Uncompromising Quality Control Standards</h2>
              <p className="text-accent dark:text-accent/70 text-lg leading-relaxed">
                We don't just ship leather; we curate it. Our 5-point inspection process ensures that only the finest hides make it to your production line. Every batch undergoes rigorous testing for tensile strength, color fastness, and grain consistency.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Surface Grain Analysis", text: "Checking for natural imperfections and grain alignment." },
                  { title: "Tensile Strength Testing", text: "Ensuring maximum durability for heavy-duty applications." },
                  { title: "Eco-Compliance Review", text: "Verifying LWG and ISO environmental certifications." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <h4 className="font-bold dark:text-white">{item.title}</h4>
                      <p className="text-accent text-sm">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white dark:bg-background-dark border-t border-[#f4f2f0] dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-secondary dark:text-white text-3xl md:text-5xl font-black mb-4">Meet the Experts</h2>
            <p className="text-accent text-lg max-w-2xl mx-auto">Our leadership team combines decades of experience in global trade, fashion, and artisanal manufacturing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Marco Rossi", role: "Founder & CEO", img: "https://picsum.photos/400/400?random=1" },
              { name: "Sarah Chen", role: "VP Operations", img: "https://picsum.photos/400/400?random=2" },
              { name: "David Miller", role: "Head of Sourcing", img: "https://picsum.photos/400/400?random=3" },
              { name: "Elena Rodriguez", role: "Quality Director", img: "https://picsum.photos/400/400?random=4" }
            ].map((m, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="size-40 rounded-full overflow-hidden border-4 border-background-light dark:border-white/10 shadow-lg mb-6 transition-transform duration-500 group-hover:scale-110">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold dark:text-white">{m.name}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-widest">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
