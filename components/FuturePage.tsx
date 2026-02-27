
import React from 'react';

export const FuturePage: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-slate-900 text-white">
        {/* Banner Image - Added for Premium Look */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Future of Digital Ecosystems" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradients for text readability and depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 animate-fade-up text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            The Roadmap Ahead
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
            Our Future Vision
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Building Sustainable Digital Ecosystems for Tomorrow.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed">
            Zias Innovative Technologies Pvt Ltd is committed to shaping the future of digital commerce, education, and business enablement. Rooted in a 75+ year retail legacy, our future roadmap focuses on global scalability and AI-driven growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-2xl shadow-blue-500/20"
            >
              Join the Journey
            </button>
            <button 
              onClick={() => scrollToSection('vision')}
              className="w-full sm:w-auto px-12 py-5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 2. OUR LONG-TERM VISION */}
      <section id="vision" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Vision for the Future</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-2xl text-slate-600 leading-relaxed font-light">
              "Our vision is to become a trusted digital transformation partner for businesses and institutions by delivering scalable platforms, intelligent solutions, and customer-centric innovations. Zias aims to continuously evolve by embracing emerging technologies while staying grounded in real-world business needs."
            </p>
          </div>
        </div>
      </section>

      {/* 3. FUTURE FOCUS AREAS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Key Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Digital Commerce Expansion', 
                icon: 'fa-rocket', 
                desc: 'Scaling SeemattiStores.com for wider markets with enhanced B2C & B2B experiences, improved personalization, and peak performance.',
                color: 'text-blue-600',
                bg: 'bg-blue-100/50'
              },
              { 
                title: 'Education & Skill Development', 
                icon: 'fa-user-graduate', 
                desc: 'Expanding E-Academy course offerings with industry-aligned certification programs and deeper institutional collaborations.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-100/50'
              },
              { 
                title: 'Smart Education Systems', 
                icon: 'fa-school-circle-check', 
                desc: 'Next-gen ERP modules with AI-driven analytics for institutions, improving user experience and administrative automation.',
                color: 'text-purple-600',
                bg: 'bg-purple-100/50'
              },
              { 
                title: 'Advanced Software Solutions', 
                icon: 'fa-laptop-code', 
                desc: 'Building cloud-ready, modular SaaS architectures and industry-specific software products tailored for global enterprises.',
                color: 'text-indigo-600',
                bg: 'bg-indigo-100/50'
              },
              { 
                title: 'AI & Automation', 
                icon: 'fa-robot', 
                desc: 'AI-powered business insights and intelligent workflow automation to optimize custom solutions for modern enterprises.',
                color: 'text-orange-600',
                bg: 'bg-orange-100/50'
              },
              { 
                title: 'Global Retail Transformation', 
                icon: 'fa-globe-asia', 
                desc: 'Leveraging our legacy to redefine brick-and-mortar retail through phygital (physical + digital) innovation.',
                color: 'text-cyan-600',
                bg: 'bg-cyan-100/50'
              }
            ].map((area, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <div className={`w-14 h-14 ${area.bg} ${area.color} rounded-2xl flex items-center justify-center text-xl mb-8 group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${area.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INNOVATION ROADMAP */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Innovation Roadmap</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Zias is focused on integrating advanced technologies into every service we offer. Our roadmap includes continuous improvements in system intelligence and data-driven decision making.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Artificial Intelligence & ML', icon: 'fa-microchip', text: 'Deep learning models for retail behavior prediction and education personalization.' },
                  { title: 'Business Process Automation', icon: 'fa-gears', text: 'Reducing operational friction through intelligent workflow orchestration.' },
                  { title: 'Data Analytics & Insights', icon: 'fa-chart-area', text: 'Converting raw data into actionable business intelligence for our partners.' },
                  { title: 'Secure & Scalable Platforms', icon: 'fa-shield-halved', text: 'Fortifying our cloud infrastructure for high-concurrency global operations.' }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-5 group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-blue-600/5 rounded-[60px] blur-2xl"></div>
               <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Technology Roadmap" 
                className="relative z-10 rounded-[60px] shadow-2xl"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIPS */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Strategic Partnerships</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Future growth at Zias is driven by strategic collaborations with technology partners, education providers, and industry experts. These partnerships enable us to deliver cutting-edge solutions across sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Placeholder for partner logos */}
             <div className="text-2xl font-bold tracking-tighter uppercase italic">Tech Partners</div>
             <div className="text-2xl font-bold tracking-tighter uppercase italic">Edu Providers</div>
             <div className="text-2xl font-bold tracking-tighter uppercase italic">Industry Experts</div>
             <div className="text-2xl font-bold tracking-tighter uppercase italic">Innovation Hubs</div>
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Our Commitment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Long-term client partnerships',
              'Continuous service improvement',
              'Secure & reliable solutions',
              'Ethical and transparent practices',
              'Customer-first innovation',
              'Responsible technology growth'
            ].map((text, i) => (
              <div key={i} className="flex items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-200 hover:bg-white transition-all">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-5 group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-check text-sm"></i>
                </div>
                <span className="font-bold text-slate-800 tracking-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUSTAINABLE GROWTH */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Sustainable & Responsible Growth</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              Zias believes in responsible growth by building solutions that are sustainable, adaptable, and future-proof. Our approach balances innovation with reliability, ensuring long-term value for clients, partners, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[80px] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Join Us in Shaping <br /> the Future</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-14 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Partner with Zias Innovative Technologies Pvt Ltd and be part of a digital journey that focuses on growth, innovation, and long-term success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => navigate('#contact')}
                className="w-full sm:w-auto px-12 py-5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                Contact Us
              </button>
              <button 
                onClick={() => navigate('#home')}
                className="w-full sm:w-auto px-12 py-5 bg-blue-500/20 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
