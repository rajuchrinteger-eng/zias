
import React from 'react';

export const BCaptureModule: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6">
            Proprietary Module
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">BCapture Module</h2>
          <p className="text-slate-500">The intelligent engine driving lead generation and business engagement across the ZIAS ecosystem.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {[
            { title: 'Lead Capture', icon: 'fa-magnet', desc: 'Multi-channel lead acquisition with automated source tracking.' },
            { title: 'Inquiry Management', icon: 'fa-list-check', desc: 'Smart routing and prioritization of business inquiries.' },
            { title: 'Engagement Tracking', icon: 'fa-eye', desc: 'Real-time monitoring of prospect interactions and behavior.' },
            { title: 'Outcome Analytics', icon: 'fa-chart-pie', desc: 'Deep insights into conversion rates and ROI metrics.' }
          ].map((m, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 text-xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i className={`fa-solid ${m.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{m.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Flow Visual */}
        <div className="bg-slate-900 rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-16 text-center">BCapture Process Flow</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto">
              {[
                { label: 'Capture', icon: 'fa-download' },
                { label: 'Qualify', icon: 'fa-filter' },
                { label: 'Route', icon: 'fa-route' },
                { label: 'Engage', icon: 'fa-comments' },
                { label: 'Convert', icon: 'fa-check-double' }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center group relative flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-xl mb-4 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                    <i className={`fa-solid ${step.icon}`}></i>
                  </div>
                  <div className="font-bold text-sm">{step.label}</div>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-8 left-[calc(100%-20px)] w-[calc(100%-40px)] h-px bg-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
