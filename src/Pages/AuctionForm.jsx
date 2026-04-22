import React, { useRef, useState } from 'react';
import { Gavel, Upload, Loader2, Send } from 'lucide-react';
import { auctionApi } from '../utils/api';

const AuctionForm = () => {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    participantName: "",
    legalBusinessName: "",
    businessAddress: "",
    gstNo: "",
    mobileNo: "",
    email: "",
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

      const response = await auctionApi.submit(data);

      if (response.data.success) {
        setMessage({ type: 'success', text: 'Auction registration submitted successfully!' });
        setFormData({
          participantName: "",
          legalBusinessName: "",
          businessAddress: "",
          gstNo: "",
          mobileNo: "",
          email: "",
          siteId: "ParekhSouthernPolyfabrics03"
        });
        setFile(null);
        setFileName("");
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage({ type: 'error', text: 'Failed to submit registration. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    // Responsive container: py-10 for mobile, py-20 for desktop
    <div className="min-h-screen bg-[#F9F7F3] py-10 md:py-20 px-4 md:px-6">
      {/* Responsive card padding: p-6 for mobile, p-12/16 for desktop */}
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-12 lg:p-16 shadow-lg border border-gray-100 rounded-3xl">

        {/* TOP NOTICE */}
        <div className="mb-8 text-center bg-[#FAF7F2] border border-dashed border-[#800000]/40 py-4 px-2 rounded-xl">
          <p className="text-base md:text-lg font-bold text-[#800000]">
            At present, No e-Auction published
          </p>
        </div>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-10 border-b border-gray-100 pb-8 gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-[#800000]">e-Auction </h1>
            <p className="text-base md:text-lg mt-2 md:mt-3 font-medium text-[#2d0a4e]">
              Registration Form
            </p>
          </div>
          <div className="bg-[#2d0a4e]/5 p-4 rounded-2xl text-[#2d0a4e] shrink-0">
            <Gavel className="w-10 h-10 md:w-12 md:h-12" />
          </div>
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg text-center font-bold text-sm md:text-base ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit}>

          {/* BASIC DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InputField
              label="Name of the Participant"
              name="participantName"
              value={formData.participantName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Legal Name of the Business"
              name="legalBusinessName"
              value={formData.legalBusinessName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Business Address with Pin code"
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
          </div>

          {/* GST UPLOAD */}
          <div className="space-y-4">
            <label className="block text-base md:text-lg font-bold uppercase text-[#800000]">
              Upload GST Certificate
            </label>

            <div
              onClick={handleClick}
              className="border-2 border-dashed border-gray-300 rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center cursor-pointer hover:border-[#8E735B] transition-colors text-center"
            >
              <Upload size={40} className="text-gray-400 mb-3" />

              {fileName ? (
                <span className="text-green-600 font-semibold text-center break-all text-sm md:text-base">
                  {fileName}
                </span>
              ) : (
                <span className="text-gray-600 font-medium text-sm md:text-base">
                  Click to upload GST Certificate
                </span>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.jpg,.png"
                className="hidden"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2d0a4e] py-4 md:py-6 text-lg md:text-xl font-black uppercase text-white rounded-xl hover:bg-[#1a062e] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 md:w-6 md:h-6" /> Submit Registration
              </>
            )}
          </button>

          <div className="text-center pt-8 border-t border-gray-100">
            <a href="mailto:services@parekhpolyfabrics.com" className="text-[#800000] font-bold hover:underline text-sm md:text-base break-all">
              services@parekhpolyfabrics.com
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

/* INPUT COMPONENT */
const InputField = ({ label, type = "text", name, value, onChange, required }) => (
  <div className="space-y-2">
    <label className="text-xs md:text-sm font-bold uppercase text-[#2d0a4e]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none text-sm md:text-base"
    />
  </div>
);

export default AuctionForm;