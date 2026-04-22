import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const CircularPage = () => {
  return (
    // Responsive padding: py-10 for mobile, py-20 for desktop
    // items-start for mobile to reduce top gap, items-center for desktop
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-20 px-4 md:px-6 flex items-start md:items-center justify-center overflow-x-hidden">
      <div className="max-w-4xl w-full text-center mt-8 md:mt-0">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          {/* text-3xl for mobile, text-6xl for desktop */}
          <h1 className="text-3xl md:text-6xl font-black text-[#2d0a4e] uppercase tracking-tight leading-tight">
            Circular <span className="text-[#800000]">Updates</span>
          </h1>
        </motion.div>

        {/* No Circular Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl p-8 md:p-14 border border-slate-100"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#800000]/10 p-4 md:p-5 rounded-full">
              {/* Responsive icon size */}
              <Bell className="text-[#800000] w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4 uppercase">
            Circular
          </h2>

          <p className="text-base md:text-xl font-semibold text-[#800000] bg-[#800000]/10 inline-block px-4 md:px-8 py-3 rounded-full italic">
            ( At present, No Circular )
          </p>

        </motion.div>

        {/* Footer info (Optional but helps balance layout) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]"
        >
          Official Portal Update — 2026
        </motion.p>
      </div>
    </div>
  );
};

export default CircularPage;