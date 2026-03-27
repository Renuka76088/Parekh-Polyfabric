import React from 'react';
import { Star, Quote, ChevronRight, Award } from 'lucide-react';

const ReviewPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Singhania",
      role: "Director, Apex Logistics",
      text: "Parekh Southern has redefined polyfabric standards for us. Their consistency in yarn strength over 8 years is unmatched in India.",
      tag: "Institutional Partner"
    },
    {
      id: 2,
      name: "Ahmed Al-Sayed",
      role: "Gulf Textiles, UAE",
      text: "The export compliance and material quality are world-class. Their zero-defect policy has secured our Middle East supply chain.",
      tag: "Global Export"
    },
    {
      id: 3,
      name: "Vikas Kulkarni",
      role: "National Agri-Solutions",
      text: "Highly impressed with their R&D. The custom high-tenacity fabric they developed exceeded all our durability benchmarks.",
      tag: "Custom R&D"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] font-sans antialiased">
      
      {/* 1. BRANDED BANNER */}
      <section className="relative h-[30vh] w-full flex items-center bg-[#2d0a4e] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #800000 25%, transparent 25%, transparent 50%, #800000 50%, #800000 75%, transparent 75%, transparent)', backgroundSize: '60px 60px' }}></div>
        
        <div className="relative z-10 px-8 md:px-20 flex justify-between items-end w-full pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Verified <span className="text-[#f1c40f]">Impact</span>
            </h1>
            <p className="text-[#f1c40f] text-xs uppercase tracking-[0.4em] mt-4 font-bold">Trusted Industry Excellence since 2007</p>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-white text-5xl font-black leading-none">4.9</p>
             <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2 font-bold">Global Satisfaction Rating</p>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS GRID */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="group bg-white border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="mb-8 text-[#800000]">
                <Quote size={32} />
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest text-[#2d0a4e] bg-[#fdf2f2] px-3 py-1 mb-6 inline-block">
                {review.tag}
              </span>

              <p className="text-[20px] text-gray-700 leading-relaxed font-medium mb-10 italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <h4 className="text-sm font-black text-[#2d0a4e] uppercase tracking-tight">{review.name}</h4>
                  <p className="text-xs text-gray-500 font-bold mt-0.5">{review.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#800000] text-[#800000]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#2d0a4e] text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg shadow-2xl">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Your trust drives our innovation.</h2>
            <p className="text-gray-300 text-sm mt-2 font-medium">Join our network of 500+ global industrial partners.</p>
          </div>
          
          <button className="bg-[#800000] text-white px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-[#2d0a4e] transition-all">
            Write a Review <ChevronRight size={16} />
          </button>
        </div>
      </section>


    </div>
  );
};

export default ReviewPage;