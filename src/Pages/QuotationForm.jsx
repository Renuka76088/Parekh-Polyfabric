import React from 'react';
import { FileText, Send, PlusCircle } from 'lucide-react';

const QuotationForm = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-2xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16 border-b border-gray-200 pb-10">
          <div>
            <h1 className="text-5xl font-black text-[#3C2A21] uppercase tracking-tighter" style={{color:'#800000'}} >e-Quotation</h1>
            <p className="text-xl text-gray-600 mt-4 font-medium"  style={{color:'#2d0a4e'}}>Request a Price Quote for Bulk Requirements</p>
          </div>
          <FileText size={48} className="text-[#8E735B]" />
        </div>

        <form className="space-y-12">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10"  style={{color:'#2d0a4e'}}>
            <InputField label="Full Name / Company Name" />
            <InputField label="Contact Number" type="tel" />
            <InputField label="Email Address" type="email" />
            <InputField label="Shipping Location (City)" />
          </div>

          {/* Requirements Table Header */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#3C2A21] uppercase" style={{color:'#800000'}} >Fabric Requirements</h3>
            
            <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#3C2A21]/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SelectField label="Select Fabric Type" options={["Southern Cotton", "Heritage Silk", "Industrial Poly", "High Nylon", "Organic Linen"]} />
                <InputField label="Quantity (Meters)" type="number" />
                <InputField label="Required GSM" />
              </div>
              <button type="button" className="mt-6 flex items-center gap-2 text-lg font-bold text-[#8E735B] hover:text-[#3C2A21] transition-colors">
                <PlusCircle size={24} /> Add Another Fabric
              </button>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-4">
            <label className="block text-lg font-bold text-[#3C2A21] uppercase" style={{color:'#800000'}} >Special Instructions / Technical Specs</label>
            <textarea 
              rows="4" 
              className="w-full bg-[#FAF7F2] border-none py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
              placeholder="Mention specific finish, color codes, or urgent delivery requirements..."
            ></textarea>
          </div>

          {/* Submission Section */}
          <div className="flex gap-6 pt-6">
            <button type="button" className="flex-1 border-2 border-[#2d0a4e] py-6 text-lg font-black uppercase tracking-widest text-[#2d0a4e] hover:bg-gray-100 rounded-lg">Reset Form</button>
            <button type="submit" className="flex-1 bg-[#2d0a4e] py-6 text-lg font-black uppercase tracking-widest text-white hover:bg-[#2d0a4e] rounded-lg transition-all flex items-center justify-center gap-3">
              <Send size={24} /> Submit Request
            </button>
          </div>
        </form>
      </div>
      
      {/* Visual Reference for Supply Chain Workflow */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <p className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-widest">Our Quotation Workflow</p>
        
      </div>
    </div>
  );
};

const InputField = ({ label, type = "text" }) => (
  <div className="space-y-3">
    <label className="block text-md font-bold text-[#3C2A21] uppercase tracking-wider">{label}</label>
    <input type={type} className="w-full bg-[#FAF7F2] border-none py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none" />
  </div>
);

const SelectField = ({ label, options }) => (
  <div className="space-y-3">
    <label className="block text-md font-bold text-[#3C2A21] uppercase tracking-wider">{label}</label>
    <select className="w-full bg-[#FAF7F2] border-none py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none">
      {options.map(opt => <option key={opt} className="text-lg">{opt}</option>)}
    </select>
  </div>
);

export default QuotationForm;