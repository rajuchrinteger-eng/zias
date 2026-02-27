
import React from 'react';

import { BCaptureModule } from './BCaptureModule';

import { VideoHeroBlock } from './VideoHeroBlock';

export const SeemattiStoresService: React.FC = () => {
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
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Retail Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-8">
            Unified Commerce Platform
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 tracking-tight">
            SeemattiStores.com
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-8 md:mb-10 max-w-2xl leading-relaxed">
            A Unified E-Commerce Platform for Fashion & Lifestyle Businesses.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-10 md:mb-12 max-w-3xl leading-relaxed">
            SeemattiStores.com is a digital commerce initiative by Zias Innovative Technologies Pvt Ltd, built on the strong retail legacy of the Seematti Group with over 75 years of experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => scrollToSection('features')}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-xl shadow-blue-900/20"
            >
              Explore the Platform
            </button>
            <button 
              onClick={() => navigate('#contact')}
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* 1.5 VERTICAL HEAD INTRO VIDEO */}
      <VideoHeroBlock 
        title="Unified Fashion Commerce"
        subtitle="Unified Commerce Platform"
        description="SeemattiStores.com was conceived to eliminate customer hardship by bringing fashion and lifestyle products online with a seamless shopping experience."
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnail="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"
        speakerName="Retail Solutions Head"
        speakerTitle="Commerce Architect at ZIAS"
        outcomes={[
          "B2C & B2B Models: Flexible retail architecture.",
          "75+ Years Legacy: Built on strong retail expertise.",
          "Lead Generation Engine: Designed for conversion."
        ]}
        ctaText="Request a Demo"
        onCtaClick={() => navigate('#contact')}
        themeColor="blue"
      />

      {/* 2. ABOUT THE PLATFORM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">About SeemattiStores.com</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  SeemattiStores.com was conceived to eliminate customer hardship by bringing fashion and lifestyle products online with a seamless shopping experience. 
                </p>
                <p>
                  The platform supports both individual customers and business buyers, ensuring flexibility, scalability, and operational efficiency for retail growth. It is designed to support modern digital commerce requirements including lead generation, marketing optimization, and customer engagement.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-blue-50 rounded-[80px] flex items-center justify-center p-12">
                <div className="text-blue-600 text-[180px] opacity-10 absolute"><i className="fa-solid fa-cart-shopping"></i></div>
                <img 
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800" 
                  alt="Fashion Commerce" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS MODELS SUPPORTED */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">B2C & B2B Commerce Models</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* B2C */}
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i className="fa-solid fa-user-tag"></i>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">B2C Commerce</h4>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">Business to Consumer</p>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center"><i className="fa-solid fa-check text-blue-500 mr-3"></i> Online fashion & lifestyle retail</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-blue-500 mr-3"></i> Seamless product discovery</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-blue-500 mr-3"></i> Mobile-optimized experience</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-blue-500 mr-3"></i> Secure payment & order management</li>
              </ul>
            </div>
            
            {/* B2B */}
            <div className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-2xl mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <i className="fa-solid fa-building"></i>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">B2B Commerce</h4>
              <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">Business to Business</p>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center"><i className="fa-solid fa-check text-indigo-500 mr-3"></i> Bulk ordering & wholesale pricing</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-indigo-500 mr-3"></i> Business account management</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-indigo-500 mr-3"></i> Lead-driven trade engagement</li>
                <li className="flex items-center"><i className="fa-solid fa-check text-indigo-500 mr-3"></i> Long-term partner relationship building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Platform Features</h2>
            <p className="text-lg text-slate-500">Advanced technology designed for the future of retail.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'End-to-End Solution', icon: 'fa-cart-shopping', desc: 'Complete storefront, catalog, cart, checkout, and order management.' },
              { title: 'Lead Generation Engine', icon: 'fa-chart-line', desc: 'Designed to capture and convert leads for both B2C & B2B growth.' },
              { title: 'SEO & SMO Optimization', icon: 'fa-magnifying-glass', desc: 'Optimized for high search visibility and social media reach.' },
              { title: 'Performance Marketing', icon: 'fa-bullhorn', desc: 'Campaign-driven growth through paid and organic strategies.' },
              { title: 'Analytics & Insights', icon: 'fa-chart-pie', desc: 'Track customer behavior and sales performance in real-time.' },
              { title: 'Scalable Infrastructure', icon: 'fa-server', desc: 'Built to handle peak holiday traffic without any performance drops.' }
            ].map((f, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MARKETING & GROWTH SUPPORT */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Digital Marketing & Growth Enablement</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                SeemattiStores.com is not just an e-commerce platform—it is a growth engine. Zias Innovative Technologies supports the platform with integrated marketing strategies.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'SEO Strategy Execution',
                  'Performance Marketing',
                  'Conversion Optimization',
                  'Customer Engagement'
                ].map((s, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                    <i className="fa-solid fa-circle-check text-blue-300"></i>
                    <span className="text-sm font-semibold">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-1 rounded-[40px] border border-white/20 backdrop-blur-md">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Marketing" 
                className="rounded-[38px] opacity-90 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <BCaptureModule />

      {/* 6. WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Why Choose SeemattiStores.com?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '75+ years of retail legacy through Seematti Group',
              'Proven experience in fashion & lifestyle retail',
              'Scalable B2C and B2B architecture',
              'Marketing-driven growth approach',
              'Trusted technology & operational expertise',
              'Seamless integration with retail workflows'
            ].map((text, i) => (
              <div key={i} className="flex items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="font-bold text-slate-800 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS FLOW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">How It Works</h2>
          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-12">
            {[
              { step: '01', title: 'Platform Setup', icon: 'fa-sliders' },
              { step: '02', title: 'Catalog Enablement', icon: 'fa-boxes-stacked' },
              { step: '03', title: 'Marketing Launch', icon: 'fa-rocket' },
              { step: '04', title: 'Order Management', icon: 'fa-truck-fast' },
              { step: '05', title: 'Growth Scaling', icon: 'fa-arrow-up-right-dots' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl text-slate-800 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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

      {/* 9. FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 p-16 md:p-24 rounded-[60px] text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready to Build or Scale Your E-Commerce Business?</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
            Partner with Zias Innovative Technologies and leverage SeemattiStores.com to grow your fashion or lifestyle business with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all"
            >
              Contact Us
            </button>
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
