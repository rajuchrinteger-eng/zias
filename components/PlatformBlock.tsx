
import React from 'react';

export const PlatformBlock: React.FC = () => {
  const platforms = [
    {
      id: 'b2b',
      title: 'B2B Platform',
      icon: 'fa-building-columns',
      desc: 'Enterprise-grade wholesale ecosystems with bulk ordering, credit management, and vendor portals.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'b2c',
      title: 'B2C Platform',
      icon: 'fa-shopping-bag',
      desc: 'High-performance retail storefronts designed for speed, conversion, and seamless customer journeys.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'd2c',
      title: 'D2C Platform',
      icon: 'fa-rocket',
      desc: 'Direct-to-consumer mastery with brand-first storytelling, loyalty integration, and data ownership.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
            Multi-Model Commerce
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">B2B / B2C / D2C Excellence</h2>
          <p className="text-sm md:text-base text-slate-500">We build specialized platforms for every business model, ensuring your digital presence is optimized for your specific audience.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {platforms.map((p) => (
            <div 
              key={p.id}
              onClick={() => { window.location.hash = `#service-seemattistores`; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group bg-white p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-500 cursor-pointer text-center"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 ${p.bgColor} ${p.color} rounded-2xl md:rounded-[32px] flex items-center justify-center text-2xl md:text-3xl mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <i className={`fa-solid ${p.icon}`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{p.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">{p.desc}</p>
              <div className={`inline-flex items-center font-bold text-xs md:text-sm ${p.color} group-hover:underline`}>
                Explore Model <i className="fa-solid fa-arrow-right ml-2 text-[10px] md:text-xs"></i>
              </div>
            </div>
          ))}
        </div>

        {/* D2C Positioning Highlight */}
        <div className="mt-12 md:mt-20 p-8 md:p-12 bg-white rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1556740734-7f96267b118a?auto=format&fit=crop&q=80&w=600" 
                alt="D2C Mastery" 
                className="relative rounded-2xl md:rounded-[32px] shadow-xl w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Strong D2C Positioning</h3>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed">
              In the age of digital directness, ZIAS empowers brands to own their customer data and experience. Our D2C platforms are built to scale from first sale to global dominance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {['Brand Storytelling', 'Customer Loyalty', 'Data Ownership', 'Global Scaling'].map((item, i) => (
                <div key={i} className="flex items-center justify-center md:justify-start text-xs md:text-sm font-bold text-slate-700">
                  <i className="fa-solid fa-circle-check text-orange-500 mr-2"></i> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
