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
            ESTD. 2007
          </span>
          <h1 className="text-4xl md:text-7xl font-light text-[#800000] leading-tight uppercase tracking-tighter">
            Southern <br /> 
            <span className="text-[#C5A059] italic block">Management</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-gray-600 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
         Parekh Southern Polyfabrics is administered and governed by the highly skilled, experienced and qualified Management

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

   
     
    </div>
  );
};

export default ManagementPage;