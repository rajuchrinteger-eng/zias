
import React from 'react';

const softwareServices = [
  {
    icon: 'fa-laptop-code',
    title: 'Customized Applications',
    desc: 'Bespoke software built for scale.',
    items: ['Requirement analysis', 'Full-stack development', 'Secure architecture'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-cart-shopping',
    title: 'E-Commerce Development',
    desc: 'Retail-ready digital storefronts.',
    items: ['Shopify customization', 'Custom platforms', 'Payment integration'],
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Growth & Marketing',
    desc: 'Driving traffic and conversions.',
    items: ['SEO & SMO', 'Performance marketing', 'Conversion optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-pen-nib',
    title: 'UI/UX Design',
    desc: 'User-centric design frameworks.',
    items: ['Modern frameworks', 'Responsive design', 'Brand alignment'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-display',
    title: 'App Samples',
    desc: 'Proven real-world expertise.',
    items: ['Product demos', 'Use-case showcases', 'Live prototypes'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: 'fa-diagram-project',
    title: 'Project Execution',
    desc: 'Total visibility start to finish.',
    items: ['Process flow', 'Agile delivery', 'Post-launch support'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600'
  }
];

export const SoftwareDevelopment: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-10 md:mb-20 animate-fade-up text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">Software Development & E-Commerce Solutions</h2>
          <p className="text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed">
            Zias Innovative Technologies Pvt Ltd delivers custom-built software and e-commerce solutions focused on scalability, performance, and long-term value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {softwareServices.map((s, i) => (
            <div 
              key={i} 
              className="relative bg-white rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-up overflow-hidden group cursor-pointer flex flex-col" 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate('#service-software')}
            >
              {/* Image Header */}
              <div className="h-40 md:h-48 overflow-hidden relative">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors"></div>
                {/* Floating Icon Container */}
                <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-lg md:rounded-xl flex items-center justify-center text-white border border-white/30">
                  <i className={`fa-solid ${s.icon} text-sm md:text-base`}></i>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-5 md:pt-6 flex-grow flex flex-col">
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-5 md:mb-6 text-[13px] md:text-[15px]">
                  {s.desc}
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-[13px] md:text-sm text-slate-500">
                      <i className="fa-solid fa-check text-blue-500 mr-2 text-[10px] md:text-xs"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-xs md:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-auto">
                  Explore <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
