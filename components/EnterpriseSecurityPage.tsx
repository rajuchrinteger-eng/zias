
import React from 'react';

export const EnterpriseSecurityPage: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Security Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-fade-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-8">
              Zero-Trust Architecture
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1]">
              Enterprise Security <br/><span className="text-emerald-400">Fortified by Design</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-8 md:mb-10 leading-relaxed">
              We implement multi-layered security protocols and proactive threat mitigation strategies to ensure your enterprise data remains impenetrable in an evolving digital landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Identity & Access', desc: 'Granular control over every user and device.' },
                { title: 'Threat Mitigation', icon: 'fa-shield-virus', desc: 'AI-driven detection of anomalous behavior.' },
                { title: 'Compliance Ready', icon: 'fa-file-shield', desc: 'Built-in support for SOC2, GDPR, and HIPAA.' }
              ].map((point, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="font-bold text-emerald-400 mb-2">{point.title}</h4>
                  <p className="text-sm text-slate-400">{point.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('#contact')}
              className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all shadow-xl shadow-emerald-900/40"
            >
              Request Security Audit
            </button>
          </div>
        </div>
      </section>

      {/* 2. EXPLAINER VIDEO BLOCK */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative group cursor-pointer rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" 
                alt="Security Video Thumbnail" 
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-colors">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-600 text-2xl shadow-2xl animate-pulse">
                  <i className="fa-solid fa-play ml-1"></i>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">The ZIAS Security Standard</h3>
                <p className="text-slate-200">Watch our approach to enterprise-grade protection (2:15)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW DIAGRAM SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Security Lifecycle</h2>
            <p className="text-slate-500">A proactive, multi-stage approach to threat management.</p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-8">
            {[
              { step: '01', title: 'Vulnerability Scan', icon: 'fa-magnifying-glass-chart', desc: 'Identifying potential entry points and weak links.' },
              { step: '02', title: 'Hardening', icon: 'fa-lock', desc: 'Applying multi-factor authentication and encryption.' },
              { step: '03', title: 'Threat Hunting', icon: 'fa-radar', desc: 'Proactively searching for hidden threats in the network.' },
              { step: '04', title: 'Incident Response', icon: 'fa-fire-extinguisher', desc: 'Rapid containment and recovery protocols.' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-3xl text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{p.step}</div>
                {i < 3 && <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-px bg-slate-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH STACK REPRESENTATION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Enterprise Security Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { cat: 'Identity & Access', tools: ['Okta', 'Auth0', 'Azure AD'] },
              { cat: 'Network Security', tools: ['Cloudflare', 'Palo Alto', 'Cisco'] },
              { cat: 'App Security', tools: ['Snyk', 'SonarQube', 'Veracode'] },
              { cat: 'SIEM / SOC', tools: ['Splunk', 'Datadog', 'LogRhythm'] },
              { cat: 'Compliance', tools: ['Vanta', 'Drata', 'Secureframe'] }
            ].map((group, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-6">{group.cat}</h4>
                <div className="space-y-4">
                  {group.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group/tool cursor-help">
                      <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover/tool:bg-emerald-600 transition-colors"></div>
                      <span className="text-sm text-slate-600 font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY USE CASES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Security Impact Cases</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                industry: 'Healthcare',
                challenge: 'Protecting sensitive patient records while enabling remote access.',
                solution: 'Zero-trust network access (ZTNA) with end-to-end encryption.',
                outcome: '100% HIPAA compliance; 0 data breaches in 3 years.',
                image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
              },
              {
                industry: 'E-Commerce',
                challenge: 'Massive DDoS attacks during peak holiday sales.',
                solution: 'Cloud-native WAF and automated threat mitigation layer.',
                outcome: '99.99% uptime during peak; 100% attack mitigation.',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800'
              }
            ].map((useCase, i) => (
              <div key={i} className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img src={useCase.image} alt={useCase.industry} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="md:w-1/2 p-10">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">{useCase.industry}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Challenge: {useCase.challenge}</h4>
                  <div className="space-y-4 mb-8">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Solution</div>
                      <p className="text-sm text-slate-600">{useCase.solution}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Outcome</div>
                      <p className="text-sm font-bold text-emerald-600">{useCase.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS OUTCOME / VALUE METRICS */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Risk Reduction', value: '95%' },
              { label: 'Compliance Coverage', value: '100%' },
              { label: 'Threat Detection', value: '<5 min' },
              { label: 'Data Integrity', value: '99.99%' }
            ].map((stat, i) => (
              <div key={stat.label}>
                <div className="text-5xl font-bold mb-4">{stat.value}</div>
                <div className="text-sm font-medium text-emerald-100 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRUST & PROOF SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale mb-16">
            <div className="flex items-center space-x-2"><i className="fa-solid fa-certificate text-3xl"></i><span className="font-bold text-xl">SOC2 Type II</span></div>
            <div className="flex items-center space-x-2"><i className="fa-solid fa-shield-halved text-3xl"></i><span className="font-bold text-xl">GDPR Compliant</span></div>
            <div className="flex items-center space-x-2"><i className="fa-solid fa-user-shield text-3xl"></i><span className="font-bold text-xl">HIPAA Ready</span></div>
          </div>
          <div className="max-w-4xl mx-auto p-10 bg-slate-50 rounded-[40px] border border-slate-100 text-center">
            <p className="text-xl text-slate-600 italic mb-8">
              "ZIAS provided us with a security framework that not only protected our data but also became a key selling point for our enterprise clients."
            </p>
            <div className="font-bold text-slate-900">Michael Ross, CEO - SecureData Global</div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[60px] p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Is Your Enterprise Truly Secure?</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
            Schedule a comprehensive security audit with our certified experts to identify and mitigate your most critical vulnerabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button 
              onClick={() => navigate('#contact')}
              className="px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all shadow-xl shadow-emerald-900/40"
            >
              Talk to Solution Expert
            </button>
            <button 
              onClick={() => navigate('#contact')}
              className="px-12 py-5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all"
            >
              Request Security Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
