
import React from 'react';

export const CTASection: React.FC = () => {
  const navigateToContact = () => {
    window.location.hash = '#contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl md:rounded-[60px] p-10 md:p-24 text-center text-white relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">Let’s Build the Future of <br className="hidden md:block"/> Your Business Together</h2>
            <p className="text-blue-100 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Experience the perfect blend of 75 years of business legacy and cutting-edge technology. 
              Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={navigateToContact}
                className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                Book Free Consultation
              </button>
              <button 
                onClick={navigateToContact}
                className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-blue-500/20 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
