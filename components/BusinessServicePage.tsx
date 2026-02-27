
import React from 'react';

import { VideoHeroBlock } from './VideoHeroBlock';

export const BusinessServicePage: React.FC = () => {
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
      {/* 1. HERO SECTION - Updated with Side Imagery and Fix for Missing Image */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-fade-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-600 text-[10px] font-bold tracking-widest uppercase mb-8">
                Complete Business Enablement
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Marketing Business Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium mb-8 md:mb-10 leading-relaxed">
                Complete Business Support for Digital & Offline Growth
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-10 md:mb-12 leading-relaxed">
                Zias Innovative Technologies Pvt Ltd provides comprehensive business services designed to support retailers, brands, and enterprises across both online and offline operations. From marketing and creative services to AI-driven solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => navigate('#contact')}
                  className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all shadow-xl shadow-orange-200"
                >
                  Talk to Our Experts
                </button>
                <button 
                  onClick={() => scrollToSection('offerings')}
                  className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Side Imagery with reliable source and fixed dimensions */}
            <div className="lg:w-1/2 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative group min-h-[400px]">
                <div className="absolute -inset-8 bg-orange-100/50 rounded-full blur-3xl group-hover:bg-orange-200/50 transition-colors duration-500"></div>
                <div className="relative overflow-hidden rounded-[60px] shadow-2xl border-4 border-white bg-slate-200 aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic Business Growth" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-orange-900/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Floating Elements for visual interest */}
                <div className="absolute -top-6 -left-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-50 hidden md:flex items-center space-x-4 animate-bounce-slow">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-lg">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div className="text-sm font-bold text-slate-900">Growth Ready</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-50 hidden md:flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="text-sm font-bold text-slate-900">Expert Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 VERTICAL HEAD INTRO VIDEO */}
      <VideoHeroBlock 
        title="Strategic Business Growth"
        subtitle="Complete Business Enablement"
        description="We don't just run ads; we build high-converting funnels that turn strangers into loyal customers. Our approach is data-driven and ROI-focused."
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnail="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
        speakerName="Marketing Head"
        speakerTitle="Growth Strategist at ZIAS"
        outcomes={[
          "Performance Marketing Funnel: Awareness to Action.",
          "Avg. ROI: 4.5x across campaigns.",
          "CPA Reduction: 35% through optimization."
        ]}
        ctaText="Start a Discussion"
        onCtaClick={() => navigate('#contact')}
        themeColor="orange"
      />

      {/* 2. FUNNEL MODEL & ROI METRICS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Performance Marketing Funnel</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                We don't just run ads; we build high-converting funnels that turn strangers into loyal customers. Our approach is data-driven and ROI-focused.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: 'Awareness', value: '100%', color: 'bg-orange-600' },
                  { label: 'Interest', value: '60%', color: 'bg-orange-500' },
                  { label: 'Desire', value: '30%', color: 'bg-orange-400' },
                  { label: 'Action', value: '15%', color: 'bg-orange-300' }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-slate-700">{item.label}</span>
                      <span className="text-sm font-bold text-orange-600">{item.value}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {[
                { label: 'Avg. ROI', value: '4.5x', icon: 'fa-chart-line' },
                { label: 'CPA Reduction', value: '35%', icon: 'fa-arrow-down' },
                { label: 'Lead Quality', value: '92%', icon: 'fa-thumbs-up' },
                { label: 'Retention', value: '78%', icon: 'fa-users-rotate' }
              ].map((metric, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-xl mx-auto mb-4">
                    <i className={`fa-solid ${metric.icon}`}></i>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE WORKFLOW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Performance Marketing Workflow</h2>
            <p className="text-slate-500">Our systematic approach to delivering measurable business growth.</p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-8">
            {[
              { step: '01', title: 'Audit', icon: 'fa-magnifying-glass' },
              { step: '02', title: 'Strategy', icon: 'fa-chess-pawn' },
              { step: '03', title: 'Creative', icon: 'fa-wand-magic-sparkles' },
              { step: '04', title: 'Launch', icon: 'fa-paper-plane' },
              { step: '05', title: 'Optimize', icon: 'fa-gauge-high' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-20 h-20 bg-white rounded-[32px] flex items-center justify-center text-3xl text-orange-600 mx-auto mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.step}</div>
                {i < 4 && <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-px bg-slate-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE CATEGORIES */}
      <section id="offerings" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Business Service Offerings</h2>
            <p className="text-slate-500">Tailored support categories designed for modern enterprises.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Marketing & Commerce', icon: 'fa-bullhorn', desc: 'Online & offline marketing strategies, campaign planning, and business growth enablement.' },
              { title: 'Creative Services', icon: 'fa-palette', desc: 'Digital banners, branding creatives, marketing visual assets, and high-impact presentation materials.' },
              { title: 'Business Enablement', icon: 'fa-shop', desc: 'End-to-end support for retailers including digital presence setup and store branding assistance.' },
              { title: 'Mentorship & Training', icon: 'fa-chalkboard-user', desc: 'Digital marketing mentorship and resource training programs for internal business teams.' },
              { title: 'AI Services', icon: 'fa-robot', desc: 'AI-driven business solutions for data-driven decision support and intelligent process optimization.' },
              { title: 'Workflow Automation', icon: 'fa-bolt-lightning', desc: 'Custom automation solutions designed to enhance operational efficiency and reduce manual work.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 text-xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUPPORT APPROACH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">Our Support Approach</h2>
          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-8">
            {[
              { step: '01', title: 'Understanding', icon: 'fa-handshake-angle' },
              { step: '02', title: 'Strategy', icon: 'fa-chess' },
              { step: '03', title: 'Execution', icon: 'fa-gears' },
              { step: '04', title: 'Monitoring', icon: 'fa-chart-line' },
              { step: '05', title: 'Improvement', icon: 'fa-arrow-trend-up' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl text-orange-600 mx-auto mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.step}</div>
                {i < 4 && <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-slate-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE ZIAS */}
      <section className="py-24 bg-slate-900 text-white rounded-[80px] mx-6">
        <div className="container mx-auto px-12">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Zias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'One-Stop Solution', desc: 'A unified partner for all your business, marketing, and technology needs.' },
              { title: 'Experienced Team', desc: 'Experts across retail, design, digital marketing, and automation.' },
              { title: 'Integrated Support', desc: 'Seamlessly blending creative assets with performance-driven technology.' },
              { title: 'AI-Driven Solutions', desc: 'Future-ready tools that leverage data for smarter business decisions.' },
              { title: 'Process Efficiency', desc: 'Operational automation that saves time and scales performance.' },
              { title: 'Partnership Mindset', desc: 'We grow when you grow—focusing on long-term value and trust.' }
            ].map((item, i) => (
              <div key={i} className="flex space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO CAN BENEFIT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Who Can Benefit</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Retailers & Brands', icon: 'fa-bag-shopping' },
              { name: 'Startups & SMEs', icon: 'fa-rocket' },
              { name: 'Growing Enterprises', icon: 'fa-building-columns' },
              { name: 'Digital Explorers', icon: 'fa-compass' }
            ].map((ind, i) => (
              <div key={i} className="text-center group p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-slate-800 mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${ind.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-16 md:p-24 rounded-[60px] relative overflow-hidden shadow-2xl shadow-slate-200/50">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-orange-50/50 to-blue-50/50"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 relative z-10">Let’s Strengthen Your Business</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Whether you need marketing support, creative services, AI solutions, or business automation, Zias Innovative Technologies is your trusted partner for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              Contact Us
            </button>
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
