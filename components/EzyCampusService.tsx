
import React from 'react';

import { VideoHeroBlock } from './VideoHeroBlock';

export const EzyCampusService: React.FC = () => {
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
      {/* 1. HERO SECTION - Updated with Side Imagery */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-100/30 -z-10 rounded-l-[100px] hidden lg:block"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-fade-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-600 text-[10px] font-bold tracking-widest uppercase mb-8">
                Next-Gen Institution ERP
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Ezy Campus
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium mb-8 md:mb-10 leading-relaxed">
                Smart ERP Solutions for Schools & Colleges
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-10 md:mb-12 leading-relaxed">
                Ezy Campus is a comprehensive ERP software solution developed by Zias Innovative Technologies Pvt Ltd, designed to streamline academic, administrative, and operational processes. Built with flexibility and security at its core.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => navigate('#contact')}
                  className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-xl shadow-purple-200"
                >
                  Request a Free Demo
                </button>
                <button 
                  onClick={() => scrollToSection('modules')}
                  className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all"
                >
                  Explore Features
                </button>
              </div>
            </div>

            {/* Added Imagery Component beside content */}
            <div className="lg:w-1/2 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-purple-200/40 rounded-[60px] blur-3xl group-hover:bg-purple-300/40 transition-colors duration-500"></div>
                <div className="relative overflow-hidden rounded-[50px] shadow-2xl border-4 border-white bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                    alt="Ezy Campus Dashboard Interface" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-purple-900/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden md:block animate-bounce-slow">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency</div>
                      <div className="text-lg font-bold text-slate-900">+45%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 VERTICAL HEAD INTRO VIDEO */}
      <VideoHeroBlock 
        title="Smart Campus Management"
        subtitle="Next-Gen Institution ERP"
        description="Ezy Campus simplifies the complexities of managing educational institutions by integrating academic management, administration, and finance into a single platform."
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
        speakerName="Academic Solutions Head"
        speakerTitle="ERP Specialist at ZIAS"
        outcomes={[
          "Efficiency: +45% reduction in manual work.",
          "Real-time Insights: Instant academic & financial data.",
          "High Security: Enterprise-grade encryption for student records."
        ]}
        ctaText="Request a Free Demo"
        onCtaClick={() => navigate('#contact')}
        themeColor="purple"
      />

      {/* 2. ABOUT EZY CAMPUS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">About Ezy Campus ERP</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Ezy Campus was created to simplify the complexities of managing educational institutions. By integrating academic management, administration, communication, and finance into a single platform.
                </p>
                <p>
                  Our system enables institutions to operate efficiently while enhancing the experience for students, staff, and parents through data-driven insights and automated workflows.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-slate-100 rounded-[60px] p-8 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Campus Management" 
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MODULES */}
      <section id="modules" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">ERP Modules</h2>
            <p className="text-slate-500">Modular architecture to fit any institution's workflow.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Administration & Ops', icon: 'fa-user-tie', desc: 'Institution setup, staff role management, and academic calendar workflows.' },
              { title: 'Student Management', icon: 'fa-user-graduate', desc: 'From admission to enrollment, attendance tracking, and performance analytics.' },
              { title: 'Communication Hub', icon: 'fa-comments', desc: 'Centralized messaging, alerts, and notifications for parents and staff.' },
              { title: 'Security & UX', icon: 'fa-shield-halved', desc: 'Role-based access control, secure data handling, and friendly dashboards.' },
              { title: 'Finance & Compliance', icon: 'fa-money-bill-transfer', desc: 'Fee management, automated invoicing, and compliance-ready reporting.' },
              { title: 'Customization', icon: 'fa-gears', desc: 'Institution-specific modules and scalable architecture for growth.' }
            ].map((m, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${m.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{m.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Why Institutions Choose Ezy Campus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Centralized Control', desc: 'Manage multiple branches or departments from a single dashboard.' },
              { title: 'Efficiency First', desc: 'Significant reduction in manual work and administrative errors.' },
              { title: 'Real-time Insights', desc: 'Make informed decisions with instant academic and financial data.' },
              { title: 'High Security', desc: 'Enterprise-grade encryption and data privacy for student records.' }
            ].map((b, i) => (
              <div key={i} className="flex p-8 bg-slate-50 rounded-3xl border border-slate-100 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mr-6 flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h4>
                  <p className="text-slate-500 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPLEMENTATION & SUPPORT */}
      <section className="py-24 bg-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Implementation, Training & Support</h2>
              <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                Zias Innovative Technologies ensures smooth onboarding through structured implementation and continuous expert support.
              </p>
              <div className="space-y-4">
                {[
                  'Requirement analysis & customization',
                  'System setup & data configuration',
                  'Staff training & onboarding',
                  'Ongoing technical support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                    <i className="fa-solid fa-circle-check text-purple-200"></i>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-[60px] border border-white/20 backdrop-blur-md">
              <div className="bg-white rounded-[40px] p-8 text-slate-900 shadow-2xl">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <i className="fa-solid fa-headset mr-3 text-purple-600"></i> Support SLA
                </h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-500">System Uptime</span>
                    <span className="font-bold text-emerald-600">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-500">Response Time</span>
                    <span className="font-bold text-slate-900">&lt; 2 Hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Training Hours</span>
                    <span className="font-bold text-slate-900">Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">How Ezy Campus Works</h2>
          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-8">
            {[
              { step: '01', title: 'Discussion', icon: 'fa-comments' },
              { step: '02', title: 'Free Demo', icon: 'fa-desktop' },
              { step: '03', title: 'Configuration', icon: 'fa-laptop-code' },
              { step: '04', title: 'Staff Training', icon: 'fa-users-gear' },
              { step: '05', title: 'Go-Live', icon: 'fa-circle-check' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl text-purple-600 mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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

      {/* 8. FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 p-16 md:p-24 rounded-[60px] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Transform Your Institution with Ezy Campus</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
            Empower your school or college with a smart ERP solution that simplifies operations and enhances educational outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-xl shadow-purple-900/20"
            >
              Request a Free Demo
            </button>
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
