import React from 'react';
import { Mail, MapPin, GraduationCap, CheckCircle, Send, Share2, Target, FileText } from 'lucide-react';

const CareersPage = () => {
  const jobOpenings = [
  
 
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- PAGE HEADER --- */}
        <header className="mb-16 border-l-8 border-[#800000] pl-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0a4e] uppercase tracking-tighter">
            Join Our <span className="text-[#800000]">Team</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium mt-2 uppercase tracking-widest">
            HC Parekh & Associates • Since 2007
          </p>
        </header>

        {/* --- JOB CARDS (Dono ka structure same hai) --- */}
        <div className="space-y-12">
          <p>Currently No Opening</p>
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[450px]">
              
              {/* Left Side: Identity & Salary (Dark Theme) */}
              <div className="md:w-1/3 bg-[#2d0a4e] p-10 text-white flex flex-col justify-between">
                <div>
                  <span className="text-[#f1c40f] text-xs font-black uppercase tracking-[0.2em]">{job.type}</span>
                  <h2 className="text-4xl font-black mt-4 mb-2 uppercase leading-tight">{job.title}</h2>
                  <div className="flex items-center gap-2 text-white/60 font-bold text-sm">
                    <MapPin size={16} /> {job.location}
                  </div>
                </div>

                <div className="mt-10 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Financial Package</p>
                  <p className="text-3xl font-black text-[#f1c40f]">{job.ctc}</p>
                </div>
              </div>

              {/* Right Side: Content (Light Theme) */}
              <div className="md:w-2/3 p-10 md:p-14 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-[#800000] font-black uppercase text-sm mb-6 flex items-center gap-2 tracking-widest">
                    {job.icon} Essential Requirements
                  </h3>
                  <ul className="space-y-4">
                    {job.criteria.map((item, i) => (
                      <li key={i} className="flex gap-4 text-gray-700 text-lg leading-snug">
                        <CheckCircle className="text-green-600 shrink-0" size={24} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-8 mt-auto flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Application Process</p>
                    <p className="text-gray-900 font-bold text-lg mb-1">Email CV / Quotation to:</p>
                    <a href="mailto:hemant.parekh2012@gmail.com" className="text-[#800000] text-xl font-black underline hover:text-[#2d0a4e] transition-colors">
                      hemant.parekh2012@gmail.com
                    </a>
                  </div>
                  <button className="bg-[#2d0a4e] hover:bg-[#800000] text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter transition-all shadow-xl hover:-translate-y-1">
                    Apply Now
                  </button>
                </div>

                {/* Footnote for each card */}
                <div className="mt-6 text-[11px] text-gray-400 font-bold uppercase italic border-l-2 border-[#f1c40f] pl-3">
                  Note: {job.note}
                </div>
              </div>
            </div>
          ))}
        </div>

 
      </div>
    </div>
  );
};

export default CareersPage;