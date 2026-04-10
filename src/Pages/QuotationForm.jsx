import React, { useState } from 'react';
import { FileText, Send, Loader2 } from 'lucide-react';
import { quotationApi } from '../utils/api';

const QuotationForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    traderName: "",
    businessName: "",
    businessAddress: "",
    gstNo: "",
    mobileNo: "",
    email: "",
    quotationType: "",
    particulars: "",
    siteId: "ParekhSouthernPolyfabrics03"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Quotation usually doesn't have file upload in the controller extract logic, 
      // but let's check Quotation.js model... it has gstCertificate?
      // Wait, let me check Quotation.js model again.
      
      // In Quotation.js: gstCertificate: { type: String }
      // But image doesn't show upload. I'll stick to image fields.
      // If backend needs it, I'll send null.

      const response = await quotationApi.submit(formData);
      
      if (response.data.success) {
        setMessage({ type: 'success', text: 'Quotation request submitted successfully!' });
        setFormData({
          traderName: "",
          businessName: "",
          businessAddress: "",
          gstNo: "",
          mobileNo: "",
          email: "",
          quotationType: "",
          particulars: "",
          siteId: "ParekhSouthernPolyfabrics03"
        });
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage({ type: 'error', text: 'Failed to submit quotation. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-16 border-b border-gray-200 pb-10">
          <div>
            <h1 className="text-5xl font-black tracking-tighter" style={{color:'#800000'}}>
              e-Quotation (e-Form)
            </h1>
            <p className="text-xl mt-4 font-medium" style={{color:'#2d0a4e'}}>
              Request a Price Quote
            </p>
          </div>
          <FileText size={48} className="text-[#8E735B]" />
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg text-center font-bold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-10" onSubmit={handleSubmit}>

          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField 
              label="Name of the Trader" 
              name="traderName" 
              value={formData.traderName} 
              onChange={handleChange} 
              required 
            />
            <InputField 
              label="Business Name" 
              name="businessName" 
              value={formData.businessName} 
              onChange={handleChange} 
              required 
            />
            <InputField 
              label="Business Address with Pin Code" 
              name="businessAddress" 
              value={formData.businessAddress} 
              onChange={handleChange} 
              required 
            />
            <InputField 
              label="GST No." 
              name="gstNo" 
              value={formData.gstNo} 
              onChange={handleChange} 
            />
            <InputField 
              label="Mobile No." 
              type="tel" 
              name="mobileNo" 
              value={formData.mobileNo} 
              onChange={handleChange} 
              required 
            />
            <InputField 
              label="Email id" 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Options Dropdown */}
          <div>
            <SelectField 
              label="Options"
              name="quotationType"
              value={formData.quotationType}
              onChange={handleChange}
              required
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
              name="particulars"
              value={formData.particulars}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-[#FAF7F2] py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
              placeholder="Enter product details, GSM, quantity, color, specifications..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-6 pt-6">
            <button 
              type="button" 
              onClick={() => {
                setFormData({
                    traderName: "",
                    businessName: "",
                    businessAddress: "",
                    gstNo: "",
                    mobileNo: "",
                    email: "",
                    quotationType: "",
                    particulars: "",
                    siteId: "ParekhPolyfabric01"
                });
                setMessage({ type: '', text: '' });
              }}
              className="flex-1 border-2 border-[#2d0a4e] py-5 text-lg font-black uppercase tracking-widest text-[#2d0a4e] rounded-lg hover:bg-gray-100"
            >
              Reset
            </button>

            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-[#2d0a4e] py-5 text-lg font-black uppercase tracking-widest text-white rounded-lg flex items-center justify-center gap-3 disabled:opacity-70 transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send size={20} /> Submit
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-8 border-t border-gray-100">
             <a href="mailto:trade-enquiry@parekhpolyfabrics.com" className="text-[#800000] font-bold hover:underline">
               trade-enquiry@parekhpolyfabrics.com
             </a>
          </div>

        </form>
      </div>
    </div>
  );
};

/* Reusable Input */
const InputField = ({ label, type = "text", name, value, onChange, required }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase tracking-wide" style={{color:'#2d0a4e'}}>
      {label}
    </label>
    <input 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    />
  </div>
);

/* Reusable Select */
const SelectField = ({ label, options, name, value, onChange, required }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase tracking-wide" style={{color:'#2d0a4e'}}>
      {label}
    </label>
    <select 
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    >
      <option value="">Select Option</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default QuotationForm;