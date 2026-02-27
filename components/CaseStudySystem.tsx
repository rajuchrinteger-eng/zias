
import React from 'react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
  testimonial: {
    quote: string;
    author: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Omnichannel Retail Transformation",
    client: "Seematti Silks",
    industry: "Retail",
    problem: "Disconnected inventory systems across multiple physical stores and a growing online presence led to stock inaccuracies and lost sales.",
    solution: "Implemented a unified ERP and E-commerce ecosystem with real-time inventory synchronization and AI-driven demand forecasting.",
    results: ["40% increase in online sales", "25% reduction in inventory carrying costs", "99.9% inventory accuracy"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    testimonial: {
      quote: "ZIAS understood our heritage and translated it perfectly into a digital-first strategy.",
      author: "Beena Kannan, CEO"
    }
  },
  {
    id: 2,
    title: "Enterprise ERP for Higher Education",
    client: "National Institute of Excellence",
    industry: "Education",
    problem: "Manual admission processes and fragmented student data management were causing significant administrative delays.",
    solution: "Deployed EzyCampus ERP with automated admission workflows, integrated fee management, and a comprehensive student lifecycle portal.",
    results: ["60% faster admission processing", "100% digital fee collection", "Enhanced student engagement"],
    image: "https://images.unsplash.com/photo-1523050335392-9bc567547bb3?auto=format&fit=crop&q=80&w=1200",
    testimonial: {
      quote: "The transparency and efficiency brought by EzyCampus have been revolutionary for our institution.",
      author: "Dr. S. Murugan, Registrar"
    }
  }
];

export const CaseStudySystem: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState<number | null>(null);

  const selectedCase = caseStudies.find(c => c.id === selectedId);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-slate-500">Explore how ZIAS helps enterprises navigate digital transformation through real-world case studies.</p>
          </div>
          <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
            View All Case Studies
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((cs) => (
            <div 
              key={cs.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedId(cs.id)}
            >
              <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-[16/9]">
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-widest bg-blue-600 px-4 py-1 rounded-full mb-4 inline-block">
                    {cs.industry}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{cs.title}</h3>
              <p className="text-slate-500 line-clamp-2 mb-6">{cs.problem}</p>
              <div className="flex items-center text-blue-600 font-bold">
                Read Full Case Study <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Detail Modal (Simplified for this view) */}
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-sm">
            <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[40px] relative">
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-200 transition-all z-10"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              
              <div className="p-8 md:p-16">
                <div className="flex items-center space-x-3 mb-8">
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">{selectedCase.industry}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 font-medium">{selectedCase.client}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight">{selectedCase.title}</h2>
                
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Challenge</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">{selectedCase.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Solution</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">{selectedCase.solution}</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 mb-16 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">Measurable Results</h4>
                  <div className="grid sm:grid-cols-3 gap-8">
                    {selectedCase.results.map((res, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{res.split(' ')[0]}</div>
                        <div className="text-sm text-slate-500 font-medium">{res.split(' ').slice(1).join(' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-blue-600 rounded-[40px] text-white">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl flex-shrink-0">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <div>
                    <p className="text-xl italic mb-4">"{selectedCase.testimonial.quote}"</p>
                    <p className="font-bold text-blue-100">— {selectedCase.testimonial.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
