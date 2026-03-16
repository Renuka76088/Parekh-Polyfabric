import React from 'react';
import { Gavel, Clock, DollarSign } from 'lucide-react';

const AuctionForm = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-2xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-16 border-b border-gray-200 pb-10">
          <div>
            <h1 className="text-5xl font-black text-[#800000] uppercase tracking-tighter">e-Auction</h1>
            <p className="text-xl text-#2d0a4e mt-4 font-medium" style={{color:'#2d0a4e'}}>Live Bidding for Premium Inventory</p>
          </div>
          <Gavel size={64} className="text-[#2d0a4e]" />
        </div>

        {/* Current Auction Status */}
        <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#3C2A21]/10 mb-12 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-4">
            <Clock size={32} className="text-[#8E735B]" />
            <div>
              <p className="text-sm font-bold uppercase text-gray-500">Time Remaining</p>
              <p className="text-3xl font-black text-[#2d0a4e]">02 : 14 : 45</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DollarSign size={32} className="text-[#8E735B]" />
            <div>
              <p className="text-sm font-bold uppercase text-gray-500">Current Highest Bid</p>
              <p className="text-3xl font-black text-[#2d0a4e]">₹ 4,50,000</p>
            </div>
          </div>
        </div>

        <form className="space-y-10">
          {/* Bidder Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <InputField label="Participant / Company Name" />
            <InputField label="Membership ID" />
          </div>

          {/* Bid Entry */}
          <div className="space-y-4">
            <label className="block text-xl font-bold text-[#2d0a4e] uppercase">Your Bid Amount (INR)</label>
            <input 
              type="number" 
              className="w-full bg-[#FAF7F2] border-none py-6 px-6 text-3xl font-black rounded-lg focus:ring-4 focus:ring-[#8E735B] outline-none" 
              placeholder="Enter Bid Amount..." 
            />
          </div>

          {/* Bidding Rules Visualization */}
          <div className="py-6">
             <p className="text-lg font-bold text-gray-500 mb-6 uppercase tracking-widest text-center">Auction Bid Incremental Rules</p>
             
          </div>

          {/* Submission */}
          <button type="submit" className="w-full bg-[#2d0a4e] py-8 text-2xl font-black uppercase tracking-widest text-white hover:bg-[#8E735B] rounded-lg transition-all shadow-xl">
            Place Bid
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label }) => (
  <div className="space-y-3">
    <label className="block text-lg font-bold text-[#2d0a4e] uppercase tracking-wider">{label}</label>
    <input type="text" className="w-full bg-[#FAF7F2] border-none py-5 px-6 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none" />
  </div>
);

export default AuctionForm;