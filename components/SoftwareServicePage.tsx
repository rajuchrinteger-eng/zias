
import React from 'react';

import { VideoHeroBlock } from './VideoHeroBlock';

export const SoftwareServicePage: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - Updated with Side Imagery and Dark Theme */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000" 
            alt="Software Development" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="w-full lg:w-1/2 animate-fade-up text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-5 md:mb-8">
                Custom Engineering Excellence
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-[1.15]">
                Software Development
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-8 md:mb-10 leading-relaxed">
                Custom Digital Solutions Built for Performance & Growth.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-10 md:mb-12 leading-relaxed">
                Zias Innovative Technologies Pvt Ltd delivers customized software development services designed to meet unique business requirements. From mobile applications to scalable e-commerce platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start">
                <button 
                  onClick={() => navigate('#contact')}
                  className="px-8 md:px-10 py-3.5 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-xl shadow-indigo-900/40 text-sm md:text-base"
                >
                  Start a Project
                </button>
                <button 
                  onClick={() => navigate('#contact')}
                  className="px-8 md:px-10 py-3.5 md:py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all text-sm md:text-base"
                >
                  Request a Consultation
                </button>
              </div>
            </div>

            {/* Added Imagery Component beside content as per screenshot */}
            <div className="w-full lg:w-1/2 relative animate-fade-up mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[80px] md:blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
                <div className="relative overflow-hidden rounded-3xl md:rounded-[60px] border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                    alt="Custom Engineering" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  {/* Overlay for glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Code Snippet Decoration */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 p-3 md:p-4 bg-slate-900/80 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 shadow-xl hidden sm:block group-hover:-translate-y-2 transition-transform">
                    <div className="flex space-x-1.5 mb-2 md:mb-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/50"></div>
                    </div>
                    <code className="text-[9px] md:text-[10px] text-indigo-300 font-mono">
                      const solution = await Zias.engineer();
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST VIDEO & AUTHORITY BLOCK */}
      <VideoHeroBlock 
        title="Engineering Excellence"
        subtitle="Custom Engineering Excellence"
        description="Our engineering philosophy is simple: we don't just write code; we architect solutions that scale with your ambition. Every line is a commitment to your business outcome."
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnail="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
        speakerName="Engineering Head"
        speakerTitle="Lead Architect at ZIAS"
        outcomes={[
          "Agile-led development with continuous integration.",
          "Measurable KPIs for every software module.",
          "Zero-trust security standards in every line of code."
        ]}
        ctaText="Start a Discussion"
        onCtaClick={() => navigate('#contact')}
        themeColor="indigo"
      />

      {/* 3. STEP-BY-STEP WORKFLOW & DIAGRAM SPACE */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Our Engineering Workflow</h2>
            <p className="text-sm md:text-base text-slate-500">A transparent, step-by-step journey from concept to deployment.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              {[
                { step: '01', title: 'Discovery & Audit', desc: 'Deep dive into your current tech stack and business requirements.' },
                { step: '02', title: 'Architecture Design', desc: 'Defining the blueprint for scalability, security, and performance.' },
                { step: '03', title: 'Agile Development', desc: 'Sprints-based coding with regular demos and feedback loops.' },
                { step: '04', title: 'Rigorous QA', desc: 'Automated and manual testing to ensure zero-defect delivery.' }
              ].map((w, i) => (
                <div key={i} className="flex items-start space-x-4 md:space-x-6 group">
                  <div className="text-2xl md:text-3xl font-bold text-slate-200 group-hover:text-indigo-600 transition-colors">{w.step}</div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{w.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-12 rounded-[60px] shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16"></div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Workflow Visualization</h4>
              {/* Placeholder for actual diagram */}
              <div className="aspect-square bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-center p-8">
                <div>
                  <i className="fa-solid fa-diagram-project text-4xl mb-4"></i>
                  <p className="text-xs font-medium uppercase tracking-widest">Interactive Diagram Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOOLS & TECH STACK BLOCK */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 md:mb-16 text-center">Our Enterprise Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { name: 'React / Next.js', icon: 'fa-react' },
              { name: 'Node.js', icon: 'fa-node-js' },
              { name: 'Python / AI', icon: 'fa-python' },
              { name: 'AWS / Azure', icon: 'fa-aws' },
              { name: 'PostgreSQL', icon: 'fa-database' },
              { name: 'Docker / K8s', icon: 'fa-docker' }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                <i className={`fa-brands ${tech.icon} text-2xl md:text-3xl text-slate-400 group-hover:text-indigo-600 mb-3 md:mb-4 transition-colors`}></i>
                <span className="text-[10px] md:text-xs font-bold text-slate-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE OFFERINGS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">What We Build</h2>
            <p className="text-sm md:text-base text-slate-500">Comprehensive technology services for a digital-first world.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Custom App Development', icon: 'fa-mobile-screen-button', desc: 'Full-stack mobile & web applications with scalable architecture and secure standards.' },
              { title: 'E-Commerce Development', icon: 'fa-cart-plus', desc: 'Shopify customization and custom platform development for optimized storefronts.' },
              { title: 'Growth & Marketing Support', icon: 'fa-arrow-trend-up', desc: 'Marketing-ready platform setup and conversion optimization strategies.' },
              { title: 'Website Design Models', icon: 'fa-bezier-curve', desc: 'Modern UI/UX layouts and responsive brand-aligned interfaces.' },
              { title: 'App Showcase & Samples', icon: 'fa-layer-group', desc: 'Explore our feature demonstrations and real-world application use cases.' },
              { title: 'Digital Business Tools', icon: 'fa-toolbox', desc: 'Business-ready software modules and continuous platform enhancements.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 rounded-xl md:rounded-2xl flex items-center justify-center text-indigo-600 text-lg md:text-xl mb-5 md:mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{s.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEVELOPMENT PROCESS FLOW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-12 md:mb-20 text-center">Our Development Process</h2>
          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-6 md:gap-8">
            {[
              { step: '01', title: 'Analysis', icon: 'fa-magnifying-glass-chart' },
              { step: '02', title: 'Planning', icon: 'fa-pen-ruler' },
              { step: '03', title: 'Execution', icon: 'fa-code' },
              { step: '04', title: 'QA Testing', icon: 'fa-vial-circle-check' },
              { step: '05', title: 'Deployment', icon: 'fa-cloud-arrow-up' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-full flex items-center justify-center text-xl md:text-2xl text-indigo-600 mx-auto mb-4 md:mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1 md:mb-2">{p.title}</h4>
                <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.step}</div>
                {i < 4 && <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-slate-100"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE TRUST BLOCK */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">Enterprise Trust</h2>
            <p className="text-sm md:text-base text-slate-500">Validated by global leaders and rigorous engineering standards.</p>
          </div>

          {/* Logo Strip */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale mb-12 md:mb-20">
            <div className="flex items-center space-x-2"><i className="fa-brands fa-aws text-2xl md:text-3xl"></i><span className="font-bold text-lg md:text-xl">CloudTech</span></div>
            <div className="flex items-center space-x-2"><i className="fa-brands fa-google text-2xl md:text-3xl"></i><span className="font-bold text-lg md:text-xl">EduSuite</span></div>
            <div className="flex items-center space-x-2"><i className="fa-brands fa-shopify text-2xl md:text-3xl"></i><span className="font-bold text-lg md:text-xl">RetailPro</span></div>
            <div className="flex items-center space-x-2"><i className="fa-brands fa-stripe text-2xl md:text-3xl"></i><span className="font-bold text-lg md:text-xl">PayGlobal</span></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="p-8 md:p-10 bg-white rounded-3xl md:rounded-[40px] border border-slate-100 shadow-xl">
              <div className="flex text-yellow-400 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-[10px]"></i>)}
              </div>
              <p className="text-base md:text-lg text-slate-600 italic mb-6 md:mb-8 leading-relaxed">
                "ZIAS delivered a highly complex ERP migration for our institution with zero downtime. Their technical depth is truly impressive."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-full mr-3 md:mr-4"></div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 leading-none">Sarah Jenkins</h4>
                  <p className="text-[10px] md:text-xs text-slate-500 mt-1">CTO, Global Edu Group</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10 bg-white rounded-3xl md:rounded-[40px] border border-slate-100 shadow-xl">
              <div className="flex text-yellow-400 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-[10px]"></i>)}
              </div>
              <p className="text-base md:text-lg text-slate-600 italic mb-6 md:mb-8 leading-relaxed">
                "The custom e-commerce solution built by ZIAS has allowed us to scale our B2B operations by 300% in just six months."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-full mr-3 md:mr-4"></div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 leading-none">Michael Chen</h4>
                  <p className="text-[10px] md:text-xs text-slate-500 mt-1">Director of Ops, RetailFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE ZIAS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-12 md:mb-16 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Customized Solutions', desc: 'Tailored specifically to unique business needs.' },
              { title: 'Domain Expertise', desc: 'Strong focus on e-commerce & retail applications.' },
              { title: 'Process-Driven', desc: 'Clarity and transparency throughout development.' },
              { title: 'Scalable Architecture', desc: 'Built to grow as your business scales.' },
              { title: 'Security First', desc: 'Enterprise-grade standards in every line of code.' },
              { title: 'Long-term Partnership', desc: 'Reliable support and continuous enhancements.' }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <i className="fa-solid fa-circle-check text-indigo-600 mb-3 md:mb-4 block text-lg md:text-xl"></i>
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1 md:mb-2">{item.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-12 md:mb-16 text-center">Industries We Support</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Retail & E-Commerce', icon: 'fa-basket-shopping' },
              { name: 'Education', icon: 'fa-book-open-reader' },
              { name: 'Startups & SMEs', icon: 'fa-rocket' },
              { name: 'Enterprises', icon: 'fa-building-shield' }
            ].map((ind, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-[30px] flex items-center justify-center text-2xl md:text-3xl text-slate-800 mx-auto mb-4 md:mb-6 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all">
                  <i className={`fa-solid ${ind.icon}`}></i>
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-800">{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto bg-indigo-600 p-10 md:p-24 rounded-[40px] md:rounded-[60px] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 relative z-10">Let’s Build Your Software Solution</h2>
          <p className="text-sm md:text-lg text-indigo-100 mb-8 md:mb-12 max-w-2xl mx-auto relative z-10">
            Whether you need a custom application, e-commerce platform, or software product, Zias Innovative Technologies is ready to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative z-10">
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-indigo-600 rounded-full font-bold transition-all shadow-xl text-sm md:text-base"
            >
              Start a Project
            </button>
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-indigo-500/50 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all text-sm md:text-base"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
