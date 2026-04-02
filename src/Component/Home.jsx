import React, { useState } from "react";
import { Menu, X, Globe, Users, Briefcase, ImageIcon, MessageSquare, FileText, Star, MessageCircle, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import GalleryPage from "../Pages/GalleryPage";
import ManagementPage from "../Pages/ManagementPage";
import MembershipForm from "../Pages/MembershipForm";
import QuotationForm from "../Pages/QuotationForm";
import AuctionForm from "../Pages/AuctionForm";
import TenderPage from "../Pages/TenderPage";
import CareerPage from "../Pages/CareerPage";
import Circular from "../Pages/Circular";
import BlogPage from "../Pages/BlogPage";
import ReviewPage from "../Pages/ReviewPage";
import AppointmentForm from "../Pages/AppointmentForm";
import MediaGallery from "../Pages/MediaGallery";
import TextileAssociates from "../Pages/TextileAssociates";
import ContactUs from "../Pages/ContactUs";
import logo from "../assets/logo.png"
// --- AAPKE COMPONENTS KO YAHAN IMPORT KAREIN ---

const menuItems = [
  { name: 'Home', icon: <Globe size={20}/> },
  { name: 'About Us', icon: <Users size={20}/> },
  { name: 'Product Page', icon: <Briefcase size={20}/> },
  { name: 'Product Photo Gallery', icon: <ImageIcon size={20}/> },
  { name: 'Our Management', icon: <Users size={20}/> },
  { name: 'Trade Enquiry', icon: <MessageSquare size={20}/> },
  { name: 'e-Quotation', icon: <FileText size={20}/> },
  { name: 'e-Auction', icon: <FileText size={20}/> },
  { name: 'Tender & Contract', icon: <FileText size={20}/> },
  { name: 'Career Page', icon: <Briefcase size={20}/> },
  { name: 'Circular', icon: <FileText size={20}/> },
  { name: 'Blog', icon: <MessageSquare size={20}/> },
  { name: 'Customer Review', icon: <Star size={20}/> },
  { name: 'Visit with Appointment', icon: <MessageCircle size={20}/> },
  { name: 'Media Gallery', icon: <ImageIcon size={20}/> },
  { name: 'Our Textile Associates', icon: <MapPin size={20}/> },
  { name: 'Contact Us', icon: <Phone size={20}/> },
];

const Home = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to render the selected component
  const renderContent = () => {
    switch (activePage) {
      case "Home": return <HomePage/>;
      case "About Us": return <AboutPage />;
      case "Product Page": return <ProductPage />;
      case "Product Photo Gallery": return <GalleryPage />;
      case "Our Management": return <ManagementPage />;
      case "Trade Enquiry": return <MembershipForm/>;
      case "e-Quotation": return < QuotationForm />;
      case "e-Auction": return < AuctionForm />;
      case "Tender & Contract": return <TenderPage/>;
      case "Career Page": return <CareerPage/>;
      case "Circular": return <Circular/>;
      case "Blog": return < BlogPage/>;
      case "Customer Review": return <ReviewPage/>;
      case "Visit with Appointment": return <AppointmentForm/>;
      case "Media Gallery": return <MediaGallery/>;
      case "Our Textile Associates": return <TextileAssociates/>;
      case "Contact Us": return < ContactUs/>;
     
      // Baaki components ke liye yahan case add karein
      default:
        return (
          <div className="animate-in fade-in duration-700 py-10 text-left">
            <h1 className="text-4xl font-serif font-bold text-[#1a1a1a]">{activePage}</h1>
            <div className="mt-10 p-20 border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center bg-white/50">
              <p className="text-gray-400 italic text-xl">Content for {activePage} is coming soon...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* MOBILE HEADER (Always Visible on Mobile) */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-[60] p-4 flex justify-between items-center px-6">
        <h1 className="text-xl font-bold font-serif text-[#1a1a1a]">PAREKH</h1>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- SIDEBAR (Fixed UI) --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 overflow-y-auto scrollbar-thin
      `}>
      <div className="p-8">
  {/* Logo Section - Custom Designed */}
  <div className="mb-10 pt-4 md:pt-0">
   <div className="flex items-center gap-3 py-2">
  
  {/* 1. ICON SQUARE (Purple with White 'P') */}
  <div className="w-10 h-10 bg-[#2d0a4e] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
    <span className="text-xl font-black text-white italic">P</span>
  </div>

  {/* 2. TEXT BLOCK (Vertical Stack) */}
  <div className="flex flex-col justify-center leading-none">
    
    {/* LINE 1: PAREKH SOUTHERN */}
    <h1 className="text-[14px] md:text-[16px] font-black uppercase tracking-tight flex items-center gap-1.5">
      <span className="text-[#2d0a4e]">PAREKH</span>
      <span className="text-[#800000]">SOUTHERN</span>
    </h1>
    
    {/* LINE 2: POLYFABRICS (Specifically on the second line) */}
    <h2 className="text-[12px] md:text-[14px] font-black uppercase text-[#800000] tracking-wider mt-0.5">
      POLYFABRICS
    </h2>
    
    {/* LINE 3: LOCATION (Optional, but added for completeness) */}
    <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#2d0a4e]/50 mt-1.5">
      CHENNAI, TN, INDIA
    </p>

  </div>
</div>

    {/* Gold Divider Line (Matches your existing design) */}
    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#C5A059] to-transparent opacity-50"></div>
  </div>



  {/* Navigation Items */}
  <nav>
    <ul className="space-y-1">
      {menuItems.map((item) => (
        <li key={item.name}>
          <button
            onClick={() => {
              setActivePage(item.name);
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 text-left
              ${activePage === item.name 
                ? 'bg-[#F2EFE9] text-[#8B4513] shadow-sm' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-[#C5A059]'}
            `}
          >
            <span className={activePage === item.name ? 'text-[#8B4513]' : 'text-gray-400'}>
              {item.icon}
            </span>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  </nav>
</div>

        <div className="p-8 border-t border-gray-50 bg-gray-50/50">
          <p className="text-[11px] text-gray-400 font-medium italic">Chennai, Tamil Nadu</p>
        </div>
      </aside>

      {/* --- RIGHT CONTENT AREA (Dynamic) --- */}
      <main className="flex-1 md:ml-72 p-4 md:p-10 lg:p-14 min-h-screen relative pt-24 md:pt-10">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
        
        {/* WHATSAPP FLOATING BUTTON */}
        <a 
          href="https://wa.me/919302057620" 
          target="_blank" 
          rel="noreferrer" 
          className="fixed bottom-8 right-8 z-[100] bg-[#25D366] p-4 rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
      </main>

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Home;