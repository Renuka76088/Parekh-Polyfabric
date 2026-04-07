import { useRef, useState } from "react";
import { Upload } from 'lucide-react';

const MembershipForm = () => {

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
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-2xl">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter" style={{color:'#800000'}}>
            Membership Application
          </h1>
          <p className="text-xl mt-4 font-medium" style={{color:'#2d0a4e'}}>
            Chamber of Textile Official Registration Portal
          </p>
        </div>

        <form className="space-y-10">

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <InputField label="Name of the Trader" />
            <InputField label="Business Name" />

            <InputField 
              label="Business Address with Pin Code" 
              className="md:col-span-2" 
            />

            <InputField label="GST No." />
            <InputField label="Mobile No." type="tel" />

            <InputField label="Email Id" type="email" />

            <SelectField 
              label="Options"
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
          <span className="text-green-600 font-semibold">
            {fileName}
          </span>
        ) : (
          <span className="text-lg font-semibold text-gray-600">
            Click here to upload GST Certificate
          </span>
        )}

        {/* Hidden Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
        />
      </div>
    </div>

          {/* Buttons */}
          <div className="flex gap-6 pt-6">
            <button 
              type="button" 
              className="flex-1 border-2 border-[#2d0a4e] py-5 text-lg font-bold uppercase text-[#2d0a4e] rounded-lg hover:bg-gray-100"
            >
              Preview
            </button>

            <button 
              type="submit" 
              className="flex-1 bg-[#2d0a4e] py-5 text-lg font-bold uppercase text-white rounded-lg hover:bg-[#1f0736]"
            >
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

/* Input Field */
const InputField = ({ label, type = "text", className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    <label className="block text-sm font-bold uppercase tracking-wide text-[#3C2A21]">
      {label}
    </label>
    <input
      type={type}
      className="w-full bg-[#FAF7F2] py-4 px-5 text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none"
    />
  </div>
);

/* Select Field */
const SelectField = ({ label, options }) => (
  <div className="space-y-3">
    <label className="block text-sm font-bold uppercase tracking-wide text-[#3C2A21]">
      {label}
    </label>
    <select className="w-full bg-[#FAF7F2] py-4 px-5 text-base rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none">
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  </div>
);

export default MembershipForm;