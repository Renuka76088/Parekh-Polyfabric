import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const CircularPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#2d0a4e] uppercase tracking-tight">
            Circular <span className="text-[#800000]">Updates</span>
          </h1>
        </motion.div>

        {/* No Circular Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2rem] shadow-2xl p-10 md:p-14 border border-slate-100"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#800000]/10 p-5 rounded-full">
              <Bell size={40} className="text-[#800000]" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Circular
          </h2>

          <p className="text-lg md:text-xl font-semibold text-[#800000] bg-[#800000]/10 inline-block px-6 py-3 rounded-full">
            ( At present, No Circular )
          </p>


        </motion.div>
      </div>
    </div>
  );
};

export default CircularPage;