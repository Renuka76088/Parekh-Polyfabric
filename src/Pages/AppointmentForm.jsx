import React from 'react';
import { Calendar, User, Briefcase, ChevronRight } from 'lucide-react';

const AppointmentForm = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg border-t-8 border-[#800000]">
        
        {/* Header */}
        <h2 className="text-3xl font-black text-[#2d0a4e] mb-2 uppercase tracking-tighter">
          Book Appointment
        </h2>
        <p className="text-gray-500 mb-8 font-medium italic">Parekh Polyfabric — Industrial Consultation</p>
        
        {/* Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <label className="block text-[10px] font-black text-[#800000] uppercase tracking-widest mb-2">Full Name</label>
            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#2d0a4e] transition-all">
              <User size={18} className="text-gray-400 mr-3" />
              <input type="text" className="w-full p-2 outline-none text-lg font-medium" placeholder="Enter your full name" />
            </div>
          </div>
          
          {/* Service Type */}
          <div className="relative">
            <label className="block text-[10px] font-black text-[#800000] uppercase tracking-widest mb-2">Service Type</label>
            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#2d0a4e] transition-all">
              <Briefcase size={18} className="text-gray-400 mr-3" />
              <select className="w-full p-2 outline-none text-lg font-medium bg-transparent">
                <option>Industrial Consultation</option>
                <option>Custom Textile Fitting</option>
                <option>Fabric Quality Inspection</option>
                <option>Bulk Order Inquiry</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="relative">
            <label className="block text-[10px] font-black text-[#800000] uppercase tracking-widest mb-2">Preferred Date</label>
            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#2d0a4e] transition-all">
              <Calendar size={18} className="text-gray-400 mr-3" />
              <input type="date" className="w-full p-2 outline-none text-lg font-medium" />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#2d0a4e] text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-[#800000] transition-all shadow-xl hover:shadow-2xl mt-4 flex items-center justify-center gap-2">
            Confirm Appointment <ChevronRight size={20} />
          </button>
        </form>

    
      </div>
    </div>
  );
};

export default AppointmentForm;