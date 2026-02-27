
import React from 'react';

export const CapabilityIcons: React.FC = () => {
  const capabilities = [
    {
      id: 'ai',
      title: 'AI & Automation',
      icon: 'fa-robot',
      desc: 'Intelligent workflows and predictive analytics to drive business efficiency.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hash: '#ai-automation'
    },
    {
      id: 'scaling',
      title: 'Global Scaling',
      icon: 'fa-globe',
      desc: 'Infrastructure built to support rapid expansion across borders and markets.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hash: '#global-scaling'
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      icon: 'fa-shield-halved',
      desc: 'Bank-grade security protocols ensuring your data and operations are protected.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      hash: '#enterprise-security'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Core Enterprise Capabilities</h2>
          <p className="text-sm md:text-base text-slate-500">Click to explore our deep-dive pages on how we handle the most critical aspects of modern business technology.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {capabilities.map((c) => (
            <div 
              key={c.id}
              onClick={() => { window.location.hash = c.hash; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className={`w-16 h-16 ${c.bgColor} ${c.color} rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${c.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{c.desc}</p>
              <div className={`flex items-center font-bold text-sm ${c.color}`}>
                View Deep Dive <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
