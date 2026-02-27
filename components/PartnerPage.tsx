
import React, { useState } from 'react';

export const PartnerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: 'Agency',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API submission
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToApply = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"></div>
           <img 
             src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" 
             className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" 
             alt="Zias Partnership" 
           />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900/80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-up">
           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] font-bold tracking-widest uppercase mb-8">
             Zias Partner Ecosystem
           </div>
           <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
             Grow With Us.<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Scale Together.</span>
           </h1>
           <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
             Unlock new revenue streams by collaborating with world-class technology and business ecosystem partners.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <button onClick={scrollToApply} className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-xl shadow-blue-500/20">
               Become a Partner
             </button>
             <button onClick={() => document.getElementById('strategic-partners')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all">
               View Our Partners
             </button>
           </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
             {['Digital Agencies', 'IT Service Providers', 'Consultants', 'Freelancers', 'Business Networks'].map((p, i) => (
               <div key={i} className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                 <i className="fa-solid fa-check text-blue-600 text-xs"></i> {p}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. STRATEGIC PARTNER: RIPSIL AUTOMATION SERVICE */}
      <section id="strategic-partners" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Strategic Ecosystem Partner</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-500 leading-relaxed">
              We are proud to partner with <strong>RIPSIL Automation Service</strong>, a premier technology and information services brand. Through this alliance, we bring two distinct powerhouses to our clients: <strong>Forward Workx</strong> for infrastructure and <strong>GCD</strong> for specialized talent development.
            </p>
          </div>

          {/* RIPSIL PARENT CARD - Updated Banner Design */}
          <div className="relative rounded-[60px] overflow-hidden mb-20 shadow-2xl group min-h-[450px] flex items-center justify-center border border-slate-100">
            {/* Banner Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Ripsil Corporate Banner" 
              className="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
            />
             {/* Gradient Overlay for Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-white/80 to-blue-50/60"></div>
            
            {/* Decorative Blue Wave Shape */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-100/40 via-blue-50/20 to-transparent skew-x-12 translate-x-1/4 rounded-l-full blur-3xl"></div>

            <div className="relative z-10 p-12 lg:p-20 flex flex-col items-center text-center max-w-4xl mx-auto">
               {/* Logo Box */}
              <a href="https://ripsilinfo.com/" target="_blank" rel="noopener noreferrer" className="bg-white/80 backdrop-blur-xl border border-white/60 p-8 px-12 rounded-3xl shadow-xl shadow-slate-200/50 mb-10 hover:scale-105 transition-transform duration-300">
                 <div className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">RIPSIL <span className="text-blue-600">Automation Service</span></div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mt-3 text-center">Info & Automation Services</div>
              </a>
              
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-3xl">
                Ripsil Automation is the backbone of our digital ecosystem, providing high-end IT infrastructure, data services, and strategic digital consulting. 
              </p>
              
              <a href="https://ripsilinfo.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors bg-white px-8 py-4 rounded-full shadow-md hover:shadow-lg border border-blue-50">
                Visit Ripsil Automation <i className="fa-solid fa-arrow-up-right-from-square ml-3 text-sm"></i>
              </a>
            </div>
          </div>

          {/* Associated Brands Headline */}
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-slate-400 uppercase tracking-[0.2em] text-sm font-bold border-b border-slate-200 pb-2">Associated Brands</span>
          </div>

          {/* SUB-BRANDS GRID: Forward Workx & GCD */}
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* 1. Forward Workx */}
            <div className="bg-white border border-slate-200 rounded-[40px] p-10 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold">FW</div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Forward Workx</h3>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Workspace Solutions</p>
                    </div>
                  </div>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Redefining the modern work environment. Forward Workx provides premium coworking spaces, managed offices, and business incubation infrastructure to accelerate growth.
                  </p>
                  <a 
                    href="https://www.forwardworkx.com/#/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-full font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                  >
                    Visit Forward Workx <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
               </div>
            </div>

            {/* 2. GCD Header Card */}
            <div className="bg-white border border-slate-200 rounded-[40px] p-10 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold">GCD</div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        <a href="https://www.globalcareerdevelopment.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                          Global Career Development (Rinteger)
                        </a>
                      </h3>
                      <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">Education Initiative</p>
                    </div>
                  </div>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    An initiative by RIPSIL Automation Service, under the service brand of ForwardWorkX. We don't just teach; we prepare you for the real market with live projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => document.getElementById('gcd-courses')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-full font-bold text-sm hover:bg-purple-700 transition-all shadow-lg shadow-purple-200"
                    >
                      View Courses <i className="fa-solid fa-arrow-down ml-2"></i>
                    </button>
                    <a 
                      href="https://www.globalcareerdevelopment.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-bold text-sm hover:bg-purple-50 transition-all"
                    >
                      Visit Website <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                    </a>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. GCD DETAILED COURSES SECTION */}
      <section id="gcd-courses" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">GCD Premium Training Programs</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              "Your First Marketing Job Starts Inside the Classroom." Experience-based training on real brands, not just case studies.
            </p>
            <div className="mt-6 inline-block bg-white px-6 py-2 rounded-full border border-purple-100 shadow-sm text-purple-700 font-bold text-sm">
              <i className="fa-solid fa-calendar-check mr-2"></i> Join Trial Class: Feb 14th
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course 1: Digital Marketing */}
            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Marketing & AI</h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-6">Course 01</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-bold text-slate-900">25H Theory + 75H Practical</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Fees</span>
                  <span className="font-bold text-blue-600">25k</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Key Modules:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Search Marketing & AI</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Media & Performance Marketing</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Lead Gen & Revenue Marketing</li>
                </ul>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Approach:</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Work on live customer accounts. Execute AI strategies. SOPs, Reports, Metrics, and Monthly Client Reviews.
                </p>
              </div>

              <a href="#" className="w-full py-3 rounded-full border border-blue-600 text-blue-600 font-bold text-center hover:bg-blue-600 hover:text-white transition-all text-sm">
                Join Trial Class
              </a>
            </div>

            {/* Course 2: Web Dev for Marketing */}
            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Marketing-Centric Web Dev</h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-6">Course 02</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-bold text-slate-900">25H Theory + 75H Practical</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Fees</span>
                  <span className="font-bold text-indigo-600">25k</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Key Modules:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span> Shopify & WordPress Stores</li>
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span> Conversion Rate Optimization</li>
                  <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span> Landing Page & Business Sites</li>
                </ul>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Approach:</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real-time projects focusing on UI/UX, functional reports, deployment, hosting, and client presentations.
                </p>
              </div>

              <a href="#" className="w-full py-3 rounded-full border border-indigo-600 text-indigo-600 font-bold text-center hover:bg-indigo-600 hover:text-white transition-all text-sm">
                Join Trial Class
              </a>
            </div>

            {/* Course 3: Agentic App Dev */}
            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-robot"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Agentic App Development</h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-6">Course 03</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-bold text-slate-900">25H Theory + 75H Practical</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Fees</span>
                  <span className="font-bold text-purple-600">25k</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Key Modules:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> React/NextJS/Angular & NodeJs</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> MongoDB, Supabase & AI Tools</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Prompt Cost Calculation</li>
                </ul>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Approach:</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Develop commercial apps with AI. Learn under Project Managers. Build, deploy (AWS/GSC), and meet client expectations.
                </p>
              </div>

              <a href="#" className="w-full py-3 rounded-full border border-purple-600 text-purple-600 font-bold text-center hover:bg-purple-600 hover:text-white transition-all text-sm">
                Join Trial Class
              </a>
            </div>
          </div>

          {/* Creative Hook Footer */}
          <div className="mt-16 bg-slate-900 rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-slate-900"></div>
             <div className="relative z-10">
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">"If your marketing course doesn’t give you real clients… it’s not preparing you for the real market."</h3>
               <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                 At GCD, our students don't just learn concepts. They work on products, projects, and live accounts to build skills aligned with agency & brand expectations.
               </p>
               <button onClick={scrollToApply} className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all">
                 Apply for GCD Training
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM (Existing) */}
      <section id="apply-form" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[50px] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-6">Partner Application</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">
                     Join the Zias Partner Network today. Fill in the details and our partnership manager will reach out within 24 hours.
                   </p>
                   <div className="space-y-4">
                     <div className="flex items-center space-x-3 text-sm"><i className="fa-solid fa-envelope text-blue-400"></i> <span>partners@ziastech.in</span></div>
                     <div className="flex items-center space-x-3 text-sm"><i className="fa-solid fa-phone text-blue-400"></i> <span>+91 9345387413</span></div>
                   </div>
                </div>
                <div className="relative z-10 mt-10">
                   <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Powered By</div>
                   <div className="font-bold">Zias Innovative Technologies</div>
                </div>
              </div>

              <div className="md:col-span-3 p-10">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-fade-up">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4 animate-bounce">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Application Received</h4>
                    <p className="text-slate-500">We'll be in touch shortly!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                        <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Work Email</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="jane@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label>
                        <input required name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Acme Inc." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="+91..." />
                      </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Partner Type</label>
                       <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer">
                         <option value="Agency">Digital / Marketing Agency</option>
                         <option value="IT">IT Service Provider</option>
                         <option value="Consultant">Business Consultant</option>
                         <option value="Student">Student (GCD Course)</option>
                         <option value="Other">Other</option>
                       </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message (Optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none" placeholder="Tell us about your business or learning goals..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center space-x-2">
                       <span>Submit Application</span>
                       <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
