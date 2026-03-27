import React from 'react';
import { Gavel, Clock, DollarSign, ShieldCheck, FileText, Download, Building2, User, CreditCard } from 'lucide-react';
import { BiFontSize } from 'react-icons/bi';

const AuctionForm = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 shadow-[0_50px_100px_-20px_rgba(45,10,78,0.08)] border border-gray-100 rounded-3xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12 border-b border-gray-100 pb-10">
          <div>
            <h1 className="text-5xl font-black text-[#800000]">e-Auction</h1>
            <p className="text-xl mt-4 font-medium" style={{color:'#2d0a4e'}}>Live Bidding Registration & Inventory Access</p>
          </div>
          <div className="bg-[#2d0a4e]/5 p-4 rounded-2xl text-[#2d0a4e]">
             <Gavel size={54} />
          </div>
        </div>

        <form className="space-y-12">
          
          {/* SECTION 1: BIDDER IDENTITY */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-l-4 border-[#8E735B] pl-4">
               <Building2 size={20} className="text-[#8E735B]" />
               <h3 className="text-2xl font-black uppercase  text-[#2d0a4e]">Bidder Identity</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{fontSize:'20px'}} >
              <InputField label="Company / Entity Name" placeholder="Enter Full Legal Name" />
              <InputField label="GST Number" placeholder="22AAAAA0000A1Z5" />
            </div>
          </div>

          {/* SECTION 2: AUTHORIZED REPRESENTATIVE */}
          <div className="space-y-8 pt-4">
            <div className="flex items-center gap-3 border-l-4 border-[#8E735B] pl-4">
               <User size={20} className="text-[#8E735B]" />
               <h3 className="text-sm font-black uppercase  text-[#2d0a4e]">Authorized Representative</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Representative Name" placeholder="Authorized Person Name" />
              <InputField label="Business PAN Card" placeholder="ABCDE1234F" />
            </div>
          </div>

          {/* SECTION 3: FINANCIAL DEPOSITS (EMD) */}
          <div className="space-y-8 pt-4">
            <div className="flex items-center gap-3 border-l-4 border-[#8E735B] pl-4">
               <CreditCard size={20} className="text-[#8E735B]" />
               <h3 className="text-sm font-black uppercase text-[#2d0a4e]">Financial Deposits (EMD)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="EMD Amount (INR)" placeholder="e.g. 50,000" type="number" />
              <InputField label="Payment Reference (UTR/Ref No.)" placeholder="Enter Transaction ID" />
            </div>
          </div>

          {/* SECTION 4: AUCTION SELECTION */}
          <div className="space-y-8 pt-4">
            <div className="flex items-center gap-3 border-l-4 border-[#8E735B] pl-4">
               <FileText size={20} className="text-[#8E735B]" />
               <h3 className="text-sm font-black uppercase  text-[#2d0a4e]">Auction Selection</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Auction ID / Lot No." placeholder="e.g. #PR-LOT-101" />
              <div className="space-y-3">
                <label className="block text-[11px] font-black text-[#2d0a4e] uppercase ml-1">Auction Category</label>
                <select className="w-full bg-[#FAF7F2] border border-gray-50 py-5 px-6 text-lg font-bold text-[#4A4238] rounded-xl focus:bg-white focus:ring-2 focus:ring-[#8E735B] outline-none transition-all appearance-none cursor-pointer">
                   <option value="">Select Category</option>
                   <option value="fresh">Fresh Stock Fabric</option>
                   <option value="surplus">Surplus Yarn Lot</option>
                   <option value="machinery">Machinery & Assets</option>
                   <option value="others">Others</option>
                </select>
              </div>
            </div>
          </div>

          {/* IMPORTANT NOTE */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-dashed border-[#8E735B]/30 space-y-4">
            <div className="flex items-center gap-2 text-[#800000]">
                <ShieldCheck size={20} />
                <span className="text-xs font-black uppercase ">Important Participation Note</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed italic">
                By registering, you acknowledge that all bids are legally binding. Failure to fulfill a successful bid will result in the immediate forfeiture of the Earnest Money Deposit (EMD).
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-5 pt-6">
            <button type="submit" className="w-full bg-[#2d0a4e] py-8 text-2xl font-black uppercase  text-white hover:bg-[#1a062e] rounded-2xl transition-all shadow-xl">
                Register for Bidding
            </button>
            
            <button type="button" className="w-full py-5 flex items-center justify-center gap-3 text-[#8E735B] font-bold text-xs uppercase  hover:text-[#2d0a4e] transition-colors border border-transparent hover:border-stone-200 rounded-xl">
                <Download size={18} />
                Download Guidelines
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

// Larger Helper Components
const InputField = ({ label, type = "text", className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    <label className="block text-md font-bold text-[#3C2A21] uppercase ">{label}</label>
    <input type={type} className="w-full bg-[#FAF7F2] border-none py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none" />
  </div>
);

const SelectField = ({ label, options }) => (
  <div className="space-y-3">
    <label className="block text-md font-bold text-[#3C2A21] uppercase ">{label}</label>
    <select className="w-full bg-[#FAF7F2] border-none py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none">
      {options.map(opt => <option key={opt} className="text-lg">{opt}</option>)}
    </select>
  </div>
);



export default AuctionForm;