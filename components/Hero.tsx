
import React from 'react';

export const Hero: React.FC = () => {
  const navigateToContact = () => {
    window.location.hash = '#contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative pt-32 pb-32 overflow-hidden bg-white">
        {/* Background Layer with Image and Gradients */}
        <div className="absolute inset-0 -z-10">
          {/* Banner Image - AI/Automation Themed as requested */}
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000" 
            alt="AI and Digital Transformation" 
            className="w-full h-full object-cover opacity-20 blur-[1px]"
          />
          
          {/* Gradient Overlay for Cleanness */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
          
          {/* Subtle Radial Accents for Depth */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          {/* Modern Pill Badge */}
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-slate-100/50 backdrop-blur-md border border-slate-200 text-blue-600 text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-8 md:mb-12 animate-fade-up shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 md:mr-3 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
            Established Legacy Since 1948
          </div>
          
          {/* High-Impact Typography - Matching Screenshot */}
          <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-[130px] font-black text-slate-900 leading-[0.95] mb-4 animate-fade-up tracking-tighter">
            75+ Years of Retail
          </h1>
          
          {/* The Blue Glow Effect from Screenshot */}
          <div className="relative h-24 md:h-48 -mt-12 md:-mt-24 mb-6 md:mb-12 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-transparent blur-[60px] md:blur-[120px] animate-pulse"></div>
          </div>
          
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-16 leading-relaxed animate-fade-up font-light" style={{ animationDelay: '0.2s' }}>
            From the trusted heritage of Seematti to a diversified digital enterprise, Zias delivers world-class E-Commerce, ERP, Education, and AI-driven business solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => { window.location.hash = '#service-software'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group w-full sm:w-auto px-8 md:px-12 py-3.5 md:py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200/50 flex items-center justify-center text-sm md:text-lg"
            >
              Explore Our Solutions 
              <i className="fa-solid fa-arrow-right ml-3 text-xs md:text-sm group-hover:translate-x-1.5 transition-transform"></i>
            </button>
            <button 
              onClick={navigateToContact}
              className="w-full sm:w-auto px-8 md:px-12 py-3.5 md:py-5 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm text-sm md:text-lg"
            >
              Request a Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TICKER - New Enterprise Feature */}
      <div className="py-8 bg-white border-y border-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by Innovative Institutions & Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale">
            {/* Using FontAwesome to simulate logos for the template */}
            <div className="flex items-center space-x-2"><i className="fa-brands fa-aws text-3xl"></i><span className="font-bold text-xl">CloudTech</span></div>
            <div className="flex items-center space-x-2"><i className="fa-brands fa-google text-3xl"></i><span className="font-bold text-xl">EduSuite</span></div>
            <div className="flex items-center space-x-2"><i className="fa-brands fa-shopify text-3xl"></i><span className="font-bold text-xl">RetailPro</span></div>
            <div className="flex items-center space-x-2"><i className="fa-brands fa-stripe text-3xl"></i><span className="font-bold text-xl">PayGlobal</span></div>
            <div className="flex items-center space-x-2"><i className="fa-brands fa-react text-3xl"></i><span className="font-bold text-xl">TechLabs</span></div>
          </div>
        </div>
      </div>
    </>
  );
};
