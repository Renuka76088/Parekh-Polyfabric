import React from 'react';
import { Bell, FileText, Info, Calendar, ArrowRightCircle } from 'lucide-react';

const CircularPage = () => {
  const announcements = [

  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1a1a1a]">
      
      {/* --- PREMIUM BANNER --- */}
      <section className="bg-[#2d0a4e] py-20 px-6 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#800000] opacity-10 skew-x-12 transform translate-x-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#800000] p-2 rounded-lg">
              <Bell className="text-white" size={24} />
            </div>
            <span className="text-[#f1c40f] font-black uppercase tracking-[0.3em] text-sm">Official Communication</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
         <span className="text-gray-300 italic">Circulars & Notices</span>
          </h1>
          <p className="text-white/60 text-xl mt-6 max-w-2xl font-light">
            Latest internal updates, compliance protocols, and strategic announcements from Parekh Southern Polyfabric Headquarters.
          </p>
        </div>
      </section>

      {/* --- NOTICES LIST --- */}
      <section className="max-w-6xl mx-auto py-20 px-6">
         <p className="text-black text-xl mt-6 max-w-2xl font-light">
          Currently No Circular Published
          </p>
        <div className="space-y-12">
          {announcements.map((item, index) => (
            <div key={index} className="group bg-white border-l-8 border-[#800000] shadow-xl rounded-r-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-8 md:p-12">
                
                {/* Header: ID & Date */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#2d0a4e]" size={20} />
                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Ref:</span>
                    <span className="text-lg font-bold text-[#2d0a4e]">{item.ref}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 font-bold">
                    <Calendar size={18} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black text-[#2d0a4e] mb-6 uppercase tracking-tight leading-tight">
                  {item.title}
                </h2>

                {/* Content: Large font for 40+ Age Group */}
                <div className="bg-[#fcfcfc] p-8 rounded-2xl border border-gray-50 mb-8">
                  <p className="text-[22px] md:text-[24px] text-gray-700 leading-relaxed font-medium">
                    {item.content}
                  </p>
                </div>

                {/* Footer: Priority & Action */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Status:</span>
                    <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                      item.priority === 'High Priority' ? 'bg-red-100 text-red-700' : 'bg-[#2d0a4e] text-white'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-[#800000] font-black uppercase text-sm group-hover:gap-4 transition-all">
                    Download Official PDF <ArrowRightCircle size={20} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
};

export default CircularPage;