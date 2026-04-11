import React, { useState, useEffect } from 'react';
import { Camera, Loader2, Image as ImageIcon } from 'lucide-react';
import { mediaApi } from '../utils/api';

const MediaGallery = () => {
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
    { _id: 's4', imageUrl: 'https://media.istockphoto.com/id/1072577486/photo/crochet-tassel-fashion-designing-works-for-clothing.jpg?s=612x612&w=0&k=20&c=3Cw8xP0TEKrKKzu0L6HKdpicpKx0nXRNJkKC8YqLgOE=', title: 'Fabric Texture' },
    { _id: 's5', imageUrl: 'https://media.istockphoto.com/id/1223153943/photo/close-up-of-indian-woman-sarees-or-saris-in-retail-display.jpg?s=612x612&w=0&k=20&c=-dU-Qa03QyyzxvVRmq5z-SqYIr0KwgYutS7jBa_Xfi8=', title: 'Design Process' },
    { _id: 's6', imageUrl: 'https://media.istockphoto.com/id/2233565404/photo/authentic-traditional-varanasi-silk-saree-in-different-colors-for-sale-at-indoor-lighting.jpg?s=612x612&w=0&k=20&c=aPSxq4-2OSxN5kl4YRDyLYEe6OWPYsiKfovtXAdw0wk=', title: 'Finished Look' },
  ];

  const displayMedia = media.length > 0 ? media : staticMedia;

  return (
    <div className="bg-[#FDFDFD] py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 text-[#800000] font-black uppercase tracking-[0.4em] text-[10px] mb-4 bg-[#800000]/5 px-4 py-1.5 rounded-full border border-[#800000]/10 inline-flex">
              <Camera size={14} /> Brand Showcase
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-[#2d0a4e] uppercase tracking-tighter leading-none">
              Our <span className="text-transparent" style={{ color: '#800000' }}>Portfolio</span>
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-4 text-right">
              Industrial precision Meets <br /> Craftsmanship.
            </p>
            {!loading && media.length > 0 && (
              <div className="bg-[#2d0a4e] text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                Live Media: {media.length} Items
              </div>
            )}
          </div>
        </div>

        {/* Grid Layout */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 bg-slate-50 animate-pulse rounded-[2rem]"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {displayMedia.map((item, idx) => (
              <div
                key={item._id}
                className="group relative overflow-hidden bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer border border-slate-50"
              >
                <img
                  src={item.imageUrl || (item.image ? `http://localhost:5000/${item.image}` : staticMedia[idx % staticMedia.length].imageUrl)}
                  alt={item.title}
                  className="w-full h-[30rem] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  onError={(e) => { e.target.src = staticMedia[idx % staticMedia.length].imageUrl }}
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#2d0a4e]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-10 text-center backdrop-blur-sm">
                  <span className="text-[#f1c40f] font-black text-2xl tracking-[0.2em] uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</span>
                  <div className="w-16 h-1 bg-[#800000] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <p className="mt-8 text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">View Collection</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {displayMedia.length === 0 && !loading && (
          <div className="py-40 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
            <ImageIcon size={48} className="mx-auto text-slate-100 mb-6" />
            <h3 className="text-xl font-black text-slate-300 uppercase tracking-tighter">Gallery is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
