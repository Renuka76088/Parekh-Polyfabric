import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Calendar, Tag, Loader2 } from 'lucide-react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhSouthernPolyfabrics03";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.getAll(siteId);
        if (response.data && response.data.success) {
          setBlogs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const staticBlogs = [
    {
      _id: "s1",
      category: "Industrial Trends",
      title: "The Rise of High-Tenacity Polyfabrics",
      date: "March 12, 2026",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      excerpt: "How modern polymer engineering is changing the durability standards for agricultural and industrial textiles across India."
    },
    {
      _id: "s2",
      category: "Global Trade",
      title: "Exporting Excellence: India’s Textile Footprint",
      date: "March 05, 2026",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      excerpt: "A deep dive into how our management handles logistics across 15+ countries with zero-delay protocols and smart tracking."
    },
    {
      _id: "s3",
      category: "Manufacturing",
      title: "Sustainability in Large-Scale Production",
      date: "Feb 28, 2026",
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800",
      excerpt: "Implementing eco-friendly loom practices without compromising on material strength or quality."
    }
  ];

  const displayBlogs = blogs.length > 0 ? blogs : staticBlogs;

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] font-sans">

      {/* HERO */}
      <section className="relative py-24 bg-[#2d0a4e] text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-[#800000] p-4 rounded-3xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <BookOpen className="text-white" size={32} />
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
            Blog & <span className="text-transparent" style={{ color: '#f1c40f' }}>Articles</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed font-bold uppercase tracking-widest max-w-2xl mx-auto mb-10 border-y border-white/10 py-6">
            “Join and participate in our nation-wide campaign to digitalize the Textile
            Sector, one of the largest sectors of India”
          </p>

          <div className="flex flex-col items-center">
            <p className="text-[#f1c40f] font-black uppercase tracking-tighter text-2xl mb-1">HC Parekh</p>
            <span className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">Textile Manufacturer & Entrepreneur • India</span>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[11px] font-black text-[#800000] uppercase tracking-[0.5em] block mb-4 italic">Latest Feed</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#2d0a4e] uppercase tracking-tighter leading-none">
              Industry <br /><span className="text-slate-200">Insights</span>
            </h2>
          </div>
          {!loading && blogs.length > 0 && (
            <div className="bg-[#2d0a4e] text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
              <div className="w-2 h-2 bg-[#f1c40f] rounded-full animate-pulse"></div>
              {blogs.length} Dynamic Items Added
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-slate-100 rounded-[2rem] mb-6"></div>
                <div className="h-4 bg-slate-100 w-1/4 mb-4"></div>
                <div className="h-8 bg-slate-100 w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayBlogs.map((post) => (
              <article key={post._id} className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden border border-slate-50 flex flex-col h-full">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={post.imageUrl || (post.thumbnail ? `${IMAGE_BASE_URL}/${post.thumbnail}` : staticBlogs[0].img)}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    alt={post.title}
                    onError={(e) => { e.target.src = staticBlogs[0].img }}
                  />
                  <div className="absolute top-6 left-6 bg-[#800000] px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-white rounded-lg shadow-xl">
                    {post.category || "Manufacturing"}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">
                    <Calendar size={14} className="text-[#800000]" />
                    {post.date || new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>

                  <h3 className="text-2xl font-black text-[#2d0a4e] mb-6 uppercase tracking-tighter leading-[1.1] group-hover:text-[#800000] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm mb-8 font-medium leading-relaxed italic opacity-80 flex-1">
                    {post.description || post.excerpt || "Discover the latest innovations in high-tenacity polyfabrics and how they are impacting the textile industry."}
                  </p>

                  <button className="text-[#800000] font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 group-hover:gap-6 transition-all">
                    Read Story <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
