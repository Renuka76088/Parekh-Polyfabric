import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans text-[17px] selection:bg-[#f3e8df]">
      
      {/* --- CLEAN NAVIGATION STRIP --- */}
      <nav className="py-6 px-10 flex justify-between items-center border-b border-gray-50">
        <div className="text-xl font-bold tracking-tighter uppercase">Parekh<span className="text-stone-400">Fabrics</span></div>
        <div className="text-[13px] font-medium uppercase tracking-widest text-stone-500">Made in India</div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: TEXT & INFO */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight leading-[1.1]">
                Let's discuss your <br/> <span className="text-stone-400">textile needs.</span>
              </h1>
              <p className="text-stone-500 max-w-md leading-relaxed">
                Operating exclusively within India, we bring the finest weaves from the heart of Madhya Pradesh to your doorstep.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">CHENNAI, TN Headquarters</h4>
                  <p className="text-stone-500"><br/>CHENNAI, TN</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Direct Line</h4>
                  <p className="text-stone-500">+91 1111 1111</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Orders & Inquiries</h4>
                  <p className="text-stone-500">info@parekhpolyfabrics.in</p>
                </div>
              </div>
            </div>

            {/* SIMPLE SOCIALS */}
            <div className="flex gap-8 pt-6 border-t border-gray-100">
              <a href="#" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:opacity-50">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:opacity-50">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT: CLEAN FORM & MINI MAP */}
          <div className="space-y-8">
            <div className="bg-[#fcfcfc] border border-gray-100 p-10 rounded-[2rem]">
              <form className="space-y-8">
                <div className="space-y-1">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-stone-400">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-black transition-colors placeholder:text-stone-300" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-stone-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-black transition-colors placeholder:text-stone-300" placeholder="john@example.in" />
                </div>
                <div className="space-y-1">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-stone-400">Project Details</label>
                  <textarea rows="4" className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-black transition-colors placeholder:text-stone-300" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button className="w-full py-5 bg-black text-white font-bold uppercase tracking-[0.2em] text-[13px] hover:bg-stone-800 transition-colors rounded-xl">
                  Send Message
                </button>
              </form>
            </div>

            {/* INTEGRATED MAP VIEW */}
            <div className="relative group overflow-hidden rounded-[2rem] border border-gray-100 h-[250px]">
              {/* Note: This is a visual representation for the code. Use Google Maps API for actual rendering. */}
              <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={32} className="mx-auto mb-2 text-black" />
                  <p className="font-bold text-sm uppercase tracking-widest">View on Google Maps</p>
                  <p className="text-xs text-stone-500 mt-1">CHENNAI, TN</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/Sanwer+Road+Industrial+Area+CHENNAI" 
                target="_blank" 
                className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold">
                  Open Maps <ExternalLink size={14} />
                </div>
              </a>
            </div>
          </div>

        </div>
      </main>
      

    </div>
  );
};

export default ContactUs;