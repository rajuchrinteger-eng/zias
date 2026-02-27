
import React from 'react';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category?: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600", alt: "Office Space", category: "Culture" },
  { id: 2, url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600", alt: "Team Collaboration", category: "Team" },
  { id: 3, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600", alt: "Tech Workshop", category: "Innovation" },
  { id: 4, url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600", alt: "Client Meeting", category: "Business" },
  { id: 5, url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600", alt: "Team Building", category: "Culture" },
  { id: 6, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600", alt: "Design Session", category: "Innovation" },
  { id: 7, url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", alt: "Strategy Meeting", category: "Business" },
  { id: 8, url: "https://images.unsplash.com/photo-1522071823991-b5ae7264714e?auto=format&fit=crop&q=80&w=600", alt: "Team Celebration", category: "Team" },
];

export const ImageGridGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Life at ZIAS</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">A glimpse into our culture, innovation, and the people behind the technology.</p>
        </div>

        <div className="bg-slate-50 p-12 rounded-[60px] border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative group aspect-square overflow-hidden rounded-[32px] bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center px-4">
                    <span className="text-xs font-bold text-white uppercase tracking-widest mb-2 block">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
