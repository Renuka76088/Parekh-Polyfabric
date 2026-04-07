import React from 'react';
import { FileText, Send } from 'lucide-react';

const QuotationForm = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-16 border-b border-gray-200 pb-10">
          <div>
            <h1 className="text-5xl font-black tracking-tighter" style={{color:'#800000'}}>
              e-Quotation
            </h1>
            <p className="text-xl mt-4 font-medium" style={{color:'#2d0a4e'}}>
              Request a Price Quote
            </p>
          </div>
          <FileText size={48} className="text-[#8E735B]" />
        </div>

        {/* FORM */}
        <form className="space-y-10">

          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Name of the Trader" />
            <InputField label="Business Name" />
            <InputField label="Business Address with Pin Code" />
            <InputField label="GST No." />
            <InputField label="Mobile No." type="tel" />
            <InputField label="Email id" type="email" />
          </div>

          {/* Options Dropdown */}
          <div>
            <SelectField 
              label="Options"
              options={[
                "Quotation for Finished Polyfabrics",
                "Quotation for Raw Polyfabrics"
              ]}
            />
          </div>

          {/* Product Details */}
          <div>
            <label className="block text-lg font-bold uppercase mb-3" style={{color:'#800000'}}>
              Particulars of the Products
            </label>
            <textarea 
              rows="4"
              className="w-full bg-[#FAF7F2] py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
              placeholder="Enter product details, GSM, quantity, color, specifications..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-6 pt-6">
            <button 
              type="reset" 
              className="flex-1 border-2 border-[#2d0a4e] py-5 text-lg font-black uppercase tracking-widest text-[#2d0a4e] rounded-lg hover:bg-gray-100"
            >
              Reset
            </button>

            <button 
              type="submit" 
              className="flex-1 bg-[#2d0a4e] py-5 text-lg font-black uppercase tracking-widest text-white rounded-lg flex items-center justify-center gap-3"
            >
              <Send size={20} /> Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

/* Reusable Input */
const InputField = ({ label, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase tracking-wide" style={{color:'#2d0a4e'}}>
      {label}
    </label>
    <input 
      type={type} 
      className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    />
  </div>
);

/* Reusable Select */
const SelectField = ({ label, options }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase tracking-wide" style={{color:'#2d0a4e'}}>
      {label}
    </label>
    <select className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none">
      <option value="">Select Option</option>
      {options.map(opt => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default QuotationForm;