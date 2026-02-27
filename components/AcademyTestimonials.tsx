
import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  college: string;
  course: string;
  result: string;
  content: string;
  photo: string;
  videoUrl?: string;
  thumbnail?: string;
}

export const AcademyTestimonials: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState('All');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Arun Kumar',
      college: 'PSG Tech',
      course: 'Digital Marketing Mastery',
      result: 'Placed at Google',
      content: 'The hands-on training at E-Academy helped me land my dream job. The curriculum is perfectly aligned with what industry leaders look for.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      name: 'Priya Dharshini',
      college: 'SRM University',
      course: 'E-Commerce Growth',
      result: 'Started D2C Brand',
      content: 'I learned how to scale a business from scratch. The mentorship provided was invaluable for my entrepreneurial journey.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      name: 'Siddharth R.',
      college: 'VIT Vellore',
      course: 'Advanced Analytics',
      result: 'Data Analyst at Meta',
      content: 'The depth of the syllabus is unmatched. I was able to master complex tools like Google Analytics and ROI tracking in weeks.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    }
  ];

  const groups = ['All', 'PSG Tech', 'SRM University', 'VIT Vellore'];

  const filteredTestimonials = activeGroup === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.college === activeGroup);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Real Learning Impact</h2>
          <p className="text-slate-500">Hear from our students who transformed their careers through E-Academy.</p>
        </div>

        {/* Grouping Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {groups.map(group => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeGroup === group 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Video Testimonials */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center">
              <i className="fa-solid fa-video mr-3 text-emerald-600"></i> Video Stories
            </h3>
            <div className="grid sm:grid-cols-1 gap-6">
              {filteredTestimonials.filter(t => t.videoUrl).map(t => (
                <div key={t.id} className="bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 group">
                  <div className="aspect-video relative">
                    {playingVideo === t.id ? (
                      <iframe 
                        src={`${t.videoUrl}?autoplay=1`}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <img src={t.thumbnail} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                          <button 
                            onClick={() => setPlayingVideo(t.id)}
                            className="w-16 h-16 bg-white text-emerald-600 rounded-full flex items-center justify-center text-xl shadow-2xl hover:scale-110 transition-transform"
                          >
                            <i className="fa-solid fa-play ml-1"></i>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                        <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{t.result}</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">{t.course}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Testimonials Slider/Grid */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center">
              <i className="fa-solid fa-quote-left mr-3 text-emerald-600"></i> Student Feedback
            </h3>
            <div className="grid gap-6">
              {filteredTestimonials.map(t => (
                <div key={t.id} className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-50" />
                    <div>
                      <h4 className="font-bold text-slate-900 leading-none">{t.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{t.college} • {t.course}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">"{t.content}"</p>
                  <div className="mt-6 flex items-center text-emerald-600 font-bold text-[10px] uppercase tracking-widest">
                    <i className="fa-solid fa-star mr-1"></i>
                    <i className="fa-solid fa-star mr-1"></i>
                    <i className="fa-solid fa-star mr-1"></i>
                    <i className="fa-solid fa-star mr-1"></i>
                    <i className="fa-solid fa-star mr-1"></i>
                    <span className="ml-2">Verified Outcome</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Scroll Hint */}
        <div className="mt-12 lg:hidden text-center text-xs text-slate-400 font-medium">
          <i className="fa-solid fa-left-right mr-2"></i> Swipe to explore more stories
        </div>
      </div>
    </section>
  );
};
