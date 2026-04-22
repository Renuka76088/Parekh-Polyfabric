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
          siteId: "ParekhSouthernPolyfabrics03"
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
    // Responsive padding: py-10 for mobile, py-20 for desktop
    <div className="min-h-screen bg-[#F9F7F3] py-10 md:py-20 px-4 md:px-6">
      {/* Responsive card padding: p-6 for mobile, md:p-12/16 for desktop */}
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 lg:p-16 shadow-lg border border-gray-100 rounded-2xl">

        {/* Header */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          {/* text-3xl for mobile, text-5xl for desktop */}
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: '#800000' }}>
            Trade Enquiry
          </h1>
          <p className="text-lg md:text-xl mt-4 font-medium" style={{ color: '#2d0a4e' }}>
            Parekh Southern Polyfabrics Official Enquiry Portal
          </p>
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg text-center font-bold text-sm md:text-base ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit}>

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

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
            <label className="block text-base md:text-lg font-bold uppercase tracking-wide" style={{ color: '#2d0a4e' }}>
              Upload GST Certificate
            </label>

            <div
              onClick={handleClick}
              className="border-4 border-dashed border-gray-300 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center cursor-pointer hover:border-[#8E735B] transition-colors"
            >
              <Upload size={40} className="text-gray-400 mb-4 md:size-12" />

              {fileName ? (
                <span className="text-green-600 font-semibold text-center break-all">
                  {fileName}
                </span>
              ) : (
                <span className="text-base md:text-lg font-semibold text-gray-600 text-center">
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
          <div className="pt-4 md:pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2d0a4e] py-4 md:py-5 text-base md:text-lg font-bold uppercase text-white rounded-lg hover:bg-[#1f0736] flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
            <a href="mailto:trade-enquiry@parekhpolyfabrics.com" className="text-[#800000] font-bold hover:underline text-sm md:text-base break-all">
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
  <div className={`space-y-2 md:space-y-3 ${className}`}>
    <label className="block text-xs md:text-sm font-bold uppercase tracking-wide text-[#3C2A21]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 md:py-4 px-4 md:px-5 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    />
  </div>
);

/* Select Field */
const SelectField = ({ label, options, name, value, onChange, required }) => (
  <div className="space-y-2 md:space-y-3">
    <label className="block text-xs md:text-sm font-bold uppercase tracking-wide text-[#3C2A21]">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 md:py-4 px-4 md:px-5 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt === "Select Option" ? "" : opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default MembershipForm;