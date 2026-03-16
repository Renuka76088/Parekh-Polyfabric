import React from 'react';
import { Upload } from 'lucide-react';

const MembershipForm = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 shadow-lg border border-gray-100 rounded-2xl">
        
        {/* Header - Large & Bold */}
        <div className="mb-16">
          <h1 className="text-5xl font-black text-[#3C2A21] uppercase tracking-tighter" style={{color:'#800000'}} >Membership Application</h1>
          <p className="text-xl text-gray-600 mt-4 font-medium"  style={{color:'#2d0a4e'}}>Chamber of Textile Official Registration Portal</p>
        </div>

        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" >
            <InputField  style={{color:'#2d0a4e'}} label="Name of Authorized Official" />
            <InputField  style={{color:'#2d0a4e'}} label="Code No." />
            <InputField label="Name of the Applicant" />
            <InputField label="Title of the Textile Business" />
            <InputField label="Address of the Business" className="md:col-span-2" />
            <InputField label="Mob. No." type="tel" />
            <InputField label="Email Id" type="email" />
            <InputField label="URL (if any)" />
            
            <SelectField label="Nature of Business" options={["Retailer", "Wholesaler", "Manufacturer", "Others"]} />
            <SelectField label="Category of Business" options={["Proprietorship", "Partnership", "LLP", "Private Limited", "Ltd", "Other"]} />
          </div>

          {/* Large File Upload Area */}
          <div className="space-y-4">
            <label  style={{color:'#2d0a4e'}} className="block text-lg font-bold text-[#3C2A21] uppercase tracking-wide">Upload Required Documents</label>
            <p className="text-md text-gray-500">GST, MSME, Trade License, Labour License, LLP, CIN</p>
            <div className="border-4 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-[#8E735B] transition-colors">
              <Upload size={48} className="text-gray-400 mb-4" />
              <span className="text-lg font-semibold text-gray-600">Click here to upload your documents</span>
            </div>
          </div>

          {/* Undertaking - Bigger Readable Font */}
          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#3C2A21]/10">
            <h4 className="text-lg font-black uppercase text-[#3C2A21] mb-4">Undertaking</h4>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. All the information provided by me and the documents uploaded thereof are true and authentic to the best of my knowledge and belief."
            </p>
          </div>

          {/* Large Buttons */}
          <div className="flex gap-6 pt-6">
            <button type="button" className="flex-1 border-2 border-[#2d0a4e] py-6 text-lg font-black uppercase tracking-widest text-[#2d0a4e] hover:bg-gray-100 rounded-lg">Preview</button>
            <button type="submit" className="flex-1 bg-[#2d0a4e] py-6 text-lg font-black uppercase tracking-widest text-white hover:bg-[#2d0a4e] rounded-lg transition-all">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Larger Helper Components
const InputField = ({ label, type = "text", className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    <label className="block text-md font-bold text-[#3C2A21] uppercase tracking-wider">{label}</label>
    <input type={type} className="w-full bg-[#FAF7F2] border-none py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none" />
  </div>
);

const SelectField = ({ label, options }) => (
  <div className="space-y-3">
    <label className="block text-md font-bold text-[#3C2A21] uppercase tracking-wider">{label}</label>
    <select className="w-full bg-[#FAF7F2] border-none py-4 px-5 text-lg rounded-lg focus:ring-2 focus:ring-[#8E735B] outline-none">
      {options.map(opt => <option key={opt} className="text-lg">{opt}</option>)}
    </select>
  </div>
);

export default MembershipForm;