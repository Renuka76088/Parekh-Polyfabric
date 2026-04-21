import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "SOUTHERN POLYFABRICS\nPremium Textile Heritage",
    desc: "Exquisite craftsmanship meets modern durability. We specialize in high-quality poly-fabrics with traditional Mustard and Gold aesthetics.",
    btn: "View Collection",
    img: "https://media.istockphoto.com/id/2242318349/photo/khan-saree-traditional-dress-for-navratri-devi-puja-made-for-devi-matarani-goddesses-shringar.jpg?s=612x612&w=0&k=20&c=xYQkESc0y56iOV4ptzeq5P0soZdt3YYiI0a-xPn-Eh4="
  },
  {
    title: "Maroon & Gold\nRoyal Weaving Division",
    desc: "Experience the richness of our specialized Maroon collection, designed for elite garment manufacturers and textile exporters.",
    btn: "Explore Rich Fabrics",
    img: "https://media.istockphoto.com/id/2072342143/photo/handmade-indian-sari-saree-with-golden-details-woman-wear-on-festival-ceremony-and-weddings.jpg?s=612x612&w=0&k=20&c=hmjLZk3B_101KKRSHp8cZEcO__1R8qs3HQ0x0xolato="
  },
  {
    title: "Southern Innovation\nIn Every Thread",
    desc: "Our Pink and Mustard Yellow poly-fabrics combine vibrant traditional colors with long-lasting fabric technology.",
    btn: "Discovery More",
    img: "https://media.istockphoto.com/id/2167265240/photo/red-and-white-colors-background-texture-of-textile.jpg?s=612x612&w=0&k=20&c=dlePgxY0opNMsIVSEDjGfSRAFbcEm4Z2Z7tP75RTvgQ="
  },
];

const featuredProducts = [
  {
    title: "Mustard Gold Poly-Satin",
    subtitle: "Southern Elite Collection",
    desc: "Rich mustard yellow fabric with a golden sheen, perfect for festive ethnic wear and luxury upholstery.",
    price: "₹450 / mtr",
    rating: 4.9,
    img: "https://media.istockphoto.com/id/478842563/photo/colorful-thread.jpg?s=612x612&w=0&k=20&c=PovEn3UUIanMYkooR7uj90AapndTyaWt5xHe5WiI-kY=",
    tag: "Mustard"
  },
  {
    title: "Royal Maroon Textured Fabric",
    subtitle: "Heritage Series",
    desc: "Heavyweight maroon poly-fabric with high durability and soft hand-feel for premium garments.",
    price: "₹520 / mtr",
    rating: 4.8,
    img: "https://media.istockphoto.com/id/2220466368/photo/rich-magenta-fabric-texture-close-up-view-of-luxurious-textile.jpg?s=612x612&w=0&k=20&c=tdfAowDMwl-Fv_0hujouRYKfVFgom7CPvsKHsXWxugQ=",
    tag: "Maroon"
  },
  {
    title: "Deep Blue Industrial Poly",
    subtitle: "Southern Tech Range",
    desc: "Strong navy blue synthetic fabric engineered for durability and long-term use in all climates.",
    price: "₹380 / mtr",
    rating: 4.7,
    img: "https://media.istockphoto.com/id/2156771115/photo/blue-acetate-fabric-textured-background.jpg?s=612x612&w=0&k=20&c=KoQ-8resO_oQBfu427299V-Tyxe6OgJLSxOA_nv26Jo=",
    tag: "Blue"
  },
  {
    title: "Blush Pink Poly-Crepe",
    subtitle: "Fashion Forward",
    desc: "Lightweight and breathable pink fabric, ideal for modern designer wear and lightweight apparel.",
    price: "₹410 / mtr",
    rating: 4.8,
    img: "https://media.istockphoto.com/id/1164034015/photo/abstract-pattern-in-cushion-fabric.jpg?s=612x612&w=0&k=20&c=A8BxD7nTZ7VfZhXaroRIXDWXJb0LLrKwd2YWqgMb9u8=",
    tag: "Pink"
  }
];

