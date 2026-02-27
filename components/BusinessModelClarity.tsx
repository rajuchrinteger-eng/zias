
import React from 'react';

export const BusinessModelClarity: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/30 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">How ZIAS Delivers Value</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We bridge the gap between traditional business legacy and modern digital ecosystems through a structured value delivery model.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {[
            {
              title: "What We Do",
              desc: "Digital Transformation & Enterprise SaaS",
              icon: "fa-rocket",
              color: "bg-blue-600",
              items: ["E-Commerce Ecosystems", "Education ERPs", "Custom Engineering", "AI Automation"]
            },
            {
              title: "Who We Serve",
              desc: "From Startups to Global Enterprises",
              icon: "fa-users",
              color: "bg-indigo-600",
              items: ["Retail Brands", "Educational Institutions", "SMEs & Startups", "Government Bodies"]
            },
            {
              title: "Value Delivery",
              desc: "Heritage-Led Innovation",
              icon: "fa-gem",
              color: "bg-emerald-600",
              items: ["75+ Years Domain Expertise", "Scalable Tech Stack", "User-Centric Design", "Data-Driven Insights"]
            },
            {
              title: "Engagement Flow",
              desc: "Seamless Partnership Journey",
              icon: "fa-handshake",
              color: "bg-orange-600",
              items: ["Discovery & Audit", "Strategic Roadmap", "Agile Execution", "Continuous Scaling"]
            }
          ].map((block, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col hover:translate-y-[-10px] transition-all duration-500">
              <div className={`w-16 h-16 ${block.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg`}>
                <i className={`fa-solid ${block.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{block.title}</h3>
              <p className="text-sm text-slate-500 font-medium mb-8">{block.desc}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {block.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600">
                    <i className="fa-solid fa-circle-check text-emerald-500 mr-3 text-[10px]"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-2xl font-bold text-sm transition-all flex items-center justify-center group">
                Learn More <i className="fa-solid fa-arrow-right ml-2 text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Engagement Flow Visual */}
        <div className="mt-24 bg-slate-900 rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-16 text-center">Our Strategic Engagement Flow</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
              {[
                { step: "01", label: "Consult", icon: "fa-comments" },
                { step: "02", label: "Architect", icon: "fa-drafting-compass" },
                { step: "03", label: "Build", icon: "fa-code" },
                { step: "04", label: "Deploy", icon: "fa-rocket" },
                { step: "05", label: "Scale", icon: "fa-chart-line" }
              ].map((flow, i) => (
                <div key={i} className="flex flex-col items-center group relative">
                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                    <i className={`fa-solid ${flow.icon}`}></i>
                  </div>
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">{flow.step}</div>
                  <div className="font-bold">{flow.label}</div>
                  
                  {i < 4 && (
                    <div className="hidden md:block absolute top-10 left-[100%] w-[calc(100%-20px)] h-px bg-white/10"></div>
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
