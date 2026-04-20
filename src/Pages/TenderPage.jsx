import React from 'react';
import { Scissors, Package, Clock, Truck, CreditCard, ChevronRight, FileText, Factory, Award } from 'lucide-react';

const TenderPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] font-sans py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* --- TOP BRANDING (40+ Age Friendly Large Fonts) --- */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-[#2d0a4e] pb-10 mb-16 gap-8">
          <div className="flex-1">
            <span className="bg-[#800000] text-white px-4 py-1 text-sm font-bold tracking-widest uppercase rounded-sm">
              Official Invitation
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#2d0a4e] uppercase tracking-tighter mt-4 leading-[0.9]">
              PAREKH <br /> <span className="text-[#800000]">SOUTHERN POLYFABRIC</span>
            </h1>
            <p className="text-2xl font-medium text-gray-600 mt-4">Industrial Textile Manufacturing Sector</p>
          </div>

         
        </div>

        {/* --- MAIN NOTICE BOX --- */}
        {/* <div className="bg-white border-2 border-gray-100 shadow-xl rounded-[2rem] overflow-hidden mb-16">
          <div className="bg-[#2d0a4e] p-10 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Expression of Interest (EOI)</h3>

          </div>

          <div className="p-8 md:p-16">



            <p>( At present, no EOI published)
            </p>
          </div>
        </div> */}



        {/* --- CONTACT FOOTER --- */}
        <div className="bg-[#2d0a4e] p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black  mb-6 leading-none">( At Present, No e-Auction published)</h2>
           
            <button className="bg-[#800000] text-white text-xl font-bold px-12 py-6 rounded-full hover:bg-white hover:text-[#2d0a4e] transition-all transform hover:scale-105 shadow-2xl">
              6353778329
            </button>
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -translate-x-32 -translate-y-32" />
        </div>
      </div>
    </div>
  );
};

export default TenderPage;