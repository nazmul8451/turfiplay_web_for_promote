import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Calendar, ShieldCheck, Bell, BarChart3, Users, Trophy } from 'lucide-react';
import mockupHomeImg from '../../assets/images/iphone17_home.webp';
import mockupDetailImg from '../../assets/images/iphone17_detail.webp';
import mockupMapImg from '../../assets/images/iphone17_map.webp';
import appstoreImg from '../../assets/images/sports/appstore.png';
import playstoreImg from '../../assets/images/sports/palystore.png';
import { AppStoreModal } from '../Modals/AppStoreModal';

/* ── tiny canvas particle system ── */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,168,89,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ══════════════════════════════════════════════
   HERO (Match Exact Reference UI System)
══════════════════════════════════════════════ */
export const Hero = () => {
  const [isAppStoreModalOpen, setIsAppStoreModalOpen] = useState(false);

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4FAF6] to-[#FFFFFF]">

      {/* ── LIGHT AMBIENT BACKGROUND GLOW ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[600px] bg-gradient-to-tr from-[#00A859]/12 via-[#00A859]/5 to-transparent blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00A859]/8 blur-[110px] rounded-full" />
        <ParticleCanvas />
      </div>

      {/* ── MAIN HERO CONTENT ── */}
      <div className="relative z-10 container-fluid pt-4 sm:pt-8 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-12 lg:gap-8">

          {/* ── LEFT: TEXT & CTA ── */}
          <div className="flex-1 lg:max-w-[50%]">

            {/* Smart Turf Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#00A859]/10 border border-[#00A859]/20 rounded-full mb-4 sm:mb-6 shadow-sm"
            >
              <span className="text-xs sm:text-sm">⚡</span>
              <span className="text-[11px] sm:text-xs font-black text-[#00A859] tracking-wide">
                এক প্ল্যাটফর্মে—Book. Play. Connect. Manage.
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="tracking-tight leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6">
                <span className="block text-[clamp(1.85rem,5vw,4.2rem)] font-black text-slate-900">
                  খেলা হোক আরও স্মার্ট,
                </span>
                <span className="block text-[clamp(2.05rem,5.4vw,4.6rem)] font-serif italic text-[#00A859] font-normal mt-1">
                  টার্ফ হোক আরও সহজ!
                </span>
              </h1>
            </motion.div>

            {/* Description Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-6 sm:mb-8"
            >
              TurfPlay-এর সাথে খুঁজে নিন আপনার পছন্দের টার্ফ, বুক করুন আপনার স্লট, ম্যানেজ করুন আপনার টার্ফ এবং কানেক্ট করুন আপনার স্পোর্টস কমিউনিটির সাথে।
            </motion.p>

            {/* Dual Player & Owner Quick Focus Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl"
            >
              <a
                href="#how-it-works"
                className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200/80 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 group shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm shadow-blue-500/30">
                  ⚽
                </div>
                <div>
                  <div className="text-xs font-black text-blue-950 flex items-center gap-1.5">
                    <span>খেলোয়াড়দের অ্যাপ</span>
                    <ArrowRight size={12} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-[11px] text-blue-700 font-medium leading-snug">
                    লাইভ ম্যাপে টার্ফ বুকিং ও ইনস্ট্যান্ট লক
                  </div>
                </div>
              </a>

              <a
                href="#how-it-works"
                className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-3 group shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00A859] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm shadow-[#00A859]/30">
                  🏟️
                </div>
                <div>
                  <div className="text-xs font-black text-emerald-950 flex items-center gap-1.5">
                    <span>টার্ফ মালিকদের মোড (মোবাইলেই)</span>
                    <ArrowRight size={12} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium leading-snug">
                    ফোন বুকিং লক ও ক্যাশ অডিট রিপোর্ট
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-8 sm:mb-10"
            >
              {/* Primary Green Download CTA */}
              <a
                href="#waitlist"
                className="group relative overflow-hidden px-6 sm:px-7 py-3 sm:py-3.5 bg-[#00A859] text-white font-extrabold rounded-full transition-all duration-300 shadow-lg shadow-[#00A859]/25 hover:bg-[#008746] hover:shadow-xl hover:shadow-[#00A859]/35 hover:scale-[1.03] text-xs sm:text-sm flex items-center gap-2 sm:gap-2.5"
              >
                <span>এখনই ডাউনলোড করুন</span>
                <Download size={16} className="transform group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* App Store Button */}
              <button
                type="button"
                onClick={() => setIsAppStoreModalOpen(true)}
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-200 hover:border-[#00A859]/40 hover:bg-[#00A859]/5 hover:scale-[1.02] transition-all duration-300 rounded-2xl shadow-sm text-left cursor-pointer"
              >
                <img 
                  src={appstoreImg} 
                  alt="App Store Logo" 
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain" 
                />
                <div className="flex flex-col items-start leading-none pr-1">
                  <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Download on the</span>
                  <span className="text-[11px] sm:text-xs text-slate-900 font-black tracking-tight">App Store</span>
                </div>
              </button>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.turfplay.app&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-200 hover:border-[#00A859]/40 hover:bg-[#00A859]/5 hover:scale-[1.02] transition-all duration-300 rounded-2xl shadow-sm"
              >
                <img 
                  src={playstoreImg} 
                  alt="Google Play Logo" 
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain" 
                />
                <div className="flex flex-col items-start leading-none pr-1">
                  <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">GET IT ON</span>
                  <span className="text-[11px] sm:text-xs text-slate-900 font-black tracking-tight">Google Play</span>
                </div>
              </a>
            </motion.div>

            <AppStoreModal
              isOpen={isAppStoreModalOpen}
              onClose={() => setIsAppStoreModalOpen(false)}
            />

            {/* Trust Badges / Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-4 md:gap-6 pt-2"
            >
              <div className="flex-1 min-w-[125px] sm:flex-initial flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center text-xs sm:text-sm font-black">⚽</span>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight">৫০০+</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-500">টার্ফ এর সাথে</span>
                </div>
              </div>

              <div className="flex-1 min-w-[125px] sm:flex-initial flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center text-xs sm:text-sm font-black">👥</span>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight">১০০K+</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-500">সন্তুষ্ট ব্যবহারকারী</span>
                </div>
              </div>

              <div className="flex-1 min-w-[125px] sm:flex-initial flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center text-xs sm:text-sm font-black">🛡️</span>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight">৯৯.৯%</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-500">সফল বুকিং</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: TRIPLE IPHONE 17 MOCKUP SHOWCASE ── */}
          <div className="flex-1 relative flex items-center justify-center min-h-[360px] sm:min-h-[480px] lg:min-h-[600px] py-2 sm:py-4 overflow-hidden sm:overflow-visible">
            
            {/* Soft Ambient Background Glow Spheres */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] lg:w-[520px] h-[320px] sm:h-[480px] lg:h-[520px] rounded-full bg-gradient-to-tr from-[#00A859]/15 via-[#00A859]/6 to-transparent blur-3xl pointer-events-none" />

            {/* Clear 3D Phone Mockups Fan Layout */}
            <div className="relative w-full max-w-[640px] h-[350px] sm:h-[470px] lg:h-[530px] flex items-center justify-center z-10">

              {/* Left Phone Mockup (Map Screen - High Clarity) */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: -45, rotate: -4, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-10 top-2 sm:top-4 left-2 sm:left-6 md:left-10 lg:left-8 xl:left-12"
              >
                <img
                  src={mockupMapImg}
                  alt="TurfPlay Map Screen Mockup"
                  className="w-[155px] sm:w-[220px] md:w-[255px] xl:w-[280px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.14)] sm:drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer"
                />
              </motion.div>

              {/* Right Phone Mockup (Turf Detail Screen - High Clarity) */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 45, rotate: 4, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-10 top-2 sm:top-4 right-2 sm:right-6 md:right-10 lg:right-8 xl:right-12"
              >
                <img
                  src={mockupDetailImg}
                  alt="TurfPlay Turf Details Screen Mockup"
                  className="w-[155px] sm:w-[220px] md:w-[255px] xl:w-[280px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.14)] sm:drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer"
                />
              </motion.div>

              {/* Center Phone Mockup (Home Screen - Main) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20"
              >
                <img
                  src={mockupHomeImg}
                  alt="TurfPlay App Home Screen Mockup"
                  className="w-[170px] sm:w-[245px] md:w-[275px] xl:w-[300px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,168,89,0.22)] hover:scale-[1.03] transition-transform duration-300"
                />
              </motion.div>

            </div>

          </div>

        </div>

        {/* ── FLOATING 4-CARD FEATURES SYSTEM BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl shadow-[#00A859]/8 border border-slate-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {/* Feature 1 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 mb-0.5">স্মার্ট বুকিং সিস্টেম</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">সহজে স্লট বুকিং এবং ম্যানেজ করুন</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3 sm:gap-4 sm:border-l sm:border-slate-100 sm:pl-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 mb-0.5">সুরক্ষিত পেমেন্ট</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">বিকাশ, নগদ, রকেট সহ একাধিক অপশন</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3 sm:gap-4 lg:border-l lg:border-slate-100 lg:pl-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0">
                <Bell size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 mb-0.5">রিয়েল টাইম নোটিফিকেশন</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">বুকিং এবং পেমেন্ট আপডেট সাথে সাথে পান</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3 sm:gap-4 sm:border-l lg:border-l sm:border-slate-100 sm:pl-6 lg:pl-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0">
                <BarChart3 size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 mb-0.5">রিপোর্ট ও অ্যানালিটিক্স</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">আপনার টার্ফ-এর পারফরম্যান্স ট্র্যাক করুন</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

