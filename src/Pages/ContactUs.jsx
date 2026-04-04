import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, ExternalLink, Leaf } from 'lucide-react';

const ContactUs = () => {
  return (
    // Background ko ek premium cream-gold tint diya hai
    <div className="min-h-screen bg-[#fffcf7] text-[#2d0a4e] font-serif selection:bg-[#2d0a4e] selection:text-white">
      
      {/* --- PREMIUM NAVIGATION --- */}
      {/* Top border with Maroon (#800000) */}
      <nav className="py-6 px-10 flex justify-between items-center bg-white border-b-4 border-[#800000] shadow-md transition-all">
        <div className="flex items-center gap-3">
     
          <div className="text-3xl font-bold tracking-tight text-[#2d0a4e]">
            Parekh Southern Polyfabrics
          </div>
        </div>
        <div className="hidden md:block text-[12px] font-bold uppercase tracking-[0.3em] text-[#800000]">
          The Heritage of Chennai
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: TEXT & INFO */}
          <div className="space-y-12">
            <div className="space-y-6">
              {/* Heading with Purple (#2d0a4e) and Maroon (#800000) mix */}
              <h1 className="text-6xl font-black tracking-tight leading-[1.1] text-[#2d0a4e]">
                Let's weave your <br/> 
                <span className="text-[#800000] font-medium italic">vision together.</span>
              </h1>
              <p className="text-[#2d0a4e]/80 max-w-md leading-relaxed text-lg font-sans">
                Experience the finest textile craftsmanship from Tamil Nadu. Our Chennai headquarters is dedicated to bringing you premium quality and timeless traditions.
              </p>
            </div>

            <div className="space-y-8">
              {/* Contact Cards using Deep Purple & Maroon accents */}
              <div className="flex gap-6 items-center group bg-white p-6 rounded-3xl shadow-sm border border-[#2d0a4e]/5 hover:border-[#800000] hover:shadow-xl hover:shadow-[#800000]/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#2d0a4e] flex items-center justify-center shrink-0 text-white group-hover:bg-[#800000] transition-colors shadow-lg">
                  <MapPin size={26} />
                </div>
                <div>
                  {/* <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-1 text-[#800000]">Headquarters</h4> */}
                  <p className="text-[#2d0a4e] text-xl font-bold">CHENNAI, TN, INDIA</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group bg-white p-6 rounded-3xl shadow-sm border border-[#2d0a4e]/5 hover:border-[#800000] hover:shadow-xl hover:shadow-[#800000]/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#2d0a4e] flex items-center justify-center shrink-0 text-white group-hover:bg-[#800000] transition-colors shadow-lg">
                  <Phone size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-1 text-[#800000]">Direct Line</h4>
                  <p className="text-[#2d0a4e] text-xl font-bold">+91 1111 1111</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group bg-white p-6 rounded-3xl shadow-sm border border-[#2d0a4e]/5 hover:border-[#800000] hover:shadow-xl hover:shadow-[#800000]/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#2d0a4e] flex items-center justify-center shrink-0 text-white group-hover:bg-[#800000] transition-colors shadow-lg">
                  <Mail size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-1 text-[#800000]">Inquiries</h4>
                  <p className="text-[#2d0a4e] text-xl font-bold">info@parekhpolyfabrics.in</p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-10 pt-8 border-t border-[#2d0a4e]/10">
              <a href="#" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[#2d0a4e] hover:text-[#800000] transition-colors">
                <Instagram size={20} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[#2d0a4e] hover:text-[#800000] transition-colors">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM & MAP */}
          <div className="space-y-10">
            <div className="bg-[#2d0a4e] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              {/* Decorative circle for South vibe */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#800000]/20 rounded-full blur-3xl"></div>
              
              <form className="space-y-8 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-10">Inquiry Form</h3>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#800000] transition-colors text-white placeholder:text-white/20 font-sans" placeholder="Rajesh Kumar" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#800000] transition-colors text-white placeholder:text-white/20 font-sans" placeholder="rajesh@chennai.in" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Requirements</label>
                  <textarea rows="4" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#800000] transition-colors text-white placeholder:text-white/20 font-sans" placeholder="How can we help you?"></textarea>
                </div>
                
                <button className="w-full flex items-center justify-center gap-4 py-5 bg-[#800000] text-white font-bold uppercase tracking-[0.25em] text-[14px] hover:bg-white hover:text-[#800000] transition-all duration-300 rounded-2xl shadow-xl active:scale-95">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

         {/* CHENNAI MAP BOX */}
<div className="relative group overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl h-[320px]">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.0689241!3d13.0474878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x6d3e707106521c52!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 grayscale-[0.2] contrast-[1.1]"
  ></iframe>
  
  <a 
    href="https://www.google.com/maps/search/?api=1&query=Chennai+Tamil+Nadu" 
    target="_blank" 
    rel="noopener noreferrer"
    className="absolute bottom-6 left-6 bg-[#2d0a4e] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 text-sm font-bold hover:bg-[#800000] transition-all z-10"
  >
    Navigate to Chennai <ExternalLink size={16} />
  </a>
</div>
          </div>

        </div>
      </main>

  
    </div>
  );
};

export default ContactUs;