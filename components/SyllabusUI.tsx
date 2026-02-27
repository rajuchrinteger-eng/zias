
import React, { useState } from 'react';

interface Module {
  id: string;
  title: string;
  duration: string;
  outcomes: string[];
  project: string;
  skills: string[];
}

export const SyllabusUI: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>('01');

  const modules: Module[] = [
    {
      id: '01',
      title: 'Digital Marketing Fundamentals',
      duration: '4 Weeks',
      outcomes: ['Understanding digital ecosystems', 'SEO basics & Keyword research', 'Content strategy frameworks'],
      project: 'Build a comprehensive content calendar for a D2C brand.',
      skills: ['SEO', 'Content Marketing', 'Market Research']
    },
    {
      id: '02',
      title: 'Advanced Analytics & ROI Tracking',
      duration: '6 Weeks',
      outcomes: ['Google Analytics 4 mastery', 'Meta Pixel & Conversion API', 'Multi-touch attribution models'],
      project: 'Set up a full-funnel tracking system for an e-commerce store.',
      skills: ['GA4', 'Data Analysis', 'Tag Management']
    },
    {
      id: '03',
      title: 'Performance Marketing & Scaling',
      duration: '8 Weeks',
      outcomes: ['Meta Ads & Google Ads scaling', 'A/B testing methodologies', 'Budget optimization strategies'],
      project: 'Manage a $1000/day mock ad spend campaign.',
      skills: ['Media Buying', 'Copywriting', 'Performance Optimization']
    },
    {
      id: '04',
      title: 'E-Commerce & D2C Operations',
      duration: '6 Weeks',
      outcomes: ['Shopify store architecture', 'Inventory & Logistics management', 'Customer retention strategies'],
      project: 'Launch a fully functional Shopify store with 10+ products.',
      skills: ['Shopify', 'Operations', 'CRM']
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Structured Syllabus</h2>
          <p className="text-slate-500">A module-based learning journey designed for industry readiness.</p>
        </div>

        {/* Progression Roadmap */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block"></div>
            {[
              { label: 'Beginner', icon: 'fa-seedling', color: 'bg-emerald-100 text-emerald-600' },
              { label: 'Intermediate', icon: 'fa-leaf', color: 'bg-emerald-200 text-emerald-700' },
              { label: 'Advanced', icon: 'fa-tree', color: 'bg-emerald-500 text-white' },
              { label: 'Certification', icon: 'fa-award', color: 'bg-slate-900 text-white' }
            ].map((stage, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110 ${stage.color}`}>
                  <i className={`fa-solid ${stage.icon}`}></i>
                </div>
                <div className="mt-4 font-bold text-slate-900 text-sm">{stage.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Modules */}
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((m) => (
            <div 
              key={m.id} 
              className={`bg-white rounded-[32px] border transition-all duration-500 overflow-hidden ${
                expandedModule === m.id ? 'border-emerald-500 shadow-2xl' : 'border-slate-100 shadow-sm'
              }`}
            >
              <button 
                onClick={() => setExpandedModule(expandedModule === m.id ? null : m.id)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-6">
                  <div className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
                    expandedModule === m.id ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    Module {m.id}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{m.title}</h4>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="hidden md:block text-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</div>
                    <div className="font-bold text-slate-900 text-sm">{m.duration}</div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    expandedModule === m.id ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${
                expandedModule === m.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-8 pt-0 border-t border-slate-50">
                  <div className="grid md:grid-cols-2 gap-12 mt-8">
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Learning Outcomes</h5>
                      <ul className="space-y-3">
                        {m.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <i className="fa-solid fa-circle-check text-emerald-500 mt-1 text-xs"></i>
                            <span className="text-slate-600 text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-8">
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Project / Assignment</h5>
                        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-sm text-emerald-800 font-medium">
                          {m.project}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Skills Covered</h5>
                        <div className="flex flex-wrap gap-2">
                          {m.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
