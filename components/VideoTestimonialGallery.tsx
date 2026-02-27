
import React, { useState, useRef } from 'react';

interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
  avatar: string;
  brandLogo?: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Lidia Popiel",
    role: "photographer, model",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "I believe that my current well-being, skin, appearance is the sum of conscious choices...",
    avatar: "https://picsum.photos/seed/lidia/100/100",
    brandLogo: "https://picsum.photos/seed/logo1/50/80"
  },
  {
    id: 2,
    name: "Piotr Czaykowski",
    role: "entrepreneur",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "...two capsules that support the entire body in its proper functioning...",
    avatar: "https://picsum.photos/seed/piotr/100/100",
    brandLogo: "https://picsum.photos/seed/logo2/50/80"
  },
  {
    id: 3,
    name: "Joanna Jóźwik",
    role: "olympian, runner",
    thumbnail: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "...supplementing the diet with what my body needs to function optimally...",
    avatar: "https://picsum.photos/seed/joanna/100/100",
    brandLogo: "https://picsum.photos/seed/logo3/50/80"
  },
  {
    id: 4,
    name: "Dominika Fetraś",
    role: "journalist, blogger",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "...I see huge effects of my supplementation and I see it in the condition of my skin, hair and nails...",
    avatar: "https://picsum.photos/seed/dominika/100/100",
    brandLogo: "https://picsum.photos/seed/logo4/50/80"
  }
];

export const VideoTestimonialGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">They chose ZIAS. Listen.</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative group max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-emerald-500 hover:text-white"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 flex flex-col group/card transition-all duration-500 hover:shadow-emerald-100/50"
              >
                {/* Card Header - Greyish bar like screenshot */}
                <div className="p-6 flex items-center space-x-4 bg-slate-50 border-b border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none">{t.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{t.role}</p>
                  </div>
                </div>

                {/* Card Media */}
                <div className="relative aspect-[3/4.5] overflow-hidden">
                  <img 
                    src={t.thumbnail} 
                    alt={t.name} 
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover/card:bg-black/10 transition-colors"></div>
                  
                  {/* Play Button Overlay - Simple Triangle like screenshot */}
                  <button 
                    onClick={() => setActiveVideo(t.videoUrl)}
                    className="absolute top-8 left-8 text-white drop-shadow-lg hover:scale-125 transition-transform"
                  >
                    <i className="fa-solid fa-play text-2xl"></i>
                  </button>
                </div>

                {/* Card Footer - Yellow block with overlapping image */}
                <div className="p-8 bg-[#E6F05C] relative min-h-[180px] flex items-center">
                  {/* Overlapping Product/Logo Image */}
                  <div className="absolute -top-16 left-6 w-20 h-32 z-10">
                    <img 
                      src={t.brandLogo} 
                      alt="Brand" 
                      className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
                    />
                  </div>
                  <p className="text-slate-900 font-bold leading-relaxed pl-24 text-sm">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-emerald-500 w-4' : 'bg-slate-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-8 right-8 text-white text-3xl hover:text-emerald-400 transition-colors"
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe 
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
