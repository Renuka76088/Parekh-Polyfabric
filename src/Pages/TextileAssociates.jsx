import React from 'react';

const TextileAssociates = () => {
  const overlayPoints = [
    { label: "Parekh Fabrics", style: "top-[45.6%] left-[24.3%]" },
    { label: "Parekh Silk", style: "top-[52.8%] left-[27.2%]" },
    { label: "Parekh e-Trade Market", style: "top-[65.5%] left-[40.5%]" },
    { label: "Chamber of Textile", style: "top-[75.3%] left-[33.6%]" },
    { label: "Parekh Rayon", style: "top-[52.8%] left-[48%]" },
    { label: "Parekh Linen", style: "top-[47.7%] left-[62.4%]" },
    { label: "Parekh Southern Polyfabrics", style: "top-[77.2%] left-[54.4%]" },
  ];

  const mapDots = [
    { class: "top-[75%] left-[45%]" }, { class: "top-[60%] left-[50%]" },
    { class: "top-[55%] left-[30%]" }, { class: "top-[78%] left-[55%]" },
    { class: "top-[40%] left-[20%]" }, { class: "top-[55%] left-[75%]" },
    { class: "top-[48%] left-[60%]" }, { class: "top-[45%] left-[48%]" },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 px-6 font-sans text-stone-900">
      {/* Header */}
      <div className="text-center border-b-2 border-[#2d0a4e] pb-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-[#2d0a4e]">Textile Industry Network Map</h1>
        <p className="text-[#800000] font-bold uppercase mt-3 tracking-widest text-lg">H.C. Parekh & Associates • F.Y. 2025-27</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Map Box */}
        <div className="relative bg-stone-900 aspect-square lg:aspect-[1/1.1] border-2 border-[#2d0a4e] overflow-hidden group hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[10px_10px_0px_#800000] transition-all">
          <img 
            src="https://img.freepik.com/premium-vector/highly-detailed-india-map-with-outline-state-country-borders-vector-illustration_1234516-172.jpg" 
            alt="Map" 
            className="w-full h-full object-contain grayscale"
          />
          
          {/* Overlay Points */}
          {overlayPoints.map((p, i) => (
            <div key={i} className={`absolute bg-[#2d0a4e]/90 text-white text-[10px] font-bold px-1.5 py-0.5 whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 ${p.style}`}>
              {p.label}
            </div>
          ))}

          {/* Map Dots */}
          {mapDots.map((d, i) => (
            <div key={i} className={`absolute w-3 h-3 bg-[#800000] rounded-full cursor-pointer animate-pulse ${d.class}`} />
          ))}
        </div>

        {/* Info Box */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-[#2d0a4e] p-6 text-center hover:border-[#800000] transition-colors">
            <h3 className="text-xs font-bold uppercase text-[#800000] mb-2">Total Cities</h3>
            <p className="text-4xl font-extrabold text-[#2d0a4e]">08</p>
          </div>
          <div className="border-2 border-[#2d0a4e] p-6 text-center hover:border-[#800000] transition-colors">
            <h3 className="text-xs font-bold uppercase text-[#800000] mb-2">Active Tenders</h3>
            <p className="text-4xl font-extrabold text-[#2d0a4e]">12</p>
          </div>

          <div className="col-span-2 border-2 border-[#2d0a4e] p-6 bg-white">
            <h4 className="text-xs font-bold uppercase text-[#800000] mb-4">Association Key Locations</h4>
            <div className="grid grid-cols-2 gap-y-3 font-semibold text-sm">
              {['Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Ahmedabad', 'Bhubaneswar', 'Raipur', 'Nagpur'].map(city => (
                <span key={city} className="flex items-center">
                  <span className="text-[#800000] mr-2">→</span> {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center pt-8 border-t border-stone-300 text-[10px] font-bold uppercase text-stone-400">
        HC Parekh & Associates | Leading Industrial Consultant Since 2007
      </footer>
    </div>
  );
};

export default TextileAssociates;