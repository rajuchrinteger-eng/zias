
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  videoUrl?: string;
  vertical?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "Retail Matrix",
    content: "ZIAS transformed our legacy retail operations into a modern omnichannel powerhouse. Their deep understanding of the retail domain is unmatched.",
    avatar: "https://picsum.photos/seed/user1/100/100",
    vertical: "Retail"
  },
  {
    id: 2,
    name: "Dr. Anjali Sharma",
    role: "Principal",
    company: "Global Institute of Tech",
    content: "The EzyCampus ERP has streamlined our entire administrative workflow. From admissions to fee management, everything is now automated and transparent.",
    avatar: "https://picsum.photos/seed/user2/100/100",
    vertical: "Education"
  },
  {
    id: 3,
    name: "Kevin Peterson",
    role: "CTO",
    company: "EduVantage",
    content: "The custom software developed by ZIAS is robust and highly scalable. Their engineering team is top-notch and delivered ahead of schedule.",
    avatar: "https://picsum.photos/seed/user3/100/100",
    vertical: "Software"
  }
];

export const TestimonialSystem: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('Global');
  const verticals = ['Global', 'Retail', 'Education', 'Software'];

  const filteredTestimonials = activeTab === 'Global' 
    ? testimonials 
    : testimonials.filter(t => t.vertical === activeTab);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Trusted by industry leaders across retail, education, and technology sectors.</p>
        </div>

        {/* Vertical Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {verticals.map(v => (
            <button
              key={v}
              onClick={() => setActiveTab(v)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === v 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredTestimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-[32px] shadow-xl border border-slate-100 flex flex-col h-full hover:translate-y-[-8px] transition-transform duration-300">
              <div className="flex items-center mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100" />
                <div>
                  <h4 className="font-bold text-slate-900 leading-none">{t.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{t.role}, {t.company}</p>
                </div>
              </div>
              <p className="text-slate-600 italic mb-8 flex-grow">"{t.content}"</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex text-yellow-400 text-xs">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                </div>
                {t.videoUrl && (
                  <button className="text-blue-600 text-xs font-bold flex items-center hover:underline">
                    <i className="fa-solid fa-play-circle mr-1"></i> Watch Video
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
