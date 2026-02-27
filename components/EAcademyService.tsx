
import React from 'react';

import { VideoHeroBlock } from './VideoHeroBlock';
import { AcademyTestimonials } from './AcademyTestimonials';
import { SyllabusUI } from './SyllabusUI';
import { LearningLibrary } from './LearningLibrary';

export const EAcademyService: React.FC = () => {
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
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-50/60 rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-fade-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold tracking-widest uppercase mb-8">
                Skill-Based Digital Learning
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                E-Academy
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium mb-8 md:mb-10 leading-relaxed">
                Industry-Driven Digital Education for Real-World Careers
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-10 md:mb-12 leading-relaxed">
                E-Academy is a digital education initiative by Zias Innovative Technologies Pvt Ltd, developed in collaboration with <span className="text-emerald-600 font-bold tracking-tight">Rinteger</span>, a Bangalore-based digital marketing leader. Backed by 25+ years of combined expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all shadow-xl shadow-emerald-200"
                >
                  Explore Courses
                </button>
                <button 
                  onClick={() => navigate('#contact')}
                  className="px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm"
                >
                  Request a Demo
                </button>
              </div>
            </div>

            {/* Added Imagery Component beside content */}
            <div className="lg:w-1/2 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-100/50 rounded-[60px] blur-2xl group-hover:bg-emerald-200/50 transition-colors duration-500"></div>
                <div className="relative overflow-hidden rounded-[50px] shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                    alt="E-Academy Collaboration" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                {/* Floating Achievement Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden md:flex items-center space-x-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-none">Job Ready</div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-1">Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & TRUST BLOCK */}
      <VideoHeroBlock 
        title="Leadership & Trust"
        subtitle="Skill-Based Digital Learning"
        description="E-Academy is a digital education initiative by Zias Innovative Technologies Pvt Ltd, developed in collaboration with Rinteger, a Bangalore-based digital marketing leader. Backed by 25+ years of combined expertise."
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        thumbnail="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
        speakerName="Leadership Message"
        speakerTitle="Bridging the Academic-Industry Gap"
        outcomes={[
          "Structured Curriculum: Module-based learning with clear outcomes.",
          "Guided Learning Journey: Personalized mentor support at every step.",
          "Hands-on Training: Real-world projects and industry assignments."
        ]}
        ctaText="Explore Courses"
        onCtaClick={() => scrollToSection('syllabus')}
        trustIndicators={[
          { label: "Years Experience", value: "25+" },
          { label: "Learners", value: "10k+" },
          { label: "Outcomes", value: "95%" }
        ]}
        themeColor="emerald"
      />

      {/* 3. STRUCTURED SYLLABUS UI */}
      <div id="syllabus">
        <SyllabusUI />
      </div>

      {/* 4. STUDENT TESTIMONIALS */}
      <AcademyTestimonials />

      {/* 5. DEMO & PREVIEW LEARNING VIDEO LIBRARY */}
      <LearningLibrary />

      {/* 3. WHO E-ACADEMY IS FOR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Who Can Benefit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Students', icon: 'fa-graduation-cap', desc: 'Career-oriented courses with hands-on learning and globally recognized certification.' },
              { title: 'Colleges & Institutions', icon: 'fa-university', desc: 'Academic partnerships, lead generation, and specialized skill programs for students.' },
              { title: 'Corporate Learners', icon: 'fa-briefcase', desc: 'Upskilling and reskilling programs specifically aligned with evolving business needs.' }
            ].map((item, i) => (
              <div key={i} className="bg-emerald-50/30 p-10 rounded-[40px] border border-emerald-100/50 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-emerald-600 text-xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEARNING PLATFORM FEATURES */}
      <section id="features" className="py-24 bg-slate-900 text-white rounded-[80px] mx-6">
        <div className="container mx-auto px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Learning Platform Features</h2>
            <p className="text-emerald-400 font-medium">Built for engagement, retention, and outcomes.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Structured Courses', icon: 'fa-book-open', desc: 'Professionally designed curriculum with clear learning outcomes and milestones.' },
              { title: 'Demo & Preview Videos', icon: 'fa-clapperboard', desc: 'Experience the quality of our content before committing to the full journey.' },
              { title: 'Guided Learning Journey', icon: 'fa-route', desc: 'Clear student path from initial onboarding to final certification and beyond.' },
              { title: 'Hands-On Training', icon: 'fa-vial', desc: 'Industry-focused assignments and real-time project examples.' },
              { title: 'Recognized Certification', icon: 'fa-award', desc: 'Earn a certificate that carries weight in the competitive job market.' },
              { title: 'Personalized Support', icon: 'fa-headset', desc: 'Access to mentors and experts to resolve queries and provide guidance.' }
            ].map((f, i) => (
              <div key={i} className="flex flex-col group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUDENT JOURNEY FLOW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">Student Learning Journey</h2>
          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-12">
            {[
              { step: '01', title: 'Onboarding', desc: 'Registration & Orientation', icon: 'fa-id-card' },
              { step: '02', title: 'Orientation', desc: 'Demo & Goal Setting', icon: 'fa-compass' },
              { step: '03', title: 'Learning', desc: 'Structured Modules', icon: 'fa-laptop-file' },
              { step: '04', title: 'Practical', desc: 'Projects & Assessments', icon: 'fa-flask' },
              { step: '05', title: 'Completion', desc: 'Certification & Career', icon: 'fa-user-graduate' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-[20px] flex items-center justify-center text-2xl text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 border border-slate-50">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-2">{p.step}</div>
                <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-xs text-slate-400">{p.desc}</p>
                {i < 4 && <div className="hidden lg:block absolute top-8 left-[calc(50%+45px)] w-[calc(100%-90px)] h-px bg-slate-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEAD GENERATION & INSTITUTION SUPPORT */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Institutional Support" 
                className="rounded-[50px] shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8">Lead Generation & Institutional Enablement</h2>
              <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
                E-Academy supports institutions and training partners by enabling structured lead generation. The platform is designed to attract, engage, and convert learners effectively.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Student & Institutional Lead Capture',
                  'Course Inquiry Management',
                  'Engagement Tracking',
                  'Outcome Analytics'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                    <i className="fa-solid fa-check-circle text-emerald-300"></i>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Why Choose E-Academy?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: 'Backed by Zias Innovative Technologies Pvt Ltd', icon: 'fa-shield-check' },
              { text: 'Collaboration with Rinteger, Bangalore', icon: 'fa-handshake' },
              { text: '25+ years of combined expertise', icon: 'fa-history' },
              { text: 'Outcome-driven learning approach', icon: 'fa-chart-line' },
              { text: 'Practical, industry-relevant education', icon: 'fa-microchip' },
              { text: 'Flexible, scalable learning ecosystem', icon: 'fa-layer-group' }
            ].map((item, i) => (
              <div key={i} className="flex items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 text-lg mr-5 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <span className="font-bold text-slate-800 text-sm leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-50 p-16 md:p-24 rounded-[60px] border border-slate-100 relative overflow-hidden shadow-2xl shadow-slate-200/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 relative z-10">Start Your Learning Journey Today</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Whether you are a student, institution, or corporate learner, E-Academy provides the skills and guidance needed to succeed in a digital-first world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button 
              onClick={() => scrollToSection('features')}
              className="w-full sm:w-auto px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all shadow-xl shadow-emerald-200"
            >
              Explore Courses
            </button>
            <button 
              onClick={() => navigate('#contact')}
              className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
