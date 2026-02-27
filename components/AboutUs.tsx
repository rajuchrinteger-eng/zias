
import React from 'react';
import { ImageGridGallery } from './ImageGridGallery';
import { VideoTestimonialGallery } from './VideoTestimonialGallery';

export const AboutUs: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center animate-fade-up">
          <div className="inline-flex items-center px-4 md:px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 text-[8px] md:text-[10px] font-bold tracking-[0.15em] uppercase mb-6 md:mb-10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 md:mr-2.5"></span>
            Heritage Led Transformation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-6 md:mb-8 tracking-tight">
            Building Digital Solutions on a<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">75+ Year Foundation of Trust</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            Zias Innovative Technologies Pvt Ltd blends decades of retail experience with modern technology to help businesses, institutions, and communities grow digitally.
          </p>
        </div>
      </section>

      {/* 2. OUR ROOTS - THE SEEMATTI LEGACY */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="animate-fade-up text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-5 md:mb-8 tracking-tight">Our Roots: The Seematti Story</h2>
              <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed mb-5">
                The journey of Zias Innovative Technologies begins with Seematti, a trusted retail brand founded over 75 years ago in Kumbakonam. Over generations, Seematti has been synonymous with quality, reliability, and customer service.
              </p>
              <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                This deep-rooted understanding of retail operations, customer expectations, and business sustainability forms the foundation of everything Zias builds today. We don't just build software; we build solutions that work in the real world.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 md:space-x-8">
                <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1">1948</div>
                  <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Founded</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1">75+</div>
                  <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Legacy</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-up mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
               <div className="absolute -top-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
               <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" alt="Legacy" className="rounded-3xl md:rounded-[60px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE BIRTH OF ZIAS - TIMELINE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Why Zias Was Created</h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-500">The COVID-19 pandemic reshaped how businesses and customers interact. We rose to the challenge.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16">
              {/* Point 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] text-center md:text-right animate-fade-up">
                  <h4 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">Traditional Excellence</h4>
                  <p className="text-xs md:text-base text-slate-500">Decades of building trust through high-touch retail and physical commerce.</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center z-10 shadow-sm text-blue-600 font-bold text-[10px] md:text-sm my-4 md:my-0">1948</div>
                <div className="md:w-[45%] hidden md:block"></div>
              </div>

              {/* Point 2 */}
              <div className="flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] hidden md:block"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-xl shadow-blue-200 text-white font-bold text-[10px] md:text-sm my-4 md:my-0">2021</div>
                <div className="md:w-[45%] text-center md:text-left animate-fade-up">
                  <h4 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">Digital Evolution</h4>
                  <p className="text-xs md:text-base text-slate-500">Launch of Zias Innovative Technologies to ensure business continuity without physical limitations.</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] text-center md:text-right animate-fade-up">
                  <h4 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">The Future</h4>
                  <p className="text-xs md:text-base text-slate-500">Scaling globally as a diversified digital enterprise while keeping Seematti values intact.</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center z-10 shadow-sm text-blue-600 font-bold text-[10px] md:text-sm my-4 md:my-0">🚀</div>
                <div className="md:w-[45%] hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO - CORE FOCUS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-12 md:mb-16 text-center">Our Core Focus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { title: 'Digital Commerce', icon: 'fa-cart-shopping', desc: 'Designing and managing B2C & B2B platforms like SeemattiStores.com.', color: 'bg-blue-50/50' },
              { title: 'Education Solutions', icon: 'fa-graduation-cap', desc: 'E-Academy digital learning platforms developed with 25+ years experience.', color: 'bg-emerald-50/50' },
              { title: 'Campus ERP', icon: 'fa-school', desc: 'Customizable software for academic management, finance, and compliance.', color: 'bg-purple-50/50' },
              { title: 'Software Dev', icon: 'fa-laptop-code', desc: 'Custom mobile apps, web platforms, and specialized enterprise software.', color: 'bg-indigo-50/50' },
              { title: 'Business Automation', icon: 'fa-robot', desc: 'Marketing, AI solutions, and digital mentorship for total transformation.', color: 'bg-orange-50/50' }
            ].map((item, i) => (
              <div key={i} className="relative bg-white pt-12 md:pt-16 pb-8 md:pb-12 px-8 md:px-10 rounded-[40px] md:rounded-[60px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                <div className={`absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 ${item.color} rounded-full blur-2xl`}></div>
                <div className="absolute top-8 left-8 md:top-10 md:left-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl text-slate-800"><i className={`fa-solid ${item.icon}`}></i></div>
                </div>
                <div className="relative mt-10 md:mt-12">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-[13px] md:text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-12 md:mb-20 text-center tracking-tight">Our Strategic Approach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Understand', desc: 'Real-world business analysis' },
              { step: '02', title: 'Design', desc: 'User-focused, scalable design' },
              { step: '03', title: 'Build', desc: 'Secure, reliable development' },
              { step: '04', title: 'Support', desc: 'Long-term partnership mindset' }
            ].map((s, i) => (
              <div key={i} className="text-center group animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-5xl font-bold text-slate-100 mb-3 md:mb-4 group-hover:text-blue-50 transition-colors">{s.step}</div>
                <h4 className="text-base md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{s.title}</h4>
                <p className="text-[11px] md:text-sm text-slate-500">{s.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 right-0 w-8 h-px bg-slate-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VALUES & VISION */}
      <section className="py-16 md:py-24 bg-slate-900 text-white rounded-[40px] md:rounded-[80px] mx-4 md:mx-6 my-10 md:my-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/20 rounded-full blur-[100px] md:blur-[120px]"></div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">Values That Drive Us</h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { title: 'Trust & Transparency', icon: 'fa-shield-heart' },
                  { title: 'Customer-Centric Thinking', icon: 'fa-users' },
                  { title: 'Quality & Reliability', icon: 'fa-award' },
                  { title: 'Innovation with Purpose', icon: 'fa-lightbulb' }
                ].map((v, i) => (
                  <div key={i} className="flex items-center space-x-4 md:space-x-6 group">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-xl group-hover:bg-blue-600 transition-all">
                      <i className={`fa-solid ${v.icon}`}></i>
                    </div>
                    <span className="text-base md:text-xl font-medium">{v.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8 md:space-y-12 lg:border-l border-white/10 lg:pl-20">
              <div>
                <h3 className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">Vision</h3>
                <p className="text-lg md:text-2xl font-light leading-relaxed">To empower businesses and institutions with digital solutions that are practical, scalable, and built on trust.</p>
              </div>
              <div>
                <h3 className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">Mission</h3>
                <p className="text-lg md:text-2xl font-light leading-relaxed">To combine decades of business experience with modern technology to deliver meaningful digital transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <ImageGridGallery />

      <VideoTestimonialGallery />

      {/* 9. CALL TO ACTION */}
      <section className="py-16 md:py-24 text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 md:mb-8">Ready to evolve your business?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => navigate('#home')}
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 text-sm md:text-base"
          >
            Explore Services
          </button>
          <button 
            onClick={() => navigate('#contact')}
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all text-sm md:text-base"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};
