import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowRight, MapPin, Loader2 } from 'lucide-react';
import { careerApi } from '../utils/api';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhSouthernPolyfabrics03";
  const defaultEmail = "career@parekhpolyfabrics.com";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await careerApi.getAll(siteId);
        if (response.data && response.data.success) {
          setJobs(response.data.data.filter(job => job.status === 'Open' || job.status === 'active'));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (job) => {
    const email = job.email || job.contactEmail || defaultEmail;
    window.location.href = `mailto:${email}?subject=Application for ${job.title} - ${siteId}`;
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-12 md:py-24 px-4 md:px-6 font-sans overflow-x-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[9px] md:text-[11px] font-black text-[#800000] uppercase tracking-[0.3em] md:tracking-[0.5em] block mb-4 italic">
            Join Our Transformation
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#2d0a4e] uppercase tracking-tighter leading-none mb-4 md:mb-8">
            Career <span className="text-[#800000]">Opportunities</span>
          </h1>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-[#800000]" size={40} />
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid gap-6 md:gap-8">
            <AnimatePresence>
              {jobs.map((job, idx) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 p-6 md:p-10 border border-slate-50 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-[#800000] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#800000] bg-[#800000]/5 px-3 py-1.5 rounded-full border border-[#800000]/10">
                        {job.type || "Full-Time"}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                        <MapPin size={12} /> {job.location || "Ahmedabad"}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-[#2d0a4e] uppercase tracking-tighter leading-tight group-hover:text-[#800000] transition-colors mb-2 md:mb-3">
                      {job.title}
                    </h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">
                      {job.experience || "Industry Professional"}
                    </p>
                  </div>

                  <button
                    onClick={() => handleApply(job)}
                    className="w-full md:w-auto bg-[#2d0a4e] hover:bg-[#800000] text-white px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all flex items-center justify-center gap-3 md:gap-4 shadow-lg"
                  >
                    Send Application <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* No Vacancy Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-8 md:p-24 border border-slate-50 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden md:block">
              <Briefcase size={200} />
            </div>

            <div className="flex justify-center mb-6 md:mb-10">
              <div className="bg-[#800000]/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]">
                <Briefcase size={40} className="text-[#800000] md:size-14" />
              </div>
            </div>

            <h2 className="text-xl md:text-3xl font-black text-[#2d0a4e] uppercase tracking-tight mb-4 md:mb-6">
              Recruitment Portal <span className="text-[#800000]">Closed</span>
            </h2>

            <p className="text-sm md:text-lg font-black text-[#800000] bg-[#800000]/5 inline-block px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl uppercase tracking-widest italic">
              ( At present, No vacancy )
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;