import React from 'react';
import { Camera } from 'lucide-react';

const mediaItems = [
  { id: 1, src: 'https://media.istockphoto.com/id/1392301250/photo/rolls-of-fabric-and-textiles-in-shop-multi-colors-indian-patterns-on-the-market-fabrics-in.jpg?s=612x612&w=0&k=20&c=hbKhgoVh7HfGfsNV-TwnnhqpptEfZWhQy5Lb7e9um_U=', title: 'Silk Collection' },
  { id: 2, src: 'https://media.istockphoto.com/id/2072341063/photo/handmade-indian-sari-saree-with-golden-details-woman-wear-on-festival-ceremony-and-weddings.jpg?s=612x612&w=0&k=20&c=hI-_zB4AFdpncZuuE7IL1sA38zvyfjW8mygbD0fGnz0=', title: 'Embroidery Work' },
  { id: 3, src: 'https://media.istockphoto.com/id/510685478/photo/traditional-blankets.jpg?s=612x612&w=0&k=20&c=pfrhzJ4QWG2-0SKXwZdFBHbZojm-1c2GwSyBsf_v8gQ=', title: 'Tailoring Studio' },
  { id: 4, src: 'https://media.istockphoto.com/id/1072577486/photo/crochet-tassel-fashion-designing-works-for-clothing.jpg?s=612x612&w=0&k=20&c=3Cw8xP0TEKrKKzu0L6HKdpicpKx0nXRNJkKC8YqLgOE=', title: 'Fabric Texture' },
  { id: 5, src: 'https://media.istockphoto.com/id/1223153943/photo/close-up-of-indian-woman-sarees-or-saris-in-retail-display.jpg?s=612x612&w=0&k=20&c=-dU-Qa03QyyzxvVRmq5z-SqYIr0KwgYutS7jBa_Xfi8=', title: 'Design Process' },
  { id: 6, src: 'https://media.istockphoto.com/id/2233565404/photo/authentic-traditional-varanasi-silk-saree-in-different-colors-for-sale-at-indoor-lighting.jpg?s=612x612&w=0&k=20&c=aPSxq4-2OSxN5kl4YRDyLYEe6OWPYsiKfovtXAdw0wk=', title: 'Finished Look' },
];

const MediaGallery = () => {
  return (
    <div className="bg-[#FDFDFD] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#800000] font-black uppercase tracking-[0.3em] text-xs mb-3">
              <Camera size={16} /> Gallery
            </div>
            <h2 className="text-5xl font-black text-[#2d0a4e] uppercase tracking-tighter">
              Our <span className="text-[#800000]">Portfolio</span>
            </h2>
          </div>
          <p className=" font-medium italic border-l-4 border-[#2d0a4e] pl-4">
            Industrial precision meets aesthetic craftsmanship.
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-700 " 
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#2d0a4e]/90 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-[#f1c40f] font-black text-xl tracking-[0.2em] uppercase">{item.title}</span>
                <div className="w-12 h-0.5 bg-[#800000] mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;