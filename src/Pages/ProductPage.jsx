import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Loader2, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { productApi } from '../utils/api';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

const staticCategories = [
  {
    name: "Elite Silk Collection",
    id: "CAT-01",
    products: [
      { id: "S-01", name: "Heritage Maroon", img: "https://media.istockphoto.com/id/1871845292/photo/indian-woman-wear-saris-or-sarees-hung-in-shop-display.jpg?s=612x612&w=0&k=20&c=Y5wt00aYunebppENjePriDezzHmmGTFcodEnQX_aNq8=" },
      { id: "S-02", name: "Zari Golden Gold", img: "https://media.istockphoto.com/id/1223153943/photo/close-up-of-indian-woman-sarees-or-saris-in-retail-display.jpg?s=612x612&w=0&k=20&c=-dU-Qa03QyyzxvVRmq5z-SqYIr0KwgYutS7jBa_Xfi8=" },
      { id: "S-03", name: "Royal Purple Silk", img: "https://media.istockphoto.com/id/1072577486/photo/crochet-tassel-fashion-designing-works-for-clothing.jpg?s=612x612&w=0&k=20&c=3Cw8xP0TEKrKKzu0L6HKdpicpKx0nXRNJkKC8YqLgOE=" },
      { id: "S-04", name: "Crimson Weave", img: "https://media.istockphoto.com/id/1349916459/photo/artistic-variety-shade-tone-colors-ornaments-patterns-closeup-view-of-stacked-saris-or-sarees.jpg?s=612x612&w=0&k=20&c=9SBwx8nIGkzSxQwu-LHbfulDG3OJ9bjdvUJrjBIj3pE=" },
    ]
  },
  {
    name: "Industrial Poly-Fabrics",
    id: "CAT-02",
    products: [
      { id: "I-01", name: "Deep Blue Tech", img: "https://media.istockphoto.com/id/510685478/photo/traditional-blankets.jpg?s=612x612&w=0&k=20&c=pfrhzJ4QWG2-0SKXwZdFBHbZojm-1c2GwSyBsf_v8gQ=" },
      { id: "I-02", name: "Reinforced Grey", img: "https://media.istockphoto.com/id/485112904/photo/antique-asian-textile.jpg?s=612x612&w=0&k=20&c=7BVSZkiNwB635F2LCaxbVWFE570UvjyJckCq6gNxPaE=" },
      { id: "I-03", name: "Tough Mesh Poly", img: "https://media.istockphoto.com/id/2214970642/photo/handwoven-fabric-patterns-and-handwoven-silk-patterns-of-thai-people-native-fabric-pattern.jpg?s=612x612&w=0&k=20&c=vDcqZB0h-kELLH24r7KIJLrG8gJAQYjds9KxFXyHXy8=" },
      { id: "I-04", name: "Cargo Industrial", img: "https://media.istockphoto.com/id/1147530393/photo/colorful-fabric-cuts-folded-one-on-one-woven-texture-background.jpg?s=612x612&w=0&k=20&c=gs92ut1_zC19tcLCtq3RqvuVDRSUq2PwMUPWXRJNKmg=" },
    ]
  }
];

