
import React from 'react';

const serviceCategories = [
  {
    id: 'seemattistores',
    title: 'SeemattiStores.com',
    type: 'E-Commerce Platform (B2C & B2B)',
    icon: 'fa-cart-shopping',
    desc: 'A comprehensive fashion and lifestyle e-commerce platform designed to serve both individual customers and business buyers.',
    highlights: ['B2C & B2B commerce', 'Lead generation', 'SEO & SMO'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50/50',
    hash: '#service-seemattistores'
  },
  {
    id: 'e-academy',
    title: 'E-Academy',
    type: 'Digital Education Platform',
    icon: 'fa-graduation-cap',
    desc: 'A digital learning platform developed in collaboration with Rinteger, backed by 25+ years of experience.',
    highlights: ['Course demos & videos', 'Student onboarding', 'Certification journey'],
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50/50',
    hash: '#service-eacademy'
  },
  {
    id: 'ezycampus',
    title: 'Ezy Campus',
    type: 'ERP for Schools & Colleges',
    icon: 'fa-school',
    desc: 'A customizable ERP software solution designed to manage academics, administration, and finance for institutions.',
    highlights: ['Student lifecycle', 'Admin & Finance', 'Compliance & Security'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50/50',
    hash: '#service-ezycampus'
  },
  {
    id: 'software',
    title: 'Software Development',
    type: 'Custom Software & Applications',
    icon: 'fa-code',
    desc: 'End-to-end software development services tailored to meet specific business and operational requirements.',
    highlights: ['Custom web & mobile apps', 'Scalable architecture', 'App performance'],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50/50',
    hash: '#service-software'
  },
  {
    id: 'business',
    title: 'Marketing Business Services',
    type: 'Business, Marketing & Automation',
    icon: 'fa-gears',
    desc: 'Complete business enablement services supporting retailers and brands across online and offline channels.',
    highlights: ['Marketing support', 'Creative & Branding', 'AI & Mentorship'],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50/50',
    hash: '#service-business'
  }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <div 
          className="flex flex-col items-center cursor-pointer group" 
          onClick={() => navigate('#home')}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 mb-1 md:mb-2">
            <div className="absolute inset-0 bg-blue-600 rounded-lg md:rounded-xl rotate-6 group-hover:rotate-12 transition-transform opacity-20"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-lg md:rounded-xl -rotate-3 group-hover:-rotate-6 transition-transform"></div>
            <span className="relative text-white font-black text-lg md:text-xl italic tracking-tighter">Z</span>
          </div>
          <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-blue-600 font-bold opacity-80 leading-none">A Seematti Group Company</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          <button 
            onClick={() => navigate('#home')} 
            className="text-base xl:text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => navigate('#about')} 
            className="text-base xl:text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            About Us
          </button>
          
          <div className="relative group">
            <button className="flex items-center text-base xl:text-lg font-medium text-slate-600 group-hover:text-blue-600 transition-colors py-8">
              Services <i className="fa-solid fa-chevron-down ml-2 text-[10px] transition-transform group-hover:rotate-180"></i>
            </button>
            
            <div className="mega-menu absolute top-full left-1/2 w-[1140px] max-w-[95vw] bg-white border border-slate-100 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-[32px] p-8 overflow-hidden z-[100]">
              <div className="grid grid-cols-5 gap-4">
                {serviceCategories.map((s, i) => (
                  <div key={i} className="group/card flex flex-col h-full bg-slate-50/50 hover:bg-white rounded-2xl p-5 border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-12 h-12 rounded-xl ${s.bgColor} flex items-center justify-center ${s.color} text-xl mb-4 group-hover/card:scale-110 transition-transform duration-300`}>
                      <i className={`fa-solid ${s.icon}`}></i>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-[14px] font-bold text-slate-900 mb-1 leading-tight">{s.title}</h4>
                      <p className="text-[9px] font-bold text-blue-600 uppercase tracking-wider mb-3">{s.type}</p>
                      <p className="text-[11px] text-slate-500 mb-4 leading-relaxed line-clamp-3">
                        {s.desc}
                      </p>
                      
                      <ul className="space-y-1.5 mb-6">
                        {s.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-center text-[10px] text-slate-400 font-medium">
                            <span className="w-1 h-1 rounded-full bg-slate-300 mr-2"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => navigate(s.hash)}
                      className="text-[11px] font-bold text-slate-900 group-hover/card:text-blue-600 transition-colors flex items-center mt-auto"
                    >
                      View More <i className="fa-solid fa-arrow-right-long ml-2 transition-transform group-hover/card:translate-x-1"></i>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-400 italic font-medium">Need a custom solution? Our experts are ready to assist you.</p>
                <button 
                  onClick={() => navigate('#contact')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  See all capabilities →
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('#partner')} 
            className="text-base xl:text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Partners
          </button>
          <button 
            onClick={() => navigate('#future')} 
            className="text-base xl:text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Future
          </button>
          <button 
            onClick={() => navigate('#contact')} 
            className="text-base xl:text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('#contact')}
            className="hidden sm:block bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
          >
            Request Demo
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isMenuOpen) setIsServicesOpen(false);
            }}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white z-40 transition-all duration-300 origin-top shadow-2xl border-t border-slate-100 overflow-hidden ${isMenuOpen ? 'max-h-[85vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="overflow-y-auto px-6 py-8">
          <div className="flex flex-col space-y-5">
            <button 
              onClick={() => navigate('#home')} 
              className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3 text-left hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('#about')} 
              className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3 text-left hover:text-blue-600 transition-colors"
            >
              About Us
            </button>
            
            <div className="space-y-1">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between text-lg font-bold text-slate-900 border-b border-slate-50 pb-3 text-left hover:text-blue-600 transition-colors"
              >
                Services
                <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div className={`grid gap-3 transition-all duration-300 overflow-hidden ${isServicesOpen ? 'max-h-[500px] opacity-100 pt-2 pb-4' : 'max-h-0 opacity-0'}`}>
                {serviceCategories.map((s, i) => (
                  <button 
                    key={i}
                    onClick={() => navigate(s.hash)}
                    className="flex items-center p-3 bg-slate-50 rounded-xl text-left hover:bg-blue-50 transition-colors group"
                  >
                    <div className={`w-9 h-9 rounded-lg ${s.bgColor} flex items-center justify-center ${s.color} text-base mr-3 group-hover:scale-110 transition-transform`}>
                      <i className={`fa-solid ${s.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                      <p className="text-[9px] text-slate-500">{s.type}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => navigate('#partner')} 
              className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3 text-left hover:text-blue-600 transition-colors"
            >
              Partners
            </button>
            <button 
              onClick={() => navigate('#future')} 
              className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3 text-left hover:text-blue-600 transition-colors"
            >
              Future
            </button>
            <button 
              onClick={() => navigate('#contact')} 
              className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3 text-left hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            
            <button 
              onClick={() => navigate('#contact')}
              className="w-full bg-blue-600 text-white py-4 rounded-xl text-base font-bold shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
