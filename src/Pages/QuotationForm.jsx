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
    <div className="min-h-screen bg-[#F9F7F3] py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-16 shadow-lg border border-gray-100 rounded-2xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 border-b border-gray-200 pb-8 md:pb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: '#800000' }}>
              e-Quotation
            </h1>
            <p className="text-lg md:text-xl mt-2 md:mt-4 font-medium" style={{ color: '#2d0a4e' }}>
              Request a Price Quote
            </p>
          </div>
          <FileText size={40} className="text-[#8E735B] hidden md:block" />
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg text-center font-bold text-sm md:text-base ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-6 md:space-y-10" onSubmit={handleSubmit}>

          {/* Business Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
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
            <label className="block text-base md:text-lg font-bold uppercase mb-3" style={{ color: '#800000' }}>
              Particulars of the Products
            </label>
            <textarea
              name="particulars"
              value={formData.particulars}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-[#FAF7F2] py-4 px-5 text-base md:text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
              placeholder="Enter product details, GSM, quantity, color, specifications..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2d0a4e] py-4 md:py-5 text-base md:text-lg font-black uppercase tracking-widest text-white rounded-lg flex items-center justify-center gap-3 disabled:opacity-70 transition-all active:scale-95 shadow-lg hover:bg-[#1a062e]"
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
            <a href="mailto:trade-enquiry@parekhpolyfabrics.com" className="text-[#800000] text-sm md:text-base font-bold hover:underline break-all">
              trade-enquiry@parekhpolyfabrics.com
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

/* Reusable Input - Optimized Spacing */
const InputField = ({ label, type = "text", name, value, onChange, required }) => (
  <div className="space-y-1 md:space-y-2">
    <label className="text-xs md:text-sm font-bold uppercase tracking-wide" style={{ color: '#2d0a4e' }}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 px-4 text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    />
  </div>
);

/* Reusable Select - Optimized Spacing */
const SelectField = ({ label, options, name, value, onChange, required }) => (
  <div className="space-y-1 md:space-y-2">
    <label className="text-xs md:text-sm font-bold uppercase tracking-wide" style={{ color: '#2d0a4e' }}>
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 px-4 text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none appearance-none"
    >
      <option value="">Select Option</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default QuotationForm;