import React, { useRef, useState } from 'react';
import { Upload, ChevronRight } from 'lucide-react';

const AppointmentForm = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl border-t-8 border-[#800000]">
        
        {/* Header */}
        <h2 className="text-3xl font-black text-[#2d0a4e] mb-2 uppercase tracking-tighter">
          Book Appointment
        </h2>
        <p className="text-gray-500 mb-8 font-medium italic">
          Visitor Entry Form
        </p>
        
        {/* Form */}
        <form className="space-y-6">

          {/* Inputs */}
          <InputField label="Name of the Visitor" />
          <InputField label="Name of the Business" />
          <InputField label="Visitor Address with Pin code" />
          <InputField label="Mobile No." type="tel" />
          <InputField label="Email Id" type="email" />

          {/* Upload Proof */}
          <div className="space-y-3">
            <label className="text-sm font-bold uppercase text-[#800000]">
              Upload Residential / Business Proof
            </label>

            <div
              onClick={handleClick}
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#8E735B] transition"
            >
              <Upload className="text-gray-400 mb-2" size={30} />

              {fileName ? (
                <span className="text-green-600 font-semibold">
                  {fileName}
                </span>
              ) : (
                <span className="text-gray-500">
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
            <label className="text-sm font-bold uppercase text-[#800000]">
              Select Document Type
            </label>
            <select className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-[#8E735B]">
              <option>Aadhaar Card</option>
              <option>ECI Card</option>
              <option>DL</option>
            </select>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase text-[#800000]">
              Describe the reason for Visit
            </label>
            <textarea
              rows="4"
              className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-[#8E735B]"
              placeholder="Write your purpose of visit..."
            ></textarea>
          </div>

          {/* Submit */}
          <button className="w-full bg-[#2d0a4e] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#800000] transition-all flex items-center justify-center gap-2">
            Confirm Appointment <ChevronRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

/* Input Component */
const InputField = ({ label, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase text-[#800000]">
      {label}
    </label>
    <input
      type={type}
      className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-[#8E735B]"
    />
  </div>
);

export default AppointmentForm;