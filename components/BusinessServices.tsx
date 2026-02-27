
import React from 'react';

const businessServices = [
  {
    icon: 'fa-bullhorn',
    title: 'Marketing Support',
    desc: 'Online & offline strategies.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-chart-pie',
    title: 'Marketing Tech',
    desc: 'Digital tools for automation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-palette',
    title: 'Creative Services',
    desc: 'Impactful visual design.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-shop',
    title: 'E-Commerce Ops',
    desc: 'Store & branding assistance.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Mentorship',
    desc: 'Knowledge transfer.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-robot',
    title: 'AI Solutions',
    desc: 'Process optimization.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-bolt-lightning',
    title: 'Automation',
    desc: 'Streamlining workflows.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
  }
];

export const BusinessServices: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 animate-fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">Complete Business Support</h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed">
            End-to-end business, marketing, and automation services to support brands across both online and offline channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {businessServices.map((s, i) => (
            <div 
              key={i} 
              className="group relative rounded-[24px] md:rounded-[30px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up aspect-[4/5]"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate('#service-business')}
            >
              <img 
                src={s.image} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900/90 group-hover:via-slate-900/60 transition-colors"></div>
              
              <div className="absolute top-4 right-4 md:top-5 md:right-5 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20">
                <i className={`fa-solid ${s.icon} text-xs md:text-sm`}></i>
              </div>

              <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
                <h4 className="text-base md:text-lg font-bold text-white mb-1">{s.title}</h4>
                <p className="text-slate-300 text-[10px] md:text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
          {/* View All Card */}
          <div 
             onClick={() => navigate('#service-business')}
             className="group relative rounded-[24px] md:rounded-[30px] overflow-hidden cursor-pointer bg-slate-100 border border-slate-200 flex flex-col items-center justify-center aspect-[4/5] hover:bg-slate-200 transition-colors"
          >
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-900 text-lg md:text-xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
               <i className="fa-solid fa-arrow-right"></i>
             </div>
             <span className="text-sm md:text-base font-bold text-slate-900">View All Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};
