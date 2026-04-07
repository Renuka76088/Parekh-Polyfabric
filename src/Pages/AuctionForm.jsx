import React, { useRef, useState } from 'react';
import { Gavel, Upload } from 'lucide-react';

const AuctionForm = () => {
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
            <h1 className="text-5xl font-black text-[#800000]">e-Auction</h1>
            <p className="text-lg mt-3 font-medium text-[#2d0a4e]">
              Registration Form
            </p>
          </div>
          <div className="bg-[#2d0a4e]/5 p-4 rounded-2xl text-[#2d0a4e]">
            <Gavel size={50} />
          </div>
        </div>

        {/* FORM */}
        <form className="space-y-10">

          {/* BASIC DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Name of the Participant" />
            <InputField label="Legal Name of the Business" />
            <InputField label="Business Address with Pin code" />
            <InputField label="GST No." />
            <InputField label="Mobile No." type="tel" />
            <InputField label="Email Id" type="email" />
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
                <span className="text-green-600 font-semibold">
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
            className="w-full bg-[#2d0a4e] py-6 text-xl font-black uppercase text-white rounded-xl hover:bg-[#1a062e] transition-all"
          >
            Submit Registration
          </button>

        </form>
      </div>
    </div>
  );
};

/* INPUT COMPONENT */
const InputField = ({ label, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase text-[#2d0a4e]">
      {label}
    </label>
    <input
      type={type}
      className="w-full bg-[#FAF7F2] py-3 px-4 rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    />
  </div>
);

export default AuctionForm;