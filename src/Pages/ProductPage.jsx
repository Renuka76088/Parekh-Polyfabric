import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Loader2, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { productApi } from '../utils/api';

import 'swiper/css';
import 'swiper/css/navigation';

const staticCategories = [
  {
    name: "Silk",
    id: "CAT-SILK",
    products: [
      { id: "S-01", name: "Heritage Maroon Silk", img: "https://media.istockphoto.com/id/1871845292/photo/indian-woman-wear-saris-or-sarees-hung-in-shop-display.jpg?s=612x612&w=0&k=20&c=Y5wt00aYunebppENjePriDezzHmmGTFcodEnQX_aNq8=" },
      { id: "S-02", name: "Zari Golden Silk", img: "https://media.istockphoto.com/id/1223153943/photo/close-up-of-indian-woman-sarees-or-saris-in-retail-display.jpg?s=612x612&w=0&k=20&c=-dU-Qa03QyyzxvVRmq5z-SqYIr0KwgYutS7jBa_Xfi8=" },
      { id: "S-03", name: "Royal Purple Silk", img: "https://media.istockphoto.com/id/1072577486/photo/crochet-tassel-fashion-designing-works-for-clothing.jpg?s=612x612&w=0&k=20&c=3Cw8xP0TEKrKKzu0L6HKdpicpKx0nXRNJkKC8YqLgOE=" },
    ]
  },
  {
    name: "Polyester",
    id: "CAT-POLY",
    products: [
      { id: "I-01", name: "Deep Blue Tech Poly", img: "https://media.istockphoto.com/id/510685478/photo/traditional-blankets.jpg?s=612x612&w=0&k=20&c=pfrhzJ4QWG2-0SKXwZdFBHbZojm-1c2GwSyBsf_v8gQ=" },
      { id: "I-02", name: "Reinforced Grey Mesh", img: "https://media.istockphoto.com/id/485112904/photo/antique-asian-textile.jpg?s=612x612&w=0&k=20&c=7BVSZkiNwB635F2LCaxbVWFE570UvjyJckCq6gNxPaE=" },
    ]
  }
];

const fabricFilters = [
  "All",
  "Cotton",
  "Polycotton",
  "Silk",
  "Polyester",
  "Nylon",
  "Chiffon",
  "Georgette",
  "Spandex",
  "Velvet",
  "Rayon",
  "Viscose",
  "Linen",
  "Satin"
];
const ProductPage = () => {
  const swiperRefs = useRef([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const siteId = "ParekhSouthernPolyfabrics03";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getAll(siteId);
        if (response.data?.success && response.data.data.length > 0) {
          const grouped = response.data.data.reduce((acc, product) => {
            const catName = product.category || "General Catalogue";
            if (!acc[catName]) acc[catName] = { name: catName, id: `CAT-${Object.keys(acc).length + 1}`, products: [] };
            acc[catName].products.push({
              id: product._id,
              name: product.title || product.name,
              img: product.imageUrl || (product.image ? `http://localhost:5000/${product.image}` : "https://via.placeholder.com/400")
            });
            return acc;
          }, {});
          setCategories(Object.values(grouped));
        } else {
          setCategories(staticCategories);
        }
      } catch (error) {
        setCategories(staticCategories);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const displayedCategories = activeFilter === "All"
    ? categories
    : categories.filter(cat => cat.name.toLowerCase() === activeFilter.toLowerCase());

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Loader2 className="animate-spin text-[#800000] mb-4" size={48} />
      <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">Loading Inventory...</p>
    </div>
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-16 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Compact Header */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] font-bold text-[#800000] uppercase tracking-[0.4em] block mb-2">Parekh Southern Polyfabrics</span>
            <h1 className="text-3xl md:text-5xl font-black text-[#2d0a4e] uppercase tracking-tighter">
              The <span className="text-transparent" style={{ WebkitTextStroke: '1px #2d0a4e' }}>Catalogue</span>
            </h1>
          </div>
          <div className="bg-[#2d0a4e] text-white px-6 py-2.5 rounded-full flex items-center gap-3 shadow-lg scale-90 md:scale-100">
            <ShoppingBag size={16} className="text-[#f1c40f]" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {displayedCategories.reduce((acc, c) => acc + c.products.length, 0)} Patterns
            </span>
          </div>
        </header>

        {/* Filters - Scrollable on mobile */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar justify-start md:justify-center">
          {fabricFilters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap border
                ${activeFilter === item ? 'bg-[#800000] text-white border-[#800000] shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-[#800000]'}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Category Sections */}
        {displayedCategories.length > 0 ? (
          displayedCategories.map((cat, index) => (
            <section key={cat.id} className="mb-16 group/section">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] flex-1 bg-slate-200"></div>
                <h2 className="text-sm md:text-lg font-black text-[#2d0a4e] uppercase tracking-widest px-4">{cat.name}</h2>
                <div className="h-[1px] flex-1 bg-slate-200"></div>
              </div>

              <div className="relative px-2 md:px-10">
                {/* Custom Navigation */}
                <button
                  onClick={() => swiperRefs.current[index]?.slidePrev()}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#2d0a4e] hover:bg-[#800000] hover:text-white transition-all hidden md:flex"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => swiperRefs.current[index]?.slideNext()}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#2d0a4e] hover:bg-[#800000] hover:text-white transition-all hidden md:flex"
                >
                  <ChevronRight size={20} />
                </button>

                <Swiper
                  onBeforeInit={(swiper) => { swiperRefs.current[index] = swiper; }}
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1.2}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 }
                  }}
                  autoplay={{ delay: 4000 }}
                  className="pb-8"
                >
                  {cat.products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className="group/card bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                        {/* Image Wrapper with Aspect Ratio to prevent giant cards */}
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white text-[#2d0a4e] p-3 rounded-full transform translate-y-4 group-hover/card:translate-y-0 transition-transform">
                              <ArrowUpRight size={20} />
                            </button>
                          </div>
                        </div>
                        <div className="p-4 text-center">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter mb-1">ID: {product.id.slice(-5)}</p>
                          <h3 className="text-xs md:text-sm font-black text-[#2d0a4e] uppercase truncate">{product.name}</h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-100">
            <p className="text-slate-400 text-sm font-bold uppercase">No designs found under this filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;