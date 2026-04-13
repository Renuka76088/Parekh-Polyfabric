import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Loader2, Image as ImageIcon } from 'lucide-react';
import { mediaApi, IMAGE_BASE_URL } from '../utils/api';

const GalleryPage = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhSouthernPolyfabrics03";

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await mediaApi.getAll(siteId);
        if (response.data && response.data.success) {
          setMedia(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching media:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const staticMedia = [
    { _id: 's1', imageUrl: 'https://media.istockphoto.com/id/1392301250/photo/rolls-of-fabric-and-textiles-in-shop-multi-colors-indian-patterns-on-the-market-fabrics-in.jpg?s=612x612&w=0&k=20&c=hbKhgoVh7HfGfsNV-TwnnhqpptEfZWhQy5Lb7e9um_U=', title: 'Silk Collection' },
    { _id: 's2', imageUrl: 'https://media.istockphoto.com/id/2072341063/photo/handmade-indian-sari-saree-with-golden-details-woman-wear-on-festival-ceremony-and-weddings.jpg?s=612x612&w=0&k=20&c=hI-_zB4AFdpncZuuE7IL1sA38zvyfjW8mygbD0fGnz0=', title: 'Embroidery Work' },
    { _id: 's3', imageUrl: 'https://media.istockphoto.com/id/510685478/photo/traditional-blankets.jpg?s=612x612&w=0&k=20&c=pfrhzJ4QWG2-0SKXwZdFBHbZojm-1c2GwSyBsf_v8gQ=', title: 'Tailoring Studio' },
  ];

  const displayMedia = media.length > 0 ? media : staticMedia;

  return (
    <div className="bg-white min-h-screen py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Minimal Header */}
        <header className="mb-16 border-b border-gray-100 pb-8 text-left flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-gray-900 uppercase">
              Parekh <span className="font-bold text-[#800000]">Southern Fabrics</span>
            </h1>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-[0.3em]">Gallery Archive / 2026</p>
          </div>
          {!loading && media.length > 0 && (
            <span className="text-[10px] font-black text-[#800000] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              {media.length} Dynamic Items
            </span>
          )}
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-[#800000]" size={40} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {displayMedia.map((item, idx) => (
              <motion.div 
                key={item._id || idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-3xl border border-slate-50 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  <img 
                    src={item.imageUrl || (item.image ? `${IMAGE_BASE_URL}/${item.image}` : staticMedia[idx % staticMedia.length].imageUrl)} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col space-y-1 px-2">
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                    Series {idx + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-tight">
                    {item.title || item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && displayMedia.length === 0 && (
            <div className="py-20 text-center text-slate-300 uppercase tracking-widest font-black text-xs">
                Gallery Archives Empty
            </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;