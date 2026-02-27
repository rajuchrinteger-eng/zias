
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Upload, X, Plus, Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

export const GallerySection: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    { id: '1', url: 'https://picsum.photos/seed/zias1/800/600', caption: 'Innovation Hub' },
    { id: '2', url: 'https://picsum.photos/seed/zias2/800/600', caption: 'Digital Transformation' },
    { id: '3', url: 'https://picsum.photos/seed/zias3/800/600', caption: 'Team Collaboration' },
    { id: '4', url: 'https://picsum.photos/seed/zias4/800/600', caption: 'Future Vision' },
  ]);

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage: GalleryImage = {
          id: Date.now().toString(),
          url: reader.result as string,
          caption: file.name.split('.')[0],
        };
        setImages(prev => [newImage, ...prev]);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-4">
              Visual Journey
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Gallery</h2>
            <p className="text-slate-500">A collection of moments, milestones, and the people who make Zias Innovative Technologies what it is today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
            <button 
              onClick={handleUploadClick}
              disabled={isUploading}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg disabled:opacity-50"
            >
              {isUploading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <Upload size={18} />
              )}
              Upload Image
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {images.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100"
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-sm truncate">{image.caption}</p>
                  </div>
                  <button 
                    onClick={() => removeImage(image.id)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Empty State / Add Placeholder */}
          <button 
            onClick={handleUploadClick}
            className="aspect-[4/3] rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-400 hover:border-blue-400 hover:text-blue-500 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Plus size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Add Picture</span>
          </button>
        </div>
      </div>
    </section>
  );
};
