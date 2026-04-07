import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
<>

     {/* ==================== ABOUT SECTION ==================== */}
        <section className="bg-[#fdf2f2] py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl lg:max-w-6xl mx-auto grid md:grid-cols-2 gap-0 shadow-2xl rounded-xl overflow-hidden bg-white">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-l-8 border-[#800000] text-center md:text-left">
              <span className="bg-[#f1c40f] text-[#2d0a4e] text-xs font-bold px-4 py-1 inline-block mb-6 w-fit rounded">
                
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#2d0a4e]">
                Legacy of <span className="text-[#800000]">Southern</span><br />Polyfabrics
              </h2>
              <p className="text-gray-600 mb-6 text-base sm:text-lg">
                Parekh Southern Polyfabrics is the Trusted Manufacturers & Supplier of the
high standard quality of the southern Polyfabrics from lower range to higher
range at reasonable and low price range with best and premium quality, with
Quality Assurance and a Quality Seal.
              </p>
              <a href="#projects" className="text-[#800000] font-bold border-b-4 border-[#f1c40f] pb-1 hover:text-[#2d0a4e] transition inline-block w-fit mx-auto md:mx-0">
                EXPLORE OUR GALLERY
              </a>
            </div>
            <div className="min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <img src="https://media.istockphoto.com/id/500896694/photo/silk-weaving.jpg?s=612x612&w=0&k=20&c=3DJsVO6Yr219ynPU1CiirR1YIwsMNbeHfSQBE0n-4VE=" alt="Fabric" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
</>
  );
};

export default AboutPage;
