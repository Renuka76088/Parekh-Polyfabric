import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  {
    name: "Elite Silk Collection",
    id: "CAT-01",
    products: [
      { id: "S-01", name: "Heritage Maroon", price: "₹520", img: "https://media.istockphoto.com/id/1871845292/photo/indian-woman-wear-saris-or-sarees-hung-in-shop-display.jpg?s=612x612&w=0&k=20&c=Y5wt00aYunebppENjePriDezzHmmGTFcodEnQX_aNq8=" },
      { id: "S-02", name: "Zari Golden Gold", price: "₹650", img: "https://media.istockphoto.com/id/1223153943/photo/close-up-of-indian-woman-sarees-or-saris-in-retail-display.jpg?s=612x612&w=0&k=20&c=-dU-Qa03QyyzxvVRmq5z-SqYIr0KwgYutS7jBa_Xfi8=" },
      { id: "S-03", name: "Royal Purple Silk", price: "₹580", img: "https://media.istockphoto.com/id/1072577486/photo/crochet-tassel-fashion-designing-works-for-clothing.jpg?s=612x612&w=0&k=20&c=3Cw8xP0TEKrKKzu0L6HKdpicpKx0nXRNJkKC8YqLgOE=" },
      { id: "S-04", name: "Crimson Weave", price: "₹540", img: "https://media.istockphoto.com/id/1349916459/photo/artistic-variety-shade-tone-colors-ornaments-patterns-closeup-view-of-stacked-saris-or-sarees.jpg?s=612x612&w=0&k=20&c=9SBwx8nIGkzSxQwu-LHbfulDG3OJ9bjdvUJrjBIj3pE=" },
    ]
  },
  {
    name: "Industrial Poly-Fabrics",
    id: "CAT-02",
    products: [
      { id: "I-01", name: "Deep Blue Tech", price: "₹380", img: "https://media.istockphoto.com/id/510685478/photo/traditional-blankets.jpg?s=612x612&w=0&k=20&c=pfrhzJ4QWG2-0SKXwZdFBHbZojm-1c2GwSyBsf_v8gQ=" },
      { id: "I-02", name: "Reinforced Grey", price: "₹350", img: "https://media.istockphoto.com/id/485112904/photo/antique-asian-textile.jpg?s=612x612&w=0&k=20&c=7BVSZkiNwB635F2LCaxbVWFE570UvjyJckCq6gNxPaE=" },
      { id: "I-03", name: "Tough Mesh Poly", price: "₹320", img: "https://media.istockphoto.com/id/2214970642/photo/handwoven-fabric-patterns-and-handwoven-silk-patterns-of-thai-people-native-fabric-pattern.jpg?s=612x612&w=0&k=20&c=vDcqZB0h-kELLH24r7KIJLrG8gJAQYjds9KxFXyHXy8=" },
      { id: "I-04", name: "Cargo Industrial", price: "₹400", img: "https://media.istockphoto.com/id/1147530393/photo/colorful-fabric-cuts-folded-one-on-one-woven-texture-background.jpg?s=612x612&w=0&k=20&c=gs92ut1_zC19tcLCtq3RqvuVDRSUq2PwMUPWXRJNKmg=" },
    ]
  },
  {
    name: "Premium Satin & Crepe",
    id: "CAT-03",
    products: [
      { id: "P-01", name: "Mustard Gold Satin", price: "₹450", img: "https://media.istockphoto.com/id/1387553276/photo/cloth-background.jpg?s=612x612&w=0&k=20&c=GRwOxgtlsU5n2yDC6I2XH96rtZaZn7gMwVi--eaL5zU=" },
      { id: "P-02", name: "Blush Pink Crepe", price: "₹410", img: "https://media.istockphoto.com/id/2167265240/photo/red-and-white-colors-background-texture-of-textile.jpg?s=612x612&w=0&k=20&c=dlePgxY0opNMsIVSEDjGfSRAFbcEm4Z2Z7tP75RTvgQ=" },
      { id: "P-03", name: "Emerald Poly-Satin", price: "₹480", img: "https://media.istockphoto.com/id/2249574368/photo/closeup-view-of-stacked-saris-or-sarees-in-display-of-retail-shop-for-use-as-indian-textiles.jpg?s=612x612&w=0&k=20&c=1dn5kNjciyNqqDJwmZtgylcZo7aZBOWZDSkcvRjWlCY=" },
      { id: "P-04", name: "Ivory Soft Satin", price: "₹430", img: "https://media.istockphoto.com/id/1776560965/photo/fancy-indian-sarees-neatly-stacked-colorful-silk-saris-in-racks-in-a-textile-shop-incredible.jpg?s=612x612&w=0&k=20&c=AZbf08aYqPRcQt_W1Z_ik-lwZTG-STUBhq11QoeXaQM=" },
    ]
  }
];

const ProductPage = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Branding Header */}
        <header className="mb-12 border-l-4 border-[#800000] pl-6">
          <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
            Parekh <span className="text-[#800000]">Catalogue</span>
          </h1>
          <p className="text-[#C5A059] font-semibold text-sm uppercase tracking-wide">
            Inventory Solutions
          </p>
        </header>

        {/* Category Rows */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              {/* Category Title */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">{cat.name}</h2>
                <span className="text-xs font-semibold text-gray-400 tracking-wide">{cat.id}</span>
              </div>

              {/* Product Slider */}
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.2}
                navigation
                breakpoints={{
                  640: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 4 },
                }}
                className="product-row"
              >
                {cat.products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="group border border-gray-200 bg-white p-4 hover:border-[#C5A059] transition-all rounded-lg">
                      {/* Image */}
                      <div className="aspect-[4/5] bg-gray-50 overflow-hidden mb-4 rounded-md">
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Info */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase truncate">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-[#800000]">{product.price} <span className="text-xs text-gray-400">/mtr</span></span>
                          <button className="text-xs font-bold text-[#C5A059] uppercase tracking-wide hover:text-[#800000]">Enquire</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>

      

      </div>
    </div>
  );
};

export default ProductPage;
