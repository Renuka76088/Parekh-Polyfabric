import React from 'react';
import { BookOpen, ArrowRight, Mail, Calendar, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      category: "Industrial Trends",
      title: "The Rise of High-Tenacity Polyfabrics in 2026",
      date: "March 12, 2026",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      excerpt: "How modern polymer engineering is changing the durability standards for agricultural and industrial textiles across India."
    },
    {
      id: 2,
      category: "Global Trade",
      title: "Exporting Excellence: India’s Textile Footprint",
      date: "March 05, 2026",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      excerpt: "A deep dive into how our management handles logistics across 15+ countries with zero-delay protocols and smart tracking."
    },
    {
      id: 3,
      category: "Manufacturing",
      title: "Sustainability in Large-Scale Fabric Production",
      date: "Feb 28, 2026",
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800",
      excerpt: "Implementing eco-friendly loom practices without compromising on material strength or quality in our CHENNAI, TN units."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1a1a1a]">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center bg-[#2d0a4e] overflow-hidden">
        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="inline-flex items-center gap-2 bg-[#800000] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <BookOpen size={14} /> Official Journal
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
           
            <span style={{color:'white'}}>Articles</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
            Expert insights on high-performance textiles, global logistics, and the industrial legacy of HC Parekh & Associates.
          </p>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        {/* Category Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b-2 border-gray-100 pb-8">
          <div>
            <h2 className="text-3xl font-black text-[#2d0a4e] uppercase tracking-tight">Featured Insights</h2>
            <div className="h-1.5 w-20 bg-[#800000] mt-2"></div>
          </div>
          <div className="flex gap-8 text-sm font-black uppercase tracking-widest">
            <button className="text-[#800000] border-b-2 border-[#800000]">All Articles</button>
            <button className="text-gray-400 hover:text-[#2d0a4e] transition-colors">Manufacturing</button>
            <button className="text-gray-400 hover:text-[#2d0a4e] transition-colors">Exports</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((post) => (
            <article key={post.id} className="group bg-white flex flex-col h-full border-b-4 border-transparent hover:border-[#800000] transition-all duration-500 shadow-sm hover:shadow-2xl rounded-b-2xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#2d0a4e] text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Tag size={12} className="text-[#f1c40f]" /> {post.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar size={14} className="text-[#800000]" /> {post.date}
                </div>
                <h3 className="text-2xl font-black text-[#2d0a4e] mb-4 leading-tight group-hover:text-[#800000] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium" style={{ fontSize: '20px' }}>
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <button className="text-[#2d0a4e] font-black uppercase text-xs tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Article <ArrowRight size={18} className="text-[#800000]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    

   
    </div>
  );
};

export default BlogPage;