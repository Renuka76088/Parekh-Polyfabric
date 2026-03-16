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
              PAREKH <br /> <span className="text-[#800000]">POLYFABRIC</span>
            </h1>
            <p className="text-2xl font-medium text-gray-600 mt-4">Industrial Textile Manufacturing Sector</p>
          </div>
          
          <div className="md:text-right flex flex-col items-start md:items-end">
            <div className="bg-[#fffdf5] border-2 border-[#C5A059] p-6 rounded-xl">
              <h2 className="text-2xl font-black text-[#2d0a4e] uppercase">H.C. Parekh & Associates</h2>
              <p className="text-lg font-semibold text-[#800000]">Leading Industrial Consultant</p>
              <div className="flex items-center gap-2 mt-2 text-gray-500 font-bold">
                <Award size={20} /> Since 2007
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN NOTICE BOX --- */}
        <div className="bg-white border-2 border-gray-100 shadow-xl rounded-[2rem] overflow-hidden mb-16">
          <div className="bg-[#2d0a4e] p-10 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Expression of Interest (EOI)</h3>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
              We invite sealed tenders from <span className="font-bold text-[#f1c40f]">Registered Tailoring Agencies</span> for high-volume stitching and packing under a 1-year Rate Contract.
            </p>
          </div>

          <div className="p-8 md:p-16">
            {/* WORK SUMMARY */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#800000]">
                  <Factory size={32} />
                  <span className="text-sm font-black uppercase tracking-[0.3em]">Scope of Work</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-[#2d0a4e] leading-tight">
                  Premium Bedsheet Stitching & Packing
                </h4>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stitching and individual sets packing for our Pure Fine Cotton (144 TC) export range.
                </p>
              </div>

              <div className="bg-[#fdf2f2] p-10 rounded-3xl border-2 border-[#800000] flex flex-col justify-center text-center">
                <span className="text-gray-500 font-bold uppercase tracking-widest mb-2">Annual Requirement</span>
                <p className="text-6xl font-black text-[#800000]">30,000</p>
                <p className="text-2xl font-bold text-[#2d0a4e] mt-2">Sets Per EOI</p>
                <p className="text-sm text-gray-500 mt-4 font-medium">(1 Set = 1 Double Bedsheet + 2 Pillowcovers)</p>
              </div>
            </div>

            {/* TECHNICAL SPECS (Bold & Readable) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              {/* Box 1: Sizes */}
              <div className="border-t-4 border-[#2d0a4e] pt-6">
                <h5 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
                   Standard Sizes
                </h5>
                <ul className="space-y-4">
                  <li className="flex justify-between text-lg border-b pb-2"><span>Bedsheet:</span> <strong className="text-[#800000]">90” x 100”</strong></li>
                  <li className="flex justify-between text-lg border-b pb-2"><span>Pillowcover:</span> <strong className="text-[#800000]">18” x 24”</strong></li>
                  <li className="flex justify-between text-lg border-b pb-2"><span>Inner Lid:</span> <strong className="text-[#800000]">6”</strong></li>
                </ul>
              </div>

              {/* Box 2: Quality */}
              <div className="border-t-4 border-[#2d0a4e] pt-6">
                <h5 className="text-xl font-black uppercase mb-6">Stitching Specs</h5>
                <div className="space-y-4 text-lg font-medium text-gray-700">
                  <div className="flex gap-3"><ChevronRight className="text-[#800000] shrink-0" /> Double Lined Simple / Single Zigzag</div>
                  <div className="flex gap-3"><ChevronRight className="text-[#800000] shrink-0" /> Thread: Moon Brand Equivalent</div>
                  <div className="flex gap-3"><ChevronRight className="text-[#800000] shrink-0" /> Tenure: 01 Year Contract</div>
                </div>
              </div>

              {/* Box 3: Packaging */}
              <div className="bg-[#2d0a4e] p-8 rounded-2xl text-white">
                <Package size={40} className="text-[#f1c40f] mb-4" />
                <h5 className="text-xl font-bold mb-4 uppercase">Box Packing</h5>
                <p className="text-3xl font-black text-[#f1c40f]">14x11x1.5“</p>
                <p className="text-sm mt-3 opacity-80 leading-relaxed font-medium">
                  3-Ply Laminated Multi-colour Corrugated Box Packing required for each set.
                </p>
              </div>
            </div>

            {/* TERMS (High Contrast) */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl flex items-start gap-6">
                <Truck size={40} className="text-[#2d0a4e]" />
                <div>
                  <h6 className="font-black text-lg uppercase mb-2">Logistics</h6>
                  <p className="text-lg text-gray-600">Company covers transport till Transporters. Local transport by Agency.</p>
                </div>
              </div>
              <div className="bg-[#800000] p-8 rounded-2xl flex items-start gap-6 text-white shadow-xl">
                <CreditCard size={40} className="text-[#f1c40f]" />
                <div>
                  <h6 className="font-black text-lg uppercase mb-2">Payment Schedule</h6>
                  <p className="text-2xl font-bold">50% Advance</p>
                  <p className="text-lg opacity-80">Remaining 50% on Inspection & L.R.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SCHEDULE (Clean Table) --- */}
        <div className="mb-20">
          <h3 className="text-3xl font-black text-[#2d0a4e] mb-8 uppercase flex items-center gap-4">
             Important Dates
          </h3>
          <div className="overflow-x-auto rounded-xl border-2 border-gray-100">
            <table className="w-full text-left bg-white text-xl">
              <tbody className="divide-y-2 divide-gray-50">
                {[
                  { label: "Commencement of Tender Issuance", date: "-- TBA --" },
                  { label: "Last Date for Submission", date: "-- TBA --" },
                  { label: "Date of Opening Bids", date: "-- TBA --" }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-6 px-8 font-bold text-gray-700">{row.label}</td>
                    <td className="py-6 px-8 text-[#800000] font-black italic">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- CONTACT FOOTER --- */}
        <div className="bg-[#2d0a4e] p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none">Apply In-Person</h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Tender documents are available for collection at our office. 
              Please bring your agency registration documents.
            </p>
            <button className="bg-[#800000] text-white text-xl font-bold px-12 py-6 rounded-full hover:bg-white hover:text-[#2d0a4e] transition-all transform hover:scale-105 shadow-2xl">
              CONTACT CONSULTANT NOW
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