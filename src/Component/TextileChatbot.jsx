import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const TextileChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { 
      sender: "bot", 
      text: "Hello! Welcome to Parekh Southern Polyfabrics. How can I assist you today?",
      options: [
        { label: "Our Product Range", value: "products" },
        { label: "How to Order?", value: "order" },
        { label: "Office Location", value: "location" }
      ]
    }
  ]);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option) => {
    const userMsg = { sender: "user", text: option.label };
    let botResponse = "";
    let followUpOptions = [];

    switch (option.value) {
      case "products":
        botResponse = "We specialize in premium textiles including Silk, Polyester, Cotton, and industrial Poly-fabrics. You can view our full catalogue on the 'Product Page'.";
        followUpOptions = [{ label: "View Catalogue", value: "link_products" }];
        break;
      case "order":
        botResponse = "To place an order or request a trade quotation, please visit our 'Trade Enquiry' page or contact us directly via phone.";
        followUpOptions = [{ label: "Go to Enquiry", value: "link_enquiry" }];
        break;
      case "location":
        botResponse = "Our main operations are based in Chennai, TN, India. We ship our high-quality fabrics globally.";
        break;
      case "link_products":
        window.location.href = "/product-page";
        return;
      case "link_enquiry":
        window.location.href = "/trade-enquiry";
        return;
      default:
        botResponse = "Thank you for your interest! Anything else I can help with?";
    }

    setMessages(prev => [...prev, userMsg, { sender: "bot", text: botResponse, options: followUpOptions }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    
    // Simple logic for manual input
    let reply = "I'm a textile assistant. For detailed queries, please check our 'Contact Us' page or select an option below.";
    if (input.toLowerCase().includes("hello") || input.toLowerCase().includes("hi")) {
      reply = "Hi there! How can Parekh Southern Polyfabrics help you today?";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: "bot", 
        text: reply,
        options: [
          { label: "Our Products", value: "products" },
          { label: "Trade Enquiry", value: "order" }
        ]
      }]);
    }, 600);
    
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-[1000]">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[320px] md:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-[#2d0a4e] p-5 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <MessageCircle size={20} className="text-[#f1c40f]" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest">Parekh Assistant</h3>
                <p className="text-[10px] text-purple-300 font-bold uppercase">Textile Support | Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#FDFBF7] scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm
                  ${msg.sender === "user" 
                    ? "bg-[#800000] text-white rounded-tr-none" 
                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                  }`}>
                  {msg.text}
                </div>
                
                {/* Options Rendering */}
                {msg.options && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt)}
                        className="bg-white border border-[#2d0a4e]/20 text-[#2d0a4e] px-4 py-2 rounded-full text-[11px] font-bold hover:bg-[#2d0a4e] hover:text-white transition-all flex items-center gap-2 group"
                      >
                        {opt.label}
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-gray-50 border-none outline-none px-4 py-2.5 rounded-full text-xs font-medium focus:ring-1 ring-[#2d0a4e]/20"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-[#2d0a4e] text-white p-2.5 rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center
            ${isOpen ? 'bg-[#800000] rotate-90 text-white' : 'bg-[#2d0a4e] text-white'}`}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
        
        <a 
          href="https://wa.me/916353778329" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#25D366] p-4 rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default TextileChatbot;
