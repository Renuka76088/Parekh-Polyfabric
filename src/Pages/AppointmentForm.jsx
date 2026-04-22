import React, { useRef, useState } from 'react';
import { Upload, ChevronRight, Loader2 } from 'lucide-react';
import { appointmentApi } from '../utils/api';

const AppointmentForm = () => {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [formData, setFormData] = useState({
    visitorName: "",
    businessName: "",
    visitorAddress: "",
    mobileNo: "",
    email: "",
    proofType: "Aadhaar Card",
    reasonForVisit: "",
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
        data.append("proofFile", file);
      }

      const response = await appointmentApi.submit(data);

      if (response.data.success) {
        setMessage({ type: 'success', text: 'Appointment booked successfully!' });
        setFormData({
          visitorName: "",
          businessName: "",
          visitorAddress: "",
          mobileNo: "",
          email: "",
          proofType: "Aadhaar Card",
          reasonForVisit: "",
          siteId: "ParekhSouthernPolyfabrics03"
        });
        setFile(null);
        setFileName("");
      } else {
        setMessage({ type: 'error', text: response.data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage({ type: 'error', text: 'Failed to book appointment. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    // Responsive main container: py-10 on mobile, py-20 on desktop
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center py-10 md:py-20 px-4 md:px-6">
      {/* Responsive card: p-6 on mobile, p-10 on desktop */}
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl w-full max-w-2xl border-t-8 border-[#800000]">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-black text-[#2d0a4e] mb-2 uppercase tracking-tighter">
          Visit with Appointment
        </h2>
        <p className="text-gray-500 mb-6 md:mb-8 font-medium italic text-sm md:text-base">
          BOOK APPOINTMENT
        </p>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg text-center font-bold text-sm md:text-base ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>

          {/* Inputs */}
          <InputField
            label="Name of the Visitor"
            name="visitorName"
            value={formData.visitorName}
            onChange={handleChange}
            required
          />
          <InputField
            label="Name of the Business"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
          <InputField
            label="Visitor Address with Pin code"
            name="visitorAddress"
            value={formData.visitorAddress}
            onChange={handleChange}
            required
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

          {/* Upload Proof */}
          <div className="space-y-3">
            <label className="text-xs md:text-sm font-bold uppercase text-[#800000]">
              Upload Residential / Business Proof
            </label>

            <div
              onClick={handleClick}
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#8E735B] transition"
            >
              <Upload className="text-gray-400 mb-2" size={30} />

              {fileName ? (
                <span className="text-green-600 font-semibold text-center text-sm md:text-base break-all">
                  {fileName}
                </span>
              ) : (
                <span className="text-gray-500 text-sm md:text-base">
                  Click to upload file
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

          {/* Dropdown */}
          <div className="space-y-2">
            <label className="text-xs md:text-sm font-bold uppercase text-[#800000]">
              Select Document Type
            </label>
            <select
              name="proofType"
              value={formData.proofType}
              onChange={handleChange}
              required
              className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-[#8E735B] text-sm md:text-base"
            >
              <option value="Aadhaar Card">Aadhaar Card</option>
              <option value="ECI Card">ECI Card</option>
              <option value="DL">DL</option>
            </select>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <label className="text-xs md:text-sm font-bold uppercase text-[#800000]">
              Describe the reason for Visit
            </label>
            <textarea
              name="reasonForVisit"
              value={formData.reasonForVisit}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-[#8E735B] text-sm md:text-base"
              placeholder="Write your purpose of visit..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2d0a4e] text-white py-3 md:py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#800000] transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-xs md:text-sm"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Processing...
              </>
            ) : (
              <>
                Confirm Appointment <ChevronRight size={20} />
              </>
            )}
          </button>

          <div className="text-center pt-6 border-t border-gray-100">
            <a href="mailto:appointment@parekhpolyfabrics.com" className="text-[#800000] font-bold hover:underline text-sm md:text-base break-all">
              appointment@parekhpolyfabrics.com
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

/* Input Component */
const InputField = ({ label, type = "text", name, value, onChange, required }) => (
  <div className="space-y-2">
    <label className="text-xs md:text-sm font-bold uppercase text-[#800000]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-[#8E735B] text-sm md:text-base"
    />
  </div>
);

export default AppointmentForm;