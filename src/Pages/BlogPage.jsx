import React from 'react';
import { BookOpen, ArrowRight, Calendar, Tag } from 'lucide-react';

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
      excerpt: "Implementing eco-friendly loom practices without compromising on material strength or quality."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a]">

      {/* HERO */}
      <section className="relative py-20 bg-[#2d0a4e] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-[#800000] p-3 rounded-full">
              <BookOpen className="text-white" size={24} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
            Blog & Article
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
            “Join and participate in our nation-wise campaign to digitalize the Textile
            Sector, one of the largest sectors of India”
          </p>

          <p className="text-[#f1c40f] font-bold mt-6">
            HC Parekh <br />
            <span className="text-white/70 font-medium">Textile Manufacturer & Entrepreneur • India</span>
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-black text-[#2d0a4e] mb-12 uppercase">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

              <div className="h-60 overflow-hidden">
                <img src={post.img} className="w-full h-full object-cover hover:scale-110 transition duration-700" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                  <Calendar size={14} /> {post.date}
                </div>

                <h3 className="text-xl font-bold text-[#2d0a4e] mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>

                <button className="text-[#800000] font-bold flex items-center gap-2">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;