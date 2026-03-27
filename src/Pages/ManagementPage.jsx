import React from 'react';

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
      <header className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-[10%] py-20 bg-gradient-to-r from-[#f8f6fc] from-60% to-[#800000] to-40% overflow-hidden">
        <div className="max-w-full md:max-w-[50%] z-10">
          <span className="inline-block bg-[#C5A059] text-white px-8 py-2 rounded-full text-sm tracking-[3px] mb-6 font-medium">
            ESTD. 2009
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-[#800000] leading-[1.1] uppercase tracking-tighter">
            Southern <br /> 
            <span className="text-[#C5A059] italic block">Management</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Indian Companies and Agencies are invited for the <strong>Memorandum of Understanding (M.O.U.)</strong> for our strategic cross-industry projects.
          </p>
        </div>
        
        {/* Hero Image / Shape */}
        <div className="relative mt-12 md:mt-0 w-full md:w-[45%] h-[50vh] md:h-[70vh] bg-gray-200 rounded-[200px_200px_0_0] shadow-[30px_30px_0_#C5A059] overflow-hidden border-8 border-white">
          <img 
            src="https://media.istockphoto.com/id/1181164878/photo/in-a-rotating-machinery-and-equipment-production-company.jpg?s=612x612&w=0&k=20&c=hQsRWHPA9IgOmOl49Bzumaa-N9VjRtHT5hyNmCh-LKI=" 
            alt="Management" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </header>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-24 px-[10%] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
            alt="Collaboration" 
            className="rounded-2xl w-full shadow-2xl"
          />
          <div className="absolute -bottom-10 -right-5 md:-right-10 bg-[#800000] text-white w-40 h-40 rounded-full flex items-center justify-center text-center p-4 text-xs font-bold border-8 border-white uppercase tracking-widest leading-tight shadow-xl">
            Collaboration Roadmap
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-2xl font-light text-gray-800 leading-relaxed">
            We invite eligible agencies to discuss the <b>Roadmap and Execution Strategy</b> for collaborative growth in global markets.
          </p>
          <p className="text-lg font-light text-gray-500 italic">
            "Our management emphasizes empowering skilled teams, integrating modern technology, and maintaining precision."
          </p>
        </div>
      </section>

      {/* --- STRATEGY GRID (3 ROWS / CATEGORIES) --- */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="px-[10%] mb-12">
          <h2 className="text-4xl font-light text-[#C5A059] uppercase tracking-widest">
            Project Requirements
          </h2>
        </div>
        
       <div className="flex overflow-x-auto gap-6 px-6 md:px-10 pb-10 no-scrollbar">
  {mouCategories.map((cat, idx) => (
    <div
      key={idx}
      className="flex-shrink-0 min-w-[280px] sm:min-w-[300px] md:min-w-[350px] bg-[#252525] p-8 md:p-10 rounded-xl border-b-4 border-[#C5A059] 
                 hover:bg-[#800000] transition-all duration-500 transform hover:-translate-y-3"
    >
      <h3 className="text-xl md:text-2xl font-medium text-[#C5A059] mb-6 uppercase tracking-tight group-hover:text-white">
        {cat.title}
      </h3>
      <ul className="space-y-3">
        {cat.items.map((item, i) => (
          <li key={i} className="text-sm md:text-base font-light opacity-80 flex items-start gap-2">
            <span className="text-[#C5A059]">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

      </section>

      {/* --- SIGNATURE CALL TO ACTION --- */}
      <section className="py-24 px-[10%]">
        <div className="border-2 border-[#800000] p-12 md:p-20 rounded-2xl relative text-center">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-6 text-6xl text-[#C5A059]">“</span>
          <h2 className="text-4xl font-light text-[#800000] mb-6 uppercase tracking-tighter">
            Leadership with Integrity
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Building a legacy of trust and quality in every thread. Contact us to finalize the M.O.U. and start the execution phase.
          </p>
          <button className="bg-[#800000] text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all duration-500">
            Contact for MOU
          </button>
       
        </div>
      </section>

   

    </div>
  );
};

export default ManagementPage;