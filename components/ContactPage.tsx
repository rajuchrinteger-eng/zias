
import React, { useState, useEffect } from 'react';

// Configuration for Departments, specific services, and contact details
const departmentConfig: Record<string, { 
  phone: string; 
  email: string; 
  services: string[] 
}> = {
  'General Inquiry': {
    phone: '9345387413',
    email: 'info@ziastech.in',
    services: ['General Information', 'Corporate Inquiry', 'Careers', 'Other']
  },
  'Retail Solutions': {
    phone: '9345387413', 
    email: 'retail@ziastech.in',
    services: ['SeemattiStores Platform Demo', 'B2B Marketplace Setup', 'POS Integration', 'Omnichannel Strategy', 'Retail Analytics']
  },
  'Education ERP': {
    phone: '9345387413', 
    email: 'ezycampus@ziastech.in',
    services: ['School ERP Implementation', 'College Management System', 'Student Mobile App', 'Fee & Finance Module', 'Timetable Automation']
  },
  'Digital Learning': {
    phone: '9345387413', 
    email: 'academy@ziastech.in',
    services: ['E-Academy Course Inquiry', 'Institutional Partnership', 'Student Certification', 'LMS Platform']
  },
  'Custom Software': {
    phone: '9345387413', 
    email: 'engineering@ziastech.in',
    services: ['Custom Web App Development', 'Mobile App Development', 'Legacy System Modernization', 'API Integration']
  },
  'Marketing Services': {
    phone: '9345387413',
    email: 'marketing@ziastech.in',
    services: ['Digital Marketing Strategy', 'SEO & Performance Marketing', 'Branding & Creative Services', 'Social Media Management']
  },
  'Partnership': {
    phone: '9345387413',
    email: 'partners@ziastech.in',
    services: ['Agency Partnership', 'Technology Partnership', 'Reseller Program', 'Strategic Alliance']
  }
};

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: 'General Inquiry',
    serviceType: '', // New field for the dynamic second dropdown
    budget: '',
    timeline: '',
    message: '',
    consent: false
  });

  // Derived state for current contact info based on selected department
  const currentContactInfo = departmentConfig[formData.department] || departmentConfig['General Inquiry'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this data would be sent to a CRM endpoint like HubSpot or Salesforce
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Special handler for Department to reset the Service Type when Department changes
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ 
      ...formData, 
      department: e.target.value,
      serviceType: '' // Reset sub-service when department changes
    });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, consent: e.target.checked });
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[0%] left-[-5%] w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 animate-fade-up text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
            Enterprise Solutions Team
          </div>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 md:mb-6 tracking-tight">
            Let’s Scale Your Business
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Connect with our vertical experts. Whether you need a retail platform, educational ERP, or custom software, we route you directly to the right specialist.
          </p>
        </div>
      </section>

      {/* 2. ENTERPRISE CONTACT FORM SECTION */}
      <section className="pb-16 md:pb-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context & Support - DYNAMICALLY UPDATES */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8 lg:sticky lg:top-24">
              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 text-base md:text-lg">Why Partner with Zias?</h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    { text: 'Rapid implementation timelines', icon: 'fa-bolt' },
                    { text: 'Dedicated account managers', icon: 'fa-user-tie' },
                    { text: 'Enterprise-grade security', icon: 'fa-shield-halved' },
                    { text: '24/7 Support availability', icon: 'fa-headset' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-xs md:text-sm text-slate-600">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 mr-2 md:mr-3 shadow-sm">
                        <i className={`fa-solid ${item.icon} text-[10px] md:text-xs`}></i>
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] md:text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                  {formData.department === 'General Inquiry' ? 'Global Headquarters' : `${formData.department} Support`}
                </h3>
                
                <div className="flex items-start space-x-3 md:space-x-4 mb-4">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm md:text-base">
                     <i className="fa-solid fa-location-dot"></i>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-xs md:text-sm">Zias Innovative Technologies</p>
                     <p className="text-slate-500 text-[11px] md:text-sm">Kumbakonam, Tamil Nadu, India - 612001</p>
                   </div>
                </div>
                
                {/* Dynamic Contact Info */}
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 p-3 bg-blue-50/50 rounded-xl md:rounded-2xl border border-blue-100 transition-all duration-300">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm text-sm md:text-base">
                     <i className="fa-solid fa-phone"></i>
                   </div>
                   <div>
                     <p className="text-[8px] md:text-[10px] uppercase font-bold text-slate-400">Direct Line</p>
                     <p className="font-bold text-slate-900 text-xs md:text-sm">{currentContactInfo.phone}</p>
                   </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 mb-4">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm md:text-base">
                     <i className="fa-solid fa-envelope"></i>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-xs md:text-sm">{currentContactInfo.email}</p>
                   </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm md:text-base">
                     <i className="fa-solid fa-clock"></i>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-xs md:text-sm">Business Hours</p>
                     <p className="text-slate-500 text-[10px] md:text-xs">10:00 AM - 7:00 PM</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Column: Intelligent Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
                
                {isSubmitted ? (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 md:p-12 animate-fade-up">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-2xl md:text-4xl mb-4 md:mb-6 shadow-lg shadow-emerald-100">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">Request Received</h3>
                    <p className="text-sm md:text-base text-slate-500 max-w-md mx-auto mb-6 md:mb-8">
                      We have routed your inquiry to our <strong>{formData.department}</strong> team. You will receive a calendar invite for a discovery call within 24 hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-blue-600 font-bold hover:bg-blue-50 px-6 py-2 rounded-full transition-colors text-sm md:text-base">
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10">
                    <div className="mb-6 md:mb-8 border-b border-slate-100 pb-6 md:pb-8">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6">1. How can we help you?</h3>
                      
                      {/* Department Selection */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2 relative">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Industry / Department *</label>
                          <div className="relative">
                            <select 
                              name="department" 
                              value={formData.department} 
                              onChange={handleDepartmentChange}
                              className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-700 font-medium text-sm md:text-base"
                            >
                              {Object.keys(departmentConfig).map((dept) => (
                                <option key={dept} value={dept}>{dept}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-5 pointer-events-none text-slate-500">
                              <i className="fa-solid fa-chevron-down text-[10px] md:text-xs"></i>
                            </div>
                          </div>
                          <p className="text-[9px] md:text-[10px] text-slate-400 pl-2">
                            <i className="fa-solid fa-circle-info mr-1"></i> 
                            Smart Routing: Contacting {formData.department} Team
                          </p>
                        </div>

                        {/* Dynamic Service Type Selection */}
                        <div className="space-y-2 relative animate-fade-up">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Specific Requirement *</label>
                          <div className="relative">
                            <select 
                              name="serviceType" 
                              value={formData.serviceType} 
                              onChange={handleChange}
                              className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-700 text-sm md:text-base"
                              required
                            >
                              <option value="">Select Service</option>
                              {currentContactInfo.services.map((service, idx) => (
                                <option key={idx} value={service}>{service}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-5 pointer-events-none text-slate-500">
                              <i className="fa-solid fa-chevron-down text-[10px] md:text-xs"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Estimated Budget (INR)</label>
                          <div className="relative">
                            <select 
                              name="budget" 
                              value={formData.budget} 
                              onChange={handleChange}
                              className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-700 text-sm md:text-base"
                            >
                              <option value="">Select Range</option>
                              <option value="<1L">Under ₹1 Lakh</option>
                              <option value="1L-5L">₹1 Lakh - ₹5 Lakhs</option>
                              <option value="5L-20L">₹5 Lakhs - ₹20 Lakhs</option>
                              <option value="20L+">₹20 Lakhs+</option>
                              <option value="Not Sure">Not sure yet</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-5 pointer-events-none text-slate-500">
                              <i className="fa-solid fa-chevron-down text-[10px] md:text-xs"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 md:mb-8 border-b border-slate-100 pb-6 md:pb-8">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6">2. Your Details</h3>
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                        <div className="space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name *</label>
                          <input required name="name" type="text" onChange={handleChange} className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm md:text-base" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Work Email *</label>
                          <input required name="email" type="email" onChange={handleChange} className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm md:text-base" placeholder="john@company.com" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label>
                          <input name="company" type="text" onChange={handleChange} className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm md:text-base" placeholder="Acme Inc." />
                        </div>
                         <div className="space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Implementation Timeline</label>
                           <div className="relative">
                             <select 
                              name="timeline" 
                              value={formData.timeline} 
                              onChange={handleChange}
                              className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer text-slate-700 text-sm md:text-base"
                            >
                              <option value="">Select Timeline</option>
                              <option value="Immediately">Immediately</option>
                              <option value="1-3 Months">1-3 Months</option>
                              <option value="3-6 Months">3-6 Months</option>
                              <option value="Planning Phase">Just Planning</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-5 pointer-events-none text-slate-500">
                              <i className="fa-solid fa-chevron-down text-[10px] md:text-xs"></i>
                            </div>
                           </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6">3. Project Details</h3>
                      <textarea 
                        name="message" 
                        onChange={handleChange}
                        rows={4} 
                        className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none text-sm md:text-base" 
                        placeholder="Tell us about your specific requirements, challenges, or goals..."
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 mb-6 md:mb-8">
                      <input required type="checkbox" id="consent" checked={formData.consent} onChange={handleCheckbox} className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <label htmlFor="consent" className="text-[10px] md:text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                        I agree to Zias Innovative Technologies processing my data to route my inquiry to the appropriate team. I understand I can opt-out at any time.
                      </label>
                    </div>

                    <button type="submit" className="w-full py-4 md:py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow-xl shadow-slate-200 flex items-center justify-center space-x-3 group">
                      <span>Submit Request</span>
                      <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </button>
                    
                    <div className="mt-4 md:mt-6 text-center">
                      <p className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-widest">
                        <i className="fa-solid fa-lock mr-1"></i> 256-Bit SSL Secure Form
                      </p>
                    </div>
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