const ProductPage = () => {
  const swiperRefs = useRef([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhSouthernPolyfabrics03";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getAll(siteId);
        if (response.data && response.data.success && response.data.data.length > 0) {
          const grouped = response.data.data.reduce((acc, product) => {
            const catName = product.category || "General Catalogue";
            if (!acc[catName]) {
              acc[catName] = {
                name: catName,
                id: `CAT-${Object.keys(acc).length + 1}`,
                products: []
              };
            }
            acc[catName].products.push({
              id: product._id,
              name: product.title || product.name,
              img: product.imageUrl || (product.image ? `http://localhost:5000/${product.image}` : staticCategories[0].products[0].img)
            });
            return acc;
          }, {});

          setCategories(Object.values(grouped));
        } else {
          setCategories(staticCategories);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setCategories(staticCategories);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
        <Loader2 className="animate-spin text-[#800000] mb-8" size={64} />
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Establishing Secure Database Link...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFDFD] min-h-screen py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Branding Header */}
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="border-l-8 border-[#2d0a4e] pl-8">
            <span className="text-[11px] font-black text-[#800000] uppercase tracking-[0.5em] block mb-4 italic">Corporate Inventory</span>
            <h1 className="text-4xl md:text-7xl font-black text-[#2d0a4e] uppercase tracking-tighter leading-none mb-2">
              Parekh <span className="text-transparent" style={{ WebkitTextStroke: '1px #cbd5e1' }}>Catalogue</span>
            </h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
              High-Precision Industrial Textile Solutions.
            </p>
          </div>
          <div className="bg-[#2d0a4e] text-white px-8 py-4 rounded-3xl flex items-center gap-4 shadow-xl">
            <ShoppingBag size={18} className="text-[#f1c40f]" />
            <span className="text-[11px] font-black uppercase tracking-widest">{categories.reduce((acc, c) => acc + c.products.length, 0)} Active Patterns</span>
          </div>
        </header>

        {/* Category Rows Mapping */}
        {categories.map((cat, index) => (
          <div key={cat.id} className="relative group/container mb-24 last:mb-0">
            
            {/* Category Header */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-6 mb-10">
              <div className="flex items-center gap-6">
                <span className="bg-[#800000] text-white w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black">{index + 1}</span>
                <h2 className="text-xl md:text-3xl font-black text-[#2d0a4e] uppercase tracking-tighter">{cat.name}</h2>
              </div>
              <span className="text-[10px] text-slate-300 font-black uppercase tracking-widest">{cat.id} // SEC_{cat.name.slice(0,3).toUpperCase()}</span>
            </div>

            {/* --- MOBILE VIEW --- */}
            <div className="md:hidden grid grid-cols-1 gap-12">
              {cat.products.map((product) => (
                <div key={product.id} className="group/card">
                  <div className="aspect-[4/5] bg-slate-50 overflow-hidden rounded-[2rem] shadow-sm mb-6">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-4">
                    <p className="text-[10px] text-[#800000] font-black uppercase tracking-[0.2em] mb-2 font-mono">ID_{product.id.slice(-6).toUpperCase()}</p>
                    <h3 className="text-2xl font-black text-[#2d0a4e] uppercase tracking-tighter">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* --- DESKTOP VIEW: Swiper Slider --- */}
            <div className="hidden md:block relative">
              {/* Custom Arrows */}
              <button 
                onClick={() => swiperRefs.current[index]?.slidePrev()}
                className="absolute left-[-2rem] top-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#2d0a4e] shadow-2xl hover:bg-[#800000] hover:text-white transition-all transform hover:scale-110 opacity-0 group-hover/container:opacity-100"
              >
                <ChevronLeft size={24} strokeWidth={3} />
              </button>

              <button 
                onClick={() => swiperRefs.current[index]?.slideNext()}
                className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#2d0a4e] shadow-2xl hover:bg-[#800000] hover:text-white transition-all transform hover:scale-110 opacity-0 group-hover/container:opacity-100"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>

              <Swiper
                onBeforeInit={(swiper) => {
                  swiperRefs.current[index] = swiper;
                }}
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="!py-4"
              >
                {cat.products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="group/card relative">
                      <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-sm transition-all duration-700 group-hover/card:shadow-2xl group-hover/card:shadow-slate-200">
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000"
                          onError={(e) => { e.target.src = staticCategories[0].products[0].img }}
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500">
                          <button className="w-full bg-[#800000] text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3">
                            Enquire Now <ArrowUpRight size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-8 px-4 opacity-70 group-hover/card:opacity-100 transition-opacity">
                        <p className="text-[10px] text-[#800000] font-black uppercase tracking-[0.2em] mb-2">Pattern Reflex // {cat.id}</p>
                        <h3 className="text-xl font-black text-[#2d0a4e] uppercase tracking-tighter leading-none">{product.name}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;