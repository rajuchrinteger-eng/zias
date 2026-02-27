
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="text-center sm:text-left">
            <div className="flex flex-col mb-6">
              <span className="text-lg md:text-xl font-bold text-white tracking-tight leading-none">ZIAS INNOVATIVE TECHNOLOGIES</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-blue-400 font-semibold mt-1">A Seematti Group Company</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-sm mx-auto sm:mx-0">
              Pioneering digital transformation by blending a 75+ year retail legacy with modern tech ecosystems. Headquartered in Kumbakonam, serving the world.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((social, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs md:text-sm">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#future" className="hover:text-white transition-colors">Future</a></li>
              <li><a href="#partner" className="hover:text-white transition-colors">Partner Program</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs md:text-sm">Services</h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><a href="#service-seemattistores" className="hover:text-white transition-colors">E-Commerce Platforms</a></li>
              <li><a href="#service-eacademy" className="hover:text-white transition-colors">Digital Education</a></li>
              <li><a href="#service-ezycampus" className="hover:text-white transition-colors">ERP for Education</a></li>
              <li><a href="#service-software" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#service-business" className="hover:text-white transition-colors">Marketing & AI</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs md:text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start justify-center sm:justify-start space-x-3">
                <i className="fa-solid fa-location-dot mt-1 text-blue-400"></i>
                <span>Kumbakonam, Tamil Nadu,<br />India - 612001</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <i className="fa-solid fa-envelope text-blue-400"></i>
                <a href="mailto:info@ziastech.in" className="hover:text-white">info@ziastech.in</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <i className="fa-solid fa-phone text-blue-400"></i>
                <span>9345387413</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                 <i className="fa-solid fa-clock text-blue-400"></i>
                 <span>10 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-[10px] md:text-xs gap-6 md:gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Zias Innovative Technologies Pvt Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
