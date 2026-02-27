
import React from 'react';

const services = [
  { title: 'Custom App Development', icon: 'fa-mobile-screen', desc: 'Bespoke mobile and web applications tailored to your specific business needs.' },
  { title: 'E-commerce Solutions', icon: 'fa-cart-shopping', desc: 'Scalable marketplaces with integrated payments, logistics, and inventory.' },
  { title: 'Software Products', icon: 'fa-box-open', desc: 'Ready-to-deploy enterprise tools for specialized industry verticals.' },
  { title: 'Marketing Services', icon: 'fa-bullhorn', desc: 'Creative strategy, branding, and performance marketing to drive growth.' },
  { title: 'AI & Automation', icon: 'fa-robot', desc: 'Leveraging machine learning to automate repetitive tasks and gain insights.' },
  { title: 'Training & Mentorship', icon: 'fa-users-gear', desc: 'Bridging the skill gap with professional development and tech coaching.' }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technology & Business Services</h2>
            <p className="text-slate-600">End-to-end capabilities that transform challenges into competitive advantages.</p>
          </div>
          <button className="px-8 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-all">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <a href="#" className="text-sm font-bold text-blue-600 inline-flex items-center">
                Learn More <i className="fa-solid fa-chevron-right ml-1.5 text-[10px]"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