function HomePage() {
  const [activeTab, setActiveTab] = useState("Rayon Fabrics");

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">

      {/* Ye wrapper sab content ko center karega aur screen se bahar nahi jaayega */}
      <div className="w-full max-w-[min(100vw,1280px)] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== HERO SLIDER ==================== */}
        <div className="relative h-[60vh] sm:h-[75vh] min-h-[400px] flex items-center justify-center text-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="h-full w-full"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-full w-full flex items-center justify-center text-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2d0a4e]/80 to-transparent" />
                  <div className="relative z-10 px-6 md:px-12 lg:px-20 text-white flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 whitespace-pre-line text-[#f1c40f] break-words">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 max-w-xl lg:max-w-2xl opacity-90 leading-relaxed border-l-4 border-[#e91e63] pl-4">
                      {slide.desc}
                    </p>
                    <a href="#featured" className="inline-block bg-[#800000] text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-md shadow-xl hover:bg-[#a00000] transition-all transform hover:scale-105 text-sm md:text-base">
                      {slide.btn}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ==================== FEATURED PRODUCTS ==================== */}
        <section id="featured" className="py-12 sm:py-16 md:py-20 px-4 md:px-0 max-w-6xl mx-auto text-center">
          <div className="mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#2d0a4e] uppercase tracking-tighter">
              Southern <span className="text-[#800000]">Polyfabrics</span>
            </h2>
            <div className="h-1.5 w-32 bg-[#f1c40f] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto italic">
              A rich palette of traditional colors meet industrial strength. Explore our flagship textile range.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="!pb-10 md:!pb-14"
          >
            {featuredProducts.map((prod, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-b-8 border-[#f1c40f] hover:border-[#800000] transition-all duration-300 group text-center">
                  <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
                    <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 px-3 sm:px-4 py-1 rounded-full text-xs font-bold text-[#800000] shadow-md">
                      {prod.tag} Collection
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#2d0a4e] mb-2">{prod.title}</h4>
                    <span className="text-pink-600 text-xs sm:text-sm font-semibold tracking-wider uppercase">{prod.subtitle}</span>
                    <p className="mt-3 sm:mt-4 text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {prod.desc}
                    </p>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section className="bg-[#fdf2f2] py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl lg:max-w-6xl mx-auto grid md:grid-cols-2 gap-0 shadow-2xl rounded-xl overflow-hidden bg-white">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-l-8 border-[#800000] text-center md:text-left">
              <span className="bg-[#f1c40f] text-[#2d0a4e] text-xs font-bold px-4 py-1 inline-block mb-6 w-fit rounded">

              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#2d0a4e]">
                About <span className="text-[#800000]"> us</span><br />
              </h2>
              <p className="text-gray-600 mb-6 text-base sm:text-lg">
                Parekh Southern Polyfabrics is the Trusted Manufacturer & Supplier of the
                high standard quality of the southern Polyfabrics from lower range to higher
                range at reasonable and low price range with best and premium quality, with
                Quality Assurance and a Quality Seal.
              </p>
              <a href="/media-gallery" className="text-[#800000] font-bold border-b-4 border-[#f1c40f] pb-1 hover:text-[#2d0a4e] transition inline-block w-fit mx-auto md:mx-0">
                EXPLORE OUR GALLERY
              </a>
            </div>
            <div className="min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <img src="https://media.istockphoto.com/id/500896694/photo/silk-weaving.jpg?s=612x612&w=0&k=20&c=3DJsVO6Yr219ynPU1CiirR1YIwsMNbeHfSQBE0n-4VE=" alt="Fabric" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ==================== CONTACT US SECTION ==================== */}
        <section className="bg-[#fffdf5] py-12 sm:py-16 md:py-24 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-10">

            {/* Header Section */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-[#2d0a4e]">
                Contact <span className="text-[#800000]">Us</span>
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg px-2">
                Have questions or want to request a sample? Reach out to our team and we will get back to you promptly.
              </p>
            </div>

            {/* Main Content: Map + Details */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-stretch text-left">

              {/* Left Side: Map Section */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f1c40f]/20 min-h-[300px] sm:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.05146312683011!3d13.04820883041951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3331%3A0x473a48051916f8ca!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Parekh Polyfabrics Location - Chennai"
                ></iframe>
              </div>

              {/* Right Side: Information Cards */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4 sm:space-y-6">

                {/* Contact Info Card */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-8 border-[#800000] h-full flex flex-col justify-center">

                  {/* Phone */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-1 sm:mb-2">Phone</h4>
                    <p className="text-xl sm:text-2xl font-black text-[#2d0a4e]">6353778329</p>
                  </div>

                  {/* Trade Enquiry */}
                  <div className="mb-6 sm:mb-8 overflow-hidden">
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-1 sm:mb-2">Trade Enquiry</h4>
                    <a href="mailto:trade-enquiry@parekhpolyfabrics.com" className="text-sm sm:text-lg font-bold text-gray-800 hover:text-[#800000] transition-colors break-all block">
                      trade-enquiry@parekhpolyfabrics.com
                    </a>
                  </div>

                  {/* Customer Care */}
                  <div className="mb-6 sm:mb-8 overflow-hidden">
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-1 sm:mb-2">Customer Care</h4>
                    <a href="mailto:customer-care@parekhpolyfabrics.com" className="text-sm sm:text-lg font-bold text-gray-800 hover:text-[#800000] transition-colors break-all block">
                      customer-care@parekhpolyfabrics.com
                    </a>
                  </div>

                  {/* Location Details */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Location</h4>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#f1c40f] rounded-full flex-shrink-0"></span>
                      <p className="text-base sm:text-lg font-black text-[#2d0a4e] tracking-wide uppercase">
                        CHENNAI, TN, INDIA
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="bg-[#2d0a4e] text-white py-10 sm:py-12 text-center border-t-8 border-[#f1c40f]">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#f1c40f]">SOUTHERN POLYFABRICS</h3>
            <p className="opacity-70 mb-4 sm:mb-6 text-sm sm:text-base">Quality Textiles | Industrial Strength | Traditional Aesthetics</p>
            <div className="text-xs uppercase tracking-widest text-gray-400">
              © 2026 | All Rights Reserved | Parekh Southern Polyfabrics
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default HomePage;