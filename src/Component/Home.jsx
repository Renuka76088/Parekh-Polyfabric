import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Globe, Users, Briefcase, ImageIcon, Send, MessageSquare, FileText, Star, MessageCircle, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png"

import TextileChatbot from "./TextileChatbot";

const menuItems = [
  { name: 'Home', path: '/', icon: <Globe size={20} /> },
  { name: 'About Us', path: '/about-us', icon: <Users size={20} /> },
  { name: 'Contact Us', path: '/contact-us', icon: <Phone size={20} /> },
  { name: 'Product Page', path: '/product-page', icon: <Briefcase size={20} /> },
  { name: 'Media Gallery', path: '/product-photo-gallery', icon: <ImageIcon size={20} /> },
  { name: 'Our Management', path: '/our-management', icon: <Users size={20} /> },
  { name: 'Trade Enquiry', path: '/trade-enquiry', icon: <MessageSquare size={20} /> },
  { name: 'e-Quotation', path: '/e-quotation', icon: <FileText size={20} /> },
  { name: 'e-Auction', path: '/e-auction', icon: <FileText size={20} /> },
  { name: 'Tender & Contract', path: '/tender-contract', icon: <FileText size={20} /> },
  { name: 'Career Page', path: '/career-page', icon: <Briefcase size={20} /> },
  { name: 'Circular', path: '/circular', icon: <FileText size={20} /> },
  { name: 'Blog', path: '/blog', icon: <MessageSquare size={20} /> },
  { name: 'Customer Review', path: '/customer-review', icon: <Star size={20} /> },
  { name: 'Visit with Appointment', path: '/visit-appointment', icon: <MessageCircle size={20} /> },
  // { name: 'Media Gallery', path: '/media-gallery', icon: <ImageIcon size={20} /> },
  { name: 'Our Textile Associates', path: '/textile-associates', icon: <MapPin size={20} /> },
];

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#C5A059] selection:text-white overflow-x-hidden">

      {/* MOBILE HEADER (Always Visible on Mobile) */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-[60] p-4 flex justify-between items-center px-6">
        <Link to="/" className="flex items-center gap-2 py-2 cursor-pointer hover:opacity-80 transition-opacity">

          {/* 🔥 Logo Image (no bg) */}
          <img
            src="/7.png"
            alt="Logo"
            className="w-12 h-12 object-contain flex-shrink-0"
          />

          {/* Text */}
          <div className="flex flex-col justify-center leading-none">
            <h1 className="text-[14px] md:text-[16px] font-black uppercase tracking-tight flex items-center gap-1.5">
              <span className="text-[#2d0a4e]">PAREKH</span>
              <span className="text-[#800000]">SOUTHERN</span>
            </h1>

            <h2 className="text-[12px] md:text-[14px] font-black uppercase text-[#800000] tracking-wider mt-0.5">
              POLYFABRICS
            </h2>

            <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#2d0a4e]/50 mt-1.5">
              CHENNAI, TN, INDIA
            </p>
          </div>

        </Link>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 overflow-y-auto scrollbar-thin
      `}>
        <div className="p-8 -mt-14 md:mt-0">
          <div className="mb-10 pt-4 md:pt-0">
            <Link to="/" className="flex items-center gap-2 py-2 cursor-pointer hover:opacity-80 transition-opacity">

              {/* 🔥 Logo Image (No BG) */}
              <img
                src="/7.png"
                alt="Logo"
                className="w-14 h-14 object-contain flex-shrink-0"
              />

              {/* 🔥 Text */}
              <div className="flex flex-col justify-center leading-none">
                <h1 className="text-[14px] md:text-[16px] font-black uppercase tracking-tight flex items-center gap-1">
                  <span className="text-[#2d0a4e]">PAREKH</span>
                  <span className="text-[#800000]">SOUTHERN</span>
                </h1>

                <h2 className="text-[12px] md:text-[14px] font-black uppercase text-[#800000] tracking-wider mt-0.5">
                  POLYFABRICS
                </h2>

                <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#2d0a4e]/50 mt-1">
                  CHENNAI, TN, INDIA
                </p>
              </div>

            </Link>
            <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#C5A059] to-transparent opacity-50"></div>
          </div>

          <nav>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) => `
                      w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 text-left
                      ${isActive
                        ? 'bg-[#F2EFE9] text-[#8B4513] shadow-sm'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-[#C5A059]'}
                    `}
                  >
                    <span className={location.pathname === item.path ? 'text-[#8B4513]' : 'text-gray-400'}>
                      {item.icon}
                    </span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-8 border-t border-gray-50 bg-gray-50/50">
          <p className="text-[11px] text-gray-400 font-medium italic">CHENNAI, TN, INDIA</p>
        </div>
      </aside>

      {/* --- CONTENT AREA (Outlet for nested routes) --- */}
      <main className="flex-1 md:ml-72 p-4 sm:p-6 md:p-10 lg:p-14 min-h-screen relative pt-24 md:pt-10 overflow-x-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>

        {/* INTEGRATED TEXTILE CHATBOT */}
        <TextileChatbot />
      </main>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default Home;