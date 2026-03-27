import React from 'react';
import { motion } from 'framer-motion';

const fabricGallery = [
  {
    id: 1,
    name: "Heavy Poly-Satin (Mustard Gold)",
    img: "https://media.istockphoto.com/id/1911602548/photo/indian-woman-fashion-wear-sarees-or-saris-in-retail-display-of-a-shop.jpg?s=612x612&w=0&k=20&c=dMnplXE92io-h4sePr5MUlz58MMtkuJV6Zi2cqU-M7k=",
  },
  {
    id: 2,
    name: "Royal Maroon Textured Weave",
    img: "https://media.istockphoto.com/id/1225210811/photo/view-of-indian-woman-tradtional-wear-saree-or-sari-in-retail-display.jpg?s=612x612&w=0&k=20&c=kMIdy_uoLu1C3Zit8CM_2A0pfsUDOWtN9v3eLIHbdVs=",
  },
  {
    id: 3,
    name: "Deep Blue Industrial Poly",
    img: "https://media.istockphoto.com/id/2087956814/photo/closeup-view-of-stacked-saris-or-sarees-in-display-of-retail-shop-for-use-as-indian-textiles.jpg?s=612x612&w=0&k=20&c=3gtGp1HeeVilRjLrX6f1LsbQAjEcMl0_Iwch_pvbf5Y=",
  },
  {
    id: 4,
    name: "Blush Pink Poly-Crepe",
    img: "https://media.istockphoto.com/id/2163593817/photo/high-angle-view-of-sari-against-white-background.jpg?s=612x612&w=0&k=20&c=1cUj6bAAHTn4UzN_YeCIeN-tutW9Xd6QIn8RB5zirVs=",
  },
  {
    id: 5,
    name: "Blush Pink Poly-Crepe",
    img: "https://media.istockphoto.com/id/1072577486/photo/crochet-tassel-fashion-designing-works-for-clothing.jpg?s=612x612&w=0&k=20&c=3Cw8xP0TEKrKKzu0L6HKdpicpKx0nXRNJkKC8YqLgOE=",
  },
  {
    id: 4,
    name: "Blush Pink Poly-Crepe",
    img: "https://media.istockphoto.com/id/466058806/photo/colorful-sari-fabric.jpg?s=612x612&w=0&k=20&c=aBd9SZeMW0ZQrFHLNLwYtd6-IekVMkhssT66qSqjevY=",
  },
  {
    id: 4,
    name: "Blush Pink Poly-Crepe",
    img: "https://media.istockphoto.com/id/1223153943/photo/close-up-of-indian-woman-sarees-or-saris-in-retail-display.jpg?s=612x612&w=0&k=20&c=-dU-Qa03QyyzxvVRmq5z-SqYIr0KwgYutS7jBa_Xfi8=",
  },
  {
    id: 4,
    name: "Blush Pink Poly-Crepe",
    img: "https://media.istockphoto.com/id/466488162/photo/indian-sari-details.jpg?s=612x612&w=0&k=20&c=fGDgzAySH-quqPMXHtoSUG5gGfieEtDlmuhaygFUXkk=",
  }
];

const GalleryPage = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Minimal Header */}
        <header className="mb-16 border-b border-gray-100 pb-8 text-left">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 uppercase">
            Parekh <span className="font-bold text-[#800000]">Southern Fabrics</span>
          </h1>
          <p className="text-gray-400 text-xs mt-2 uppercase tracking-[0.3em]">Gallery Archive / 2026</p>
        </header>

        {/* Systematic Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {fabricGallery.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col group"
            >
              {/* Image Container: Sharp Corners, No Borders */}
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Systematic Text: Simple Font, No Overlays */}
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                  Series {item.id}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-tight">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default GalleryPage;