import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} // Page upar slide hoga
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Smooth "Lift" effect
      className="fixed inset-0 bg-white flex items-center justify-center z-[9999] overflow-hidden "
    >
      {/* Background Texture (Very subtle for a clean look) */}
      <div className="absolute inset-0 opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="text-center relative z-10">
        
        {/* 1. LOGO BOX (Clear & Sharp) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-[#2d0a4e] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl"
        >
          <span className="text-4xl font-black text-white italic">P</span>
        </motion.div>

        {/* 2. TEXT (Bold & Professional) */}
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black tracking-tighter"
          >
            <span className="text-[#2d0a4e]">PAREKH</span>{" "}
            <span className="text-[#800000]">SOUTHERN</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-black uppercase text-[#800000] tracking-[0.3em]"
          >
            POLYFABRICS
          </motion.h2>
        </div>

        {/* 3. LOADING BAR (Industrial Style) */}
        <div className="w-48 h-1 bg-gray-100 mx-auto mt-10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-[#2d0a4e] to-[#800000]"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mt-6"
        >
          Chennai • India
        </motion.p>
      </div>
    </motion.div>
  );
}