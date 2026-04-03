import React from 'react';
import { ChevronRight } from 'lucide-react'; // Icon for better UX

const mouCategories = [
  {
    title: "Information Technology",
    items: [
      "Social Media Marketing",
      "Dynamic Website Development",
      "Digital Marketing",
      "Software Development",
      "Mobile App Development",
      "Outdoor Publicity & Advertisement"
    ]
  },
  {
    title: "Textile & Garments",
    items: [
      "Supply and Installation of Sewing Machines",
      "Supply of Cotton Fabrics (Multiple TC)",
      "Supply of Poplin Materials",
      "Supply of Cotton Bedsheets (White)"
    ]
  },
  {
    title: "Pulp & Paper",
    items: [
      "Supply of Andhra Tulip Papers",
      "Multiple GSM Variants Available",
      "Bulk Distribution Strategy"
    ]
  }
];

const ManagementPage = () => {
  return (
    <div className="bg-[#fdf8fe] min-h-screen font-sans selection:bg-[#800000] selection:text-white">
      
      {/* --- HERO HEADER --- */}
      <header className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-[10%] py-12 md:py-20 bg-gradient-to-b md:bg-gradient-to-r from-[#f8f6fc] from-60% to-[#800000] to-40% overflow-hidden">
        <div className="max-w-full md:max-w-[55%] z-10 text-center md:text-left">
          <span className="inline-block bg-[#C5A059] text-white px-6 md:px-8 py-2 rounded-full text-[10px] md:text-sm tracking-[3px] mb-6 font-medium uppercase">
            ESTD. 2009
          </span>
          <h1 className="text-4xl md:text-7xl font-light text-[#800000] leading-tight uppercase tracking-tighter">
            Southern <br /> 
            <span className="text-[#C5A059] italic block">Management</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-gray-600 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
            Indian Companies and Agencies are invited for the <strong>Memorandum of Understanding (M.O.U.)</strong> for our strategic cross-industry projects.
          </p>
        </div>
        
        {/* Hero Image - Mobile Adjusted */}
        <div className="relative mt-12 md:mt-0 w-full md:w-[40%] h-[40vh] md:h-[65vh] bg-gray-200 rounded-t-[150px] md:rounded-[200px_200px_0_0] shadow-[15px_15px_0_#C5A059] md:shadow-[30px_30px_0_#C5A059] overflow-hidden border-4 md:border-8 border-white">
          <img 
            src="https://media.istockphoto.com/id/1181164878/photo/in-a-rotating-machinery-and-equipment-production-company.jpg?s=612x612&w=0&k=20&c=hQsRWHPA9IgOmOl49Bzumaa-N9VjRtHT5hyNmCh-LKI=" 
            alt="Management" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </header>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-16 md:py-24 px-6 md:px-[10%] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
            alt="Collaboration" 
            className="rounded-2xl w-full shadow-xl"
          />
          <div className="absolute -bottom-6 -right-3 md:-right-10 bg-[#800000] text-white w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center text-center p-3 text-[10px] md:text-xs font-bold border-4 md:border-8 border-white uppercase tracking-widest leading-tight shadow-xl">
            Collaboration Roadmap
          </div>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed text-center md:text-left">
            We invite eligible agencies to discuss the <b>Roadmap and Execution Strategy</b> for collaborative growth.
          </p>
        </div>
      </section>

      {/* --- PROJECT REQUIREMENTS (Vertical on Mobile) --- */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] text-white">
        <div className="px-6 md:px-[10%] mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-light text-[#C5A059] uppercase tracking-[0.2em]">
            Project Requirements
          </h2>
          <div className="h-1 w-20 bg-[#800000] mt-4 mx-auto md:mx-0"></div>
        </div>
        
        {/* Responsive Grid: 1 Col on Mobile, 3 Col on Desktop */}
        <div className="px-6 md:px-[10%] grid grid-cols-1 md:grid-cols-3 gap-8">
          {mouCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-[#252525] p-8 rounded-xl border-l-4 md:border-l-0 md:border-b-4 border-[#C5A059] 
                         hover:bg-[#800000] transition-all duration-500"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#C5A059] mb-6 uppercase tracking-widest group-hover:text-white transition-colors">
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-[13px] md:text-sm font-light opacity-80 flex items-center gap-3">
                    <ChevronRight size={14} className="text-[#C5A059] group-hover:text-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- SIGNATURE CTA --- */}
      <section className="py-20 px-6 md:px-[10%]">
        <div className="border-2 border-[#800000]/30 p-8 md:p-20 rounded-2xl relative text-center bg-white shadow-sm">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#fdf8fe] px-4 text-5xl text-[#C5A059]">“</span>
          <h2 className="text-2xl md:text-4xl font-light text-[#800000] mb-6 uppercase tracking-tighter">
            Leadership with Integrity
          </h2>
          <p className="text-sm md:text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Building a legacy of trust and quality in every thread. Contact us to finalize the M.O.U. and start the execution phase.
          </p>
          <button className="w-full md:w-auto bg-[#800000] text-white px-10 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all duration-500 shadow-lg active:scale-95">
            Contact for MOU
          </button>
        </div>
      </section>
    </div>
  );
};

export default ManagementPage;