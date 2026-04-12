import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Globe, Users, Briefcase, ImageIcon, Send, MessageSquare, FileText, Star, MessageCircle, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png"

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

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    let botReply = "Sorry, I didn't understand that.";

    if (input.toLowerCase().includes("hello")) {
      botReply = "Hi 👋 Welcome to Parekh Southern Polyfabrics!";
    } else if (input.toLowerCase().includes("product")) {
      botReply = "We deal in fabrics, silk and textile products.";
    } else if (input.toLowerCase().includes("contact")) {
      botReply = "You can contact us via phone or WhatsApp.";
    }

    const botMessage = { sender: "bot", text: botReply };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#C5A059] selection:text-white">

      {/* MOBILE HEADER (Always Visible on Mobile) */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-[60] p-4 flex justify-between items-center px-6">
        <div className="flex items-center gap-3 py-2">
          <div className="w-10 h-10 bg-[#2d0a4e] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-xl font-black text-white italic">P</span>
          </div>
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
        </div>
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
        <div className="p-8">
          <div className="mb-10 pt-4 md:pt-0">
            <div className="flex items-center gap-3 py-2">
              <div className="w-10 h-10 bg-[#2d0a4e] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-xl font-black text-white italic">P</span>
              </div>
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
            </div>
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
      <main className="flex-1 md:ml-72 p-4 md:p-10 lg:p-14 min-h-screen relative pt-24 md:pt-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>

        {/* FLOATING ACTION BUTTONS */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100] items-end">
          {isChatOpen && (
            <div className="mb-2 w-[350px] h-[500px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
              <div className="bg-[#2d0a4e] p-4 text-white flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2d0a4e] rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-none">Support Team</h3>
                    <p className="text-[10px] text-purple-200 mt-1">Online | Typically replies in 5m</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="hover:bg-white/10 p-1 rounded-full transition-colors"
                >
                  <span className="text-xl">✕</span>
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f8f9fa] custom-scrollbar">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${msg.sender === "user" ? "bg-[#2d0a4e] text-white rounded-tr-none" : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 focus-within:ring-2 ring-purple-200 transition-all">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Write a message..."
                    className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                  />
                  <button onClick={handleSend} className="text-[#2d0a4e] hover:scale-110 transition-transform disabled:opacity-50" disabled={!input.trim()}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`p-4 rounded-full text-white shadow-xl hover:scale-110 transition-all duration-300 ${isChatOpen ? 'bg-red-500 rotate-90' : 'bg-[#2d0a4e]'}`}
            >
              {isChatOpen ? <span className="text-xl">✕</span> : <MessageCircle size={28} />}
            </button>
            <a href="https://wa.me/919302057620" target="_blank" rel="noreferrer" className="bg-[#25D366] p-4 rounded-full text-white shadow-xl hover:scale-110 transition-all active:scale-95">
              <FaWhatsapp className="w-7 h-7" />
            </a>
          </div>
        </div>
      </main>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default Home;