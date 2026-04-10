import { useRef, useState } from "react";
import { Upload, Send, Loader2 } from 'lucide-react';
import { tradeEnquiryApi } from "../utils/api";

const MembershipForm = () => {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    traderName: "",
    businessName: "",
    businessAddress: "",
    gstNo: "",
    mobileNo: "",
    email: "",
    enquiryType: "",
    siteId: "ParekhSouthernPolyfabrics03"
  });

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });
      if (file) {
        data.append("gstCertificate", file);
      }

      const response = await tradeEnquiryApi.submit(data);
      
      if (response.data.success) {
        setMessage({ type: 'success', text: 'Enquiry submitted successfully!' });
        setFormData({
          traderName: "",
          businessName: "",
          businessAddress: "",
          gstNo: "",
          mobileNo: "",
          email: "",
          enquiryType: "",
          siteId: "ParekhPolyfabric01"
        });
        setFile(null);
        setFileName("");
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage({ type: 'error', text: 'Failed to submit enquiry. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-2xl">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter" style={{color:'#800000'}}>
            Trade Enquiry (e-Form)
          </h1>
          <p className="text-xl mt-4 font-medium" style={{color:'#2d0a4e'}}>
            Parekh Southern Polyfabrics Official Enquiry Portal
          </p>
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg text-center font-bold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        <form className="space-y-10" onSubmit={handleSubmit}>

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

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
              className="md:col-span-2" 
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
              label="Email Id" 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <SelectField 
              label="Options"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              required
              options={[
                "Select Option",
                "For Bulk Purchase",
                "For Retail Purchase",
                "For Job Work Contract",
                "Others"
              ]}
            />

          </div>

          {/* GST Upload */}
          <div className="space-y-4">
            <label className="block text-lg font-bold uppercase tracking-wide" style={{color:'#2d0a4e'}}>
              Upload GST Certificate
            </label>

            <div
              onClick={handleClick}
              className="border-4 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-[#8E735B] transition-colors"
            >
              <Upload size={48} className="text-gray-400 mb-4" />

              {fileName ? (
                <span className="text-green-600 font-semibold text-center">
                  {fileName}
                </span>
              ) : (
                <span className="text-lg font-semibold text-gray-600">
                  Click here to upload GST Certificate
                </span>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#2d0a4e] py-5 text-lg font-bold uppercase text-white rounded-lg hover:bg-[#1f0736] flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send size={20} /> Submit Application
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-4 border-t border-gray-100">
             <a href="mailto:trade-enquiry@parekhpolyfabrics.com" className="text-[#800000] font-bold hover:underline">
               trade-enquiry@parekhpolyfabrics.com
             </a>
          </div>

        </form>
      </div>
    </div>
  );
};

/* Input Field */
const InputField = ({ label, type = "text", className = "", name, value, onChange, required }) => (
  <div className={`space-y-3 ${className}`}>
    <label className="block text-sm font-bold uppercase tracking-wide text-[#3C2A21]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-4 px-5 text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    />
  </div>
);

/* Select Field */
const SelectField = ({ label, options, name, value, onChange, required }) => (
  <div className="space-y-3">
    <label className="block text-sm font-bold uppercase tracking-wide text-[#3C2A21]">
      {label}
    </label>
    <select 
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-4 px-5 text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt === "Select Option" ? "" : opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default MembershipForm;