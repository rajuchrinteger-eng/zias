
import React from 'react';

const stats = [
  { label: 'Years Legacy', value: '75+', icon: 'fa-history', color: 'text-blue-600' },
  { label: 'Technology Since', value: '2021', icon: 'fa-rocket', color: 'text-indigo-600' },
  { label: 'Active Platforms', value: '12+', icon: 'fa-layer-group', color: 'text-emerald-600' },
  { label: 'Institutions Served', value: '150+', icon: 'fa-university', color: 'text-purple-600' }
];

export const LegacySection: React.FC = () => {
  const navigateToAbout = () => {
    window.location.hash = '#about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Built on Trust. <br />
              <span className="text-blue-600">Evolving with Technology.</span>
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6 md:mb-8"></div>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-5 md:mb-6 leading-relaxed">
              Zias Innovative Technologies Pvt Ltd carries forward the 75-year-old heritage of the Seematti Group, Kumbakonam. In 2021, we embarked on a mission to redefine digital transformation during a global shift.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              Today, we serve a global clientele, bridging the gap between traditional business ethics and cutting-edge software engineering. Our growth is driven by the same values that made Seematti a household name: trust, integrity, and customer-first focus.
            </p>
            <button 
              onClick={navigateToAbout}
              className="text-blue-600 font-bold flex items-center hover:translate-x-2 transition-transform duration-300 text-xs md:text-sm lg:text-base"
            >
              LEARN MORE ABOUT OUR STORY <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group">
                <div className={`text-xl md:text-3xl mb-3 md:mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
