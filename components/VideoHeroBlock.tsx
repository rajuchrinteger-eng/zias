
import React, { useState } from 'react';

interface VideoHeroBlockProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  speakerName: string;
  speakerTitle: string;
  outcomes: string[];
  ctaText: string;
  onCtaClick: () => void;
  trustIndicators?: { label: string; value: string }[];
  themeColor?: string; // e.g., 'emerald', 'blue', 'purple'
}

export const VideoHeroBlock: React.FC<VideoHeroBlockProps> = ({
  title,
  subtitle,
  description,
  videoUrl,
  thumbnail,
  speakerName,
  speakerTitle,
  outcomes,
  ctaText,
  onCtaClick,
  trustIndicators,
  themeColor = 'emerald'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const colorOptions = {
    emerald: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 text-emerald-600 bg-emerald-50 border-emerald-500/20',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 text-blue-600 bg-blue-50 border-blue-500/20',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200 text-purple-600 bg-purple-50 border-purple-500/20',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 text-indigo-600 bg-indigo-50 border-indigo-500/20',
  };
  const colorClasses = colorOptions[themeColor as keyof typeof colorOptions] || colorOptions.emerald;

  const accentOptions = {
    emerald: 'text-emerald-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    indigo: 'text-indigo-600',
  };
  const accentColor = accentOptions[themeColor as keyof typeof accentOptions] || accentOptions.emerald;

  const bgOptions = {
    emerald: 'bg-emerald-50',
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    indigo: 'bg-indigo-50',
  };
  const bgAccent = bgOptions[themeColor as keyof typeof bgOptions] || bgOptions.emerald;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Video Side */}
          <div className="lg:w-1/2 w-full animate-fade-up">
            <div className="relative group rounded-[40px] overflow-hidden shadow-2xl bg-slate-100 aspect-video">
              {!isPlaying ? (
                <>
                  <img 
                    src={thumbnail} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl shadow-2xl transform group-hover:scale-110 transition-all ${colorClasses.split(' ')[0]} text-white`}
                    >
                      <i className="fa-solid fa-play ml-1"></i>
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">{speakerName}</p>
                    <p className="text-sm text-slate-600">{speakerTitle}</p>
                  </div>
                </>
              ) : (
                <iframe 
                  src={`${videoUrl}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 w-full animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full ${colorClasses.split(' ')[4]} ${colorClasses.split(' ')[5]} ${accentColor} text-[10px] font-bold tracking-widest uppercase mb-8`}>
              {subtitle}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              {description}
            </p>

            <div className="grid sm:grid-cols-1 gap-6 mb-12">
              {outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className={`w-6 h-6 rounded-full ${bgAccent} flex items-center justify-center ${accentColor} flex-shrink-0 mt-1`}>
                    <i className="fa-solid fa-check text-[10px]"></i>
                  </div>
                  <p className="text-slate-700 font-medium">{outcome}</p>
                </div>
              ))}
            </div>

            {trustIndicators && (
              <div className="flex flex-wrap gap-8 mb-12 pb-12 border-b border-slate-100">
                {trustIndicators.map((indicator, i) => (
                  <div key={i}>
                    <div className={`text-2xl font-bold ${accentColor}`}>{indicator.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{indicator.label}</div>
                  </div>
                ))}
              </div>
            )}

            <button 
              onClick={onCtaClick}
              className={`px-12 py-5 rounded-full font-bold transition-all shadow-xl ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} ${colorClasses.split(' ')[2]}`}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
