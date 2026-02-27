
import React, { useState } from 'react';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isLocked: boolean;
  thumbnail: string;
  videoUrl?: string;
  type: 'Demo' | 'Preview' | 'Full';
}

export const LearningLibrary: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const lessons: Lesson[] = [
    {
      id: 1,
      title: 'Introduction to Digital Ecosystems',
      duration: '12:45',
      isLocked: false,
      type: 'Demo',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'SEO Fundamentals & Keyword Research',
      duration: '18:20',
      isLocked: false,
      type: 'Preview',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Advanced Meta Ads Strategy',
      duration: '24:15',
      isLocked: true,
      type: 'Full',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      title: 'ROI Tracking with GA4',
      duration: '15:30',
      isLocked: true,
      type: 'Full',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience the Learning Quality</h2>
          <p className="text-slate-500">Preview our course content and teaching methodology before you enroll.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id} 
              className={`group relative rounded-[32px] overflow-hidden border transition-all duration-500 ${
                lesson.isLocked ? 'border-slate-100 opacity-70 grayscale hover:grayscale-0' : 'border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              <div className="aspect-video relative">
                {activeVideo === lesson.id && !lesson.isLocked ? (
                  <iframe 
                    src={`${lesson.videoUrl}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
                      {!lesson.isLocked ? (
                        <button 
                          onClick={() => setActiveVideo(lesson.id)}
                          className="w-12 h-12 bg-white text-emerald-600 rounded-full flex items-center justify-center text-lg shadow-2xl hover:scale-110 transition-transform"
                        >
                          <i className="fa-solid fa-play ml-1"></i>
                        </button>
                      ) : (
                        <div className="w-12 h-12 bg-slate-900/50 text-white rounded-full flex items-center justify-center text-lg backdrop-blur-md">
                          <i className="fa-solid fa-lock"></i>
                        </div>
                      )}
                    </div>
                  </>
                )}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                  {lesson.type}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{lesson.title}</h4>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <i className="fa-solid fa-clock mr-1"></i> {lesson.duration}
                  </div>
                  {!lesson.isLocked ? (
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Free Preview</span>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enroll to Unlock</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-500 mb-8 font-medium">“Experience the learning quality before enrollment.”</p>
          <button className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-all shadow-xl shadow-slate-200">
            Enroll in Full Course
          </button>
        </div>
      </div>
    </section>
  );
};
