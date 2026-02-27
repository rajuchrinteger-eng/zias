
import React from 'react';

const platforms = [
  {
    name: 'SeemattiStores.com',
    subtitle: 'Unified Commerce Cloud',
    desc: 'Our flagship B2C/B2B platform powering the future of retail with smart logistics and AI-driven curation.',
    icon: 'fa-bag-shopping',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-200',
    hash: '#service-seemattistores',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'E-Academy',
    subtitle: 'Digital Skills Platform',
    desc: 'A comprehensive digital learning ecosystem bridging skills and opportunities for the next-gen workforce.',
    icon: 'fa-graduation-cap',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-200',
    hash: '#service-eacademy',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'EzyCampus ERP',
    subtitle: 'Institution Operating System',
    desc: 'Revolutionizing academic management with seamless operations, finance tracking, and role-based access.',
    icon: 'fa-school',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'hover:border-purple-200',
    hash: '#service-ezycampus',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600'
  }
];

export const Ecosystem: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 animate-fade-up">
          <div className="inline-block px-3 py-1 mb-3 md:mb-4 text-[8px] md:text-[10px] font-bold tracking-widest text-indigo-500 uppercase bg-indigo-50 rounded-full">
            The Zias Ecosystem
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">One Foundation.<br/>Multiple Growth Engines.</h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed">
            Our interconnected platforms allow enterprises to scale commerce, educate teams, and streamline operations from a single unified partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {platforms.map((p, i) => (
            <div 
              key={i} 
              className={`relative bg-white rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-up overflow-hidden group cursor-pointer flex flex-col ${p.border}`} 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate(p.hash)}
            >
              {/* Product Header */}
              <div className="p-6 md:p-8 pb-0">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${p.bg} ${p.color} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{p.name}</h4>
                <p className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${p.color} mb-3 md:mb-4 opacity-80`}>{p.subtitle}</p>
                <p className="text-slate-500 leading-relaxed text-xs md:text-sm mb-5 md:mb-6">
                  {p.desc}
                </p>
              </div>
              
              {/* Product Preview / Visual */}
              <div className="mt-auto relative h-48 overflow-hidden mx-4 mb-4 rounded-2xl">
                 <img 
                   src={p.image} 
                   alt={p.name} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-2xl" 
                 />
                 <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                 
                 {/* Hover Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm rounded-2xl">
                    <span className="px-6 py-2 bg-white text-slate-900 rounded-full text-sm font-bold shadow-lg">
                      View Platform
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Badge */}
        <div className="mt-16 text-center animate-fade-up">
           <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border border-slate-100">
             <div className="flex -space-x-2">
               <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"></div>
               <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white"></div>
               <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white"></div>
             </div>
             <span className="text-sm font-bold text-slate-700">Seamlessly Integrated Architecture</span>
           </div>
        </div>

      </div>
    </section>
  );
};
