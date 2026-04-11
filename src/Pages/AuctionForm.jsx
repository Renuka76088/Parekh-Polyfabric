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
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-3xl">

        {/* TOP NOTICE */}
        <div className="mb-8 text-center bg-[#FAF7F2] border border-dashed border-[#800000]/40 py-4 rounded-xl">
          <p className="text-lg font-bold text-[#800000]">
            At present, No e-Auction published
          </p>
        </div>

        {/* HEADER */}
        <div className="flex justify-between items-start mb-10 border-b border-gray-100 pb-8">
          <div>
            <h1 className="text-5xl font-black text-[#800000]">e-Auction </h1>
            <p className="text-lg mt-3 font-medium text-[#2d0a4e]">
              Registration Form
            </p>
          </div>
          <div className="bg-[#2d0a4e]/5 p-4 rounded-2xl text-[#2d0a4e]">
            <Gavel size={50} />
          </div>
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg text-center font-bold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-10" onSubmit={handleSubmit}>

          {/* BASIC DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <label className="block text-lg font-bold uppercase text-[#800000]">
              Upload GST Certificate
            </label>

            <div
              onClick={handleClick}
              className="border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-[#8E735B] transition-colors"
            >
              <Upload size={40} className="text-gray-400 mb-3" />

              {fileName ? (
                <span className="text-green-600 font-semibold text-center">
                  {fileName}
                </span>
              ) : (
                <span className="text-gray-600 font-medium">
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
            className="w-full bg-[#2d0a4e] py-6 text-xl font-black uppercase text-white rounded-xl hover:bg-[#1a062e] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <Send size={24} /> Submit Registration
              </>
            )}
          </button>

          <div className="text-center pt-8 border-t border-gray-100">
            <a href="mailto:services@parekhpolyfabrics.com" className="text-[#800000] font-bold hover:underline">
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
    <label className="text-sm font-bold uppercase text-[#2d0a4e]">
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

export default AuctionForm;