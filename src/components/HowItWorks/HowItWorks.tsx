import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, Smartphone, LayoutDashboard, Sparkles, ExternalLink,
  MapPin, Zap, Calendar, Users, CalendarCheck, CreditCard, BarChart3, Cloud, Clock 
} from 'lucide-react';

export const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('https://img.youtube.com/vi/GTT7HWXtGRg/maxresdefault.jpg');

  const YOUTUBE_SHORT_ID = 'GTT7HWXtGRg';
  const YOUTUBE_SHORT_URL = 'https://youtube.com/shorts/GTT7HWXtGRg?feature=share';
  const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_SHORT_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  const userSteps = [
    { 
      title: "Discover Nearby Turfs", 
      desc: "Find the best turfs near you with maps, filters, and real-time availability.",
      icon: MapPin 
    },
    { 
      title: "Instant Booking", 
      desc: "Book your favorite slot in seconds with secure online payments.",
      icon: Zap 
    },
    { 
      title: "Manage Your Games", 
      desc: "View upcoming matches, booking history, and digital tickets in one place.",
      icon: Calendar 
    },
    { 
      title: "Join & Build Teams", 
      desc: "Find teammates, join matches, or create your own football community.",
      icon: Users 
    }
  ];
  // const userSteps =[];
  const ownerSteps = [
    { 
      title: "Smart Turf Dashboard", 
      desc: "Manage your turf profile, pricing, facilities, and availability effortlessly.",
      icon: LayoutDashboard 
    },
    { 
      title: "Booking Management", 
      desc: "Accept bookings, prevent conflicts, and keep every slot perfectly organized.",
      icon: CalendarCheck 
    },
    { 
      title: "Payments & Revenue", 
      desc: "Track earnings, receive payments securely, and monitor business performance.",
      icon: CreditCard 
    },
    { 
      title: "Business Analytics", 
      desc: "Understand bookings, peak hours, customer trends, and revenue growth.",
      icon: BarChart3 
    }
  ];

  const coreLogics = [
    { 
      title: "Secure Payments", 
      desc: "Fast, trusted, and secure online transactions.", 
      icon: CreditCard 
    },
    { 
      title: "Cloud Sync", 
      desc: "Your bookings stay updated across every device instantly.", 
      icon: Cloud 
    },
    { 
      title: "24/7 Reliability", 
      desc: "Built to keep your turf business running without interruption.", 
      icon: Clock 
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00A859]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 text-[#00A859] font-extrabold text-xs uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} />
            <span>App Preview & Walkthrough</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            SEE <span className="font-serif italic text-[#00A859] lowercase font-normal">TurfPlay</span> IN ACTION.
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base font-bold leading-relaxed uppercase tracking-[0.2em]">
            CONNECTING <span className="text-[#00A859] italic">PLAYERS</span> AND <span className="text-slate-900 font-extrabold">TURF OWNERS</span>
          </p>
        </div>

        {/* Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto mb-20 group"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00A859]/30 via-[#00A859]/10 to-[#00A859]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-2xl aspect-video flex items-center justify-center">
            {isPlaying ? (
              <iframe
                className="w-full h-full border-0"
                src={YOUTUBE_EMBED_URL}
                title="TurfPlay Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                {/* Video Thumbnail */}
                <img
                  src={thumbnailUrl}
                  alt="TurfPlay Video Thumbnail"
                  onError={() => setThumbnailUrl('https://img.youtube.com/vi/GTT7HWXtGRg/hqdefault.jpg')}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark & Brand Gradient Overlay */}
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group-hover:backdrop-blur-0"
                >
                  {/* Glowing Animated Play Button */}
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-[#00A859]/40 blur-xl animate-pulse" />
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#00A859] text-white flex items-center justify-center shadow-xl shadow-[#00A859]/40 hover:scale-110 hover:bg-[#008746] transition-all duration-300 group-hover:shadow-2xl">
                      <Play size={36} className="ml-1 fill-white" />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col items-center gap-2">
                    <span className="text-xs md:text-sm font-extrabold text-white uppercase tracking-widest bg-slate-900/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-lg">
                      Click to Watch Demo Video
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300 tracking-wider">
                      YouTube Short Preview • TurfPlay Official
                    </span>
                  </div>
                </div>
              </>
            )}

            {/* Quick Action Link to YouTube Shorts */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <a
                href={YOUTUBE_SHORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-[#00A859] text-white text-xs font-bold backdrop-blur-md border border-white/10 shadow-md hover:scale-105 transition-all duration-200"
              >
                <span>YouTube Shorts</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid: Players & Turf Owners */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {/* User Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-[#00A859]/10 border border-[#00A859]/20 px-5 py-2 rounded-full">
              <Smartphone size={16} className="text-[#00A859]" />
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-[0.2em]">For Players</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {userSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-6 cursor-pointer group hover:border-[#00A859]/40 hover:shadow-lg hover:shadow-[#00A859]/10 transition-all duration-300 overflow-hidden bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center mb-4 border border-[#00A859]/20 group-hover:bg-[#00A859] transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#00A859] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-2 uppercase tracking-tight group-hover:text-[#00A859] transition-colors">{s.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Owner Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-[#00A859]/10 border border-[#00A859]/20 px-5 py-2 rounded-full">
              <LayoutDashboard className="text-[#00A859]" size={16} />
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-[0.2em]">For Turf Owners</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {ownerSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-6 cursor-pointer group hover:border-[#00A859]/40 hover:shadow-lg hover:shadow-[#00A859]/10 transition-all duration-300 overflow-hidden bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center mb-4 border border-[#00A859]/20 group-hover:bg-[#00A859] transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#00A859] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-2 uppercase tracking-tight group-hover:text-[#00A859] transition-colors">{s.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Core Intelligence Footer / Ecosystem Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card !p-8 border border-[#00A859]/20 shadow-sm bg-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {coreLogics.map((log, i) => {
              const IconComponent = log.icon;
              return (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 bg-[#00A859]/10 rounded-xl border border-[#00A859]/20 flex-shrink-0 group-hover:bg-[#00A859] transition-all">
                    <IconComponent className="text-[#00A859] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h5 className="text-base font-extrabold text-slate-900 uppercase tracking-tight mb-1 group-hover:text-[#00A859] transition-colors">{log.title}</h5>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{log.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


