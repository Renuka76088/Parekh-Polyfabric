import React from 'react';
import { Scissors, Package, Clock, Truck, CreditCard, ChevronRight, FileText, Factory, Award } from 'lucide-react';

const TenderPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] font-sans py-8 md:py-12 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        {/* --- TOP BRANDING (Responsive Fonts) --- */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-[#2d0a4e] pb-8 md:pb-10 mb-10 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
          <div className="flex-1 w-full">
            <span className="inline-block bg-[#800000] text-white px-4 py-1 text-xs md:text-sm font-bold tracking-widest uppercase rounded-sm">
              Official Invitation
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#2d0a4e] uppercase tracking-tighter mt-4 leading-[0.9] md:leading-[0.9]">
              PAREKH <br /> <span className="text-[#800000]">SOUTHERN POLYFABRIC</span>
            </h1>
            <p className="text-lg md:text-2xl font-medium text-gray-600 mt-4 leading-tight">
              Industrial Textile Manufacturing Sector
            </p>
          </div>
        </div>

        {/* --- MAIN CONTENT / NOTICE BOX --- */}
        {/* Placeholder for future EOI or Tenders */}

        {/* --- CONTACT FOOTER / NO AUCTION BOX --- */}
        <div className="bg-[#2d0a4e] p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            {/* Responsive Heading: text-2xl for mobile, text-4xl for desktop */}
            <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 leading-tight md:leading-none">
              ( At Present, No e-Auction published )
            </h2>

            {/* Responsive Button/Contact */}
            <div className="inline-block">
              <button className="bg-[#800000] text-white text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-6 rounded-full hover:bg-white hover:text-[#2d0a4e] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                <span className="tracking-widest">6353778329</span>
              </button>
            </div>

            <p className="mt-6 text-white/50 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
              Contact for Official Enquiries
            </p>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-white opacity-[0.03] rounded-full -translate-x-16 -translate-y-16 md:-translate-x-32 md:-translate-y-32" />
          <div className="absolute bottom-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-white opacity-[0.02] rounded-full translate-x-10 translate-y-10" />
        </div>

        {/* --- ADDITIONAL INFO (Optional spacer) --- */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-bold">
            Official Tender Portal — 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TenderPage;